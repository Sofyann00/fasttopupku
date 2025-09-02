"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'
import { products, formatPrice } from "@/lib/data"
import { useFilter } from "@/contexts/filter-context"

export function ProductGrid() {
  const { selectedCategories, selectedBrands } = useFilter()

  const filteredProducts = products.filter(product => {
    const brand = product.name.split(' ')[0]
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand)
    return categoryMatch && brandMatch
  })

  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card className="transition-transform hover:scale-[1.02]">
              <CardHeader className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
                <p className="text-lg font-bold mt-2">{formatPrice(product.price)}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}