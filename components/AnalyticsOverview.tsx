"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface AnalyticsData {
    name: string
    total: number
}

export function AnalyticsOverview() {
    const [data, setData] = useState<AnalyticsData[]>([])

    useEffect(() => {
        // Fetch analytics data from your API here
        // For now, we'll use dummy data
        const dummyData: AnalyticsData[] = [
            { name: "Jan", total: 1200 },
            { name: "Feb", total: 2100 },
            { name: "Mar", total: 1800 },
            { name: "Apr", total: 2400 },
            { name: "May", total: 2800 },
            { name: "Jun", total: 3200 },
        ]
        setData(dummyData)
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

