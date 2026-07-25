import { npm } from "../npm.js"

export async function installVuetifyV0() {
    await npm([
    "install",
    "@vuetify/v0"
    ])
}