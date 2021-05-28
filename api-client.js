const apiURL = `http://localhost:3000/`;

const postTodo = async function(todo) {
    try {
        await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch(error) {
        console.log(error);
    }
};

const getTodos = async function() {
    try {
        const res = await fetch(apiURL, {
            method: "GET",
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
