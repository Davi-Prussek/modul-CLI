import { npm } from "../npm.js"

export async function installFlaticonUicons() {
    await npm([
    "install",
    "@flaticon/flaticon-uicons"
    ])
}