"use client"

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Product {
    id: string
    name: string
    price: number
    stock: number
}

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        // Fetch products from your API here
        // For now, we'll use dummy data
        const dummyProducts: Product[] = [
            { id: '1', name: 'Product 1', price: 19.99, stock: 100 },
            { id: '2', name: 'Product 2', price: 29.99, stock: 50 },
            { id: '3', name: 'Product 3', price: 39.99, stock: 75 },
        ]
        setProducts(dummyProducts)
    }, [])

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

