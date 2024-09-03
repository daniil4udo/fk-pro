import { defaultIcon } from '@formkit/inputs'
import newRate from '../features/rate'
import { FormKitProInput } from '@formkit/pro'
import {
  outer,
  wrapper,
  label,
  inner,
  onItem,
  offItem,
  itemsWrapper,
  help,
  messages,
  ratingItem,
  input,
  message,
  icon,
  prefix,
  itemLabel,
  itemLabelInner,
  template,
  suffix,
  onItemRow,
  offItemRow,
  onItemWrapper,
  offItemWrapper,
} from '../sections/ratingSections'

/**
 * Input definition for a rating input.
 * @public
 */
export const rating: FormKitProInput = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    wrapper(
      label('$label'),
      inner(
        icon('prefix'),
        prefix(),
        itemsWrapper(
          ratingItem(
            template(
              itemLabel(
                onItemRow(onItemWrapper(onItem())),
                offItemRow(offItemWrapper(offItem())),
                itemLabelInner()
              ),
              input()
            )
          )
        ),
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
  props: [],
  /**
   * Additional features that make this input work.
   */
  features: [newRate, defaultIcon('rating', 'star')],
}

export default rating
