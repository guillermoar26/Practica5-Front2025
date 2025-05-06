import { useEffect, useRef, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import Axios from "axios";
import { ApiResponsePosts, Post } from "../types.ts";
import DisplayPost from "../components/Post.tsx";

const SearchPost: FunctionalComponent = () => {
  const [id, setId] = useState<string>("");
  const [post, setPost] = useState<Post[] | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getPost = async () => {
    try {
      const response = await Axios.get<ApiResponsePosts>(
        `https://back-p5-y0e1.onrender.com/api/posts/?search=${id}`,
      );
      const data = response.data;
      
      if (data.success === true) {
        setPost(data.data.posts);
      } else {
        setPost(null);
      }
    } catch (error) {
      return new Response("Error" + error);
    }
  };

  useEffect(() => {
    if (timeout?.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(getPost, 3000);
  }, [id]);

  return (
    <div>
      <h1>Buscar Post</h1>
      <input
        type="text"
        placeholder="Introduce el id del post"
        value={id}
        onInput={(e) => {
          setId(e.currentTarget.value);
        }}
      />

      { post ? ( post.length > 0 ? (
        (post.map((p) => (
          <div key={p._id}>
            <DisplayPost key={p._id} {...p} />
          </div>
        )
        ))
        ) : (<p>No se han encontrado posts</p>)
      ) : (
        <p>Introduce un texto para buscar</p>
      )}
    </div>
  );
};

export default SearchPost;
