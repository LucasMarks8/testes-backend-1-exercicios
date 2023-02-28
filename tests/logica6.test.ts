import { logica6 } from "../src/logica6"

describe("logica6", () => {
    test('Devolve os números pares no intervalo entre dois números', () => {
        const result = logica6(2, 7)

        expect(result).toEqual([2, 4, 6])
    })
})