import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ProductList } from "@/components/ProductList"
export default function Products() {
    return (
        <div className="p-6 bg-gray-100 h-full ">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Products</h1>
                <Link href="/products/add">
                    <Button>Add New Product</Button>
                </Link>
            </div>
            <ProductList />
        </div>
    )
}
