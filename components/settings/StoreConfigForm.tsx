import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { Button, Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Input, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'

export const storeConfigSchema = z.object({
    storeName: z.string().min(2, { message: 'Store name must be at least 2 characters.' }),
    storeUrl: z.string().url({ message: 'Please enter a valid URL.' }),
    supportEmail: z.string().email({ message: 'Please enter a valid email address.' }),
    defaultCurrency: z.string().min(1, { message: 'Please select a default currency.' }),
    orderPrefix: z.string().min(1, { message: 'Order prefix is required.' }),
})

type StoreConfigFormProps = {
    onSubmit: (data: z.infer<typeof storeConfigSchema>) => void
    isSubmitting: boolean
}

export const StoreConfigForm = ({ onSubmit, isSubmitting }: StoreConfigFormProps) => {
    const form = useForm<z.infer<typeof storeConfigSchema>>({
        resolver: zodResolver(storeConfigSchema),
        defaultValues: {
            storeName: '',
            storeUrl: '',
            supportEmail: '',
            defaultCurrency: '',
            orderPrefix: '',
        },
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Store Configuration</CardTitle>
                <CardDescription>Manage your store&apos;s basic information and settings.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="storeName"
                            render={({ field }: { field: any }) => (
                                <FormItem>
                                    <FormLabel>Store Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="My Awesome Store" {...field} />
                                    </FormControl>
                                    <FormDescription>This is the name that will be displayed to your customers.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Add other form fields here */}
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isSubmitting ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
