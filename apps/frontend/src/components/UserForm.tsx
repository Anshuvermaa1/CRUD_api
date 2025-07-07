import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, UserInput } from '../schemas/userSchema';

type Props = {
  onSubmit: (data: UserInput) => void;
  defaultValues?: Partial<UserInput>;
};

export const UserForm = ({ onSubmit, defaultValues }: Props) => {
  const { register, handleSubmit } = useForm<UserInput>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input {...register('email')} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};
