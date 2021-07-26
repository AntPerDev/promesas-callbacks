import { buscarHeroe, buscarHeroeAsync } from './promesas'

const heroesIds = ['capi', 'iron', 'spider'];
// const heroesPromesas = heroesIds.map( id => buscarHeroe( id ));
//La linea de arriba es exactamente igual que la de abajo
const heroesPromesas = heroesIds.map( buscarHeroe);
//y la de abajo es más fácil de leer








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


export const heroesCiclo = async() => {
  console.time('HeroesCiclo');

  // const heroes = await Promise.all(heroesPromesas)
  // heroes.forEach( heroe => console.log(heroe));
  // Estas dos lineas se pueden poner en una sola linea
  // Usando el await en otra forma

  for await(const heroe of heroesPromesas){
    console.log(heroe);
    
  }

  // Otra forma seria usando el forech pero es menos eficiente
  //ya que separa la ejecucion del hilo principal y el programa 
  // acaba antes de recibir las promesas.
  // heroesPromesas.forEach(async(p)=>console.log(await p));
  
  console.timeEnd('HeroesCiclo');
}
;
export const heroeIfAwait = async(id) => {

  if ( (await buscarHeroeAsync(id)).nombre === 'Ironman'){
    console.log('Es el mejor de todos');
    
  }else {
    console.log('naaaa');
    
  }
}