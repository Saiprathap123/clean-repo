import { useState } from "react";
import { Link } from "wouter";
import { Gavel, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function LicensesRegistrations() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const licenseServices = [
    {
      name: "Udyam Registration",
      slug: "udyam-registration",
      description: "Government registration for small and medium enterprises with benefits and subsidies"
    },
    {
      name: "Trade Licenses", 
      slug: "trade-license",
      description: "Essential business licenses for legal operation and regulatory compliance"
    },
    {
      name: "FSSAI (Food License)",
      slug: "fssai-license",
      description: "Food safety and standards authority license for food businesses and manufacturers"
    },
    {
      name: "Labour Licenses",
      slug: "labour-licenses",
      description: "Essential labor compliance licenses for businesses with employees"
    },
    {
      name: "PF Registration",
      slug: "pf-registration",
      description: "Provident fund registration for employee welfare and statutory compliance"
    },
    {
      name: "ESI Registration",
      slug: "esi-registration",
      description: "Employee state insurance registration for medical benefits and social security"
    },
    {
      name: "Professional Tax Registration",
      slug: "professional-tax-registration",
      description: "State-wise professional tax registration for businesses and employees"
    },
    {
      name: "ESOP Services",
      slug: "esop-services",
      description: "Employee Stock Option Plan setup and management for equity-based compensation programs"
    },
    {
      name: "Gratuity Management",
      slug: "gratuity-management",
      description: "Gratuity calculation, compliance, and management services for employee retirement benefits"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Licenses & Registrations
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Essential business licenses and regulatory registrations for legal compliance and smooth operations.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)} size="lg">
            Get Expert Consultation
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Professional License Management</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our chartered accountants provide comprehensive licensing and registration services to ensure your business operates with full legal compliance and regulatory adherence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete licensing documentation and filing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Fast processing with government authorities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Ongoing compliance and renewal support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert guidance on regulatory requirements</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gavel className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Legal Protection</h4>
                  <p className="text-gray-300 text-sm">Full compliance coverage</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Compliance</h4>
                  <p className="text-gray-300 text-sm">Full regulatory adherence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Licenses & Registration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive licensing solutions for all business compliance needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenseServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Gavel className="h-12 w-12 text-accent-grey mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href={`/service/${service.slug}`}
                    className="text-white hover:text-accent-grey font-medium inline-flex items-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ensure Full Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert licensing and registration services from qualified chartered accountants. Operate your business with complete legal protection.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)} size="lg">
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}