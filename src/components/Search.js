import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import UserList from "./UserList";

const Search = () => {
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [githubUser, setGithubUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSearch = (e) => {
    const search = e.target.value;
    search === "" ? setErrMsg(true) : setErrMsg(false);
    setUser(search);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.length) {
      setErrMsg(false);
      setIsLoading(true);
      axios
        .get(`https://api.github.com/search/users?q=${user}`)
        .then((res) => {
          setGithubUser(res?.data?.items);
          setIsLoading(false);
        })
        .catch(() => {
          setGithubUser([]);
          setIsLoading(false);
        });
    } else {
      setErrMsg(true);
    }
  };
  return (
    <div className="container px-4 mx-auto my-10">
      <form onSubmit={handleSubmit}>
        <div className="relative md:w-1/2">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <FaSearch />
          </div>
          <input
            type="search"
            id="search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Github User"
            required=""
            onChange={handleUserSearch}
            value={user}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {errMsg && (
        <div
          className="p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          Error: Enter valid search
        </div>
      )}
      {isLoading ? (
        <img src="/loading.gif" alt="Loading" className="h-24 mx-auto my-20" />
      ) : (
        <UserList users={githubUser} />
      )}
    </div>
  );
};

export default Search;
