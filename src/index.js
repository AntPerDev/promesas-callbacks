// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

// buscarHeroe( 'capi2' )
//   .then( heroe => console.log( heroe ))
//   .catch( console.warn );
// buscarHeroeAsync( 'iron2' )
//   .then( heroe => console.log( heroe ))
//   .catch( console.warn );

import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';

// const heroes = obtenerHeroesArr();
// console.table( heroes );

console.time('await');
obtenerHeroeAwait('capi2')
  .then( heroe => {
    console.log( heroe );
    console.timeEnd( 'await' );
}).catch(console.warn);

// obtenerHeroesArr().then(console.table)