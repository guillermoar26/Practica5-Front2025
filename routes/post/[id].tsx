import { FreshContext, Handlers } from "$fresh/server.ts";
import DisplayPost from "../../components/Post.tsx";
import { ApiResponsePost, Post } from "../../types.ts";
import Axios from "axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Post>) => {
    try {
      const { id } = ctx.params;

      const response = await Axios.get<ApiResponsePost>(
        `https://back-p5-y0e1.onrender.com/api/posts/${id}`,
      );
      const post = response.data;
      return (post.success === true ? (ctx.render(post.data)) : (ctx.render()));
    } catch (error) {
      console.log(error);
      return new Response("Erorr: " + error);
    }
  },
};

const Page = (props: { data: Post }) => <DisplayPost {...props.data}/>

export default Page;
