import { execa } from "execa";
import { cwd } from "node:process";
import { getRepoName } from "../../utils/repoName.js";

export async function copyExecutor(path: string) {
  if (path.startsWith("http") || path.startsWith("https")) {
    execa("git", ["clone", path], {
      stdio: "inherit",
    });
    execa("npm", ["install"], { stdio: "inherit", cwd: getRepoName(path) });
  }
}
