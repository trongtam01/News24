import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchPost, createPost } from "../../../services/postService";
import ManagePostAdd from "./ManagePostAdd";
import "./ManagePost.scss";
import { fetchCategory } from "../../../services/categoryService";
import axios from "axios";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
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
    width: 150,
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
  },
  {
    field: "content",
    headerName: "Content",
    width: 300,
  },
  {
    field: "published",
    headerName: "Published",
    width: 100,
  },
];

const ManagePost = () => {
  const [pageSize, setPageSize] = useState(5);

  const [dataModal, setDataModal] = useState([]);

  const [open, setOpen] = React.useState(false);

  const [category, setCategory] = useState([]);

  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshPost();
    getCategory();
  }, []);

  const postAPI = (url = "http://localhost:5215/api/Post/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshPost() {
    postAPI()
      .fetchAll()
      .then((res) => setDataModal(res.data))
      .catch((err) => console.log(err));
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function getCategory() {
    let res = await fetchCategory();
    setCategory(res);
  }

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("id") == "0") {
      console.log(formData);
      postAPI()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshPost();
        })
        .catch((err) => console.log(err));
    } else {
      postAPI()
        .update(formData.get("id"), formData)
        .then((res) => {
          onSuccess();
          refreshPost();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div style={{ height: "85vh", width: "100%" }}>
        <div className="create-btn" onClick={() => handleOpen()}>
          Create new Post
        </div>
        <DataGrid
          rows={dataModal}
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
        addOrEdit={addOrEdit}
      />
    </>
  );
};

export default ManagePost;
