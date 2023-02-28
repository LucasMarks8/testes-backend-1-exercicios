import { logica5 } from "../src/logica5"

describe("logica5", () => {
    test('Devolve o intervalo entre dois números', () => {
        const result = logica5(2, 7)

        expect(result).toEqual([2, 3, 4, 5, 6, 7])
    })
})