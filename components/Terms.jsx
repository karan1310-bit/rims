import React from 'react'
import Link from 'next/link'

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-36 md:pb-12 px-2 md:px-10">

      <main className="">
        {/* Breadcrumbs */}
        <div className="max-w-8xl px-4 sm:px-6 pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm md:text-lg text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Terms and Conditions</li>
            </ol>
          </nav>
        </div>


<section
  aria-labelledby="terms-conditions"
  className="px-4 sm:px-6 mt-12"
>
  <h2
    id="terms-conditions"
    className="text-xl sm:text-2xl md:text-3xl font-semibold"
  >
    Terms &amp; Conditions
  </h2>

  <p className="mt-6 text-sm sm:text-lg leading-relaxed">
    <strong>Effective Date:</strong> July 24, 2025
  </p>
  <p className="mt-4 text-sm sm:text-lg leading-relaxed">
    Welcome to Panesar Motorsports. By using our website (
    <a
      href="http://www.panesarmotorsports.ca"
      className="underline hover:text-gray-300"
    >
      www.panesarmotorsports.ca
    </a>
    ), placing an order, or engaging in any of our services, you agree to the
    following Terms and Conditions. Please read them carefully.
  </p>

  {/* General */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">1. General</h3>
  <p className="mt-2 text-sm sm:text-lg leading-relaxed">
    Panesar Motorsports is based in <em>Surrey, BC, Canada</em>, and provides
    aftermarket automotive products and services, including but not limited to
    forged wheels, performance seats, accessories, and JDM import facilitation.
    We reserve the right to update these Terms at any time without notice.
  </p>

  {/* Products & Custom Orders */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    2. Products &amp; Custom Orders
  </h3>
  <ul className="mt-4 space-y-2 text-sm sm:text-lg leading-relaxed">
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        We offer both in-stock items and made-to-order/custom-built products.
      </span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        <em>Custom forged wheels</em>, racing seats, steering wheels, and
        accessories may be made to order and built to spec.
      </span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        <em>It is the customer’s responsibility</em> to confirm vehicle fitment,
        measurements, and usage before placing an order.
      </span>
    </li>
  </ul>

  {/* All Sales Are Final */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    3. All Sales Are Final
  </h3>
  <p className="mt-2 text-sm sm:text-lg leading-relaxed">
    <strong>We do not offer refunds, exchanges, or returns. All sales are final.</strong>{" "}
    By placing an order with Panesar Motorsports, you agree to this policy
    regardless of reason (e.g. change of mind, incorrect fitment, or delays).
    We strongly encourage customers to double-check all specifications and ask
    us for help before ordering.
  </p>

  {/* JDM Import Service */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    4. JDM Import Service
  </h3>
  <ul className="mt-4 space-y-2 text-sm sm:text-lg leading-relaxed">
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        We act as a broker/facilitator between you and the exporter/auction
        house in Japan.
      </span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        We do not own or inspect the vehicles personally. All condition reports,
        auction sheets, and photos are provided as-is.
      </span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        We are not responsible for mechanical issues, wear/tear, or undocumented
        damage.
      </span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        Shipping timelines are estimated and may vary due to port delays, vessel
        schedules, or customs processing.
      </span>
    </li>
  </ul>

  {/* Pricing & Payment */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    5. Pricing &amp; Payment
  </h3>
  <p className="mt-2 text-sm sm:text-lg leading-relaxed">
    All prices are listed in Canadian Dollars (CAD) unless stated otherwise.
    Orders must be paid in full upfront before any processing, production, or
    shipping takes place.
  </p>

  {/* Shipping */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">6. Shipping</h3>
  <ul className="mt-4 space-y-2 text-sm sm:text-lg leading-relaxed">
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>Shipping rates and timelines vary by product and location.</span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>
        We are not responsible for delays caused by shipping carriers, customs
        clearance, or force majeure events.
      </span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>Customers are responsible for providing accurate shipping information.</span>
    </li>
  </ul>

  {/* Fitment & Liability */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    7. Fitment &amp; Liability
  </h3>
  <p className="mt-2 text-sm sm:text-lg leading-relaxed">
    Panesar Motorsports is not liable for any damages or losses resulting from
    incorrect installation, improper fitment, or misuse of our products. Always
    consult a professional before installing wheels, seats, or accessories.
  </p>

  {/* Intellectual Property */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    8. Intellectual Property
  </h3>
  <p className="mt-2 text-sm sm:text-lg leading-relaxed">
    All branding, product photos, and content on panesarmotorsports.ca are the
    intellectual property of Panesar Motorsports or their respective owners.
    Reproduction without permission is strictly prohibited.
  </p>

  {/* Governing Law */}
  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    9. Governing Law
  </h3>
  <p className="mt-2 text-sm sm:text-lg leading-relaxed">
    These Terms are governed by the laws of <em>British Columbia, Canada</em>.
    Any disputes arising from purchases or services will be subject to BC
    jurisdiction.
  </p>

  {/* Contact Info */}
  <p className="mt-8 text-sm sm:text-lg leading-relaxed">
    📍 Panesar Motorsports | Surrey, BC <br />
    📞 236-880-5446 <br />
    📧{" "}
    <a
      href="mailto:panesarmotorsports@gmail.com"
      className="underline hover:text-gray-300"
    >
      panesarmotorsports@gmail.com
    </a>
  </p>
</section>


        </main>
        </div>        

  )
}

export default Terms