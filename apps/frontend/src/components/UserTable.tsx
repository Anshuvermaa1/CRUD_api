// src/components/UserTable.tsx

import { useState } from 'react';
import { UserType } from '../graphql/generated';
import { UserForm } from './UserForm';

type Props = {
  users: UserType[];
  onEdit: (id: number, data: { username: string; email: string }) => void;
  onDelete: (id: number) => void;
};

export const UserTable = ({ users, onEdit, onDelete }: Props) => {
  const [editUserId, setEditUserId] = useState<number | null>(null);

  const handleEditSubmit = (data: { username: string; email: string }) => {
    if (editUserId !== null) {
      onEdit(editUserId, data);
      setEditUserId(null);
    }
  };

  if(users.length === 0) return null

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #ddd' }}>
          <th style={{ padding: '0.5rem' }}>Username</th>
          <th style={{ padding: '0.5rem' }}>Email</th>
          <th style={{ padding: '0.5rem' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
            {editUserId === parseInt(user.id) ? (
              <td colSpan={4} style={{ padding: '1rem' }}>
                <UserForm
                  defaultValues={{ username: user.username, email: user.email }}
                  onSubmit={handleEditSubmit}
                />
              </td>
            ) : (
              <>
                <td style={{ padding: '0.5rem' }}>{user.username}</td>
                <td style={{ padding: '0.5rem' }}>{user.email}</td>
                <td style={{ padding: '0.5rem' }}>
                  <button
                    onClick={() => setEditUserId(parseInt(user.id))}
                    style={{
                      marginRight: '0.5rem',
                      backgroundColor: '#007bff',
                      color: 'white',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '4px',
                      border: 'none',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(parseInt(user.id))}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '4px',
                      border: 'none',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
