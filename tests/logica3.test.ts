import { logica3 } from "../src/logica3"

describe("logica3", () => {
    test("receber uma palavra em string e devolver a mesma palavra com a ordem invertida", () => {
        const result = logica3("lucas")

        expect(result).toBe("sacul")
    })
})