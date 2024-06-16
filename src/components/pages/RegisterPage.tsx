import React from 'react';
import { TitlleForm, Label, Input, Button } from '../atoms/index';
import { Link } from 'react-router-dom';


// validación de codigo 
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Span from '../atoms/Span';


interface InterfaceRegister {
    email: string;
    fullName: string;
    username: string;
    password: string;
}

const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Dirección de correo electrónico no válida')
        .required('correo electronico es requerido'),
    fullName: Yup.string()
        .min(5, 'Se requiere debe tener un minimo de 5 letras')
        .required('Se requiere nombre completo'),
    username: Yup.string()
        .min(3, 'Se requiere tener un minimo de 3 letras')
        .required('Se requiere nombre de usuario'),
        password: Yup.string()
        .required('se requiere contraseña')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
        .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
        .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
        .matches(specialCharactersRegex, 'La contraseña debe contener al menos un carácter especial')
});


const RegisterPage: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<InterfaceRegister>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<InterfaceRegister> = (data: InterfaceRegister) => {
        console.log(data);
    };


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <TitlleForm>Inscribirse en Olympus</TitlleForm>
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
                                Registrarte con Google
                            </button>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <img
                                    className="h-5 w-5 mr-2"
                                    src="https://www.svgrepo.com/show/132023/microsoft.svg"
                                    alt="Microsoft icon"
                                />
                                Registrarte con Microsoft
                            </button>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <img
                                    className="h-5 w-5 mr-2"
                                    src="https://www.svgrepo.com/show/489934/facebook.svg"
                                    alt="Microsoft icon"
                                />
                                Registrarte con Facebook
                            </button>
                        </div>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">O continuar con</span>
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Label htmlFor="email">Correo electrónico</Label>
                                <div className="mt-1">
                                    <Input id='email' {...register("email")} placeholder='ejemplo@email.com' type='email' />
                                    {errors.email && <Span>{errors.email.message}</Span>}
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="fullName">Nombre completo</Label>
                                <div className="mt-1">
                                    <Input id='fullName' {...register("fullName")} placeholder='nombre completo' type='text' />
                                    {errors.fullName && <Span>{errors.fullName.message}</Span>}
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="username">Nombre de usuario</Label>
                                <div className="mt-1">
                                    <Input id="username" {...register("username")} placeholder='usuario' type='text' />
                                    {errors.username && <Span>{errors.username.message}</Span>}
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="password">Contraseña</Label>
                                <div className="mt-1">
                                    <Input id="password" {...register("password")} placeholder='***********' type='password' />
                                    {errors.password && <Span>{errors.password.message}</Span>}
                                </div>
                            </div>

                            <div>
                                <Button type='submit'>Inscribirse</Button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                ¿Tienes una cuenta?{' '}
                                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Acceso
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
