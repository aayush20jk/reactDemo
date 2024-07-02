import react from 'react';
import Card from "./Card";
import record from "./record";

const datas = record;

function mapData(contact) {
  return (
    <Card 
      src = {null} 
      name = {contact.name} 
      email = {contact.email} 
      number = {contact.telephone}/>
  )
}

function App() {
  return (
    <div>
      {datas.map(mapData)} // {}
    </div>
  );
}

export default App;