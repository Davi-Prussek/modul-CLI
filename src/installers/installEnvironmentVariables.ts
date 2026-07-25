import { execa } from "execa";

export async function EnvironmentVariables() {
    await execa("npm", [
    "install",
    "EnvironmentVariables"
    ]),
}
