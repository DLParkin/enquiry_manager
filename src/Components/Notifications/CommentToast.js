import React from "react";
import "semantic-ui-css/semantic.min.css";
import { SemanticToastContainer, toast } from "react-semantic-toasts";

export const CommentToast = ({
  setToast,
  type,
  title,
  description,
  timeout,
  setDisableAddComment
}) => {

  setTimeout(
    () => {
      toast(
        {
          type: type,
          title: title,
          description: description
        },
        () => setDisableAddComment(false),
        () => setToast(false)
      );
    },
    { timeout }
  );

  return <SemanticToastContainer />;
};