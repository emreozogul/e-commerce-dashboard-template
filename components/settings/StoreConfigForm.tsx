import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Button, Input, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'

type StoreConfigFormProps = {
    onSubmit: (data: any) => void
    isSubmitting: boolean
}

export const StoreConfigForm = ({ onSubmit, isSubmitting }: StoreConfigFormProps) => {
    const [formData, setFormData] = useState({
        storeName: '',
        storeUrl: '',
        supportEmail: '',
        defaultCurrency: '',
        orderPrefix: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Store Configuration</CardTitle>
                <CardDescription>Manage your store&apos;s basic information and settings.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="storeName">Store Name</label>
                        <Input
                            id="storeName"
                            name="storeName"
                            value={formData.storeName}
                            onChange={handleChange}
                            placeholder="My Awesome Store"
                        />
                        <p>This is the name that will be displayed to your customers.</p>
                    </div>
                    {/* Add other form fields here */}
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
