import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import config from '../formkit.config.ts';
import { plugin, defaultConfig } from '@formkit/vue';

const app = createApp(App).use(plugin, defaultConfig(config)).mount('#app');
