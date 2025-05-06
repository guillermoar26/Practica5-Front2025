export type Post = {
  _id?: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes?: string;
  comments?: Comment[];
  createdAt: string;
  updatedAt: string;
}

export type Comment = {
  _id?: string;
  author: string;
  content: string;
  createdAt: string;
}

export type ApiResponsePosts = {
  success: boolean;
  data: {
    posts: Post[];
  }
}

export type ApiResponsePost = {
  success: boolean;
  data: Post;
}