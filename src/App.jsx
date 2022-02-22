import { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
	// Initial State
	const usersData = [
		{ id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
		{ id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
		{ id: uuidv4(), name: 'Ben', username: 'benisphere' },
	];

	// State de usuarios
	const [users, setUsers] = useState(usersData);

	// Agregar Usuarios
	const addUser = (user) => {
		user.id = uuidv4();
		setUsers([...users, user]);
	};

	// Eliminar usuarios
	const deleteUser = (id) => {
		// console.log(id)
		setUsers(users.filter((user) => user.id !== id));
	};

	// Editar Usuarios
	const [editing, setEditing] = useState(false);
	const [currentUser, setCurrentUser] = useState({
		id: null,
		name: '',
		username: '',
	});

	const editRow = (user) => {
		setEditing(true);
		setCurrentUser(user);
	};

	const updateUser = (id, updatedUser) => {
		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
		setEditing(false);
	};

	return (
		<div className='container'>
			<h1>CRUD App with Hooks</h1>
			<div className='flex-row'>
				<div className='flex-large'>
					{editing ? (
						<div>
							<h2>Edit user</h2>
							<EditUserForm currentUser={currentUser} updateUser={updateUser} />
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</div>
				<div className='flex-large'>
					<h2>View users</h2>
					<UserTable
						users={users}
						deleteUser={deleteUser}
						setEditing={setEditing}
						editRow={editRow}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
