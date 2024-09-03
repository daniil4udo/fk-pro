import type { AllReals } from '@formkit/inputs';
import type { FormatStyleObj } from '@formkit/tempo';
import { FormKitExtendableSchemaRoot } from '@formkit/core';
import type { FormKitFrameworkContext } from '@formkit/core';
import type { FormKitInputs } from '@formkit/inputs';
import type { FormKitMessage } from '@formkit/core';
import type { FormKitNode } from '@formkit/core';
import type { FormKitOptionsItem } from '@formkit/inputs';
import type { FormKitOptionsProp } from '@formkit/inputs';
import type { FormKitOptionsPropWithGroups } from '@formkit/inputs';
import type { FormKitOptionsValue } from '@formkit/inputs';
import { FormKitPlugin } from '@formkit/core';
import { FormKitSchemaExtendableSection } from '@formkit/inputs';
import { FormKitSchemaNode } from '@formkit/core';
import type { FormKitSlotData } from '@formkit/inputs';
import { FormKitTypeDefinition } from '@formkit/core';

/**
 * Creates a FormKitPro conditional section.
 * @param condition - A schema condition to apply to a section.
 * @param then - The section that applies if the condition is true.
 * @param otherwise - (else) The section that applies if the condition is false.
 * @returns
 * @public
 */
export declare function $if(condition: string, then: FormKitProExtendableSection | string, otherwise?: FormKitProExtendableSection | string): FormKitProExtendableSection;

declare type AreaUnits = 'acre' | 'hectare';

/**
 * Input definition for a autocomplete input.
 * @public
 */
export declare const autocomplete: FormKitProInput;

/**
 * Data available to autocomplete slots.
 *
 * @public
 */
export declare interface AutocompleteSlotData {
    options: FormKitOptionsItem[];
    debounce?: number | string;
    multiple?: Bool;
    selectionAppearance?: 'option' | 'text-input' | 'text';
    openOnClick?: Bool;
    filter?: (option: FormKitOptionsItem, search?: string) => boolean;
    optionLoader?: OptionLoader;
    emptyMessage?: string;
    closeOnSelect?: Bool;
    clearSearchOnOpen?: Bool;
    activeDescendant?: string;
    activeValue?: unknown;
    dropdownWrapperStyles: Record<string, boolean>;
    expanded: boolean;
    popover?: boolean;
    forceExpanded: undefined | true;
    hasNextPage: (data?: any) => void;
    isLoadingOption?: boolean;
    listboxStyles: Record<string, boolean>;
    loadMoreOption: FormKitOptionsItem;
    loadOnCreated: undefined | true;
    loadOnScroll: undefined | true;
    max?: number | string;
    option: FormKitOptionsItem;
    optionsLoader?: FormKitOptionsLoader;
    page: number;
    placeholder?: string;
    reloadOnCommit: Bool;
    selections: FormKitOptionsItem[];
    showEmptyMessage?: boolean;
    handlers: FormKitFrameworkContext['handlers'] & {
        selectOption: (option: FormKitOptionsItem) => void;
        loadMoreSelected: () => void;
        toggleListbox: () => void;
        removeSelection: (option?: FormKitOptionsItem) => (e?: MouseEvent) => void;
        touchmove: (e: TouchEvent) => void;
        touchend: (e: TouchEvent) => void;
        click: (e: MouseEvent) => void;
        keydown: (e: KeyboardEvent) => void;
        focus: (e: FocusEvent) => void;
        loadMore: () => void;
        selectionClick: (e: MouseEvent) => void;
        selectionKeydown: (option: FormKitOptionsItem) => (e: KeyboardEvent) => void;
        searchInputTagKeydown: (option: FormKitOptionsItem) => (e: KeyboardEvent) => void;
    };
    fns: FormKitFrameworkContext['fns'] & {
        isSelected: (option: FormKitOptionsItem) => boolean;
        isActive: (option: FormKitOptionsItem) => boolean;
    };
    ui: FormKitFrameworkContext['ui'] & {
        isLoading: FormKitMessage;
        loadMore: FormKitMessage;
    };
}

declare interface BasePart<T extends string = string> {
    /**
     * A textual representation to use as a placeholder.
     */
    placeholder: string;
    /**
     * A token that represents this pattern
     */
    token: T;
    /**
     * In select mode, which direction should types values flow?
     */
    selectDirection?: 'left' | 'right';
    /**
     * An optional character to fill the selection with when in select mode.
     * This is different than the placeholder character in that this character is
     * only used when the section has a value but that value is not "complete".
     * This character should be a single character, and valid for the given part.
     * For example, numbers may use a "0" as the selectFill since it leads to a
     * valid number with leading zeros. ### would be 001 when a user types "1".
     */
    selectFill?: string;
}

declare type Bool = 'true' | 'false' | true | false | '';

/**
 * A calendar is an array of months, where each month is an array of weeks,
 * where each week is an array of days.
 *
 * @public
 */
export declare type Calendar = Array<CalendarMonth>;

/**
 * A calendar month is an array of weeks, where each week is an array of days.
 *
 * @public
 */
export declare type CalendarMonth = Array<CalendarWeek>;

/**
 * A calendar week is an array of 7 days (tuple of 7) where each day is a date.
 *
 * @public
 */
export declare type CalendarWeek = [
monday: Date,
tuesday: Date,
wednesday: Date,
thursday: Date,
friday: Date,
saturday: Date,
sunday: Date
];

declare interface CharPart {
    /**
     * Defined the part as a fixed length value
     */
    type: 'char';
    /**
     * Regular expression that defines what characters can be applied.
     */
    pattern: RegExp;
}

/**
 * Input definition for a colorpicker input.
 * @public
 */
export declare const colorpicker: FormKitProInput;

/**
 * Creates a set of commonly used sections.
 * @param createSection - Creates commonly used sections.
 * @returns
 * @public
 */
export declare function createBaseSections(createSection: SectionFactory): {
    outer: FormKitProSection<true>;
    wrapper: FormKitProSection<false>;
    inner: FormKitProSection<false>;
    icon: (sectionKey: string, el?: string | undefined) => () => FormKitSchemaExtendableSection;
    label: FormKitProSection<false>;
    prefix: FormKitProSection<false>;
    suffix: FormKitProSection<false>;
    help: FormKitProSection<false>;
    messages: FormKitProSection<false>;
    message: FormKitProSection<false>;
};

/**
 * Creates a new FormKit Pro plugin.
 * @param apiKey - The FormKit Pro api key found on your pro.formkit.com dashboard.
 * @param inputs - The pro inputs to register, should only be used for Pro Inputs.
 * @returns
 * @public
 */
export declare function createProPlugin(apiKey: string, inputs?: Record<string, FormKitProInput>): FormKitPlugin;

/**
 * Creates a new section createSection factory with the input code curried in.
 * @param inputCode - The input code.
 * @returns
 * @public
 */
export declare function createSectionFactory(inputCode: string): SectionFactory;

/**
 * Input definition for a toggle group input.
 * @public
 */
export declare const currency: FormKitProInput;

/**
 * Slot data for currency
 */
export declare interface CurrencySlotData<Props extends FormKitInputs<Props>> {
    type: 'currency';
    value?: string | number;
    label?: string;
    disabled?: Bool;
    currency?: string;
    decimals?: Bool | number;
    minDecimals?: Bool | number;
    min?: number;
    max?: number;
    step?: number;
    displayLocale?: string;
    valueFormat?: string;
    handlers: FormKitFrameworkContext['handlers'] & {
        init(): void;
        handleInput: (e: InputEvent) => void;
        handleFocus: (e: InputEvent) => void;
        handleBlur(): void;
        handleBeforeInput: (e: InputEvent) => void;
        handleClick(e: MouseEvent): void;
        handleKeyDown: (e: InputEvent) => void;
    };
}

