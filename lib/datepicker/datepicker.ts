import { FormKitProInput } from '../index.mjs';
import {
    calendar,
    calendarHeader,
    calendarWeeks,
    day,
    dayButton,
    dayCell,
    daysHeader,
    help,
    icon,
    inner,
    input,
    label,
    message,
    messages,
    month,
    monthButton,
    months,
    monthsHeader,
    next,
    nextLabel,
    openButton,
    outer,
    overlay,
    overlayChar,
    overlayEnum,
    overlayInner,
    overlayLiteral,
    overlayParts,
    overlayPlaceholder,
    panel,
    panelHeader,
    panelWrapper,
    prefix,
    prev,
    prevLabel,
    suffix,
    time,
    timeHeader,
    timeInput,
    week,
    weekDay,
    weekDays,
    wrapper,
    year,
    yearButton,
    years,
    yearsHeader,
    removeSelection,
    panelClose,
} from '../sections/datepickerSections';
import { useCalendar } from '../features/calendar';
import usePopover from '../features/popover';
import { defaultIcon, localize } from '@formkit/inputs';
import maskOverlay from '../features/maskOverlay';

/**
 * Input definition for a datepicker input.
 * @public
 */
export const datepicker: FormKitProInput = {
    /**
     * The actual schema of the input, or a function that returns the schema.
     */
    schema: outer(
        wrapper(
            label('$label'),
            inner(
                icon('prefix'),
                prefix(),
                overlay(
                    overlayInner(
                        overlayParts(
                            overlayPlaceholder('$part.value'),
                            overlayLiteral('$part.value'),
                            overlayChar('$part.value'),
                            overlayEnum('$part.value')
                        )
                    )
                ),
                input(),
                panelWrapper(
                    panelHeader(
                        prev(prevLabel('$ui.prev.value'), icon('prev')),
                        yearsHeader('$decade'),
                        monthsHeader(yearButton()),
                        daysHeader(monthButton(), yearButton()),
                        timeHeader(monthButton(), dayButton(), yearButton()),
                        next(nextLabel('$ui.next.value'), icon('next')),
                        panelClose(icon('close'))
                    ),
                    panel(
                        years(year('$fns.format($year, $yearFormat)')),
                        months(month('$fns.format($month, $monthFormat)')),
                        calendar(
                            calendarHeader(
                                weekDays(
                                    weekDay('$fns.format($day, $weekdayFormat)')
                                )
                            ),
                            calendarWeeks(
                                week(
                                    dayCell(
                                        day('$fns.format($day, $dateFormat)')
                                    )
                                )
                            )
                        ),
                        time(timeInput())
                    )
                ),
                removeSelection(icon('clear')),
                openButton(icon('calendar')),
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
     * In the datepicker family of inputs.
     */
    family: 'text',
    /**
     * An array of extra props to accept for this input.
     */
    props: [
        'dateFormat',
        'dayButtonFormat',
        'format',
        'monthButtonFormat',
        'monthFormat',
        'overlay',
        'pickerOnly',
        'showMonths',
        'showPagination',
        'weekStart',
        'weekdayFormat',
        'yearFormat',
        'years',
    ],
    /**
     * Additional features that make this input work.
     */
    features: [
        maskOverlay,
        useCalendar,
        usePopover,
        localize('next'),
        localize('prev'),
        localize('changeDate'),
        localize('chooseDate'),
        defaultIcon('close', 'close'),
        defaultIcon('next', 'right'),
        defaultIcon('clear', 'close'),
        defaultIcon('prev', 'left'),
        defaultIcon('calendar', 'date'),
    ],
};
