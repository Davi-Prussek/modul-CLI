import { npm } from "../npm.js"

export async function installEslint() {
    await npm([
    "install",
    "-D eslint @eslint/js typescript-eslint eslint-plugin-vue"
    ])
}