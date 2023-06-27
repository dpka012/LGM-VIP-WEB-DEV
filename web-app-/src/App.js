import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showData, setShowData] = useState(false); 

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const json = await res.json();
      setUsers(json.data);
      setShowData(false); 
      setTimeout(() => {
        setShowData(true); 
      }, 5000); // Delay of 5 seconds 
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Lets Grow More</h1>
        <button onClick={fetchUsers} disabled={isLoading}>
          {isLoading ? "Loading..." : "Get Users"}
        </button>
      </nav>
      <div className="grid">
        {isLoading ? (
          <p style={{ fontWeight:"bolder"}}>Loading Users Data...</p>
        ) : showData ? ( 
          users.map((user) => (
            <div key={user.id}>
            
              <img src={user.avatar} alt="User Avatar" />
              <p>
                <bold>{user.first_name} {user.last_name}</bold>
              </p>
              <p>{user.email}</p>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}
