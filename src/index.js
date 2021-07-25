import { buscarHeroe } from './js/callbacks';
import './styles.css';


//callback manda funcion como argumento, el objetivo es que se pueda disparar la funcion
//cuando termine el procedimiento
// buscarHeroe( heroeId , function(){

// });


const heroeId = 'capi';

buscarHeroe( heroeId , (err, heroe )=>{

  if( err ){
    
    console.error( err );

  } else {

    console.log( heroe );
    
  };
  
});

