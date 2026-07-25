import { npm } from "../npm.js"

export async function installVitest() {
    await npm([
    "install",
    "-D vitest @vitest/ui jsdom @vue/test-utils"
    ])
}