import React, { useState, useContext } from "react";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Button from "@mui/material/Button";
import DatePicker from "@mui/lab/DatePicker";
import HeaderCardForm from "../HeaderCard/HeaderCardForm";
import { ExpenseTrackerContext } from "../../Context/context";
import { v4 as uuidv4 } from "uuid";
import {
  incomeCategories,
  expenseCategories,
} from "../../Constants/categories";
import { Category } from "@material-ui/icons";
// import formatDate from "../../utils/formatDate";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date().toLocaleDateString(),
};
// console.log(new Date());
// console.log(new Date().getDate() + "-0" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear());

function Form() {
  // const [type, setType] = React.useState("");
  const [value, setValue] = React.useState(null);

  const [formData, setformData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  function createTransaction() {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setformData(initialState);
  }

  console.log(formData);

  function handleChangeType(event) {
    setformData({ ...formData, type: event.target.value });
  }

  function handleChangeCategory(event) {
    setformData({ ...formData, category: event.target.value });
  }

  function handleChangeAmount(event) {
    setformData({ ...formData, amount: event.target.value });
  }

  function handleChangeDate(event, newValue) {
    setformData({ ...formData, date: event.target.value });
    setValue(newValue);
  }

  return (
    <div className="left-panel">
      <div className="d-flex flex-column">
        <HeaderCardForm />
        <FormControl fullWidth sx={{ m: "0 0 15px 0" }}>
          <InputLabel id="label-type">Type</InputLabel>
          <Select
            labelId="label-type"
            id="id-type"
            value={formData.type}
            label="Type"
            onChange={handleChangeType}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="label-category">Category</InputLabel>
          <Select
            labelId="label-category"
            id="id-category"
            value={formData.category}
            label="Category"
            onChange={handleChangeCategory}
          >
            {selectedCategories.map((category) => (
              <MenuItem key={category.type} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          sx={{ m: "15px 0 15px 0" }}
          id="id-amount"
          label="Amount"
          value={formData.amount}
          onChange={handleChangeAmount}
          variant="outlined"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            fullWidth
            orientation="landscape"
            label="Date"
            value={formData.date}
            onChange={handleChangeDate}
            // value = {value}
            // onChange={(newValue) => {
            //   setValue(newValue);
            // }}
            inputFormat="dd/MM/yyyy"
            renderInput={(params) => <TextField {...params} />}
            style={{ width: "246px", height: "44px" }}
          />
        </LocalizationProvider>

        <Button
          sx={{ margin: "15px 0 0 0" }}
          variant="contained"
          fullWidth
          children="CREATE"
          onClick={createTransaction}
        />
      </div>
    </div>
  );
}

export default Form;
