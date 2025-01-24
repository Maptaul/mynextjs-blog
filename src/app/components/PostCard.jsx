"use client";

import Link from "next/link";

const PostCard = ({ id, title, body }) => {
  return (
    <>
      <div className="card card-compact bg-amber-50 rounded-md w-96 h-72 shadow-xl">
        <div className="card-body  p-6 text-justify">
          <p className="mb-5">
            <strong>Title:</strong> {title}
          </p>
          <p className="mb-5">
            {" "}
            <strong>Description:</strong> {body}
          </p>
          <div className="card-actions justify-end">
            <Link href={`/blog/${id}`}>
              <button className="btn border-2 border-amber-700 p-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
