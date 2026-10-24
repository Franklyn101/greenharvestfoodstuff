import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

/**
 * Contact / quote form handler.
 *
 * Email delivery uses Resend's HTTP API when RESEND_API_KEY is set
 * (no SDK needed). Set in your environment:
 *   RESEND_API_KEY=...
 *   CONTACT_FROM="Green Harvest Website <website@your-domain>"   (must be a verified Resend domain)
 *   CONTACT_TO=greenharvestfoodstuff@gmail.com                    (defaults to siteConfig.contact.email)
 * Without a key, enquiries are logged to the server console so the form still works in development.
 */

type Enquiry = Record<string, string | undefined>;

const esc = (s = "") => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Enquiry;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "The form data could not be read. Refresh the page and try again." }, { status: 400 });
  }

  // Honeypot: pretend success for bots.
  if (body.website) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Add your name, email and delivery details, then send again." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address, such as name@company.com." }, { status: 422 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Shorten your message to under 5,000 characters." }, { status: 422 });
  }

  const rows: [string, string | undefined][] = [
    ["Name", name],
    ["Organisation", body.organisation],
    ["Email", email],
    ["Phone", body.phone],
    ["Product", body.product || "General enquiry"],
    ["Quantity", body.quantity],
    ["Details", message],
  ];

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info("[contact] New enquiry (RESEND_API_KEY not set):", Object.fromEntries(rows));
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Green Harvest Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? siteConfig.contact.email],
      reply_to: email,
      subject: `Website enquiry: ${body.product || "general"} from ${name}`,
      html: `<table cellpadding="6">${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td valign="top"><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json(
      { error: `Your enquiry was not sent. Call or WhatsApp us on ${siteConfig.contact.phone} instead.` },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
