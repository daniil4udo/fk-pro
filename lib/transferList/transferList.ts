import { FormKitProInput } from '@formkit/pro';
import {
    outer,
    fieldset,
    wrapper,
    help,
    controlLabel,
    legend,
    messages,
    message,
    target,
    targetListItems,
    targetListItem,
    targetOption,
    targetHeader,
    targetHeaderItemCount,
    targetHeaderLabel,
    sourceHeaderLabel,
    source,
    sourceHeader,
    sourceHeaderItemCount,
    sourceControls,
    sourceSearch,
    sourceSearchInput,
    sourceSearchClear,
    sourceListItems,
    sourceListItem,
    sourceOption,
    loadMoreInner,
    sourceLoadMore,
    transferControls,
    transferButtonForward,
    transferButtonBackward,
    transferButtonForwardAll,
    transferButtonBackwardAll,
    icon,
    sourceEmptyMessage,
    targetEmptyMessage,
    emptyMessageInner,
    targetSearch,
    targetSearchInput,
    targetControls,
    targetSearchClear,
} from '../sections/transferListSections';
import { default as transferListFeature } from '../features/transferlist/index';
import { options, defaultIcon, localize } from '@formkit/inputs';
import { $if } from '../compose';

/**
 * Input definition for a transferlist input.
 * @public
 */
export const transferlist: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        fieldset(
            legend('$label'),
            help('$help'),
            wrapper(
                source(
                    sourceHeader(
                        sourceHeaderLabel(),
                        sourceHeaderItemCount(
                            $if(
                                '$optionsLoadingCounter > 0',
                                icon('loader'),
                                '$fns.getSourceItemCount($selectedSourceItems)'
                            )
                        )
                    ),
                    sourceControls(
                        sourceSearch(
                            sourceSearchInput(),
                            sourceSearchClear(icon('close'))
                        )
                    ),
                    sourceListItems(
                        sourceEmptyMessage(
                            emptyMessageInner('$sourceEmptyMessage')
                        ),
                        sourceListItem(
                            $if(
                                '$transferOnSelect !== true && $fns.isSelected($option, $selectedSourceItems)',
                                icon('selected')
                            ),
                            sourceOption('$option.label')
                        ),
                        sourceLoadMore(
                            $if(
                                '$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage',
                                loadMoreInner(
                                    $if('$state.loading', icon('loader')),
                                    '$state.loading && $ui.isLoading.value || $ui.loadMore.value'
                                )
                            )
                        )
                    )
                ),
                transferControls(
                    transferButtonForwardAll(
                        controlLabel('$ui.addAllValues.value'),
                        icon('fastForward')
                    ),
                    transferButtonForward(
                        controlLabel('$ui.addSelectedValues.value'),
                        icon('moveRight')
                    ),
                    transferButtonBackward(
                        controlLabel('$ui.removeSelectedValues.value'),
                        icon('moveLeft')
                    ),
                    transferButtonBackwardAll(
                        controlLabel('$ui.removeAllValues.value'),
                        icon('rewind')
                    )
                ),
                target(
                    targetHeader(
                        targetHeaderLabel(),
                        targetHeaderItemCount(
                            '$fns.getTargetItemCount($selectedTargetItems)'
                        )
                    ),
                    targetControls(
                        targetSearch(
                            targetSearchInput(),
                            targetSearchClear(icon('close'))
                        )
                    ),
                    targetListItems(
                        targetEmptyMessage(
                            $if(
                                '$state.loading !== true',
                                emptyMessageInner('$targetEmptyMessage')
                            )
                        ),
                        targetListItem(
                            $if(
                                '$transferOnSelect !== true && $fns.isSelected($option, $selectedTargetItems)',
                                icon('selected')
                            ),
                            targetOption(
                                $if(
                                    '$fns.optionLoading($option, $optionLoaderValues)',
                                    '$ui.isLoading.value',
                                    '$option.label'
                                )
                            )
                        )
                    )
                )
            ),
            messages(message('$message.value'))
        )
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
    features: [
        defaultIcon('moveRight', 'right'),
        defaultIcon('moveLeft', 'left'),
        defaultIcon('fastForward', 'fastForward'),
        defaultIcon('rewind', 'rewind'),
        defaultIcon('close', 'close'),
        defaultIcon('loader', 'spinner'),
        defaultIcon('selected', 'check'),
        localize('isLoading'),
        localize('loadMore'),
        localize('addAllValues'),
        localize('addSelectedValues'),
        localize('removeSelectedValues'),
        localize('removeAllValues'),
        options,
        transferListFeature,
    ],
};
