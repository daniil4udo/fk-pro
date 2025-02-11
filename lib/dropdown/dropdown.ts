import { FormKitProInput } from '@formkit/pro';
import { options, defaultIcon, localize } from '@formkit/inputs';
import {
    outer,
    wrapper,
    inner,
    label,
    prefix,
    selector,
    selection,
    selectionWrapper,
    option,
    removeSelection,
    optionLoading,
    suffix,
    help,
    messages,
    message,
    listbox,
    placeholder,
    selectorSelectionsWrapper,
    selectorSelections,
    selectorSelectionsItem,
    tagsWrapper,
    tags,
    tagWrapper,
    tag,
    icon,
    tagLabel,
    tagLoading,
    truncationCount,
} from '../sections/dropdownSections';
import { $if } from '../compose';
import dropdownFamily from '../features/dropdown-family/index';
import dropdownProps from '../features/dropdown-family/dropdown/props';
import selectorHandlers from '../features/dropdown-family/selector';
import dropdownFeatures from '../features/dropdown-family/dropdown';
import usePopover from '../features/popover';

/**
 * Input definition for a dropdown input.
 * @public
 */
export const dropdown: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        wrapper(
            label('$label'),
            inner(
                icon('prefix'),
                prefix(),
                selector(
                    $if(
                        '$inputStd.length === 0 && $state.loading !== true',
                        placeholder('$placeholder || "placeholder"'),
                        $if(
                            '$multiple !== true',
                            selectionWrapper(
                                $if(
                                    '$state.loading && $selections.length === 0',
                                    optionLoading('$ui.isLoading.value'),
                                    selection(option('$option.label'))
                                )
                            ),
                            $if(
                                '$multiple && $selectionAppearance === "truncate"',
                                selectorSelectionsWrapper(
                                    selectorSelections(
                                        $if(
                                            '$state.loading && $selections.length === 0',
                                            optionLoading(
                                                '$ui.isLoading.value'
                                            ),
                                            selectorSelectionsItem()
                                        )
                                    )
                                ),
                                $if(
                                    '$multiple && $selectionAppearance === "tags"',
                                    tagsWrapper(
                                        tags(
                                            $if(
                                                '$state.loading && $isLoadingOption !== true && $selections.length === 0',
                                                optionLoading(
                                                    '$ui.isLoading.value'
                                                ),
                                                tagWrapper(
                                                    tag(
                                                        $if(
                                                            '$state.loading && $fns.hasOptionLoaderValue($option) || $option.label === undefined',
                                                            tagLoading(
                                                                '$ui.isLoading.value'
                                                            ),
                                                            tagLabel(
                                                                '$option.label'
                                                            )
                                                        ),
                                                        removeSelection(
                                                            icon('close')
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    $if(
                        '$truncationCount && $state.loading !== true',
                        truncationCount('$truncationCount')
                    ),
                    $if('$state.loading', icon('loader')),
                    $if(
                        '$inputStd.length !== 0 && $selectionRemovable',
                        removeSelection(icon('close')),
                        icon('select')
                    )
                ),
                listbox(),
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
     * In the dropdown family of inputs.
     */
    family: 'dropdown',
    /**
     * An array of extra props to accept for this input.
     */
    props: [],
    /**
     * Additional features that make this input work.
     */
    features: [
        defaultIcon('select', 'select'),
        defaultIcon('close', 'close'),
        defaultIcon('selected', 'check'),
        defaultIcon('loader', 'spinner'),
        localize('isLoading'),
        localize('loadMore'),
        localize('remove'),
        options,
        dropdownFamily.bind(
            null,
            dropdownProps,
            selectorHandlers,
            dropdownFeatures
        ),
        usePopover,
    ],
};
