"use client"

import { useState } from "react"
import { useUser } from "@/contexts/user-context"
import { User, LogOut, Search, Menu, X, PlugZap } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/data"

export function Navbar() {
  const { user, logout } = useUser()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    setShowSearchResults(query.length > 0)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gray-900 text-white flex items-center justify-center">
              <PlugZap className="w-4 h-4" />
            </div>
            <span className="text-base font-semibold text-gray-900">fasttopupku</span>
          </Link>

          {/* Search and Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-64 px-3 py-2 pl-9 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-300"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

              {showSearchResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 max-h-80 overflow-y-auto z-50">
                  {filteredProducts.length > 0 ? (
                    <div className="p-1">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
                          onClick={() => {
                            setSearchQuery("")
                            setShowSearchResults(false)
                          }}
                        >
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                            <p className="text-[11px] text-gray-500 truncate capitalize">{product.category.replace('-', ' ')}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-500">Tidak ada layanan ditemukan</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-50 border border-gray-200">
                      <div className="w-7 h-7 rounded bg-gray-900 text-white flex items-center justify-center">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <span className="hidden sm:block text-sm font-medium text-gray-900">{user.name}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Profile Saya</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        logout()
                        router.push("/")
                      }}
                      className="cursor-pointer text-red-600"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="text-sm">Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login" className="hidden md:inline-block text-sm px-3 py-1.5 rounded border border-gray-200 text-gray-700 hover:bg-gray-50">
                    Masuk
                  </Link>
                  <Link href="/register" className="hidden md:inline-block text-sm px-3 py-1.5 rounded bg-gray-900 text-white">
                    Daftar
                  </Link>
                </>
              )}

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded hover:bg-gray-50 border border-gray-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-3 py-2 pl-9 bg-gray-50 border border-gray-200 rounded-md text-sm"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              {showSearchResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow border border-gray-200 max-h-72 overflow-y-auto z-50">
                  {filteredProducts.length > 0 ? (
                    <div className="p-1">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="flex items-center gap-3 p-2 rounded hover:bg-gray-50"
                          onClick={() => {
                            setSearchQuery("")
                            setShowSearchResults(false)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          <div className="relative w-8 h-8 flex-shrink-0">
                            <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                            <p className="text-[11px] text-gray-500 truncate capitalize">{product.category.replace('-', ' ')}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-500">Tidak ada layanan ditemukan</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 p-2 text-sm rounded hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4 text-gray-500" />
                    Profile Saya
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      router.push("/")
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full flex items-center gap-2 p-2 text-sm text-red-600 rounded hover:bg-gray-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center justify-center p-2 text-sm rounded border border-gray-200 text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Masuk ke Akun
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-center p-2 text-sm rounded bg-gray-900 text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Daftar
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}