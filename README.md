# Locomotive Scroll dengan React + Vite

## Pendahuluan

[Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) adalah pustaka JavaScript untuk menciptakan animasi scrolling yang mulus dan modern. Dengan Locomotive Scroll, Anda dapat menambahkan efek parallax, smooth scrolling, dan berbagai fitur lain yang meningkatkan pengalaman pengguna di situs web Anda.

Dalam dokumentasi ini, Anda akan mempelajari cara mengintegrasikan Locomotive Scroll dengan aplikasi React yang menggunakan Vite sebagai bundler, termasuk pengaturan arah scroll dan efek tambahan lainnya.

---

## Persyaratan Sistem

Sebelum memulai, pastikan Anda memiliki:

- **Node.js**: Versi 14.x atau lebih baru.
- **React**: Versi 18.x atau lebih baru.
- **Vite**: Versi 4.x atau lebih baru.

---

## Instalasi

### Langkah 1: Membuat Proyek React dengan Vite

Jalankan perintah berikut untuk membuat proyek React baru dengan Vite:

```bash
npm create vite@latest my-app --template react
cd my-app

npm install
```

### Langkah 2: Instal Locomotive Scroll

Tambahkan Locomotive Scroll ke proyek Anda dengan perintah berikut:

```bash
npm install locomotive-scroll
```

---

## Konfigurasi

### Langkah 1: Tambahkan CSS Locomotive Scroll

Buat file `styles.css` di folder `src` Anda (atau gunakan file CSS Anda yang sudah ada). Tambahkan impor Locomotive Scroll:

```css
@import "locomotive-scroll/dist/locomotive-scroll.css";

/* Tambahkan gaya tambahan untuk elemen wrapper */
[data-scroll-container] {
  overflow: hidden;
}
```

Impor file ini di `main.jsx`:

```jsx
import "./styles.css";
```

### Langkah 2: Siapkan HTML Struktur

Pastikan elemen wrapper untuk Locomotive Scroll memiliki atribut `data-scroll-container`. Contoh:

```jsx
<div data-scroll-container>
  <div data-scroll-section>
    <h1 data-scroll>Selamat Datang di Locomotive Scroll!</h1>
    <p data-scroll>Ayo buat scrolling yang mulus!</p>
  </div>
</div>
```

### Langkah 3: Inisialisasi Locomotive Scroll

Inisialisasi Locomotive Scroll di dalam komponen React Anda.

---

## Implementasi

### File `App.jsx`

```jsx
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <div data-scroll-section>
        <h1 data-scroll>Selamat Datang di Locomotive Scroll!</h1>
        <p data-scroll>Ayo buat scrolling yang mulus!</p>
      </div>
    </div>
  );
};

export default App;
```

### File `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## Efek Arah Scroll

### 1. Scroll Vertikal

```jsx
<div data-scroll data-scroll-direction="vertical" data-scroll-speed="4">
  Bergerak vertikal
</div>
```

- **Nilai positif**: bergerak ke bawah lebih lambat (tertinggal).
- **Nilai negatif**: bergerak ke bawah lebih cepat (mendahului).

### 2. Scroll Horizontal

```jsx
<div data-scroll data-scroll-direction="horizontal" data-scroll-speed="4">
  Bergerak horizontal
</div>
```

- **Nilai positif**: bergerak ke kanan.
- **Nilai negatif**: bergerak ke kiri.
- Tambahkan CSS `position: relative` pada elemen.

### 3. Scroll Menyerong

```jsx
<div data-scroll-section className="diagonal-scroll-demo">
  <div
    data-scroll
    data-scroll-direction="horizontal"
    data-scroll-speed="6"
    className="diagonal-item"
  >
    <div className="diagonal-content">Bergerak Menyerong</div>
  </div>
</div>
```

CSS untuk efek menyerong:

```css
.diagonal-scroll-demo {
  height: 200vh;
  position: relative;
  overflow: hidden;
}

.diagonal-item {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
}

.diagonal-content {
  transform: rotate(-15deg);
}
```

---

## Atribut Penting

- **`data-scroll`**: Mengaktifkan scroll effect.
- **`data-scroll-direction`**: Menentukan arah ("vertical"/"horizontal").
- **`data-scroll-speed`**: Kecepatan scroll (-6 sampai 6).
- **`data-scroll-delay`**: Delay sebelum efek mulai (dalam detik).
- **`data-scroll-position`**: Posisi trigger ("top"/"center"/"bottom").

---

## Tips dan Trik

- **Scroll Vertikal**:

  - Gunakan nilai positif untuk efek parallax yang tertinggal.
  - Gunakan nilai negatif untuk efek yang lebih cepat.

- **Scroll Horizontal**:

  - Pastikan parent memiliki `overflow: hidden`.
  - Gunakan `position: relative` pada elemen yang bergerak.

- **Scroll Menyerong**:
  - Kombinasikan `data-scroll-direction="horizontal"` dengan CSS transform.
  - Gunakan `position: sticky` untuk kontrol lebih baik.

---

## Troubleshooting

### Masalah Umum

1. **Efek Scroll Tidak Berjalan**:

   - Pastikan elemen `data-scroll-container` ada dan ditulis dengan benar.
   - Pastikan Locomotive Scroll diinisialisasi di dalam `useEffect`.

2. **Performa Lambat**:

   - Kurangi jumlah elemen dengan atribut `data-scroll`.
   - Optimalkan gaya CSS untuk elemen yang digulir.

3. **Kesalahan pada Destroy**:

   - Pastikan `scroll.destroy()` dipanggil saat komponen di-unmount.

4. **Glitch atau Error `getBoundingClientRect`**:
   - Pastikan elemen sudah ter-render sebelum inisialisasi.
   - Tambahkan parent dengan `overflow: hidden`.

---

## Referensi dan Kredit

- [Dokumentasi Resmi Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)
- [Vite](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)

---

Dengan mengikuti panduan ini, Anda seharusnya dapat mengintegrasikan Locomotive Scroll ke dalam proyek React + Vite Anda dengan mudah, termasuk efek arah scroll yang lebih variatif. Selamat mencoba!
