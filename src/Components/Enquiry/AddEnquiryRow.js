import React, { useState, Fragment } from "react";
import { Table, Button, Icon, Input, Dropdown } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { addItem } from "../../_Storage/index";

export const AddEnquiryRow = ({ setEnquiryList }) => {
  const [num, setNum] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [due, setDue] = useState("");
  const [brief, setBrief] = useState("");

  const handleDateChange = (event, { name, value }) => {
    if (name === "enqDate") {
      setDate(value);
    } else if (name === "dueDate") {
      setDue(value);
    }
  };

  const addEnquiry = () => {
    const item = {
      enquiryNum: num,
      type: type,
      enqDate: date,
      enqDue: due,
      brief: brief,
      comments: []
    };

    if (
      num !== "" &&
      type !== "" &&
      date !== "" &&
      due !== "" &&
      brief !== ""
    ) {
      addItem(item, setEnquiryList);
      setNum("");
      setDate("");
      setDue("");
      setBrief("");
    }
  };

  const options = [
    { key: 1, text: "Short", value: 1 },
    { key: 2, text: "Damage", value: 2 },
    { key: 3, text: "Other", value: 3 }
  ];

  return (
    <Fragment>
      <Table.Row>
        <Table.Cell className="table-input-row">
          <Input
            name="enquiryNum"
            className="table-input"
            value={num}
            onChange={e => setNum(e.target.value)}
            icon="search"
            placeholder="Enquiry Number..."
          />
        </Table.Cell>
        <Table.Cell>
          <Dropdown
            search
            selection
            options={options}
            onChange={e => setType(e.target.textContent)}
            placeholder="Type..."
          />
        </Table.Cell>
        <Table.Cell>
          <DateInput
            animation="none"
            name="enqDate"
            placeholder="Enquiry Date"
            value={date}
            iconPosition="left"
            onChange={handleDateChange}
          />
        </Table.Cell>
        <Table.Cell>
          <DateInput
            animation="none"
            name="dueDate"
            placeholder="Due Date"
            value={due}
            iconPosition="left"
            onChange={handleDateChange}
          />
        </Table.Cell>
        <Table.Cell>
          <Input
            name="brief"
            value={brief}
            onChange={e => setBrief(e.target.value)}
            className="table-input-cell"
            placeholder="Quick note..."
          />
        </Table.Cell>
        <Table.Cell>
          <Button
            floated="left"
            align="center"
            icon
            labelPosition="left"
            color="green"
            size="small"
            onClick={addEnquiry}
          >
            <Icon name="add circle" />
            Adding
          </Button>
        </Table.Cell>
      </Table.Row>
    </Fragment>
  );
};
