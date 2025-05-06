import { useSignal } from "@preact/signals";
import { Post } from "../types.ts";
import DisplayPost from "../components/Post.tsx";

const PostList = ({data}: {data: Post[]}) => {
  const view = useSignal<boolean>(true);

  return (
    <div>
      {view.value === true ? <h1>Lista</h1> : <h1>Cuadricula</h1>}
      <button type="button" onClick={() => (view.value = !view.value)}>
        Vista
      </button>
      <div>
      
      {data.map((post) => (
        <DisplayPost key={post._id} {...post} />
      ))}


      </div>
    </div>
  );
};

export default PostList;
