// import { useEffect } from "react";

// const App = () => {
//   // Function to create a new todo (POST request)
//   const createTodo = async (todo) => {
//     let options = {
//       method: "POST", // HTTP method
//       headers: {
//         "Content-Type": "application/json", // Specify JSON data
//       },
//       body: JSON.stringify(todo), // Convert the todo object to JSON string
//     };

//     let response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//     let result = await response.json(); // Parse the response into JavaScript object
//     return result;
//   };

//   // Function to get a todo by ID (GET request)
//   const getTodo = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // GET request
//     let result = await response.json(); // Parse the response into JavaScript object
//     return result;
//   };

//   // Main function to tie everything together
//   const mainFunc = async () => {
//     let todo = {
//       title: "Atul", // Title of the todo
//       body: "Saini", // Body of the todo
//       userId: 1, // Associated user ID
//     };

//     // Call createTodo and log the response
//     let createdTodo = await createTodo(todo);
//     console.log("Created Todo:", createdTodo);

//     // Call getTodo for ID 5 and log the response
//     let fetchedTodo = await getTodo(5);
//     console.log("Fetched Todo (ID 5):", fetchedTodo);
//   };

//   // Use useEffect to call mainFunc when the component is rendered
//   useEffect(() => {
//     mainFunc();
//   }, []);

//   return (
//     <div>
//       <h1>React Fetch API Example</h1>
//       <p>Check the console for the API responses.</p>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  function saveUser() {
    console.warn({ name, email, mobile });
    let data = { name, email, mobile };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.warn("result");
      result.json((resp) => {
        console.warn("resp", resp);
      });
    });
  }

  return (
    <div className="App">
      <h1>React Fetch API Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />{" "}
      <br /> <br />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />{" "}
      <br /> <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="mobile"
      />{" "}
      <br /> <br />
      <button type="button" onClick={saveUser}>
        Save New User
      </button>
    </div>
  );
}

export default App;
