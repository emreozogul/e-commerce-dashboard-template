"use client"

import { Home, ShoppingCart, Users, BarChart as BarChartIcon, Settings, Package } from "lucide-react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useSidebarStore } from "@/store/siderbarStore"
import Link from "next/link"

const links = [
    { href: "/orders", icon: ShoppingCart, label: "Orders" },
    { href: "/products", icon: Package, label: "Products" },
    { href: "/customers", icon: Users, label: "Customers" },
    { href: "/analytics", icon: BarChartIcon, label: "Analytics" },
    { href: "/settings", icon: Settings, label: "Settings" },
]

export function Sidebar() {
    const { sidebarOpen, setSidebarOpen } = useSidebarStore()
    const sidebarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSidebarOpen(false)
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [sidebarOpen, setSidebarOpen])

    return (
        <aside
            ref={sidebarRef}
            className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } fixed inset-y-0 left-0 z-50 w-64 py bg-gray-800 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
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
            <nav className="mt-4">
                {links.map((link) => (
                    <Link href={link.href} key={link.href} className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700" onClick={() => setSidebarOpen(false)}>
                        <link.icon className="mr-3 h-6 w-6" />
                        <span className="text-lg">{link.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
