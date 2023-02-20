import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchPost, createPost } from "../../../services/postService";
import ManagePostAdd from "./ManagePostAdd";
import "./ManagePost.scss";
import { fetchCategory } from "../../../services/categoryService";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  flexGrow: 1,
};

const columns = [
  {
    field: "stt",
    headerName: "STT",
    width: 90,
  },
  {
    field: "image",
    headerName: "",
    width: 150,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "author",
    headerName: "Author",
    width: 150,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
  },
];

const ManageCategory = () => {
  const [pageSize, setPageSize] = useState(5);

  const [dataModal, setDataModal] = useState([]);

  const [open, setOpen] = React.useState(false);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchAllPost();
    getCategory();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (item) => {};

  const rows = dataModal.map((item, index) => ({
    stt: index + 1,
    image: "image",
    title: "Title",
    author: "author.name",
    action: <button onClick={() => handleEdit(item)}>Click me</button>,
  }));

  async function fetchAllPost() {
    let response = await fetchPost();
    if (response) {
      setDataModal(dataModal);
    }
  }

  async function getCategory() {
    let res = await fetchCategory();
    setCategory(res);
  }

  return (
    <>
      <div style={{ height: "85vh", width: "100%" }}>
        <div className="create-btn" onClick={() => handleOpen()}>
          Create new Post
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </div>
      <ManagePostAdd
        styleModal={styleModal}
        handleClose={handleClose}
        open={open}
        category={category}
      />
    </>
  );
};

export default ManagePost;
