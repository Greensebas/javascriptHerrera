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

const maria = new Person('maria', 'lopez')       // Si no se pasa uno de los parámetros devuelve 'undefined'
const juan = new Person('juan', 'perez', 15) 

// juan.resume();
// juan.setFavouriteFood = 'papas fritas'
// console.log(juan)
// console.log(juan.getFavouriteFood)

console.log('conteo estático', Person._count);          // este _count es una propiedad estática
console.log(Person.count);                              // Este count es un get estático
Person.msg();
console.log(Person)

