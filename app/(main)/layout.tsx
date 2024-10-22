import { Sidebar } from "@/components/containers/Sidebar"
import { AuthProvider } from "@/context/AuthProvider"
import { Header } from "@/components/containers/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <Header />
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </AuthProvider>
    )
}
