import { execa } from "execa";

export async function RouterVue() {
    await execa("npm", [
    "install",
    "RouterVue"
    ]),
}
