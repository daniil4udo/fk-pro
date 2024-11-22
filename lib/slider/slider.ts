import { FormKitProInput } from '@formkit/pro';
import { default as sliderFeature } from '../features/slider';
import {
    outer,
    wrapper,
    label,
    sliderInner,
    icon,
    prefix,
    suffix,
    help,
    messages,
    message,
    minValue,
    maxValue,
    track,
    trackWrapper,
    trackInner,
    fill,
    marks,
    mark,
    markLabel,
    handles,
    handleMin,
    handleMax,
    handleMinInner,
    handleMaxInner,
    tooltipMax,
    tooltipMin,
    linkedValues,
    chart,
    chartBar,
} from '../sections/sliderSections';
import { $if } from '../compose';

/**
 * Input definition for a slider input.
 * @public
 */
export const slider: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        wrapper(
            label('$label'),
            help('$help'),
            sliderInner(
                icon('prefix'),
                prefix(),
                track(
                    chart(chartBar()),
                    trackWrapper(
                        trackInner(
                            fill(),
                            marks(mark(markLabel())),
                            handles(
                                handleMin(tooltipMin(), handleMinInner()),
                                handleMax(tooltipMax(), handleMaxInner())
                            )
                        )
                    )
                ),
                suffix(),
                icon('suffix'),
                $if('$showInput && $isMulti === false', maxValue())
            ),
            $if('$showInput && $isMulti', linkedValues(minValue(), maxValue())),
            messages(message('$message.value'))
        )
    ),
    /**
     * The type of node, can be a list, group, or input.
     */
    type: 'input',
    /**
     * In the dropdown family of inputs.
     */
    family: '',
    /**
     * An array of extra props to accept for this input.
     */
    props: [
        'min',
        'max',
        'step',
        'showInput',
        'tooltip',
        'tooltipFormat',
        'inputAttrs',
        'maxInputAttrs',
        'minInputAttrs',
        'marks',
        'markLabels',
        'snapToMarks',
        'chart',
        'scalingFunction',
        'intervals',
    ],
    /**
     * Additional features that make this input work.
     */
    features: [sliderFeature],
};
