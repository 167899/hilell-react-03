import "./App.css";
import UserList from "./component/UserList";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains("checked")) {
        e.target.remove();
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return <UserList />;
}

export default App;
