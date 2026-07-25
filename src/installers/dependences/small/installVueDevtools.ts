import { npm } from "../npm.js"

export async function installVueDevtools() {
    await npm([
    "install",
    "-D vite-plugin-vue-devtools"
    ])
}