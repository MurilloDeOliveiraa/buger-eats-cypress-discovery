import SignupPage from '../Pages/SignupPage.js';
import SignupFactory from '../factories/SignupFactory.js';



describe('SignUp', () => {

    var singup = new SignupPage();

    it('Successful SignUp', function () {
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
        var deliver = SignupFactory.deliver();

        singup.go();
        singup.fillForm(deliver);
        singup.submit();
        singup.modalContentShouldBe(expectedMessage);
    })

    it('Invalid CPF', function () {
        const alertExpectedMessage = "Oops! CPF inválido";

        var deliver = SignupFactory.deliver();
        deliver.cpf = '103140079AA'

        singup.go();
        singup.fillForm(deliver);
        singup.submit();
        singup.alertContentShouldBe(alertExpectedMessage);
    })

    it('Invalid email', function () {
        const emailExpectedMessage = "Oops! Email com formato inválido.";

        var deliver = SignupFactory.deliver();
        deliver.email = "user.com.br"

        singup.go();
        singup.fillForm(deliver);
        singup.submit();
        singup.alertContentShouldBe(emailExpectedMessage);
    })

    context('Required Fields', function () {

        beforeEach(function () {
            singup.go();
            singup.submit();

        })

        var messages = [
            { field: "name", output: "É necessário informar o nome" },
            { field: "cpf", output: "É necessário informar o CPF" },
            { field: "email", output: "É necessário informar o email" },
            { field: "postalcode", output: "É necessário informar o CEP" },
            { field: "number", output: "É necessário informar o número do endereço" },
            { field: "delivery_method", output: "Selecione o método de entrega" },
            { field: "cnh", output: "Adicione uma foto da sua CNH" }
        ]


        messages.forEach(function (msg) {

            it(`${msg.field} is required`, function () {
                singup.alertContentShouldBe(msg.output);
            })
        })

    })

})