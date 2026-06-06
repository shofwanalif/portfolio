"use client";
import { Laptop, ShoppingBag } from "lucide-react";

export function Project() {
  return (
    <>
      <div className="mb-10">
        <p className="text-sm font-medium">Selected Work</p>
        <h2 className="text-3xl font-semibold mt-2">Projects</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A collection of projects I've worked on, ranging from academic to
          personal projects.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Card 1: Sirenta (Image on top, Text on bottom) */}
        <div className="flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm lg:col-span-7">
          <div className="w-full aspect-16/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/sirenta.png"
                alt="sirenta"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div className="flex flex-col p-6 sm:p-8">
            <h3 className="text-3xl font-semibold">Sirenta</h3>
            <p className="mt-4 text-lg">
              A dedicated information system for managing lab assistant
              recruitment across the full semester cycle.
            </p>
            <p className="mt-4 text-muted-foreground">
              Sirenta streamlines every stage of the recruitment process from
              opening registration and screening candidates to conducting
              assessments and finalizing assignments. Built for laboratory
              administrators, the platform replaces fragmented manual workflows
              with a single, unified system that keeps every activity tracked,
              organized, and visible from end to end.
            </p>
            <div className="mt-8 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl dark:invert">
                <i className="devicon-nextjs-plain"></i>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl">
                <i className="devicon-tailwindcss-original colored"></i>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl">
                <i className="devicon-antdesign-plain colored"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Meubel Pemuda (Text on top, Image on bottom) */}
        <div className="flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm lg:col-span-5">
          <div className="flex flex-col p-6 sm:p-8">
            <h3 className="text-3xl font-semibold">Meubel Pemuda</h3>
            <p className="mt-4 text-lg ">
              A multi-branch sales recording management system with role-based
              access control.
            </p>
            <p className="mt-4 text-muted-foreground">
              Built for furniture retail operations, the platform centralizes
              sales data across all branches under one system. Each user
              accesses only what their role permits from branch staff recording
              daily transactions to managers monitoring cross-branch performance
              eliminating the need for manual reconciliation and disconnected
              spreadsheets.
            </p>
            <div className="mt-8 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl dark:invert">
                <i className="devicon-nextjs-plain"></i>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl">
                <i className="devicon-tailwindcss-original colored"></i>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl">
                <i className="devicon-antdesign-plain colored"></i>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl">
                <i className="devicon-express-original colored"></i>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl">
                <i className="devicon-prisma-original colored"></i>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background shadow-sm text-xl">
                <i className="devicon-mysql-original colored"></i>
              </div>
            </div>
          </div>
          <div className="bg-orange-500/10 w-full aspect-4/3 flex items-center justify-center relative mt-auto overflow-hidden">
            {/* Tempatkan gambar Meubel Pemuda Anda di sini menggunakan tag <img /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-orange-500/40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
