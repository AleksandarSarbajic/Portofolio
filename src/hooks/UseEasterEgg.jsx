import { useEffect } from "react";

function UseEasterEgg() {
  useEffect(() => {
    console.log(`
    ##     ## ####    ######## ##     ## ######## ########  ########
    ##     ##  ##        ##    ##     ## ##       ##     ## ##      
    ##     ##  ##        ##    ##     ## ##       ##     ## ##      
    #########  ##        ##    ######### ######   ########  ######  
    ##     ##  ##        ##    ##     ## ##       ##   ##   ##      
    ##     ##  ##        ##    ##     ## ##       ##    ##  ##      
    ##     ## ####       ##    ##     ## ######## ##     ## ########`);
    console.log(`I'm glad that you are here!`);
    console.log("Desing and code created by Aleksandar Sarbajic");
  }, []);
  return null;
}

export default UseEasterEgg;
