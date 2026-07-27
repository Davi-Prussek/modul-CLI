import { initPrompt } from "../prompts/init/initPrompt.js";
import { ConfigPrompt } from "../prompts/init/ConfigPrompt.js";
import { confirmConfig } from "../prompts/init/confirmPrompt.js";
import { initExecutor } from "../executors/initExecutor.js";
import { handleCancel } from "../utils/cancel.js";
import { intro,log } from "@clack/prompts";
import gradient from "gradient-string";

export async function init() {
    intro(
      gradient([
        "#42D392",
        "#47C7A2",
        "#4BBDAE",
        "#4DB8B4",
        "#52ACC4",
        "#55A2D0",
        "#5A96E0",
        "#5C8DE8",
        "#6088F3",
      ])("Welcome to Modul CLI!"),
    )
    log.message(
  "A modular CLI for building modern, scalable web applications with a structured development workflow."
);
  const projectStructure = await initPrompt();
  if (projectStructure.projectType == "project") {
      const Config = await ConfigPrompt();
      await initExecutor(Config);
  } else {
    //Alguém tem que fazer esse else né? alguém
  }
}
