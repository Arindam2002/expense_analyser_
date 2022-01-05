import React from "react";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Button from "@mui/material/Button";
import DatePicker from "@mui/lab/DatePicker";

function Form() {
  const [type, setType] = React.useState("");
  const [value, setValue] = React.useState(null);

  function handleChange(event) {
    setType(event.target.value);
  }

  return (
    <div className="left-panel">
      <div className="d-flex flex-column">
        <h1 className="">Total Balance $300</h1>
        <FormControl fullWidth sx={{ m: "0 0 15px 0" }}>
          <InputLabel id="label-type">Type</InputLabel>
          <Select
            labelId="label-type"
            id="id-type"
            // value={type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="label-category">Category</InputLabel>
          <Select
            labelId="label-category"
            id="id-category"
            // value={type}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          sx={{ m: "15px 0 15px 0" }}
          id="id-amount"
          label="Amount"
          type="number"
          variant="outlined"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <Button
          sx={{ margin: "15px 0 0 0" }}
          variant="contained"
          color="secondary"
          fullWidth
          children="sakjd"
          color="secondary"
        />
      </div>
    </div>
  );
}

export default Form;
