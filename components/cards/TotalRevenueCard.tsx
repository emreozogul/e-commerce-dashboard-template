import { DashboardCard } from "./DashboardCard"

export function TotalRevenueCard() {
    return (
        <DashboardCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1% from last month"
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            }
        />
    )
}