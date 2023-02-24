import React, { useEffect, useState } from "react";
import {
  fetchCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
} from "../../../services/categoryService";
import MaterialTable from "material-table";
import { tableIcons } from "../../../setup/iconMat";
import { toast } from "react-toastify";

const ManageCategory = () => {
  const [dataModal, setDataModal] = useState([]);

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Title", field: "title" },
    { title: "Description", field: "description" },
  ];

  async function fetchAllCategory() {
    let response = await fetchCategory();
    setDataModal(response);
  }

  return (
    <>
      <div style={{ height: "90vh", width: "100%" }}>
        <MaterialTable
          title="Manage Category"
          data={dataModal}
          columns={columns}
          icons={tableIcons}
          editable={{
            onRowAdd: async (item) => {
              try {
                await createNewCategory(item);
                console.log("itemCate", item);
                toast.success("Create category success");
                fetchAllCategory();
              } catch (e) {
                toast.error(e);
              }
            },
            onRowUpdate: async (item) => {
              try {
                await updateCategory(item.id, item);
                toast.success("Update category success");
                fetchAllCategory();
              } catch (e) {
                toast.error(e);
              }
            },
            onRowDelete: async (item) => {
              try {
                await deleteCategory(item.id);
                toast.success("Delete category success");
                fetchAllCategory();
              } catch (e) {
                toast.error(e);
              }
            },
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
            sorting: true,
            exportButton: true,
          }}
        />
      </div>
    </>
  );
};

export default ManageCategory;
