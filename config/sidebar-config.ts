import { ShoppingCart, Package, Users, BarChart as BarChartIcon, Settings, Plus, SlidersHorizontal, Tag, UserCircle, ChartPie, TrendingUp } from "lucide-react";

export const sidebarConfig = [
    {
        href: "/orders",
        icon: ShoppingCart,
        label: "Orders",
    },
    {
        href: "/products",
        icon: Package,
        label: "Products",
        subItems: [
            {
                href: "/products",
                icon: SlidersHorizontal,
                label: "Products List",
            },
            {
                href: "/products/add",
                icon: Plus,
                label: "Add Product"
            },

            {
                href: "/products/categories",
                icon: Tag,
                label: "Categories",

            }
        ]
    },
    {
        href: "/customers",
        icon: Users,
        label: "Customers",
    },
    {
        href: "/analytics",
        icon: BarChartIcon,
        label: "Analytics",
        subItems: [
            {
                href: "/analytics",
                icon: TrendingUp,
                label: "Overview"
            },
            {
                href: "/analytics/sales",
                icon: ChartPie,
                label: "Sales Data"
            },
            {
                href: "/analytics/customer-behavior",
                icon: UserCircle,
                label: "Customer Behavior",

            }
        ]
    },
    {
        href: "/settings",
        icon: Settings,
        label: "Settings",
    }
];
