const Filter = ({newPersonToFind, setNewPersonToFind}) => {

    const handleSearchPersonChange = (event) => {
        console.log('Search Person Changed', event.target)
        setNewPersonToFind(event.target.value)
    }

    return (<>
        <div>
        filter shown with <input  name='find' value={newPersonToFind} onChange={handleSearchPersonChange}/>
        </div>
      </>)
}

export default Filter