import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddMovie({ movies, setMovies }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const handleAdd = () => {
    setMovies([
      ...movies,
      { name, image, type, description, rate, date, id: Math.random() },
    ]);
  };
  return (
    <div>
      <Button onClick={handleOpen} style={{ backgroundColor: "black" }}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a Movie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>name:</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label>image:</label>
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
              <label>description:</label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <label>rating:</label>
              <input
                type="number"
                onChange={(e) => setRate(e.target.value)}
                value={rate}
              />
              <label>type:</label>
              <input
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={type}
              />
              <label>date:</label>
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <button onClick={handleAdd}> Add</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default AddMovie;
