import { execa } from "execa";

export async function initExecutor() {
await execa(
    "npm", 
    [
        "create",
        "vite@latest",
        "."
    ]
)
}