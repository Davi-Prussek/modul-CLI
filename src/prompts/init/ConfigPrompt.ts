import { text, confirm, select, groupMultiselect } from "@clack/prompts";
import { handleCancel } from "../../utils/cancel.js";
import type { ConfigType } from "../../types/ConfigType.js";


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
  dependences: [
    {
  label: "Router Vue",
  value: "router"
},
{
  label: "Pinia",
  value: "pinia"
},
{
  label: "ESLint",
  value: "eslint"
},
{
  label: "Prettier",
  value: "prettier"
},
{
  label: "Vitest",
  value: "vitest"
},
{
  label: "End-to-End Testing",
  value: "playwright"
}
  ],
  installers: [
    {
  label: "Axios",
  value: "install axios"
},
{
  label: "VueUse",
  value: "install @vueuse/core"
},
{
  label: "Day.js",
  value: "install dayjs"
},
{
  label: "Zod",
  value: "install zod"
}
  ],
  icons: [
    {
      label: "Font Awesome",
      value: "install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/vue-fontawesome",
    },
    {
      label: "Flaticon UIcons",
      value: "install @flaticon/flaticon-uicons",
    },
    {
      label: "Lucide Icons",
      value: "install lucide-vue-next",
    },
    {
      label: "Devicon",
      value: "install devicon",
    },
  ],
}
  })
  )
  const css_framework = handleCancel(
    await select({
    message: "Select a CSS framework:",
    options: [
      { label: "Tailwind CSS", value: "install -D tailwindcss" },
      { label: "Bootstrap", value: "install bootstrap" },
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