/**
 * Input definition for a datepicker input.
 * @public
 */
export declare const datepicker: FormKitProInput;

/**
 * Slot information that pertains specifically to the datepicker input.
 *
 * @public
 */
export declare type DatePickerSlotData = {
    panel: Panels;
    calendar: Calendar;
    inputText: string;
    renderedDate: Date;
    expanded: boolean;
    popover?: boolean;
    showPagination: boolean;
    localTime: string;
    visibilityStyles: Record<string, boolean>;
    fns: FormKitFrameworkContext['fns'] & {
        format: (date: Date | string, format: string) => string;
        sameDay: (date: Date) => boolean;
        sameMonth: (month: Date) => boolean;
        notInMonth: (month: Date, day: Date) => boolean;
        isDisabled: (node: FormKitNode, date?: Date) => boolean;
        isDisabledMonth: (month: Date) => boolean;
        isSelected: (date: Date) => boolean;
    };
    handlers: FormKitFrameworkContext['handlers'] & {
        next: () => void;
        prev: () => void;
        open: () => void;
        _blurOut: () => void;
        jumpTo: (date: Date) => void;
        localTime: (e: InputEvent) => void;
        setDate: (date: Date) => () => void;
        keydown: (e: KeyboardEvent) => void;
        mouseEnter: (date: Date) => void;
        mouseLeave: () => void;
    };
    ui: FormKitFrameworkContext['ui'] & {
        changeDate: FormKitMessage;
        chooseDate: FormKitMessage;
    };
    dayButtonFormat: string;
    monthButtonFormat: string;
    yearFormat: string;
};

declare type DistanceUnits = 'meter' | 'kilometer' | 'centimeter' | 'millimeter' | 'mile' | 'yard' | 'foot' | 'inch' | 'mile-scandinavian';

/**
 * Input definition for a dropdown input.
 * @public
 */
export declare const dropdown: FormKitProInput;

/**
 * Slot data for dropdown types.
 *
 * @public
 */
export declare interface DropdownSlotData {
    options: FormKitOptionsItem[];
    option?: FormKitOptionsItem;
    debounce?: number | string;
    multiple?: Bool;
    selectionAppearance?: 'truncate' | 'tags';
    openOnClick?: Bool;
    filter?: (option: FormKitOptionsItem, search: string) => boolean;
    optionLoader?: OptionLoader;
    emptyMessage?: string;
    max?: number | string;
    closeOnSelect?: Bool;
    activeDescendant?: string;
    deselect?: Bool;
    activeValue?: unknown;
    dropdownWrapperStyles: Record<string, boolean>;
    expanded: boolean;
    popover?: boolean;
    fns: FormKitFrameworkContext['fns'] & {
        isSelected: (option: FormKitOptionsItem) => boolean;
        isActive: (option: FormKitOptionsItem) => boolean;
    };
    handlers: FormKitFrameworkContext['handlers'] & {
        selectOption: (option: FormKitOptionsItem) => (e: MouseEvent) => void;
        loadMoreSelected: () => void;
        tagClick: (option: FormKitOptionsItem) => void;
        tagFocus: (option: FormKitOptionsItem) => void;
        tagBlur: () => void;
        blur: () => void;
        toggleListbox: () => void;
        removeSelection: (option?: FormKitOptionsItem) => (e?: MouseEvent) => void;
        touchmove: (e: TouchEvent) => void;
        touchend: (e: TouchEvent) => void;
        click: (e: MouseEvent) => void;
        keydown: (e: KeyboardEvent) => void;
        focus: (e: FocusEvent) => void;
        loadMore: () => void;
    };
    ui: FormKitFrameworkContext['ui'] & {
        isLoading: FormKitMessage;
        loadMore: FormKitMessage;
    };
}

declare interface EnumPart {
    /**
     * Defines the part as an enumerated list of options.
     */
    type: 'enum';
    /**
     * The values allowed by an enum part.
     */
    values: string[];
}

/**
 * A schema section that is compatible with FormKitPro’s schema composition.
 */
declare type ExtendableSchema<IsRoot> = IsRoot extends true ? FormKitExtendableSchemaRoot : FormKitSchemaExtendableSection;

export { FormatStyleObj }

export declare interface FormKitAutocompleteSlots<Props extends FormKitInputs<Props>> {
    outer: FormKitSlotData<Props, AutocompleteSlotData>;
    wrapper: FormKitSlotData<Props, AutocompleteSlotData>;
    label: FormKitSlotData<Props, AutocompleteSlotData>;
    inner: FormKitSlotData<Props, AutocompleteSlotData>;
    prefixIcon: FormKitSlotData<Props, AutocompleteSlotData>;
    prefix: FormKitSlotData<Props, AutocompleteSlotData>;
    input: FormKitSlotData<Props, AutocompleteSlotData>;
    selections: FormKitSlotData<Props, AutocompleteSlotData>;
    selection: FormKitSlotData<Props, AutocompleteSlotData>;
    listboxButton: FormKitSlotData<Props, AutocompleteSlotData>;
    dropdownWrapper: FormKitSlotData<Props, AutocompleteSlotData>;
    listbox: FormKitSlotData<Props, AutocompleteSlotData>;
    listitem: FormKitSlotData<Props, AutocompleteSlotData>;
    loadMore: FormKitSlotData<Props, AutocompleteSlotData>;
    emptyMessageInner: FormKitSlotData<Props, AutocompleteSlotData>;
    closeIcon: FormKitSlotData<Props, AutocompleteSlotData>;
    selectIcon: FormKitSlotData<Props, AutocompleteSlotData>;
    selectedIcon: FormKitSlotData<Props, AutocompleteSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    option: FormKitSlotData<Props, AutocompleteSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    optionLoading: FormKitSlotData<Props, AutocompleteSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    removeSelection: FormKitSlotData<Props, AutocompleteSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    suffix: FormKitSlotData<Props, AutocompleteSlotData>;
    suffixIcon: FormKitSlotData<Props, AutocompleteSlotData>;
    help: FormKitSlotData<Props, AutocompleteSlotData>;
    messages: FormKitSlotData<Props, AutocompleteSlotData>;
    message: FormKitSlotData<Props, AutocompleteSlotData>;
}

declare interface FormKitColorpickerSlotData {
    format: 'hex' | 'rgba' | 'hsla';
    valueFormat: 'hex' | 'rgba' | 'hsla';
    panelControls: Bool;
    panelFormat: Bool;
    eyeDropper: Bool;
    inline?: undefined | true;
    options?: undefined | FormKitOptionsPropWithGroups;
    showValue: Bool;
    closeOnSelect?: undefined | true;
    allowPaste: Bool;
    expanded: Bool;
    popover?: Bool;
    h: number;
    s: number;
    v: number;
    alpha: number;
    hsla: Record<string, number>;
    hslaPercent: Record<string, number>;
    hslaString: string;
    hslaStringPrecise: string;
    rgba: Record<string, number>;
    rgbaString: string;
    hex: string;
    panelActiveFormat: 'hex' | 'rgba' | 'hsla';
    fns: FormKitFrameworkContext['fns'] & {
        anyToHsvaString: (value: string) => string;
    };
    handlers: FormKitFrameworkContext['handlers'] & {
        inputPreviewClick: (e: Event) => void;
        inputPreviewFocusout: (e: FocusEvent) => void;
        inputPreviewKeydown: (e: KeyboardEvent) => void;
        closePanel: () => void;
        panelCloseKeydown: (e: KeyboardEvent) => void;
        toggleFormat: (delta: number) => void;
        panelKeydown: (e: KeyboardEvent) => void;
        lsKeydown: (e: KeyboardEvent) => void;
        hueControlKeydown: (e: KeyboardEvent) => void;
        alphaControlKeydown: (e: KeyboardEvent) => void;
        eyeDropperKeydown: (e: KeyboardEvent) => void;
        formatSwitcherKeydown: (e: KeyboardEvent) => void;
        hexInput: (e: InputEvent) => void;
        hexKeydown: (e: KeyboardEvent) => void;
        hexFocus: () => void;
        hexBlur: (e: Event) => void;
        rangeLimitInput: (format: string, min: number, max: number, event?: Event) => (e: Event) => void;
        rangeLimitKeydown: (format: string, min: number, max: number, step: number) => (e: KeyboardEvent) => void;
        swatchClick: (e: Event) => void;
        swatchKeydown: (e: KeyboardEvent) => void;
    };
    ui: FormKitFrameworkContext['ui'] & {
        close: FormKitMessage;
        toggle: FormKitMessage;
    };
}

