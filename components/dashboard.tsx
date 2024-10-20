import { TotalRevenueCard, NewCustomersCard, SalesCard, ActiveNowCard } from "./cards"

export function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-auto bg-gray-100">
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <TotalRevenueCard />
            <NewCustomersCard />
            <SalesCard />
            <ActiveNowCard />
          </div>
        </main>
      </div>
    </div>
  )
}
