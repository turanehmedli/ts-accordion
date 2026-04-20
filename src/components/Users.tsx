import { useUsers } from "../hooks/useUsers";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import { useCreateUser } from "../hooks/useCreateUser";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { useUpdateUser } from "../hooks/useUpdateUser";

const Users = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useUsers(page);
  const { mutate, isPending } = useCreateUser();
  const { mutate: deleteMutate, isPending: isDeletePending } = useDeleteUser();
  const { mutate: updateMutate, isPending: isUpdatePending } = useUpdateUser();

  const totalPages = Math.ceil((data?.total || 0) / (data?.limit || 10));

  const handleNext = () => {
    if (page < totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["users", page + 1],
        queryFn: () => fetchUsers(page + 1),
      });
    }
    setPage((p) => p + 1);
  };

  const handlePrevious = () => {
    if (page > 1) {
      queryClient.prefetchQuery({
        queryKey: ["users", page - 1],
        queryFn: () => fetchUsers(page - 1),
      });
    }
    setPage((p) => p - 1);
  };

  const handleDeleteUser = (id: number) => {
    deleteMutate(id);
  };

  const handleUpdateUser = (id: number) => {
    updateMutate({
      id,
      user: {
        firstName: "Updated",
        lastName: "User",
        email: "updated@example.com",
      }, 
    });
  };

  const handleAddUser = () => {
    mutate({
      firstName: "Turan",
      lastName: "Ehmedli",
      email: "test12@gmail.com",
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold">Users</h1>

      <button
        className="mt-5 px-3 py-1 border border-zinc-300"
        disabled={isPending}
        onClick={handleAddUser}
      >
        {isPending ? "Adding..." : "Add User"}
      </button>

      <div className="flex flex-col gap-3 mt-5 ">
        {data?.users.map((user, index) => (
          <div
            key={index}
            className="p-3 border flex justify-between border-zinc-300"
          >
            <p>
              {user.firstName} {user.lastName} - {user.email}{" "}
            </p>

            <div className="flex gap-5">
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-lg"
                onClick={() => handleDeleteUser(user.id)}
              >
                {isDeletePending ? "Deleting..." : "Delete"}
              </button>

              <button
                className="px-3 py-1 bg-blue-500 text-white rounded-lg"
                onClick={() => handleUpdateUser(user.id)}
              >
                {isUpdatePending ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-5 items-center mt-7">
        <button
          disabled={page === 1}
          onClick={handlePrevious}
          className="p-3 px-3 border rounded-xl"
        >
          {"<"} Previous
        </button>
        <p>
          {page} / {totalPages}
        </p>
        <button
          disabled={page === totalPages}
          onClick={handleNext}
          className="p-3 px-3 border rounded-xl"
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default Users;
