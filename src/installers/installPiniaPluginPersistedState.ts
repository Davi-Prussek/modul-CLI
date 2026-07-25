import { execa } from "execa";

export async function PiniaPluginPersistedState() {
    await execa("npm", [
    "install",
    "PiniaPluginPersistedState"
    ]),
}
