import { execa } from "execa";

export async function Devicon() {
    await execa("npm", [
    "install",
    "Devicon"
    ]),
}
