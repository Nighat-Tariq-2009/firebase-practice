
// import { db, collection, addDoc, increment, onSnapshot, } from "./firebase.js"


// let list = document.getElementById("list")
// let add = async () => {
//     let todo = document.getElementById("todo");
//     let ref = collection(db, "todos")
//    await addDoc(ref,{
//         id:increment(1),
//         todo:todo.value,
        

//     })
//     console.log("Added todo"),
//     todo.value = "";

//     list.innerHTML +=`<li>${todo.value}</li>`

// }


// let addTodo  = document.getElementById("addTodo")

// addTodo.addEventListener("click", add)

// let getTodos = ()=> {
//      onSnapshot(collection(db, "todos"), (snapshot) => {
//         list.innerHTML = "";
//         snapshot.docChanges().forEach((change) => {
//             let { todo } = doc.data();
//              list.innerHTML += `<li> ${ todo} </li>`
//             console.log("change",change.doc.data())
            
//         })     
           
//     });

// }
// getTodos()







// Sir gous

// import { db, collection, addDoc, increment, onSnapshot } from "./firebase.js";

// let list = document.getElementById("list");

// let add = async () => {
//     let todo = document.getElementById("todo");
//     let ref = collection(db, "todos");
//     await addDoc(ref, {
//         id: increment(1), // Optional, if `id` is necessary
//         todo: todo.value,
//     });
//     console.log("Added todo");
//     todo.value = ""; // Clear the input after adding
// };

// let addTodo = document.getElementById("addTodo");
// addTodo.addEventListener("click", add);

// let getTodos = () => {
//     onSnapshot(collection(db, "todos"), (snapshot) => {
//         list.innerHTML = ""; // Clear the list to avoid duplicates
//         snapshot.docChanges().forEach((change) => {
//             let { todo } = change.doc.data(); // Correctly access the data
//             list.innerHTML += `<li>${todo}</li>`;
//             console.log("change", change.doc.data());
//         });
//     });
// };

// getTodos();




// firestore2



import { db, collection, addDoc, getDocs } from "./firebase.js";

const form = document.getElementById("userForm");
const userList = document.getElementById("userList");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

// Cloudinary Configuration
const cloudName = "dygebri97";
const unsignedUploadPreset = "fhnnhv81";

// Add User to Firebase with Picture
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const age = document.getElementById("age").value;

  const file = fileInput.files[0];
  let fileURL = null;

  if (file) {
    // Cloudinary File Upload
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("file", file);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: fd,
      });
      const data = await response.json();
      fileURL = data.secure_url; // Picture URL
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed. Please try again.");
      return;
    }
  }

  // Firebase User Data Save
  try {
    await addDoc(collection(db, "users"), {
      name,
      email,
      phone,
      address,
      age,
      fileURL, // Save uploaded file URL
      createdAt: new Date(),
    });

    // Update gallery with new user card
    const div = document.createElement("div");
    div.classList.add("card", "mb-3", "p-3");
    div.innerHTML = `
      <h4>${name}</h4>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Age:</strong> ${age}</p>
      ${fileURL ? `<img src="${fileURL}" alt="Uploaded Image" style="max-width: 200px;">` : ""}
    `;
    gallery.appendChild(div);

    form.reset();
    alert("User added successfully!");
  } catch (error) {
    console.error("Error adding user:", error);
    alert("Error adding user. Check console for details.");
  }

//   chat gtp

// await updateDoc(doc(db, "users", "userID123"), {
//     name: "New Name",
//   });

  
//   await updateDoc(doc(db, "users", "userID123"), {
//     hobbies: arrayUnion("Reading"),
//   });
//   await updateDoc(doc(db, "users", "userID123"), {
//     hobbies: arrayRemove("Reading"),
//   });
  


});