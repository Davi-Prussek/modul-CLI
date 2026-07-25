import { execa } from "execa";

export async function EndToEndTesting() {
    await execa("npm", [
    "install",
    "EndToEndTesting"
    ]),
}
