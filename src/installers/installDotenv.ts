import { execa } from "execa";

export async function Dotenv() {
    await execa("npm", [
    "install",
    "Dotenv"
    ]),
}
