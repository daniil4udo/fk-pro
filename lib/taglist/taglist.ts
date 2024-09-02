import { options, defaultIcon, localize } from '@formkit/inputs';
import { FormKitProInput } from '../index.mjs';
import {
    outer,
    wrapper,
    inner,
    label,
    prefix,
    tags,
    tagWrapper,
    tagLoading,
    suffix,
    help,
    messages,
    message,
    listbox,
    icon,
    input,
    listboxButton,
    removeSelection,
    tag,
    tagLabel,
} from '../sections/taglistSections';
import { $if } from '../compose';
import dropdownFamily from '../features/dropdown-family/index';
import taglistProps from '../features/dropdown-family/taglist/props';
import searchInput from '../features/dropdown-family/searchInput';
import taglistFeatures from '../features/dropdown-family/taglist/index';
import usePopover from '../features/popover';

/**
 * Input definition for a taglist input.
 * @public
 */
export const taglist: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        wrapper(
            label('$label'),
            inner(
                icon('prefix'),
                prefix(),
                tags(
                    tagWrapper(
                        tag(
                            $if(
                                '$state.loading && $fns.hasOptionLoaderValue && $fns.hasOptionLoaderValue($option) || $option.label === undefined',
                                tagLoading('$ui.isLoading.value'),
                                tagLabel('$option.label')
                            ),
                            removeSelection(icon('close'))
                        )
                    ),
                    input()
                ),
                $if('$state.loading', icon('loader')),
                listboxButton(icon('select')),
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
        options,
        dropdownFamily.bind(null, taglistProps, searchInput, taglistFeatures),
        defaultIcon('select', 'select'),
        defaultIcon('close', 'close'),
        defaultIcon('selected', 'check'),
        defaultIcon('loader', 'spinner'),
        localize('isLoading'),
        localize('loadMore'),
        localize('remove'),
        localize('open'),
        localize('close'),
        usePopover,
    ],
};