export declare interface FormKitColorpickerSlots<Props extends FormKitInputs<Props>> {
    swatchPreview: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    valueString: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    panel: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    panelClose: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    controlGroup: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    LS: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    canvasLS: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    controlLS: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    hue: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    canvasHue: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    controlHue: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    alpha: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    canvasAlpha: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    controlAlpha: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    preview: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    canvasPreview: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    canvasSwatchPreview: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    eyeDropper: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    formatField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    colorInputGroup: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    hexField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    rField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    gField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    bField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    hField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    sField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    lField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    aField: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    formatSwitcher: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    swatches: FormKitSlotData<Props, FormKitColorpickerSlotData>;
    swatch: FormKitSlotData<Props, FormKitColorpickerSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
}

/**
 * Currency slots.
 *
 * @public
 */
export declare interface FormKitCurrencySlots<Props extends FormKitInputs<Props>> {
    wrapper: FormKitSlotData<Props, CurrencySlotData<Props>>;
    input: FormKitSlotData<Props, CurrencySlotData<Props>>;
    label: FormKitSlotData<Props, CurrencySlotData<Props>>;
    prefix: FormKitSlotData<Props, CurrencySlotData<Props>>;
    suffix: FormKitSlotData<Props, CurrencySlotData<Props>>;
    help: FormKitSlotData<Props, CurrencySlotData<Props>>;
    messages: FormKitSlotData<Props, CurrencySlotData<Props>>;
    message: FormKitSlotData<Props, CurrencySlotData<Props> & {
        message: FormKitMessage;
    }>;
}

/**
 * Slot information that pertains specifically to the datepicker input.
 *
 * @public
 */
export declare interface FormKitDatePickerSlots<Props extends FormKitInputs<Props>> {
    calendar: FormKitSlotData<Props, DatePickerSlotData & {
        month: CalendarMonth;
    }>;
    calendarHeader: FormKitSlotData<Props, DatePickerSlotData & {
        month: CalendarMonth;
    }>;
    calendarWeeks: FormKitSlotData<Props, DatePickerSlotData & {
        month: CalendarMonth;
    }>;
    day: FormKitSlotData<Props, DatePickerSlotData & {
        month: CalendarMonth;
        week: CalendarWeek;
        day: Date;
    }>;
    dayButton: FormKitSlotData<Props, DatePickerSlotData & {
        day: Date;
    }>;
    dayCell: FormKitSlotData<Props, DatePickerSlotData & {
        day: Date;
        week: CalendarWeek;
        month: CalendarMonth;
    }>;
    daysHeader: FormKitSlotData<Props, DatePickerSlotData>;
    help: FormKitSlotData<Props, DatePickerSlotData>;
    prefixIcon: FormKitSlotData<Props, DatePickerSlotData>;
    suffixIcon: FormKitSlotData<Props, DatePickerSlotData>;
    inner: FormKitSlotData<Props, DatePickerSlotData>;
    input: FormKitSlotData<Props, DatePickerSlotData>;
    label: FormKitSlotData<Props, DatePickerSlotData>;
    message: FormKitSlotData<Props, DatePickerSlotData & {
        message: FormKitMessage;
    }>;
    messages: FormKitSlotData<Props, DatePickerSlotData>;
    month: FormKitSlotData<Props, DatePickerSlotData & {
        month: Date;
        months: Array<Date>;
    }>;
    monthButton: FormKitSlotData<Props, DatePickerSlotData>;
    months: FormKitSlotData<Props, DatePickerSlotData>;
    monthsHeader: FormKitSlotData<Props, DatePickerSlotData>;
    next: FormKitSlotData<Props, DatePickerSlotData>;
    nextLabel: FormKitSlotData<Props, DatePickerSlotData>;
    openButton: FormKitSlotData<Props, DatePickerSlotData>;
    outer: FormKitSlotData<Props, DatePickerSlotData>;
    panel: FormKitSlotData<Props, DatePickerSlotData>;
    panelHeader: FormKitSlotData<Props, DatePickerSlotData>;
    panelWrapper: FormKitSlotData<Props, DatePickerSlotData>;
    prefix: FormKitSlotData<Props, DatePickerSlotData>;
    prev: FormKitSlotData<Props, DatePickerSlotData>;
    prevLabel: FormKitSlotData<Props, DatePickerSlotData>;
    suffix: FormKitSlotData<Props, DatePickerSlotData>;
    time: FormKitSlotData<Props, DatePickerSlotData>;
    timeHeader: FormKitSlotData<Props, DatePickerSlotData>;
    timeInput: FormKitSlotData<Props, DatePickerSlotData>;
    week: FormKitSlotData<Props, DatePickerSlotData & {
        month: CalendarMonth;
    }>;
    weekDay: FormKitSlotData<Props, DatePickerSlotData & {
        month: CalendarMonth;
    }>;
    weekDays: FormKitSlotData<Props, DatePickerSlotData & {
        month: CalendarMonth;
    }>;
    wrapper: FormKitSlotData<Props, DatePickerSlotData>;
    year: FormKitSlotData<Props, DatePickerSlotData & {
        years: Array<Date>;
    }>;
    yearButton: FormKitSlotData<Props, DatePickerSlotData & {
        years: Array<Date>;
        year: Date;
    }>;
    years: FormKitSlotData<Props, DatePickerSlotData & {
        years: Array<Date>;
    }>;
    yearsHeader: FormKitSlotData<Props, DatePickerSlotData>;
}

export declare interface FormKitDropdownSlots<Props extends FormKitInputs<Props>> {
    outer: FormKitSlotData<Props, DropdownSlotData>;
    wrapper: FormKitSlotData<Props, DropdownSlotData>;
    inner: FormKitSlotData<Props, DropdownSlotData>;
    label: FormKitSlotData<Props, DropdownSlotData>;
    prefix: FormKitSlotData<Props, DropdownSlotData>;
    prefixIcon: FormKitSlotData<Props, DropdownSlotData>;
    selector: FormKitSlotData<Props, DropdownSlotData>;
    selection: FormKitSlotData<Props, DropdownSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    closeIcon: FormKitSlotData<Props, DropdownSlotData>;
    selectIcon: FormKitSlotData<Props, DropdownSlotData>;
    suffix: FormKitSlotData<Props, DropdownSlotData>;
    suffixIcon: FormKitSlotData<Props, DropdownSlotData>;
    help: FormKitSlotData<Props, DropdownSlotData>;
    messages: FormKitSlotData<Props, DropdownSlotData>;
    message: FormKitSlotData<Props, DropdownSlotData & {
        message: FormKitMessage;
    }>;
    listboxButton: FormKitSlotData<Props, DropdownSlotData>;
    dropdownWrapper: FormKitSlotData<Props, DropdownSlotData>;
    listbox: FormKitSlotData<Props, DropdownSlotData>;
    listitem: FormKitSlotData<Props, DropdownSlotData>;
    loadMore: FormKitSlotData<Props, DropdownSlotData>;
    emptyMessageInner: FormKitSlotData<Props, DropdownSlotData>;
    selectedIcon: FormKitSlotData<Props, DropdownSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    option: FormKitSlotData<Props, DropdownSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    optionLoading: FormKitSlotData<Props, DropdownSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    removeSelection: FormKitSlotData<Props, DropdownSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    placeholder: FormKitSlotData<Props, DropdownSlotData>;
    tag: FormKitSlotData<Props, DropdownSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
    tagWrapper: FormKitSlotData<Props, TaglistSlotData>;
    tagLabel: FormKitSlotData<Props, DropdownSlotData & {
        option: FormKitOptionsItem<OptionsProValue<Props['options']>>;
        index: number;
    }>;
}

