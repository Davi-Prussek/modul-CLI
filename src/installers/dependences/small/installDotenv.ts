import { npm } from "../npm.js"

export async function installDotenv() {
    await npm([
    "install",
    "dotenv"
    ])
}