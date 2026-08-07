import type { ConfigType } from "../../../../types/ConfigType.js";
import { projectName } from "./projectName.js"
import { useTypeScript } from "./use_typeScript.js"
import { recursos } from "./features.js"
import { cssFramework } from "./css_framework.js"
import { gitConfigPrompt } from "./gitConfigPrompt.js"
import { vuetifyPrompt } from "./vuetifyPrompt.js"
import { inicializePrompt } from "./repository.js";
import { handleCancel } from "../../../../utils/cancel.js";
import { piniaPersist } from "./piniaPersist.js";

export {
      type ConfigType,
      projectName,
      useTypeScript,
      recursos,
      cssFramework,
      gitConfigPrompt,
      vuetifyPrompt,
      inicializePrompt,
      handleCancel,
      piniaPersist,
}