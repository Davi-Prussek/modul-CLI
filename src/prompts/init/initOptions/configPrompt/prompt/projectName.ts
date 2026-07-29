import { text } from "@clack/prompts";
import { handleCancel } from "./index.js";

export async function projectName(): Promise<string> {
  let projectName = handleCancel(
    await text({
      message: "Package name:",
      placeholder: "modul-project",
    })
  );

  if (!projectName.trim()) {
    projectName = "modul-project";
  }

  return projectName;
}