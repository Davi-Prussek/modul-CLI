import { groupMultiselect } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function recursos() {
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
},
{
  label: "vuetify",
  value: "install vuetify"
},
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
      value: "install @lucide/vue",
    },
    {
      label: "Devicon",
      value: "install devicon",
    },
    {
      label: "@mdi/font",
      value: "install @mdi/font",
    },
  ],
}
  })
  )
   return features
}