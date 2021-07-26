import {buscarHeroeAsync} from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async() => {
  
  const heroesArr = [];

  for (const id of heroesIds) {
    // buscarHeroeAsync(id).then( heroe => heroesArr.push( heroe ));
     const heroe =  await buscarHeroeAsync(id);
    heroesArr.push(heroe) ;
  }

  // setTimeout(() => {
  //   console.log('Obtener heroe');
  //   console.table( heroesArr );
    
  // }, 1000);

  return heroesArr;

}

