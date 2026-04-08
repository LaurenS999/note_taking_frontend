# Note Taking

Note Taking adalah aplikasi manajemen catatan harian (daily notes) berbasis web yang dirancang untuk kemudahan akses di mana saja. Dengan antarmuka yang responsif, pengguna dapat mencatat ide, tugas, atau agenda penting secara praktis melalui perangkat apa pun.
Aplikasi ini dibangun dengan arsitektur modern yang memisahkan antara Frontend dan Backend untuk efisiensi performa:

- Frontend: Dibangun dengan React dan dideploy melalui Netlify.
- Backend: Mengelola data dan API, berjalan di platform Railway.

Aplikasi ini membutuhkan API server untuk berjalan. Kamu bisa menemukan repository backend-nya di sini: [LaurenS999/Note_Taking_backend](https://github.com/LaurenS999/note_taking_backend)."

## Change Deploy To Localhost

Change in .env
for Local use : REACT_APP_API_URL=http://localhost:5000
for Deploy use : REACT_APP_API_URL=https://notetakingbackend-production.up.railway.app

## Fitur-Fitur Aplikasi

didalam aplikasi ini terdapat beberapa fitur yang dapat digunakan :

### Main Page

- ScreenShoot Tampilan Main Page
  <img src="./public/screenshoot/MainPage.png" alt="Screenshot aplikasi" width="500">

- ScreenShoot Tampilan List Note berdasarkan tanggal terbaru
  <img src="./public/screenshoot/ListNoteByDateDesc.png" alt="Screenshot aplikasi List Note by Date Desc" width="500">

### Membuat catatan

- ScreenShoot Tampilan modal create note
  <img src="./public/screenshoot/CreateNote.png" alt="Screenshot aplikasi tambah note" width="500">
- ScreenShoot Tampilan berhasil membuat note
  <img src="./public/screenshoot/SuccessCreateNote.png" alt="Screenshot aplikasi success tambah note" width="500">

### Mengedit catatan

- ScreenShoot Tampilan modal detil note dimana dapat melakukan pengeditan dan penghapus note
  <img src="./public/screenshoot/DetailNote.png" alt="Screenshot aplikasi detail note" width="500">
- ScreenShoot Tampilan berhasil mengedit data note
  <img src="./public/screenshoot/SuccessEditNote.png" alt="Screenshot aplikasi Success edit note" width="500">

### Menghapus catatan

- ScreenShoot Tampilan berhasil menghapus data note
  <img src="./public/screenshoot/SuccessDeleteNote.png" alt="Screenshot aplikasi success delete note" width="500">

### Pencarian catatan berdasarkan keyword

- ScreenShoot Tampilan List note pencarian berdasarkan title
  <img src="./public/screenshoot/searchbyTitle.png" alt="Screenshot Aplikasi Search by title" width="500">

- ScreenShoot Tampilan List note pencarian berdasarkan content
  <img src="./public/screenshoot/searchbyContent.png" alt="Screenshot Aplikasi Search by content" width="500">

### Halaman list Kategori

- ScreenShoot Tampilan List category
  <img src="./public/screenshoot/ListCategory.png" alt="Screenshot aplikasi List Note by Date Desc" width="500">

### Membuat Kategori

- ScreenShoot Tampilan modal create category
  <img src="./public/screenshoot/CreateCategory.png" alt="Screenshot aplikasi tambah kategori" width="500">
- ScreenShoot Tampilan Success membuat category
  <img src="./public/screenshoot/SuccessCreateCategory.png" alt="Screenshot aplikasi success tambah kategori" width="500">

### Mengedit Kategori

- ScreenShoot Tampilan modal detail category dimana dapat melakukan pengubahan dan penghapusan category
  <img src="./public/screenshoot/DetailCategory.png" alt="Screenshot aplikasi detail note" width="500">

- ScreenShoot Tampilan berhasil mengedit data category
  <img src="./public/screenshoot/SuccessEditCategory.png" alt="Screenshot aplikasi edit kategori" width="500">

### Menghapus Kategori

- ScreenShoot Tampilan berhasil menghapus data category
  <img src="./public/screenshoot/SuccessDeleteCategory.png" alt="Screenshot aplikasi Success delete kategori" width="500">
- ScreenShoot Tampilan Gagal Delete dikarenakan ada nya note yang terhubung dengan Category
  <img src="./public/screenshoot/FailDeleteCategory.png" alt="Screenshot aplikasi Fail delete kategori" width="500">

### Validation

- ScreenShoot Tampilan Validation Note mencegah Title dan content Kosong
  <img src="./public/screenshoot/ValidationNote.png" alt="Screenshot Aplikasi Validation Note" width="500">
- ScreenShoot Tampilan Validation Category mencegah Name dan Code_color Kosong
  <img src="./public/screenshoot/ValidationCategory.png" alt="Screenshot Aplikasi Validation Category" width="500">

### Pagination

- ScreenShoot Tampilan Pagination di halaman utama
  Fitur ini membagi list note menjadi beberapa halaman dimana setiap halaman hanya menampung 7 note.
  <img src="./public/screenshoot/Pagination.png" alt="Screenshot Aplikasi Pagination List Note" width="500">
