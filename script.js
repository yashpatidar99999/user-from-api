const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    const container = document.getElementById("container");
    users.data.map((user) => {
        const div = document.createElement("div");
        div.className = "user_container";
        div.innerHTML = `
            <img src="${user.avatar}"/>
            <h1>${user.first_name} ${user.last_name}</h1>
            <p>${user.email}</p>
        `;
        container.appendChild(div);
    })
};
