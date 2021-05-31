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

const deleteTodo = async function(id) {
    try {
        const res = await fetch((apiURL + id), {
            method: "DELETE",
        });
    } catch(error) {
        console.log(error);
    }
};

const doneTodo = async function(id) {
    try {
        await fetch((apiURL + id), {
            method: "PUT",
            body: JSON.stringify({done: true}),
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch(error) {
        console.log(error);
    }
};

const notDoneTodo = async function(id) {
    try {
        await fetch((apiURL + id), {
            method: "PUT",
            body: JSON.stringify({done: false}),
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch(error) {
        console.log(error);
    }
};