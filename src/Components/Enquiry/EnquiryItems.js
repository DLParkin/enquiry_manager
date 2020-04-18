import React from "react";
import { Container, Header } from "semantic-ui-react";
import EnquiryList from "./EnquiryList";

const EnquiryItems = () => {
  return (
    <Container className="enquiry-items">
      <Header as="h1">Very unexciting enquiry manager</Header>
      <p>
        This will just help keep track of what is going on in the world of
        enquiries
      </p>
      <EnquiryList />
    </Container>
  );
};

export default EnquiryItems;
