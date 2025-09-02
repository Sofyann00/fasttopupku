import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - fasttopupku',
  description: 'Kebijakan Privasi untuk layanan pulsa dan top-up fasttopupku',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-gray-500 italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Informasi yang Kami Kumpulkan
              </h2>
              <p className="text-gray-600">
                fasttopupku mengumpulkan informasi pribadi termasuk namun tidak terbatas pada: nama, alamat email, nomor telepon, detail nomor yang akan diisi pulsa, informasi pembayaran, dan riwayat transaksi ketika Anda membeli pulsa, paket data, atau membuat akun di platform kami.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. Bagaimana Kami Menggunakan Informasi Anda
              </h2>
              <p className="text-gray-600">
                Kami menggunakan informasi Anda untuk:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                <li>Memproses pembelian pulsa dan paket data Anda</li>
                <li>Mengirim pulsa ke nomor telepon yang Anda tentukan</li>
                <li>Memberikan dukungan dan bantuan pelanggan</li>
                <li>Mengirim konfirmasi pembelian dan update transaksi</li>
                <li>Menyimpan catatan transaksi Anda</li>
                <li>Mengirim penawaran promosi dan update layanan (dengan persetujuan Anda)</li>
                <li>Meningkatkan layanan dan pengalaman pengguna kami</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Keamanan Data
              </h2>
              <p className="text-gray-600">
                Kami menerapkan langkah-langkah teknis dan organisasi yang kuat untuk melindungi informasi pribadi dan pembayaran Anda dari akses tidak sah, perubahan, pengungkapan, atau perusakan. Protokol keamanan kami memenuhi standar industri untuk transaksi online dan perlindungan data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Penyimpanan Data
              </h2>
              <p className="text-gray-600">
                Kami menyimpan informasi pribadi dan transaksi Anda selama diperlukan untuk memenuhi tujuan yang diuraikan dalam Kebijakan Privasi ini, dan sesuai dengan hukum yang berlaku. Catatan transaksi biasanya disimpan minimum 5 tahun untuk mematuhi peraturan keuangan dan membantu dengan pertanyaan atau sengketa potensial.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Hak Anda
              </h2>
              <p className="text-gray-600">
                Berdasarkan hukum perlindungan data Indonesia, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                <li>Mengakses data pribadi dan riwayat transaksi Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Meminta penghapusan data Anda (tunduk pada persyaratan hukum)</li>
                <li>Menolak pemrosesan data Anda</li>
                <li>Menarik persetujuan untuk komunikasi pemasaran</li>
                <li>Meminta pembatasan cara kami menggunakan informasi Anda</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Cookie dan Pelacakan
              </h2>
              <p className="text-gray-600">
                Kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman Anda di platform kami, mengingat preferensi Anda, mempertahankan status login, menganalisis lalu lintas situs, dan memberikan rekomendasi layanan yang dipersonalisasi berdasarkan riwayat pembelian Anda.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7. Layanan Pihak Ketiga
              </h2>
              <p className="text-gray-600">
                Kami dapat menggunakan prosesor pembayaran pihak ketiga dan layanan operator telekomunikasi untuk memfasilitasi transaksi. Layanan ini memiliki kebijakan privasi dan praktik data mereka sendiri. Kami mendorong Anda untuk meninjau kebijakan mereka untuk memahami bagaimana mereka menangani informasi Anda.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                8. Informasi Kontak
              </h2>
              <div className="text-gray-600">
                <p>Untuk pertanyaan tentang Kebijakan Privasi ini atau praktik data kami, silakan hubungi kami di:</p>
                <div className="mt-2">
                  <p>PT SEGITIGA EKONOMI BANGSA</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: admin@fasttopupku.com</p>
                  <p>Phone: (021) 52067542</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 