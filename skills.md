# Gaia UI — Developer & AI Usage Guide

Panduan praktis dan komprehensif bagi developer maupun AI coding assistant untuk mengonsumsi, mengintegrasikan, dan memanfaatkan library **`@navatech/gaia-ui`** dalam aplikasi web React.

---

## 1. Quick Start & Setup

### 1.1 Instalasi Package

```bash
# Menggunakan Bun (direkomendasikan)
bun add @navatech/gaia-ui

# Menggunakan NPM / PNPM / Yarn
npm install @navatech/gaia-ui
# atau
pnpm add @navatech/gaia-ui
```

### 1.2 Peer Dependencies

Pastikan project aplikasi memiliki dependencies berikut:

```bash
bun add react react-dom @tanstack/react-router
```

> [!IMPORTANT]
> **Komponen Navigasi** (`Navbar`, `NavTwo`, `SpeedDialMenu`, `AnimaNavbar`) membutuhkan router context dari `@tanstack/react-router`. Pastikan aplikasi sudah di-wrap dengan `<RouterProvider>` atau route tree yang sesuai.

### 1.3 Import CSS Global (Wajib)

Import stylesheet library di root entry file aplikasi (misal `main.tsx` atau `App.tsx`):

```tsx
// main.tsx atau index.tsx
import "@navatech/gaia-ui/style.css";
```

CSS ini berisi utility Tailwind CSS serta token variabel tema `@theme`.

---

## 2. Struktur Tier: Base vs Anima

| Fitur / Tier | Base (`@navatech/gaia-ui` atau `@navatech/gaia-ui/base`) | Anima (`@navatech/gaia-ui`) |
|---|---|---|
| **Akses** | Gratis / Tanpa Lisensi | Memerlukan License Key (JWT RS256) |
| **Wrapper** | Langsung dipakai | Wajib dibungkus `<LicenseProvider>` |
| **Fallback** | Tidak ada | Muncul `<ErrorLicense />` jika lisensi tidak valid |
| **Styling** | Tailwind CSS murni + custom inline hex colors | Design Token CSS Variables + Gradients |
| **Daftar Komponen** | `Button`, `Container`, `Hero`, `Navbar`, `NavTwo`, `SpeedDialMenu`, `Table`, `Avatar`, `Pile`, `Stats`, `LineChart` | `AnimaButton`, `AnimaNavbar`, `AnimaToast`, `AnimaPopup` |

---

## 3. Setup Lisensi Anima (Pro Tier)

### 3.1 Aktivasi Lisensi via CLI

Jika pengguna memiliki kode redeem lisensi Gaia:

```bash
bunx gaia redeem <KODE_LISENSI>
```

Command ini memvalidasi lisensi ke server NavaTech dan men-generate konfigurasi lisensi lokal.

### 3.2 Membungkus Aplikasi dengan `<LicenseProvider>`

Semua komponen Anima (`AnimaButton`, `AnimaNavbar`, `AnimaToast`, `AnimaPopup`) **wajib** berada di dalam `<LicenseProvider>`:

```tsx
import { LicenseProvider, AnimaNavbar, AnimaButton } from "@navatech/gaia-ui";

export function App() {
  return (
    <LicenseProvider>
      <AnimaNavbar variant="gradient-glass" />
      <main className="p-8">
        <AnimaButton type="primary" text="Upgrade Plan" gradient />
      </main>
    </LicenseProvider>
  );
}
```

---

## 4. Theming, CLI Commands & Warna

### 4.1 CLI Commands (`gaia`)

```bash
# 1. Redeem lisensi
bunx gaia redeem <LICENSE_CODE>

# 2. Melihat daftar tema bawaan yang tersedia
bunx gaia theme list

# 3. Mengaplikasikan salah satu tema preset
bunx gaia theme noir
bunx gaia theme crimson
bunx gaia theme raphtalia
bunx gaia theme vert
bunx gaia theme rimuru

# 4. Membuat tema custom sendiri
bunx gaia theme custom    # Menghasilkan template schemacolor.json
# (Edit file src/anima/config/schemacolor.json sesuai warna pilihan)
bunx gaia theme gen       # Meng-compile JSON menjadi CSS tokens
```

---

### 4.2 Preset Tema yang Tersedia

