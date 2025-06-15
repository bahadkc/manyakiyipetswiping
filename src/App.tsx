import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PartnerForm from './components/PartnerForm';
import {
  HeartIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className={`section ${className}`}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const [showForm, setShowForm] = useState(false);

  const features = [
    {
      title: 'Smart Matching Algorithm',
      description: 'Our AI-powered algorithm matches pets based on personality, size, and compatibility factors.',
      icon: '🎯'
    },
    {
      title: 'Vet-Verified Profiles',
      description: 'All pet profiles are verified by licensed veterinarians for authenticity and health status.',
      icon: '✅'
    },
    {
      title: 'Real-time Chat',
      description: 'Secure in-app messaging system for pet owners to communicate and arrange meetups.',
      icon: '💬'
    },
    {
      title: 'Health Records Integration',
      description: 'Seamless integration with veterinary systems for up-to-date health records.',
      icon: '📋'
    },
    {
      title: 'Behavioral Analysis',
      description: 'Advanced behavioral assessment tools to ensure compatible matches.',
      icon: '🧠'
    },
    {
      title: 'Emergency Support',
      description: '24/7 access to veterinary consultation and emergency support services.',
      icon: '🚑'
    },
    {
      title: 'Match Analytics',
      description: 'Detailed insights and analytics on match success rates and compatibility.',
      icon: '📊'
    },
    {
      title: 'Premium Care Packages',
      description: 'Exclusive access to premium pet care services and partner discounts.',
      icon: '⭐'
    },
    {
      title: 'AI-Powered Health Monitoring',
      description: 'Real-time health monitoring and early warning system for pet conditions.',
      icon: '🤖'
    },
    {
      title: 'Virtual Consultations',
      description: 'High-quality video consultations with veterinary specialists.',
      icon: '🎥'
    },
    {
      title: 'Automated Scheduling',
      description: 'Smart scheduling system for appointments and follow-ups.',
      icon: '📅'
    },
    {
      title: 'Multi-Location Support',
      description: 'Seamless management of multiple clinic locations and staff.',
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute inset-0 bg-[url('/images/vet-clinic.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-primary leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Have an Animal Business?
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join Turkey's leading pet matchmaking platform. Connect with pet owners, increase your visibility, and grow your business with our innovative solutions.
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => setShowForm(true)}
              className="btn btn-primary text-lg px-8 py-4 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300"
            >
              Partner with Us
            </button>
            <a 
              href="https://youtu.be/xvFZjo5PgG0?si=9IDn4PWK0zz17tY_" 
          target="_blank"
          rel="noopener noreferrer"
              className="btn bg-white text-primary border-2 border-primary hover:bg-primary/5 text-lg px-8 py-4 rounded-xl shadow-soft transition-all duration-300"
            >
              What is This?
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <PartnerForm />
          </div>
        </div>
      )}

      {/* Video Section */}
      <Section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">See How It Works</h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-video min-h-[300px]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/202506141557.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-background-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Enterprise Solutions</h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Our platform offers comprehensive solutions for veterinary clinics and pet care businesses
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BuildingOfficeIcon className="w-12 h-12 text-primary" />,
                title: "Business Integration",
                description: "Seamlessly integrate our platform with your existing systems and workflows"
              },
              {
                icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
                title: "Analytics Dashboard",
                description: "Track engagement, growth, and ROI with our comprehensive analytics"
              },
              {
                icon: <UserGroupIcon className="w-12 h-12 text-primary" />,
                title: "Client Management",
                description: "Manage client relationships and appointments efficiently"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Premium Features</h2>
          <div className="relative">
            <div className="flex animate-slide">
              {[...features, ...features].map((feature, index) => (
                <div key={index} className="flex-shrink-0 w-80 mx-4 bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Section className="bg-background-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Trusted by Industry Leaders</h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Join the growing network of successful pet care businesses
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                logo: "VetCare Plus",
                quote: "The platform has transformed how we connect with pet owners and manage our client relationships.",
                author: "Dr. Sarah Johnson",
                role: "Medical Director, VetCare Plus",
                avatar: "👩‍⚕️"
              },
              {
                logo: "Pawsome Clinic",
                quote: "Our client engagement has increased by 40% since implementing this solution.",
                author: "Michael Chen",
                role: "CEO, Pawsome Clinic",
                avatar: "👨‍💼"
              },
              {
                logo: "Pet Wellness Center",
                quote: "The analytics dashboard provides invaluable insights for our business growth.",
                author: "Emma Rodriguez",
                role: "Operations Manager, Pet Wellness Center",
                avatar: "👩‍💼"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-primary font-bold text-xl mb-4">{testimonial.logo}</div>
                <p className="text-lg mb-6 italic text-text-secondary">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-primary">{testimonial.author}</p>
                    <p className="text-text-light">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Partner with PetMatch today and transform your client engagement and operational efficiency.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary text-lg px-8 py-4 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300"
            >
              Schedule a Demo
            </a>
            <button 
              onClick={() => {}}
              className="btn bg-primary-dark text-white border-2 border-white hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-xl shadow-soft transition-all duration-300"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PetMatch</h3>
              <p className="text-gray-400">Connecting pets with their perfect matches since 2024</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/standy_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/bahadikici" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtu.be/xvFZjo5PgG0?si=9IDn4PWK0zz17tY_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PetMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
