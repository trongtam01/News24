import React, { useEffect, useState } from "react";
import { fetchContact, deleteContact } from "../../../services/contactService";
import MaterialTable from "material-table";
import { tableIcons } from "../../../setup/iconMat";

const ManageContact = () => {
  const [dataModal, setDataModal] = useState([]);

  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "fullName" },
    { title: "Email", field: "email" },
    { title: "Date Sent", field: "dateSent" },
  ];

  async function fetchAllContact() {
    let response = await fetchContact();
    console.log(response);
    setDataModal(response);
  }

  useEffect(() => {
    fetchAllContact();
  }, []);

  return (
    <>
      <div style={{ height: "90vh", width: "100%" }}>
        <MaterialTable
          title="Manage Contact"
          data={dataModal}
          columns={columns}
          icons={tableIcons}
          editable={{
            onRowDelete: async (item) => {
              console.log("item", item);
              await deleteContact(item.id);
              fetchAllContact();
            },
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
        />
      </div>
    </>
  );
};

export default ManageContact;
