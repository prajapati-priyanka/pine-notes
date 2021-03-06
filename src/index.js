import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  NotesProvider,
  LabelsProvider,
  TrashProvider,
  ArchiveProvider,
  FilterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <TrashProvider>
            <ArchiveProvider>
              <LabelsProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </LabelsProvider>
            </ArchiveProvider>
          </TrashProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
