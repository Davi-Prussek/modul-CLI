import { execa } from "execa";

export async function VueDevtools() {
    await execa("npm", [
    "install",
    "VueDevtools"
    ]),
}