| Nama Tema | Karakteristik | Primary Color | Accent / Highlight | Best Use Case |
|---|---|---|---|---|
| **`noir`** | Dark Red, Luxury, Warm | `#8B1E24` | `#C67D30` (Gold/Bronze) | Luxury brand, korporat finansial, hukum |
| **`crimson`** | Light Red, Casual Modern | `#E63946` | `#FFB703` (Yellow) | Creative agencies, SaaS startup |
| **`raphtalia`** | Orange Sunset, High Energy | `#FF512F` | `#F09819` (Orange) | Gaming, entertainment, e-commerce |
| **`vert`** | Green Aurora, Fresh & Clean | `#11998E` | `#38EF7D` (Neon Green) | Wellness, sustainability, kesehatan |
| **`rimuru`** | Blue & Violet, Tech Vibes | `#2575FC` | `#00D2FF` (Cyan) | Tech products, AI platform, dashboard |

---

### 4.3 Tailwind CSS Token Variables

Jika ingin membuat komponen kustom yang serasi dengan tema Gaia UI, gunakan kelas utility token berikut:

```tsx
// Backgrounds
className="bg-background-page"         // Halaman utama
className="bg-background-section"      // Section sekunder
className="bg-background-inverse"      // Dark contrast background

// Container / Cards
className="bg-container-card-bg border-container-card-border"
className="bg-container-modal-bg border-container-modal-border"
className="bg-container-subtle-box-bg border-container-subtle-box-border"

// Typography
className="text-text-heading"          // Judul / Heading tebal
className="text-text-body"             // Teks isi
className="text-text-muted"            // Teks placeholder / keterangan
className="text-text-link"             // Hyperlink
className="text-text-on-primary"       // Teks di atas tombol primary

// Brand Palette Langsung
className="text-palette-brand-primary"
className="bg-palette-brand-primary"
className="border-palette-brand-primary-light"
className="bg-palette-brand-secondary"
className="text-palette-brand-accent"

// Semantic Alert / Status
className="text-palette-semantic-success" // #15803D
className="text-palette-semantic-warning" // #D97706
className="text-palette-semantic-danger"  // #E11D48
className="text-palette-semantic-info"    // #0369A1

// Gradients
className="bg-brand-hero"              // Gradient header hero
className="bg-button-cta"              // Gradient tombol CTA
className="bg-button-cta-inverse"      // Gradient inverse
```

---

## 5. Panduan & Contoh Pakai Komponen

### 5.1 Base Layout & Action

#### `<Button />` (Universal Button)
Mendukung custom hex color, visual variants, size, loading spinner, dan slot icon.

```tsx
import { Button } from "@navatech/gaia-ui";

// 1. Variant standar
<Button variant="solid" size="md">Simpan Data</Button>
<Button variant="outline" size="sm">Batal</Button>
<Button variant="ghost">Lihat Detail</Button>
<Button variant="soft">Draft</Button>
<Button variant="destructive">Hapus Akun</Button>

// 2. Custom accent color (menerima string hex/rgb apa pun)
<Button color="#6366f1" variant="solid">Indigo Brand</Button>
<Button color="#10b981" variant="outline">Green Outline</Button>

// 3. Status loading & Icon
<Button 
  loading={isSubmitting} 
  fullWidth 
  iconLeft={<span>🔍</span>}
  onClick={handleSearch}
>
  Cari Dokumen
</Button>
```

#### `<Container />` (Responsive Page Wrapper)
Menjaga konsistensi lebar layout dan padding antar breakpoint.

```tsx
import { Container } from "@navatech/gaia-ui";

<Container maxWidth="xl" className="py-8">
  <h1>Halaman Konten</h1>
</Container>

// Full width fluid
<Container fluid>
  <div>Lebar 100% viewport dengan padding responsive</div>
</Container>
```

#### `<Hero />` (Header Section)
Section banner lengkap dengan headline, description, call to action, dan gambar.

```tsx
import { Hero, Button } from "@navatech/gaia-ui";

<Hero
  title="Bangun Aplikasi Lebih Cepat dengan Gaia UI"
  desc="Koleksi komponen elegan dan teruji untuk mempercepat workflow frontend Anda."
  mainImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  mainImageAlt="Preview Dashboard"
  align="left"
  actions={
    <>
      <Button variant="solid" size="lg">Mulai Sekarang</Button>
      <Button variant="outline" size="lg">Dokumentasi</Button>
    </>
  }
/>
```

