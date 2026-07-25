import { execa } from "execa";

export async function Pinia() {
    await execa("npm", [
    "install",
    "Pinia"
    ]),
}
