"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function ServicesGrid() {
  const services = useQuery(api.services.list);

  if (services === undefined) {
    return <p className="mt-12 text-slate-500">Loading services…</p>;
  }

  if (services.length === 0) {
    return (
      <p className="mt-12 text-slate-500">
        No services yet. Run <code>npx convex run services:seed</code> to add them.
      </p>
    );
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <div
          key={service._id}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
        >
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
