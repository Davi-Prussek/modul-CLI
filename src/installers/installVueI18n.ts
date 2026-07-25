import { execa } from "execa";

export async function VueI18n() {
    await execa("npm", [
    "install",
    "VueI18n"
    ]),
}
