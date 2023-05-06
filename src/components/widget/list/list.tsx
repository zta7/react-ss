import { classed } from '@tw-classed/react'
import { Card } from '../card'
import { Stack } from '../stack'

export const List = classed.div('', Stack, Card, {
  defaultVariants: {
    orientation: 'vertical'
  }
})
