'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from '@/hooks/use-toast'
import { StoreConfigForm, PaymentSettingsForm, TaxSettingsForm } from '@/components/settings'

type SettingsFormValues = {
    [key: string]: string | number | boolean;
}

export default function AdminSettingsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function onSubmit(values: SettingsFormValues) {
        setIsSubmitting(true)
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log('Form data:', values)
            toast({
                title: 'Settings updated successfully!',
                description: 'Your changes have been saved.',
            })
        } catch (error) {
            console.error('Error updating settings:', error)
            toast({
                title: 'Error',
                description: 'There was a problem updating the settings. Please try again.',
                variant: 'destructive',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="py-10 px-4 max-w-screen-xl mx-auto bg-gray-100 h-full">
            <Tabs defaultValue="store" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="store">Store Configuration</TabsTrigger>
                    <TabsTrigger value="payment">Payment Settings</TabsTrigger>
                    <TabsTrigger value="tax">Tax Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="store">
                    <StoreConfigForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
                </TabsContent>
                <TabsContent value="payment">
                    <PaymentSettingsForm
                        onSubmit={onSubmit}
                        isSubmitting={isSubmitting}
                    />
                </TabsContent>
                <TabsContent value="tax">
                    <TaxSettingsForm
                        onSubmit={onSubmit}
                        isSubmitting={isSubmitting}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}
