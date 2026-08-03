const output = document.getElementById("output");

function saveLocal() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    output.innerHTML = "Student saved in Local Storage.";
}

function saveSession() {

    const name = document.getElementById("name").value;

    sessionStorage.setItem("currentUser", name);

    output.innerHTML = "User saved in Session Storage.";
}

function showData() {

    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");

    const currentUser = sessionStorage.getItem("currentUser");

    let message = "";

    if (name !== null && age !== null) {

        message += "LOCAL STORAGE\n";
        message += "Name : " + name + "\n";
        message += "Age : " + age + "\n\n";

    } else {

        message += "No data found in Local Storage.\n\n";
    }

    if (currentUser !== null) {

        message += "SESSION STORAGE\n";
        message += "Current User : " + currentUser;

    } else {

        message += "No data found in Session Storage.";
    }

    output.innerHTML = message;
}

function removeLocal() {

    localStorage.removeItem("name");

    localStorage.removeItem("age");

    output.innerHTML = "Local Storage data removed.";
}

function removeSession() {

    sessionStorage.removeItem("currentUser");

    output.innerHTML = "Session Storage data removed.";
}

function clearAll() {

    localStorage.clear();

    sessionStorage.clear();

    output.innerHTML = "All Browser Storage Cleared.";
}