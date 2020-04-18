import React, { Fragment, useState } from "react";
import { Container, Segment, Modal } from "semantic-ui-react";
import { CommentCard } from "./CommentCard";
import { AddCommentCard } from "./AddCommentCard";
import { CommentToast } from "../Notifications/CommentToast";

export const EnquiryPage = ({ setEnquiryList, enquiry }) => {
  const [toast, setToast] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeout, setTimeout] = useState();
  const [disableAddComment, setDisableAddComment] = useState(false);
  const enquiryDetails = enquiry;
  return (
    <Fragment>
      <div style={{ height: "20px" }}>
        {toast && disableAddComment && (
          <CommentToast
            setToast={setToast}
            type={type}
            title={title}
            description={description}
            timeout={timeout}
            setDisableAddComment={setDisableAddComment}
          />
        )}
      </div>
      {enquiry && (
        <Container className="enquiry-page">
          <Modal.Header>
            <h2 className="enquiry-page-segment-text">
              Enquiry Number: {enquiryDetails.enquiryNum}
            </h2>
            <p className="enquiry-page-segment-text">
              Enquiry Date: {enquiryDetails.enqDate} | Due Date:{" "}
              {enquiryDetails.enqDue}
            </p>
            <p className="enquiry-page-segment-text">
              Type of Enquiry: {enquiryDetails.type}
            </p>
            <h4 className="enquiry-page-segment-text">Brief Overview</h4>
            <p className="enquiry-page-segment-text">{enquiryDetails.brief}</p>
          </Modal.Header>
          <Segment className="enquiry-page-segment" raised>
            <Segment>
              <AddCommentCard
                enquiryDetails={enquiryDetails}
                setEnquiryList={setEnquiryList}
                setToast={setToast}
                setType={setType}
                setTitle={setTitle}
                setDescription={setDescription}
                setTimeout={setTimeout}
                setDisableAddComment={setDisableAddComment}
                disableAddComment={disableAddComment}
              />
            </Segment>
            {enquiryDetails.comments &&
              enquiryDetails.comments.map((comment, index) => (
                <Segment key={index}>
                  <CommentCard comment={comment} />
                </Segment>
              ))}
          </Segment>
        </Container>
      )}
    </Fragment>
  );
};
