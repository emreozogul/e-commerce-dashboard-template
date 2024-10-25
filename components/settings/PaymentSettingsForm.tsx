import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'

export const PaymentSettingsForm = ({ onSubmit, isSubmitting }: { onSubmit: (data: Record<string, string | boolean>) => void, isSubmitting: boolean }) => {
    const [formData, setFormData] = useState({
        stripeEnabled: false,
        paypalEnabled: false,
        stripePublishableKey: '',
        stripeSecretKey: '',
        paypalClientId: '',
        paypalSecret: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>
                    Configure your store&apos;s payment gateways.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label htmlFor="stripeEnabled">Enable Stripe</label>
                            <p className="text-sm text-gray-500">Accept payments via Stripe.</p>
                        </div>
                        <Switch
                            id="stripeEnabled"
                            name="stripeEnabled"
                            checked={formData.stripeEnabled}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, stripeEnabled: checked }))}
                        />
                    </div>
                    {formData.stripeEnabled && (
                        <>
                            <div>
                                <label htmlFor="stripePublishableKey">Stripe Publishable Key</label>
                                <Input
                                    id="stripePublishableKey"
                                    name="stripePublishableKey"
                                    value={formData.stripePublishableKey}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="stripeSecretKey">Stripe Secret Key</label>
                                <Input
                                    id="stripeSecretKey"
                                    name="stripeSecretKey"
                                    type="password"
                                    value={formData.stripeSecretKey}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}
                    <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label htmlFor="paypalEnabled">Enable PayPal</label>
                            <p className="text-sm text-gray-500">Accept payments via PayPal.</p>
                        </div>
                        <Switch
                            id="paypalEnabled"
                            name="paypalEnabled"
                            checked={formData.paypalEnabled}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, paypalEnabled: checked }))}
                        />
                    </div>
                    {formData.paypalEnabled && (
                        <>
                            <div>
                                <label htmlFor="paypalClientId">PayPal Client ID</label>
                                <Input
                                    id="paypalClientId"
                                    name="paypalClientId"
                                    value={formData.paypalClientId}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="paypalSecret">PayPal Secret</label>
                                <Input
                                    id="paypalSecret"
                                    name="paypalSecret"
                                    type="password"
                                    value={formData.paypalSecret}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}
                    <p className="text-sm text-gray-500">Don&apos;t worry, your API keys are securely stored.</p>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Saving...' : 'Save Payment Settings'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
