import { select } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function vuetifyPrompt() {
    const version = handleCancel(await select({
        message: "Select a vuetify version:",
        options: [
            {
                label: "Vuetify",
                value: "install vuetify",
            },
            {
                label: "Vuetify/v0",
                value: "install @vuetify/v0",
            },
        ]
    }))

    return {
        version
    }
}