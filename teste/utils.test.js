import { soma } from "../src/utils";
import { multiplicacao } from "../src/utils";

//utilizando o describe ao invés do test direto
//o descrive serve para descrever o que o teste faz
describe("testar as funções do arquivo utils.js", () => {
    describe("testa a função soma", ()=>{
        test("Fornece dois numeros e espera a soma deles", ()=>{
            const resultado = soma(18,5)
            expect(resultado).toEqual(23) // expect é oque ele espera que seja retornado da função
            // neste caso a condição é ser igual (toEqual)
        })

        test("Fornece uma letra e um numero e espera um Error", ()=>{
            try{
            const resultado = soma('bl',5)
            }catch(erro){
                expect(erro.message).toEqual('Os parâmetros devem ser um número') 
            }
        })
    })
}) 

//fechado o describe de soma


describe("testar a função de multiplicação", () => {
    test("Fornece dois numeros e espera a multiplicação deles", () =>{
        const resultado = multiplicacao(18,5)
        expect(resultado).toEqual(90)
    })

    test("Fornece um numero e uma string e novamente deve lançar o erro", ()=>{
        try{
            const resultado = multiplicacao("bl", 18)
        }catch(erro){
            expect(erro.message).toEqual("Os parâmetros devem ser um número")
        }
    })
})