import { initPrompt } from "../prompts/init/initPrompt.js";
import { ConfigPrompt } from "../prompts/init/ConfigPrompt.js";
import { confirmConfig } from "../prompts/init/confirmPrompt.js";
import { initExecutor } from "../executors/initExecutor.js";

export async function init() {
    const projectStructure = await initPrompt()
    if (projectStructure.projectType == "project") {
        if (await confirmConfig()) {
        const Config = await ConfigPrompt()
        await initExecutor(Config)
        }
    } else {
        //Alguém tem que fazer esse else né? alguém
    }
}