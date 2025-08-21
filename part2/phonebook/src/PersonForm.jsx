const PersonForm = ({setNewName, setNewNumber, newName, newNumber, addPerson}) => {
    
    const handlePersonChange = (event) => {
        console.log('Person Changed', event.target)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log('Number Changed', event.target)
        setNewNumber(event.target.value)
    }

    return (<>
            <form onSubmit={addPerson}>
                <div>
                    name: <input  name='person' value={newName} onChange={handlePersonChange}/>
                    </div>
                    <div>number: <input name='number' value={newNumber} onChange={handleNumberChange}/></div>
                    <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm