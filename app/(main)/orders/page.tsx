import { OrderList } from "../../../components/OrderList"

export default function Orders() {
    return (
        <div className="p-6 bg-gray-100 h-full ">
            <h1 className="text-2xl font-semibold mb-6">Orders</h1>
            <OrderList />
        </div>
    )
}

