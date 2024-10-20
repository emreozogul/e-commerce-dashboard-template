"use client"
import React, { useContext, createContext, ReactNode, useMemo, useEffect, useState } from "react";


export interface Auth {
    signOut: () => Promise<{
        error: any | null
    }>
}

export const AuthContext = createContext<Auth>({
    signOut: async () => ({ error: null }),
})


export const AuthProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {

    // const { tenantId, getTenant } = useTenantUserStore()
    // const { getAccounts } = useAccountStore()

    useEffect(() => {
        // getTenant()
    }, [])

    useEffect(() => {
        // if (tenantId) {
        //     getAccounts(tenantId)
        // }
    }, [])

    const value = useMemo(() => {
        return {
            //signOut: () => supabase.auth.signOut(),
            signOut: async () => ({ error: null }),
        }
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useTenantInfo must be used within a TenantInfoProvider");
    }
    return context;
}