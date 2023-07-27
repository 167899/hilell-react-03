import { useEffect, useState } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <ul>
      {users && users.map((e) => <User key={e.email} name={e.name}></User>)}
    </ul>
  );
};

export default UserList;
