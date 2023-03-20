import { PostCard, Categories, PostWidget } from "../../components";
import { getPosts } from "../../services";
import React, { useState, useEffect } from "react";

function index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newCategories) => setPosts(newCategories));
  }, []);

  console.log(posts);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts
            .filter(
              (post) => post.node.category.slug === "publications-and-news"
            )
            .map((post) => (
              <PostCard post={post.node} key={post.node.title} />
            ))}
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
