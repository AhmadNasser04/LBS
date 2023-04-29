import { getPosts } from "../../services";
import React, { useEffect, useState } from "react";
import { PostCard, WorkRequestForm, PostWidget } from "../../components";

function index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newCategories) => setPosts(newCategories));
  }, []);

  return (
    <div className={`pt-28 bg-black w-screen`}>
      <div className={`p-16 w-screen flex items-center justify-center`}>
        <h1 className={`text-3xl font-bold`}>
          We want your work to be our next display
        </h1>
      </div>
      <div
        className={`flex flex-col justify-center xl:flex-row w-screen space-y-5 xl:space-y-0`}
      >
        <div className={`lg:p-10 space-y-5`}>
          <div className={`bg-white space-y-5 rounded-lg shadow-xl p-10`}>
            <h1 className={`text-black font-bold text-xl`}>Latest Research</h1>
            <div className={`border-b border-gray-300`}></div>
            {posts
              .filter(
                (post) => post.node.category.slug === "publications-and-news"
              )
              .map((post) => (
                <div className={`space-y-5`}>
                  <PostCard post={post.node} />
                </div>
              ))}
          </div>
        </div>
        <div className={`lg:p-10 pb-10`}>
          <PostWidget />
          <WorkRequestForm />
        </div>
      </div>
    </div>
  );
}

export default index;
