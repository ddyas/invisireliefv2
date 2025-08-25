import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  product: [
    { name: "Product Information", href: "/product-information" },
    { name: "Contact Us", href: "/contact" },
  ],
  partnership: [
    { name: "Work With Us", href: "/work-with-us" },
    { name: "Partnership Program", href: "/work-with-us" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/invisirelief", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/invisirelief", icon: Twitter },
  { name: "Facebook", href: "https://facebook.com/invisirelief", icon: Facebook },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <Image
                src="/images/invisirelief-logo-transparent.png"
                alt="InvisiRelief™"
                width={240}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Discreet relief, reimagined. Premium chewing gum delivering fast-acting pain relief that fits seamlessly
              into your lifestyle.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@invisirelief.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <span>1800 RELIEF</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Melbourne, VIC 3000, Australia</span>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="mt-8">
              <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm w-72"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white text-sm px-4">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:col-span-2 gap-8">
            {/* Product */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      scroll={true}
                      className="text-gray-300 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h3 className="font-semibold text-white mb-4">Partnership</h3>
              <ul className="space-y-3">
                {footerLinks.partnership.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      scroll={true}
                      className="text-gray-300 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Follow Us */}
              <div className="mt-16">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">© 2025 InvisiRelief™. All rights reserved.</div>

            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  scroll={true}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
