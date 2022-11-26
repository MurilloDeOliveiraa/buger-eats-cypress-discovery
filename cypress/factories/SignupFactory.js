var cpf = require('gerador-validador-cpf')  //biblioteca para gerar cpf aleatórios
var faker = require('faker')    //biblioteca para gerar nome, sobrenome e outros dados aleatórios

export default {

    deliver() {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName, lastName),
            whatsapp: '41988469090',
            address: {
                postalcode: '82940150',
                street: 'Rua Goiânia',
                number: '1253',
                details: 'ap 407',
                district: 'Cajuru',
                city_uf: 'Curitiba/PR'
            },
            delivery_method: 'Moto',
            cnh: '/Images/cnh-digital.jpg'
        }

        return data
    }

}