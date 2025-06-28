import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";


const AdminLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            {/* Admin Sidebar */}
            <AdminSidebar />
            <div className="flex flex-1 flex-col">
                {/* Admin Header */}
                <AdminHeader />
                <main className="flex-1 bg-muted/40 p-4 md:p-6 w-full h-full">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout;