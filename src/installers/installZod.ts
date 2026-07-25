import { execa } from "execa";

export async function Zod() {
    await execa("npm", [
    "install",
    "Zod"
    ]),
}
