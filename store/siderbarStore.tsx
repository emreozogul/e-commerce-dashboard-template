import { create } from "zustand"

export const useSidebarStore = create<{
    sidebarOpen: boolean
    setSidebarOpen: (sidebarOpen: boolean) => void
}>((set) => ({
    sidebarOpen: false,
    setSidebarOpen: (sidebarOpen) => set({ sidebarOpen })
}))