import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter.jsx'
import PersonForm from './PersonForm.jsx'
import Persons from './Persons.jsx'

const App = () => {
 const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPersonToFind, setNewPersonToFind] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
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