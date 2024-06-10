import React from 'react';
import { TitlleForm, Label, Input, Button } from '../atoms/index';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <TitlleForm>Sign up Olympus</TitlleForm>
                        <div className="mt-6 flex flex-col space-y-4">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <img
                                    className="h-5 w-5 mr-2"
                                    src="https://www.svgrepo.com/show/448227/google.svg"
                                    alt="Google icon"
                                />
                                Sign up with Google
                            </button>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <img
                                    className="h-5 w-5 mr-2"
                                    src="https://www.svgrepo.com/show/349359/facebook.svg"
                                    alt="Facebook icon"
                                />
                                Sign up with Facebook
                            </button>
                        </div>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or</span>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <div className="mt-1">
                                    <Input id="email" name="email" type="email" placeholder='example@email.com' />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="fullName">Full Name</Label>
                                <div className="mt-1">
                                    <Input id="fullName" name="fullName" type="text" placeholder='Full Name' />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="username">Username</Label>
                                <div className="mt-1">
                                    <Input id="username" name="username" type="text" placeholder='User Name' />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <div className="mt-1">
                                    <Input id="password" name="password" type="password" placeholder='***********' />
                                </div>
                            </div>

                            <div>
                                <Button type='submit'> Sign Up</Button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Have an account?{' '}
                                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
