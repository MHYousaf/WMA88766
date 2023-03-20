document.getElementById("main").style.display = "none";

validation = () => {
    // Full Name validation
    let text = document.getElementById("fname").value;
    if (text == "" || text == null) {
        Toastify({
            text: "Enter Your Full Name Plz!",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return
    }
    text = text.toLowerCase();
    let first = text.slice(0, 1);
    first = first.toUpperCase();
    let allOthers = text.slice(1);
    allOthers = allOthers.toLowerCase();
    let  fullName = first + allOthers;

    // email validation
    let email = document.getElementById("myE").value;
    if (email == "" || email == null) {
        Toastify({
            text: "Enter Email Plz!",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return
    }else if(email != "admin@user.com"){
        Toastify({
            text: "Enter Correct Email Plz!",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    // password validation
    let pass = document.getElementById("myPass").value;
    if(pass == "" || pass == null){
        Toastify({
            text: "Enter Password Plz!",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;

    }
    else if(pass !="123456" ){
        Toastify({
            text: "Enter correct Password Plz!",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return;
    }
    
    document.getElementById("sign").style.display = "none";
    document.getElementById("homeName").innerHTML = fullName;
    document.getElementById("main").style.display = "block";
    Toastify({
      text: "Welcome "+fullName +"!",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
}

let cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"]

for (i = 0; i < cities.length; i++) {
  num = i + 1;
  document.getElementById("original-string").innerHTML += num + ")" + " " + cities[i] + "<br>"
}
function printCities(){
  document.getElementById("output").innerHTML = " ";

  for (i = 0; i < cities.length; i++) {
      let num = i + 1
      document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + " " + "<br>"
  }
}

function addCity(){
  let newCity = document.getElementById("input").value ;
  if (!newCity) {
    Toastify({
      text: "Enter City Name Plz!",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
      return;
  }
  newCityFirstLetter = newCity.charAt(0).toUpperCase();
  newCityAllLetters = newCity.slice(1).toLowerCase();
  newCityInCapitalize = newCityFirstLetter + newCityAllLetters;

  let cityFound = false;
  for (i = 0; i < cities.length; i++) {
      if (cities[i] === newCityInCapitalize) {
          cityFound = true;
          document.getElementById("output").innerHTML = "<span style='color:red'>" + "&quot" + newCityInCapitalize + "&quot" + '</span>' + " is already in cities list"
      }
  }

  if (cityFound === false) {
      cities.push(newCityInCapitalize);
      document.getElementById("output").innerHTML = "<span style='color:green'>" + newCityInCapitalize + "&quot" + '</span>' + " has been successfully added into the list"

      document.getElementById("print-cities").onclick = function () {
          document.getElementById("output").innerHTML = " "
          for (i = 0; i < cities.length; i++) {
              num = i + 1;
              document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + "<br>"
          }
      }

  }
}