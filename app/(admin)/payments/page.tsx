"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { generatePayments } from "@/lib/mock";
import { useState, useEffect } from "react";
import { Payment } from "./columns";

export default function PaymentsPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    // Simulate async data fetching to avoid hydration mismatch and synchronous state update warning
    const timer = setTimeout(() => {
      setData(generatePayments(100));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-4">

          <div>
            <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
            <p className="text-muted-foreground">Manage your payment history</p>
          </div>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