/**
 * The option loader function type.
 *
 * @public
 */
export declare interface FormKitOptionsLoader {
    (context: FormKitFrameworkContext<any>): Promise<FormKitOptionsProp> | FormKitOptionsProp;
    (...args: any[]): Promise<FormKitOptionsProp> | FormKitOptionsProp;
}

export declare type FormKitOverlaySlots<Props extends FormKitInputs<Props>> = Props['overlay'] extends Yes ? {
    overlay: FormKitSlotData<Props, DatePickerSlotData>;
    overlayChar: FormKitSlotData<Props, DatePickerSlotData & {
        part: Meta;
    }>;
    overlayEnum: FormKitSlotData<Props, DatePickerSlotData & {
        part: Meta;
    }>;
    overlayInner: FormKitSlotData<Props, DatePickerSlotData>;
    overlayLiteral: FormKitSlotData<Props, DatePickerSlotData & {
        part: Meta;
    }>;
    overlayParts: FormKitSlotData<Props, DatePickerSlotData & {
        part: Meta;
    }>;
    overlayPlaceholder: FormKitSlotData<Props, DatePickerSlotData & {
        part: Meta;
    }>;
} : {};

/**
 * An extendable schema section that is compatible with FormKitPro’s schema
 * composition.
 */
declare interface FormKitProExtendableSection<IsRoot extends boolean = false> {
    (apiKey: string): ExtendableSchema<IsRoot>;
    _s?: string;
}

/**
 * The type definition of a FormKitPro input.
 * @public
 */
export declare type FormKitProInput = Omit<FormKitTypeDefinition, 'schema'> & {
    schema: FormKitProSchema;
};

/**
 * The options prop for option-based inputs in pro like `autocomplete` and
 * `dropdown`.
 *
 * @public
 */
export declare type FormKitProOptionsProp = FormKitOptionsProp | FormKitOptionsLoader | FormKitOptionsPropWithGroups;

/**
 * The type definition of a FormKit pro schema.
 * @public
 */
export declare interface FormKitProSchema {
    (apiKey: string): FormKitExtendableSchemaRoot;
}

/**
 * A schema section that is compatible with FormKitPro’s schema composition.
 */
declare interface FormKitProSection<IsRoot extends boolean = false> {
    (...children: Array<string | FormKitProExtendableSection>): FormKitProExtendableSection<IsRoot>;
}

export declare interface FormKitRatingSlots<Props extends FormKitInputs<Props>> {
    itemsWrapper: FormKitSlotData<Props, RatingSlotData>;
    onItem: FormKitSlotData<Props, RatingSlotData & {
        item: number;
    }>;
    offItem: FormKitSlotData<Props, RatingSlotData & {
        item: number;
    }>;
    default: FormKitSlotData<Props, RatingSlotData & {
        item: number;
    }>;
    ratingIcon: FormKitSlotData<Props, RatingSlotData & {
        item: number;
    }>;
}

/**
 * Slot information that pertains specifically to the datepicker input.
 *
 * @public
 */
export declare interface FormKitRepeaterSlots<Props extends FormKitInputs<Props>> {
    outer: FormKitSlotData<Props, RepeaterSlotData>;
    fieldset: FormKitSlotData<Props, RepeaterSlotData>;
    legend: FormKitSlotData<Props, RepeaterSlotData>;
    empty: FormKitSlotData<Props, RepeaterSlotData>;
    help: FormKitSlotData<Props, RepeaterSlotData>;
    prefix: FormKitSlotData<Props, RepeaterSlotData>;
    default: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    items: FormKitSlotData<Props, RepeaterSlotData>;
    item: FormKitSlotData<Props, RepeaterSlotData>;
    content: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    group: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    controls: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    up: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    upControl: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    controlLabel: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    moveUpIcon: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    remove: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    removeControl: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    removeIcon: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    insert: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    insertControl: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    addIcon: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    down: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    downControl: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    moveDownIcon: FormKitSlotData<Props, RepeaterSlotData & {
        item: symbol;
        index: number;
        value: Record<string, any>;
    }>;
    suffix: FormKitSlotData<Props, RepeaterSlotData>;
    addButton: FormKitSlotData<Props, RepeaterSlotData>;
    message: FormKitSlotData<Props, RepeaterSlotData & {
        message: FormKitMessage;
    }>;
    messages: FormKitSlotData<Props, RepeaterSlotData>;
}

/**
 * Slots available to the slider.
 *
 * @public
 */
export declare interface FormKitSliderSlots<Props extends FormKitInputs<Props>> {
    outer: FormKitSlotData<Props, SliderSlotData>;
    wrapper: FormKitSlotData<Props, SliderSlotData>;
    label: FormKitSlotData<Props, SliderSlotData>;
    help: FormKitSlotData<Props, SliderSlotData>;
    sliderInner: FormKitSlotData<Props, SliderSlotData>;
    iconPrefix: FormKitSlotData<Props, SliderSlotData>;
    prefix: FormKitSlotData<Props, SliderSlotData>;
    track: FormKitSlotData<Props, SliderSlotData>;
    trackWrapper: FormKitSlotData<Props, SliderSlotData>;
    trackInner: FormKitSlotData<Props, SliderSlotData>;
    fill: FormKitSlotData<Props, SliderSlotData>;
    marks: FormKitSlotData<Props, SliderSlotData>;
    mark: FormKitSlotData<Props, SliderSlotData>;
    markLabel: FormKitSlotData<Props, SliderSlotData & {
        index: number;
        step: {
            at: number;
            label?: string;
        };
    }>;
    handles: FormKitSlotData<Props, SliderSlotData>;
    handleMin: FormKitSlotData<Props, SliderSlotData>;
    handleMax: FormKitSlotData<Props, SliderSlotData>;
    handleMinInner: FormKitSlotData<Props, SliderSlotData>;
    handleMaxInner: FormKitSlotData<Props, SliderSlotData>;
    tooltipMin: FormKitSlotData<Props, SliderSlotData>;
    tooltipMax: FormKitSlotData<Props, SliderSlotData>;
    suffix: FormKitSlotData<Props, SliderSlotData>;
    suffixIcon: FormKitSlotData<Props, SliderSlotData>;
    minValue: FormKitSlotData<Props, SliderSlotData>;
    maxValue: FormKitSlotData<Props, SliderSlotData>;
    linkedValues: FormKitSlotData<Props, SliderSlotData>;
    message: FormKitSlotData<Props, SliderSlotData & {
        message: FormKitMessage;
    }>;
    messages: FormKitSlotData<Props, SliderSlotData>;
}

