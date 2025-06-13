describe('Tela de Produtos', () => {
  beforeEach(() => {
    cy.visit('produtos.html');
  });

  it('5. Modal não aparece por padrão', () => {
    cy.get('#cadastro-produto').should('not.be.visible');
  });

  it('6. Abre modal ao clicar no botão "Criar"', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#cadastro-produto').should('be.visible');
  });

  it('7. Exibe erro ao tentar salvar com campos vazios', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#btn-salvar').click();
    cy.get('.alert.alert-danger').should('be.visible');
    cy.get('#mensagem').should('contain', 'Todos os campos são obrigatórios');
  });

  it('8. Preenche corretamente todos os campos do formulário', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('001');
    cy.get('#nome').type('Produto Teste');
    cy.get('#quantidade').type('10');
    cy.get('#valor').type('99.99');
    cy.get('#data').type('2025-06-12');

    cy.get('#codigo').should('have.value', '001');
    cy.get('#nome').should('have.value', 'Produto Teste');
    cy.get('#quantidade').should('have.value', '10');
    cy.get('#valor').should('have.value', '99.99');
    cy.get('#data').should('have.value', '2025-06-12');
  });

  it('9. Fecha o modal ao clicar em "Sair"', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#btn-sair').click();
    cy.get('#cadastro-produto').should('not.be.visible');
  });

  it('10. Botão "Criar" está visível e habilitado', () => {
    cy.get('#btn-adicionar').should('be.visible').and('not.be.disabled');
  });
});
