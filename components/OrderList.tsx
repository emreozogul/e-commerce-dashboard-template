"use client"

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Order {
    id: string
    customerName: string
    date: string
    total: number
    status: string
}

export function OrderList() {
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        // Fetch orders from your API here
        // For now, we'll use dummy data
        const dummyOrders: Order[] = [
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
            { id: '1', customerName: 'John Doe', date: '2023-06-01', total: 99.99, status: 'Completed' },
            { id: '2', customerName: 'Jane Smith', date: '2023-06-02', total: 149.99, status: 'Processing' },
            { id: '3', customerName: 'Bob Johnson', date: '2023-06-03', total: 79.99, status: 'Shipped' },
        ]
        setOrders(dummyOrders)
    }, [])

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>{order.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

