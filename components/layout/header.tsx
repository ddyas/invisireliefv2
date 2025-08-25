"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product-information" },
]

const buttonNavigation = [
  { name: "Contact", href: "/contact" },
  { name: "Partners", href: "/work-with-us" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" scroll={true}>
              <Image
                src="/images/invisirelief-logo-main.png"
                alt="InvisiRelief™"
                width={200}
                height={45}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={true}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-navy",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              {buttonNavigation.map((item) => (
                <Link key={item.name} href={item.href} scroll={true}>
                  <Button
                    variant={item.name === "Contact" ? "outline" : "default"}
                    size="sm"
                    className={item.name === "Contact" ? "border-navy text-navy hover:bg-navy hover:text-white" : ""}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-navy p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 px-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)} scroll={true}>
                    <Image
                      src="/images/invisirelief-logo-main.png"
                      alt="InvisiRelief™"
                      width={180}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>

                <nav className="space-y-4">
                  {[...mainNavigation, ...buttonNavigation].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      scroll={true}
                      className={cn(
                        "block py-3 text-lg font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-navy",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
