import {select} from "@clack/prompts";
import { handleCancel } from "../../utils/cancel.js";
import type { InitType } from "../../types/initType.js"

export async function initPrompt(): Promise<InitType> {

const projectType = handleCancel( await select({
    message: "Select an initialization mode:",
    options: [
        {label: 'Commands only', value: 'command'},
        {label: 'Project Structure', value: 'project'},
        {label: 'Copy template', value: 'copy'},
    ]}))

return {
    projectType
};
}