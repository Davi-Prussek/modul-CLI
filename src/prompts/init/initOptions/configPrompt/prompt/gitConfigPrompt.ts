import { confirm, groupMultiselect } from "@clack/prompts";
import { handleCancel } from "./index.js"

export async function gitConfigPrompt() {
  const gitActions = handleCancel(
    await groupMultiselect({
      message: "",
      options: {
        "Git Actions": [
          {
            label: "Add .gitignore?",
            value: "gitignore",
          },
          {
            label: "Add README?",
            value: "readme",
          },
          {
            label: "Add branch dev?",
            value: "branch",
          },
          {
            label: "Publish repository in github?",
            value: "publish",
          },
        ],
      },
    }),
  );
  return {
    gitActions,
  };
}
