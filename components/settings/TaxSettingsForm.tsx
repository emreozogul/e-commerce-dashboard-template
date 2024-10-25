import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'

type TaxSettingsFormProps = {
    onSubmit: (data: Record<string, string | number>) => void
    isSubmitting: boolean
}

export function TaxSettingsForm({ onSubmit, isSubmitting }: TaxSettingsFormProps) {
    const [formData, setFormData] = useState({
        enableTax: false,
        taxRate: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? parseFloat(value) : value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            enableTax: formData.enableTax ? '1' : '0',
            taxRate: formData.taxRate.toString()
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tax Settings</CardTitle>
                <CardDescription>
                    Configure tax rates for your store.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label htmlFor="enableTax">Enable Tax Calculation</label>
                            <p className="text-sm text-gray-500">Turn on to apply tax to orders.</p>
                        </div>
                        <Switch
                            id="enableTax"
                            name="enableTax"
                            checked={formData.enableTax}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, enableTax: checked }))}
                        />
                    </div>
                    {formData.enableTax && (
                        <div>
                            <label htmlFor="taxRate">Default Tax Rate (%)</label>
                            <Input
                                id="taxRate"
                                name="taxRate"
                                type="number"
                                min="0"
                                max="100"
                                step="0.01"
                                value={formData.taxRate}
                                onChange={handleChange}
                            />
                            <p>Enter the default tax rate as a percentage.</p>
                        </div>
                    )}
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Saving...' : 'Save Tax Settings'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
