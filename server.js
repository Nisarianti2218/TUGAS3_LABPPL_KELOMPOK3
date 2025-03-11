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

// Endpoint untuk menambahkan mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
    const { nama, npm, jurusan } = req.body;
    if (!nama || !npm || !jurusan) {
        return res.status(400).json({ error: 'Semua bidang harus diisi' });
    }

    const db = readDatabase();
    const newMahasiswa = {
        id: db.mahasiswa.length ? db.mahasiswa[db.mahasiswa.length - 1].id + 1 : 1,
        nama,
        npm,
        jurusan
    };

    db.mahasiswa.push(newMahasiswa);
    writeDatabase(db);

    res.json(newMahasiswa);
});
