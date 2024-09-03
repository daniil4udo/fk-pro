import { FormKitProInput } from '@formkit/pro'
import {
  outer,
  fieldset,
  legend,
  inner,
  empty,
  prefix,
  items,
  item,
  icon,
  content,
  group,
  controls,
  remove,
  removeControl,
  insert,
  insertControl,
  addButton,
  up,
  upControl,
  down,
  downControl,
  suffix,
  help,
  messages,
  message,
  controlLabel,
  dragHandleWrapper,
  dragHandle,
} from '../sections/repeaterSections'
import repeats from '../features/repeats'
import { localize, defaultIcon } from '@formkit/inputs'
import { $if } from '../compose'
import { disablesChildren } from '@formkit/inputs'

/**
 * Input definition for a repeater input.
 * @public
 */
export const repeater: FormKitProInput = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    fieldset(
      legend('$label'),
      help('$help'),

      inner(
        prefix(),
        $if(
          '$value.length === 0',
          $if('$slots.empty', empty()),
          items(
            item(
              dragHandleWrapper(dragHandle(icon('dragHandle'))),
              content(group('$slots.default')),
              controls(
                up(upControl(controlLabel('$ui.moveUp.value'), icon('moveUp'))),
                remove(
                  removeControl(
                    controlLabel('$ui.remove.value'),
                    icon('remove')
                  )
                ),
                insert(
                  insertControl(controlLabel('$ui.add.value'), icon('add'))
                ),
                down(
                  downControl(
                    controlLabel('$ui.moveDown.value'),
                    icon('moveDown')
                  )
                )
              )
            ),
            suffix()
          )
        )
      ),
      addButton('$addLabel || ($ui.add.value + " " + ($label || ""))')
    ),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'list',
  /**
   * An array of extra props to accept for this input.
   */
  props: [
    'min',
    'max',
    'total',
    'upControl',
    'downControl',
    'removeControl',
    'insertControl',
    'addLabel',
    'addButton',
    'addAttrs',
    'draggable',
  ],
  /**
   * Additional features that make this input work.
   */
  features: [
    repeats,
    disablesChildren,
    localize('remove'),
    localize('add'),
    localize('moveUp'),
    localize('moveDown'),
    defaultIcon('dragHandle', 'dragHandle'),
    defaultIcon('remove', 'trash'),
    defaultIcon('add', 'add'),
    defaultIcon('moveUp', 'arrowUp'),
    defaultIcon('moveDown', 'arrowDown'),
  ],
}
