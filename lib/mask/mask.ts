import { FormKitProInput } from '@formkit/pro'
import {
  outer,
  wrapper,
  inner,
  label,
  prefix,
  suffix,
  help,
  messages,
  message,
  icon,
  maskInput,
  overlay,
  overlayLiteral,
  overlayChar,
  overlayEnum,
  overlayParts,
  overlayPlaceholder,
  overlayInner,
} from '../sections/maskSections'
import useMask from '../features/mask'
import maskOverlay from '../features/maskOverlay'

/**
 * Input definition for a mask input.
 * @public
 */
export const mask: FormKitProInput = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    wrapper(
      label('$label'),
      inner(
        icon('prefix'),
        prefix(),
        overlay(
          overlayInner(
            overlayParts(
              overlayPlaceholder('$part.value'),
              overlayLiteral('$part.value'),
              overlayChar('$part.value'),
              overlayEnum('$part.value')
            )
          )
        ),
        maskInput(),
        suffix(),
        icon('suffix')
      )
    ),
    help('$help'),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * An array of extra props to accept for this input.
   */
  props: [
    'allowIncomplete',
    'mask',
    'mode',
    'tokens',
    'showMask',
    'unmaskValue',
    'prefix',
    'suffix',
    'reverse',
    'overlay',
  ],

  /**
   * In the text family of inputs.
   */
  family: 'text',

  /**
   * Additional features that make this input work.
   */
  features: [maskOverlay, useMask],
}
