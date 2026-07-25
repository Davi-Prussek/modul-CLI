import { npm } from "../npm.js"

export async function installVueI18n() {
    await npm([
    "install",
    "vue-i18n"
    ])
}