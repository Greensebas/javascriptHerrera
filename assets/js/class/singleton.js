// Un singleton es una instancia única de la clase


class Singleton {

    static instance;        // undefined
    name = '';

    constructor(name = ''){

        if( !!Singleton.instance ) {    // la doble negación '!!' es porque convierte primero el 'undefined' a 'true' y luego el 'true' a 'false'
            return Singleton.instance
        }
        Singleton.instance = this;
        this.name = name;

        return this
    }
}




const instance1 = new Singleton('juan');
const instance2 = new Singleton('pedro');
const instance3 = new Singleton('maria');

console.log(`Nombre en la instancia 1 ${instance1.name}`)
console.log(`Nombre en la instancia 2 ${instance2.name}`)
console.log(`Nombre en la instancia 3 ${instance3.name}`)