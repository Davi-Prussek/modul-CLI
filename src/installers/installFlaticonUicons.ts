import { execa } from "execa";

export async function FlaticonUicons() {
    await execa("npm", [
    "install",
    "FlaticonUicons"
    ]),
}
