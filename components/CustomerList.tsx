"use client"

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Customer {
    id: string
    name: string
    email: string
    totalOrders: number
    totalSpent: number
}

export function CustomerList() {
    const [customers, setCustomers] = useState<Customer[]>([])

    useEffect(() => {
        // Fetch customers from your API here
        // For now, we'll use dummy data
        const dummyCustomers: Customer[] = [
            { id: '1', name: 'John Doe', email: 'john@example.com', totalOrders: 5, totalSpent: 499.95 },
            { id: '2', name: 'Jane Smith', email: 'jane@example.com', totalOrders: 3, totalSpent: 299.97 },
            { id: '3', name: 'Bob Johnson', email: 'bob@example.com', totalOrders: 2, totalSpent: 159.98 },
        ]
        setCustomers(dummyCustomers)
    }, [])

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Total Orders</TableHead>
                    <TableHead>Total Spent</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {customers.map((customer) => (
                    <TableRow key={customer.id}>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.totalOrders}</TableCell>
                        <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

