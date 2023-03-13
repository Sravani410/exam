import React from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <h1>User Form</h1>
      <UserForm />
      <UserTable/>
    </div>
  );
}

export default App;
