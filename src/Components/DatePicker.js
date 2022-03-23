import * as React from "react";
import { TextField, Stack, Alert, AlertTitle } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}
