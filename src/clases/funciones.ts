function saludar(nombre: string) {
    return 'Hola ' + nombre;
}

const saludarFlecha = (nombre: string) => {
    return 'Hola ' + nombre;
};

console.log(saludar('Toño'));
console.log(saludarFlecha('Toño'));