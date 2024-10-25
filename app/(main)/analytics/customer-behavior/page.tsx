'use client'

import { useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area
} from 'recharts'
import { DollarSign, ShoppingBag, RefreshCcw, TrendingUp } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data for charts
const retentionData = [
    { month: 'Jan', retention: 85 },
    { month: 'Feb', retention: 82 },
    { month: 'Mar', retention: 88 },
    { month: 'Apr', retention: 87 },
    { month: 'May', retention: 90 },
    { month: 'Jun', retention: 91 },
]

const purchaseFrequencyData = [
    { frequency: '1-2 times', customers: 500 },
    { frequency: '3-5 times', customers: 300 },
    { frequency: '6-10 times', customers: 150 },
    { frequency: '11+ times', customers: 50 },
]

const customerLifetimeValueData = [
    { segment: '0-100', customers: 1000 },
    { segment: '101-500', customers: 500 },
    { segment: '501-1000', customers: 200 },
    { segment: '1001+', customers: 50 },
]

const customerJourneyData = [
    { stage: 'Awareness', customers: 1000 },
    { stage: 'Consideration', customers: 750 },
    { stage: 'Purchase', customers: 500 },
    { stage: 'Retention', customers: 400 },
    { stage: 'Advocacy', customers: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function CustomerBehaviorPage() {
    const [timeRange, setTimeRange] = useState('30d')

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex justify-between items-center mb-8">
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                        <SelectItem value="12m">Last 12 months</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. Customer Lifetime Value</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$487.32</div>
                        <p className="text-xs text-muted-foreground">
                            +12.3% from last period
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. Purchase Frequency</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3.7 times</div>
                        <p className="text-xs text-muted-foreground">
                            +5.2% from last period
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Customer Retention Rate</CardTitle>
                        <RefreshCcw className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">68.5%</div>
                        <p className="text-xs text-muted-foreground">
                            +3.1% from last period
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Customer Acquisition Cost</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$52.14</div>
                        <p className="text-xs text-muted-foreground">
                            -7.8% from last period
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="retention" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="retention">Retention</TabsTrigger>
                    <TabsTrigger value="purchase-frequency">Purchase Frequency</TabsTrigger>
                    <TabsTrigger value="lifetime-value">Lifetime Value</TabsTrigger>
                    <TabsTrigger value="customer-journey">Customer Journey</TabsTrigger>
                </TabsList>
                <TabsContent value="retention" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer Retention Rate</CardTitle>
                            <CardDescription>Monthly retention rate over the past 6 months</CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart data={retentionData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="retention" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="purchase-frequency" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Purchase Frequency Distribution</CardTitle>
                            <CardDescription>Number of customers by purchase frequency</CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ResponsiveContainer width="100%" height={350}>
                                <BarChart data={purchaseFrequencyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="frequency" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="customers" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="lifetime-value" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer Lifetime Value Segments</CardTitle>
                            <CardDescription>Distribution of customers by lifetime value (in $)</CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ResponsiveContainer width="100%" height={350}>
                                <PieChart>
                                    <Pie
                                        data={customerLifetimeValueData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="customers"
                                        label={({ segment, percent }) => `${segment}: ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {customerLifetimeValueData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="customer-journey" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer Journey Funnel</CardTitle>
                            <CardDescription>Number of customers at each stage of the journey</CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ResponsiveContainer width="100%" height={350}>
                                <AreaChart data={customerJourneyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="stage" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="customers" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}