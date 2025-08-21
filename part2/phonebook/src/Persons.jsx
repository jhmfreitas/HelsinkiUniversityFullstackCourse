const Persons = ({persons, newPersonToFind}) => {
    return (<>
              {
        persons.filter((person) => (person.name.toLowerCase().includes(newPersonToFind.toLowerCase()))).map((person) => (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        ))
      }
    </>)
}

export default Persons