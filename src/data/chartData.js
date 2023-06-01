const lineChartData = [
    ["x", "dogs", "cats"],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
];

const lineChartOptions = {
    hAxis: {
        title: "Time",
    },
    vAxis: {
        title: "Popularity",
    },
    series: {
        1: { curveType: "function" },
    },
    legend: "none",
};

const doughnutChartData = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

const doughnutChartOptions = {
    title: "",
    pieHole: 0.9,
    is3D: false,
    legend: "none"
};

const steppedAreaChartData = [
    ["Director (Year)", "Rotten Tomatoes", "IMDB"],
    ['a', 8.4, 7.9],
    ['b', 6.9, 6.5],
    ['c', 6.5, 6.4],
    ['d', 4.4, 6.2],
];

const steppedAreaChartOptions = {
    // title: "",
    hAxis: { title: "Name", viewWindow: { min: 0, max: 4 } },
    vAxis: { title: "Rating", viewWindow: { min: 0, max: 10 } },
    isStacked: true,
    legend: "none",
    // legend: { position: "bottom" },


};

const lineChart2Data = [
    [
        "Day",
        "Guardians of the Galaxy",
        "The Avengers",
        "Transformers: Age of Extinction",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
];

const lineChart2Options = {
    hAxis: {
        title: "Week",
        viewWindow: { min: 0, max: 15 }
    },
    vAxis: {
        title: "Ratings",
        viewWindow: { min: 0, max: 90 }
    },
    // chart: {
    //     hAxis: { title: "Week", viewWindow: { min: 0, max: 15 } },
    //     vAxis: { title: "Rating", viewWindow: { min: 0, max: 10 } },
    // },
    legend: "none"
};

const lineChart3Data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];

const lineChart3Options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
};

const CountryData = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["Nigeria", 400],
];

export {
    lineChartData,
    lineChartOptions,
    lineChart2Data,
    lineChart2Options,
    lineChart3Data,
    lineChart3Options,
    doughnutChartData,
    doughnutChartOptions,
    steppedAreaChartData,
    steppedAreaChartOptions,
    CountryData
}