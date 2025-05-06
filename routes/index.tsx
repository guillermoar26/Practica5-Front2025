import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import PostList from "../islands/PostList.tsx";
import { ApiResponsePosts, Post } from "../types.ts";
import Axios from "axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Post[]>) => {
    try {
      const response = await Axios.get<ApiResponsePosts>(
        `https://back-p5-y0e1.onrender.com/api/posts/`,
      );
      const data = response.data;
      return data.success === true
        ? (ctx.render(data.data.posts))
        : (ctx.render([]));
    } catch (error) {
      return new Response("Error" + error);
    }
  },
};

const Page = (props: PageProps<Post[]>) => {
  const data = props.data;
  console.log(data);

  return (
    <div>
      <PostList data={data}/>
    </div>
  );
};

export default Page;
