import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  services: [
    { label: "Buy Property", href: "#" },
    { label: "Sell Property", href: "#" },
    { label: "Rent Property", href: "#" },
    { label: "Property Management", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-semibold text-background">
                RETM
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-sm mb-6">
              Khám phá ngôi nhà hoàn hảo của bạn cùng GML. Chúng tôi chuyên về
              bất động sản cao cấp, kết nối khách hàng với những tài sản đặc
              biệt.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs font-medium text-background">
                      {social[0]}
                    </span>
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} GML. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-background/50 hover:text-background/70 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-background/50 hover:text-background/70 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