export declare interface FormKitTaglistSlots<Props extends FormKitInputs<Props>> {
    outer: FormKitSlotData<Props, TaglistSlotData>;
    wrapper: FormKitSlotData<Props, TaglistSlotData>;
    inner: FormKitSlotData<Props, TaglistSlotData>;
    label: FormKitSlotData<Props, TaglistSlotData>;
    prefix: FormKitSlotData<Props, TaglistSlotData>;
    prefixIcon: FormKitSlotData<Props, TaglistSlotData>;
    tag: FormKitSlotData<Props, TaglistSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    tagWrapper: FormKitSlotData<Props, TaglistSlotData>;
    tagLoading: FormKitSlotData<Props, TaglistSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    suffix: FormKitSlotData<Props, TaglistSlotData>;
    suffixIcon: FormKitSlotData<Props, TaglistSlotData>;
    closeIcon: FormKitSlotData<Props, DropdownSlotData>;
    selectIcon: FormKitSlotData<Props, DropdownSlotData>;
    help: FormKitSlotData<Props, TaglistSlotData>;
    messages: FormKitSlotData<Props, TaglistSlotData>;
    message: FormKitSlotData<Props, TaglistSlotData & {
        message: FormKitMessage;
    }>;
    listboxButton: FormKitSlotData<Props, TaglistSlotData>;
    dropdownWrapper: FormKitSlotData<Props, TaglistSlotData>;
    listbox: FormKitSlotData<Props, TaglistSlotData>;
    listitem: FormKitSlotData<Props, TaglistSlotData>;
    loadMore: FormKitSlotData<Props, TaglistSlotData>;
    emptyMessageInner: FormKitSlotData<Props, TaglistSlotData>;
    selectedIcon: FormKitSlotData<Props, TaglistSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    option: FormKitSlotData<Props, TaglistSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    optionLoading: FormKitSlotData<Props, TaglistSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    removeSelection: FormKitSlotData<Props, TaglistSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    input: FormKitSlotData<Props, TaglistSlotData>;
    tags: FormKitSlotData<Props, TaglistSlotData>;
    tagLabel: FormKitSlotData<Props, TaglistSlotData & {
        option: FormKitOptionsItem;
        index: number;
    }>;
}

/**
 * Togglebuttons slots.
 *
 * @public
 */
export declare interface FormKitTogglebuttonsSlots<Props extends FormKitInputs<Props>> {
    wrapper: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    options: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    option: FormKitSlotData<Props, TogglebuttonsSlotData<Props> & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    singleToggle: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    multiToggle: FormKitSlotData<Props, TogglebuttonsSlotData<Props> & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    inputInner: FormKitSlotData<Props, TogglebuttonsSlotData<Props> & {
        option: FormKitOptionsItem;
        index: number;
    }>;
    on: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    off: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    prefix: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    suffix: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    help: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    messages: FormKitSlotData<Props, TogglebuttonsSlotData<Props>>;
    message: FormKitSlotData<Props, TogglebuttonsSlotData<Props> & {
        message: FormKitMessage;
    }>;
}

/**
 * Toggle slots.
 *
 * @public
 */
export declare interface FormKitToggleSlots<Props extends FormKitInputs<Props>> {
    outer: FormKitSlotData<Props, ToggleSlotData<Props>>;
    wrapper: FormKitSlotData<Props, ToggleSlotData<Props>>;
    altLabel: FormKitSlotData<Props, ToggleSlotData<Props>>;
    inner: FormKitSlotData<Props, ToggleSlotData<Props>>;
    prefix: FormKitSlotData<Props, ToggleSlotData<Props>>;
    input: FormKitSlotData<Props, ToggleSlotData<Props>>;
    track: FormKitSlotData<Props, ToggleSlotData<Props>>;
    innerLabel: FormKitSlotData<Props, ToggleSlotData<Props>>;
    thumbWrapper: FormKitSlotData<Props, ToggleSlotData<Props>>;
    suffix: FormKitSlotData<Props, ToggleSlotData<Props>>;
    valueLabel: FormKitSlotData<Props, ToggleSlotData<Props>>;
    label: FormKitSlotData<Props, ToggleSlotData<Props>>;
    help: FormKitSlotData<Props, ToggleSlotData<Props>>;
    messages: FormKitSlotData<Props, ToggleSlotData<Props>>;
    message: FormKitSlotData<Props, ToggleSlotData<Props> & {
        message: FormKitMessage;
    }>;
}

/**
 * Unit slots.
 *
 * @public
 */
export declare interface FormKitUnitSlots<Props extends FormKitInputs<Props>> {
    wrapper: FormKitSlotData<Props, UnitSlotData<Props>>;
    input: FormKitSlotData<Props, UnitSlotData<Props>>;
    prefix: FormKitSlotData<Props, UnitSlotData<Props>>;
    suffix: FormKitSlotData<Props, UnitSlotData<Props>>;
    help: FormKitSlotData<Props, UnitSlotData<Props>>;
    messages: FormKitSlotData<Props, UnitSlotData<Props>>;
    message: FormKitSlotData<Props, UnitSlotData<Props> & {
        message: FormKitMessage;
    }>;
}

/**
 * Behavioral group options.
 */
declare interface GroupOptions {
    repeat?: boolean;
    optional?: boolean;
    placeholder?: string;
    nextPart?: MaskPart;
}

declare type GroupPart = {
    type: 'group';
    parts: MaskPart[];
} & GroupOptions;

declare namespace inputs {
    export {
        dropdown,
        toggle,
        repeater,
        rating,
        autocomplete,
        datepicker,
        taglist,
        mask,
        transferlist,
        slider,
        colorpicker,
        togglebuttons,
        currency,
        unit
    }
}
export { inputs }

declare interface LiteralPart<T extends string = string> {
    /**
     * Defines a literal (immutable) string.
     */
    type: 'literal';
    /**
     * The value of the immutable string.
     */
    value: T;
}

/**
 * Input definition for a mask input.
 * @public
 */
export declare const mask: FormKitProInput;

/**
 * Defines a specific part of a mask pattern.
 */
declare type MaskPart<T extends string = string> = ((BasePart<T> & CharPart) | (BasePart<T> & EnumPart)) | LiteralPart<T> | GroupPart;

declare interface Meta {
    value: string;
    type: 'placeholder' | 'literal' | 'char' | 'enum';
}

export declare interface OptionLoader {
    (value: any, cachedItem: FormKitOptionsItem<any>): FormKitOptionsItem<any> | string | void | Promise<FormKitOptionsItem<any> | string | void>;
}

/**
 * Gets the allowed value type from the `options` prop.
 *
 * @public
 */
export declare type OptionsProValue<Options> = Options extends FormKitProOptionsProp ? Options extends (...args: any[]) => any ? ReturnType<Options> extends FormKitOptionsProp ? FormKitOptionsValue<ReturnType<Options>> : ReturnType<Options> extends Promise<infer T> ? T extends FormKitOptionsProp ? FormKitOptionsValue<T> : unknown : unknown : Options extends FormKitOptionsProp ? FormKitOptionsValue<Options> : unknown : unknown;

/**
 * The available popover panels for the datepicker.
 *
 * @public
 */
export declare type Panels = 'year' | 'month' | 'day' | 'time';

/**
 * A map of the parts used
 */
export declare type PartMap<T = MaskPart> = {
    [index: string]: T;
};

/**
 * Input definition for a rating input.
 * @public
 */
export declare const rating: FormKitProInput;

/**
 * Slot data for ratings
 *
 * @public
 */
declare interface RatingSlotData {
    min: number;
    max: number;
    offWidth: number;
    onWidth: number;
    onColor: number;
    offColor: number;
    handlers: FormKitFrameworkContext['handlers'] & {
        ratingHoverOver: () => void;
        ratingHoverOut: () => void;
        handleClick: () => void;
    };
}

/**
 * Input definition for a repeater input.
 * @public
 */
export declare const repeater: FormKitProInput;

