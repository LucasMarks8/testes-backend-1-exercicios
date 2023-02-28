import { logica2 } from "../src/logica2"

describe("logica2", () => {
    test("Recebe dois números e devolve objeto com a divisao do primeiro com o segundo e o resto da divisão", () => {
        const result = logica2(10, 2)

        expect(result).toEqual({divisao: 5, resto: true})
    })
})