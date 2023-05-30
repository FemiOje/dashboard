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
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };

  const steppedAreaChartData = [
    ["Director (Year)", "Rotten Tomatoes", "IMDB"],
    ["Alfred Hitchcock (1935)", 8.4, 7.9],
    ["Ralph Thomas (1959)", 6.9, 6.5],
    ["Don Sharp (1978)", 6.5, 6.4],
    ["James Hawes (2008)", 4.4, 6.2],
];

const steppedAreaChartOptions = {
    title: "The decline of 'The 39 Steps'",
    vAxis: { title: "Accumulated Rating" },
    isStacked: true,
};

export {
    lineChartData,
    lineChartOptions,
    doughnutChartData,
    doughnutChartOptions,
    steppedAreaChartData,
    steppedAreaChartOptions,
}