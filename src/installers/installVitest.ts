import { execa } from "execa";

export async function Vitest() {
    await execa("npm", [
    "install",
    "Vitest"
    ]),
}
