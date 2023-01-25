const post = async (_, { postId }, { getPost }) => {
  try {
    const { data } = await getPost(postId);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const posts = async (_, __, { getPosts }) => {
  try {
    const { data } = await getPosts();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const postResolvers = {
  Query: {
    posts,
    post
  }
}
