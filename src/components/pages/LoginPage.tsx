import React from 'react';
import { Label, Input, Button, TitlleForm } from '../atoms/index'
import { Link } from 'react-router-dom';

// validación de codigo 
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Span from '../atoms/Span';
import logo from '../../assets/logo_olympus.png';


interface InterfaceLogin {
  email: string;
  password: string;
}

const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Dirección de correo electrónico no válida')
    .required('correo electronico es requerido'),
  password: Yup.string()
    .required('se requiere contraseña')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
    .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
    .matches(specialCharactersRegex, 'La contraseña debe contener al menos un carácter especial')
});

const LoginPage: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<InterfaceLogin>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<InterfaceLogin> = (data: InterfaceLogin) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-11 w-auto"
            src={logo}
            alt="Your Company"
          />
          <TitlleForm>Iniciar sesión en su cuenta</TitlleForm>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor='email'>Correo electrónico</Label>
              <div className="mt-2">
                <Input id='email' {...register("email")} placeholder='ejemplo@email.com' />
                {errors.email && <Span>{errors.email.message}</Span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <div className="text-sm">
                  <Link to="/recover" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    ¿Has olvidado tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Input id="password" type='password' {...register('password')} placeholder='************' />
                {errors.password && <Span>{errors.password.message}</Span>}
              </div>
            </div>
            <div>
              <Button type='submit'>Iniciar sesión</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No es un miembro?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Registro
            </Link>
          </p>

          <div className="mt-6 flex flex-col space-y-4">
            <p className="text-center text-sm text-gray-500">O continuar con</p>
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
                Google
              </button>
              <button
                type="button"
                className="flex justify-center items-center w-full sm:w-auto rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="https://www.svgrepo.com/show/132023/microsoft.svg"
                  alt="Microsoft Logo"
                />
                Microsoft
              </button>
              <button
                type="button"
                className="flex justify-center items-center w-full sm:w-auto rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="https://www.svgrepo.com/show/489934/facebook.svg"
                  alt="Facebook Logo"
                />
                Facebook
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
