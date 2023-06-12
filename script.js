"use strict"


let contacts = [
   {
      id: " ",
      name: "John Smith",
      email: "john2432@gmail.com",
      phone: "123-456-789",
      delete: " ",
   },
   {
      id: " ",
      name: "Otabek Y",
      email: "yakubov@gmail.com",
      phone: "333-444-555",
      delete: " ",
   },
   {
      id: " ",
      name: "Murodov Susambil",
      email: "susambil123@gmail.com",
      phone: "123-555--444",
      delete: " ",
   },
];


let tableBody = document.getElementById("contact-table-body");
let count = 1;
let delet = " X ";



function showTableBody(arr) {
   tableBody.innerHTML = " ";
   count = 1;
   for (let i = 0; i < arr.length; i++) {
      let contact = arr[i];
   
      let row = document.createElement("tr");
      
      let idCell = document.createElement("td");
      idCell.textContent = count;
      row.appendChild(idCell);
      

      let nameCell = document.createElement("td");
      nameCell.textContent = contact.name;
      row.appendChild(nameCell);
   
   
      let emailCell = document.createElement("td");
      emailCell.textContent = contact.email;
      row.appendChild(emailCell);
   
   
      let phoneCell = document.createElement("td");
      phoneCell.textContent = contact.phone;
      row.appendChild(phoneCell);
   
      let deleteCell = document.createElement("td");
      deleteCell.textContent = delet;
      row.appendChild(deleteCell);
      deleteCell.addEventListener('click', () => {
         row.remove();
      });
      tableBody.appendChild(row);
      count++;
   }
}
showTableBody(contacts);


let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(e) {
   e.preventDefault();


   let nameInput = document.getElementById("name");
   let emailInput = document.getElementById("email");
   let phoneInput = document.getElementById("phone");


   let newContact = {
      id: 0,
      name:  nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
   };
   contacts.push(newContact);

   showTableBody(contacts);

   nameInput.value = "";
   emailInput.value = "";
   phoneInput.value = "";
});




//const element = document.getElementById("div-01");
//element.remove(); // Removes the div with the 'div-02' id