declare interface RepeaterSlotData {
    items: Array<symbol>;
    removeControl: boolean;
    insertControl: boolean;
    upControl: boolean;
    downControl: boolean;
    addLabel?: string;
    fns: FormKitFrameworkContext['fns'] & {
        createShift: (index: number, delta: 1 | -1) => () => void;
        createInsert: (index: number) => () => void;
        createAppend: () => () => void;
        createRemove: (index: number) => () => void;
    };
    ui: FormKitFrameworkContext['ui'] & {
        moveUp: FormKitMessage;
        moveDown: FormKitMessage;
        add: FormKitMessage;
        remove: FormKitMessage;
    };
}

/**
 * A factory that creates createSection functions that are curried with the
 * input code.
 */
declare type SectionFactory = <IsRoot extends boolean = false>(sectionName: string, schema: string | (() => FormKitSchemaNode), root?: IsRoot) => FormKitProSection<IsRoot>;

/**
 * Input definition for a slider input.
 * @public
 */
export declare const slider: FormKitProInput;

/**
 * Conditional slots available to the slider when using a chart.
 *
 * @public
 */
export declare interface SliderChartSlots<Props extends FormKitInputs<Props>> {
    chart: FormKitSlotData<Props, SliderSlotData>;
    chartBar: FormKitSlotData<Props, SliderSlotData>;
}

export declare type SliderIntervals = {
    value: number;
    step: number;
}[];

export declare type SliderScalingFunction = {
    forward: (value: number, min?: number, max?: number) => number;
    reverse: (value: number, min?: number, max?: number) => number;
};

/**
 * Slot data for sliders.
 *
 * @public
 */
export declare interface SliderSlotData {
    chart?: Array<{
        value: number;
        at: number;
    }>;
    inputAttrs?: Record<string, any>;
    marks?: Bool | Array<{
        at?: number;
        label?: string;
    }>;
    markLabel?: Bool;
    max: number | string;
    maxInputAttrs?: Record<string, any>;
    min: number;
    minInputAttrs?: Record<string, any>;
    prefix?: string;
    showInput?: Bool;
    snapToMarks?: Bool;
    suffix?: string;
    tooltip?: Bool;
    isMulti: boolean;
    fillStyles: Record<string, boolean>;
    lastHandleInteraction?: 'min' | 'max';
    handlers: FormKitFrameworkContext['handlers'] & {
        clickTrack: (e: MouseEvent) => void;
        focus: (e: FocusEvent) => void;
        clickHandle: (e: MouseEvent) => void;
        startDrag: (e: Event) => void;
        keydown: (e: KeyboardEvent) => void;
        maxNode: (node: FormKitNode) => void;
        minNode: (node: FormKitNode) => void;
        inputBlur: () => void;
    };
}

/**
 * Input definition for a taglist input.
 * @public
 */
export declare const taglist: FormKitProInput;

export declare interface TaglistSlotData {
    options: FormKitOptionsItem[];
    debounce?: number | string;
    openOnClick?: Bool;
    filter?: (option: FormKitOptionsItem, search: string) => boolean;
    optionLoader?: OptionLoader;
    emptyMessage?: string;
    max?: number | string;
    closeOnSelect?: Bool;
    activeDescendant?: string;
    activeValue?: unknown;
    dropdownWrapperStyles: Record<string, boolean>;
    expanded: boolean;
    popover?: boolean;
    page: number;
    search: string;
    hasNextPage: (data?: any) => void;
    fns: FormKitFrameworkContext['fns'] & {
        isSelected: (option: FormKitOptionsItem) => boolean;
        isActive: (option: FormKitOptionsItem) => boolean;
    };
    handlers: FormKitFrameworkContext['handlers'] & {
        selectOption: (option: FormKitOptionsItem) => (e: MouseEvent) => void;
        loadMoreSelected: () => void;
        tagClick: (option: FormKitOptionsItem) => void;
        tagFocus: (option: FormKitOptionsItem) => void;
        tagBlur: () => void;
        blur: () => void;
        toggleListbox: () => void;
        removeSelection: (option: FormKitOptionsItem) => (e?: MouseEvent) => void;
        touchmove: (e: TouchEvent) => void;
        touchend: (e: TouchEvent) => void;
        click: (e: MouseEvent) => void;
        keydown: (e: KeyboardEvent) => void;
        focus: (e: FocusEvent) => void;
        loadMore: () => void;
    };
    ui: FormKitFrameworkContext['ui'] & {
        isLoading: FormKitMessage;
        loadMore: FormKitMessage;
    };
}

declare type TemperatureUnits = 'celsius' | 'fahrenheit';

declare type TimeUnits = 'day' | 'hour' | 'microsecond' | 'millisecond' | 'minute' | 'month' | 'nanosecond' | 'second' | 'week' | 'year';

/**
 * Input definition for a toggle input.
 * @public
 */
export declare const toggle: FormKitProInput;

/**
 * Input definition for a toggle group input.
 * @public
 */
export declare const togglebuttons: FormKitProInput;

/**
 * Slot data for togglebuttons
 */
export declare interface TogglebuttonsSlotData<Props extends FormKitInputs<Props>> {
    onValue?: any;
    offValue?: any;
    offLabel?: string;
    onLabel?: string;
    options: FormKitOptionsItem[];
    option?: FormKitOptionsItem;
    multiple?: Bool;
    enforced?: Bool;
    vertical?: Bool;
    fns: FormKitFrameworkContext['fns'] & {
        isChecked: (option: FormKitOptionsItem) => boolean;
    };
    handlers: FormKitFrameworkContext['handlers'] & {
        toggleValue: (option: FormKitOptionsItem) => (e: MouseEvent) => void;
    };
}

/**
 * Slot data for toggles
 */
export declare interface ToggleSlotData<Props extends FormKitInputs<Props>> {
    onValue: Props['onValue'] extends AllReals ? Props['onValue'] : true;
    offValue: Props['offValue'] extends AllReals ? Props['offValue'] : true;
    altLabelPosition?: Bool;
    offValueLabel?: string;
    onValueLabel?: string;
    valueLabelDisplay?: 'on' | 'off' | 'inner' | 'hidden';
    valueLabelColorOff?: string;
    valueLabelColorOn?: string;
    thumbIcon?: string;
    thumbColorOn?: string;
    iconColorOff?: string;
    iconColorOn?: string;
    trackColorOff?: string;
    trackColorOn?: string;
    handlers: FormKitFrameworkContext['handlers'] & {
        toggles: (e: InputEvent) => void;
    };
}

/**
 * Input definition for a transferlist input.
 * @public
 */
export declare const transferlist: FormKitProInput;

/**
 * Data available to transfer lists.
 *
 * @public
 */
