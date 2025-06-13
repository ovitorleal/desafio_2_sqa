describe('Tela de Login', () => {
  beforeEach(() => {
    cy.visit('login.html');
  });

  // it('1. Exibe erro ao tentar logar com campos vazios', () => {
  //   cy.get('#btn-entrar').click();
  //   cy.get('.alert.alert-danger').should('be.visible');
  //   cy.get('#mensagem').should('contain', 'E-mail ou senha inválidos');
  // });

  it('2. Preenche campos de e-mail e senha', () => {
    cy.get('#email').type('teste@teste.com');
    cy.get('#senha').type('123456');
    cy.get('#email').should('have.value', 'teste@teste.com');
    cy.get('#senha').should('have.value', '123456');
  });

  it('3. Limpa os campos após digitar', () => {
    cy.get('#email').type('teste@teste.com').clear().should('have.value', '');
    cy.get('#senha').type('123456').clear().should('have.value', '');
  });

  it('4. Tenta login com credenciais fictícias', () => {
    cy.get('#email').type('admin@admin.com');
    cy.get('#senha').type('admin@123');
    cy.get('#btn-entrar').click();
   
  });
});
