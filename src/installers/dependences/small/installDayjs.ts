import { npm } from "../npm.js"

export async function installDayjs() {
    await npm([
    "install",
    "dayjs"
    ])
}