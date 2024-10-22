import { CustomerList } from "@/components/CustomerList"

export default function Customers() {
    return (
        <div className="p-6 bg-gray-100 h-full ">
            <h1 className="text-2xl font-semibold mb-6">Customers</h1>
            <CustomerList />
        </div>
    )
}

