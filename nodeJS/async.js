const pokemon = "typhlosion"

async function fetchData() {0

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!response.ok) {
            throw new Error("Couldn't Fetch Resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.error(error)
    }
}

fetchData();