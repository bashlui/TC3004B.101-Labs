const estudiante = {
    matricula: 'A01717235',
    nombre: 'Toño',
    edad: 21,
    direccion: {
        ciudad: 'Monterrey',
        cp: 34210
    }
};

console.log(estudiante);

const estudiante2 = {...estudiante};
estudiante2.nombre = 'Juan';
console.log(estudiante2);