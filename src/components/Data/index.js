import Siswa from '../../assets/untuksiswa.png';
import Ortu from '../../assets/untukortu.png';
import Tamu from '../../assets/untuktamu.png';
import Belajar from '../../assets/fitur/belajargokre.png';
import Berlatih from '../../assets/fitur/berlatihgokre.png';
import Bertanding from '../../assets/fitur/bertandinggokre.png';
export const dataUntukSiapa = [
  {
    Untuk: <>Untuk Siswa</>,
    Content: (
      <>
        Secara pasti, aplikasi ini akan memberikan manfaat besar
        sebagai pendukung dalam proses pembelajaran SobatGO. Dengan
        hanya menggunakan satu aplikasi ini, SobatGO dapat mengakses
        berbagai fitur dan fasilitas, termasuk pencatatan kehadiran,
        status pembayaran, serta beragam fasilitas penunjang belajar
        yang dapat digunakan oleh SobatGO di mana pun dan kapan pun.
      </>
    ),
    Image: Siswa,
  },
  {
    Untuk: <>Untuk Orang Tua</>,
    Content: (
      <>
        Tidak hanya SobatGO saja yang bisa merasakan fasilitas terbaik
        dari aplikasi GO Kreasi, orang tuamu juga bisa tahu
        perkembangan belajar SobatGO melalui aplikasi GO Kreasi. Semua
        jadwal belajarmu hingga laporan dari hasil berlatih dan
        bertanding SobatGO bisa diketahui melalui aplikasi GO Kreasi
        orang tua. Selain itu, orang tuamu juga bisa memantau
        kehadiran dan status pembayaran bimbel SobatGO juga, lho!
      </>
    ),
    Image: Ortu,
  },
  {
    Untuk: <>Untuk Tamu</>,
    Content: (
      <>
        Buat kamu yang masih ragu untuk gabung bersama Bimbel Ganesha
        Operation, yuk, unduh dulu aplikasi GO Kreasi ini dan masuk
        sebagai akun tamu! Kamu bisa lihat beragam fitur dan fasilitas
        di dalamnya, dan memberikan gambaran tentang seberapa luar
        biasa dan kerennya Bimbel Ganesha Operation dan juga aplikasi
        GO Kreasi.
      </>
    ),
    Image: Tamu,
  },
];

