import React, { Fragment, useState } from "react";
import { Comment, Form, TextArea, Button, Divider } from "semantic-ui-react";
import { addComments } from "../../_Storage/index";

export const AddCommentCard = ({
  enquiryDetails,
  setEnquiryList,
  setToast,
  setType,
  setTitle,
  setDescription,
  setTimeout,
  setDisableAddComment,
  disableAddComment
}) => {
  // ride it dirty like
  const date = Date.now();
  const getDateTime = Date(Date.now()).split("GMT");
  const dateTime = getDateTime[0];
  const [comment, setComment] = useState("");

  const addComment = () => {
    const newComment = {
      id: date,
      date: dateTime,
      comment: comment
    };
    if (comment === "") {
      setType("warning");
      setTitle("Error Adding Comment");
      setDescription(`Failed to add Comment, did you write anything?`);
      setTimeout(2000);
      setDisableAddComment(true);
      setToast(true);
    } else {
      setType("success");
      setTitle("Added Comment");
      setDescription(
        `Successfully added ${comment} to ${enquiryDetails.enquiryNum}`
      );
      addComments(enquiryDetails.enquiryNum, newComment, setEnquiryList);
      setTimeout(1000);
      setDisableAddComment(true);
      setToast(true);
    }
    setComment("");
  };

  return (
    <Fragment>
      <Comment>
        <Comment.Content>
          <Comment.Metadata>
            <h4>Date/ Time : {dateTime}</h4>
          </Comment.Metadata>
          <Divider />
          <Comment.Text>
            <h4 style={{ marginBottom: "10px" }}>Comment</h4>
          </Comment.Text>
          <Comment.Text>
            <Form>
              <TextArea
                placeholder="Notes"
                name="comment"
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <Button
                disabled={disableAddComment}
                style={{ marginTop: "10px" }}
                color="green"
                content="Add Comment"
                onClick={addComment}
              />
            </Form>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    </Fragment>
  );
};
