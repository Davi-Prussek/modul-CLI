import { npm } from "../npm.js"

export async function installEndToEndTesting() {
    await npm([
    "install",
    "-D playwright"
    ])
}