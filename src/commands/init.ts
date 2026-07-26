import { initPrompt } from "../prompts/initPrompt.js";
import { ConfigPrompt } from "../prompts/ConfigPrompt.js";
import { confirmConfig } from "../prompts/confirmPrompt.js";

import { initExecutor } from "../executors/initExecutor.js";

export async function init() {
    const projectStructure = await initPrompt()
    if (projectStructure.projectType == "project") {
        if (await confirmConfig()) {
            console.log("A arquitetura completa e comandos seram criados.");
        const Config = await ConfigPrompt()
        }
    } else {
        console.log("Somente o pacote com os comandos será adicionado.");
    }
}