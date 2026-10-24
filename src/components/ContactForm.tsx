"use client";

import { useState, type FormEvent } from "react";
import { products } from "@/content/products";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const field = "mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-base focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/30";

export function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Your enquiry was not sent. Check your connection and try again.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: (err as Error).message });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-card border border-leaf bg-white p-8">
        <h3 className="heading text-2xl">Enquiry sent</h3>
        <p className="mt-3 text-muted">Thank you. Our team will reply by email or phone within two working days.</p>
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="mt-6 font-semibold text-leaf-dark underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <label className="block">
        <span className="font-medium">Full name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="font-medium">Organisation</span>
        <input name="organisation" autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className="font-medium">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="font-medium">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="block">
        <span className="font-medium">Product</span>
        <select name="product" defaultValue={defaultProduct} className={field}>
          <option value="">General enquiry</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="font-medium">Estimated quantity</span>
        <input name="quantity" placeholder="e.g. 200 bags of 50kg" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="font-medium">Delivery location and details</span>
        <textarea name="message" required rows={5} className={field} />
      </label>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="sm:col-span-2">
        {status.kind === "error" && (
          <p role="alert" className="mb-4 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-800">{status.message}</p>
        )}
        <button type="submit" disabled={status.kind === "sending"} className="btn btn-primary disabled:opacity-60">
          {status.kind === "sending" ? "Sending enquiry…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