export const fiturGokre = [
  {
    Title: <>Belajar</>,
    Detail: [
      {
        header: (
          <>
            <p>
              <i>Profiling </i>GOA dan VAK
            </p>
          </>
        ),
        content: (
          <>
            Pada fitur <i>Profiling</i> terdapat dua tes yang
            bertujuan untuk pengumpulan, analisis, dan interpretasi
            data tentang SobatGO untuk memahami karakteristik, dan
            gaya belajarmu. Tujuannya untuk menghasilkan informasi
            untuk merancang pengalaman pembelajaran yang lebih efektif
            dan sesuai dengan kebutuhan SobatGO. Kedua alat tes
            tersebut merupakan GO <i>Assesment</i> yang mana GO
            <i>Assesment</i> bertujuan untuk mengukur pemahaman dan
            keterampilan SobatGO dalam hal hitungan matematika dasar,
            namun tenang aja SobatGO GOA bukanlah ujian akademis untuk
            menentukan apakah SobatGO bisa bergabung atau tidak dengan
            GO. Lalu ada juga tes Modalitas, yaitu tes yang bertujuan
            untuk mengetahui gaya belajar atau cara paling sesuai bagi
            SobatGO dalam menyerap pelajaran dengan mudah, apakah
            SobatGO memiliki gaya belajar tipe Visual, <i>Auditory</i>
            , atau Kinestetik. Makanya pengajar GO dalam mengajar akan
            mengakomodir 3 gaya belajar tersebut.
          </>
        ),
      },
      {
        header: <>Teori (Buku Teori dan Rumus) </>,
        content: (
          <>
            Pada fitur Profiling terdapat dua tes yang bertujuan untuk
            pengumpulan, analisis, dan interpretasi data tentang
            SobatGO untuk memahami karakteristik, dan gaya belajarmu.
            Tujuannya untuk menghasilkan informasi untuk merancang
            pengalaman pembelajaran yang lebih efektif dan sesuai
            dengan kebutuhan SobatGO. Kedua alat tes tersebut
            merupakan GO Assesment yang mana GO Assesment bertujuan
            untuk mengukur pemahaman dan keterampilan SobatGO dalam
            hal hitungan matematika dasar, namun tenang aja SobatGO
            GOA bukanlah ujian akademis untuk menentukan apakah
            SobatGO bisa bergabung atau tidak dengan GO. Lalu ada juga
            tes Modalitas, yaitu tes yang bertujuan untuk mengetahui
            gaya belajar atau cara paling sesuai bagi SobatGO dalam
            menyerap pelajaran dengan mudah.
            <ul className="list-outside list-disc w-[90%] mx-auto">
              <li>
                Buku Teori berisi teori singkat, contoh soal, dan soal
                latihan yang sama persis dengan Buku KODING. Jadi menu
                Buku Teori ini berisi bab dan subbab dari
                materi-materi yang relevan sesuai dengan tingkat kelas
                dan kurikulum lho, setiap teori dilengkapi dengan
                contoh soal, latihan soal, dan soal mandiri yang
                relevan serta bisa diselesaikan melalui dua metode
                yaitu konsep dasar dan konsep The King. Oh iya, teori
                tersebut dilengkapi juga sama video pembelajaran yang
                menarik dan mudah dipahami juga lho.
              </li>
              <li>
                Buku Rumus berisikan rumus-rumus yang lengkap banget
                dan digunakan untuk seluruh mata pelajaran, SobatGO
                dapat memanfaatkannya jika lupa rumus saat mengerjakan
                soal sekaligus me-<i>review</i> juga kembali
                rumus-rumus yang akan digunakan untuk menjawab soal.
              </li>
            </ul>
          </>
        ),
      },

      {
        header: 'Jadwal dan Video',
        content: (
          <>
            Pada fitur ini terdapat menu penting yang menunjang proses
            pembelajaran SobatGO, yaitu:
            <ul className="list-outside list-disc w-[90%] mx-auto">
              <li>
                Jadwal, menu ini memberikan informasi lengkap kepada
                SobatGO seputar jadwal KBM pada minggu depan maupun
                minggu berjalan, termasuk hari, jam, mata pelajaran,
                pertemuan, dan pengajar. Selain itu, menu ini juga
                dapat dilihat oleh orang tua.
              </li>
              <li>
                Video, pada menu ini SobatGO akan difasilitasi dengan
                berbagai video pembelajaran yang relevan dengan
                materi. Video tersebut diajarkan oleh
                pengajar-pengajar terbaik GO namun ada juga video yang
                ditampilkan berupa video animasi juga lho. Video
                tersebut dapat SobatGO nikmati selama 1 tahun, dari
                semester 1 dan semester 2.
              </li>
              <li>
                TST Super, menu ini memungkinkan SobatGO untuk
                mengetahui dan memanfaatkan jadwal serta kesediaan TST
                Super secara efektif, maka dengan adanya fitur pada
                tersebut pada aplikasi GO Kreasi SobatGO bisa
                mendapatkan pendampingan 24 jam. Jika SobatGO masih
                kurang paham saat mengerjakan soal GO Kreasi akan
                membantu SobatGO lebih memahami materi melalui{' '}
                <b>Sobat Tips.</b> Selain itu siswa juga bisa belajar
                melalui fitur video pembelajaran. Oh iya, setiap soal
                yang sudah SobatGO kerjakan dan selesai maka akan
                dimunculkan solusi dan video pembahasan.
              </li>
            </ul>
          </>
        ),
      },
      {
        header: 'Rencana Belajar',
        content: (
          <>
            Menu ini membantu SobatGO dalam merencanakan kegiatan
            belajar sehari-hari, seperti mengerjakan soal, belajar
            melalui video pembelajaran, TOBK, dll. Intinya rencana
            belajar ini bertujuan untuk mengimplementasikan 3B:
            BELAJAR, BERLATIH, dan BERTANDING dengan menentukan
            tanggal, waktu, dan kegiatan yang dilakukan (
            <i>time management</i>).
          </>
        ),
      },
    ],
    ImgCover: Belajar,
  },
  {
    Title: <>Berlatih</>,
    Detail: [
      {
        header: 'Buku Soal',
        content: (
          <>
            Fitur Buku Soal pada bagian Berlatih ini merupakan
            kumpulan soal yang lengkap banget sebagai bahan SobatGO
            untuk dapat berlatih di mana saja dan kapan saja. Pada
            fitur ini terdapat Buku Sakti, Soal KODING, Paket
            Intensif, Pendalaman Materi, Soal Referensi, <i>Racing</i>
            Soal, Kuis.
            <ul className="list-outside list-disc w-[90%] mx-auto">
              <li>
                <b className="font-semibold">Buku Sakti</b>
                merupakan soal yang disajikan secara global per mata
                pelajaran dan per bab dan bahkan sebagian soal diambil
                dari ujian seleksi PTN tahun-tahun sebelumnya yang
                terbagi dalam Latihan Extra, Empati Wajib (soal yang
                disajikan sebagai prasyarat TOBK), dan Empati Mandiri.
              </li>
              <li>
                <b className="font-semibold">Soal KODING</b>
                adalah soal-soal yang terdapat pada Buku KODING, namun
                ditampilkan terpisah jadi SobatGO bisa mengerjakan
                soalnya di fitur ini.
              </li>
              <li>
                <b className="font-semibold">Paket Intensif</b>
                ini adalah soal yang dibuat untuk SobatGO dalam
                persiapan menghadapi UTBK-SBMPTN.
              </li>
              <li>
                SobatGO juga akan mendapatkan soal-soal yang disiapkan
                sebagai
                <b className="font-semibold">Pendalaman Materi.</b>
              </li>
              <li>
                Saat SobatGO menghadapi PTS, PAS, dan PAT fitur Soal
                Referensi ini disiapkan juga buat kamu, lho!
                <b className="font-semibold">Soal Referensi</b>
              </li>
              <li>
                <b className="font-semibold">Buku Sakti</b>
              </li>
              <li>
                Fitur
                <b className="font-semibold">
                  <i>Racing</i> Soal
                </b>
                ini menyajikan soal yang memiliki batasan waktu dengan
                metode<i> blocking time</i>, sehingga soal yang
                dikerjakan harus diselesaikan dalam durasi yang telah
                ditentukan.
              </li>
              <li>
                Nah kalau fitur <b>Kuis</b> ini adalah fitur berlatih
                untuk SobatGO yang masih kelas awal, yaitu kelas 7, 8,
                10, dan 11, tentunya mengikuti bab yang ada.
              </li>
            </ul>
          </>
        ),
      },
      {
        header: 'Laporan',
        content: (
          <>
            Fitur ini menampilkan hasil-hasil dari latihan yang sudah
            SobatGO kerjakan sebelumnya melalui aplikasi GO Kreasi,
            seperti hasil dari VAK, TOBK, dan Kuis. Oh iya, laporan
            presensi dan aktivitas SobatGO juga ada di sini, lho.
            Laporan aktivitas tersebut akan mencatat setiap kegiatan
            SobatGO pada GO Kreasi, seperti pengerjaan soal, mendalami
            pelajaran melalui video pembelajaran & teori, pengerjaan
            TOBK, dan pengerjaan <i>profiling.</i> Aktivitas ini bisa
            SobatGO lihat harian maupun mingguan.
          </>
        ),
      },
    ],
    ImgCover: Berlatih,
  },
  {
    Title: <>Bertanding</>,
    Detail: [
      {
        header: 'TOBK',
        content: (
          <>
            <i> Try Out</i> Berbasis Komputer Ganesha Operation
            merupakan salah satu fasilitas unggulan yang SobatGO akan
            dapatkan pada aplikasi GO Kreasi, karena dengan TOBK GO
            akan membantu kamu dalam mempersiapkan diri menghadapi
            ujian sekolah atau UTBK-SNBT dengan simulasi ujian yang
            relevan dengan materi ujian kamu di sekolah. SobatGO ingin
            tahu lebih detail soal TOBK GO?
            <a
              className="text-red-600"
              href="https://ganeshaoperation.com/bimbel/tobk/cek"
              target="_blank"
            >
              &nbsp; Cek di sini saja ya.
            </a>
          </>
        ),
      },
      {
        header: 'SNBT',
        content: (
          <>
            Dalam fitur ini terdapat PTN-Clopedia dan Simulasi, yang
            mana fitur ini dapat membantu SobatGO untuk mengetahui
            deskripsi dari prodi PTN yang SobatGO pilih, termasuk
            mengetahui peluang kelulusan SobatGO lulus ke PTN impian
            melalui menu Simulasi.
            <ul className="list-outside list-disc w-[90%] mx-auto">
              <li>
                PTN-Clopedia berisi informasi tentang program studi
                PTN, meliputi tingkat persaingan, deskripsi program
                studi PTN, dan peluang kerja.
              </li>
              <li>
                Simulasi bertujuan untuk mengetahui prediksi peluang
                lulus pada SNBT sesuai dengan program studi yang
                dipilih, menu ini pun mengakomodir pembobotan
                masing-masing komponen/mata pelajaran atau sub tes.
              </li>
            </ul>
          </>
        ),
      },
    ],
    ImgCover: Bertanding,
  },
];

