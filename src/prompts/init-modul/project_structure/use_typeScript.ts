import { confirm } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function useTypeScript() {
let useTypeScript = handleCancel(
    await confirm({
    message: "Usar TypeScript?",
  })
  )
    return useTypeScript
}