# 🚀 Instruções para Executar o Portfólio

## Pré-requisitos
- Node.js instalado (versão 16 ou superior)
- npm ou yarn

## Passos para Executar

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar o portfólio:**
   - Abra seu navegador em: `http://localhost:5173`

## Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção

## 📁 Estrutura do Projeto

```
Portifolio/
├── public/              # Arquivos estáticos (imagens, PDFs)
│   ├── assets/
│   └── [imagens]
├── src/
│   ├── components/     # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Ponto de entrada
│   └── index.css       # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Melhorias Implementadas

✅ Design moderno com Tailwind CSS
✅ Animações suaves e transições
✅ Totalmente responsivo
✅ Navegação suave entre seções
✅ Header fixo com efeito de scroll
✅ Cards de projetos com hover effects
✅ Seções de skills expansíveis
✅ Tema escuro elegante
✅ Gradientes animados
✅ Footer com links sociais

## 📝 Notas

- As imagens devem estar na pasta `public/`
- O currículo PDF deve estar em `public/assets/`
- Todos os componentes são funcionais e responsivos

