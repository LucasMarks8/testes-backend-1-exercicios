interface Users {
    id: String,
    name: string
}

const user: Users = {
    id: "u001",
    name: "Astrodev"
}

export const logica4 = (user: Users) => {
    return Object.values(user)
}