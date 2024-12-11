import { InputsMapper } from "./InputsMapper.js";
export const formsHandler = {
    
    processInputs : (forms) => {
        //Creo la variable en la que voy a almacenar los inputs mapeados 
        let inputs = [];
        //Recorro los formularios que se me pasan
        [...forms].forEach((form) =>{
            /*¿Como funciona? 

                1) Primero le paso los inputs al metodo map inputs de mi objeto InputsMapper
                
                2) Filtro el array de inputs que me devuelve

                3) Inserto el array filtrado en mi array auxiliar que voy a devolver limpio y listo en inputs
            
            */

            inputs.push(InputsMapper.mapInputs([...form.elements]).filter(item => {return item != null || item != undefined} ));
        })
        return inputs;
    }
}