import React, { Fragment } from "react";
import NavBar from "../NavBar";
import EnquiryItems from "../Enquiry/EnquiryItems";

function Home() {
  return (
    <Fragment>
      <NavBar />
      <EnquiryItems />
    </Fragment>
  );
}

export default Home;
