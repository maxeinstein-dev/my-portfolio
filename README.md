# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


- `Os colaboradores vivem para ajudar os outros.` Eu gosto de trabalhar em equipe e me orgulho de ser a pessoa certa para obter apoio, especialmente quando o desafio parece uma aventura. Fazer com que todos se sintam ouvidos é o meu superpoder. Eu me destaco em funções inovadoras centradas no desenvolvimento web, engenharia de inteligência artificial, engenharia de software e treinamento técnico.

- `Collaborators live to help others.` You're a team player who takes pride in being the go-to for support, especially when the challenge looks like an adventure. Making everyone feel heard is your superpower. Experimental Collaborators excel in innovative roles centered around web development, artificial intelligence engineering, software engineering, and technical training.
