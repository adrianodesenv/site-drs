# Site DRS

Site responsivo desenvolvido em React com TypeScript, utilizando Vite como build tool.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **React Router** - Roteamento para aplicações React
- **Swiper** - Biblioteca para carrosséis responsivos
- **CSS** - Estilização com stylesheets

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build para produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/         # Cabeçalho com navegação
│   ├── Hero/           # Seção hero principal
│   ├── Carousel/       # Componente de carrossel
│   └── Footer/         # Rodapé
├── pages/              # Páginas da aplicação
│   └── Home.tsx        # Página inicial
├── utils/             # Utilitários
│   └── i18n.ts         # Sistema de tradução
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🌐 Sistema de Tradução

O projeto inclui um sistema simples de tradução (i18n) que suporta:

- Português (pt) - padrão
- Inglês (en)
- Espanhol (es)

Para alterar o idioma, use a função `setLanguage()` do arquivo `src/utils/i18n.ts`.

## 🎨 Responsividade

O site é totalmente responsivo e foi desenvolvido com mobile-first approach, utilizando breakpoints:

- Mobile: até 768px
- Tablet: 768px - 1024px
- Desktop: acima de 1024px

## 📝 Licença

Este projeto é privado.
