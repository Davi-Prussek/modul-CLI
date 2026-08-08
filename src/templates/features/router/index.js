import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Registre suas rotas aqui
  ],
})

export default router


/*
Exemplo de rota padrão

{
    path: '/caminho',
    name: 'nome da rota',
    component: () => import('Caminho da pasta'),
}
*/