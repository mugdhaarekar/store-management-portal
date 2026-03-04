import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    MenuItem,
    Tooltip,
  } from "@mui/material";
  import { useState } from "react";
import { useNavigate } from "react-router-dom";
  
  export default function AddProduct() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
      name: "",
      category: "",
      description: "",
      tag: "",
      price: "",
      discount: "",
      discountCategory: "",
    });
  
    const handleChange = (field, value) => {
      setForm({ ...form, [field]: value });
    };
  
    const handleDiscard = () => {
      setForm({
        name: "",
        category: "",
        description: "",
        tag: "",
        price: "",
        discount: "",
        discountCategory: "",
      });
    };
  
    const handleSave = () => {
      const existingProducts =
        JSON.parse(localStorage.getItem("products")) || [];
    
      const newProduct = {
        id: Date.now(),
        name: form.name,
        category: form.category,
        description: form.description,
        tag: form.tag,
        price: form.price,
        discount: form.discount,
        discountCategory: form.discountCategory,
        views: "0",
        revenue: "$0",
      };
    
      const updatedProducts = [...existingProducts, newProduct];
    
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    
      navigate("/products");
    };
    const isFormValid =
    form.name.trim() !== "" &&
    form.category.trim() !== "" &&
    form.price.trim() !== "";

    return (
      <Box className="p-8 space-y-6">
        
        {/* Header */}
        <Paper className="flex justify-between items-center p-6 shadow-sm" style={{borderRadius:"1rem"}}>
          <Typography variant="h5" fontWeight={600}>
            ADD PRODUCT
          </Typography>
  
          <Box className="flex gap-3">
            <Button
              variant="outlined"
              color="error"
              className="normal-case"
              onClick={handleDiscard}
            >
              Discard Change
            </Button>
  
            <Tooltip
              title={!isFormValid ? "Fill all required fields: Name, Category, Price" : ""}
              arrow
            >
              <span>
                <Button
                  variant="contained"
                  className="normal-case rounded-md"
                  sx={{
                    backgroundColor: "#4f46e5",
                    "&:hover": { backgroundColor: "#4338ca" },
                  }}
                  onClick={handleSave}
                  disabled={!isFormValid}
                >
                  Save
                </Button>
              </span>
            </Tooltip>
          </Box>
        </Paper>
  
        {/* Main Grid */}
        <Box className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT SECTION */}
          <Box className="lg:col-span-2 space-y-6">
            
            {/* General Info */}
            <Paper className="p-6 rounded-2xl shadow-sm space-y-5" style={{borderRadius:"1rem"}}>
              <Typography fontWeight={600}>
                General Information
              </Typography>
  
              <TextField
                fullWidth
                label="Product Name"
                value={form.name}
                required
                onChange={(e) => handleChange("name", e.target.value)}
                helperText={!form.name ? "Product Name is required" : ""}
              />
  
              <TextField
                fullWidth
                select
                required
                label="Product Category"
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                helperText={!form.category ? "Product Category is required" : ""}
              >
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="fashion">Fashion</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
              </TextField>
  
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
  
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Tag Keyword"
                value={form.tag}
                onChange={(e) => handleChange("tag", e.target.value)}
              />
            </Paper>
  
            {/* Pricing */}
            <Paper className="p-6 rounded-2xl shadow-sm space-y-5" style={{borderRadius:"1rem"}}>
              <Typography fontWeight={600}>
                Pricing
              </Typography>
  
              <TextField
                fullWidth
                label="Price"
                required
                value={form.price}
                onChange={(e) => handleChange("price", e.target.value)}
                helperText={!form.price ? "Price is required" : ""}
              />
  
              <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  label="Discount"
                  value={form.discount}
                  onChange={(e) => handleChange("discount", e.target.value)}
                />
  
                <TextField
                  select
                  label="Discount Category"
                  value={form.discountCategory}
                  onChange={(e) =>
                    handleChange("discountCategory", e.target.value)
                  }
                >
                  <MenuItem value="seasonal">Seasonal</MenuItem>
                  <MenuItem value="festival">Festival</MenuItem>
                </TextField>
              </Box>
            </Paper>
          </Box>
  
          {/* RIGHT SECTION */}
          <Box className="space-y-6">
            
            {/* Preview Product */}
            <Paper className="p-6 rounded-2xl shadow-sm space-y-4" style={{borderRadius:"1rem"}}>
              <Typography fontWeight={600}>
                Preview Product
              </Typography>
  
              <Box className="border-2 border-dashed border-slate-300 rounded-xl h-48 flex items-center justify-center text-slate-400">
                Drag and drop here
              </Box>
            </Paper>
  
            {/* Thumbnail */}
            <Paper className="p-6 rounded-2xl shadow-sm space-y-4" style={{borderRadius:"1rem"}}>
              <Typography fontWeight={600}>
                Thumbnail Product
              </Typography>
  
              <Box className="border-2 border-dashed border-slate-300 rounded-xl h-48 flex items-center justify-center text-slate-400">
                Drag and drop here
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    );
  }