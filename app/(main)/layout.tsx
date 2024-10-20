import { Sidebar } from "@/components/containers/Sidebar"
import { AuthProvider } from "@/context/AuthProvider"
import { Header } from "@/components/containers/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider >
            <div className="flex min-h-screen w-full " >
                <Sidebar />
                <div className="flex min-h-screen w-full flex-col " >
                    <Header />
                    <div className="flex flex-col ">
                        {children}
                    </div>
                </div >
            </div>
        </AuthProvider>
    )
}