import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const taxSettingsSchema = z.object({
    enableTax: z.boolean(),
    taxRate: z.number().min(0).max(100),
})

export function TaxSettingsForm({ onSubmit, isSubmitting }: { onSubmit: any, isSubmitting: boolean }) {
    const form = useForm<z.infer<typeof taxSettingsSchema>>({
        resolver: zodResolver(taxSettingsSchema),
        defaultValues: {
            enableTax: false,
            taxRate: 0,
        },
    })
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tax Settings</CardTitle>
                <CardDescription>
                    Configure tax rates for your store.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="enableTax"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Enable Tax Calculation
                                        </FormLabel>
                                        <FormDescription>
                                            Turn on to apply tax to orders.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {form.watch('enableTax') && (
                            <FormField
                                control={form.control}
                                name="taxRate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Default Tax Rate (%)</FormLabel>
                                        <FormControl>
                                            <Input type="number" min="0" max="100" step="0.01" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the default tax rate as a percentage.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isSubmitting ? 'Saving...' : 'Save Tax Settings'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}