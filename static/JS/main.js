// JS function to move one page to another

const signUp = () => {
  location.href = "signup.html";
};

let btnTog = "unclicked";

let funcResp = () => {
  if (btnTog == "unclicked") {
    document.getElementById("mobL").style.display = "block";
    btnTog = "clicked";
  } else if (btnTog == "clicked") {
    document.getElementById("mobL").style.display = "none";
    btnTog = "unclicked";
  }
};

let b_fname = true;
let b_lname = true;
let b_uname = true;
let b_address1 = true;
let b_address2 = true;
let b_city = true;
let b_mail = true;

// function to check first name is alphabetics only or not

let isAlphaOnlyFname = (str) => {
  if (str.match(/^[A-Za-z]+$/)) {
    document.getElementById("fnameErr").innerHTML = "";
    document.getElementById("fname").style = "none";
    b_fname = true;
  } else {
    document.getElementById("fnameErr").innerHTML =
      "*please enter alphabetics only*";
    document.getElementById("fname").style.borderColor = "red";

    b_fname = false;
  }
};

// function to check last name is alphabetics only or not

let isAlphaOnlyLname = (str) => {
  if (str.match(/^[A-Za-z]+$/)) {
    document.getElementById("lnameErr").innerHTML = "";
    document.getElementById("lname").style = "none";
    b_lname = true;
  } else {
    document.getElementById("lnameErr").innerHTML =
      "*please enter alphabetics only*";
    document.getElementById("lname").style.borderColor = "red";
    b_lname = false;
  }
};

// function to check user name contain alphanumeric characters

let isAlphaNumericUname = (str) => {
  let cAplha = str.match(/^[ A-Z]*$/);
  let sAlpha = str.match(/^[ a-z]*$/);
  let numb = str.match(/^[ 0-9]*$/);
  if (cAplha == sAlpha && numb == cAplha) {
    document.getElementById("unameErr").innerHTML = "";
    document.getElementById("uname").style = "none";
    b_uname = true;
  } else {
    document.getElementById("unameErr").innerHTML =
      "*username must contain alphanumeric characters*";
    document.getElementById("uname").style.borderColor = "red";
    b_uname = false;
  }
};

// function to check valid email

let isEmail = (str) => {
  if (str.includes("@" && ".")) {
    document.getElementById("mailErr").innerHTML = "";
    document.getElementById("mail").style = "none";
    b_mail = true;
  } else {
    document.getElementById("mailErr").innerHTML =
      "*please enter valid email ID with '@' and '.'*";
    document.getElementById("mail").style.borderColor = "red";
    b_mail = false;
  }
};

// function to check address lane 1 does not have any special characters in it

let isAddress1 = (str) => {
  if (str.match(/^[A-Za-z0-9\s]+$/)) {
    document.getElementById("address1Err").innerHTML = "";
    document.getElementById("address1").style = "none";
    b_address1 = true;
  } else {
    document.getElementById("address1Err").innerHTML =
      "*do not enter special characters*";
    document.getElementById("address1").style.borderColor = "red";
    b_address1 = false;
  }
};

// function to check address lane 2 does not have any special characters in it

let isAddress2 = (str) => {
  if (str.match(/^[A-Za-z0-9\s]+$/)) {
    document.getElementById("address2Err").innerHTML = "";
    document.getElementById("address2").style = "none";
    b_address2 = true;
  } else {
    document.getElementById("address2Err").innerHTML =
      "*do not enter special characters*";
    document.getElementById("address2").style.borderColor = "red";
    b_address2 = false;
  }
};

// function to check city is alphabetics only or not

let isCity = (str) => {
  if (str.match(/^[ A-Za-z]*$/)) {
    document.getElementById("cityErr").innerHTML = "";
    document.getElementById("city").style = "none";
    b_city = true;
  } else {
    document.getElementById("cityErr").innerHTML =
      "*please enter alphabetics only*";
    document.getElementById("city").style.borderColor = "red";
    b_city = false;
  }
};

// on submitting form function

const formSubmit = (e) => {
  e.preventDefault();

  if (
    b_fname == false ||
    b_lname == false ||
    b_uname == false ||
    b_address1 == false ||
    b_address2 == false ||
    b_city == false ||
    b_mail == false
  ) {
    alert("please enter valid data");
  } else {
    // getting all the data from input field

    const fnameVal = document.getElementById("fname").value;
    const lnameVal = document.getElementById("lname").value;
    const unameVal = document.getElementById("uname").value;
    const mailVal = document.getElementById("mail").value;
    const phnVal = document.getElementById("phone").value;
    const address1Val = document.getElementById("address1").value;
    const address2Val = document.getElementById("address2").value;
    const stateVal = document.getElementById("state").value;
    const cityVal = document.getElementById("city").value;
    const zipVal = document.getElementById("zip").value;

    // getting all the values and storing in object on submitting

    const final = {
      firstName: fnameVal,
      lastName: lnameVal,
      username: unameVal,
      mail: mailVal,
      phone: `+1-${phnVal}`,
      address1: address1Val,
      address2: address2Val,
      state: stateVal,
      city: cityVal,
      zip: zipVal,
    };
    // pushing object into an Array

    finalArr = [];
    finalArr.push(final);

    // storing the form data into localStorage

    localStorage.setItem("formData", JSON.stringify(finalArr));

    // alert box to notify users their data are stored

    alert("Thank you, your signup process completed successfully");
  }
};

// teams page JS

const fetchData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      resolve(data.users);
    } catch (error) {
      reject(error);
    }
  });
};

fetchData().then((arr) => {
  const newArr = arr.map((item) => {
    return `<div id="card">
      <div class="imageC">
      <img src="${item.image}" alt="profile" class="profImg">
      <h6 class="name">${item.firstName} ${item.lastName}</h6>
      </div>
      <div class="context">
      <span><i class="fa-solid fa-location-dot"></i></span>
      <p>${item.address.city},</p>
      <p>${item.address.state}</p>
      <button>View Profile</button>
      </div>
      </div>`;
  });

  document.getElementById("cards").innerHTML = newArr.join("");
});
