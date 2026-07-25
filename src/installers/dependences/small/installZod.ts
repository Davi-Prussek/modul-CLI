import { npm } from "../npm.js"

export async function installZod() {
    await npm([
    "install",
    "zod"
    ])
}