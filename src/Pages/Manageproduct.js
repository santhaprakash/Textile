import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {order} from "../firebase"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
function Manageproduct() {
  const[orders,setOrders]=useState([]);
    useEffect(()=>{
        onSnapshot(order,(e)=>{
            const post=[]
            e.docs.map((s)=>{
                post.push({...s.data(),id:s.id})
            })
            setOrders(post);
        })
    })
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
  return (
    <>
     <Button variant="contained" onClick={()=>window.location.href="/admin"}
    style={{marginTop:'13px',marginLeft:'20px'}}
    >Back</Button>
    
    <div style={{display:'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',marginTop:'50px'}}>
      <h3 style={{fontWeight: '600'}}>Placed Orders</h3>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Product Name</TableCell>
            <TableCell >Quantity</TableCell>
            <TableCell >Prize/pro</TableCell>
            <TableCell>Delivered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.address}</TableCell>
              <TableCell>
              {
                row.data.map((s)=>{
                  return(
                    <div>
                    <TableCell >{s.name}</TableCell>
                    </div>
                  )               
                })
              }
            </TableCell>  
            <TableCell>
              {
                row.data.map((s)=>{
                  return(
                    <div>
                    <TableCell >{s.count}</TableCell>
                    </div>
                  )               
                })
              }
            </TableCell>  
            <TableCell>
              {
                row.data.map((s)=>{
                  return(
                    <div>
                    <TableCell >{s.prize}</TableCell>
                    </div>
                  )               
                })
              }
            </TableCell>  
            <TableCell >{row.delivered ?<DoneIcon style={{color:'green'}}></DoneIcon>:<CloseIcon style={{color:'red'}} />}</TableCell>
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default Manageproduct