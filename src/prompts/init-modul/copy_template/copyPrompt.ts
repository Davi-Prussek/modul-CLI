import { text } from "@clack/prompts";
import { handleCancel } from "../../../utils/cancel.js";

export async function copyPrompt() {
    const repository = handleCancel(await text({
        message: "Coloque a URL do template do github:",
        placeholder: "https://github.com/user/repository.git"
    })
    )
    return {
        repository
    }
}