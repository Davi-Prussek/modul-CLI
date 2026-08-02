import { select } from "@clack/prompts"
import { handleCancel } from "./index.js"

export async function vuetifyPrompt() {
    const version = handleCancel(await select({
        message: "Select a vuetify version:",
        options: [
            {
                label: "Vuetify",
                value: "vuetify",
            },
            {
                label: "Vuetify/v0",
                value: "@vuetify/v0",
            },
        ]
    }))

    return version;
}