import { execa } from "execa";

export async function LucideIcons() {
    await execa("npm", [
    "install",
    "LucideIcons"
    ]),
}
