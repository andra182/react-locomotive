# Locomotive Scroll dengan React + Vite

## Pendahuluan

[Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) adalah pustaka JavaScript untuk menciptakan animasi scrolling yang mulus dan modern. Dengan Locomotive Scroll, Anda dapat menambahkan efek parallax, smooth scrolling, dan berbagai fitur lain yang meningkatkan pengalaman pengguna di situs web Anda.

## Persyaratan Sistem

- Node.js: Versi 14.x atau lebih baru
- React: Versi 18.x atau lebih baru
- Vite: Versi 4.x atau lebih baru

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
import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const [count, setCount] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;
    // Tunggu sampai DOM benar-benar siap
    setTimeout(() => {
      if (scrollRef.current) {
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: "is-revealed",
          lerp: 0.05,
        });
      }
    }, 100);

    // Cleanup
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <div data-scroll-section>
        <h1 data-scroll>Selamat Datang di Locomotive Scroll!</h1>
        <p data-scroll>Ayo buat scrolling yang mulus!</p>
      </div>
    </div>
  );
}

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
<div
  data-scroll
  data-scroll-direction="vertical"
  data-scroll-speed="4"
  className="scroll-item"
>
  Bergerak vertikal
</div>
```

- **Nilai positif**: bergerak ke bawah lebih lambat (tertinggal).
- **Nilai negatif**: bergerak ke bawah lebih cepat (mendahului).

### 2. Scroll Horizontal

```jsx
<div
  data-scroll
  data-scroll-direction="horizontal"
  data-scroll-speed="4"
  className="scroll-item"
>
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
          data-scroll-speed="-6"
          className="diagonal-item"
        >
          <div className="diagonal-content">Bergerak Menyerong</div>
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="6"
          className="diagonal-item"
        >
  <div className="diagonal-content">Bergerak Menyerong Berlawanan</div>
</div>
```

CSS untuk efek menyerong:

```css
.diagonal-scroll-demo {
  height: 200vh;
  position: relative;
  overflow: hidden;
  padding: 20vh 0;
}

.diagonal-item {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  padding: 2rem;
}

.diagonal-content {
  background: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  margin: 2rem;
  transform: rotate(-15deg);
  /* Tambahkan efek shadow untuk kedalaman */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Item pertama bergerak ke kanan atas */
.diagonal-item:nth-child(1) .diagonal-content {
  margin-left: 10%;
  transform: rotate(-15deg) translateY(100px);
}

/* Item kedua bergerak ke kiri bawah */
.diagonal-item:nth-child(2) .diagonal-content {
  margin-left: 60%;
  transform: rotate(15deg) translateY(-100px);
}

@keyframes diagonalFloat {
  0% {
    transform: translate(0, 0) rotate(-15deg);
  }
  50% {
    transform: translate(50px, -50px) rotate(-15deg);
  }
  100% {
    transform: translate(0, 0) rotate(-15deg);
  }
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
