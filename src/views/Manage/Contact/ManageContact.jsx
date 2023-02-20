import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchContact } from "../../../services/contactService";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "FullName",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "dateSent",
    headerName: "DateSent",
    width: 150,
  },
  {
    field: "action",
    headerName: "",
    width: 150,
  },
];

const ManageContact = () => {
  const [pageSize, setPageSize] = useState(5);

  const [dataModal, setDataModal] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (item) => {
    console.log("item Contact", item);
  };

  async function fetchAllContact() {
    let response = await fetchContact();
    console.log(response);
    setDataModal(response);
  }

  useEffect(() => {
    fetchAllContact();
  }, []);

  console.log("dataModal", dataModal);
  const rows = dataModal.map((item) => ({
    id: item.id,
    fullName: item.fullName,
    email: item.email,
    dateSent: item.dateSent,
    action: (
      <>
        <button onClick={() => handleEdit(item)}>Delete</button>
      </>
    ),
  }));

  return (
    <>
      <div style={{ height: "90vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          pagination
        />
      </div>
    </>
  );
};

export default ManageContact;
