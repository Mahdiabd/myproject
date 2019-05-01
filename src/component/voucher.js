import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import firebase from "firebase";

import UserTable from './UserTable'

const Reserv = () => {
	// Data
	const usersData = [
	
	]

	const initialFormState = { id: null, name: '', room: '', adulte:'', enfant:'',  }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, room: user.room, adulte: user.adulte, enfant: user.enfant, info: user.info, date: user.date, nuit: user.nuit, mail: user.mail, })
	}

	return (
		<div className="container">
			<h1>Réservation</h1>
			<div className="flex-row">
			
				<div className="flex-large">
					<br/>					<br/>
					<br/>
                    <div className="flex-large">
					<br/>					<br/>
					<br/>

                    
                    <center><h2 className="voucher">Voucher</h2></center>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
                    
                    
				</div>
			</div>
		</div>
	)
}

export default Reserv;