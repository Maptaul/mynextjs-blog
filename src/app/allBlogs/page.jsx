import Link from "next/link";

const AllBlogsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-gray-100 shadow-md p-6 rounded-lg hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-700 mb-6">{post.body.slice(0, 100)}...</p>
            <Link href={`/blog/${post.id}`}>
              <button className="btn btn-primary px-4 py-2 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
