import { npm } from "../npm.js"

export async function installVuetify() {
    await npm([
    "install",
    "vuetify"
    ])
}