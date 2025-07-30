import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function NGOServices() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const ngoServices = [
    {
      name: "Section 8 Company Registration",
      slug: "section-8-company",
      description: "Non-profit company registration for charitable, educational, and social welfare activities"
    },
    {
      name: "Trust Registration", 
      slug: "trust-registration",
      description: "Religious, charitable, and educational trust registration with complete legal compliance"
    },
    {
      name: "NGO Registration",
      slug: "ngo-registration",
      description: "Non-governmental organization registration for social service and community development"
    },
    {
      name: "Society Registration",
      slug: "society-registration",
      description: "Society registration under state societies registration acts for social activities"
    },
    {
      name: "12A Registration",
      slug: "12a-registration",
      description: "Income tax exemption registration for charitable organizations and trusts"
    },
    {
      name: "80G Registration",
      slug: "80g-registration",
      description: "Tax deduction certificate for donors contributing to charitable organizations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            NGO Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Non-profit organization registration services for charitable trusts, NGOs, and Section 8 companies with complete legal support.
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
              <h2 className="text-3xl font-bold text-white mb-6">Professional Non-Profit Setup</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our chartered accountants provide comprehensive NGO registration and compliance services to help you establish your non-profit organization with complete legal protection and tax benefits.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert guidance on non-profit structure selection</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete documentation and legal compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Tax exemption registration and benefits</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Ongoing compliance and annual filing support</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Social Impact</h4>
                  <p className="text-gray-300 text-sm">Community development</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Tax Benefits</h4>
                  <p className="text-gray-300 text-sm">Full exemption coverage</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our NGO Registration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive non-profit organization setup and compliance solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ngoServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Heart className="h-12 w-12 text-accent-grey mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Social Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert NGO registration services from qualified chartered accountants. Start your non-profit organization with complete legal protection.
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