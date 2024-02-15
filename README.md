# BeUni ecommerce

![Banner](https://github.com/GiovaniBiagi/beuni-ecommerce/assets/49461601/8e978744-4f4e-4ac3-b80f-bc0d0d7c744d)

Bem-vindo ao projeto de ecommerce BeUni! Esta interface foi projetada para fornecer aos usuários uma experiência de compra perfeita, incorporando recursos como lista de desejos, carrinho de compras, filtragem, ordenação, categorização e busca de produtos.

[Ver demo](https://beuni-ecommerce.vercel.app/products)

## Tecnologias Utilizadas

- **Next.js**: Utilizado especialmente para renderização do lado servidor para melhorar a performance de SEO e carregamento de dados.
- **Zustand**: Zustand foi utilizado para um pequeno gerenciamento de estado na lista de desejos e carrinho de compras.
- **Tailwind CSS**: Tailwind CSS foi utilizado em conjunto com a biblioteca de componentes ShadcnUI, contribuindo para a produtividade e melhor aproveitamento dos recursos de acessibilidade.
- **Storybook**: Storybook foi utilizado para documentar os componentes customizados do app.

## Recursos

1. **Lista de desejos**: Os usuários podem adicionar produtos à sua lista de desejos para referência ou compra futura.
2. **Carrinho de compras**: Os usuários podem adicionar produtos ao carrinho e gerenciar as quantidades antes do checkout.
3. **Filtros e Ordenação de produtos**: Os usuários podem filtrar e ordenar facilmente os produtos com base em critérios como preço, categoria, recomendações e etc.
4. **Navegação entre produtos**: Os usuários podem clicar nas imagens dos produtos para visualizar informações detalhadas e interagir com variações do produto.
5. **Carregamento infinito**: durante a rolagem na listagem de produtos, não é necessario se preocupar em clicar no botão de próximo página (nós fazemos isso por você 🤫).

## Começando

Para executar o projeto, siga estes passos:

1. Clone o repositório: `git@github.com:GiovaniBiagi/beuni-ecommerce.git`
2. Navegue até o diretório do projeto: `cd beuni-ecommerce`
3. Instale as dependências: `pnpm i`
4. Abra o projeto no editor de código de sua preferência;
5. Abra o arquivo `.env` e preencha o valor da variável `NEXT_PUBLIC_API_URL` com a url da API.
6. Inicie o servidor de desenvolvimento: `pnpm dev`
7. Abra seu navegador e visite `http://localhost:3000` para visualizar a aplicação.

---

## Desafios na execução do projeto

Durante a execução do projeto pude lidar com várias situações adversas como: gestão de tempo, divisão de atividades para execução do projeto com maior eficiência, prototipação de um layout totalmente novo entre outras coisas.

Dentre vários desafios o que tive maior dificuldade foi em lidar com um layout projetado por mim (kkk) e uma API com um enorme fornecimento de dados desconhecidos, da qual não possuia nenhum contexto.

## Pontos positivos

Apesar dos desafios mencionados acima, pude aprender diversas coisas novas, dentre elas:

- Geração de sitemap dinâmico (que doidera 🤯);
- Geração de metadados dinâmicos na nova estrutura do NextJS (App Router);
- Melhor uso das server actions;
- novos hooks do react-dom (useFormStatus e useFormState);
- Eu sou um péssimo designer 👀;

## Pontos negativos

Não vejo pontos negativos no teste. Tudo valeu de aprendizado no final.
