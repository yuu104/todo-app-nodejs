'use strict';
(() => {


  const express = require('express');
  const app = express();
  const mysql = require('mysql');
  const ejs = require('ejs');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zuvm8152',
    database: 'todo_app_node'
  });

  app.engine('ejs', ejs.renderFile);  


  con.connect((err) => {
    if(err) {
      console.log('error connecting:' + err.stack);
      return;
    }
    console.log('Connected');
  });

  app.use(express.static('public'));
  app.use(express.urlencoded({extended: false}));

  app.get('/', (req, res) => {
    con.query(
      'SELECT * FROM doTasks',
      (error_d, results_d) => {
        con.query(
          'SELECT * FROM compedTasks',
          (error_c, results_c) => {
            res.render('index.ejs', {doItems: results_d, compedItems: results_c});
          }
        );
      }
    );
  });

  app.post('/create', (req, res) => {
    con.query(
      'INSERT INTO doTasks(task) VALUES (?)',
      [req.body.taskName],
      (error, results) => {
        res.redirect('/');
      }
    );
  });

  app.post('/delete/:id', (req, res) => {
    con.query(
      'DELETE FROM doTasks WHERE id = ?',
      [req.params.id],
      (error, results) => {
        res.redirect('/');
      }
    );
  });

  app.post('/comped/:task/:id', (req, res) => {
    con.query(
      'INSERT INTO compedTasks(task) VALUES (?)',
      [req.params.task],
      (error_c, results_c) => {
        con.query(
          'DELETE FROM doTasks WHERE id = ?',
          [req.params.id],
          (error_d, results_d) => {
            res.redirect('/');
          }
        );
      }
    );
  });

  app.post('/reCreate/:task/:id', (req, res) => {
    con.query(
      'INSERT INTO doTasks(task) VALUES(?)',
      [req.params.task],
      (error_d, results_d) => {
        con.query(
          'DELETE FROM compedTasks WHERE id = ?',
          [req.params.id],
          (error_c, results_c) => {
            res.redirect('/');
          }
        );
      } 
    );
  });











  app.listen(3000, () => {
    console.log('Start server port:3000');
  });
































})();