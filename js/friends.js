function userLoad() {
    fetch('https://randomuser.me/api/?results=500')
        .then(response => response.json())
        .then(json => displayUser(json))
}

function displayUser(users) {
    const showUsers = users.results;
    const userDiv = document.getElementById('users')

    for (const user of showUsers) {
        const div = document.createElement('div')
        div.classList.add('usersss')
        div.innerHTML = `
        <img src=${user.picture.large} alt="">
            <h5> Name: ${user.name.title}${user.name.first}${user.name.last}</h5>
            <h5> Gender: ${user.gender}</h5>
            <h5> Email: ${user.email}</h5>


        
        `
        userDiv.appendChild(div)
    }

}