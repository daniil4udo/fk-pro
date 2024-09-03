import { FormKitProInput } from '@formkit/pro'
import { options as optionsCore } from '@formkit/inputs'
import { $if } from '../compose'
import {
  outer,
  wrapper,
  label,
  singleToggle,
  multiToggle,
  buttonInput,
  options,
  option,
  help,
  messages,
  message,
  prefix, 
  suffix,
  icon,
} from '../sections/togglebuttonsSections'
import togglebuttonsFeatures from '../features/togglebuttons'

/**
 * Input definition for a toggle group input.
 * @public
 */
export const togglebuttons: FormKitProInput = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    $if(
      '$options',
      wrapper(
        label('$label'),
        options(
          option(
            multiToggle(
              $if(
                '$fns.isChecked($option) === true',
                buttonInput(
                  '$slots.default || $slots.on || ' +
                  '$option.onLabel || $option.label'
                ),
                buttonInput(
                  '$slots.default || $slots.off || ' +
                  '$option.offLabel || $option.label'
                )
              ),
            )
          )
        )
      ),
      wrapper(
        $if(
          '$label && ($slots.default || $slots.on || $onLabel)',
          label('$label'),
        ),
        singleToggle(
          icon('prefix'),
          prefix(),
          $if(
            '$_isChecked === true',
            buttonInput(
              '$slots.default || $slots.on || '+
              '$onLabel || $label'
            ),
            buttonInput(
              '$slots.default || $slots.off || '+
              '$offLabel || $label'
            )
          ),
          suffix(),
          icon('suffix'),
        ),
      ),
    ),
    help('$help'),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',

  family: 'button',

  /**
   * An array of extra props to accept for this input.
   */
  props: [
    'options'
  ],

  /**
   * Additional features that make this input work.
   */
  features: [togglebuttonsFeatures, optionsCore],
}
