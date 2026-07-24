# DevClub — Transforme código em oportunidade

Projeto de uma página institucional moderna para o ecossistema DevClub, desenvolvido com React, Vite, Tailwind CSS e Motion.

A proposta é apresentar formações, projetos, mentores, alunos, empresas e histórias da comunidade por meio de uma experiência visual responsiva, dinâmica e profissional.

> Projeto conceitual desenvolvido para um desafio do DevClub. Esta página não representa o site oficial da empresa.

---

## Demonstração

**Site publicado:**

[DevClub](https://devclub-challenge.vercel.app/)

---

## Sobre o projeto

O projeto representa a jornada de uma pessoa que entra no mundo da programação, desenvolve habilidades práticas, constrói projetos e se prepara para oportunidades profissionais.

A página combina conteúdo institucional, animações e elementos visuais inspirados no universo do desenvolvimento de software.

Entre os principais destaques estão:

- animação de entrada construída com pixels;
- transição de abertura com uma cortina animada;
- apresentação das formações;
- projetos desenvolvidos por alunos;
- seção de mentores;
- carrossel contínuo de empresas;
- depoimentos da comunidade;
- chamada final para iniciar uma nova jornada;
- layout responsivo para celulares, tablets e computadores.

---

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Principais recursos

### Animação de entrada

A experiência começa com uma representação do logotipo construída por meio de uma matriz de pixels.

Após a interação do usuário:

1. o logotipo se posiciona no centro da tela;
2. os pixels se desprendem e caem;
3. uma cortina verde cobre a interface;
4. a cortina desce e revela o conteúdo principal.

A animação foi desenvolvida com React e Motion.

### Navegação por seções

A barra de navegação permite acessar diretamente as principais áreas da página:

- início;
- jornada;
- formações;
- alunos;
- mentores;
- empresas;
- comunidade;
- chamada final.

### Responsividade

A interface foi adaptada para diferentes tamanhos de tela:

- celulares;
- tablets;
- notebooks;
- monitores maiores.

Os componentes reorganizam seu conteúdo de acordo com o espaço disponível, mantendo legibilidade, equilíbrio visual e facilidade de navegação.

### Acessibilidade

O projeto inclui cuidados básicos de acessibilidade:

- estrutura semântica;
- textos alternativos em imagens;
- identificação de elementos decorativos;
- estados de foco visíveis;
- navegação por teclado;
- links externos configurados de forma segura.

---

## Estrutura do projeto

```text
devclub-project/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About/
│   │   ├── CodeStream/
│   │   ├── Companies/
│   │   ├── Courses/
│   │   ├── Cta/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Intro/
│   │   ├── Navbar/
│   │   ├── Students/
│   │   ├── Testimonials/
│   │   ├── Tutors/
│   │   └── ui/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

A estrutura pode apresentar pequenas diferenças de acordo com a organização final dos componentes e das imagens.

---

## Como executar o projeto

### Pré-requisitos

É necessário possuir o Node.js instalado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Victor-F-Padua/devclub-challenge.git
```

Entre na pasta do projeto:

```bash
cd devclub-challenge
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O endereço local será exibido no terminal pelo Vite.

---

## Comandos disponíveis

Inicia o ambiente de desenvolvimento:

```bash
npm run dev
```

Gera a versão otimizada para produção:

```bash
npm run build
```

Executa uma prévia local da versão de produção:

```bash
npm run preview
```

Analisa o código com o ESLint:

```bash
npm run lint
```

---

## Identidade visual

A interface utiliza uma paleta escura com cores de destaque:

```text
Azul-marinho: #000A23
Verde:        #35E657
Roxo:         #68009B
Branco:       #FFFFFF
```

As fontes utilizadas são:

- Inter;
- Space Grotesk.

---

## Conteúdo, nomes e imagens

Este projeto foi desenvolvido para fins educacionais, demonstrativos e de portfólio.

- Os nomes e as imagens de Rodolfo Mori e Fernanda Costa foram utilizados com autorização.
- Márcio Araújo é um personagem fictício criado para representar um mentor dentro do projeto.
- Algumas imagens e personagens apresentados na interface foram criados ou adaptados com auxílio de inteligência artificial.
- Os logotipos de empresas são apresentados somente como parte do conteúdo visual e informativo da página.
- A presença de um logotipo não representa patrocínio, parceria ou participação da empresa no desenvolvimento do projeto.

---

## Autor

Desenvolvido por **Victor Ferreira de Padua**.

Projeto criado como parte de um desafio prático de desenvolvimento front-end.

---

## Status

Projeto finalizado e publicado na Vercel.
