import { groupMultiselect } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function recursos() {
const features = handleCancel(
    await groupMultiselect({
      initialValues: [],
      required: false,
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
  value: "axios"
},
{
  label: "VueUse",
  value: "@vueuse/core"
},
{
  label: "Day.js",
  value: "dayjs"
},
{
  label: "Zod",
  value: "zod"
},
{
  label: "vuetify",
  value: "vuetify"
},
  ],
  icons: [
    {
      label: "Font Awesome",
      value: "@fortawesome",
    },
    {
      label: "Flaticon UIcons",
      value: "@flaticon/flaticon-uicons",
    },
    {
      label: "Lucide Icons",
      value: "@lucide/vue",
    },
    {
      label: "Devicon",
      value: "devicon",
    },
    {
      label: "@mdi/font",
      value: "@mdi/font",
    },
  ],
}
  })
  )
   return features
}