import { exercicio3 } from "../src/exercicio3"

describe("exercicio3", () => {
    test("deve conferir se existe um usuário específico na lista", () => {
        const result = exercicio3("Astrodev")

        expect(result).toEqual(true)
    })
})