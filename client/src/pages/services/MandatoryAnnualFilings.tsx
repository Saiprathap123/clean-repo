import { useState } from "react";
import { Link } from "wouter";
import { BarChart3, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function MandatoryAnnualFilings() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const filingServices = [
    {
      name: "ROC",
      slug: "roc-filings",
      description: "Registrar of Companies annual return filing and compliance for all company types"
    },
    {
      name: "GST",
      slug: "gst-annual-return",
      description: "GST annual return filing and compliance management for businesses"
    },
    {
      name: "Income Tax Returns", 
      slug: "income-tax-returns",
      description: "Individual and corporate income tax return filing with expert guidance"
    },
    {
      name: "TDS Returns",
      slug: "tds-returns",
      description: "Tax Deducted at Source return filing and compliance management for businesses"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Mandatory Annual Filings
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Essential annual compliance services for companies and LLPs to maintain legal standing and regulatory adherence.
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
              <h2 className="text-3xl font-bold text-white mb-6">Professional Compliance Management</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our chartered accountants provide comprehensive annual filing services to ensure your business maintains full legal compliance and avoids penalties from regulatory authorities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Timely annual return filing and compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete statutory audit and reporting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Board meeting organization and documentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Penalty avoidance and legal protection</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Annual Filing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive annual compliance solutions for all business entities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filingServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <BarChart3 className="h-12 w-12 text-accent-grey mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Stay Compliant?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert annual filing services from qualified chartered accountants. Maintain legal standing and avoid penalties.
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