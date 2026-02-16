import { bancos } from './Lab1/bancos.ts'

const getBancoId = (id) => bancos.find( (banco) => banco.id === banco.id);
// const getBancosByPais = (pais) => bancos.filter((pais) => bancos.country === pais);


console.log(bancos)
console.log(getBancoId(1));