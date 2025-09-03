import Link from "next/link";
import { Mail, Phone, MapPin, PlugZap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-md bg-gray-900 text-white flex items-center justify-center">
                <PlugZap className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold text-gray-900">fasttopupku</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-md">
              Platform untuk pembelian token listrik PLN dan pulsa semua operator. Cepat, aman, dan sederhana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">Tentang Kami</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Syarat & Ketentuan</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Kebijakan Privasi</Link></li>
              <li><Link href="/help" className="text-gray-600 hover:text-gray-900">Pusat Bantuan</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:admin@fasttopupku.com" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                  <span className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </span>
                  admin@fasttopupku.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6285811959392" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                  <span className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </span>
                  +62 851-2328-6761
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-sm leading-relaxed">
                  Gedung Is Plaza Lt. 5<br />
                  Jl Pramuka Kav 150, Utan Kayu Utara, Matraman<br />
                  Jakarta Timur 13120
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} PT SEGITIGA EKONOMI BANGSA. Semua hak dilindungi.</p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Link href="/terms" className="hover:text-gray-700">Terms</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
