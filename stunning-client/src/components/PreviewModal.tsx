"use client";

import { useState } from "react";

interface SectionContent {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  backgroundImage?: string;
  features?: string[];
  teamImage?: string;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  formFields?: string[];
}

interface Section {
  name: string;
  content: SectionContent;
}

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  idea: string;
}

const dummySections: Section[] = [
  {
    name: "Hero",
    content: {
      title: "Welcome to Our Website",
      subtitle: "We create amazing digital experiences",
      description:
        "Transform your ideas into stunning websites with our innovative solutions.",
      ctaText: "Get Started",
      backgroundImage: "/hero-bg.jpg",
    },
  },
  {
    name: "About",
    content: {
      title: "About Us",
      subtitle: "Your Trusted Digital Partner",
      description:
        "We are a passionate team dedicated to creating exceptional websites that drive results. With years of experience in web development and design, we help businesses establish a strong online presence.",
      features: [
        "Professional Design",
        "Responsive Layout",
        "SEO Optimized",
        "Fast Performance",
      ],
      teamImage: "/team.jpg",
    },
  },
  {
    name: "Contact",
    content: {
      title: "Get In Touch",
      subtitle: "Let's Start Your Project",
      description:
        "Ready to bring your vision to life? Contact us today and let's discuss how we can help you achieve your goals.",
      contactInfo: {
        email: "hello@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Web Street, Digital City, DC 12345",
      },
      formFields: ["Name", "Email", "Message"],
    },
  },
];

export default function PreviewModal({
  isOpen,
  onClose,
  idea,
}: PreviewModalProps) {
  const [activeSection, setActiveSection] = useState("Hero");

  if (!isOpen) return null;

  const currentSection = dummySections.find(
    (section) => section.name === activeSection
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Website Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Section Navbar */}
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <div className="flex space-x-1">
            {dummySections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === section.name
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Based on your idea:{" "}
              <span className="font-medium text-gray-900">
                &quot;{idea}&quot;
              </span>
            </p>
          </div>

          {currentSection && (
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">
                  {currentSection.name} Section
                </h3>
              </div>

              <div className="p-6">
                {currentSection.name === "Hero" && (
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                      {currentSection.content.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                      {currentSection.content.subtitle}
                    </p>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                      {currentSection.content.description}
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      {currentSection.content.ctaText}
                    </button>
                  </div>
                )}

                {currentSection.name === "About" && (
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {currentSection.content.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-4">
                        {currentSection.content.subtitle}
                      </p>
                      <p className="text-gray-700 mb-6">
                        {currentSection.content.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {currentSection.content.features?.map(
                          (feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <svg
                                className="h-5 w-5 text-green-500 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">
                        Team Image Placeholder
                      </span>
                    </div>
                  </div>
                )}

                {currentSection.name === "Contact" && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {currentSection.content.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-4">
                        {currentSection.content.subtitle}
                      </p>
                      <p className="text-gray-700 mb-6">
                        {currentSection.content.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-gray-700">
                            {currentSection.content.contactInfo?.email}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="text-gray-700">
                            {currentSection.content.contactInfo?.phone}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-gray-700">
                            {currentSection.content.contactInfo?.address}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Contact Form
                      </h3>
                      <div className="space-y-4">
                        {currentSection.content.formFields?.map(
                          (field, idx) => (
                            <div key={idx}>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                {field}
                              </label>
                              {field === "Message" ? (
                                <textarea
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  rows={4}
                                  placeholder={`Enter your ${field.toLowerCase()}`}
                                />
                              ) : (
                                <input
                                  type={field === "Email" ? "email" : "text"}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder={`Enter your ${field.toLowerCase()}`}
                                />
                              )}
                            </div>
                          )
                        )}
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
