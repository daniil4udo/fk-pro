import { defaultConfig } from '@formkit/vue';
import {
    autocomplete,
    createProPlugin,
    datepicker,
    dropdown,
    mask,
    rating,
    repeater,
    taglist,
    toggle,
    togglebuttons,
} from './lib/index';

// Create the Pro plugin with your `Project Key` and desired Pro Inputs:
const proPlugin = createProPlugin('fk-', {
    datepicker,
    dropdown,
    mask,
    rating,
    repeater,
    taglist,
    toggle,
    togglebuttons,
    // any other Pro Inputs
});

export default defaultConfig({
    plugins: [proPlugin],
});
