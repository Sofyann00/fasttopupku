"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useFilter } from "@/contexts/filter-context"
import { products } from "@/lib/data"

// Get unique categories and brands from products
const categories = Array.from(new Set(products.map(product => product.category)))
const brands = Array.from(new Set(products.map(product => {
  // Extract brand from product name (assuming format "BRAND ProductName")
  return product.name.split(' ')[0]
})))

export function ProductFilters() {
  const { selectedCategories, selectedBrands, toggleCategory, toggleBrand } = useFilter()

  return (
    <div className="hidden lg:block">
      <h2 className="text-lg font-semibold">Filters</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={category} 
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox 
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  />
                  <Label htmlFor={brand}>{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </div>
  )
}