import { groupMultiselect } from "@clack/prompts"
import { handleCancel } from "./index.js"
import {
  dependences,
  icons,
  installers,
} from "./features/index.js"

export async function recursos() {
  return [...await dependences(), ...await icons(), ...await installers()]
}