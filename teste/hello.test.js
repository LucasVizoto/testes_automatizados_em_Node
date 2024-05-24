import { boasVindas } from '../src/hello'

test("My first test in NodeJS", () =>{
    const resultado = boasVindas()
    expect(resultado).toEqual("Hello Word")
})