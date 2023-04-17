import React from "react";
import moment from "moment";
import Link from "next/link";

function PostCard({ post }) {
  return (
    <div>
      <div className={`flex items-center space-x-2`}>
        <div>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="w-28 h-28 object-cover rounded-full"
          />
        </div>
        <div>
          <Link href={`/post/${post.slug}`}>
            <h1
              className={`hover:text-[#59114d] cursor-pointer transition-all text-xl`}
            >
              {post.title}
            </h1>
          </Link>
          <div>{post.excerpt}</div>
          <h1>{post.author.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
