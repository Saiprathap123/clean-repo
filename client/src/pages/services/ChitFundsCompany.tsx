import { useState } from "react";
import { Link } from "wouter";
import { Building, FileText, CheckCircle, Users, Calendar, Phone, Mail, MapPin, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function ChitFundsCompany() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#161616] text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            CHITS FUNDS COMPANY Registration
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete chit fund company registration and compliance services for starting your investment and savings business under regulatory guidelines.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)} size="lg">
            Get Expert Consultation
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#18181b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is a CHITS FUNDS COMPANY?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                A chit fund company facilitates group savings and borrowing through periodic subscriptions from members. 
                It provides a platform for systematic savings and offers financial assistance to members through an auction process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Regulated financial service business</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Group savings and lending platform</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Member-based financial assistance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">State government regulated business</p>
                </div>
              </div>
            </div>
            <div className="bg-[#161616] p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coins className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Financial Service</h4>
                  <p className="text-gray-300 text-sm">Regulated business model</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Community Based</h4>
                  <p className="text-gray-300 text-sm">Member participation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits of Chit Funds Company</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advantages of starting a chit fund company business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#18181b] rounded-xl p-8 border border-[#222222] hover:border-[#5b91e1] transition-all duration-300">
              <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Regulated Business</h3>
              <p className="text-gray-300">
                Operate under state government regulation and oversight for credibility and trust
              </p>
            </div>
            
            <div className="bg-[#18181b] rounded-xl p-8 border border-[#222222] hover:border-[#5b91e1] transition-all duration-300">
              <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Community Service</h3>
              <p className="text-gray-300">
                Provide financial services to community members for savings and borrowing needs
              </p>
            </div>
            
            <div className="bg-[#18181b] rounded-xl p-8 border border-[#222222] hover:border-[#5b91e1] transition-all duration-300">
              <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mb-6">
                <Coins className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Revenue Generation</h3>
              <p className="text-gray-300">
                Generate income through commission and service charges from chit fund operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#18181b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Documents Required</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential documents needed for chit fund company registration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#161616] rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Company Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Memorandum and Articles of Association</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Board Resolution for Chit Fund Business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Certificate of Incorporation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Details of Authorized Capital</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#161616] rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Personal Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Director's PAN and Aadhaar</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Address Proof of Directors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Registered Office Address Proof</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#5b91e1] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Financial Statements and Bank Details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Registration Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step-by-step process for chit fund company registration
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Document Preparation", desc: "Gather required documents and prepare application" },
              { step: "02", title: "Application Filing", desc: "Submit application to state registrar" },
              { step: "03", title: "Compliance Check", desc: "Regulatory review and verification process" },
              { step: "04", title: "Registration Certificate", desc: "Receive chit fund registration certificate" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#18181b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Chit Fund Company?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert assistance for chit fund company registration and compliance. Start your financial services business today.
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