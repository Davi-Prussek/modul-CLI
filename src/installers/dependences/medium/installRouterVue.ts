import { npm } from "../npm.js"

export async function installRouterVue() {
    await npm([
    "install",
    "vue-router"
    ])
}