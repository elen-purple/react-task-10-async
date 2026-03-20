import { Component } from "react";
import { Section } from "./components/Section/Section";
import { Form } from "./components/Form/Form";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Title } from "./components/ContactsList/ContactsListStyled";

const App = () => {
  return (
    <>
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
