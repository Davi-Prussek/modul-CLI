import { npm } from "../npm.js"

export async function installPiniaPluginPersistedState() {
    await npm([
    "install",
    "pinia-plugin-persistedstate"
    ])
}