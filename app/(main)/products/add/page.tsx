'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
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

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Product name must be at least 2 characters.',
    }),
    description: z.string().min(10, {
        message: 'Product description must be at least 10 characters.',
    }),
    price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: 'Price must be a positive number.',
    }),
    category: z.string({
        required_error: 'Please select a product category.',
    }),
    image: z
        .instanceof(FileList)
        .refine((files) => files.length > 0, 'Image is required.')
        .transform((files) => files[0])
        .refine((file) => file.size <= 5000000, `Max image size is 5MB.`)
        .refine(
            (file) =>
                ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(
                    file.type
                ),
            'Only .jpg, .jpeg, .png and .webp formats are supported.'
        ),
})

export default function Page() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            price: '',
            category: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Log the form data (replace with actual API call in production)
            console.log('Form data:', values)

            toast({
                title: 'Product added successfully!',
                description: 'Your new product has been added to the catalog.',
            })

            // Redirect to products list page (adjust the route as needed)
            router.push('/products')
        } catch (error) {
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
        <div className="p-6 bg-gray-100 h-full ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter product name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The name of your product as it will appear in the catalog.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter product description"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Provide a detailed description of your product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Enter product price"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>Set the price for your product.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="electronics">Electronics</SelectItem>
                                        <SelectItem value="clothing">Clothing</SelectItem>
                                        <SelectItem value="books">Books</SelectItem>
                                        <SelectItem value="home">Home & Garden</SelectItem>
                                        <SelectItem value="toys">Toys & Games</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Choose the category that best fits your product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field: { onChange, value, ...rest } }) => (
                            <FormItem>
                                <FormLabel>Product Image</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => onChange(e.target.files)}
                                        {...rest}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Upload a main image for your product. Max size: 5MB.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Adding Product...' : 'Add Product'}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
