import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { products } from "@/content/products";
import { processSteps, institutionalBuyers, vision } from "@/content/company";
import { leadership } from "@/content/leadership";
import { credentials } from "@/content/compliance";

const supplyLines = products.filter((p) => p.category !== "developing");

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <h1 className="display animate-rise text-[2.6rem] sm:text-6xl lg:text-[4.4rem]">
              Cassava from Benue, processed for Nigeria&rsquo;s kitchens and factories.
            </h1>
            <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-white/80 [--delay:150ms]">
              Green Harvest buys fresh roots from farming communities in Nigeria&rsquo;s cassava belt and turns them into
              garri, fufu flour, cassava flour, starch, ethanol and animal feed for households, institutions and industry.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3 [--delay:280ms]">
              <Link href="/contact#quote" className="btn btn-primary">Request a quote</Link>
              <Link href="/products" className="btn btn-ghost">See our products</Link>
            </div>
          </div>
          <div className="relative grid grid-cols-5 grid-rows-5 gap-3 [height:min(68vw,520px)]">
            <div className="animate-settle relative col-span-3 row-span-5 overflow-hidden rounded-card [--delay:120ms]">
              <Image src="/images/facility/washing-line.webp" alt="Visitors watching fresh cassava roots move along the washing line" fill sizes="(min-width:1024px) 30vw, 60vw" className="object-cover" priority />
            </div>
            <div className="animate-settle relative col-span-2 row-span-3 overflow-hidden rounded-card [--delay:240ms]">
              <Image src="/images/facility/processing-team.webp" alt="Staff in green uniforms processing cassava" fill sizes="(min-width:1024px) 20vw, 40vw" className="object-cover" priority />
            </div>
            <div className="animate-settle relative col-span-2 row-span-2 overflow-hidden rounded-card [--delay:360ms]">
              <Image src="/images/products/garri.webp" alt="Yellow garri" fill sizes="(min-width:1024px) 20vw, 40vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* Supply sheet: the signature element */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-2xl text-3xl sm:text-5xl">One root, six product lines</h2>
            <p className="max-w-md text-muted">
              Each line comes in retail, institutional or bulk packs. Pick a product to see its uses and specifications.
            </p>
          </div>

          <div className="mt-12 border-t-2 border-forest">
            <div className="hidden grid-cols-[1.2fr_1.6fr_1.4fr] gap-6 border-b border-line py-3 text-sm font-semibold text-muted md:grid">
              <span>Product</span>
              <span>Used for</span>
              <span>Packs</span>
            </div>
            <ul>
              {supplyLines.map((p) => (
                <li key={p.slug} className="border-b border-line">
                  <Link
                    href={`/products/${p.slug}`}
                    className="group grid gap-3 py-6 transition-colors hover:bg-white md:grid-cols-[1.2fr_1.6fr_1.4fr] md:gap-6 md:px-2"
                  >
                    <span className="heading text-xl group-hover:text-leaf-dark sm:text-2xl">{p.name}</span>
                    <span className="text-muted">{p.uses.slice(0, 3).join(", ")}</span>
                    <span className="flex flex-wrap content-start items-start gap-1.5">
                      {p.packs.map((s) => (
                        <span key={s} className="rounded-full border border-line bg-white px-2.5 py-0.5 text-sm font-medium">
                          {s}
                        </span>
                      ))}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image src="/images/facility/site-grounds.webp" alt="The Green Harvest site and grounds" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="display text-3xl sm:text-4xl">Built where the cassava grows</h2>
            <div className="prose-gh mt-6 text-lg text-muted">
              <p>
                Our site on the Adoka–Otukpo Road sits among the cassava-growing communities of Benue State. Roots travel a
                short distance from farm to factory, farmers get a dependable buyer, and the value is added close to home.
              </p>
              <p className="text-ink">{vision}</p>
            </div>
            <Link href="/about" className="mt-8 inline-block font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest">
              About Green Harvest
            </Link>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">From farm gate to dispatch</h2>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <li key={s.title} className="border-t border-line pt-5">
                <span className="heading text-sm text-peel">Step {i + 1}</span>
                <h3 className="heading mt-2 text-xl">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <Link href="/operations" className="mt-12 inline-block font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest">
            How we process and assure quality
          </Link>
        </Container>
      </section>

      {/* Institutional */}
      <section className="bg-forest py-20 text-white sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="display text-3xl sm:text-4xl">Supply for programmes at scale</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              We pack staple foods in sizes that suit feeding programmes, relief distribution and large kitchens, and plan
              deliveries to multiple and rural drop-off points.
            </p>
            <Link href="/institutional-supply" className="btn btn-primary mt-8">Institutional supply</Link>
          </div>
          <div>
            <h3 className="heading text-lg text-garri">Who we supply</h3>
            <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
              {institutionalBuyers.map((b) => (
                <li key={b} className="border-b border-white/15 py-3 text-white/90">{b}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <h2 className="display text-3xl sm:text-4xl">Leadership</h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {leadership.map((l) => (
              <li key={l.slug} className="grid grid-cols-[120px_1fr] items-start gap-6 sm:grid-cols-[160px_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-flour">
                  <Image src={l.photo} alt={`Portrait of ${l.name}`} fill sizes="160px" className="object-cover object-top" />
                </div>
                <div>
                  <h3 className="heading text-xl">{l.name}</h3>
                  <p className="mt-1 font-medium text-leaf-dark">{l.role}</p>
                  <p className="mt-3 line-clamp-4 leading-relaxed text-muted">{l.bio[0]}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/leadership" className="mt-10 inline-block font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest">
            Meet our leadership
          </Link>
        </Container>
      </section>

      {/* Compliance */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="heading text-2xl">Registered and compliant</h2>
            <Link href="/compliance" className="font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest">
              View our credentials
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <li key={c.document} className="rounded-full border border-line bg-white px-4 py-2 text-sm">
                {c.issuer}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
