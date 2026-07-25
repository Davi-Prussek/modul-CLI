import { npm } from "../npm.js"

export async function installPrettier() {
    await npm([
    "install",
    "-D prettier eslint-config-prettier eslint-plugin-prettier"
    ])
}