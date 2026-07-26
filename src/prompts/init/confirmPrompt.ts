import { confirm } from "@clack/prompts";
import { handleCancel } from "../utils/cancel.js";

export async function confirmConfig() {
    const init: boolean | symbol = await confirm({
        message: "Do you really want to install the package and the architecture?"
    })
    return {
        init
    }
}