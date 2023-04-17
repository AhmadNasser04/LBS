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
            className="w-24 h-24 object-cover rounded-full"
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

          <h1>{post.author.name}</h1>
          <div className={`flex space-x-2 items-center`}>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-[#59114d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
