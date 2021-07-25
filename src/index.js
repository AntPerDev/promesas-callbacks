import { buscarHeroe } from './js/callbacks';
import './styles.css';


//callback manda funcion como argumento, el objetivo es que se pueda disparar la funcion
//cuando termine el procedimiento
// buscarHeroe( heroeId , function(){

// });


const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId2 = 'spider';

buscarHeroe( heroeId1, (err, heroe )=>{

  if( err ){ return console.error( err ); }
  
  buscarHeroe(heroeId2, (err,heroe2)=>{
    if (err) { return console.error(err); }

    buscarHeroe(heroeId3, (err, heroe2) => {
      if (err) { return console.error(err); }
      console.log(`Enviando a ${heroeId1.nombre}, ${heroeId2.nombre} y ${heroeId3.nombre}`);

    })

  })

});

