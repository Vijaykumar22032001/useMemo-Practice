import React, { useState, useEffect, useMemo } from "react";
import UsersDataUI from "./UsersDataUI";

const UserDataFetching = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [SearchTerm, setSearchTerm] = useState("");
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  const filterUsers = useMemo(() => {
    return users.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(SearchTerm.toLowerCase()) ||
        item.lastName.toLowerCase().includes(SearchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(SearchTerm.toLowerCase()) ||
        item.phone.toLowerCase().includes(SearchTerm.toLowerCase())
      );
    });
  }, [users, SearchTerm]);

  console.log("Filtered Users:", filterUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <UsersDataUI users={filterUsers} loading={loading} />
    </>
  );
};

export default UserDataFetching;
