import React from "react";
import moment from "moment";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div>
      <div>
        <h1
          className={`text-[#0071bc] cursor-pointer hover:text-[#205493] text-xl`}
        >
          {post.title}
        </h1>
        <p>{post.author.name}</p>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
}

export default PostCard;
