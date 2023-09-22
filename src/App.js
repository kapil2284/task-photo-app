import PhotoWidget from './components/photowidget';
import { useState } from "react";
import './App.css';
import NewUserForm from './components/newuserform';

const  App = ()=> {
  const [currentComponent, setCurrentComponent] = useState('default');


  switch (currentComponent) {
  case 'photos':
  return <PhotoWidget />;
  case 'form':
    return <NewUserForm />
  default:
    return <div><h1>Task Photo Album</h1><div class="btn-group"><button onClick={() => setCurrentComponent('photos')}>Photos</button><button onClick={() => setCurrentComponent('form')}>User Form</button></div></div>;
  }
}

export default App;
