import { buscarHeroe, buscarHeroeAsync } from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];

// export const obtenerHeroesArr = async () => {
// 2º
//  return await Promise.all(heroesIds.map(buscarHeroe));

  //1º
  // const heroesArr = [];
  // for (const id of heroesIds) {
  //   heroesArr.push(buscarHeroe(id));
  // }
  // return await Promise.all(heroesArr);
  //usar await fuera de los ciclos for
// }

//3º Esta linea equivale a todas las anteriores y más rapida y eficiente. Pero de lectura compleja
// export const obtenerHeroesArr = async () => await Promise.all(heroesIds.map(buscarHeroe));

//4º Esta seria la forma idonea y más fácil de leer
export const obtenerHeroesArr = async () =>{
  return await Promise.all(heroesIds.map(buscarHeroe));
} 


export const obtenerHeroeAwait = async( id )=> {
  try {
    const heroe = await buscarHeroeAsync( id );
    return heroe;
  }catch( err ) {
    console.log('CATCH!!!');
    return {nombre: 'Sin nombre',
            poder: 'Sin poder'};
  }
}
