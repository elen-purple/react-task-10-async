import { ContactsItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactsListStyled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { deleteTask } from "../../redux/contactsSlice";

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <List
        onClick={(e) => {
          if (e.target.dataset.action === "delete") {
            dispatch(deleteTask(e.target.closest("li").id));
          }
        }}
      >
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
    </>
  );
};
