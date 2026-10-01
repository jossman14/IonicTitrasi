# IonicTitrasi — Chemistry is Fun

Aplikasi media pembelajaran kimia (Ionic + Angular) dengan materi **titrasi asam basa** (KD 3.13 dan 4.13).

## Fitur Utama
- KD dan IPK (indikator pencapaian kompetensi)
- Materi: pengenalan, titrasi, indikator asam basa, indikator alami, indikator buatan, titik ekuivalen, kurva titrasi, praktikum, video
- Uji pemahaman
- Kalkulator
- Halaman pengembang

## Tech Stack
Ionic 5, Angular 8, Cordova (platform `browser`, `cordova-android` 8.1.0), PWA (`@angular/pwa`).

## Struktur Ringkas
- `src/app/` — halaman: `main-menu`, `kd`, `ipk`, `materi/*`, `uji`, `kalkulator`, `pengembang`
- `src/assets/` — gambar dan ikon
- `resources/` — ikon/splash untuk Cordova
- `config.xml` — konfigurasi Cordova

## Menjalankan
```bash
npm install
npm start        # ng serve
npm run build    # hasil build ke www/
```
