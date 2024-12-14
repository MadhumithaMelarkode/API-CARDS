container = document.getElementById("container");
function createCards(){
fetch('https://dummyjson.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    let userslist = data.users;
    for(let i of userslist){
        let div = document.createElement('div');
        div.classList.add('card');
        let a = document.createElement('div');
        let img = document.createElement('img');
        img.classList.add('image');
        let name = document.createElement('p');
        name.classList.add('name');
        let sdiv = document.createElement('div');
        sdiv.classList.add('details');
        let uname = document.createElement('p');
        let city = document.createElement('p');
        let email = document.createElement('p');
        let gender = document.createElement('p');
        gender.classList.add('gen');
        let dept= document.createElement('p');
        // for(let user in i){
        //     console.log(user);
        // }
        img.src=i.image;
        name.innerText = i.lastName+" "+i.firstName;
        uname.innerText = i.username;
        city.innerText = i.address.city;
        email.innerText = i.email;
        let gen = i.gender;
        if(gen==="male"){
            gender.innerText='M';
            
        }
        else if(gen===female){
            gender.innerText='F';
        }
        dept.innerText = i.company.department;
        console.log('m');
        a.appendChild(img);
        a.appendChild(name);
        // div.appendChild(uname);
        // div.appendChild(city);
        // div.appendChild(email);
        sdiv.appendChild(uname);
        sdiv.appendChild(city);
        sdiv.appendChild(email);
        div.appendChild(a);
        div.appendChild(sdiv);
        div.appendChild(gender);
        div.appendChild(dept);
        container.appendChild(div);
    }

})
}
createCards();