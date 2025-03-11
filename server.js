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

// Endpoint untuk mendapatkan semua data mahasiswa
app.get('/api/mahasiswa', (req, res) => {
    const db = readDatabase();
    res.json(db.mahasiswa);
});

// Endpoint untuk mendapatkan satu mahasiswa berdasarkan ID
app.get('/api/mahasiswa/:id', (req, res) => {
    const { id } = req.params;
    const db = readDatabase();
    const mahasiswa = db.mahasiswa.find(m => m.id === parseInt(id));

    if (!mahasiswa) {
        return res.status(404).json({ error: 'Mahasiswa tidak ditemukan' });
    }

    res.json(mahasiswa);
});

