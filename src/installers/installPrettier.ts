import { execa } from "execa";

export async function Prettier() {
    await execa("npm", [
    "install",
    "Prettier"
    ]),
}
