import React, { useEffect, useState } from "react";

const UserSearchApp = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, 2000));
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoding(false);
      }
    };
    fetchUsers();
  }, []);

  const box = {
    border: "white 2px solid",
    textAlign: "center",
    gap: "13px",
    margin: "30px",
    padding: "10px",
    borderRadius: "10px",
  };

  const filteredUsers = user.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loding) return <h2>Loading...!</h2>;
  if (error) return <h2>Error : {error}</h2>;

  return (
    <div style={box}>
      <h2 style={{ textAlign: "left" }}>Task 3</h2>
      <h2>User Search App</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", margin: "20px", width: "250px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {filteredUsers.map(user => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              width: "250px",
              margin: 'auto'
            }}
          >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSearchApp;
