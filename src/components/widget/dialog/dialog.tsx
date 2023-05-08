import * as DialogPrimitive from '@radix-ui/react-dialog'
import { styled, VariantProps, CSS } from 'core/stitches.config'
import { forwardRef } from 'react'
import { IconButton } from '../button'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Card } from '../card'

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$colors$blackA10',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
})

const StyledContent = styled(DialogPrimitive.Content, Card, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '50px',
  maxHeight: '80vh',
  padding: '$2'
  // marginTop: '-5vh',
  // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  // willChange: 'transform'
})

type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>
type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS }

const DialogContent = forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </DialogPrimitive.Portal>
))

DialogContent.displayName = 'DialogContent'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close
const DialogTitle = DialogPrimitive.Title
const DialogDescription = DialogPrimitive.Description

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogContent
}
