export function letraMaiusculaUnica (nome: string) {
  let nomeComeco = nome.charAt(0);
  let restoNome = nome.substring(1);
  return (nome = nomeComeco.toUpperCase() + restoNome);
};
