const chartOptions = {
    chart: {
        type: "area",
        height: 180,
        toolbar: { show: false },
        zoom: { enabled: false }
    },
    colors: ['#34dbb1'],
    series: [{ name: 'Views', data: [8, 12, 2, 5, 23, 6] }],
    dataLabels: { enabled: false },
    stroke: { width: 3, curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stop: [0, 90, 100]
        }
    },
    xaxis: {
        categories: ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
        axisBorder: { show: false },
        labels: { style: { colors: '#a7a7a7', fontFamily: 'Poppins' }}
    },
    yaxis: { show: false },
    grid: { borderColor: 'rgba(0,0,0,0)', padding: { top: -30, bottom: -8, left: 12, right: 12 }},
    tooltip: {
        enabled: true,
        y: { formatter: value => `${value}K` },
        style: { fontFamily: 'Poppins' }
    },
    markers: { show: false }
};

const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render()