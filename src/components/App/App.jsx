import React from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../redux/store';

import s from './App.module.css';

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <SearchBox />
        <ContactList />
      </div>
    </PersistGate>
  );
};

export default App;
