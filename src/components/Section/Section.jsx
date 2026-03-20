import { Component } from "react";
import { Container, Sect, Title } from "./SectionStyled";

export class Section extends Component {
  render() {
    return (
      <Sect>
        <Container>{this.props.children}</Container>
      </Sect>
    );
  }
}
