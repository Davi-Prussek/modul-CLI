# Explicação da função de cada pasta

## Sumário

#### [Assets](#assets)

- [Images](#images)
- [Icons](#icons)
- [Fonts](#fonts)
- [Styles](#styles)

#### [Components](#components)

- [Data-Display](#data-display)
- [Feedback](#feedback)
- [Forms](#forms)
- [Layout](#layout)
- [Navigation](#navigation)

#### [Composables](#composables)

#### [Constants](#constants)

#### [TypeScript](#typescript)

- [Classes](#classes)
- [Generics](#generics)
- [Interfaces](#interfaces)

##### [Types](#types)

- [Guards](#guards)
- [Utility](#utility)

#### [Utils](#utils)

#### [Views](#views)

## assets

> Arquivos de mídia que serão estáticos na aplicação. Basicamente como uma galeria de mídia.

### images

> Imagens estáticas da aplicação. Ou seja, fixas.

### icons

> Ícones da aplicação e um lugar para importá-los e usá-los de forma global.

### fonts

> Pasta onde armazena as fontes da aplicação para manter uma boa padronização.

### styles

> Pasta de arquivos CSS globais da aplicação, ela inicia com um arquivo main.css onde vai se concentrar o estilo geral da aplicação.

## composables

> Pasta destinada a guardar as funções reutilizáveis que encapsulam uma funcionalidade reutilizável da aplicação.

Exemplos:

- useTheme
- useScreen
- useAuth
- useLocalStorage

## components

> Pasta que agrupa as principais os componentes da aplicação separando eles por função. Componentes são partes menores reutilizáveis de uma aplicação.

### data-display

> Componentes usados para exibir alguma informação.

Exemplos:

- Avatar
- Badge
- Table
- List

### feedback

> Componentes usados para mostrar alguma mensagem.

Exemplos:

- Mensagens
- Toast
- Loading
- Dialog

### forms

> Componentes usados em formulários.

Exemplos:

- Selects
- inputs
- Radio
- Confirm
- Checkbox

### layout

> Componentes responsáveis pelo layout da aplicação em si como parte dela.

Exemplos:

- Footer
- Header
- Sidebar
- Container

### navigation

> Componentes usados para fazer a navegação da página.

Exemplos:

- Navbar
- Setas de voltar ou avançar
- Paginação

## constants

> Pasta para guardar as variáveis fixas da aplicação.

## typescript

> Pasta destinada a organizar estruturas específicas do TypeScript, facilitando a reutilização de tipos e melhorando a organização do código.

### classes

> Classes utilizadas pela aplicação para representar objetos ou encapsular regras de negócio.

Exemplos:

- User
- Product
- HttpClient
- ApiResponse

### generics

> Tipos genéricos reutilizáveis que podem ser utilizados em diferentes partes da aplicação.

Exemplos:

- ApiResponse<T>
- Paginated<T>
- Nullable<T>

### interfaces

> Interfaces que descrevem o formato de objetos e contratos utilizados na aplicação.

Exemplos:

- User
- Product
- LoginRequest
- ApiError

### types

> Tipos personalizados criados com a palavra-chave `type`, normalmente utilizados para unir, combinar ou simplificar outros tipos.

Exemplos:

- UserRole
- Theme
- Status
- ButtonVariant

### guards

> Funções que verificam se um valor pertence a um determinado tipo, ajudando o TypeScript a fazer a inferência correta.

Exemplos:

- isUser
- isProduct
- isError

### utility

> Tipos utilitários reutilizáveis para transformar ou manipular outros tipos.

Exemplos:

- Nullable<T>
- Optional<T>
- DeepPartial<T>

## utils

> Pasta para guardar as funções reutilizáveis da aplicação.

Exemplos:

- Formatador de texto
- Validadores
- Transformações de valores
- Validadores

## views

> Pasta para guardar as páginas da aplicação em si.

Exemplos:

- Home
- Login
- Dashboard