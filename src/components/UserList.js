import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <>
      <div className="px-5 my-10 grid grid-cols-1 sm:grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center mb-20">
        {users?.map((user) => {
          return (
            <div key={user.id}>
              <div className=" p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 m-2 flex flex-row items-center bg-white rounded-lg border shadow-md sm:flex-row sm:max-w-xl hover:bg-gray-100 ">
                <img className="object-cover w-20 h-20 rounded-full m-5" src={user.avatar_url} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-all">
                    {user.login}
                  </h5>

                  <Link
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    to={`/details/${user.login}`}
                  >
                    View Profile
                    <svg
                      aria-hidden="true"
                      className="ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {users?.length === 0 && <div className="text-center text-gray-500">User Not Found</div>}
    </>
  );
};

export default UserList;
