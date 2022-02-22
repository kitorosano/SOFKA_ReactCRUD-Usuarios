import React from 'react';
import { useForm } from 'react-hook-form';

function AddUserForm({ addUser }) {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);

    // agregar usuario
		addUser(data);

    // limpiar campos
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>Name</label>
			<input type='text' {...register('name', { required: true })} />
			{errors?.name?.type == 'required' && <span>Campo requerido</span>}

			<label>Userame</label>
			<input type='text' {...register('username', { required: true })} />
			{errors?.username?.type == 'required' && <span>Campo requerido</span>}

			<button type='submit'>Add new user</button>
		</form>
	);
}

export default AddUserForm;
