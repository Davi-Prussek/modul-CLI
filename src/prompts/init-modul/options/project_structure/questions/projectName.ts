import { text } from "@clack/prompts";
import { handleCancel } from "./index.js";

export async function projectName(): Promise<string> {
   return handleCancel(
    await text({
      message: "Package name:",
      placeholder: "modul-project",
    })
  ).trim() || "modul-project"
}