"use client"

import { Home, ShoppingCart, Users, BarChart as BarChartIcon, Settings, Package } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useSidebarStore } from "@/store/siderbarStore"
export function Sidebar() {
    const { sidebarOpen, setSidebarOpen } = useSidebarStore()
    return (
        <aside
            className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
            <div className="flex items-center justify-between p-4">
                <span className="text-2xl font-semibold">E-Shop Admin</span>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
            <nav className="mt-8">
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                    <Home className="mr-3 h-5 w-5" />
                    Dashboard
                </a>
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                    <ShoppingCart className="mr-3 h-5 w-5" />
                    Orders
                </a>
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                    <Package className="mr-3 h-5 w-5" />
                    Products
                </a>
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                    <Users className="mr-3 h-5 w-5" />
                    Customers
                </a>
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                    <BarChartIcon className="mr-3 h-5 w-5" />
                    Analytics
                </a>
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                >
                    <Settings className="mr-3 h-5 w-5" />
                    Settings
                </a>
            </nav>
        </aside>
    )
}
