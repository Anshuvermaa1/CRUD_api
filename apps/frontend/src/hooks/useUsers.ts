import {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} from '../graphql/generated';

export const useUsers = () => {
  const { data, loading, error, refetch } = useGetUsersQuery();
  return { data, loading, error, refetch };
};

export const useCreateUser = () => useCreateUserMutation();
export const useUpdateUser = () => useUpdateUserMutation();
export const useDeleteUser = () => useDeleteUserMutation();
