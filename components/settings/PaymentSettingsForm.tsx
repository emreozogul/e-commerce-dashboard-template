import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const paymentSettingsSchema = z.object({
    stripeEnabled: z.boolean(),
    paypalEnabled: z.boolean(),
    stripePublishableKey: z.string(),
    stripeSecretKey: z.string(),
    paypalClientId: z.string(),
    paypalSecret: z.string(),
})

export const PaymentSettingsForm = ({ onSubmit, isSubmitting }: { onSubmit: any, isSubmitting: boolean }) => {

    const form = useForm<z.infer<typeof paymentSettingsSchema>>({
        resolver: zodResolver(paymentSettingsSchema),
        defaultValues: {
            stripeEnabled: false,
            paypalEnabled: false,
            stripePublishableKey: '',
            stripeSecretKey: '',
            paypalClientId: '',
            paypalSecret: '',
        },
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>
                    Configure your store's payment gateways.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="stripeEnabled"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Enable Stripe
                                        </FormLabel>
                                        <FormDescription>
                                            Accept payments via Stripe.
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
                        {form.watch('stripeEnabled') && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="stripePublishableKey"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Stripe Publishable Key</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="stripeSecretKey"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Stripe Secret Key</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                        <FormField
                            control={form.control}
                            name="paypalEnabled"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Enable PayPal
                                        </FormLabel>
                                        <FormDescription>
                                            Accept payments via PayPal.
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
                        {form.watch('paypalEnabled') && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="paypalClientId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>PayPal Client ID</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="paypalSecret"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>PayPal Secret</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isSubmitting ? 'Saving...' : 'Save Payment Settings'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}