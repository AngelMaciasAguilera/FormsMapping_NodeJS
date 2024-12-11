import { Config } from "./Config.js";
export const InputsMapper = {

    mapInputs : (inputs) =>{
        if(inputs){
            return inputs.map(input => {
                    for (const classType in Config.classTypes) {
                        if(input.classList.contains(classType)) return {
                            "types": classType,
                            "object": input,
                            "event" : Config.classTypes[classType] 
                        }
                    }

                    return null;
                }
            );
        }else{
            return null;
        }
    }

}