"use client"

import { ChevronDown, ChevronUp, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { sidebarConfig } from "@/config/sidebar-config"
import { useSidebar } from "@/hooks/use-sidebar"

export function Sidebar() {
    const {
        sidebarOpen,
        openDropdown,
        sidebarRef,
        toggleDropdown,
        closeSidebar
    } = useSidebar()

    return (
        <aside
            ref={sidebarRef}
            className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static overflow-y-auto lg:overflow-y-visible`}
        >
            <div className="flex items-center justify-between p-4">
                <span className="text-2xl font-semibold">E-Shop Admin</span>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={closeSidebar}
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
            <nav className="mt-4">
                {sidebarConfig.map((link) => (
                    <div key={link.href}>
                        {link.subItems ? (
                            <>
                                <div
                                    className="flex items-center justify-between px-4 py-2 text-gray-300 cursor-pointer"
                                    onClick={() => toggleDropdown(link.label)}
                                >
                                    <div className="flex items-center">
                                        <link.icon className="mr-3 h-6 w-6" />
                                        <span className="text-lg">{link.label}</span>
                                    </div>
                                    {openDropdown === link.label ? (
                                        <ChevronUp className="h-4 w-4" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4" />
                                    )}
                                </div>
                                {openDropdown === link.label && (
                                    <div className="flex flex-col gap-2">
                                        {link.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className="mx-4 rounded-md flex bg-gray-700 items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
                                            >
                                                <subItem.icon className="mr-3 h-4 w-4" />
                                                <span className="">{subItem.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                href={link.href}
                                className="flex items-center px-4 py-2 text-gray-300 "
                                onClick={closeSidebar}
                            >
                                <link.icon className="mr-3 h-6 w-6" />
                                <span className="text-lg">{link.label}</span>
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    )
}
