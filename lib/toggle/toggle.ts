import { FormKitProInput } from '@formkit/pro';
import {
    outer,
    wrapper,
    inner,
    prefix,
    input,
    track,
    suffix,
    help,
    messages,
    message,
    thumbWrapper,
    defaultLabel,
    altLabel,
    innerLabel,
    valueLabel,
} from '../sections/toggleSections';
import toggles from '../features/toggles';

/**
 * Input definition for a toggle input.
 * @public
 */
export const toggle: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        wrapper(
            altLabel(),
            inner(
                prefix(),
                input(),
                track(innerLabel(), thumbWrapper()),
                suffix()
            ),
            valueLabel(),
            defaultLabel()
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
        'checked',
        'thumbColorOff',
        'thumbColorOn',
        'iconColorOff',
        'iconColorOn',
        'valueLabelColorOff',
        'valueLabelColorOn',
        'offValue',
        'offValueLabel',
        'onValue',
        'onValueLabel',
        'thumbIcon',
        'trackColorOff',
        'trackColorOn',
        'valueLabelDisplay',
        'altLabelPosition',
    ],

    /**
     * Additional features that make this input work.
     */
    features: [toggles],
};
