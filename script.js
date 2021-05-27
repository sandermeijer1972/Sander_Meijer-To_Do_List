const newTaak = {description: "stofzuigen", done: false};
const apiURL = `http://localhost:3000/`;

const giveTaak = () => {
    fetch(apiURL, {method: "POST",
        body: JSON.stringify(newTaak),
        headers: {
            "Content-Type": "application/json",
        }
    });
};

giveTaak();


const getTaken = async function() {
    const apiURL = `http://localhost:3000/`;
    try {
        const res = await fetch(apiURL, {method: "GET",
        headers: {
            "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log("uit te voeren taken: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }        
};

getTaken();