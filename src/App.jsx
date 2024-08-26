import './App.css'
import TableRow from "./components/table-row/table-row.jsx";
import {state} from "./data.js";
import React from "react";


function App() {

  return (
     <table>
       <thead>
       <tr>
         <th>Показатель</th>
         <th className="currentDay">Текущий день</th>
         <th>Вчера</th>
         <th>Этот день недели</th>
       </tr>
       </thead>
       <tbody>
       {state.map((item, index) => {
         return (<TableRow key={index} title={item.title} currentDay={item.currentDay} yesterday={item.yesterday}
                             week={item.week}/>)
         })}
       </tbody>
     </table>
  )
}

export default App
