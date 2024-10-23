"use client"
import { Button } from "@/components/ui/button"
import { Menu, Bell } from "lucide-react"
import { useSidebarStore } from "@/store/siderbarStore"

export function Header() {
    const { setSidebarOpen } = useSidebarStore()
    return (
        <header className="bg-white shadow sticky top-0 z-10">
            <div className="flex items-center justify-between px-4 py-3">
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </Button>
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
            </div>
        </header>
    )
}