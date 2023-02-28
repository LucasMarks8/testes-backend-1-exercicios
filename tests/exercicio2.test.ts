import { exercicio2 } from "../src/exercicio2"

describe("exercicio2", () => {
    test("deve receber a data aaaa/mm/dd e retornar a data dd/mm/aaaa", () => {
        const result = exercicio2("aaaa/mm/dd")
        
        expect(result).toBe("dd/mm/aaaa")
    })
})