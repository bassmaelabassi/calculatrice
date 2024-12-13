const prompt= require("prompt-sync")();
function add(a,b){
    const num1=prompt("dooner le valeur num1 :");
    const num2=prompt("dooner le valeur num2 :");
    a=parseInt(num1);
    b=parseInt(num2);
console.log(a+b);
}
function mois(a,b){
    const num1=prompt("dooner le valeur num1 :");
    const num2=prompt("dooner le valeur num2 :");
    a=parseInt(num1);
    b=parseInt(num2);
console.log(a-b);
}
function multipation(a,b){
    const num1=prompt("dooner le valeur num1 :");
    const num2=prompt("dooner le valeur num2 :");
    a=parseInt(num1);
    b=parseInt(num2);
console.log( a*b);
}
function division (a,b){
    const num1=prompt("dooner le valeur num1 :");
    const num2=prompt("dooner le valeur num2 :");
    a=parseInt(num1);
    b=parseInt(num2);
if(a===0){
    console.error("errerret")
}else{
    console.log( a / b);
}
}
function puisance(a,b){
    const num1=prompt("dooner le valeur num1 :");
    const num2=prompt("dooner le valeur num2 :");
    a=parseInt(num1);
    b=parseInt(num2);
let rassilta= Math.pow(a, b);
console.log(rassilta);
}
function racine(a,b){
    const num1=prompt("dooner le valeur num1:");
    a=parseInt(num1);
let ra= Math.sqrt(a);
console.log(ra);
}
function fact() {
    const num1 = prompt("Donnez un nbr pour  calculer la factorielle : ");
    const n = parseInt(num1);

    if (n < 0) {
        console.error("Erreur : la factorielle n'est pas définie pour les nombres négatifs.");
        return;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    console.log(`La factorielle de ${n} est : ${result}`);
};
while(true){
console.log(`\n*** Calculatrice ***\n`);
console.log("1. Addition (+)");
console.log("2. Soustraction (-)");
console.log("3. Multiplication (*)");
console.log("4. Division (/)");
console.log("5. Puissance (^)");
console.log("6. Racine carrée (√)");
console.log("7. Factorielle (!)");
console.log("8. Quitter");
const opiration =prompt("donner opiration :");
    switch (opiration) {
        case "1":
           add()
            break;
        case "2":
        
           mois()
            break;
        case "3":
        
            multipation()
            break;
        case "4":

            division()
            break;
        case "5":
            puisance()
            break;
        case "6":
            racine()
            break;
        case "7":
            fact()
            break;
            case "8":
                return
                break;
        default:
            console.error("Invalid choice. Please try again.");
            return;
    }
}
