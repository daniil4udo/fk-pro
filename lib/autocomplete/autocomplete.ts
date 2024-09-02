import { options, defaultIcon, localize } from '@formkit/inputs';
import { FormKitProInput } from '../index.mjs';
import {
    outer,
    wrapper,
    inner,
    label,
    prefix,
    selection,
    option,
    optionLoading,
    suffix,
    help,
    messages,
    message,
    listbox,
    icon,
    input,
    listboxButton,
    removeSelection,
    selectionWrapper,
    selections,
} from '../sections/autocompleteSections';
import { $if } from '../compose';
import dropdownFamily from '../features/dropdown-family/index';
import autocompleteProps from '../features/dropdown-family/autocomplete/props';
import searchInput from '../features/dropdown-family/searchInput';
import autocompleteFeatures from '../features/dropdown-family/autocomplete';
import usePopover from '../features/popover';

/**
 * Input definition for a autocomplete input.
 * @public
 */
export const autocomplete: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        wrapper(
            label('$label'),
            inner(
                icon('prefix'),
                prefix(),
                input(),
                $if(
                    '$multiple !== true && $selectionAppearance === option && $expanded === false',
                    selections(
                        selectionWrapper(
                            selection(
                                option(
                                    $if(
                                        '$state.loading',
                                        optionLoading('$ui.isLoading.value'),
                                        '$option.label'
                                    )
                                )
                            ),
                            $if(
                                '$state.loading && $isSingleOption !== true && $optionLoaderValues.includes($option.value)',
                                icon('loader')
                            ),
                            $if(
                                '$selectionRemovable && $isSingleOption',
                                removeSelection(icon('close'))
                            )
                        )
                    )
                ),
                $if(
                    '$state.loading && ($isSingleOption !== true || $selections.length === 0)',
                    icon('loader')
                ),
                $if(
                    '$selectionRemovable && $selectionAppearance === "text-input" && $selections.length > 0',
                    removeSelection(icon('close')),
                    $if(
                        '$selectionAppearance === "text-input" || ($selectionAppearance === "option" && $multiple)',
                        listboxButton(icon('select'))
                    )
                ),
                $if(
                    '$isSingleOption && ($inputStd.length === 0 || $selectionRemovable === undefined || ($expanded) || $state.loading || $optionLoaderValues.length > 0)',
                    listboxButton(icon('select'))
                ),
                listbox(),
                suffix(),
                icon('suffix')
            ),
            $if(
                '$multiple && $selectionAppearance === option',
                selections(
                    selectionWrapper(
                        selection(
                            option(
                                $if(
                                    '$state.loading && $isLoadingOption',
                                    optionLoading('$ui.isLoading.value'),
                                    '$option.label'
                                )
                            )
                        ),
                        removeSelection(icon('close'))
                    )
                )
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
        localize('open'),
        localize('close'),
        options,
        dropdownFamily.bind(
            null,
            autocompleteProps,
            searchInput,
            autocompleteFeatures
        ),
        usePopover,
    ],
};
