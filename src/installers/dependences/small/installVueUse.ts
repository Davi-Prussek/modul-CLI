import { npm } from "../npm.js"

export async function installVueUse() {
    await npm([
    "install",
    "@vueuse/core"
    ])
}