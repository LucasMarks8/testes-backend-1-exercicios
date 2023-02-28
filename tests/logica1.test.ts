import { logica1 } from "../src/logica1"

describe("logica1", () => {
    test("deve receber um número number e retornar um numero escrito por extenso de formato string", () => {
        const result = logica1(100)

        expect(result).toBe("cem")
    })
})