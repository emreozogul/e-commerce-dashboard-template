"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function AddProductForm() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProduct(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the product data to your backend
        console.log("Submitting product:", product)
        // Reset form after submission
        setProduct({ name: "", description: "", price: "", stock: "" })
    }

    return (
        <Card >
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 p-4">
                    <div>
                        <Label htmlFor="name">Product Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            step="0.01"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="stock">Stock</Label>
                        <Input
                            id="stock"
                            name="stock"
                            type="number"
                            min="0"
                            value={product.stock}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit">Add Product</Button>

                </CardContent>
            </form>
        </Card>
    )
}

