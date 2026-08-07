import type { ConfigType } from "./index.js";
import { 
  recursos,
  projectName,
  useTypeScript,
  cssFramework,
  inicializePrompt,
  gitConfigPrompt,
  vuetifyPrompt,
  piniaPersist,
} from "./index.js"

export async function ConfigPrompt(): Promise<ConfigType> {
  const ProjectName = await projectName()
  const use_typeScript = await useTypeScript()
  const css_framework = await cssFramework()
  const features = await recursos()
  const vuetify = features.includes("vuetify") ? await vuetifyPrompt() : ""
  const repository = await inicializePrompt()
  const gitConfig = repository ? await gitConfigPrompt() : []
  const piniaPersistPlugin = features.includes('pinia') ? await piniaPersist() ? ["pinia-plugin-persistedstate"] : [] : []

  return {
    ProjectName,
    use_typeScript,
    features,
    css_framework,
    repository,
    vuetify,
    gitConfig,
    piniaPersistPlugin,
  }
}