const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DB_FILE = './database.json';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Fungsi untuk membaca database.json
function readDatabase() {
    try {
        const data = fs.readFileSync(DB_FILE);
        return JSON.parse(data);
    } catch (err) {
        return { mahasiswa: [] };
    }
}

// Fungsi untuk menulis ke database.json
function writeDatabase(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}
