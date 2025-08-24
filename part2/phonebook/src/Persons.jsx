const Persons = ({ persons, newPersonToFind, handleDelete }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newPersonToFind.toLowerCase())
        )
        .map((person) => (
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </div>
        ))}
    </>
  )
}

export default Persons