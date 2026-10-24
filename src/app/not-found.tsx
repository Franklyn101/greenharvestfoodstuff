import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32">
      <h1 className="display text-4xl sm:text-5xl">This page isn&rsquo;t here</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">The link may be old or mistyped. Try our products or get in touch.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/products" className="btn btn-primary">See our products</Link>
        <Link href="/contact" className="btn btn-ghost">Contact us</Link>
      </div>
    </Container>
  );
}
