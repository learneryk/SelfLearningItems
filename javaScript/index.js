let people = {
    person1 : {
        codenames: {
            old: ["alpha", "beta"],
            new: ["charlie", "delta"]
        }
    },
    person2: {
        codenames: {
            old: ["tiger", "kryptos"],
            new: ["enigma"]
        }
    }
}

console.log(people.person1.codenames.old[1])