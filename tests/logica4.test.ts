import { logica4 } from "../src/logica4"

describe('logica4', () => {
    test('valor de entrada é um objeto e retonar somente os srgumento dele', () => {
        const result = logica4({id: "u001", name: "Astrodev"})

        expect(result).toEqual(["u001", "Astrodev"])
    })
})