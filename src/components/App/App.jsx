
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./App.module.css"; 

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.appContainer}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.subtitle}>Contacts</h2>
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
