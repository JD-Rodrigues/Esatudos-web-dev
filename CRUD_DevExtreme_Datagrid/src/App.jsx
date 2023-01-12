import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { employees } from './employees';

import {
  DataGrid,
  Column,
  // ...
  RequiredRule,
  Editing
} from 'devextreme-react/data-grid';

function App() {
  return (
      <div className="App">
          <DataGrid
            dataSource={employees}
          >
              {/* ... */}
              <Column dataField="FullName">
                  <RequiredRule />
              </Column>
              <Column dataField="Position">
                  <RequiredRule />
              </Column>
              <Column
                  dataField="BirthDate">
                  <RequiredRule />
              </Column>
              <Column
                  dataField="HireDate">
                  <RequiredRule />
              </Column>
              {/* ... */}
              <Column
                  dataField="Country">
                  <RequiredRule />
              </Column>
              <Editing
                  mode="popup"
                  allowUpdating={true}
                  allowDeleting={true}
                  allowAdding={true}
              />
          </DataGrid>
      </div>
  );
}


export default App
