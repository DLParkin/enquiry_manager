import React, { Fragment } from "react";
import { Table, Button, Icon, Modal } from "semantic-ui-react";
import { removeItem } from "../../_Storage/index";
import { Link, Route, Switch } from "react-router-dom";
import { EnquiryPage } from "./EnquiryPage";

export const CurrentEnquiryList = ({
  enquiryList,
  setEnquiryList,
  setType,
  setTitle,
  setDescription,
  setTimeout,
  setToast
}) => {
  const removeEnquiry = index => {
    setType("warning");
    setTitle("Removing Enquiry");
    setDescription(`You have removed the enquiry`);
    setTimeout(3000);
    setToast(true);
    removeItem(index, enquiryList, setEnquiryList);
  };

  return (
    <Fragment>
      {enquiryList &&
        enquiryList.map((enq, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Modal
                size="large"
                trigger={
                  <Link
                    to={{
                      pathname: `/EnquiryPage/${enq.enquiryNum}`,
                      state: { enquiry: enq }
                    }}
                  >
                    {enq.enquiryNum}
                  </Link>
                }
                closeIcon
              >
                <Switch>
                  <Route
                    path={`/EnquiryPage/${enq.enquiryNum}`}
                    render={props => (
                      <EnquiryPage
                        {...props}
                        setEnquiryList={setEnquiryList}
                        enquiry={enq}
                      />
                    )}
                  />
                </Switch>
              </Modal>
            </Table.Cell>
            <Table.Cell>{enq.type}</Table.Cell>
            <Table.Cell>{enq.enqDate}</Table.Cell>
            <Table.Cell>{enq.enqDue}</Table.Cell>
            <Table.Cell>{enq.brief}</Table.Cell>
            <Table.Cell>
              <Button
                name={index}
                floated="left"
                align="center"
                icon
                labelPosition="left"
                color="red"
                size="small"
                onClick={e => removeEnquiry(e.target.name)}
              >
                <Icon name="remove circle" />
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
    </Fragment>
  );
};
