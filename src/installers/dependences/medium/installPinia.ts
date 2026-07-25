import { npm } from "../npm.js"

export async function installPinia() {
    await npm([
    "install",
    "pinia"
    ])
}