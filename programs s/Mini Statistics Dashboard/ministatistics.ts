import * as Chart from 'chart.js';

document.addEventListener("DOMContentLoaded", () => {
    const ctx = (document.getElementById("statsChart") as HTMLCanvasElement).getContext("2d");
    
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
                datasets: [{
                    label: "Vendas",
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});