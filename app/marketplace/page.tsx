import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Tax Consultation Services</h1>
        <p className="mt-2 text-gray-600">
          Navigate complex tax regulations and optimize your financial position with our comprehensive tax consultation services. From personal tax returns to corporate tax planning, 
          we offer expert guidance to ensure compliance, minimize liabilities, and develop strategic tax solutions tailored to your specific needs.
        </p>
        <p className="mt-2 text-gray-500 italic text-sm">
          *All prices are in IDR. Custom tax consultation packages available for specific financial requirements. Contact our team for detailed consultations.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}