import { initPrompt,ConfigPrompt,copyPrompt } from "../prompts/index.js";
import { projectExecutor,copyExecutor } from "../executors/index.js";
import { intro, log } from "@clack/prompts";
import gradient from "gradient-string";

export async function init() {
  intro(
    gradient([
      "#42D392",
      "#47C7A2",
      "#52ACC4",
      "#55A2D0",
      "#5A96E0",
      "#5C8DE8",
      "#3F3BCF",
      "#8F3DB3",
      "#C353C3",
    ])("Welcome to Modul CLI!"),
  );
  log.message(
    "A modular CLI for building modern, scalable web applications with a structured development workflow.",
  );
  const projectStructure = await initPrompt();
  if (projectStructure.projectType == "project") {
    await projectExecutor(await ConfigPrompt());
  } else if (projectStructure.projectType == "copy") {
    copyExecutor((await copyPrompt()).repository)
  }
}
