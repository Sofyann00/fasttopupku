import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - fasttopupku',
  description: 'Syarat dan ketentuan penggunaan layanan pulsa dan top-up fasttopupku',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600">
                Dengan mengakses dan menggunakan layanan pulsa dan top-up yang disediakan oleh PT SEGITIGA EKONOMI BANGSA (selanjutnya disebut "fasttopupku"), Anda menerima dan setuju untuk terikat dengan syarat dan ketentuan dalam perjanjian ini.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. Layanan Pulsa dan Top-Up
              </h2>
              <p className="text-gray-600">
                fasttopupku menyediakan layanan pulsa dan top-up termasuk pulsa semua operator, paket data, token listrik PLN, dan berbagai layanan pembayaran digital lainnya. Semua daftar layanan, termasuk harga, ketersediaan, dan spesifikasi, dapat berubah tanpa pemberitahuan sebelumnya. Kami menjamin keaslian dan validitas semua layanan yang disediakan melalui platform kami.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Pembelian dan Pengiriman
              </h2>
              <p className="text-gray-600">
                Semua pembelian tergantung pada ketersediaan dan persyaratan operator telekomunikasi. Pengiriman layanan biasanya instan tetapi dapat tergantung pada kondisi server operator dan waktu pemrosesan platform. Jika terjadi keterlambatan pengiriman, kami akan memberi tahu Anda dan memberikan update status pembelian. Pengembalian dana hanya tersedia sesuai dengan kebijakan pengembalian dana kami dan syarat operator.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Akun dan Penggunaan Informasi
              </h2>
              <p className="text-gray-600">
                Semua informasi nomor telepon dan data pribadi yang diberikan kepada fasttopupku akan diperlakukan dengan kerahasiaan ketat. Kami tidak akan mengungkapkan informasi Anda kepada pihak ketiga kecuali jika diperlukan oleh hukum atau dengan izin eksplisit Anda. fasttopupku dapat menggunakan data anonim untuk tujuan peningkatan layanan dan dukungan pelanggan.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-600">
                Meskipun kami menjamin keaslian layanan pulsa dan top-up kami, fasttopupku tidak bertanggung jawab atas kerusakan tidak langsung, insidental, khusus, konsekuensial, atau hukuman yang diakibatkan dari penggunaan layanan kami. Termasuk tetapi tidak terbatas pada masalah operator, masalah server, atau pembatasan khusus platform yang dapat mempengaruhi penggunaan layanan yang dibeli.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Tanggung Jawab Pengguna
              </h2>
              <p className="text-gray-600">
                Pengguna bertanggung jawab untuk memberikan informasi nomor telepon yang akurat dan memastikan kepatuhan dengan syarat layanan operator telekomunikasi. Pengguna harus memverifikasi semua pembelian sebelum menyelesaikan transaksi dan memberi tahu fasttopupku dengan segera jika ada masalah. fasttopupku tidak bertanggung jawab atas masalah nomor telepon yang diakibatkan oleh informasi yang salah yang diberikan oleh pengguna atau pelanggaran syarat operator.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7. Hukum yang Berlaku
              </h2>
              <p className="text-gray-600">
                Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan tunduk pada yurisdiksi eksklusif pengadilan di Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                8. Informasi Kontak
              </h2>
              <div className="text-gray-600">
                <p>Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami di:</p>
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