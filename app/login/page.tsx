'use client';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const { status } = useSession();
  if (status === 'authenticated') redirect('/');

  const { register, handleSubmit, formState } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) =>
    signIn('credentials', {
      username,
      password,
      callbackUrl: '/',
    });

  return (
    <div className='bg-slate-100 border border-gray-400 rounded-sm mt-28 md:mt-40 lg:mt-52 sahdow-md w-[90%] md:w-1/2 lg:w-1/3 mx-auto p-2'>
      <form
        id='login-form'
        className='[&>*]:mb-4 md:[&>*]:mb-6 lg:[&>*]:mb-8 flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='text-center mb-4 md:mb-6 lg:mb-8 mt-2'>
          <h1 className='font-light text-2xl md:text-3xl'>Login</h1>
        </div>
        <div className='flex flex-col px-1 md:px-8 lg:px-12'>
          <label htmlFor='username' className='text-sm md:text-base mb-2'>
            Username:
          </label>
          <input
            type='text'
            placeholder='John Doe'
            className='placeholder:text-sm md:placeholder:text-abse py-1 px-4'
            {...register('username', { required: true })}
          />
        </div>
        <div className='flex flex-col px-1 md:px-8 lg:px-12'>
          <label htmlFor='username' className='text-sm md:text-base mb-2'>
            Password:
          </label>
          <input
            type='password'
            placeholder='********'
            className='placeholder:text-sm md:placeholder:text-abse py-1 px-4'
            {...register('password', { required: true })}
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            form='login-form'
            className='bg-blue-500 text-white rounded-sm hover:bg-blue-400 px-4 py-1 disabled:cursor-not-allowed disabled:bg-gray-400'
            disabled={!formState.isValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
