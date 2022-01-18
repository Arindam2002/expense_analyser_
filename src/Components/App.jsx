import React from "react";
import Grid from "@mui/material/Grid";
import AnalysisCard from "./AnalysisCard/AnalysisCard";

import Form from "./Form/Form";
import List from "./List/List";

function App() {
  return (
    <div className="parent-div">
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        direction="row"
        justifyContent="space-between"
      >
        {/* LEFT PANEL */}
        <Grid item>
          <Form />
        </Grid>
        {/* LEFT PANEL ENDS*/}

        {/* MID SECTION */}
        <Grid item>
          <div className="mid-section">
            <AnalysisCard title="Income" />
            <AnalysisCard title="Expense" />
            <AnalysisCard title="Summary" />
          </div>
        </Grid>
        {/* MID SECTION ENDS */}

        {/* LAST SECTION */}
        <Grid item>
          <div className="last-section">
            <List />
          </div>
        </Grid>
        {/* LAST SECTION ENDS*/}
      </Grid>
    </div>
  );
}

export default App;
