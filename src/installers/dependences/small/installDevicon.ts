import { npm } from "../npm.js"

export async function installDevicon() {
    await npm([
    "install",
    "devicon"
    ])
}