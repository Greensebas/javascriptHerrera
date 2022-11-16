

class Person {

    static object( {name, lastname, country} ) {        // esto es un protip para pasar un objeto a la como argumento a la clase utilizando
        return new Person( name, lastname, country)     // la desestructuración
    }

    constructor(name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country
    }

    getInfo() {
        console.log(`info ${this.name}, ${this.lastname}, ${this.country}`)
    }
}

const name1     = 'juan',
      lastname1 = 'perez',
      country1  = 'argentina';

const sebas = {
    name: 'sebas',
    lastname: 'acevedo',
    country: 'argentina'
}

const person1 = new Person(name1, lastname1, country1);    // acá se pasan los argumentos por separado
const person2 = Person.object(sebas);                      // acá se pasa un objeto y se desestructura el objeto despues

person1.getInfo();
person2.getInfo();


