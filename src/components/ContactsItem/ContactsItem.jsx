import { Button, Item, Num, Title } from "./ContactsItemStyled";

export const ContactsItem = ({ id, name, number }) => {
  return (
    <Item id={id}>
      <div>
        <Title>{name}</Title>
        <Num>{number}</Num>
      </div>
      <Button data-action="delete" type="button">
        Delete
      </Button>
    </Item>
  );
};
