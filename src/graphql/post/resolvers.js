const post = async (_, { postId }, { getPost }) => {
  try {
    const { data } = await getPost(postId);
    // Simulação de timeout
    if (Math.random() > 0.5) {
      return {
        statusCode: 500,
        message: "Error timeout",
        timeout: 123
      }
    }
    return data;
  } catch ({response}) {
    if (response.status) {
      return {
          statusCode: response.status,
          message: response.statusText,
          postId
      }
    }
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
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    }
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      return null;
    }
  }
}
