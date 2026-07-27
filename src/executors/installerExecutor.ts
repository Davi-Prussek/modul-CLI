//Esse arquivo foi usado em versões passadas porém não é mais necesário.

/* const features = [
        { label: "Router Vue", value: "RouterVue", package: 'vue-router' },
        { label: "Pinia", value: "Pinia", package: 'pinia' },
        { label: "Vuetify", value: "Vuetify", package: 'vuetify' },
        { label: "Vuetify/0", value: "VuetifyV0", package: '@vuetify/v0' },
        { label: "Axios", value: "Axios", package: 'axios' },
        { label: "VueUse", value: "VueUse", package: '@vueuse/core' },
        { label: "Day.js", value: "Dayjs", package: 'dayjs' },
        { label: "Zod", value: "Zod", package: 'zod' },
        { label: "Vue I18n", value: "VueI18n", package: 'vue-i18n' },
        {label: "Pinia Plugin Persisted State", value: "PiniaPluginPersistedState", package: 'pinia-plugin-persistedstate' },
        { label: "Dotenv (.env support)", value: "Dotenv", package: 'dotenv' },
        { label: "Vue DevTools", value: "VueDevtools", package: '-D vite-plugin-vue-devtools' },
        { label: "ESLint", value: "Eslint", package: '-D eslint @eslint/js typescript-eslint eslint-plugin-vue' },
        { label: "Prettier", value: "Prettier", package: '-D prettier eslint-config-prettier eslint-plugin-prettier' },
        { label: "Vitest", value: "Vitest", package: '-D vitest @vitest/ui jsdom @vue/test-utils' },
        { label: "End-to-End Testing", value: "EndToEndTesting", package: '-D playwright' },
        { label: "Font Awesome", value: "FontAwesome", package: '@fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/vue-fontawesome' },
        { label: "Flaticon UIcons", value: "FlaticonUicons", package: '@flaticon/flaticon-uicons' },
        { label: "Lucide Icons", value: "LucideIcons", package: 'lucide-vue-next' },
        { label: "Devicon", value: "Devicon", package: 'devicon' },
    ]

import fs from "fs-extra";
import Handlebars from "handlebars";
import {letraMaiusculaUnica} from "../utils/firstLetter.js"

const template = await fs.readFile(
    "src/templates/installers.hbs",
    "utf8",
)
const compilado = Handlebars.compile(template);

for (const feature of features) {
  const content = compilado({
    name: feature.value,
    package: feature.package
  });

  await fs.writeFile(
    `src/installers/dependences/install${letraMaiusculaUnica(feature.value)}.ts`,
    content
  );
}


 */