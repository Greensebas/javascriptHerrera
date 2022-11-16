class Person {
    //! PROPIEDADES Y MÉTODOS ESTÁTICOS
    // No se puede usar this. porque daría 'undefined' ya que no se está trabajando con una clase instnciada sino con la estructura de la clase
    // con sus métodos estáticos
    static _count = 0
    
    static get count(){
        return Person._count + ' instancias'
    }

    static msg(){
        console.log(this.age)                                  // Esto todavía no existe... va a dar undefined
        console.log('hola a todos, soy un método estático')
    }
    
    //! PROPIEDADES DE LA CLASE
    name = '';
    lastname = '';
    age = '';
    food = '';
    

    //! CONSTRUCTOR
    constructor(name, lastname, age){      // El constructor se ejecuta cada vez que se instancia la clase
        this.name = name;
        this.lastname = lastname;
        this.age = age

        Person._count++;                  // De esta manera modificamos el contador estático y podremos saber cuántas veces se instanció la clase
    };


    //! SETS Y GETS
    set setFavouriteFood(food) {          // El set no puede tener el mismo nombre de la propiedad a la que se lo quiere establecer prque entrearía en un loop infinito
        this.food = food.toUpperCase();   // Generalmente se utiliza para modificar algunas de las propiedades de la clase
    };

    get getFavouriteFood() {              // De igual manera el get no puede ser llamado a si mismo dentro de su propio return (loop)
        return `la comida favorita de ${this.name} es ${this.food}`
    };


    //! MÉTODOS
    
    // Los métodos se crean luego del constructor
    whoAmI() {
        console.log(`mi nombre es ${this.name} ${this.lastname}`)
    };

    howOldAmI() {
        console.log(`tego ${this.age} años de edad`)
    };

    resume() {                         // Podemos llamar métodos de la clase en otros mismos métodos utilizando this.
        this.whoAmI();
        this.howOldAmI();
    }

};


class Hero extends Person {             // El 'extends' permite extender o heredar las propiedades de otra clase a la clase que estoy definiendo ahora
    clan = 'sin clan'

    constructor(name, lastname, age) {
        super(name, lastname, age);     // Para poder ejecutar el contructor de la clase anterior debo poner 'super()' dentro del constructor de la nueva clase
        this.clan = 'mafia'             // el 'this.' solo se puede utilizar luego de 'super()', de lo contrario arrojaría un error
    };

    whoAmI() {
        console.log(`soy ${this.name}`)      // Acá sobreescribo el método whoAmI pero el anterior sigue existinedo, debo llamarlo con super
        super.whoAmI();                      // De esta manera puedo llamar a los métodos de la clase padre
    }
}


const juan = new Hero('juan', 'perez', 25)

console.log(juan)
juan.whoAmI()
