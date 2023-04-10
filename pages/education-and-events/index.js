import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { PostCard, Categories, PostWidget } from "../../components";
import { getPosts } from "../../services";
import React, { useState, useEffect } from "react";

function index() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newCategories) => setPosts(newCategories));
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {user
            ? posts
                .filter(
                  (post) => post.node.category.slug === "education-and-events"
                )
                .map((post) => (
                  <PostCard post={post.node} key={post.node.title} />
                ))
            : posts
                .filter(
                  (post) => post.node.category.slug === "education-and-events"
                )
                .slice(0, 2)
                .map((post) => (
                  <PostCard post={post.node} key={post.node.title} />
                ))}
          {!user && (
            <div className="flex flex-col space-y-3 shadow-lg rounded-lg p-10 items-center justify-center font-semibold text-3xl">
              <div>Sign in to see more posts</div>
              <button className="slideButton">
                <span>Join today</span>
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
