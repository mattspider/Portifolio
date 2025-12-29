# Portfólio - Matheus de Oliveira Soares

Portfólio moderno desenvolvido com React e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Typed.js** - Biblioteca para efeitos de digitação
- **React Icons** - Ícones para React

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🚀 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Configuração Automática (Recomendado)

1. **Habilite o GitHub Pages no repositório:**
   - Vá em Settings > Pages
   - Em "Source", selecione "GitHub Actions"

2. **Faça push das alterações:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

3. **O workflow irá:**
   - Fazer build do projeto automaticamente
   - Fazer deploy para o GitHub Pages
   - O site estará disponível em: `https://seu-usuario.github.io/Portifolio/`

### Deploy Manual (Alternativa)

Se preferir fazer deploy manual:

```bash
# 1. Fazer build
npm run build

# 2. Fazer commit da pasta dist
git add dist
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

**Nota:** Certifique-se de que o base path no `vite.config.js` está configurado como `/Portifolio/` (ou o nome do seu repositório).

## 🎨 Características

- Design moderno e responsivo
- Animações suaves
- Navegação suave entre seções
- Tema escuro elegante
- Componentes reutilizáveis
- Performance otimizada

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   └── About.jsx
├── App.jsx
├── main.jsx
└── index.css
```

