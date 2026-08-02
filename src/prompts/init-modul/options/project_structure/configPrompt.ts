import type { ConfigType } from "./index.js";
import { 
  recursos,
  projectName,
  useTypeScript,
  cssFramework,
  inicializePrompt,
  gitConfigPrompt,
  vuetifyPrompt,
} from "./index.js"

export async function ConfigPrompt(): Promise<ConfigType> {
  const ProjectName = await projectName()
  const use_typeScript = await useTypeScript()
  const features = await recursos()
  const css_framework = await cssFramework()
  const repository = await inicializePrompt()
  const gitConfig = repository ? await gitConfigPrompt() : []
  const vuetify = features.includes("vuetify") ? await vuetifyPrompt() : ""
  return {
    ProjectName,
    use_typeScript,
    features,
    css_framework,
    repository,
    vuetify,
    gitConfig,
  }
}