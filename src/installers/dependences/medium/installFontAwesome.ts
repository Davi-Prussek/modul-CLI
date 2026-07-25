import { npm } from "../npm.js"

export async function installFontAwesome() {
    await npm([
    "install",
    "@fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/vue-fontawesome"
    ])
}