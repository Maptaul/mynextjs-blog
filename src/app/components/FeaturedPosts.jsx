"use client";

import PostCard from "./PostCard";

const FeaturedPosts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.slice(0, 6).map((post) => (
        <div key={post.id} className="w-full">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedPosts;
