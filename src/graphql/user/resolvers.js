const user = async (_, { userId }, { getUser }) => {
  try {
    const { data } = await getUser(userId);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const users = async (_,{ input }, { getUsers }) => {
  try {
    const apiFiltersInput = new URLSearchParams(input);
    const { data } = await getUsers(apiFiltersInput.toString());
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
