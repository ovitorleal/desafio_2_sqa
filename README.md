
# 🧪 Projeto de Testes Automatizados com Cypress

## Estrutura do Projeto

```
├── cypress/
│   └── e2e/
│       ├── login.cy.js         # Testes para a tela de login
│       └── produtos.cy.js      # Testes para a tela de produtos
├── login.html                  # Página de login
├── produtos.html               # Página de controle de produtos
├── src/
│   └── js/
│       ├── login.js
│       ├── produtos.js
│       └── outros arquivos .js
├── cypress.config.js           # Configuração do Cypress
├── package.json
└── package-lock.json
```

---

##  Como executar

###  Instale as dependências

```bash
npm install
```


###  Abra o Cypress

```bash
npx cypress open
```

---

##  Funcionalidades testadas

### `login.cy.js`:
1. Verifica presença dos campos de login
2. Preenche campos de e-mail e senha
3. Limpa os campos após digitação
4. Simula login com dados fictícios

### `produtos.cy.js`:
5. Verifica que o modal não aparece inicialmente
6. Abre o modal ao clicar em "Criar"
7. Exibe erro ao tentar salvar com campos vazios
8. Preenche corretamente o formulário de produto
9. Fecha o modal ao clicar em "Sair"
10. Verifica se o botão "Criar" está visível e habilitado

---


##  Observações

- Cypress simula um usuário real, testando interações como clique, preenchimento e validação visual.

---

##  Autor

Desenvolvido por **Vitor Leal** como parte de estudos e prática com testes automatizados com Cypress.
