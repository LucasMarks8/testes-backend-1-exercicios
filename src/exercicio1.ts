export const exercicio1 = (n: string): number => {
    if( typeof n !== "string") {
        throw new Error("'n' dever ser uma string");
    }

    const string = n

    const stringToNumber = parseInt(string)
    // const stringToNumber = Number(string)

    return stringToNumber
}