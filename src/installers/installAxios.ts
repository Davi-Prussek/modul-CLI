import { execa } from "execa";

export async function Axios() {
    await execa("npm", [
    "install",
    "Axios"
    ]),
}
