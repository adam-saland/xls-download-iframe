import React from 'react';
import XLSX from 'xlsx';
import logo from './logo.svg';
import './App.css';

function exportToExcel(e) {
  const data = [
    ['id', 'name'],
    ['1', 'juan'],
    ['2', 'jose'],
    ['3', 'adam'],
  ]

  const sheetName = 'sheet1'
  const fileName = `myExcelFle-${Date.now().toString()}.xlsx`
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  const file = XLSX.writeFile(wb, fileName)

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Export to excel - child app</p>
        <button onClick={exportToExcel}>download</button>
      </header>
    </div>
  );
}

export default App;
