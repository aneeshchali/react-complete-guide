import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import ShowUsers from "./components/Users/ShowUsers";
let ListData = [
  {
    username: "amit",
    age: "32",
  },
  {
    username: "rahul",
    age: "30",
  },
];

function App() {
  const [userList, setuserList] = useState(ListData);
  const DataRecieved = (data) => {
    setuserList((ListData) => {
      return [data, ...ListData];
    });
  };


  return (
    <div>
      <AddUser DataSend={DataRecieved} />
      <ShowUsers Data={userList} />
    </div>
  );
}

export default App;
