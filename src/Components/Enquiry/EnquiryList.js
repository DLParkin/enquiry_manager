import React, { useState, useEffect, Fragment } from "react";
import { Table } from "semantic-ui-react";
import { setItem, getItem } from "../../_Storage/index";
import { TableHead } from "./TableHead";
import { CurrentEnquiryList } from "./CurrentEnquiryList";
import { AddEnquiryRow } from "./AddEnquiryRow";
import { Toast } from "../Notifications/Toast";

const EnquiryList = () => {
  const data = [
    {
      enquiryNum: "example123",
      type: "Damage",
      enqDate: "10-12-2019",
      enqDue: "11-12-2019",
      brief: "Some overview of what this is about",
      comments: [
        { id: "1", date: "11-10-2019", comment: "Just a little comment" }
      ]
    }
  ];
  const [enquiryList, setEnquiryList] = useState(JSON.parse(getItem("data")));
  const [toast, setToast] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeout, setTimeout] = useState();

  useEffect(() => {
    if (!getItem("data")) {
      setItem("data", data);
    }
  }, [data]);

  return (
    <Fragment>
      <Table compact="very" celled striped color={"blue"}>
        <TableHead />
        <Table.Body>
          <CurrentEnquiryList
            enquiryList={enquiryList}
            setEnquiryList={setEnquiryList}
            setToast={setToast}
            setType={setType}
            setTitle={setTitle}
            setDescription={setDescription}
            setTimeout={setTimeout}
          />
          <AddEnquiryRow
            setEnquiryList={setEnquiryList}
            enquiryList={enquiryList}
          />
        </Table.Body>
      </Table>
      <div style={{ height: "20px" }}>
        {toast && (
          <Toast
            setToast={setToast}
            type={type}
            title={title}
            description={description}
            timeout={timeout}
          />
        )}
      </div>
    </Fragment>
  );
};

export default EnquiryList;
