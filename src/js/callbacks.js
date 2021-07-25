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

// callback funcion que se debe llamar cuando termine el proceso de buscar un heroe por el id
export const buscarHeroe =(id, callback) => {

  const heroe = heroes[id];

  if ( heroe ) {
    callback( null, heroe );
  }else {
    //Un error
    callback(`No existe un heroe con el id: ${ id }`);
  }

  // callback( heroe );

}