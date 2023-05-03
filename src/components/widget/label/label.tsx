import { classed } from '@tw-classed/react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Text } from 'components/widget/text'

export const Label = classed.label(LabelPrimitive.Root, '', Text)
