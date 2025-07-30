import { useState } from "react";
import { Link } from "wouter";
import { TrendingUp, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function PrivateCompanyChanges() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const changeServices = [
    {
      name: "Add a Director",
      slug: "add-director",
      description: "Adding new directors to private limited company with complete MCA compliance"
    },
    {
      name: "Remove a Director", 
      slug: "remove-director",
      description: "Director removal process with proper documentation and regulatory filing"
    },
    {
      name: "Increase Authorized Capital",
      slug: "increase-authorized-capital",
      description: "Authorized capital increase for business expansion and growth requirements"
    },
    {
      name: "Close the Pvt Ltd Company",
      slug: "close-private-company",
      description: "Complete company closure process with regulatory compliance and asset distribution"
    },
    {
      name: "Strike Off Company",
      slug: "strike-off-company",
      description: "Voluntary company strike off application and compliance management"
    },
    {
      name: "Change Objective or Activity",
      slug: "change-company-objective",
      description: "Modification of company objectives and business activities with MOA amendments"
    },
    {
      name: "Change Address",
      slug: "change-company-address",
      description: "Registered office address change with complete documentation and filing"
    },
    {
      name: "Share Transfer Services",
      slug: "share-transfer-services",
      description: "Share transfer documentation and regulatory compliance for ownership changes"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Changes in Private Limited Company
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive company modification services for director changes, capital alterations, and business updates with full regulatory compliance.
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
              <h2 className="text-3xl font-bold text-white mb-6">Professional Company Modifications</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our chartered accountants provide comprehensive company modification services to help you make necessary changes to your private limited company with complete regulatory compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert guidance on company restructuring</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete documentation and MCA filing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Director addition and removal services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Capital structure modifications</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Business Growth</h4>
                  <p className="text-gray-300 text-sm">Structural flexibility</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Company Modification Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete private limited company change management solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {changeServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <TrendingUp className="h-12 w-12 text-accent-grey mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Modify Your Company?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert company modification services from qualified chartered accountants. Make necessary changes with complete regulatory compliance.
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