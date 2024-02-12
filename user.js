const loadAllUser = () => {
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((data) => {
      displayAlluser(data);
    });
};

const displayAlluser = (data) => {
  document.getElementById("user").innerHTML = "";
  const parent = document.getElementById("user");
  data.forEach((user) => {
    const div = document.createElement("div");
    div.classList.add("user");
    div.innerHTML = `
    <div>
        <h3>User Personal Information- User ID: ${user.id} </h3>
        <hr>
        <p>Username: ${user.username}</p>
        <p>Name:  ${user.name.firstname} ${user.name.lastname}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
    </div>
    <div>
        <h3>User Address</h3>
        <hr>
        <p>City: ${user.address.city}</p>
        <p>Street: ${user.address.street}</p>
        <p>Zip Code: ${user.address.zipcode}</p>
    </div>
    `;
    parent.appendChild(div);
  });
};

const singleUser = (event) => {
  event.preventDefault();
  const id = document.getElementById("single-user").value;
  console.log(id);
  fetch(`https://fakestoreapi.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => displaySingleuser(data));
};

const displaySingleuser = (data) => {
  document.getElementById("user").innerHTML = "";
  const parent = document.getElementById("user");
  const div = document.createElement("div");
  div.classList.add("user");
  div.innerHTML = `
      <div>
          <h3>User Personal Information- User ID: ${data.id} </h3>
          <hr>
          <p>Username: ${data.username}</p>
          <p>Name:  ${data.name.firstname} ${data.name.lastname}</p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
      </div>
      <div>
          <h3>User Address</h3>
          <hr>
          <p>City: ${data.address.city}</p>
          <p>Street: ${data.address.street}</p>
          <p>Zip Code: ${data.address.zipcode}</p>
      </div>
      `;
  parent.appendChild(div);
};

const loadUserCreation = (event) => {
  event.preventDefault();
  const username = getValue("username");
  const email = getValue("email");
  const firstName = getValue("firstName");
  const lastName = getValue("firstName");
  const city = getValue("city");
  const street = getValue("street");
  const phone = getValue("phone");
  const password = getValue("password");
  const info = {
    username,
    email,
    firstName,
    lastName,
    city,
    street,
    phone,
    password,
  };
  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const loadLogin = (event) => {
  event.preventDefault();
  const username = getValue("username");
  const password = getValue("password");
  const info = {
    username,
    password,
  };
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", data.user_id);
      console.log(data);
      window.location.href = "product.html";
    });
};

const getValue = (id) => {
  const val = document.getElementById(id).value;
  return val;
};

loadAllUser();
loadLogin();