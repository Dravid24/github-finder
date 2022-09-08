import React from "react";
import { FaGithub, FaRegEye, FaRegStar } from "react-icons/fa";
import { TbGitFork } from "react-icons/tb";

const Repository = ({ repos }) => {
  const openLinkInNew = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <p className="pt-2  text-3xl font-bold text-gray-600 ">Latest Repository</p>
      {repos?.map((repo) => {
        return (
          <div key={repo.id} className="p-4 my-6 w-full bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 ">
            <div className="sm:flex sm:flex-row justify-between">
              <p className="pb-2 text-xl font-bold text-gray-900 ">
                {repo?.name}
                <span className="ml-3 bg-purple-100 text-purple-800 text-sm font-medium mr-3 px-3 py-1 rounded dark:bg-purple-200 dark:text-purple-900">
                  {repo?.full_name}
                </span>
              </p>
              <button
                type="button"
                className="text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                onClick={() => openLinkInNew(repo.html_url)}
              >
                <FaGithub size={20} className="mr-2" />
                Visit Repository
              </button>
            </div>
            <p className="mb-3 text-base text-gray-500 sm:text-lg ">{repo.description}</p>
            <p className="text-gray-600">
              <span className="text-lg font-bold">Programming Language : </span>
              {repo.language}
            </p>
            <div className="my-3">
              <span className="inline-flex items-center font-bold bg-gray-100 text-gray-800 text-sm  mr-3 px-3 py-1 rounded dark:bg-gray-200 dark:text-gray-900 ">
                <FaRegEye className="mr-1" /> watch <span className="ml-1 text-gray-500 ">{repo.watchers_count}</span>
              </span>
              <span className="inline-flex items-center font-bold bg-gray-100 text-gray-800 text-sm mr-3 px-3 py-1 rounded dark:bg-gray-200 dark:text-gray-900 ">
                <TbGitFork className="mr-1" /> Fork <span className="ml-1 text-gray-500 ">{repo.forks_count}</span>
              </span>
              <span className="inline-flex items-center font-bold bg-gray-100 text-gray-800 text-sm mr-3 px-3 py-1 rounded dark:bg-gray-200 dark:text-gray-900 ">
                <FaRegStar className="mr-1" /> Star <span className="ml-1 text-gray-500 ">{repo.stargazers_count}</span>
              </span>
            </div>
          </div>
        );
      })}
      {repos?.length === 0 && <div className="py-20 text-center text-gray-500">Repository Not Found</div>}
    </div>
  );
};

export default Repository;