---

### 5.2 Base Navigation

#### `<Navbar />` (Standard Data-Driven Navbar)

```tsx
import { Navbar, Button } from "@navatech/gaia-ui";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Settings", href: "/settings" },
];

<Navbar
  brand={<span className="font-bold text-xl text-primary">Gaia App</span>}
  data={menuItems}
  isFixed={true}
  position="top"
  hoverStyle="underline"
  actions={<Button size="sm">Masuk</Button>}
/>
```

#### `<NavTwo />` (Feature-Rich Navbar)
Navbar dengan slot pencarian, menu dropdown avatar user, dan tombol notifikasi.

```tsx
import { NavTwo } from "@navatech/gaia-ui";

<NavTwo
  brand={<span className="font-extrabold text-lg">MyApp</span>}
  items={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Analytics", href: "/analytics" },
    { label: "Projects", href: "/projects" },
  ]}
  search={{
    placeholder: "Cari transaksi...",
    onSubmit: (query) => console.log("Search query:", query),
  }}
  notification={{
    count: 3,
    onClick: () => console.log("Buka notifikasi"),
  }}
  userDropdown={{
    name: "Alex Pratama",
    email: "alex@navatech.me",
    avatar: "https://i.pravatar.cc/150?u=alex",
    items: [
      { label: "Profile", href: "/profile" },
      { label: "Billing", href: "/billing" },
      { divider: true, label: "" },
      { label: "Keluar", onClick: () => handleLogout() },
    ],
  }}
/>
```

#### `<SpeedDialMenu />` (Floating Action Button / FAB)
Menu tombol melayang dengan animasi spring `motion/react`.

```tsx
import { SpeedDialMenu } from "@navatech/gaia-ui";

const fabActions = [
  {
    id: "create-doc",
    label: "Buat Catatan",
    icon: <span>📝</span>,
    onClick: () => handleCreateNote(),
  },
  {
    id: "upload",
    label: "Upload File",
    icon: <span>📤</span>,
    onClick: () => handleUpload(),
  },
];

<SpeedDialMenu
  items={fabActions}
  position="bottom-right"
  icon={<span>➕</span>}
/>
```

---

### 5.3 Base Data Display & Visualization

#### `<Table />` (Responsive Validated Data Table)
Tabel dengan validasi array 2D, fallback pesan kosong, dan proporsi lebar kolom.

```tsx
import { Table } from "@navatech/gaia-ui";

const columns = ["Nama Pengguna", "Role", "Status", "Aksi"];

const rows = [
  ["John Doe", "Administrator", "Aktif", <button key="1" className="text-blue-500">Edit</button>],
  ["Jane Smith", "Editor", "Pending", <button key="2" className="text-blue-500">Edit</button>],
  ["Bob Wilson", "Viewer", "Nonaktif", <button key="3" className="text-blue-500">Edit</button>],
];

<Table
  header={columns}
  data={rows}
  proportion={["35%", "25%", "20%", "20%"]}
  emptyMessage="Belum ada data member."
  emptyCellText="-"
/>
```

#### `<Avatar />` (User Avatar & Status Indicator)
Mendukung fallback inisial nama dengan warna konsisten berdasarkan string nama.

```tsx
import { Avatar } from "@navatech/gaia-ui";

// Menggunakan URL gambar
<Avatar
  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  alt="Sarah Connor"
  size="lg"
  status="online"
/>

// Menggunakan Fallback Initials nama
<Avatar
  name="Rizky Febian"
  size="md"
  status="busy"
/>
```

#### `<Pile />` (Badge / Pill Tag with Animation)

```tsx
import { Pile } from "@navatech/gaia-ui";

<Pile text="PRO" variant="solid" color="#8B1E24" size="xs" />
<Pile text="Online" variant="soft" color="#10b981" dot size="sm" />
<Pile text="Warning" variant="outline" color="#f59e0b" size="md" />
```

#### `<Stats />` (Bar Chart with Textured Patterns)
Grafik batang berbasis Chart.js dengan tekstur arsiran modern.

