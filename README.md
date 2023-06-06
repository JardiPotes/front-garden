# Front-garden

## Install project and start to dev :
- clone repo 
- `yarn` 
- `yarn dev` and go to http://127.0.0.1:5173/ to see your changes
- don't forget to create a branch for each feature and make pull-request, never push directly to master :)

### Local e2e test with cypress : 
- create a `cypress.env.json` file (see cypress.env.exemple) 
- run your projet (front-end and back-end) localy 
- `yarn cypress open`

### See storybook doc : 
- `yarn storybook`
- got to localhost:6006

### Run linting :
- `yarn lint` (or `yarn lint:fix` to fix autofixable warnings/errors)
- ESlint and Prettier extensions exist in most mainstream IDEs 🛂. You could format on save and/or display warning/error squiggly lines 〰️ without running the script.

### Recommended exensions :
- **vscode-styled-components** => Syntax highlighting and Intellisense completion for styled-components 🌈
- **ESlint** and **Prettier** extensions => See ***#Run linting***