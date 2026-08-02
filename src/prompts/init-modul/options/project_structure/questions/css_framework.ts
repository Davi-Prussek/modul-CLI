import { select } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function cssFramework() {
const css_framework = handleCancel(
    await select({
    message: "Select a CSS framework:",
    options: [
      { label: "Tailwind CSS", value: "tailwindcss" },
      { label: "Bootstrap", value: "bootstrap" },
      { label: "Default", value: "default" },
    ]}))
    return css_framework
}