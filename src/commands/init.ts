import { initPrompt } from "../prompts/initPrompt.js";
import { initExecutor } from "../executors/initExecutor.js";

export async function init() {
    const projectConfig = await initPrompt()
    initExecutor()
}