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
        "Transform your ideas into stunning websites with our innovative solutions. Our team of experts is dedicated to bringing your vision to life with cutting-edge technology and creative design.",
      ctaText: "Get Started",
      backgroundImage: "/hero-bg.jpg",
    },
  },
  {
    name: "About",
    content: {
      title: "About Our Company",
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
      title: "Get In Touch With Us",
      subtitle: "Let's Start Your Project",
      description:
        "Ready to bring your vision to life? Contact us today and let&apos;s discuss how we can help you achieve your goals. Our team is here to answer your questions and guide you through the process.",
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
  const [deviceView, setDeviceView] = useState("Desktop");
  const [showDeviceDropdown, setShowDeviceDropdown] = useState(false);

  if (!isOpen) return null;

  const currentSection = dummySections.find(
    (section) => section.name === activeSection
  );

  const deviceViews = [
    { name: "Desktop", icon: "🖥️", width: "100%" },
    { name: "Tablet", icon: "📱", width: "768px" },
    { name: "Mobile", icon: "📱", width: "375px" },
  ];

  const getDeviceWidth = () => {
    const device = deviceViews.find((d) => d.name === deviceView);
    return device?.width || "100%";
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border border-white/20 relative">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-gray-50/20"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-400/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-center p-8 border-b border-white/30 bg-white/60 backdrop-blur-sm">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Website Preview
              </h2>
              <p className="text-gray-600 text-sm font-medium">
                Based on your idea: &quot;{idea}&quot;
              </p>
            </div>

            {/* Device View Dropdown */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowDeviceDropdown(!showDeviceDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/40 rounded-lg hover:bg-white/90 hover:border-blue-200 transition-all duration-300 group"
                >
                  <span className="text-lg">
                    {deviceViews.find((d) => d.name === deviceView)?.icon}
                  </span>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">
                    {deviceView}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showDeviceDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-20">
                    <div className="flex">
                      {deviceViews.map((device) => (
                        <button
                          key={device.name}
                          onClick={() => {
                            setDeviceView(device.name);
                            setShowDeviceDropdown(false);
                          }}
                          className="flex items-center space-x-2 px-4 py-3 hover:bg-blue-50 transition-colors duration-200 first:rounded-l-lg last:rounded-r-lg border-r border-gray-200 last:border-r-0"
                        >
                          <span className="text-lg">{device.icon}</span>
                          <span className="font-medium text-gray-700 whitespace-nowrap">
                            {device.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-3 rounded-xl hover:bg-black/5 transition-all duration-300 group"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
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
          </div>

          {/* Navigation */}
          <div className="flex bg-white/40 backdrop-blur-sm border-b border-white/30 mt-10">
            {dummySections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className={`flex-1 px-8 py-5 text-sm font-semibold transition-all duration-300 relative hover:bg-white/70 ${
                  activeSection === section.name
                    ? "text-blue-700 bg-white/80 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {section.name}
                {activeSection === section.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content with Device Frame */}
          <div className="p-8 overflow-y-auto max-h-[65vh]">
            <div
              className="mx-auto transition-all duration-300 ease-in-out"
              style={{ maxWidth: getDeviceWidth() }}
            >
              {currentSection && (
                <div className="space-y-8">
                  {/* Header Section - Same for all */}
                  <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800 bg-clip-text text-transparent mb-4 leading-tight">
                      {currentSection.content.title}
                    </h1>
                    {currentSection.content.subtitle && (
                      <p className="text-xl text-gray-600 mb-6 font-medium">
                        {currentSection.content.subtitle}
                      </p>
                    )}
                    {currentSection.content.description && (
                      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
                        {currentSection.content.description}
                      </p>
                    )}
                  </div>

                  {/* Content Section - Different for each */}
                  <div className="mt-10">
                    {currentSection.name === "Hero" &&
                      currentSection.content.ctaText && (
                        <div className="text-center">
                          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            {currentSection.content.ctaText}
                          </button>
                        </div>
                      )}

                    {currentSection.name === "About" &&
                      currentSection.content.features && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {currentSection.content.features.map(
                            (feature, index) => (
                              <div
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm border border-white/40 p-6 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                              >
                                <div className="flex items-center">
                                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                                  <span className="font-semibold text-gray-900 text-lg">
                                    {feature}
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}

                    {currentSection.name === "Contact" &&
                      currentSection.content.contactInfo && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="group text-center p-6 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                              <svg
                                className="w-8 h-8 text-blue-600"
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
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                              Email
                            </h3>
                            <p className="text-gray-600">
                              {currentSection.content.contactInfo.email}
                            </p>
                          </div>
                          <div className="group text-center p-6 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                              <svg
                                className="w-8 h-8 text-blue-600"
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
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                              Phone
                            </h3>
                            <p className="text-gray-600">
                              {currentSection.content.contactInfo.phone}
                            </p>
                          </div>
                          <div className="group text-center p-6 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                              <svg
                                className="w-8 h-8 text-blue-600"
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
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                              Address
                            </h3>
                            <p className="text-gray-600">
                              {currentSection.content.contactInfo.address}
                            </p>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
