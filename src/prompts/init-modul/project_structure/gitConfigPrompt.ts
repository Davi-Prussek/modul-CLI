import { confirm, multiselect } from "@clack/prompts";
import { handleCancel } from "./index.js"

export async function gitConfigPrompt(): Promise<string[]> {
  const gitActions = handleCancel(
    await multiselect({
      message: "Configurações de git:",
      required: false,
      options:
        [
          {
            label: "Adicionar README.md padrão?",
            value: "readme",
          },
          {
            label: "Usar a branch dev?",
            value: "branch",
          },
        ],
      },
    ),
  );
    return gitActions;
}
