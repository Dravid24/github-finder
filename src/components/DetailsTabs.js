import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Repository from "./Repository";
import UserList from "./UserList";

const DetailsTabs = () => {
  const params = useParams();
  const { id } = params;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [repos, setRepos] = useState(null);
  const [follower, setFollower] = useState(null);
  const [following, setFollowing] = useState(null);

  useEffect(() => {
    fetchRepos(id);
    fetchFollowers(id);
    fetchFollowing(id);
  }, [id]);

  const fetchRepos = (user) => {
    axios
      .get(`https://api.github.com/users/${user}/repos?sort=created_at`)
      .then((res) => setRepos(res.data))
      .catch(() => setRepos([]));
  };

  const fetchFollowers = (user) => {
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then((res) => setFollower(res.data))
      .catch(() => setFollower([]));
  };

  const fetchFollowing = (user) => {
    axios
      .get(`https://api.github.com/users/${user}/following`)
      .then((res) => setFollowing(res.data))
      .catch(() => setFollowing([]));
  };

  const tabTitle = ["Repository", "Followings", "Followers"];
  return (
    <div>
      <div className="flex space-x-3 border-b">
        {tabTitle.map((tab, index) => {
          return (
            <button
              key={index}
              className={`py-3 px-5 border-b-4 transition-colors duration-300 ${
                index === activeTabIndex
                  ? "border-blue-500 text-blue-500 font-bold"
                  : "border-transparent hover:border-gray-200 hover:text-gray-500"
              }`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="py-4">
        {activeTabIndex === 0 ? (
          <Repository repos={repos} />
        ) : activeTabIndex === 1 ? (
          <UserList users={following} />
        ) : (
          <UserList users={follower} />
        )}
      </div>
    </div>
  );
};

export default DetailsTabs;
