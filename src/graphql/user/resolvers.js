const user = () => {
  return {
    id: '1',
    name: 'Fulano 1'
  }
};

const users = () => {
  return [
    {
      id: '1',
      name: 'Fulano 1'
    },
    {
      id: '2',
      name: 'Fulano 2'
    },
    {
      id: '3',
      name: 'Fulano 3'
    }
  ]
}

export const userResolvers = {
  Query: {
    user,
    users
  }
}
