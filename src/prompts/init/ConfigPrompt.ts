import { text, confirm, select, groupMultiselect } from "@clack/prompts";
import { handleCancel } from "../utils/cancel.js";
import type { ConfigType } from "../types/ConfigType.js";


export async function ConfigPrompt(): Promise<ConfigType> {
  
  const ProjectName = handleCancel(
    await text({
    message: "Package name:",
  })
  )
  const use_typeScript = handleCancel(
    await confirm({
    message: "Use TypeScript?",
  })
  )
  const features = handleCancel(
    await groupMultiselect({
    message: "Select features to include in your project:",
    options: {
      features: [
        { label: "Router Vue", value: "router-vue" },
        { label: "Pinia", value: "pinia" },
        { label: "Vuetify", value: "vuetify" },
        { label: "Vuetify/0", value: "vuetify/0" },
        { label: "Axios", value: "axios" },
        { label: "VueUse", value: "vueUse" },
        { label: "Day.js", value: "dayjs" },
        { label: "Zod", value: "zod" },
        { label: "Vue I18n", value: "vue-i18n" },
        {
          label: "Pinia Plugin Persisted State",
          value: "pinia-plugin-persisted-state",
        },
        { label: "Dotenv (.env support)", value: "dotenv" },
        { label: "Vue DevTools", value: "vue-devtools" },
        { label: "ESLint", value: "eslint" },
        { label: "Prettier", value: "prettier" },
        { label: "Vitest", value: "vitest" },
        { label: "End-to-End Testing", value: "end-to-end-testing" },
        { label: "Environment variables", value: "environment-variables" },
      ],
      icons: [
        { label: "Font Awesome", value: "font-awesome" },
        { label: "Flaticon UIcons", value: "flaticon-uicons" },
        { label: "Lucide Icons", value: "lucide-icons" },
        { label: "Devicon", value: "devicon" },
      ],
    },
  })
  )
  const css_framework = handleCancel(
    await select({
    message: "Select a CSS framework:",
    options: [
      { label: "Tailwind CSS", value: "tailwind" },
      { label: "Bootstrap", value: "bootstrap" },
      { label: "Default", value: "Default" },
    ]}))
  const Inicialize_repository = handleCancel(
    await confirm({
    message: "Inicialize a git repository?",
  })
  )
  return {
    ProjectName,
    use_typeScript,
    features,
    css_framework,
    Inicialize_repository,
  };
}