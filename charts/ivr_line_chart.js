console.log('hello world');
var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'APAC RE Index',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            fill: false,
            data: [
                10,
                20,
                30,
                40,
                100,
                50,
                150
                /*randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()*/
            ],
        }, {
            label: 'APAC PME',
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            fill: false,
            data: [
                50,
                300,
                100,
                450,
                150,
                200,
                300
            ],
    
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart - Logarithmic'
        },
        scales: {
            xAxes: [{
                display: true,
      scaleLabel: {
        display: true,
        labelString: 'Date'
      },
        
            }],
            yAxes: [{
                display: true,
                //type: 'logarithmic',
      scaleLabel: {
                        display: true,
                        labelString: 'Index Returns'
                    },
                    ticks: {
                        min: 0,
                        max: 500,

                        // forces step size to be 5 units
                        stepSize: 100
                    }
            }]
        }
    }
};
console.log('hello world2');

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });

    });

    window.myLine.update();
});

console.log('hello world3');