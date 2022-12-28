import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import ShowUsers from "./components/Users/ShowUsers";
let ListData = [
  {
    key: "0",
    username: "amit",
    age: "32",
  },
  {
    key: "1",
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

  const DeleteList = (value) => {
    let NewList = userList.filter((val) => val.key !== value);
    setuserList(NewList);
    // console.log(ListData);
    // setuserList(ListData);
  };

  return (
    <div>
      <AddUser DataSend={DataRecieved} />
      <ShowUsers Data={userList} DeleteList={DeleteList} />
    </div>
  );
}

export default App;
