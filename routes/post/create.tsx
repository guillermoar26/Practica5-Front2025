import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import { ApiResponsePost } from "../../types.ts";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, string>) => {
    try {
      
      const response = await Axios.get<ApiResponsePost>(
        `https://back-p5-y0e1.onrender.com/api/posts/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = response.data;
      return data.success === true
        ? ctx.render(
          "Usuario con ID " + data.data._id + " creado correctamente",
        )
        : ctx.render("No ha sido posible crear el usuario");
    } catch (error) {
      console.log(error);
      return new Response("Error" + error);
    }
  },
};

const Page = (props: PageProps<string>) => {
  const data = props.data;
  return (
    <div>
      <h1>Crear Post</h1>
      <p>{data}</p>
    </div>
  );
};

export default Page;
