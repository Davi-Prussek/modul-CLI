import {letraMaiusculaUnica} from "../utils/firstLetter.js"

const features = [
        { label: "Router Vue", value: "RouterVue" },
        { label: "Pinia", value: "Pinia" },
        { label: "Vuetify", value: "Vuetify" },
        { label: "Axios", value: "Axios" },
        { label: "VueUse", value: "VueUse" },
        { label: "Day.js", value: "Dayjs" },
        { label: "Zod", value: "Zod" },
        { label: "Vue I18n", value: "VueI18n" },
        {label: "Pinia Plugin Persisted State", value: "PiniaPluginPersistedState"},
        { label: "Dotenv (.env support)", value: "Dotenv" },
        { label: "Vue DevTools", value: "VueDevtools" },
        { label: "ESLint", value: "Eslint" },
        { label: "Prettier", value: "Prettier" },
        { label: "Vitest", value: "Vitest" },
        { label: "End-to-End Testing", value: "EndToEndTesting" },
        { label: "Environment variables", value: "EnvironmentVariables" },
        { label: "Font Awesome", value: "FontAwesome" },
        { label: "Flaticon UIcons", value: "FlaticonUicons" },
        { label: "Lucide Icons", value: "LucideIcons" },
        { label: "Devicon", value: "Devicon" },
    ]

import fs from "fs-extra";
import Handlebars from "handlebars";

const template = await fs.readFile(
    "src/templates/installers.hbs",
    "utf8",
)

const compilado = Handlebars.compile(template);

for (const feature of features) {
  const content = compilado({
    name: feature.value,
    package: feature.value
  });

  await fs.writeFile(
    `src/installers/install${letraMaiusculaUnica(feature.value)}.ts`,
    content
  );
}


