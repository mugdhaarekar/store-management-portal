import { useEffect, useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import {
  DataGrid,
  GridRowModes,
} from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";

import {
  getProducts,
  updateProduct,
  deleteProduct,
} from "../mockData/productStore";


export default function Product() {
  const [products, setProducts] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [isDuplicateName, setIsDuplicateName] = useState(false);
  
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;

  const updated = deleteProduct(id);
    setProducts(updated);
  };

  const handleEditClick = (id) => {
    const isAnyRowEditing = Object.values(rowModesModel).some(
      (row) => row.mode === GridRowModes.Edit
    );
  
    if (isAnyRowEditing) return; // block editing another row
  
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  const handleSaveClick = (id) => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };
  
  const handleCancelClick = (id) => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = (updatedRow) => {
    const trimmedName = updatedRow.name?.trim().toLowerCase();
  
    const isDuplicate = products.some(
      (product) =>
        product.id !== updatedRow.id &&
        product.name.trim().toLowerCase() === trimmedName
    );
  
    if (!trimmedName || isDuplicate) {
      return products.find((p) => p.id === updatedRow.id);
    }
  
    const updatedProducts = updateProduct(updatedRow.id, {
      name: updatedRow.name,
      price: updatedRow.price,
    });
  
    setProducts(updatedProducts);
  
    return updatedRow;
  };

  const columns = [
    {
      field: "name",
      headerName: "Product Name",
      flex: 2,
      editable: true,
      // validation
      preProcessEditCellProps: (params) => {
        const trimmed = params.props.value?.trim().toLowerCase();
      
        const duplicate = products.some((product) => {
          return (
            product.id !== params.id &&
            product.name.trim().toLowerCase() === trimmed
          );
        });
        // update state only if changed
        if (duplicate !== isDuplicateName) {
          setIsDuplicateName(duplicate);
        }
      
        return {
          ...params.props,
          error: duplicate,
          errorMessage: duplicate ? "Product Name must be unique": ""
        };
      },
      renderEditCell: (params) => (
        <Tooltip title={params.error ? params.errorMessage : ""} arrow>
          <input
            style={{
              width: "100%",
              border: params.error ? "1px solid red" : "1px solid #ccc",
              padding: "6px",
              borderRadius: "4px",
            }}
            value={params.value || ""}
            onChange={(e) =>
              params.api.setEditCellValue({
                id: params.id,
                field: params.field,
                value: e.target.value,
              })
            }
          />
        </Tooltip>
      ),

    },
    {
      field: "views",
      headerName: "Views",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      editable: true,
    },
    {
      field: "revenue",
      headerName: "Revenue",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Manage",
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        const isEditing =
          rowModesModel[params.id]?.mode === GridRowModes.Edit;
          // const isAnotherRowEditing = Object.values(rowModesModel).some(
          //   (row) => row.mode === GridRowModes.Edit && params.id !== params.id
          // );
        
        return isEditing ? (
          <>
            <Button
              size="small"
              onClick={() => handleSaveClick(params.id)}
              disabled={isDuplicateName}
            >
              SAVE
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => handleCancelClick(params.id)}
            >
              CANCEL
            </Button>
          </>
        ) : (
          <>
            <Button
              size="small"
              onClick={() => handleEditClick(params.id)}
              disabled={Object.values(rowModesModel).some(
                (row) => row.mode === GridRowModes.Edit
              )}
            >
              EDIT
            </Button>

            <Button
              size="small"
              color="error"
              onClick={() => handleDelete(params.id)}
            >
              DELETE
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Box className="p-8 space-y-6">
      <Typography variant="h4" fontWeight={600}>
        Products
      </Typography>

      <Paper className="p-6 rounded-2xl shadow-sm">
        <Box sx={{ height: 520, width: "100%" }}>
          <DataGrid
            rows={products}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={setRowModesModel}
            processRowUpdate={processRowUpdate}
            pageSizeOptions={[10, 20]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            onCellEditStop={(params, event) => {
              if (params.reason === "cellFocusOut") {
                event.defaultMuiPrevented = true;
              }
            }} 
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>
    </Box>
  );
}