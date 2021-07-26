// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

// buscarHeroe( 'capi2' )
//   .then( heroe => console.log( heroe ))
//   .catch( console.warn );
// buscarHeroeAsync( 'iron2' )
//   .then( heroe => console.log( heroe ))
//   .catch( console.warn );

import { obtenerHeroesArr } from './js/await';

// const heroes = obtenerHeroesArr();

// console.table( heroes );

console.time('await');
obtenerHeroesArr().then(heroes => {
  console.table(heroes);
  console.timeEnd('await');
});

// obtenerHeroesArr().then(console.table)