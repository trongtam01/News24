import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { createPost } from "../../../services/postService";
import Button from "@mui/material/Button";

const defaultImageSrc = "/img/noimg.png";

const initialFieldValues = {
  title: "",
  description: "",
  content: "",
  categoryId: "",
  published: false,
  imageName: "",
  imageSrc: defaultImageSrc,
  imageFile: null,
};

const ManagePostAdd = (props) => {
  const { styleModal, handleClose, open, category } = props;

  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  const showChecked = (e) => {
    if (e.target.checked) {
      let checkk = e.target.checked;
      setValues({
        ...values,
        published: checkk,
      });
    } else {
      setValues({
        ...values,
        published: false,
      });
    }
  };

  const retsetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
    handleClose();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    await createPost(values);
    retsetForm();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...styleModal }}>
        <form method="post" onSubmit={(e) => handleFormSubmit(e)}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-title">
                  Title
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-title"
                  type="text"
                  label="Title"
                  name="title"
                  value={values.title}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={(e) => showChecked(e)} />}
                  label="Published"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-description">
                  Description
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-description"
                  type="text"
                  label="Description"
                  name="description"
                  value={values.description}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <TextField
                  id="outlined-select-cateogry"
                  select
                  label="Category"
                  name="categoryId"
                  value={values.categoryId}
                  onChange={(e) => handleInputChange(e)}
                  helperText="Please select your currency"
                >
                  {category.map((option, index) => (
                    <MenuItem key={index} value={option.id}>
                      {option.title}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <TextareaAutosize
                  aria-label="Content"
                  minRows={3}
                  placeholder="Content"
                  name="content"
                  style={{ width: "100%" }}
                  value={values.content}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => showPreview(e)}
                  id="image-uploader"
                />
                <br />
                <img src={values.imageSrc} className="img-created" />
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ManagePostAdd;
