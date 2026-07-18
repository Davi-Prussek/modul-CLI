import { intro,outro,select } from "@clack/prompts"

intro('vue custom CLI')

const opcao = await select({
  message: 'O que deseja fazer?',
  options: [
    {
      value: 'create',
      label: 'Criar projeto'
    },
    {
      value: 'component',
      label: 'Criar componente'
    },
    {
      value: 'exit',
      label: 'Sair'
    }
  ]
});

console.log(opcao);

outro('Até mais!');