```tsx
import { Stats } from "@navatech/gaia-ui";

<Stats
  legend={["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"]}
  data={[
    [65, 59, 80, 81, 56, 95], // Dataset 1
    [45, 70, 60, 90, 75, 85], // Dataset 2
  ]}
  barColor={["#8B1E24", "#C67D30"]}
  orientation="vertical"
  size="md"
/>
```

#### `<LineChart />` (Trend Line Chart)

```tsx
import { LineChart } from "@navatech/gaia-ui";

const chartData = {
  labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
  datasets: [
    {
      label: "Pengunjung",
      data: [120, 190, 300, 500, 240, 350, 420],
      borderColor: "#8B1E24",
      backgroundColor: "rgba(139, 30, 36, 0.1)",
    },
  ],
};

<LineChart data={chartData} size="md" />
```

---

### 5.4 Anima Components (Pro Tier)

#### `<AnimaButton />`
Tombol premium dengan efek gradient dan integrasi palette Anima.

```tsx
import { AnimaButton } from "@navatech/gaia-ui";

<AnimaButton type="primary" text="Konfirmasi Pembayaran" gradient size="lg" />
<AnimaButton type="secondary" text="Batal" size="md" onClick={handleCancel} />
<AnimaButton type="opposite" text="Lihat Panduan" gradient size="sm" />
<AnimaButton type="disable" text="Tidak Tersedia" />
```

#### `<AnimaNavbar />`
Navbar premium dengan varian glassmorphism dan styling floating.

```tsx
import { AnimaNavbar } from "@navatech/gaia-ui";

<AnimaNavbar
  floating={true}
  navPosition="top"
  variant="gradient-glass" // 'hero' | 'hero-inverse' | 'glass' | 'gradient-glass' | 'surface'
  brandLogo={<span className="font-bold text-white tracking-wider">ZENITH</span>}
  navItems={[
    { label: "Fitur", to: "/features" },
    { label: "Harga", to: "/pricing" },
    { label: "Bantuan", to: "/help" },
  ]}
  ctaText="Mulai Gratis"
  onCtaClick={() => navigate({ to: "/register" })}
/>
```

#### `<AnimaToast />`
Notifikasi toast dengan countdown progress bar dan icon status otomatis.

```tsx
import { useState } from "react";
import { AnimaToast, Button } from "@navatech/gaia-ui";

export function NotificationDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Munculkan Toast</Button>

      <AnimaToast
        open={open}
        onClose={() => setOpen(false)}
        text="Perubahan profil Anda berhasil disimpan!"
        severity="success" // 'success' | 'error' | 'warning' | 'info'
        style="gradient"   // 'gradient' | 'glass' | 'solid'
        size="md"          // 'sm' | 'lg' | 'xl'
        duration={4000}    // Auto-close setelah 4 detik (ms)
      />
    </>
  );
}
```

#### `<AnimaPopup />`
Dialog modal interaktif dengan konfirmasi aksi.

```tsx
import { useState } from "react";
import { AnimaPopup, Button } from "@navatech/gaia-ui";

export function ModalDemo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setShowModal(true)}>
        Hapus Database
      </Button>

      <AnimaPopup
        open={showModal}
        onClose={() => setShowModal(false)}
        onAccept={() => {
          handleDeleteDatabase();
          setShowModal(false);
        }}
        header="Hapus Database Sekarang?"
        content="Tindakan ini permanen dan tidak dapat dipulihkan. Semua data relasional akan terhapus."
        severity="danger" // 'standard' | 'danger' | 'warning' | 'info' | 'success'
        variant="glass"   // 'gradient' | 'solid' | 'glass' | 'gradient-glass'
        size="md"
      />
    </>
  );
}
```

---

## 6. Template Lengkap: Contoh Implementasi Halaman Dashboard

Berikut contoh lengkap halaman yang menggabungkan berbagai komponen Gaia UI:

