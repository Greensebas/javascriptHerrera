

function Persona (name, age) {
    console.log('se ejecutó esta línea')

    this.name = name;
    this.age = age; 
    
    this.print = function() {
        console.log(`nombre ${this.name}, edad ${this.age}`)
    }
};

// const maria = Persona('María', 18);
// console.log(maria) // undefined ya que no hay un return explícito en Persona

const maria = new Persona('maría', 18);
console.log(maria);
maria.print();