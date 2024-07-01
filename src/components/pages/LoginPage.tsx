import React, { useState } from 'react';
import { Label, Input, Button, TitlleForm, Span } from '../atoms/index'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// validación de código 
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import logo from '../../assets/logo_olympus.png';
import { InterfaceLogin, SPECIALCHARACTERSREGEX, SOCIALMEDIABUTTONS } from '../../types';

// Firebase Auth
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Dirección de correo electrónico no válida')
    .required('Correo electrónico es requerido'),
  password: Yup.string()
    .required('Se requiere contraseña')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
    .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
    .matches(SPECIALCHARACTERSREGEX, 'La contraseña debe contener al menos un carácter especial')
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [errorFirebase, setErrorFirebase] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<InterfaceLogin>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<InterfaceLogin> = async (data: InterfaceLogin) => {
    const { email, password } = data;
    console.log({ email, password });

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
      navigate('/profile');
    } catch (error: any) {

      const erroOne = error.code === 'auth/wrong-password' ? 'wrong-password' : '';
      const errorTwo = error.code === 'auth/user-not-found' ? 'user-not-found' : '';
      const errorFour = error.code === 'auth/too-many-requests' ? 'too-many-requests' : '';

      return setErrorFirebase(erroOne || errorTwo || errorFour);
    }
  };

  const handleLogin = async (provider: any) => {
    try {
      const result = await signInWithPopup(auth, provider);
      
      if (result) {
        const { displayName, email, phoneNumber, photoURL, emailVerified } = result.user;
        const inforUser = {
          name: displayName,
          email: email,
          phone: phoneNumber,
          photo: photoURL,
          verified: emailVerified,
        }

        const token = await result.user.getIdToken();

        localStorage.setItem('userToken', token);

        const tokenStorage = localStorage.getItem('userToken')

        const authenticatedUser = {
          ...inforUser,
          tokenStorage
        }

        console.log(authenticatedUser);
        navigate('/profile'); 
      }
    } catch (error: any) {
      console.error('Error during login: ', error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-48 h-48 object-contain animate-float"
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
                {<Span> {errorFirebase === 'user-not-found' ? 'Email Incorrecto': ''} </Span>}
                {<Span> {errorFirebase === 'too-many-requests' ? 'Demasiados intento consulte al administrador.': ''} </Span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <div className="text-sm">
                  <Link to="/recover" className="font-semibold text-blue-500 hover:text-indigo-500">
                    ¿Has olvidado tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Input id="password" type='password' {...register('password')} placeholder='************' />
                {errors.password && <Span>{errors.password.message}</Span>}
                {<Span> {errorFirebase === 'wrong-password' ? 'Contraseña Incorrecta': ''} </Span>}
              </div>
            </div>
            <div>
              <Button type='submit'>Iniciar sesión</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No es un miembro?{' '}
            <Link to="/register" className="font-semibold leading-6 text-blue-500 hover:text-indigo-500">
              Registro
            </Link>
          </p>

          {/* Buttons Login */}
          <div className="mt-6 flex flex-col space-y-4">
            <p className="text-center text-sm text-gray-500">O continuar con</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              {SOCIALMEDIABUTTONS.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleLogin(button.provider)}
                  className="flex justify-center items-center w-full sm:w-auto rounded-md bg-indigo-100 px-3 py-1.5 text-ellipsis font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mb-2 sm:mb-0"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src={button.src}
                    alt={button.alt}
                  />
                  {button.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
