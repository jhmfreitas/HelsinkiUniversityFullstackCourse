import { useState, useEffect } from 'react'
import Filter from './Filter.jsx'
import PersonForm from './PersonForm.jsx'
import Persons from './Persons.jsx'
import phonebookService from './services/phonebook'
import Notification from './Notification.jsx'
import './index.css'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
 const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPersonToFind, setNewPersonToFind] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        console.log("Promise fullfiled")
        console.log('Response retrieved: ',response)
        setPersons(response.data)
      })
  }, [])
  console.log('Rendered ', persons.length, ' persons')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('form clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber,
      id: (uuidv4()).toString()
    }

    const personFound = persons.filter(person => person.name == newName)

    if(personFound.length > 0) {
      if(confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
        phonebookService
          .update(personFound[0].id, personObject)
          .then(response => {
            setPersons(persons.map(person =>
              person.id !== personFound[0].id ? person : response.data
            ));
            setNewName('');
            setNewNumber('');
            console.log("Number replaced");
            setSuccessMessage(`Added ${newName}'s number`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
      }
      return
    }

    phonebookService
      .create(personObject)
      .then(response => {
        console.log(response.data)
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        setSuccessMessage(`Added ${newName}'s number`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      })

    
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id) => {
    event.preventDefault()
    console.log("Delete clicked")
    
    phonebookService
      .delete(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(() => {
        setErrorMessage(`Information of the person has already been removed from server`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} notificationType="success" />
      <Notification message={errorMessage} notificationType="error" />
      <Filter newPersonToFind={newPersonToFind} setNewPersonToFind={setNewPersonToFind}></Filter>


      <h3>Add a new</h3>
      <PersonForm setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber} addPerson={addPerson}></PersonForm>


      <h3>Numbers</h3>
      <Persons persons={persons} newPersonToFind={newPersonToFind} handleDelete={handleDelete}></Persons>
    </div>
  )
}

export default App