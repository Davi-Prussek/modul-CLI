import { confirm } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function inicializePrompt() {
const repository = handleCancel(await confirm({
    message: "Deseja inicializar um repositório?"
}))
    return repository; 
}