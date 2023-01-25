const user = async (_, { userId }, { getUser }) => {
  try {
    const { data } = await getUser(userId);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const users = async (_,__, { getUsers }) => {
  try {
    const { data } = await getUsers();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const userResolvers = {
  Query: {
    user,
    users
  }
}
