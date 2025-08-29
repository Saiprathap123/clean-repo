import { useState } from "react";
import { Link } from "wouter";
import { Building, ChevronDown, Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onBookingClick: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const businessRegistrationServices = [
    { name: "Private Limited Company Registration", slug: "private-limited-company", isPage: true },
    { name: "Public Limited Company Registration", slug: "public-limited-company", isPage: true },
    { name: "Limited Liability Partnership (LLP) Registration", slug: "limited-liability-partnership", isPage: true },
    { name: "CHITS FUNDS COMPANY Registration", slug: "chit-funds-company", isPage: true },
    { name: "Partnership Firm Registration", slug: "partnership-firm", isPage: true },
    { name: "Section 8 Company Registration", slug: "section-8-company", isPage: true },
    { name: "Startup India Registration", slug: "startup-india", isPage: true },
  ];

  const gstTaxServices = [
    { name: "GST Registration", slug: "gst-registration", isPage: false },
    { name: "GST Filing", slug: "gst-filing", isPage: false },
    { name: "GST Portal Login Assistance", slug: "gst-portal-login-assistance", isPage: false },
    { name: "HSN Code Finder", slug: "hsn-code-finder", isPage: false },
    { name: "GST Notices", slug: "gst-notices", isPage: false },
    { name: "GST Cancellation and Revocation", slug: "gst-cancellation-revocation", isPage: false },
    { name: "Indirect Tax Consulting", slug: "indirect-tax-consulting", isPage: false },
  ];

  const licensesRegistrationsServices = [
    { name: "Udyam Registration", slug: "udyam-registration", isPage: true },
    { name: "Trade Licenses", slug: "trade-license", isPage: true },
    { name: "FSSAI (Food License)", slug: "fssai-license", isPage: true },
    { name: "Labour Licenses", slug: "labour-licenses", isPage: false },
    { name: "PF Registration", slug: "pf-registration", isPage: false },
    { name: "ESI Registration", slug: "esi-registration", isPage: false },
    { name: "Professional Tax Registration", slug: "professional-tax-registration", isPage: false },
    { name: "ESOP Services", slug: "esop-services", isPage: false },
    { name: "Gratuity Management", slug: "gratuity-management", isPage: false },
  ];

  const moreServices = [
    {
      category: "Accounting & Tax",
      items: [
        { name: "Accounting and Book-keeping", slug: "accounting-book-keeping", isPage: false },
        { name: "TDS Return Filing", slug: "tds-return-filing", isPage: false },
        { name: "Individual Income Tax Filing", slug: "individual-income-tax-filing", isPage: false },
        { name: "Proprietorship Tax Return Filing", slug: "proprietorship-tax-return-filing", isPage: false },
        { name: "ITR for LLP", slug: "itr-for-llp", isPage: false },
        { name: "Corporate Tax", slug: "corporate-tax", isPage: false },
        { name: "Income Tax Assessment", slug: "income-tax-assessment", isPage: false },
        { name: "Income Tax Notice", slug: "income-tax-notice", isPage: false },
        { name: "All Accounting & Tax Services", slug: "accounting-taxing", isPage: true },
      ]
    },
    {
      category: "Mandatory Annual Filings",
      items: [
        { name: "ROC", slug: "roc-filings", isPage: false },
        { name: "GST", slug: "gst-filing", isPage: false },
        { name: "Income Tax Returns", slug: "income-tax-returns", isPage: false },
        { name: "TDS Returns", slug: "tds-returns", isPage: false },
        { name: "Annual Compliance Services", slug: "annual-compliance-services", isPage: false },
        { name: "LLP Annual Filings", slug: "llp-annual-filings", isPage: false },
        { name: "All Mandatory Filings", slug: "mandatory-annual-filings", isPage: true },
      ]
    },
    {
      category: "Employee Benefits",
      items: [
        { name: "Monthly Returns", slug: "monthly-returns", isPage: false },
        { name: "PF", slug: "pf-registration", isPage: false },
        { name: "ESI", slug: "esi-registration", isPage: false },
        { name: "PT", slug: "professional-tax-registration", isPage: false },
        { name: "Payroll Compliance", slug: "payroll-compliance", isPage: false },
        { name: "Employee Tax Planning", slug: "employee-tax-planning", isPage: false },
        { name: "All Employee Benefits", slug: "employee-benefits", isPage: true },
      ]
    },
    {
      category: "NGO Services",
      items: [
        { name: "Trust Registration as per Income Tax", slug: "trust-registration", isPage: true },
      ]
    },
    {
      category: "Changes in Private Limited Company",
      items: [
        { name: "Director Management", slug: "director-management", isPage: false },
        { name: "Authorized Capital Changes", slug: "authorized-capital-changes", isPage: false },
        { name: "Company Closure & Strike Off", slug: "company-closure-strike-off", isPage: false },
        { name: "Company Profile Changes", slug: "company-profile-changes", isPage: false },
        { name: "All Private Company Changes", slug: "private-company-changes", isPage: true },
      ]
    },
    {
      category: "Changes in Limited Liability Partnership",
      items: [
        { name: "Designated Partner Management", slug: "designated-partner-management", isPage: false },
        { name: "Amend LLP Agreement", slug: "amend-llp-agreement", isPage: false },
        { name: "Close LLP", slug: "close-llp", isPage: false },
        { name: "All LLP Changes", slug: "llp-changes", isPage: true },
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">Registerstartup</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Business Registration Dropdown */}
            <div className="relative group">
              <Link 
                href="/services/business-registration"
                className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium flex items-center"
              >
                Business Registration
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-[#161616] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#222222]">
                <div className="py-2">
                  {businessRegistrationServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                      className="block px-4 py-2 text-sm text-white hover:text-[#5b91e1] hover:bg-[#18181b]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* GST Dropdown */}
            <div className="relative group">
              <Link 
                href="/services/gst-tax-services"
                className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium flex items-center"
              >
                GST
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-[#161616] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#222222]">
                <div className="py-2">
                  {gstTaxServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/service/${service.slug}`}
                      className="block px-4 py-2 text-sm text-white hover:text-[#5b91e1] hover:bg-[#18181b]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Licenses & Registrations Dropdown */}
            <div className="relative group">
              <Link 
                href="/services/licenses-registrations"
                className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium flex items-center"
              >
                Licenses & Registrations
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-[#161616] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#222222]">
                <div className="py-2">
                  {licensesRegistrationsServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                      className="block px-4 py-2 text-sm text-white hover:text-[#5b91e1] hover:bg-[#18181b]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog */}
            <Link 
              href="/blog"
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium flex items-center"
            >
              Blog
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium flex items-center">
                More
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute right-0 mt-2 w-[800px] bg-[#161616] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-[80vh] overflow-y-auto border border-[#222222]">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moreServices.map((category) => (
                      <div key={category.category} className="space-y-3">
                        <h3 className="text-sm font-semibold text-white border-b border-[#222222] pb-2">
                          {category.category}
                        </h3>
                        <div className="space-y-2">
                          {category.items.map((service) => (
                            <Link
                              key={service.slug}
                              href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                              className="block px-3 py-2 text-sm text-white hover:text-[#5b91e1] hover:bg-[#18181b] rounded transition-colors duration-150"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={onBookingClick}>
              Talk to Expert
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#161616] border-t border-[#222222] max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <Link 
                  href="/services/business-registration"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-[#18181b] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business Registration
                </Link>
                {businessRegistrationServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                    className="text-gray-300 hover:text-white block px-6 py-2 text-sm hover:bg-[#18181b] rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1 border-t border-[#222222] pt-2">
                <Link 
                  href="/services/gst-tax-services"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-[#18181b] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GST
                </Link>
                {gstTaxServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/service/${service.slug}`}
                    className="text-gray-300 hover:text-white block px-6 py-2 text-sm hover:bg-[#18181b] rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1 border-t border-[#222222] pt-2">
                <Link 
                  href="/services/licenses-registrations"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-[#18181b] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Licenses & Registrations
                </Link>
                {licensesRegistrationsServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                    className="text-gray-300 hover:text-white block px-6 py-2 text-sm hover:bg-[#18181b] rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-1 border-t border-[#222222] pt-2">
                <Link 
                  href="/blog"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-[#18181b] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>

              <div className="space-y-1 border-t border-[#222222] pt-2">
                <div className="text-gray-300 px-3 py-3 text-base font-medium">More Services</div>
                <div className="grid grid-cols-1 gap-4 px-3">
                  {moreServices.map((category) => (
                    <div key={category.category} className="space-y-2">
                      <div className="text-sm font-semibold text-white border-b border-[#222222] pb-1">
                        {category.category}
                      </div>
                      <div className="space-y-1">
                        {category.items.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                            className="text-gray-300 hover:text-white block px-3 py-2 text-sm hover:bg-[#18181b] rounded transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#222222] pt-4">
                <Button
                  onClick={() => {
                    onBookingClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#5b91e1] hover:bg-white text-white hover:text-black px-4 py-3 rounded-lg text-base font-medium transition-colors"
                >
                  Talk to Expert
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
