export const logica5 = (num1: number, num2: number) => {
    let interval: any = []

    // if(num1 < num2) {
    //     for(let i = num1; i <= num2; i++) {
    //          interval.push(i)
    //     }
    //     return interval
    // } else {
    //     for(let i = num2; i <= num1; i++) {
    //          interval.push(i)
    //     }
    //     return interval
    // }

    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        interval.push(i);
    }
    
    return interval
}