import { TotalRevenueCard, NewCustomersCard, SalesCard, ActiveNowCard } from "./cards"

export function Dashboard() {
  return (

    <main className="p-6 h-full">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <TotalRevenueCard />
        <NewCustomersCard />
        <SalesCard />
        <ActiveNowCard />
      </div>
    </main>

  )
}
