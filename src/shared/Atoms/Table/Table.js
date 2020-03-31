import React from "react";
import { Head } from "./Head";
import { Container } from "./Container";
import { Body } from "./Body";
import { Row } from "./Row";
import { Cell } from "./Cell";
import { Footer } from "./Footer";

class Table extends React.Component {
  static Head = Head;
  static Body = Body;
  static Row = Row;
  static Cell = Cell;
  static Footer = Footer;

  render() {
    return <Container {...this.props} />;
  }
}

export default Table;
