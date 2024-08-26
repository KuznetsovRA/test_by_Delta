import React from 'react';
import './table-row.css'
import Chart from "../chart/chart.jsx";

const TableRow = (props) => {
  const [isShow, setIsShow] = React.useState(false);

  const {title, currentDay, yesterday, week} = props;
  const diff = Math.round((Number(currentDay)/Number(yesterday) - 1)*100);

  let classDiff;

  if (diff > 0) {classDiff = "positive"}
  if (diff === 0) {classDiff = "neutral"}
  if (diff < 0) {classDiff = "negative"}

  const handleClick = function (e) {
    setIsShow(!isShow)
  }

  return (
    <>
      <tr onClick={handleClick}>
        <td className="title"> {title}</td>
        <td className="currentDay">{currentDay.toLocaleString()}</td>
        <td className={classDiff + ` yesterday `}>{yesterday.toLocaleString()} <span className={classDiff}>{diff}%</span></td>
        <td className="week">{week.toLocaleString()}</td>
      </tr>
      {
        isShow && <tr>
          <td colSpan={4}>
            <Chart key={title} data={[yesterday, currentDay]} caption={title}/>
          </td>
        </tr>
      }
    </>

  );
};

export default TableRow;
