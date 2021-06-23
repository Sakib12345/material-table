import "./App.css";
import React from "react";
import MaterialTable from "material-table";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

function App() {
  const printRef = useRef();
  const data = [
    { name: "Sakib", age: 25 },
    { name: "Rakib", age: 35 },
    { name: "Hasib", age: 15 },
    { name: "Shihab", age: 31 },
    { name: "Noman", age: 27 },
  ];
  const columns = [
    {
      title: "Name",
      field: "name",
      customSort: (a, b) => a.name.length - b.name.length,
    },
    { title: "Age", field: "age" },
  ];

  return (
    <>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => printRef.current}
      />
      <div ref={printRef}>
        <MaterialTable
          
          title="Customer Table"
          q
          data={data}
          columns={columns}
          options={{
            exportButton: true,
            sorting: true,
          }}
        />
      </div>
    </>
  );
}

export default App;