export const testimoniGokre = [
  {
    Nama: 'Nabila Amalia Wahyuni',
    Diterima: 'FK - UI',
    Testimoni:
      'Fasilitas TOBK yang ada di aplikasi GO Kreasi membantu saya melihat progres dari grafik nilai untuk dapat lolos ke Fakultas Kedokteran UI, juga di GO Kreasi bisa berlatih soal-soal yang mirip UTBK-SNBT',
    Additional: 'Peraih Skor Penalaran Matematika dengan Nilai 1.000',
    Link: 'https://www.youtube.com/embed/m5_-zj-ILbc?start=203&end=240',
  },
  {
    Nama: 'M. Farouq Al-Farisi',
    Diterima: 'Teknik Geologi-Unpa',
    Testimoni:
      'Buku Teori di aplikasi GO Kreasi itu materinya lebih ringkas dan juga lebih detail untuk dapat dimengerti saat belajar',
    Additional: '(Mahasiswa Termuda Unpad 2023)',
    Link: 'https://www.youtube.com/embed/XWxF_FCeg08?start=354&end=370',
  },
  {
    Nama: 'Putri Nabila',
    Diterima: 'Sekolah Farmasi-ITB',
    Testimoni:
      'Buku Teori di aplikasi GO Kreasi itu materinya lebih ringkas dan juga lebih detail untuk dapat dimengerti saat belajar.',
    Link: 'https://www.youtube.com/embed/SO_bnv_KQQ8?start=162&end=172',
  },
  {
    Nama: 'Gemi Nastiti Deandaru Putri',
    Diterima: 'SAPPK-ITB',
    Testimoni:
      'GO membantu banget sih, apalagi pas pandemi beberapa waktu lalu dengan adanya aplikasi GO Kreasi bantu banget aku untuk mengerjakan PR dari rumah karena materinya sudah disiapkan di dalam aplikasi GO Kreasi, pembahasannya pun lengkap banget, pokoknya materinya itu lengkap!',
    Link: 'https://www.youtube.com/embed/A1bJg5eZLA0?start=350&end=369',
  },
];
