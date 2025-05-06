import { Post } from "../types.ts";

const DisplayPost = (post: Post) => {
  return (
    <div>
      {post._id !== undefined
        ? (
          <div>
            <h1>{post.title}</h1>
            <img src={post.cover} alt="cover" />
            <p>
              <strong>Author:</strong>
              {post.author}
            </p>
            <p>
              <strong>Content:</strong>
              {post.content}
            </p>
            <p>
              <strong>Likes:</strong>
              {post.likes} ❤︎
            </p>
            <strong>Comments:</strong>
            {post.comments?.length != 0
              ? (post.comments?.map((comment) => {
                return (
                  <li>
                    <div>
                      <h2>{comment.author}</h2>
                      <p>{comment.content}</p>
                      <p>{comment.createdAt}</p>
                    </div>
                  </li>
                );
              }))
              : <p>No comments available</p>}
          </div>
        )
        : <p>Post not found</p>}
    </div>
  );
};

export default DisplayPost;
