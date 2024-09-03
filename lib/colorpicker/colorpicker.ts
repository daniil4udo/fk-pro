import { FormKitProInput } from '@formkit/pro';
import {
    outer,
    wrapper,
    inner,
    label,
    help,
    prefix,
    suffix,
    messages,
    message,
    icon,
    panel,
    panelClose,
    swatchPreview,
    canvasSwatchPreview,
    valueString,
    controlGroup,
    LS,
    canvasLS,
    controlLS,
    hue,
    controlHue,
    canvasHue,
    alpha,
    canvasAlpha,
    controlAlpha,
    preview,
    canvasPreview,
    eyeDropper,
    formatField,
    colorInputGroup,
    rField,
    gField,
    bField,
    aField,
    hField,
    sField,
    lField,
    hexField,
    formatSwitcher,
    swatches,
    swatch,
} from '../sections/colorpickerSections';
import { $if } from '../compose';
import { defaultIcon, options, localize } from '@formkit/inputs';
import colorFeature from '../features/color';
import usePopover from '../features/popover';

/**
 * Input definition for a colorpicker input.
 * @public
 */
export const colorpicker: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        wrapper(
            label('$label'),
            $if('$inline && $help', help('$help')),
            inner(
                $if(
                    '($inline === undefined || $inline === false) && $prefixIcon !== undefined',
                    icon('prefix', 'label')
                ),
                $if('$inline === undefined || $inline === false', prefix()),
                $if(
                    '$inline === undefined || $inline === false',
                    swatchPreview(
                        canvasSwatchPreview(),
                        $if('$showValue', valueString())
                    )
                ),
                $if(
                    '$inline || $expanded)',
                    panel(
                        $if(
                            '$showPanelClose && ($inline === undefined || $inline === false)',
                            panelClose(icon('close'))
                        ),
                        $if(
                            '$panelControls',
                            controlGroup(
                                LS(canvasLS(), controlLS()),
                                preview(canvasPreview()),
                                hue(canvasHue(), controlHue()),
                                alpha(canvasAlpha(), controlAlpha()),
                                $if(
                                    '$eyeDropper && $hasNativeEyeDropper',
                                    eyeDropper(icon('eyeDropper'))
                                )
                            )
                        ),
                        $if(
                            '$panelFormat',
                            formatField(
                                colorInputGroup(
                                    $if(
                                        '$panelActiveFormat === "hex"',
                                        hexField()
                                    ),

                                    $if(
                                        '$panelActiveFormat === "rgba"',
                                        rField()
                                    ),
                                    $if(
                                        '$panelActiveFormat === "rgba"',
                                        gField()
                                    ),
                                    $if(
                                        '$panelActiveFormat === "rgba"',
                                        bField()
                                    ),

                                    $if(
                                        '$panelActiveFormat === "hsla"',
                                        hField()
                                    ),
                                    $if(
                                        '$panelActiveFormat === "hsla"',
                                        sField()
                                    ),
                                    $if(
                                        '$panelActiveFormat === "hsla"',
                                        lField()
                                    ),

                                    $if(
                                        '$panelActiveFormat === "rgba" || $panelActiveFormat === "hsla"',
                                        aField()
                                    )
                                ),
                                formatSwitcher(icon('switch'))
                            )
                        ),
                        $if('$options', swatches(swatch()))
                    )
                ),
                $if('$inline === undefined || $inline === false', suffix()),
                $if(
                    '($inline === undefined || $inline === false) && $suffixIcon !== undefined',
                    icon('suffix')
                )
            ),
            $if(
                '$: ($inline === undefined || $inline === false) && $help',
                help('$help')
            )
        ),
        messages(message('$message.value'))
    ),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: 'input',
    /**
     * In the dropdown family of inputs.
     */
    family: 'text',
    /**
     * An array of extra props to accept for this input.
     */
    props: [
        'disbaled',
        'format',
        'valueFormat',
        'alpha',
        'panelControls',
        'panelFormat',
        'eyeDropper',
        'inline',
        'options',
        'showValue',
        'closeOnSelect',
        'allowPaste',
    ],
    /**
     * Additional features that make this input work.
     */
    features: [
        colorFeature,
        usePopover,
        options,
        defaultIcon('eyeDropper', 'color'),
        defaultIcon('close', 'close'),
        localize('close'),
        localize('next'),
    ],
};
