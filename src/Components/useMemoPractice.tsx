import React, { useState, useEffect, useMemo } from "react";

const Users = () => {
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold text-indigo-600">UserDirectory</h1>

          {/* SEARCH INPUT FIELD */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search users..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-6xl w-full mx-auto p-6">
        {loading ? (
          <div className="flex flex-col justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-medium">
              Loading user data...
            </p>
          </div>
        ) : (
          <>
            {users.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterUsers.map((user) => (
                  <div
                    key={user.id}
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="h-2 bg-indigo-600"></div>
                    <div className="p-6 flex flex-col items-center text-center">
                      <img
                        src={user.image}
                        alt={user.firstName}
                        className="w-24 h-24 rounded-full bg-gray-50 mb-4 border-4 border-white shadow-md group-hover:scale-105 transition-transform"
                      />
                      <h2 className="text-xl font-bold text-gray-900">
                        {user.firstName} {user.lastName}
                      </h2>
                      <div className="mt-3 space-y-1">
                        <p className="text-sm text-gray-500 truncate">
                          {user.email}
                        </p>
                        <p className="text-sm text-gray-500 font-mono">
                          {user.phone}
                        </p>
                      </div>
                      <button className="mt-6 w-full py-2.5 bg-gray-50 text-indigo-600 border border-indigo-100 rounded-xl text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-500">
                  No users found matching your criteria.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UserDirectory. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-600 text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Users;
