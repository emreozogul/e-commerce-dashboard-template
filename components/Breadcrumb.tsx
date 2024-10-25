"use client"
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbNav() {
    const pathname = usePathname()
    const paths = pathname.split('/').filter(Boolean)

    const formatPathSegment = (segment: string) => {
        return segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>

                <BreadcrumbSeparator />
                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join('/')}`
                    const isLast = index === paths.length - 1
                    const formattedPath = formatPathSegment(path)

                    return (
                        <BreadcrumbItem key={path}>
                            {isLast ? (
                                <BreadcrumbPage>{formattedPath}</BreadcrumbPage>
                            ) : (
                                <>
                                    <BreadcrumbLink href={href}>{formattedPath}</BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                </>
                            )}
                        </BreadcrumbItem>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
