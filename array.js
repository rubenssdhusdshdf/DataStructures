// Construyendo un array

class MyArray {
  constructor() {
    this.length = 0; // Me ayuda a tener el conteo de cuantos elementos se estan contado
    this.data = {}; // Aqui es donde voy a guardar todos los elementos nuevos y voy a tener acceso a los mismos
  }

  // El metodo get sirve para obtener informacion, y aqui le voy a pasar el index, que es el numero del elemento que necesito que me regrese. Luego anadimos un return this.data[index];

  get(index) {
    return this.data[index];
  }

  //Este va a recibir un parametro, que es el parametro que quiero agregar a nuestro array (el item)

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  // Si ejecutamos este codigo en la consola de las Chrome Dev Tools y hacemos un myArray.push("Jose") y leugo un myArray.push("Adriana") haremos que se cree un array con estas dos posiciones. Si escribimos myArray.get(1) obtendremos como output a Adriana

  // si hacemos myArray.pop, perdere el ultimo valor del array

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]; //delete es una palabra reservada para borrar
    this.length--;
    return lastItem;
  }

  delete() {
    // En el ejemplo anterior, delete es una palabra reservada en Javascript para borrar un elemento dentro del metodo, pero tambien puede ser una metodo
    const item = this.data[index];
    this.shiftIndex(index); // ver metodo creado abajo

    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// Eliminando elementos del array

// Generamos la instancia
const myArray = new MyArray();

//Para el ejemplo del shift y delete, cuando copio en la consola y hago myArray.push con varios valores, digamos Diego, Karen y Oscar, si hago myArray.delete(1) veo que se va a borrar Karen, porque estamos borrando a la posicion 1 del array
