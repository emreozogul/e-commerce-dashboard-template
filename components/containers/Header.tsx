"use client"
import { Button } from "@/components/ui/button"
import { Menu, LogOut } from "lucide-react"
import { useSidebarStore } from "@/store/siderbarStore"
import { BreadcrumbNav } from "../Breadcrumb"

export function Header() {
    const { setSidebarOpen } = useSidebarStore()

    return (
        <header className="bg-white shadow sticky top-0 z-10">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden mr-2"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                    <BreadcrumbNav />
                </div>
                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600 hover:bg-red-100 "
                    >
                        <LogOut size={20} />
                    </Button>
                </div>
            </div>
        </header>
    )
}
