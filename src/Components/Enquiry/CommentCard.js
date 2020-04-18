import React, { Fragment } from "react";
import { Comment, Divider } from "semantic-ui-react";

export const CommentCard = ({ comment }) => {
  return (
    <Fragment>
      <Comment>
        <Comment.Content>
          <Comment.Metadata>
            <h5>Comment Added {comment.date}</h5>
          </Comment.Metadata>
          <Divider />
          <Comment.Text className="comment-details">
            {comment.comment}
          </Comment.Text>
        </Comment.Content>
      </Comment>
    </Fragment>
  );
};
