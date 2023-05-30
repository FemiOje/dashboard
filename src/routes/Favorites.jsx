import React, { useState, useEffect } from 'react'
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

import { tableData } from '../data/tableData';
import { lineChartData, lineChartOptions } from '../data/chartData'

const Favorites = () => {
  // const [tableData, setTableData] = useState([])


  // useEffect(() => {
  //   fetch('https://www.googleapis.com')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       (setTableData(data))
  //     }
  //     )

  //   return () => {
  //     setTableData([])
  //   }
  // }, [tableData])



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


  return (
    <div className='favorites min-h-screen bg-slate-100'>
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
            data={lineChartData}
            options={lineChartOptions}
          />
        </div>
      </div>

      <div className='bottom'>
        <div className="employee-summary-table bg-white m-2 rounded">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" className='overflow-x-scroll'>
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
                {tableData.map((row) => (
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