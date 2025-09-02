import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - fasttopupku',
  description: 'Penyedia pulsa dan paket data terpercaya di Indonesia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            About fasttopupku
          </h1>
          <p className="text-sm text-gray-500 italic mb-8">
            Penyedia Pulsa dan Paket Data Terpercaya di Indonesia
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Our Story
              </h2>
              <p className="text-gray-600">
                Didirikan dengan visi menyediakan layanan telekomunikasi yang mudah dan terpercaya, fasttopupku telah menjadi penyedia pulsa dan paket data terkemuka di Indonesia. Perjalanan kami dimulai dengan misi sederhana: memberikan layanan top-up pulsa yang cepat, aman, dan terpercaya. Dari tim kecil yang berdedikasi, kini kami telah berkembang menjadi platform terpercaya yang melayani ribuan pelanggan di seluruh Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Why Choose Us
              </h2>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>Pengisian Pulsa Instan ke Semua Operator</li>
                <li>Paket Data dengan Harga Kompetitif</li>
                <li>Metode Pembayaran yang Aman</li>
                <li>Layanan Pelanggan 24/7</li>
                <li>Harga Terjangkau dan Transparan</li>
                <li>Dipercaya Ribuan Pelanggan</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Our Commitment
              </h2>
              <p className="text-gray-600">
                Di fasttopupku, kami berkomitmen memberikan pengalaman terbaik dalam layanan telekomunikasi. Kami memahami pentingnya layanan top-up yang cepat dan terpercaya untuk kebutuhan komunikasi sehari-hari. Tim kami bekerja keras memastikan pengisian pulsa instan, transaksi aman, dan dukungan pelanggan yang prima. Kami bangga membangun kepercayaan dengan komunitas pengguna dan memastikan kepuasan melalui layanan yang andal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Our Services
              </h2>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>Pulsa Semua Operator (Telkomsel, XL, Indosat, Tri, Smartfren)</li>
                <li>Paket Data Internet</li>
                <li>Token Listrik PLN</li>
                <li>BPJS Kesehatan</li>
                <li>Tagihan PDAM</li>
                <li>Voucher Game dan Digital</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Office Location
              </h2>
              <div className="text-gray-600">
                <p>Visit our office:</p>
                <div className="mt-2">
                  <p>PT SEGITIGA EKONOMI BANGSA</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Kode Pos: 13120</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Support Hours
              </h2>
              <div className="text-gray-600 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Weekends:</p>
                  <p>10:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Information
              </h2>
              <div className="text-gray-600">
                <p>Get in touch with our support team:</p>
                <div className="mt-2 space-y-1">
                  <p>Phone: (021) 52067542</p>
                  <p>Email: admin@fasttopupku.com</p>
                  <p>WhatsApp: +62 812-8845-8953</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 