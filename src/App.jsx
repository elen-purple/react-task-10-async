import { Section } from "./components/Section/Section";
import { Form } from "./components/Form/Form";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Title } from "./components/ContactsList/ContactsListStyled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <GlobalStyle />
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Title>Contacts</Title>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default App;
