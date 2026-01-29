export function nombre(nombre, lastName){
    // en este caso "lastName" recibe a una funcion y para usarse como un llamado a una funcion normal se le colocan los parentesis igual que en un llamado comun y corriente
    // a partir de aca lastName viene en representacion de la funcion "apellido" que se encuentra en el callback.js
    console.log(nombre)
    lastName()
}   