import React from "react";

interface Props {
  onSubmit: () => void;
}

const SubmitButton: React.FC<Props> = ({ onSubmit }) => {
  return (
    <button onClick={onSubmit} style={{ padding: "10px 20px" }}>
      Send Data to Backend
    </button>
  );
};

export default SubmitButton;
