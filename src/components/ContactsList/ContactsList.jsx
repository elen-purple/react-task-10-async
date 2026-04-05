import { ContactsItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactsListStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  return (
    <>
      <List
        onClick={(e) => {
          if (e.target.dataset.action === "delete") {
            dispatch(deleteContact(e.target.closest("li").id));
          }
        }}
      >
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </>
  );
};
