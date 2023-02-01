const post = async (_, { postId }, { getPost }) => {
  try {
    const { data } = await getPost(postId);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const posts = async (_, { input }, { getPosts }) => {
  try {
    const apiFiltersInput = new URLSearchParams(input);
    const { data } = await getPosts(apiFiltersInput.toString());
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
