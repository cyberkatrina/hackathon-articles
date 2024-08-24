// import React, { useState, useEffect} from 'react';
// import './DisplayArticleCard.css';


// function DisplayArticleCard(props) {

//   // const [articles, setArticles] = useState([]);
//   const {points, author, createdAt, url, title, tags} = props

//   return (
//     <div className="main">
//       <p>{points}</p>
//       <p>{author}</p>
//       <p>{createdAt}</p>
//       <p>{url}</p>
//       <p>{title}</p>

//       <br></br>


//     </div>
//   );
// }

// export default DisplayArticleCard;


import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function DisplayArticleCard(props) {
  const {points, title, author, createdAt, url, tags} = props

  return (
    <TableContainer component={Paper} onClick={() => {window.open(url)}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 50 }}>{points}</TableCell>
            <TableCell sx={{ width: 450, fontWeight: 'bold' }} align="left">{title}</TableCell>
            <TableCell sx={{ width: 150 }} align="left">{author}</TableCell>
            <TableCell sx={{ width: 150 }} align="left">{createdAt}</TableCell>
            <TableCell sx={{ width: 250, maxWidth: 250, wordWrap: 'break-word', color: 'gray' }} align="left">{url}</TableCell>
          </TableRow>
        </TableHead>

      </Table>
    </TableContainer>
  );
}