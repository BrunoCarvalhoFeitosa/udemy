import { Sidebar } from "@/app/(pages)/(app)/(dashboard)/components/sidebar"
import { Navbar } from "@/app/(pages)/(app)/(dashboard)/components/navbar"

const DashboardLayout = ({ children } : {children : React.ReactNode}) => {
    return (
        <div className="min-h-dvh">
            <div className="md:pl-56 lg:pl-72 xl:pl-96 fixed inset-y-0 w-full h-[80px] z-50">
                <Navbar />
            </div>
            <div className="hidden md:flex flex-col fixed inset-y-0 md:w-56 lg:w-72 xl:w-96 h-full z-50">
                <Sidebar />
            </div>
            <main className="pt-[80px] md:pl-56 lg:pl-72 xl:pl-96 min-h-dvh overflow-y-auto">
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout