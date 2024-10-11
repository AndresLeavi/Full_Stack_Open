// const persona = {
//     nombre: "Carlos García",
//     edad: 32,
//     género: "Masculino",
//     dirección: {
//       calle: "Av. Los Pinos 123",
//       ciudad: "Ciudad de México",
//       país: "México"
//     },
//     correo: "carlos.garcia@email.com",
//     teléfono: "+52 55 1234 5678",
//     ocupación: "Ingeniero de Software"
//   };
  

//   for (let propiedad in persona) {
//     console.log(`${propiedad}: ${persona[propiedad]}`);
//   }
  
//   const t = [1, 2, 3]  
//   const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2)


// const arto = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
//     greet: function() {
//       console.log('hello, my name is ' + this.name)
//     },
  
//     doAddition: function(a, b) {
//       console.log(a + b)
//     },
//   }
  
//   arto.doAddition(1, 4)        // se imprime 5
  
//   const referenceToAddition = arto.doAddition
//   referenceToAddition(10, 15)   // se imprime 25

//     arto.greet()
//     console.log(arto)

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name + ' and I am ' + this.age)
    }
  }
  
  const adam = new Person('Adam Ondra', 29)
  adam.greet()
  
