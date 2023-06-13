const Utils = {
    numbers: function ({ count, min, max }) {
        const numbers = [];
        for (let i = 0; i < count; i++) {
            numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return numbers;
    },
    namedColor: function (index) {
        const colors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow'];
        return colors[index % colors.length];
    },
    transparentize: function (color, opacity) {
        // Implementation for transparentize function
        // Replace with your desired logic
        // Example implementation:
        const rgbaColor = this.hexToRgb(color);
        rgbaColor.a = opacity;
        return this.rgbToHex(rgbaColor);
    },
    months: function ({ count }) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        const months = [];
        for (let i = 0; i < count; i++) {
            months.push(monthNames[i % monthNames.length]);
        }
        return months;
    },
    rand: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    CHART_COLORS: {
        red: 'red',
        blue: 'blue',
    },
    hexToRgb: function (hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b, a: 1 };
    },
    rgbToHex: function (rgb) {
        // Implementation for rgbToHex function
        // Replace with your desired logic
        // Example implementation:
        const { r, g, b } = rgb;
        const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
        return `#${hex}`;
    },
};



const actions = [
    {
        name: 'Randomize',
        handler(chart) {
            chart.data.datasets.forEach(dataset => {
                dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100 });
            });
            chart.update();
        }
    },
    {
        name: 'Add Dataset',
        handler(chart) {
            const data = chart.data;
            const dsColor = Utils.namedColor(chart.data.datasets.length);
            const newDataset = {
                label: 'Dataset ' + (data.datasets.length + 1),
                // backgroundColor: Utils.transparentize(dsColor, 0.5),
                borderColor: dsColor,
                data: Utils.numbers({ count: data.labels.length, min: -100, max: 100 }),
            };
            chart.data.datasets.push(newDataset);
            chart.update();
        }
    },
    {
        name: 'Add Data',
        handler(chart) {
            const data = chart.data;
            if (data.datasets.length > 0) {
                data.labels = Utils.months({ count: data.labels.length + 1 });

                for (let index = 0; index < data.datasets.length; ++index) {
                    data.datasets[index].data.push(Utils.rand(-100, 100));
                }

                chart.update();
            }
        }
    },
    {
        name: 'Remove Dataset',
        handler(chart) {
            chart.data.datasets.pop();
            chart.update();
        }
    },
    {
        name: 'Remove Data',
        handler(chart) {
            chart.data.labels.splice(-1, 1); // remove the label first

            chart.data.datasets.forEach(dataset => {
                dataset.data.pop();
            });

            chart.update();
        }
    }
];

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
console.log("==============", JSON.stringify(NUMBER_CFG));

const labels = Utils.months({ count: 7 });
const data = {
    labels: labels,
    datasets: [
        {
            label: 'খাদ্য ও ত্রাণ সহায়তার জন্য প্রাপ্ত কল',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.red,
            // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
            label: 'মোট গৃহীত কল',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    },
};

