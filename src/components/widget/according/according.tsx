import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { styled, CSS } from 'core/stitches.config'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Button, IconButton } from '../button'
import { FaBeer } from 'react-icons/fa'
import { Item } from '../item'

const StyledAccordion = styled(AccordionPrimitive.Root, {})

const StyledItem = styled(AccordionPrimitive.Item, {
  // borderTop: '1px solid $colors$slate6',
  // '&:last-of-type': {
  //   borderBottom: '1px solid $colors$slate6'
  // }
})

const StyledHeader = styled(AccordionPrimitive.Header, Item, {})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  color: '$hiContrast',
  width: '100%',

  '@hover': {
    '&:hover': {
      backgroundColor: '$slate2'
    }
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)'
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)'
    }
  }
})

type AccordionTriggerPrimitiveProps = ComponentProps<
  typeof AccordionPrimitive.Trigger
>
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS }

const AccordionTrigger = forwardRef<
  ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef} asChild>
      <IconButton size="2">
        <ChevronDownIcon />
      </IconButton>
      {/* {children} */}
    </StyledTrigger>
    {children}
  </StyledHeader>
))

AccordionTrigger.displayName = 'AccordionTrigger'

const StyledContent = styled(AccordionPrimitive.Content, {})

const AccordionItem = StyledItem
const AccordionContent = StyledContent
const Accordion = StyledAccordion

export { AccordionItem, AccordionContent, Accordion, AccordionTrigger }
