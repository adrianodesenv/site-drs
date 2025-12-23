# Deploy no Netlify

Este guia explica como fazer o deploy deste projeto no Netlify.

## Pré-requisitos

- Conta no Netlify (gratuita)
- Repositório Git (GitHub, GitLab ou Bitbucket)

## Opção 1: Deploy via Interface do Netlify (Recomendado)

### Passo 1: Preparar o Repositório

1. Certifique-se de que todo o código está commitado e enviado para o repositório Git
2. O arquivo `netlify.toml` já está configurado no projeto

### Passo 2: Conectar ao Netlify

1. Acesse [netlify.com](https://www.netlify.com) e faça login
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha seu provedor Git (GitHub, GitLab ou Bitbucket)
4. Autorize o Netlify a acessar seus repositórios
5. Selecione o repositório `site-drs`

### Passo 3: Configurar Build Settings

O Netlify detectará automaticamente as configurações do `netlify.toml`, mas você pode verificar:

- **Build command:** `yarn build`
- **Publish directory:** `dist`
- **Node version:** 18 (ou superior)

### Passo 4: Deploy

1. Clique em **"Deploy site"**
2. Aguarde o build completar
3. Seu site estará disponível em uma URL do tipo: `https://random-name-123.netlify.app`

## Opção 2: Deploy via Netlify CLI

### Instalação do CLI

```bash
npm install -g netlify-cli
```

### Login

```bash
netlify login
```

### Deploy

```bash
# Build do projeto
yarn build

# Deploy
netlify deploy --prod
```

## Configurações Importantes

### Arquivo `netlify.toml`

O arquivo já está configurado com:

- Comando de build: `yarn build`
- Diretório de publicação: `dist`
- Redirects para SPA (Single Page Application)
- Versão do Node: 18

### Variáveis de Ambiente

Se precisar de variáveis de ambiente:

1. No painel do Netlify, vá em **Site settings** → **Environment variables**
2. Adicione as variáveis necessárias

### Domínio Customizado

Para usar um domínio próprio:

1. No painel do Netlify, vá em **Site settings** → **Domain management**
2. Clique em **Add custom domain**
3. Siga as instruções para configurar o DNS

## Troubleshooting

### Build falha

- Verifique se todas as dependências estão no `package.json`
- Certifique-se de que o Node version está correto (18+)
- Verifique os logs de build no Netlify

### Página em branco

- Verifique se o arquivo `index.html` está na raiz do projeto
- Confirme que o diretório `dist` está sendo gerado corretamente
- Verifique os redirects no `netlify.toml`

### Assets não carregam

- Verifique se os arquivos na pasta `public/` estão sendo copiados
- Confirme que os caminhos das imagens estão corretos (usando `/` no início)

## Estrutura de Build

Após o build, a estrutura será:

```
dist/
  ├── index.html
  ├── assets/
  │   ├── index-[hash].js
  │   └── index-[hash].css
  └── [arquivos da pasta public/]
```

## Comandos Úteis

```bash
# Build local para testar
yarn build

# Preview do build local
yarn preview

# Deploy de preview (não produção)
netlify deploy

# Ver logs do deploy
netlify logs
```
