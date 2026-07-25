import { execa } from "execa";

export async function npm(args: string[]) {
    await execa("npm",args,
        { stdio: "inherit"});
}

//Isso é só uma função que será importada para todos os arquivos na pasta dependences

//This is just a function that will be imported into all files in the `dependencies` folder.