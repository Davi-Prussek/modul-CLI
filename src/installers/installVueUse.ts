import { execa } from "execa";

export async function VueUse() {
    await execa("npm", [
    "install",
    "VueUse"
    ]),
}
