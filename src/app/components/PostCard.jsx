"use client";

const PostCard = ({ id, title, body }) => {
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body p-6 text-justify">
          <h2 className="card-title"> Id: {id}</h2>
          <p>
            <strong>Title:</strong> {title}
          </p>
          <p>
            {" "}
            <strong>Description:</strong> {body}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
