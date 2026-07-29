export function getRepoName(url: string): string {
  const repositorio = url
    .trim()
    .split("/")
    .pop();

  if (!repositorio) {
    throw new Error("Invalid repository URL.");
  }

  return repositorio.replace(/\.git$/, "");
}