```tsx
import React, { useState } from "react";
import {
  LicenseProvider,
  Container,
  Navbar,
  Button,
  Stats,
  Table,
  Avatar,
  Pile,
  AnimaToast,
} from "@navatech/gaia-ui";

export default function DashboardPage() {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <LicenseProvider>
      <div className="min-h-screen bg-background-page text-text-body">
        {/* Navigation */}
        <Navbar
          brand={<span className="font-black text-xl text-palette-brand-primary">GAIA OPS</span>}
          data={[
            { title: "Ikhtisar", href: "/dashboard" },
            { title: "Pesanan", href: "/orders" },
            { title: "Laporan", href: "/reports" },
          ]}
          actions={
            <Button size="sm" variant="solid" onClick={() => setToastOpen(true)}>
              Sync Data
            </Button>
          }
        />

        {/* Main Content */}
        <Container maxWidth="xl" className="py-8 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-extrabold text-text-heading">Dashboard Performa</h1>
              <p className="text-text-muted text-sm mt-1">Pantau statistik server dan order bulanan Anda.</p>
            </div>
            <div className="flex items-center gap-3">
              <Avatar name="Admin Gaia" status="online" size="md" />
              <Pile text="Enterprise" variant="solid" color="#8B1E24" size="sm" />
            </div>
          </div>

          {/* Stats Bar Chart */}
          <div className="rounded-xl border border-container-card-border p-4 bg-container-card-bg shadow-sm">
            <h2 className="text-lg font-bold text-text-heading mb-4">Volume Transaksi (2026)</h2>
            <Stats
              legend={["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"]}
              data={[
                [120, 150, 180, 220, 200, 260],
                [80, 110, 130, 170, 150, 190],
              ]}
              barColor={["#8B1E24", "#C67D30"]}
              size="md"
            />
          </div>

          {/* Data Table */}
          <div className="rounded-xl border border-container-card-border overflow-hidden bg-container-card-bg">
            <div className="p-4 border-b border-container-card-border">
              <h2 className="text-lg font-bold text-text-heading">Log Aktivitas Terakhir</h2>
            </div>
            <Table
              header={["Pengguna", "Aksi", "Waktu", "Status"]}
              data={[
                ["Budi Santoso", "Deploy API v2.1", "10:30 WIB", <Pile text="Sukses" color="#15803D" variant="soft" dot size="xs" />],
                ["Siti Aminah", "Update Database", "09:15 WIB", <Pile text="Sukses" color="#15803D" variant="soft" dot size="xs" />],
                ["Rian Hidayat", "Backup Storage", "08:00 WIB", <Pile text="Warning" color="#D97706" variant="soft" dot size="xs" />],
              ]}
              proportion={["30%", "30%", "20%", "20%"]}
            />
          </div>
        </Container>

        {/* Feedback Notification */}
        <AnimaToast
          open={toastOpen}
          onClose={() => setToastOpen(false)}
          text="Sinkronisasi data sistem berhasil diperbarui!"
          severity="success"
          style="gradient"
          duration={3500}
        />
      </div>
    </LicenseProvider>
  );
}
```

---

## 7. Common Pitfalls & Solusi untuk AI / Developer

| Masalah | Penyebab | Solusi |
|---|---|---|
| **Komponen tidak memiliki styling / tidak ada warna** | Lupa mengimpor CSS library | Tambahkan `import "@navatech/gaia-ui/style.css";` di `main.tsx` atau root layout. |
| **Error: `useLicense must be used within a LicenseProvider` atau muncul `<ErrorLicense />`** | Menggunakan komponen Anima tanpa `<LicenseProvider>` atau belum redeem lisensi | Bungkus aplikasi dengan `<LicenseProvider>`. Jika belum berlisensi, jalankan `bunx gaia redeem <KEY>`. |
| **Error: `useLocation must be used within a RouterProvider`** | Komponen navigasi (`Navbar`, `NavTwo`, `SpeedDialMenu`, `AnimaNavbar`) dipakai di luar router `@tanstack/react-router` | Pastikan komponen dipanggil di dalam konteks route aktif `@tanstack/react-router`. |
| **Data `<Table />` tidak muncul atau error baris** | Format prop `data` bukan array 2 dimensi | `data` harus berbentuk matriks: `[ [cell1, cell2], [cell1, cell2] ]`. Pastikan panjang elemen tiap baris sesuai dengan panjang array `header`. |
| **Grafik `<Stats />` tidak tampil** | Array `data` tidak sinkron dengan `legend` | Setiap sub-array di dalam `data` (misal `data[0]`, `data[1]`) harus memiliki panjang yang sama dengan array `legend`. |

