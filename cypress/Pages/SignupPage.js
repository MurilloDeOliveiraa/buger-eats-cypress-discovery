class SignupPage {

    //#region PageElements 
    BaseURL = 'https://buger-eats-qa.vercel.app';
    //#endregion

    go() {
        cy.viewport(1536, 960);
        cy.visit(this.BaseURL);
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1')
            .should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        // Inserção de Dados de Cadastro
        cy.get('input[name="fullName"]').type(deliver.name);
        cy.get('input[name="cpf"]').type(deliver.cpf, { log: false });  //com esse atributo log eu deixo de mostrar os dados quando to rodando o teste no cypress
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode);
        cy.get('input[type="button"]').click();
        cy.get('input[name="address-number"]').type(deliver.address.number);
        cy.get('input[name="address-details"]').type(deliver.address.details);

        // Validações dos campos
        cy.get('input[name="address"]').should('have.value', deliver.address.street);
        cy.get('input[name="district"]').should('have.value', deliver.address.district);
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_uf);

        // Juntando CSS Selector com um texto(metodo_entrega)
        cy.contains('.delivery-method li', deliver.delivery_method).click();

        //Comando para adicionar um arquivo
        cy.get('input[accept^="image"]').attachFile(deliver.cnh);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage);
    }

    alertContentShouldBe(alertExpectedMessage) {
        // cy.get('span[class="alert-error"]').should('have.text', alertExpectedMessage);
        cy.contains('span[class="alert-error"]', alertExpectedMessage).should('be.visible');
    }

}

export default SignupPage;