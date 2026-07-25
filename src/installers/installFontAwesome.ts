import { execa } from "execa";

export async function FontAwesome() {
    await execa("npm", [
    "install",
    "FontAwesome"
    ]),
}
