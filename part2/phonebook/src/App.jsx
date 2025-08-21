import { useState } from 'react'
import Filter from './Filter.jsx'
import PersonForm from './PersonForm.jsx'
import Persons from './Persons.jsx'

const App = () => {
 const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPersonToFind, setNewPersonToFind] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('form clicked', event.target)

    if(persons.filter(person => person.name == newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }





  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newPersonToFind={newPersonToFind} setNewPersonToFind={setNewPersonToFind}></Filter>


      <h3>Add a new</h3>
      <PersonForm setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber} addPerson={addPerson}></PersonForm>


      <h3>Numbers</h3>
      <Persons persons={persons} newPersonToFind={newPersonToFind}></Persons>
    </div>
  )
}

export default App