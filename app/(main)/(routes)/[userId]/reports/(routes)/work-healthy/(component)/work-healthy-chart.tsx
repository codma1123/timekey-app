"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, Plugin } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const WorkHealthyChart = ({ rate }: { rate: number }) => {
  const data: ChartData<"doughnut", number[], unknown> = {
    labels: ["wzzzz"],
    datasets: [
      {
        data: [rate, 100 - rate],
        backgroundColor: ["#34d399", "#212121"],
        borderColor: "#212121",
      },
    ],
  };

  const textCenter: Plugin<"doughnut"> = {
    id: "text-center",
    beforeDatasetDraw: (chart) => {
      new FontFace("dosis", "");
      const { ctx } = chart;

      ctx.font = "bold 36px IBM_KR";

      ctx.fillStyle = "#34d399";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.save();

      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.fillText(`${rate}%`, xCoor, yCoor);
      ctx.save();
    },
  };

  return (
    <div className="h-48ㅇ w-48">
      <Doughnut
        data={data}
        plugins={[textCenter]}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          animation: {
            easing: "easeOutCubic",
            duration: 500,
          },
        }}
      />
    </div>
  );
};

export default WorkHealthyChart;
