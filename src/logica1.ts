var extenso = require("extenso")

export const logica1 = (n: number) => {
    if(typeof n !== "number") {
        throw new Error("'n' deve ser um number");
    }

    return extenso(n)
}