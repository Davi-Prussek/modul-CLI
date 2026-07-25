import { execa } from "execa";

export async function Dayjs() {
    await execa("npm", [
    "install",
    "Dayjs"
    ]),
}
