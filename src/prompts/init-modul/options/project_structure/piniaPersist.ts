import { confirm } from "@clack/prompts"; 
import { handleCancel } from "./index.js"

export async function piniaPersist() {
    return handleCancel(
        await confirm({
            message: 'Use Pinia Persisted State?'
        })
    )
}