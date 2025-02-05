const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 3000;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fullstack',
    password: 'password',
    port: 5432,
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});


app.get('/orders', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM orders');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Ошибка при получении категорий: ', err.stack);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.post('/orders', async (req, res) => {
    const { name, description } = req.body;
    const query = 'INSERT INTO orders (order_name, order_description) VALUES ($1, $2, $3) RETURNING *';
    const result = await pool.query(query, [name, description]);
    res.status(201).json(result.rows[0]);
});