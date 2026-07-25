import { npm } from "../npm.js"

export async function installLucideIcons() {
    await npm([
    "install",
    "lucide-vue-next"
    ])
}