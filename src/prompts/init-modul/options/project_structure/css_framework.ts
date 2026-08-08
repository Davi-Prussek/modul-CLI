import { select } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function cssFramework() {
const css_framework = handleCancel(
    await select({
    message: "Selecione o framework de CSS:",
    options: [
      { label: "Default", value: "default" },
      { label: "Tailwind CSS", value: "tailwindcss" },
      { label: "Bootstrap", value: "bootstrap" },
    ]}))
    return css_framework
}