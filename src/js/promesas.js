const heroes = {
  capi: {
    nombre: 'Capìtán América',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidda de dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reacción alérgica a las picaduras de araña'
  },
}

export const buscarHeroe = ( id )=> {

    const heroe = heroes[id];
   
    return new Promise( (resolve, reject ) => {

      if(heroe){
        resolve(heroe);
      }else{
        reject(`No existe un heroe con id: ${ id }`);
      }
 
    }); 

}