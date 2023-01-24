const post = () => {
  return {
    id: '1',
    title: 'Test title post 1'
  }
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Test title post 1'
    },
    {
      id: '2',
      title: 'Test title post 2'
    },
    {
      id: '3',
      title: 'Test title post 3'
    }
  ]
}

export const postResolvers = {
  Query: {
    posts,
    post
  }
}
