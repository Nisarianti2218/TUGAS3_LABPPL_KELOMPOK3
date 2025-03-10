# Simple API Project - Tugas 3 PPL

## 📌 Deskripsi
Proyek ini adalah API sederhana yang dibuat menggunakan **Express.js**. API ini dapat mengambil dan menambahkan data ke dalam sistem database berbasis JSON.

---
## 📋 Fitur
### ✅ Fitur Wajib
1. **GET /items** → Melihat semua item yang tersedia.
2. **GET /items/:id** → Melihat satu item berdasarkan ID.
3. **POST /items** → Menambahkan item baru ke dalam database.
4. Data disimpan dalam format **JSON**.
5. Data memiliki tema tertentu dan minimal 3 atribut.

### ✨ Nilai Plus
- **PUT /items/:id** → Memperbarui item berdasarkan ID.
- **DELETE /items/:id** → Menghapus item berdasarkan ID.
- Fitur tambahan lainnya untuk meningkatkan fungsionalitas API.

---
## 🏗️ Teknologi yang Digunakan
- Node.js
- Express.js
- JSON sebagai database
- GitHub untuk version control

---
## 🚀 Instalasi & Menjalankan Proyek
### 1️⃣ Clone Repository
```bash
git clone https://github.com/Nisarianti2218/TUGAS3_LABPPL_KELOMPOK3.git
cd TUGAS3_LABPPL_KELOMPOK3
```

### 2️⃣ Instal Dependencies
```bash
npm install
```

### 3️⃣ Jalankan Server
```bash
node server.js
```
API akan berjalan di `http://localhost:3000`

---
## 📡 Endpoint API
### 1️⃣ Mendapatkan Semua Item
**GET /items**
```json
{
    "data": [
        { "id": 1, "name": "Item1", "description": "Deskripsi Item 1" },
        { "id": 2, "name": "Item2", "description": "Deskripsi Item 2" }
    ]
}
```

### 2️⃣ Mendapatkan Satu Item Berdasarkan ID
**GET /items/:id**
```json
{
    "id": 1,
    "name": "Item1",
    "description": "Deskripsi Item 1"
}
```

### 3️⃣ Menambahkan Item Baru
**POST /items**
- Request Body:
```json
{
    "name": "Item Baru",
    "description": "Deskripsi item baru"
}
```
- Response:
```json
{
    "message": "Item berhasil ditambahkan"
}
```

### 4️⃣ Memperbarui Item
**PUT /items/:id**
- Request Body:
```json
{
    "name": "Item Update",
    "description": "Deskripsi yang diperbarui"
}
```
- Response:
```json
{
    "message": "Item berhasil diperbarui"
}
```

### 5️⃣ Menghapus Item
**DELETE /items/:id**
- Response:
```json
{
    "message": "Item berhasil dihapus"
}
```

---
## 📜 Lisensi
Proyek ini dibuat untuk keperluan pembelajaran dalam mata kuliah PPL.

---
## ✉️ Kontribusi & Pengembang
Jika ingin berkontribusi atau melaporkan masalah, silakan buat **issue** atau **pull request** di repository ini.

👩‍💻 **Dibuat oleh:** Kelompok 3

