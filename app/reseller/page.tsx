import Image from "next/image";

export default function ResellerPage() {
  return (
    <div className="max-w-3xl mx-auto w-full mb-20 px-2 sm:px-0 mt-10">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 mb-8">
        <div className="relative w-full h-56 sm:h-80">
          <Image
            src="/reseller_banner.png"
            alt="Reseller Program fasttopupku.com"
            fill
            className="object-cover w-full h-full"
            style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
            priority
          />
        </div>
      </div>
      <article className="bg-white rounded-2xl shadow p-6 sm:p-10 border border-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">Program Reseller fasttopupku.com</h1>
        <p className="text-lg text-gray-700 mb-4">
          Selamat datang di program reseller <b>fasttopupku.com</b>! Kami membuka peluang bagi Anda yang ingin menjadi mitra bisnis dalam penjualan voucher game, top up, dan produk digital lainnya dengan harga spesial reseller.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Harga khusus reseller untuk semua produk</li>
          <li>Proses transaksi mudah dan cepat</li>
          <li>Dukungan customer service profesional</li>
          <li>Pengiriman otomatis 24 jam</li>
        </ul>
        <p className="text-lg text-gray-700">
          Daftar sekarang dan mulai tingkatkan penghasilan Anda bersama kami! Untuk informasi lebih lanjut dan pendaftaran, silakan hubungi tim kami melalui kontak yang tersedia di website.
        </p>
      </article>
    </div>
  );
} 