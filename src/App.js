import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { duration, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Loantable from './Loantable';
import Loanchart from './Loanchart';
import { TextField } from '@mui/material';
import { Grid }from '@mui/material';
import Button from '@mui/material/Button';

 function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const LoanSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 20,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height:25
  },
  '& .MuiSlider-rail': {
    opacity: 1,
    height:25,
    backgroundColor: '#fff',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));

function App() {
  const[lAmount,setlAmount]=useState(0);
  const[lInterest,setlInterest]=useState(0);
  const[lTenure,setlTenure]=useState(0);
  const lMax=10000000;
  const tMax=360;
  const iMax=20;

  

  const intr = lInterest/1200;
  const emi = lTenure ? Math.round(lAmount * intr / (1 - (Math.pow(1/(1 + intr), lTenure)))) : 0;
  const totalAmt = lTenure * emi;
  var totalCredAmt = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-lTenure))));
  const totalIntAmount = Math.round(totalAmt - totalCredAmt);

  return (
    <div className="App">
      <div className='header'>
        <strong>CAR LOAN EMI CALCULATOR</strong>
      </div>
      <div className='header-desc'>
        <h3>Car Loan EMI calculator</h3>
        <p>Calculate you car loan emi with our online tool.Provide your loan amount , tenure and interest rates to calculate the emi.</p>
      </div>
      <section id='loan-info'>
       <div className='loan-row'>
        <Grid container spacing={2}>
          <Grid item lg={2}>
         <h1>Amount</h1>
        </Grid>
        <Grid item lg={8}>
        <LoanSlider
        aria-label="ios slider"
        value={lAmount}
        defaultValue={0}
        onChange={(event,vAmount)=>{setlAmount(vAmount)}}
        min={0}
        max={lMax}
        valueLabelDisplay="on"/>
        </Grid>
        <Grid item lg={2}>
        <TextField
          id="outlined-number"
          value={lAmount}
          onChange={(event)=>setlAmount(event.target.value === '' ? 0 : (event.target.value))}
          label="Loan Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        </Grid>
      </div>
      <div className='interest-row'>
      <Grid item container spacing={2}>
      <Grid item lg={2} xs={12}>
      <h1>Interest</h1>
      </Grid>
      <Grid item lg={8} xs={12}>
        <LoanSlider
        aria-label="ios slider"
        value={lInterest}
        defaultValue={0}
        onChange={(event,vInterest)=>{setlInterest(vInterest)}}
        min={0}
        max={iMax}
        steps={0.1}
        valueLabelDisplay="on"/>
        </Grid>
        <Grid item lg={2} xs={12}>
        <TextField
          id="outlined-number"
          value={lInterest}
          onChange={(event)=>setlInterest(event.target.value === '' ? 0 : (event.target.value))}
          label="Interest"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        </Grid>
      </div>
      <div className='tenure-row'>
        <Grid item container spacing={2}>
          <Grid item lg={2}>
      <h1>Tenure</h1>
      </Grid>
      <Grid item lg={8}>
        <LoanSlider 
        aria-label="ios slider"
        value={lTenure}
        defaultValue={0}
        onChange={(event,vTenure)=>{setlTenure(vTenure)}}
        min={0}
        max={tMax}
        valueLabelDisplay="on"/>
        </Grid>
      <Grid item lg={2}>
        <TextField
          id="outlined-number"
          value={lTenure}
          onChange={(event)=>setlTenure(event.target.value === '' ? 0 : (event.target.value))}
          label="Tenure"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        </Grid>
        </div>
       {/* <Button className='cal-button' variant='contained'>Calculate</Button> */}
      </section>
      <section id='final-info'>
        
        <h2>Your monthly EMI is: 
          <span>   {emi}</span> 
        </h2>
        <p>This is the amount you will pay every month to your loan provider</p>

        <div className='loan-diagrams'>
        <div className='loan-table'>
          <TableContainer>
            <Table>
            <TableHead>
             <TableRow>
              <TableCell>
                <Loantable lAmount={lAmount} lInterest={lInterest} lTenure={lTenure} totalAmt={totalAmt} totalCredAmt={totalCredAmt} emi={emi}/>
              </TableCell>
             </TableRow>
            </TableHead>
            </Table>
          </TableContainer>
        </div>
        <div className='loan-pie'>
          <Loanchart lAmount={lAmount} lInterest={lInterest} lTenure={lTenure} totalAmt={totalAmt} totalCredAmt={totalCredAmt} emi={emi}/>
        </div>
        </div>
        </section>
    </div>
  );
}

export default App;