export declare interface TransferlistSlotData {
    options: FormKitOptionsItem[];
    debounce?: string | number;
    filter?: (option: FormKitOptionsItem, search?: string) => boolean;
    optionLoader?: OptionLoader;
    sourceEmptyMessage?: string;
    targetEmptyMessage?: string;
    max?: string | number;
    clearOnSelect?: Bool;
    searchable?: Bool;
    sourceLabel?: string;
    targetLabel?: string;
    transferOnSelect?: boolean;
    placeholder?: string;
    selections: FormKitOptionsItem[];
    activeValue?: unknown;
    activeDescendant?: string;
    sourceSelected?: boolean;
    targetOptions?: FormKitOptionsItem[];
    sourceOptions?: FormKitOptionsItem[];
    inputText: string;
    hasNextPage?: (dataForNextPage?: unknown) => void;
    page: number;
    targetLoading?: boolean;
    disabled?: boolean;
    showSourceEmptyMessage: boolean;
    showTargetEmptyMessage: boolean;
    fns: FormKitFrameworkContext['fns'] & {
        isSelected: (option: FormKitOptionsItem) => boolean;
        isActive: (option: FormKitOptionsItem) => boolean;
        optionValue: (option: FormKitOptionsItem) => unknown;
        getOptionCount: (targetOptions: boolean) => number;
    };
    handlers: FormKitFrameworkContext['handlers'] & {
        clearSearch: () => void;
        selectOption: (option: FormKitOptionsItem, isSource: boolean) => void;
        transferForward: () => void;
        transferForwardAll: () => void;
        transferBackward: () => void;
        transferBackwardAll: () => void;
        onSearch: (e: InputEvent) => void;
        handleSourceSearchKeyDown: (e: KeyboardEvent) => void;
        sourceKeyDown: (e: KeyboardEvent) => void;
        targetKeyDown: (e: KeyboardEvent) => void;
        sourceFocused: () => void;
        targetFocused: () => void;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
}

export declare interface TransferlistSlots<Props extends FormKitInputs<Props>> {
    outer: FormKitSlotData<Props, TransferlistSlotData>;
    fieldset: FormKitSlotData<Props, TransferlistSlotData>;
    legend: FormKitSlotData<Props, TransferlistSlotData>;
    help: FormKitSlotData<Props, TransferlistSlotData>;
    wrapper: FormKitSlotData<Props, TransferlistSlotData>;
    source: FormKitSlotData<Props, TransferlistSlotData>;
    sourceHeader: FormKitSlotData<Props, TransferlistSlotData>;
    sourceHeaderLabel: FormKitSlotData<Props, TransferlistSlotData>;
    sourceHeaderItemCount: FormKitSlotData<Props, TransferlistSlotData>;
    sourceControls: FormKitSlotData<Props, TransferlistSlotData>;
    sourceSearch: FormKitSlotData<Props, TransferlistSlotData>;
    sourceSearchInput: FormKitSlotData<Props, TransferlistSlotData>;
    sourceSearchClear: FormKitSlotData<Props, TransferlistSlotData>;
    closeIcon: FormKitSlotData<Props, TransferlistSlotData>;
    sourceListItems: FormKitSlotData<Props, TransferlistSlotData>;
    sourceEmptyMessage: FormKitSlotData<Props, TransferlistSlotData>;
    emptyMessageInner: FormKitSlotData<Props, TransferlistSlotData>;
    sourceListItem: FormKitSlotData<Props, TransferlistSlotData>;
    selectedIcon: FormKitSlotData<Props, TransferlistSlotData>;
    sourceOption: FormKitSlotData<Props, TransferlistSlotData & {
        option: FormKitOptionsItem;
    }>;
    sourceLoadMore: FormKitSlotData<Props, TransferlistSlotData>;
    loadMoreInner: FormKitSlotData<Props, TransferlistSlotData>;
    loaderIcon: FormKitSlotData<Props, TransferlistSlotData>;
    transferControls: FormKitSlotData<Props, TransferlistSlotData>;
    transferButtonForward: FormKitSlotData<Props, TransferlistSlotData>;
    transferButtonForwardAll: FormKitSlotData<Props, TransferlistSlotData>;
    transferButtonBackward: FormKitSlotData<Props, TransferlistSlotData>;
    transferButtonBackwardAll: FormKitSlotData<Props, TransferlistSlotData>;
    controlLabel: FormKitSlotData<Props, TransferlistSlotData>;
    fastForwardIcon: FormKitSlotData<Props, TransferlistSlotData>;
    moveRightIcon: FormKitSlotData<Props, TransferlistSlotData>;
    moveLeftIcon: FormKitSlotData<Props, TransferlistSlotData>;
    rewindIcon: FormKitSlotData<Props, TransferlistSlotData>;
    target: FormKitSlotData<Props, TransferlistSlotData>;
    targetHeader: FormKitSlotData<Props, TransferlistSlotData>;
    targetHeaderLabel: FormKitSlotData<Props, TransferlistSlotData>;
    targetHeaderItemCount: FormKitSlotData<Props, TransferlistSlotData>;
    targetListItems: FormKitSlotData<Props, TransferlistSlotData>;
    targetEmptyMessage: FormKitSlotData<Props, TransferlistSlotData>;
    targetListItem: FormKitSlotData<Props, TransferlistSlotData>;
    targetOption: FormKitSlotData<Props, TransferlistSlotData & {
        option: FormKitOptionsItem;
    }>;
    targetLoadMore: FormKitSlotData<Props, TransferlistSlotData>;
    messages: FormKitSlotData<Props, ToggleSlotData<Props>>;
    message: FormKitSlotData<Props, ToggleSlotData<Props> & {
        message: FormKitMessage;
    }>;
}

/**
 * Input definition for a toggle group input.
 * @public
 */
export declare const unit: FormKitProInput;

export declare type Units = DistanceUnits | TemperatureUnits | AreaUnits | WeightUnits | VolumenUnits | TimeUnits;

/**
 * Slot data for unit
 */
export declare interface UnitSlotData<Props extends FormKitInputs<Props>> {
    type: 'unit';
    value?: string | number;
    label?: string;
    disabled?: Bool;
    unit?: string;
    decimals?: Bool | number;
    minDecimals?: Bool | number;
    min?: number;
    max?: number;
    step?: number;
    displayLocale?: string;
    valueFormat?: string;
    handlers: FormKitFrameworkContext['handlers'] & {
        init(): void;
        handleInput: (e: InputEvent) => void;
        handleFocus: (e: InputEvent) => void;
        handleBlur(): void;
        handleBeforeInput: (e: InputEvent) => void;
        handleClick(e: MouseEvent): void;
        handleKeyDown: (e: InputEvent) => void;
    };
}

declare type VolumenUnits = 'liter' | 'milliliter' | 'gallon' | 'fluid-ounce';

declare type WeightUnits = 'gram' | 'kilogram' | 'stone' | 'ounce' | 'pound';

declare type Yes = 'true' | true | '';

/* <declare> */
declare module '@formkit/core' {
  export interface FormKitFrameworkContext {
    hasNextPage: (dataForNextPage?: unknown) => void
    page: number
    search: string
  }
}
/* </declare> */
/* <declare> */
import type { FormKitBaseSlots } from '@formkit/inputs'
export interface OptionLoader {
  (value: any, cachedItem: FormKitOptionsItem<any>):
    | FormKitOptionsItem<any>
    | string
    | void
    | Promise<FormKitOptionsItem<any> | string | void>
}

declare module '@formkit/inputs' {
  interface FormKitConditionalProps {
    overlay?: undefined
    chart?: undefined
  }

  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    autocomplete: {
      type: 'autocomplete'
      value?: Props['multiple'] extends Yes
        ? OptionsProValue<Props['options']>[]
        : OptionsProValue<Props['options']>
      debounce?: number | string
      multiple?: Bool
      popover?: Bool
      options: FormKitProOptionsProp
      selectionAppearance?: 'option' | 'text-input'
      filter?: (option: FormKitOptionsItem, search: string) => boolean
      optionLoader?: OptionLoader
      // Behavioral props
      max?: Props['multiple'] extends Yes ? number | string : undefined
      openOnClick?: Bool
      openOnFocus?: Bool
      closeOnSelect?: Bool
      openOnRemove?: Bool
      alwaysLoadOnOpen?: Bool
      selectionRemovable?: Props['multiple'] extends Yes ? undefined : Bool
      loadOnCreated?: Bool
      clearSearchOnOpen?: Bool
      emptyMessage?: string
      // TODO: audit these props.
    }

