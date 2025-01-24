import Link from "next/link";
import FeaturedPosts from "./components/FeaturedPosts";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-4xl text-center font-bold mb-6"> Blog Posts</h1>
      <div className="">
        <FeaturedPosts posts={posts} />
      </div>
    </div>
  );
};
export default Home;
