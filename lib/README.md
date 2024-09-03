# FormKit Pro

FormKit Pro is a first party library of professional grade "synthetic" inputs for the FormKit form building framework. This growing list of inputs currently includes:

- Autocomplete
- Currency
- Datepicker
- Dropdown
- Colorpicker
- Mask
- Rating
- Repeater
- Slider
- Taglist
- Toggle
- Toggle Buttons
- Transfer List
- Slider

## Usage

To use FormKit Pro follow these steps:

1. Register for a free account at: https://formkit.com/pro
2. Create a new project and copy the project key.
3. Follow installation instructions for the pro package.

### Installation

FormKit Pro is a FormKit plugin that is installed just like any other plugin. To configure FormKit Pro, import the `createProPlugin` from the `@formkit/pro` library. This function takes 2 arguments, your project key, and any pro inputs you want to use.

```js
// main.js
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, autocomplete } from '@formkit/pro'
import App from 'App.vue'

const pro = createProPlugin('{your-project-key}', {
  autocomplete,
})

const app = createApp(App)

app.use(
  plugin,
  defaultConfig({
    plugins: [pro],
  })
)
```

## License

Although using FormKit Pro in production requires a paid license, you may use these these inputs for free during your entire development process. You will not be charged until after your project goes into production. For pricing details, please visit [formkit.com/pro](https://formkit.com/pro).

By using this software, you agree to the abide by the [included license](./LICENSE).
