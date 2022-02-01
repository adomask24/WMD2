const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'codeacademy2022',
})

app.post('/create', (req, res) => {
    const name = req.body.name;
    const materialgroup = req.body.materialgroup;
    const dimension = req.body.dimension;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const orderdate = req.body.orderdate;
    const receiptdate = req.body.receiptdate;
    const supplier = req.body.supplier;

    db.query(
        'INSERT INTO warehouse (materialgroup,name,supplier,dimension,quantity,price,orderdate,receiptdate) VALUES(?,?,?,?,?,?,?,?)',
    [materialgroup,name,supplier,dimension,quantity,price,orderdate,receiptdate],
    (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send("Values inserted ho ho ho");
        }
    }
    )
})

app.get('/employees',(req, res) => {
    db.query('SELECT * FROM warehouse',(err,result)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const receiptdate = req.body.receiptdate;
    db.query(
      "UPDATE warehouse SET receiptdate = ? WHERE id = ?",
      [receiptdate, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM warehouse WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, ()=> {
    console.log("bruh , server is  on port 3001");
});