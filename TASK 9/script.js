document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const table = document.querySelector(".table");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve form values
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const address = document.querySelector("input[name='address']").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector("input[name='gender']:checked").value;

        const selectedFood = document.querySelectorAll("input[name='food']:checked");
        const foodValues = Array.from(selectedFood).map(food => food.value).join(", ");

        const state = document.getElementById("select").value;
        const country = document.getElementById("selec").value;

        // Create a new table row and append data
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = address;
        cell4.innerHTML = pincode;
        cell5.innerHTML = gender;
        cell6.innerHTML = foodValues;
        cell7.innerHTML = state;
        cell8.innerHTML = country;

        // Clear form fields
        form.reset();
    });
});