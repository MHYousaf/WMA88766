// Get input value function

let getValFunction = (id)=>{
    return document.getElementById(id).value;
}

// Notify function
let notify = (msg,color)=>{
    Toastify({
        text: msg,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background:color,
          color:"black",
          borderRadius:'10px'
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

// Get age function
let getAgeFunction = (dob)=>{
    var birthDate = new Date(dob);
    var diffenrance = Date.now() - birthDate.getTime();

    var ageDate  = new Date(diffenrance);

    var agecalculate = Math.abs(ageDate.getUTCFullYear() - 1970);

    return agecalculate;
}
// Generate Id
let generateId = ()=>{

    let id = Math.random().toString(36).slice(2);
    // console.log(id)
    return id;
}
let users = [];
// Show user table

let showUserTable = ()=>{
    if(users.length<1)
    {
        notify('Result not found!','#ffc107')
        return;
    }

    let tbody = "";
    let sr = 1;

    for(user of users)
    {
        tbody+=`
        <tr>
            <td>${sr++}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
        </tr>
        `;
    }

    document.getElementById('tbody').innerHTML = tbody;
}
// Add user function
let addUserFunction = ()=>{
    event.preventDefault();
    let firstname = getValFunction('firstname');
    let lastname = getValFunction('lastname');
    let email = getValFunction('email');
    let dob = getValFunction('dob');

    if(firstname.length < 3)
    {
       notify('Please enter vaild firstname','#ffc107')
       return;
    }
    if(lastname.length < 3)
    {
       notify('Please enter vaild lastname','#ffc107')
       return;
    }

    let vaildEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(vaildEmail)){
        notify('Please enter vaild email!','#ffc107')
        return;
    }
    if(!dob){
        notify('Please enter date of birth','#ffc107')
        return;
    }
    
    let user = {
        id:generateId(),
        firstname,
        lastname,
        email,
        dob,
        age:getAgeFunction(dob),
    }
    users.push(user);
    notify('Add user successfully!','#14A44D')
    showUserTable();
}

// show user in console
let showUserInConsole = ()=>{
    console.log('');
    if(users.length<1)
    {
        notify('Result not found!','#ffc107')
        return;
    }
    for(user of users)
    {
        console.log(user)
    }
    
}