

var options = {
    series: [{
        name: '',
        data: [25, 50, 75, 100, 125, 150, 175]
    }, {
        name: '',
        data: [25, 50, 75, 100, 125, 150, 175]
    }, {
        name: '',
        data: [25, 50, 75, 100, 125, 150, 175]
    },],
    chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0
        },
    },
    xaxis: {
        type: 'number',
        categories: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
    },
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chart_one_container"), options);
chart.render();

var chart_1_options = {
    series: [78],
    chart: {
        height: 130,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Average'],
};
var chart_2_options = {
    series: [95],
    chart: {
        height: 130,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Top'],
};
var chart_3_options = {
    series: [59],
    chart: {
        height: 130,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Me'],
};
var first_chart = new ApexCharts(document.querySelector("#first_chart"), chart_1_options);
var sec_chart = new ApexCharts(document.querySelector("#sec_chart"), chart_2_options);
var third_chart = new ApexCharts(document.querySelector("#third_chart"), chart_3_options);

first_chart.render();
sec_chart.render();
third_chart.render();