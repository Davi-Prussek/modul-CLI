import { confirm, multiselect } from "@clack/prompts";
import { handleCancel } from "./index.js"

export async function gitConfigPrompt(): Promise<string[]> {
  const gitActions = handleCancel(
    await multiselect({
      message: "",
      required: false,
      options:
        [
          {
            label: "Add README?",
            value: "readme",
          },
          {
            label: "Use branch dev?",
            value: "branch",
          },
        ],
      },
    ),
  );
    return gitActions;
}
