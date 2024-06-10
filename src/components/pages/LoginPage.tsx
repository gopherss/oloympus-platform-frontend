import React from 'react';
import { Label, Input, Button, TitlleForm } from '../atoms/index'
import { Link } from 'react-router-dom';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

interface InterfaceLogin {
  email: string;
  password: string;
}

const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(specialCharactersRegex, 'Password must contain at least one special character')
});

const LoginPage: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<InterfaceLogin>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<InterfaceLogin> = data => {
    console.log(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/428655/bitcoin-btc-cryptocurrency.svg"
            alt="Your Company"
          />
          <TitlleForm>Sign in to your account</TitlleForm>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor='email'>Email address</Label>
              <div className="mt-2">
                <Input id='email' {...register("email")}  placeholder='example@email.com' />
                {errors.email && <span className="block text-sm text-red-600">{errors.email.message}</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input id="password" type='password' {...register('password')} placeholder='************' />
                {errors.password && <span className="block text-sm text-red-600">{errors.password.message}</span>}
              </div>
            </div>
            <div>
              <Button type='submit'>Sign in</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>

          <div className="mt-6 flex flex-col space-y-4">
            <p className="text-center text-sm text-gray-500">Or continue with</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <button
                type="button"
                className="flex justify-center items-center w-full sm:w-auto rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="https://www.svgrepo.com/show/448227/google.svg"
                  alt="Google Logo"
                />
                Continue with Google
              </button>
              <button
                type="button"
                className="flex justify-center items-center w-full sm:w-auto rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="https://www.svgrepo.com/show/349359/facebook.svg"
                  alt="Facebook Logo"
                />
                Continue with Facebook
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
