import React, { Fragment } from "react";
import NavBar from "./Components/NavBar";
import EnquiryItems from "./Components/Enquiry/EnquiryItems";
import { Route, withRouter } from "react-router-dom";
import { EnquiryPage } from "./Components/Enquiry/EnquiryPage";
import { SettingsPage } from "./Components/Settings/SettingsPage"
function App() {
  return (
    <Fragment>
      <Route>
        <Route path="/EnquiryPage/:id" component={EnquiryPage} />
        <Route path="/Settings" component={SettingsPage} />
        <Route path="/" />
        <NavBar />
        <EnquiryItems />
      </Route>
    </Fragment>
  );
}

export default withRouter(App);
