import {select} from "@clack/prompts";
import { handleCancel } from "../../utils/cancel.js";
import type { InitType } from "../../types/initType.js"

export async function initPrompt(): Promise<InitType> {

const projectType = handleCancel( await select({
    message: "Selecione um modo de inicialização:",
    options: [
        {label: 'Projeto estruturado', value: 'project'},
        {label: 'Copiar template', value: 'copy'},
    ]}))

return {
    projectType
};
}