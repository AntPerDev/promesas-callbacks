import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';


//callback manda funcion como argumento, el objetivo es que se pueda disparar la funcion
//cuando termine el procedimiento
// buscarHeroe( heroeId , function(){

// });


const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';

// buscarHeroe( heroeId1, (err, heroe1 )=>{
//   if( err ){ return console.error( err ); }
//   buscarHeroe(heroeId2, (err,heroe2)=>{
//     if (err) { return console.error(err); }
//     buscarHeroe(heroeId3, (err, heroe3) => {
//       if (err) { return console.error(err); }
//       console.log(`Enviando a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre}`);
//     })
//   })
// });



//usar promesas no bloquea la ejecución de los programas usar callbacks si
// buscarHeroe( heroeId1 ).then(heroe1 => {
//   console.log(`Enviando a ${ heroe.nombre } a la misión`);
//   buscarHeroe(heroeId2).then ( heroe2 => {
//       console.log(`Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la misión`);
//   });
// });

//Se puede resumir así:
// Promise.all([true,'hola',123]).then( arr => {
//   console.log('Promise.all', arr );
// });
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
  }).catch( err => {
    alert(err);
  }).finally(()=>{
    //Se ejecuta cuando todo se terminó todo, sean las promesas resueltas o rechazadas
    console.log('Se terminó el promise.all');
  });

//El código dentro de la promesa sólo se dispara si todas las promesas son devueltas, se reseuelven de manera exitosa
//Si alguna promesa es rechazada el código interno no se ejecutará.

console.log('Fin del programa');
