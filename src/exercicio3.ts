interface Users {
    id: string
    name: string
}

const users: Users[] = [
    {
        id: "u001",
        name: "Lucas"
    },
    {
        id: "u002",
        name: "André"
    },
    {
        id: "u003",
        name: "Astrodev"
    }
]

export const exercicio3 = (search: string) => {
    if (typeof search !== "string") {
        throw new Error("'name' deve ser string");
    }

    let checkUser = false

    users.filter((user) => {
        if (user.name === search) {
            checkUser = true
        }
    })

    return checkUser

    // for(let user of users) {
    //     if(user.name === search) {
    //         return user.name
    //     }
    // }
}