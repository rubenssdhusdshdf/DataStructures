//Al constructor le paso un size. Estoy inicializando mis datos y haciendo una instancia de una Array y a ese array le voy a poner un numero

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // El hash function es algo que viene dentro del objeto que nos ayuda a generar el hash. Si buscas algo muy especifico puedes encontrarlo en github. Esta hash function es solo para usarla en la clase y entender el comportamiento de una hash table. La funcioon genera un numero random que se refiere al UNICODE y estamos pasando el key, de eso va a generar un numero random y nos va a generar el hash que nos va a regresar para que podamos guardarlo en la direccion

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //El metodo set nos ayuda a anadir elementos al hash table, el metodo set funciona con la logica key and value

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // Si quisiera acceder al valor de ciertos elementos, usare el get pasandole el key

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

//Si copiamos esto en el navegador y llamamos a myHashTable puedo ver que tenemos 50 espacios. Si escribo myHashTable.set("Ruben", 1996) puedes ver donde se esta guardando esta informacion en la hash table, estos espacios se asignan de forma totalmente aleatoria

//Aqui estoy generando la instancia de mi hashtable y le estoy diciendo que necesito que venga con 50 espacios libres para mi hash table y empiece a guardar informacion ahi. Si guardamos mucha informacion en memoria veremos que hay varias colisiones

const myHashTable = new HashTable(50);
