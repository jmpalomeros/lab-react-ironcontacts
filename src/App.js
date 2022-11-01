
import './App.css';
import contactsArr from "./contacts.json"
import {useState} from "react"

function App() {
  const initialList = contactsArr.slice(0,5)
  const [contacts, setContacts] = useState(initialList)
  
  
  const addContact = () => {

    const randomContact = Math.floor(Math.random() * contactsArr.length)
    const newContactToAdd = contactsArr[randomContact]

    const copyArr = contacts.map((eachElem)=> eachElem)
    copyArr.push(newContactToAdd)
    setContacts(copyArr)
  }

  const nameOrder = () =>{

    const copyArr = contacts.map((eachElem) =>eachElem)

    copyArr.sort((elem1, elem2)=>{
      return elem1.name>elem2.name ? 1 : -1
    })

    setContacts(copyArr)

  }

  const popularityOrder = () =>{

    const copyArr = contacts.map((eachElem)=>eachElem)
    copyArr.sort((elem1, elem2)=>{
      return elem1.popularity>elem2.popularity ? -1 : 1
    })

    setContacts(copyArr)
    
  }

  const deleteContact = (contactId) =>{
    const filteredContact = contacts.filter((eachContact) =>{
      return eachContact.id === contactId ? false : true
    })

    setContacts(filteredContact)


  }




  return (
    <div className="App">
    <h2>IronContacts</h2>
      <button onClick={addContact}>Add random contact</button>
      <br />
      <button onClick={nameOrder}>Sort by Name</button>
      <br />
      <button onClick={popularityOrder}>Sort by Popularity</button>

      
      {contacts.map ((eachContact)=>{
        return (
          <table>
          <div key={eachContact.id}>
          <hr />
          <img src={eachContact.pictureUrl} alt="img" width="200px"/>
          <h5>Name: {eachContact.name}</h5>
          <h5>Popularity: {eachContact.popularity}</h5>
          <h5>Won Oscar:{eachContact.wonOscar === false ? "" : "🏆"}</h5>
          <h5>Won Emmy :{eachContact.wonEmmy=== false ? "" : "🏆"}</h5>
          <button onClick={()=>deleteContact(eachContact.id)}>Delete</button>
        </div>
        </table>
        )
      })}
           
      


    </div>
  );
}

export default App;