    colorpicker: {
      type: 'colorpicker'
      value?: string
      options?: FormKitOptionsPropWithGroups
      inline?: Bool
      format?: 'hex' | 'rgba' | 'hsla'
      popover?: Bool
      valueFormat?: 'hex' | 'rgba' | 'hsla'
      panelControls?: Bool
      panelFormat?: Bool
      eyeDropper?: Bool
      showValue?: Bool
      closeOnSelect?: Bool
      allowPaste?: Bool
    }

    currency: {
      type: 'currency'
      value?: string | number
      label?: string
      disabled?: Bool
      currency?: string
      displayLocale?: string
      decimals?: Bool | number | string
      minDecimals?: number | string
      min?: number | string
      max?: number | string
      step?: number
      // valueLocale?: string
      // valueFormat?: string
    }

    unit: {
      type: 'unit'
      value?: string | number
      label?: string
      disabled?: Bool
      unit: Units
      displayLocale?: string
      decimals?: Bool | number | string
      minDecimals?: number | string
      min?: number | string
      max?: number | string
      step?: number
      valueUnit?: Units
      valueUnitDecimals?: number
      unitDisplay?: 'long' | 'short' | 'narrow'
      unitFormatting: boolean | string
    }

    datepicker: {
      type: 'datepicker'
      value?: string | Date
      dateFormat?: string
      disabledDays?: (node: FormKitNode, date: Date) => boolean
      format?: string | FormatStyleObj
      maxDate?: Date | string
      popover?: Bool
      maxScan?: number
      minDate?: Date | string
      monthButtonFormat?: 'M' | 'MM' | 'MMM' | 'MMMM'
      monthFormat?: 'M' | 'MM' | 'MMM' | 'MMMM'
      overlay?: Bool
      pickerOnly?: Bool
      showMonths?: number
      sequence?: Array<Panels>
      valueFormat?: string
      valueLocale?: string
      weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      weekDayFormat?: 'dddd' | 'ddd' | 'dd'
      yearFormat?: 'YY' | 'YYYY'
      prefixIcon?: string
      suffixIcon?: string
    }

    dropdown: {
      type: 'dropdown'
      value?: Props['multiple'] extends Yes
        ? OptionsProValue<Props['options']>[]
        : OptionsProValue<Props['options']>
      multiple?: Bool
      popover?: Bool
      options?: FormKitProOptionsProp
      selectionAppearance?: 'truncate' | 'tags'
      filter?: (option: FormKitOptionsItem, search: string) => boolean
      optionLoader?: OptionLoader
      emptyMessage?: string
      max?: Props['multiple'] extends Yes ? number | string : undefined
      openOnFocus?: Bool
      openOnRemove?: Bool
      closeOnSelect?: Bool
      clearSearchOnOpen?: Bool
      selectionRemovable?: Props['multiple'] extends Yes ? undefined : Bool
      loadOnCreated?: Bool
      alwaysLoadOnOpen?: Bool
      clearOnSelect?: Bool
    }

    rating: {
      value?: number | string
      type: 'rating'
      min?: string | number
      max?: string | number
      step?: string | number
      hoverHighlight?: Bool
      offColor?: string
      onColor?: string
    }

    repeater: {
      type: 'repeater'
      value?: Array<Record<string, any>>
      addLabel?: string
      addAttrs?: Record<string, any>
      addButton?: Bool
      upControl?: Bool
      downControl?: Bool
      insertControl?: Bool
      removeControl?: Bool
      min?: number | string
      max?: number | string | null
    }

    mask: {
      type: 'mask'
      mask: string
      value?: string
      allowIncomplete?: Bool
      mode?: 'shift' | 'replace' | 'select'
      overlay?: Bool
      prefix?: string
      showMask?: Bool
      suffix?: string
      tokens?: PartMap
      unmaskValue?: Bool
    }

    slider: {
      type: 'slider'
      value?: string | string[] | number | number[]
      chart?: Array<{ value: number; at: number }>
      inputAttrs?: Record<string, any>
      marks?:
        | Bool
        | Array<{
            at?: number
            label?: string
            class?: string
            labelClass?: string
          }>
      markLabel?: Bool
      max?: number | string
      maxInputAttrs?: Record<string, any>
      min?: string | number
      minInputAttrs?: Record<string, any>
      prefix?: string
      showInput?: Bool
      snapToMarks?: Bool
      step?: number | string
      suffix?: string
      tooltip?: Bool
      tooltipFormat?: (value: number, handle: string) => string | undefined
      scalingFunction?: 'linear' | 'log' | SliderScalingFunction
      intervals?: SliderIntervals
    }

    taglist: {
      type: 'taglist'
      value?: any[]
      debounce?: number | string
      options?: FormKitProOptionsProp
      selectionAppearance?: 'truncate' | 'tags'
      popover?: Bool
      openOnClick?: Bool
      filter?: (option: FormKitOptionsItem, search: string) => boolean
      optionLoader?: OptionLoader
      emptyMessage?: string
      max?: number | string
      closeOnSelect?: Bool
      alwaysLoadOnOpen?: Bool
      loadOnCreated?: Bool
      clearSearchOnOpen?: Bool
    }

    toggle: {
      type: 'toggle'
      onValue?: any
      offValue?: any
      value?:
        | (Props['onValue'] extends AllReals ? Props['onValue'] : true)
        | (Props['offValue'] extends AllReals ? Props['offValue'] : false)
      altLabelPosition?: Bool
      offValueLabel?: string
      onValueLabel?: string
      valueLabelDisplay?: 'on' | 'off' | 'inner' | 'hidden'
      valueLabelColorOff?: string
      valueLabelColorOn?: string
      thumbIcon?: string
      thumbColorOn?: string
      iconColorOff?: string
      iconColorOn?: string
      trackColorOff?: string
      trackColorOn?: string
    }

    togglebuttons: {
      type: 'togglebuttons'
      onValue?: any
      offValue?: any
      value?:
        | (Props['onValue'] extends AllReals ? Props['onValue'] : true)
        | (Props['offValue'] extends AllReals ? Props['offValue'] : false)
      options?: FormKitProOptionsProp
      label?: string
      enforced?: Bool
      multiple?: Bool
      vertical?: Bool
      disabled?: Bool
      prefixIcon?: string
      suffixIcon?: string
    }

    transferlist: {
      type: 'transferlist'
      value?: OptionsProValue<Props['options']>[]
      options: FormKitProOptionsProp
      debounce?: number | string
      filter?: (option: FormKitOptionsItem, search: string) => boolean
      optionLoader?: OptionLoader
      sourceEmptyMessage?: string
      targetEmptyMessage?: string
      max?: string | number
      clearOnSelect?: Bool
      searchable?: Bool
      sourceLabel?: string
      targetLabel?: string
      transferOnSelect?: Bool
    }
  }

  interface FormKitInputSlots<Props extends FormKitInputs<Props>> {
    autocomplete: FormKitAutocompleteSlots<Props>
    colorpicker: FormKitColorpickerSlots<Props>
    currency: FormKitCurrencySlots<Props>
    datepicker: FormKitDatePickerSlots<Props> & FormKitOverlaySlots<Props>
    dropdown: FormKitDropdownSlots<Props>
    mask: FormKitBaseSlots<Props> & FormKitOverlaySlots<Props>
    rating: FormKitBaseSlots<Props> & FormKitRatingSlots<Props>
    repeater: FormKitRepeaterSlots<Props>
    slider: FormKitSliderSlots<Props> &
      (Props['chart'] extends Array<{ at: number; value: number }>
        ? SliderChartSlots<Props>
        : {})
    taglist: FormKitTaglistSlots<Props>
    toggle: FormKitToggleSlots<Props>
    togglebuttons: FormKitTogglebuttonsSlots<Props>
    transferlist: TransferlistSlots<Props>
    unit: FormKitUnitSlots<Props>
  }
}
/* </declare> */

export { }

