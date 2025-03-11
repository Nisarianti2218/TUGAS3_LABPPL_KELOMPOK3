# TUGAS 3_KELOMPOK 3
- Shofia Nurul Huda - 2208107010015
- Nisa Rianti - 2208107010018
- Jihan Nabilah - 2208107010035

# Sistem Manajemen Data Mahasiswa

## Deskripsi
Sistem ini merupakan aplikasi berbasis web yang memungkinkan pengguna untuk mengelola data mahasiswa. Aplikasi ini dibangun menggunakan **Node.js (Express.js)** sebagai backend dan **HTML, CSS, serta JavaScript** untuk frontend. Data mahasiswa disimpan dalam file JSON (**database.json**) sebagai penyimpanan sederhana.

## Fitur
- **Menampilkan daftar mahasiswa**
- **Menambahkan mahasiswa baru**
- **Mengedit data mahasiswa**
- **Menghapus mahasiswa**
- **Pencarian mahasiswa berdasarkan nama, NPM, atau jurusan**

## Struktur Proyek
```
/ (root)
│── server.js           # Server backend menggunakan Express.js
│── database.json       # Penyimpanan data mahasiswa dalam format JSON
│── public/
│   │── index.html      # Frontend aplikasi
│   │── styles.css      # (Opsional) File CSS tambahan jika diperlukan
│   │── script.js       # (Opsional) File JavaScript tambahan jika diperlukan
│── package.json        # Konfigurasi dependensi proyek Node.js
│── README.md           # Dokumentasi proyek
```

## Instalasi & Menjalankan Aplikasi

### 1. Persyaratan
Sebelum menjalankan aplikasi ini, pastikan Anda telah menginstal:
- **Node.js** (v14 atau lebih baru)
- **NPM** (termasuk dalam instalasi Node.js)

### 2. Clone Repository
```sh
git clone <URL_REPOSITORY>
cd <NAMA_FOLDER>
```

### 3. Instal Dependensi
```sh
npm install
```

### 4. Menjalankan Server
```sh
node server.js
```
Server akan berjalan di **http://localhost:3000**.

## Penggunaan API
### **1. Mendapatkan Semua Data Mahasiswa**
- **Endpoint:** `GET /api/mahasiswa`
- **Response:**
```json
[
  { "id": 1, "nama": "John Doe", "npm": "123456", "jurusan": "Informatika" },
  { "id": 2, "nama": "Jane Doe", "npm": "654321", "jurusan": "Matematika" }
]
```

### **2. Mendapatkan Data Mahasiswa Berdasarkan ID**
- **Endpoint:** `GET /api/mahasiswa/:id`
- **Response (Jika ditemukan):**
```json
{ "id": 1, "nama": "John Doe", "npm": "123456", "jurusan": "Informatika" }
```
- **Response (Jika tidak ditemukan):**
```json
{ "error": "Mahasiswa tidak ditemukan" }
```

### **3. Menambahkan Mahasiswa Baru**
- **Endpoint:** `POST /api/mahasiswa`
- **Body (JSON):**
```json
{ "nama": "John Doe", "npm": "123456", "jurusan": "Informatika" }
```
- **Response:**
```json
{ "id": 3, "nama": "John Doe", "npm": "123456", "jurusan": "Informatika" }
```

### **4. Mengupdate Data Mahasiswa**
- **Endpoint:** `PUT /api/mahasiswa/:id`
- **Body (JSON):**
```json
{ "nama": "John Doe Updated", "npm": "123456", "jurusan": "Teknik Komputer" }
```
- **Response:**
```json
{ "message": "Data berhasil diperbarui" }
```

### **5. Menghapus Data Mahasiswa**
- **Endpoint:** `DELETE /api/mahasiswa/:id`
- **Response:**
```json
{ "message": "Data berhasil dihapus" }
```

## Teknologi yang Digunakan
- **Backend:** Node.js dengan Express.js
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)
- **Database:** JSON file (**database.json**)


