export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

//CRUD C-post r-get u-put d-delete

export const fetchUsers = async (
  page: number,
  limit = 10,
): Promise<UsersResponse> => {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
  );

  if (!res.ok) throw new Error("Failed to fetch users");

  return res.json();
};

export const createUser = async (user: Partial<User>): Promise<User> => {
  const res = await fetch(`https://dummyjson.com/users/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Failed to create user");

  return res.json();
};

//update user
type UpdateUserInput = {
  id: number;
  user: Partial<User>;
};

export const updateUser = async ({
  id,
  user,
}: UpdateUserInput): Promise<User> => {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Failed to update user");

  return res.json();
};

//delete user
export const deleteUser = async (id: number): Promise<void> => {
    const res = await fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete user");

    return;
};
