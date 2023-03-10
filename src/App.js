import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./layouts/global/Topbar";
import Sidebar from "./layouts/global/Sidebar";
import Dashboard from "./layouts/dashboard";
import Team from "./layouts/team";
import Invoices from "./layouts/invoices";
import Contacts from "./layouts/contacts";
import Form from "./layouts/form";
import Calendar from "./layouts/calendar"
import Line from "./layouts/line";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">         
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
               <Route path="/team" element={<Team />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/invoices" element={<Invoices />} />
               <Route path="/form" element={<Form />} />
               <Route path="/calendar" element={<Calendar />} />
               <Route path="/line" element={<Line />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
