import { useState, useEffect, useRef } from 'react'
import { useSidebarStore } from '@/store/siderbarStore'

export function useSidebar() {
    const { sidebarOpen, setSidebarOpen } = useSidebarStore()
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
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

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label)
    }

    const closeSidebar = () => setSidebarOpen(false)

    return {
        sidebarOpen,
        setSidebarOpen,
        openDropdown,
        sidebarRef,
        toggleDropdown,
        closeSidebar
    }
}

