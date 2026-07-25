import { execa } from "execa";

export async function Eslint() {
    await execa("npm", [
    "install",
    "Eslint"
    ]),
}
