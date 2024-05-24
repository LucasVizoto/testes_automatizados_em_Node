import * as funcoesUtilitarias from '../src/utils'
import { readFile } from "fs/promises";

jest.mock('fs/promises')
//um mock basicamente "cria uma função que não faz nada no banco mas é "executada" em segundo plano
// contudo nn altera o banco de dados
test("testa o mock da função", () => {
    const mockSoma = jest.spyOn(funcoesUtilitarias, 'soma')
    mockSoma.mockImplementation(() => 0) 
    const resultado = funcoesUtilitarias.soma(1,2)
    expect(resultado).toEqual(0)
})

describe('', () =>{
    test('', async()=>{
        readFile.mockImplementation(() => Promise.resolve(
            JSON.stringify([{nome: "nkjsndjkfns"}])
        ))
        const resultado = await lerDados("dados_clientes.json")
        expect(resultado[0].nome).toEqual('Lucas')
    })
})

//---------------------------------------------------------------------------------------
import * as nodeFiles from "fs/promises";
import * as bancoDados from "../src/bancoDados"

jest.mock('fs/promises')

describe('testa as funções do arquivo src/bancoDados.js', () => {
  describe('testa a função moveDados', () => {
    test('', async () => {
      nodeFiles.readFile.mockResolvedValue(JSON.stringify([]))

      const resposta = await bancoDados.moveDados('usuarios.json', 'backupUsuarios.json')

      expect(resposta).toBeTruthy()
      expect(nodeFiles.writeFile.mock.calls[0]).toEqual(['bancoDados/backupUsuarios.json', "[]"])
      expect(nodeFiles.writeFile.mock.calls[1]).toEqual(['bancoDados/usuarios.json', "[]"])
    })

    test('', async () => {
      nodeFiles.readFile.mockRejectedValue(new Error('error test'))

      const resposta = await bancoDados.moveDados('usuarios.json', 'backupUsuarios.json')

      expect(resposta).toBeFalsy()
      expect(nodeFiles.writeFile).not.toHaveBeenCalled()
    })
  })
})