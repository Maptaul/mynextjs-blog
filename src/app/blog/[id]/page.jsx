const DetailsPage = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl text-center font-bold mb-6">Post Details</h1>
      <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Title : {post.title}</h2>
        <p className="text-lg">
          <strong>Description :</strong> {post.body}
        </p>
      </div>
      <div className="text-center mt-6">
        <a href="/" className="border-2  rounded-md px-4 py-2 ">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default DetailsPage;
