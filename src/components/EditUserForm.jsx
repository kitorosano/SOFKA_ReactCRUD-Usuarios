import React from 'react';
import { useForm } from 'react-hook-form';

function EditUserForm({ currentUser,updateUser }) {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: currentUser,
	});

  setValue('name', currentUser.name);
  setValue('username', currentUser.username);

	const onSubmit = (data) => {
		console.log(data);

    // modificar usuario
    updateUser(currentUser.id, data);

		// limpiar campos
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>Name</label>
			<input type='text' {...register('name', { required: true })} />
			{errors?.name?.type == 'required' && <span>Campo requerido</span>}

			<label>Username</label>
			<input type='text' {...register('username', { required: true })} />
			{errors?.username?.type == 'required' && <span>Campo requerido</span>}

			<button type='submit'>Edit user</button>
		</form>
	);
}

export default EditUserForm;
