import type { ConfigType } from "./prompt/index.js";
import { 
  InicializeRepository,
  recursos,
  projectName,
  useTypeScript,
  cssFramework,
 } from "./index.js"

export async function ConfigPrompt(): Promise<ConfigType> {
  const ProjectName = await projectName()
  const use_typeScript = await useTypeScript()
  const features = await recursos()
  const Inicialize_repository = await InicializeRepository()
  const css_framework = await cssFramework()
  return {
    ProjectName,
    use_typeScript,
    features,
    css_framework,
    Inicialize_repository,
  };
}