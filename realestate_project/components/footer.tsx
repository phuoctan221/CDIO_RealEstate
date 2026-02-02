import Link from "next/link";

const footerLinks = {
  company: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Đội ngũ", href: "#" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Báo chí", href: "#" },
  ],
  services: [
    { label: "Mua bất động sản", href: "#" },
    { label: "Bán bất động sản", href: "#" },
    { label: "Thuê bất động sản", href: "#" },
    { label: "Quản lý bất động sản", href: "#" },
  ],
  support: [
    { label: "Liên hệ", href: "#contact" },
    { label: "Câu hỏi thường gặp", href: "#" },
    { label: "Trung tâm trợ giúp", href: "#" },
    { label: "Chính sách bảo mật", href: "#" },
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
              Khám phá ngôi nhà hoàn hảo của bạn cùng RETM. Chúng tôi chuyên về
              bất động sản cao cấp, kết nối khách hàng với những tài sản chất
              lượng và tiềm năng.
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
            <h4 className="font-medium text-background mb-4">Công ty</h4>
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
            <h4 className="font-medium text-background mb-4">Dịch vụ</h4>
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
            <h4 className="font-medium text-background mb-4">Hỗ trợ</h4>
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
            &copy; {new Date().getFullYear()} RETM. Bảo lưu mọi quyền.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-background/50 hover:text-background/70 transition-colors"
            >
              Điều khoản dịch vụ
            </Link>
            <Link
              href="#"
              className="text-sm text-background/50 hover:text-background/70 transition-colors"
            >
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
