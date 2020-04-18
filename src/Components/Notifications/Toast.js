import React from "react";
import "semantic-ui-css/semantic.min.css";
import { SemanticToastContainer, toast } from "react-semantic-toasts";

export const Toast = ({
  setToast,
  type,
  title,
  description,
  timeout
}) => {

  setTimeout(
    () => {
      toast(
        {
          type: type,
          title: title,
          description: description
        },
        () => setToast(false)
      );
    },
    { timeout }
  );

  return <SemanticToastContainer />;
};
