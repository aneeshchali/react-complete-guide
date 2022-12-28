import React from "react";

import Wrapper from "./Wrapper";

export default function ShowUsers(props) {
  let list = props.Data;
  console.log(list);
  return (
    <Wrapper className="list">
      <ul>
        {list.map((val) => {
          return (
            <li key={val.key} onClick={() => props.DeleteList(val.key)}>
              {val.username} ({val.age} Years old)
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
