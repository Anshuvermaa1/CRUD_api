import { useUsers, useCreateUser, useUpdateUser, useDeleteUser } from '../hooks/useUsers';
import { UserForm } from '../components/UserForm';
import { UserTable } from '../components/UserTable';
import { notifySuccess, notifyError } from '../utils/toasts';
import { UserInput } from '../schemas/userSchema';

export const Home = () => {
  const { data, refetch } = useUsers();
  const [createUser] = useCreateUser();
  const [updateUser] = useUpdateUser();
  const [deleteUser] = useDeleteUser();

  const handleCreate = async (formData: UserInput) => {
    try {
      await createUser({ variables: formData });
      refetch();
      notifySuccess('User created');
    } catch (e) {
      notifyError('Failed to create user');
    }
  };

  const handleUpdate = async (id: number, formData: UserInput) => {
    try {
      await updateUser({ variables: { id, ...formData } });
      refetch();
      notifySuccess('User updated');
    } catch {
      notifyError('Failed to update user');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser({ variables: { id } });
      refetch();
      notifySuccess('User deleted');
    } catch {
      notifyError('Failed to delete user');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>User Management</h1>
      <div style={{ marginBottom: '2rem' }}>
        <UserForm onSubmit={handleCreate} />
      </div>
      <UserTable
        users={data?.users || []}
        onEdit={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};