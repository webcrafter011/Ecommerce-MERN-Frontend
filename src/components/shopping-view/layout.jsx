import { Outlet } from "react-router-dom";
import ShoppingViewHeader from "./header";


const ShoppingListLayout = () => {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* header component */}
            <ShoppingViewHeader />
            <main className="flex flex-col w-full">
                <Outlet />
            </main>
        </div>
    )
}

export default ShoppingListLayout;
