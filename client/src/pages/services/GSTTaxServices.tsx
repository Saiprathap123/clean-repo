import { useState } from "react";
import { Link } from "wouter";
import { FileText, CheckCircle, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function GSTTaxServices() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const gstServices = [
    {
      name: "GST Registration",
      slug: "gst-registration",
      description: "Complete GST registration process for businesses with turnover exceeding threshold limits"
    },
    {
      name: "GST Filing", 
      slug: "gst-filing",
      description: "Monthly and quarterly GST return filing with accurate tax calculations and compliance"
    },
    {
      name: "GST Portal Login Assistance",
      slug: "gst-portal-login-assistance",
      description: "Expert support for GST portal navigation, login issues, and technical assistance"
    },
    {
      name: "HSN Code Finder",
      slug: "hsn-code-finder",
      description: "Accurate HSN/SAC code identification for proper GST classification and compliance"
    },
    {
      name: "GST Notices",
      slug: "gst-notices",
      description: "Professional handling of GST notices and department correspondence"
    },
    {
      name: "GST Cancellation and Revocation",
      slug: "gst-cancellation-revocation",
      description: "GST registration cancellation and revocation services with proper compliance"
    },
    {
      name: "Indirect Tax Consulting",
      slug: "indirect-tax-consulting",
      description: "Strategic consulting for indirect tax planning and compliance optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            GST & Indirect Tax
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive GST registration, filing, compliance, and indirect tax consulting services for seamless business operations.
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
              <h2 className="text-3xl font-bold text-white mb-6">Professional GST Management</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our chartered accountants provide comprehensive GST and indirect tax services to ensure full compliance with tax regulations and optimize your tax burden.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Timely GST return filing and compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert GST registration and setup</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Professional notice handling and resolution</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Strategic indirect tax planning</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Tax Optimization</h4>
                  <p className="text-gray-300 text-sm">Maximum savings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-white" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our GST & Indirect Tax Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete GST compliance and indirect tax solutions for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gstServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <FileText className="h-12 w-12 text-accent-grey mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Streamline Your GST Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert GST and indirect tax services from qualified chartered accountants. Ensure compliance and optimize your tax burden.
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