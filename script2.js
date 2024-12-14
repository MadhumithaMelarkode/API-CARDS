container = document.getElementById("container");
function createCards(){
fetch('https://dummyjson.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    let userslist = data.users;
    let h = ''
    for(let i of userslist){
        h+=
        `<div class='card'>
        <div class='left'>
        <img class='image' src=${i.image}>
        <p class = 'name'>${i.lastName+" "
            +i.firstName}</p>
        </div>
        <div class='details'>
        <p>${i.username}</p>
        <p>${i.address.city}</p>
        <p>${i.email}</p>
        </div>
        <p id='gen'>${(i.gender)==='female'?'F':'M'}</p>
        <p class='department'>${i.company.department}</p>
        </div>
        ` 
    }
    container.innerHTML=h;
})
}
createCards();