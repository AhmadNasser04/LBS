import React from "react";
import moment from "moment";
import Link from "next/link";

function PostCard({ post }) {
  console.log(post);
  return (
    <div>
      <div>
        <Link href={post.link} target={`_blank`}>
          <h1
            className={`text-[#0071bc] cursor-pointer hover:text-[#205493] text-xl`}
          >
            {post.title}
          </h1>
        </Link>
        <p>{post.excerpt}</p>
        <p>{post.author.name}</p>
      </div>
    </div>
  );
}

export default PostCard;
