import { npm } from "../npm.js"

export async function installAxios() {
    await npm([
    "install",
    "axios"
    ])
}