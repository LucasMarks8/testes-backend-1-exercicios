export const exercicio2 = (date: string): string => {
    if(typeof date !== "string") {
        throw new Error("'date' deve ser string");
    }

    const brazilianDate = date.split("/").reverse().join("/")
    //               ["aaaa", "mm", "dd"] ["dd", "mm", "aaaa"] dd/mm/aaaa

    return brazilianDate
}