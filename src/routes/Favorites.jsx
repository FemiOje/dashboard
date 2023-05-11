import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chart } from 'react-google-charts';

import { FiArrowUpCircle } from 'react-icons/fi'
import { FiArrowDownCircle } from 'react-icons/fi'
import { FiTrendingUp } from 'react-icons/fi'
import { FiTrendingDown } from 'react-icons/fi'

const Favorites = () => {

  const data = [
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

  const options = {
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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



  const rows = [
    {
      'name': 'Frozen yoghurt',
      'calories': 159,
      'fat': 6.0,
      'carbs': 24,
      'protein': 4.0
    },
    {
      'name': 'Ice cream sandwich',
      'calories': 237,
      'fat': 9.0,
      'carbs': 37,
      'protein': 4.3
    },
    {
      'name': 'Eclair',
      'calories': 262,
      'fat': 16.0,
      'carbs': 24,
      'protein': 6.0
    },
    {
      'name': 'Cupcake',
      'calories': 305,
      'fat': 3.7,
      'carbs': 67,
      'protein': 4.3
    },
    {
      'name': 'Gingerbread',
      'calories': 356,
      'fat': 16.0,
      'carbs': 49,
      'protein': 3.9
    },
  ];

  return (
    <div className='favorites w-[100%] min-h-screen bg-slate-100 '>
      <div className='top md:grid md:grid-cols-2 md:gap-2'>
        <div className="small-cards md:grid md:grid-rows-2 m-2 md:grid-cols-2 md:gap-2">
          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowUpCircle />
              </div>
              <div className='flex flex-row self-center text-green-600 font-bold rounded p-2 group-hover:bg-green-100  group-hover:text-green-500'>
                <FiTrendingUp />
                <span>+10%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">243</p>
            <h3 className="text-muted">Total Employees</h3>
          </div>

          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowDownCircle />
              </div>
              <div className='flex flex-row self-center text-red-600 font-bold rounded p-2 group-hover:bg-red-100  group-hover:text-red-500'>
                <FiTrendingDown />
                <span>+10%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">20</p>
            <h3 className="text-muted">Number of Leave</h3>
          </div>

          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowUpCircle />
              </div>
              <div className='flex flex-row self-center text-green-600 font-bold rounded p-2 group-hover:bg-green-100  group-hover:text-green-500'>
                <FiTrendingUp />
                <span>+16%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">28</p>
            <h3 className="text-muted">New Employees</h3>
          </div>

          <div className='group bg-white cursor-pointer shadow-md rounded my-1 p-4 transition duration-400 md:my-0 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 hover:bg-purple-600 hover:text-white'>
            <div className="flex justify-between mb-5">
              <div className='bg-purple-100 text-purple-400 text-xl rounded-md p-3 self-center group-hover:bg-purple-400 group-hover:text-white'>
                <FiArrowDownCircle />
              </div>
              <div className='flex flex-row self-center text-red-600 font-bold rounded p-2 group-hover:bg-red-100 group-hover:text-red-500'>
                <FiTrendingDown />
                <span>-18%</span>
              </div>
            </div>
            <p className="font-bold text-2xl">60%</p>
            <h3 className="text-muted">Happiness Rate</h3>
          </div>

        </div>

        <div className="project-tracked-chart bg-white cursor-pointer shadow-md m-2 rounded">
          <Chart
            chartType="LineChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
          />
        </div>
      </div>

      <div className='bottom'>
        <div className="employee-summary-table bg-white m-2 p-4 rounded">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Favorites