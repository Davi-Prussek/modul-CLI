import { execa } from "execa";

export async function Vuetify() {
    await execa("npm", [
    "install",
    "Vuetify"
    ]),
}
