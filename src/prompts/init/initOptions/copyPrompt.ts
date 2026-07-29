import { text } from "@clack/prompts";
import { handleCancel } from "./index.js";

export async function copyPrompt() {
    const repository = handleCancel(await text({
        message: "Enter the repository URL."
    })
    )
    return {
        repository
    }
}