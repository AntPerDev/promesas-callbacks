import { promesaLenta,promesaMedia,promesaRapida } from './js/promesas';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

Promise.race( [promesaLenta, promesaMedia, promesaRapida])
  .then( console.log )
  .catch( console.warn );

/**
 * Promise.race devuelve el resultado de la primera promesa en resolverse
 * no importa si aceptada o rechazada.
 * Este resultado hará que el resto de promesas sean ignoradas, no importa si
 * son aceptadas o rechazadas
 * Se devuelve la primera en acabar, ya sea resolve o reject no importa.
 */