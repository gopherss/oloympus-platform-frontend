import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, Input, Label, TitlleForm } from '../atoms';
import Span from '../atoms/Span';
import { Link } from 'react-router-dom';

interface InterfaceRecover {
    email: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('dirección de correo electrónico no válida')
    .required('correo electronico es requerido'),
});

const RecoverPage: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<InterfaceRecover>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<InterfaceRecover> = (data: InterfaceRecover) => {
        console.log(data);
        // Aquí puedes agregar la lógica para enviar el correo de recuperación
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <TitlleForm>Recupera tu contraseña</TitlleForm>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ingrese su correo electrónico para recibir
                        instrucciones y restablecer su contraseña
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label htmlFor="email">Correo electrónico</Label>
                        <div className="mt-1">
                            <Input id="email" {...register("email")} placeholder="ejemplo@email.com" type="text" />
                            {errors.email && <Span>{errors.email.message}</Span>}
                        </div>
                    </div>
                    <div>
                        <Button type="submit">Enviar enlace de reinicio</Button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            to="/login"
                            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            <img src="https://www.svgrepo.com/show/418142/arrow-left-3.svg" alt="Back" className="w-4 h-4 mr-2" />
                            Atras
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecoverPage;
