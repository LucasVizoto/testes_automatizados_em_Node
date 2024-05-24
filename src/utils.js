export function soma(n1, n2){
    if(typeof n1 != "number" || typeof n2 != "number" ){ //typeof para verificar o tipo e nn dar fail caso seja jogado um NaN
        throw new Error("Os parâmetros devem ser um número") // lançamento de um erro para tratamento num front
    }
    return Number(n1) + Number(n2) //Number para caso o numero passado seja uma String
}
// o export serve para poder pegar depois no arquivo de teste

export function multiplicacao(n1, n2){
    if(typeof n1 != "number" || typeof n2 != "number"){
        throw new Error("Os parâmetros devem ser um número")
    }
    return Number(n1) * Number(n2)
}