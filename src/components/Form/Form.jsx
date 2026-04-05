import img from "../../imgs/phone.png";
import {
  Div,
  Img,
  Title,
  Forma,
  Label,
  Input,
  Button,
  ImgWrap,
  Wrap,
} from "./FormStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import { addContact } from "../../redux/operations";

export const Form = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectContacts);
  return (
    <Div>
      <Forma
        onSubmit={(e) => {
          e.preventDefault();
          if (
            tasks.items.find(
              (item) => item.name === e.currentTarget.elements.name.value,
            )
          ) {
            alert(
              `${e.currentTarget.elements.name.value} is alredy in contacts`,
            );
            return;
          }
          dispatch(
            addContact({
              name: e.currentTarget.elements.name.value,
              number: e.currentTarget.elements.number.value,
            }),
          );
          e.currentTarget.reset();
        }}
      >
        <Title>Phonebook</Title>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['\- ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Anna"
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="^\+?\d{1,4}([.\s\-]?\(?\d{1,3}\)?)*([.\s\-]?\d{1,4}){1,3}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="0555417683"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
      <Wrap>
        <ImgWrap src={img} alt="img" />
        <Img src={img} alt="img" />
      </Wrap>
    </Div>
  );
};
