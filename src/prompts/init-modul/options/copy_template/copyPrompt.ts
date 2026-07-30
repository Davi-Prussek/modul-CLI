import { text } from "@clack/prompts";
import { handleCancel } from "../../../../utils/cancel.js";

export async function copyPrompt() {
    const repository = handleCancel(await text({
        message: "Enter the template repository URL or path:",
        placeholder: "https://github.com/user/repository.git or C:\\Users\\name\\project"
    })
    )
    return {
        repository
    }
}