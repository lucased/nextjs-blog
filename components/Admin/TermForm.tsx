/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import Button from "../Elements/Button";

const Input = (props) => {
  return (
    <input
      {...props}
      sx={{
        border: (theme) => `1px solid ${theme.colors.secondary}`,
        backgroundColor: "transparent",
        color: "primary",
        padding: 1,
        maxWidth: "50%",
        font: "body",
        "&::placeholder": {
          color: "secondary",
          fontFamily: "body",
        },
      }}
    />
  );
};

const ButtonStatus = ({ status }) => {
  switch (status) {
    case "loading":
      return <span>Loading</span>;
    case "success":
      return <span sx={{ color: "green" }}>Success</span>;
    case "error":
      return <span sx={{ color: "red" }}>Error</span>;
    default:
      return <>Submit</>;
  }
};
const TermForm = ({
  onFormSubmit,
  status,
  initName = "",
  initDescription = "",
}) => {
  const [name, setName] = useState(initName);
  const [description, setDescription] = useState(initDescription);

  useEffect(() => {
    if (status === "success") {
      setName("");
      setDescription("");
    }
  }, [status]);

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        marginBottom: 2,
        border: (theme) => `1px solid ${theme.colors.secondary}`,
      }}
    >
      <Input
        value={name}
        type="text"
        name="name"
        placeholder="Enter a name"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        placeholder="Enter a description"
        sx={{
          marginTop: 2,
          border: (theme) => `1px solid ${theme.colors.secondary}`,
          backgroundColor: "transparent",
          color: "primary",
          padding: 1,
          width: "100%",
          height: 100,
          "&::placeholder": {
            color: "secondary",
            fontFamily: "body",
          },
        }}
      />
      <Button
        sx={{ marginTop: 2 }}
        onClick={(e) => onFormSubmit(e, { name, description })}
      >
        <ButtonStatus status={status} />
      </Button>
    </div>
  );
};

export default TermForm;
