import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { FaGithub } from "react-icons/fa";
import DetailsTabs from "./DetailsTabs";

const ProfileDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setUserDetails(null);
    axios
      .get(`https://api.github.com/users/${id}`)
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const openLinkInNew = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container px-4 mx-auto mt-5 mb-28 ">
      <button
        type="button"
        className="text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        onClick={() => navigate("/")}
      >
        Back to search
      </button>

      {userDetails ? (
        <>
          <div className="md:grid md:grid-cols-3 gap-4 my-10">
            <div>
              <figure className="relative max-w-sm ">
                <img
                  className="rounded-lg object-cover w-full h-full"
                  src={userDetails.avatar_url}
                  alt="profile"
                />

                <div className="absolute bottom-6 px-4 text-4xl font-bold text-white">
                  <p>{userDetails.login}</p>
                </div>
              </figure>
            </div>
            <div className="col-span-2 px-3">
              <p className="text-4xl font-bold">
                {" "}
                {userDetails.name ? userDetails.name : userDetails.login}
              </p>
              <p className="text-gray-500">{userDetails.bio}</p>
              <button
                type="button"
                className="my-5 text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                onClick={() => openLinkInNew(userDetails.html_url)}
              >
                <FaGithub size={20} className="mr-2" />
                Visit Github Profile
              </button>
              <p className="text-gray-600">
                <span className="text-lg font-bold">Username : </span>
                {userDetails.login}
              </p>
              {userDetails.location && (
                <p className="text-gray-600">
                  <span className="text-lg font-bold">Location : </span>
                  {userDetails.location}
                </p>
              )}
              {userDetails.company && (
                <div className="text-gray-600">
                  <span className="text-lg font-bold">Company : </span>
                  <span>{userDetails.company}</span>
                </div>
              )}
              {userDetails.blog && (
                <div className="text-gray-600">
                  <span className="text-lg font-bold">Website : </span>
                  <span
                    className="cursor-pointer text-blue-500"
                    onClick={() => openLinkInNew(userDetails.blog)}
                  >
                    {userDetails.blog}
                  </span>
                </div>
              )}
              {userDetails.twitter_username && (
                <div className="text-gray-600">
                  <span className="text-lg font-bold">Twitter Username : </span>
                  <span
                    className="cursor-pointer text-blue-500"
                    onClick={() =>
                      openLinkInNew(
                        `https://twitter.com/${userDetails.twitter_username}`
                      )
                    }
                  >
                    {userDetails.twitter_username}
                  </span>
                </div>
              )}
              <div className="my-3">
                <span className="bg-red-100 text-red-800 text-sm font-medium mr-3 px-3 py-1 rounded dark:bg-red-200 dark:text-red-900 ">
                  Public Repos: {userDetails.public_repos}
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-medium mr-3 px-3 py-1 rounded dark:bg-green-200 dark:text-green-900">
                  Public Gists: {userDetails.public_gists}
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-3 px-3 py-1 rounded dark:bg-yellow-200 dark:text-yellow-900 ">
                  Followers: {userDetails.followers}
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-3 px-3 py-1 rounded dark:bg-indigo-200 dark:text-indigo-900">
                  Followings: {userDetails.following}
                </span>
              </div>
            </div>
          </div>
          <div>
            <DetailsTabs />
          </div>
        </>
      ) : (
        <img src="/loading.gif" alt="Loading" className="h-24 mx-auto my-20" />
      )}
    </div>
  );
};

export default ProfileDetails;
