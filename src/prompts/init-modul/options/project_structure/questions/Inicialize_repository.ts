import { confirm } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function InicializeRepository() {
  const Inicialize_repository = handleCancel(
    await confirm({
    message: "Inicialize a git repository?",
  })
)
    return Inicialize_repository
}