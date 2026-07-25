import { isCancel, cancel, symbol } from "@clack/prompts";

export function handleCancel<Type>(valor:Type): Exclude<Type, symbol> {
    if (isCancel(valor)) {
    cancel("✖ Operation cancelled.")
    process.exit(0);
  }
  return valor as Exclude<Type, symbol>
}

//Essa função serve para caso o usuário cancele 
//a operação com ctrl+C, vai executar essa função.