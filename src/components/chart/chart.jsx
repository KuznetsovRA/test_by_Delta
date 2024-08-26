import {Line} from "react-chartjs-2";
import {
  ArcElement,
  PointElement,
  LineElement, // Добавьте LineElement
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement, // Зарегистрируйте LineElement
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement
);

function Chart(props){

  const lineData = { // Измените название переменной на lineData
    labels: ["Yesterday", "Today"], // пример меток
    datasets: [
      {
        label: props.caption,
        data: props.data, // Здесь должен быть массив чисел
        backgroundColor: `white`, // Цвет фона
        borderColor: "rgb(93,168,141)", // Цвет линии
        borderWidth: 2, // Толщина линии
        fill: false, // Не заполняйте область под графиком
      }
    ]
  };

  const lineOptions = { // Измените название переменной на lineOptions
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000000", // Цвет подписей оси Y
        },
        title: {
          display: true,
          color: "#000000", // Цвет заголовка оси Y
        },
      },
      x: {
        ticks: {
          color: "#000000", // Цвет подписей оси X
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#000000", // Цвет подписей легенды
        },
      },
    },
  };


  return (<Line data={lineData} options={lineOptions}></Line>);
}

export default Chart;
