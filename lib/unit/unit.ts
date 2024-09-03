import { FormKitProInput } from '@formkit/pro'
import {
  outer,
  inner,
  input,
  wrapper,
  label,
  help,
  messages,
  message,
  prefix,
  suffix,
  icon,
} from '../sections/unitSections'
import unitFeatures from '../features/unit'

/**
 * Input definition for a toggle group input.
 * @public
 */
export const unit: FormKitProInput = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    wrapper(
      label('$label'),
      inner(icon('prefix'), prefix(), input(), suffix(), icon('suffix'))
    ),
    help('$help'),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',

  family: 'text',

  /**
   * Additional features that make this input work.
   */
  features: [unitFeatures],
}
