'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { toast } from '@/hooks/use-toast'

export default function Page() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null as File | null,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, category: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, image: e.target.files![0] }))
        }
    }

    const validateForm = () => {
        if (formData.name.length < 2) {
            toast({
                title: 'Error',
                description: 'Product name must be at least 2 characters.',
                variant: 'destructive',
            })
            return false
        }
        if (formData.description.length < 10) {
            toast({
                title: 'Error',
                description: 'Product description must be at least 10 characters.',
                variant: 'destructive',
            })
            return false
        }
        if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
            toast({
                title: 'Error',
                description: 'Price must be a positive number.',
                variant: 'destructive',
            })
            return false
        }
        if (!formData.category) {
            toast({
                title: 'Error',
                description: 'Please select a product category.',
                variant: 'destructive',
            })
            return false
        }
        if (!formData.image) {
            toast({
                title: 'Error',
                description: 'Image is required.',
                variant: 'destructive',
            })
            return false
        }
        if (formData.image.size > 5000000) {
            toast({
                title: 'Error',
                description: 'Max image size is 5MB.',
                variant: 'destructive',
            })
            return false
        }
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
        if (!allowedTypes.includes(formData.image.type)) {
            toast({
                title: 'Error',
                description: 'Only .jpg, .jpeg, .png and .webp formats are supported.',
                variant: 'destructive',
            })
            return false
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return

        setIsSubmitting(true)
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Log the form data (replace with actual API call in production)
            console.log('Form data:', formData)

            toast({
                title: 'Product added successfully!',
                description: 'Your new product has been added to the catalog.',
            })

            // Redirect to products list page (adjust the route as needed)
            router.push('/products')
        } catch (error) {
            console.error('Error adding product:', error)
            toast({
                title: 'Error',
                description: 'There was a problem adding the product. Please try again.',
                variant: 'destructive',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="p-6 bg-gray-100 h-full">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter product name"
                    />
                    <p className="mt-2 text-sm text-gray-500">The name of your product as it will appear in the catalog.</p>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter product description"
                        className="resize-none"
                    />
                    <p className="mt-2 text-sm text-gray-500">Provide a detailed description of your product.</p>
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Enter product price"
                    />
                    <p className="mt-2 text-sm text-gray-500">Set the price for your product.</p>
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <Select onValueChange={handleSelectChange} value={formData.category}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="books">Books</SelectItem>
                            <SelectItem value="home">Home & Garden</SelectItem>
                            <SelectItem value="toys">Toys & Games</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="mt-2 text-sm text-gray-500">Choose the category that best fits your product.</p>
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
                    <Input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <p className="mt-2 text-sm text-gray-500">Upload a main image for your product. Max size: 5MB.</p>
                </div>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? 'Adding Product...' : 'Add Product'}
                </Button>
            </form>
        </div>
    )
}
