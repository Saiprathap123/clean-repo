import { useState } from "react";
import { Link } from "wouter";
import { Building, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function BusinessRegistration() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const businessTypes = [
    {
      name: "Private Limited Company Registration",
      slug: "private-limited-company",
      description:
        "Most preferred business structure with limited liability protection and separate legal identity",
    },
    {
      name: "Public Limited Company Registration",
      slug: "public-limited-company",
      description:
        "Ideal for large-scale businesses looking to raise capital from the public and get listed",
    },
    {
      name: "Limited Liability Partnership (LLP) Registration",
      slug: "limited-liability-partnership",
      description:
        "Hybrid structure combining benefits of partnership and company with operational flexibility",
    },
    {
      name: "CHITS FUNDS COMPANY Registration",
      slug: "chits-funds-company",
      description:
        "Regulated chit fund company for conducting chit business with proper compliance and member benefits",
    },
    {
      name: "Partnership Firm Registration",
      slug: "partnership-firm",
      description:
        "Simple business structure for two or more partners sharing profits and responsibilities",
    },
    {
      name: "Nidhi Company Registration",
      slug: "nidhi-company",
      description:
        "Non-banking financial company for promoting savings and lending among members",
    },
    {
      name: "Producer Company Registration",
      slug: "producer-company",
      description:
        "Farmer producer organizations for collective farming and agricultural activities",
    },
    {
      name: "Startup India Registration",
      slug: "startup-india",
      description:
        "Government recognition for startups with tax benefits and funding opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Business Registration
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete business setup services for all types of company structures
            with expert CA guidance and full compliance support.
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
              <h2 className="text-3xl font-bold text-white mb-6">
                Professional Business Setup
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our chartered accountants provide comprehensive business
                registration services to help you establish your company with
                complete legal compliance and optimal structure selection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Expert guidance on business structure selection
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Complete documentation and filing support
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Fast processing with government compliance
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Post-registration compliance support
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Key Benefits
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    Legal Protection
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Limited liability coverage
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Compliance</h4>
                  <p className="text-gray-300 text-sm">
                    Full regulatory adherence
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Business Registration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business setup solutions for all entity types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Building className="h-12 w-12 text-accent-grey mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert business registration services from qualified chartered
            accountants. Start your entrepreneurial journey today.
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
