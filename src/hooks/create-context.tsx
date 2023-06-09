/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMemo,
  createContext as createReactContext,
  useContext as useReactContext,
  ReactNode
} from 'react'

function createContext<ContextValueType extends object | null>(
  rootComponentName: string,
  defaultContext?: ContextValueType
) {
  const Context = createReactContext<ContextValueType | undefined>(
    defaultContext
  )

  function Provider(props: ContextValueType & { children: ReactNode }) {
    const { children, ...context } = props
    // Only re-memoize when prop values change
    const value = useMemo(
      () => context,
      Object.values(context)
    ) as ContextValueType
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  function useContext(consumerName: string) {
    const context = useReactContext(Context)
    if (context) return context
    if (defaultContext !== undefined) return defaultContext
    // if a defaultContext wasn't specified, it's a required context.
    throw new Error(
      `\`${consumerName}\` must be used within \`${rootComponentName}\``
    )
  }

  Provider.displayName = rootComponentName + 'Provider'
  return [Provider, useContext] as const
}

type Scope<C = any> = { [scopeName: string]: React.Context<C>[] } | undefined
type ScopeHook = (scope: Scope) => { [__scopeProp: string]: Scope }
interface CreateScope {
  scopeName: string
  (): ScopeHook
}

function createContextScope(
  scopeName: string,
  createContextScopeDeps: CreateScope[] = []
) {
  let defaultContexts: any[] = []

  function createContext<ContextValueType extends object | null>(
    rootComponentName: string,
    defaultContext?: ContextValueType
  ) {
    const BaseContext = createReactContext<ContextValueType | undefined>(
      defaultContext
    )
    const index = defaultContexts.length
    defaultContexts = [...defaultContexts, defaultContext]

    function Provider(
      props: ContextValueType & {
        scope: Scope<ContextValueType>
        children: React.ReactNode
      }
    ) {
      const { scope, children, ...context } = props
      const Context = scope?.[scopeName][index] || BaseContext
      // Only re-memoize when prop values change
      const value = useMemo(
        () => context,
        Object.values(context)
      ) as ContextValueType
      return <Context.Provider value={value}>{children}</Context.Provider>
    }

    function useContext(
      consumerName: string,
      scope: Scope<ContextValueType | undefined>
    ) {
      const Context = scope?.[scopeName][index] || BaseContext
      const context = useReactContext(Context)
      if (context) return context
      if (defaultContext !== undefined) return defaultContext
      // if a defaultContext wasn't specified, it's a required context.
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``
      )
    }

    Provider.displayName = rootComponentName + 'Provider'
    return [Provider, useContext] as const
  }

  const createScope: CreateScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return createReactContext(defaultContext)
    })
    return function useScope(scope: Scope) {
      const contexts = scope?.[scopeName] || scopeContexts
      return useMemo(
        () => ({
          [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts }
        }),
        [scope, contexts]
      )
    }
  }

  createScope.scopeName = scopeName
  return [
    createContext,
    composeContextScopes(createScope, ...createContextScopeDeps)
  ] as const
}

function composeContextScopes(...scopes: CreateScope[]) {
  const baseScope = scopes[0]
  if (scopes.length === 1) return baseScope

  const createScope: CreateScope = () => {
    const scopeHooks = scopes.map((createScope) => ({
      useScope: createScope(),
      scopeName: createScope.scopeName
    }))

    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce(
        (nextScopes, { useScope, scopeName }) => {
          // We are calling a hook inside a callback which React warns against to avoid inconsistent
          // renders, however, scoping doesn't have render side effects so we ignore the rule.
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scopeProps = useScope(overrideScopes)
          const currentScope = scopeProps[`__scope${scopeName}`]
          return { ...nextScopes, ...currentScope }
        },
        {}
      )

      return useMemo(
        () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
        [nextScopes]
      )
    }
  }

  createScope.scopeName = baseScope.scopeName
  return createScope
}

export { createContext, createContextScope }
export type { CreateScope, Scope }
