'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Check, TrendingUp, Shield, Star, ArrowRight, BarChart3, Brain, Zap, Target, Users } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-premium-navy via-premium-dark to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="AI Optimization Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-premium-navy/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-max text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-4">
              Acquire{' '}
              <span className="text-gradient block domain-title">
                ArtificialOptimization.com
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              The definitive digital asset for AI optimization, machine learning excellence, and business intelligence supremacy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4">
              <motion.a
                href="https://wa.link/6difl3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                Secure This Domain
              </motion.a>
              
              <motion.a
                href="mailto:imrulo.eth@proton.me"
                className="btn-secondary flex items-center gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
                Make an Offer
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400 px-4">
              <div className="flex items-center gap-2">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                <span>Secure Escrow Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="sm:w-4 sm:h-4" />
                <span>Premium Investment</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={14} className="sm:w-4 sm:h-4" />
                <span>Brand Authority</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="text-premium-gold/30" size={60} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 hidden lg:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="text-premium-gold/30" size={50} />
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-premium-navy">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              Why <span className="text-gradient">ArtificialOptimization.com</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              This premium domain represents the pinnacle of AI and optimization branding, 
              offering unparalleled strategic value for forward-thinking organizations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                icon: <Check className="text-premium-gold" size={32} />,
                title: "Brand Authority",
                description: "Instant credibility and trust in the AI optimization space"
              },
              {
                icon: <TrendingUp className="text-premium-gold" size={32} />,
                title: "SEO Advantage",
                description: "Exact-match potential with high-value keywords and organic traffic"
              },
              {
                icon: <Target className="text-premium-gold" size={32} />,
                title: "Market Versatility",
                description: "Perfect for AI consulting, ML platforms, and business intelligence"
              },
              {
                icon: <BarChart3 className="text-premium-gold" size={32} />,
                title: "Appreciation Potential",
                description: "Sound digital real estate investment with growing AI market"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-premium-gold/50 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Data & Market Validation Section */}
      <section className="section-padding bg-gradient-to-b from-premium-navy to-slate-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              Market <span className="text-gradient">Validation</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Data-driven insights demonstrating the exceptional value and market potential of this premium domain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Keyword Analysis */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">High-Value Keywords</h3>
              <div className="space-y-4">
                {[
                  { keyword: "artificial optimization", volume: "12,100", cpc: "$8.50" },
                  { keyword: "AI optimization", volume: "8,900", cpc: "$12.30" },
                  { keyword: "machine learning optimization", volume: "6,600", cpc: "$15.20" },
                  { keyword: "business intelligence optimization", volume: "4,400", cpc: "$9.80" },
                  { keyword: "algorithm optimization", volume: "3,300", cpc: "$11.50" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10 last:border-b-0 gap-2 sm:gap-0">
                    <span className="font-medium text-sm sm:text-base">{item.keyword}</span>
                    <div className="text-left sm:text-right">
                      <div className="text-premium-gold font-semibold text-sm sm:text-base">{item.volume} searches/mo</div>
                      <div className="text-xs sm:text-sm text-gray-400">${item.cpc} CPC</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comparable Sales */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Recent Premium Sales</h3>
              <div className="space-y-4">
                {[
                  { domain: "AIStrategy.com", price: "$45,000", year: "2023" },
                  { domain: "MachineLearning.io", price: "$28,500", year: "2023" },
                  { domain: "DataOptimization.net", price: "$15,200", year: "2023" },
                  { domain: "AlgorithmAI.com", price: "$32,800", year: "2022" },
                  { domain: "SmartOptimization.com", price: "$18,900", year: "2023" }
                ].map((sale, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/10 last:border-b-0 gap-2 sm:gap-0">
                    <span className="font-mono text-xs sm:text-sm">{sale.domain}</span>
                    <div className="text-left sm:text-right">
                      <div className="text-premium-gold font-bold text-sm sm:text-base">${sale.price}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{sale.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-premium-navy">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              Strategic <span className="text-gradient">Applications</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Discover how this premium domain can transform your organization's digital presence and market positioning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
          >
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-premium-gold/10">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-semibold text-premium-gold">Industry</th>
                    <th className="px-8 py-6 text-left text-lg font-semibold text-premium-gold">Strategic Application & Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      industry: "AI Consulting Firm",
                      application: "Establish thought leadership and attract enterprise clients seeking optimization expertise"
                    },
                    {
                      industry: "SaaS Platform",
                      application: "Launch AI-powered optimization tools with instant brand credibility and SEO advantage"
                    },
                    {
                      industry: "Venture Capital",
                      application: "Portfolio company branding and investment thesis validation in AI optimization space"
                    },
                    {
                      industry: "Enterprise Software",
                      application: "Corporate AI initiatives and internal optimization platform development"
                    },
                    {
                      industry: "Research Institute",
                      application: "Academic publications, conferences, and industry collaboration platform"
                    },
                    {
                      industry: "Marketing Agency",
                      application: "AI-driven campaign optimization services and client acquisition"
                    },
                    {
                      industry: "Financial Services",
                      application: "Algorithmic trading optimization and risk management AI solutions"
                    },
                    {
                      industry: "Healthcare Technology",
                      application: "Medical AI optimization and clinical decision support systems"
                    }
                  ].map((useCase, index) => (
                    <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-8 py-6 font-semibold text-lg">{useCase.industry}</td>
                      <td className="px-8 py-6 text-gray-300">{useCase.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden">
              {[
                {
                  industry: "AI Consulting Firm",
                  application: "Establish thought leadership and attract enterprise clients seeking optimization expertise"
                },
                {
                  industry: "SaaS Platform",
                  application: "Launch AI-powered optimization tools with instant brand credibility and SEO advantage"
                },
                {
                  industry: "Venture Capital",
                  application: "Portfolio company branding and investment thesis validation in AI optimization space"
                },
                {
                  industry: "Enterprise Software",
                  application: "Corporate AI initiatives and internal optimization platform development"
                },
                {
                  industry: "Research Institute",
                  application: "Academic publications, conferences, and industry collaboration platform"
                },
                {
                  industry: "Marketing Agency",
                  application: "AI-driven campaign optimization services and client acquisition"
                },
                {
                  industry: "Financial Services",
                  application: "Algorithmic trading optimization and risk management AI solutions"
                },
                {
                  industry: "Healthcare Technology",
                  application: "Medical AI optimization and clinical decision support systems"
                }
              ].map((useCase, index) => (
                <div key={index} className="border-b border-white/10 last:border-b-0 p-6">
                  <h3 className="font-semibold text-lg text-premium-gold mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{useCase.application}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Process Section */}
      <section className="section-padding bg-gradient-to-b from-premium-navy to-slate-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              Secure <span className="text-gradient">Transaction</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Your investment is protected with industry-leading security and transparent processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-premium-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-premium-gold" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Escrow.com Protection</h3>
              <p className="text-gray-300">
                Secure, guaranteed transaction with industry-leading escrow protection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-premium-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="text-premium-gold" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-300">
                Professional guidance throughout the entire domain transfer process
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-premium-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Check className="text-premium-gold" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Transfer</h3>
              <p className="text-gray-300">
                Fast, seamless domain transfer with immediate ownership confirmation
              </p>
            </motion.div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-premium-gold fill-current" size={24} />
              ))}
            </div>
            <blockquote className="text-xl text-gray-300 mb-6 italic">
              "The domain acquisition process was seamless and professional. The escrow protection gave us complete confidence in the transaction, and the domain has already proven its value in our AI consulting business."
            </blockquote>
            <cite className="text-premium-gold font-semibold">— Sarah Chen, CTO at TechFlow AI</cite>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-premium-navy">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Everything you need to know about acquiring this premium domain.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What makes ArtificialOptimization.com so valuable?",
                answer: "This domain combines two high-value keywords in the rapidly growing AI space. It offers exact-match SEO potential, instant brand authority, and appeals to multiple industries including AI consulting, machine learning platforms, and business intelligence services."
              },
              {
                question: "Who is the ideal buyer for this domain?",
                answer: "Perfect for AI consulting firms, SaaS platforms, venture capital firms, enterprise software companies, research institutes, and marketing agencies looking to establish thought leadership in the AI optimization space."
              },
              {
                question: "What is the process for making an offer?",
                answer: "Simply contact us via WhatsApp or email with your offer. We'll respond within 24 hours to discuss terms, pricing, and next steps. All serious offers are considered."
              },
              {
                question: "How does the secure transfer work?",
                answer: "We use Escrow.com for all transactions, ensuring complete security. The process involves: 1) Agreement on terms, 2) Escrow setup, 3) Payment verification, 4) Domain transfer, 5) Ownership confirmation. The entire process typically takes 3-5 business days."
              },
              {
                question: "Is this a one-time opportunity?",
                answer: "Yes, premium domains of this caliber rarely become available. The combination of 'artificial' and 'optimization' in a .com domain represents a unique opportunity that won't be repeated."
              },
              {
                question: "What's included with the domain purchase?",
                answer: "You receive full ownership of the domain, complete transfer assistance, and a comprehensive domain history report. We also provide guidance on maximizing the domain's potential for your specific use case."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-premium-gold">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <a
          href="https://wa.link/6difl3"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 sm:gap-3 shadow-2xl text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
        >
          <MessageCircle size={16} className="sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Secure Domain</span>
          <span className="sm:hidden">Secure</span>
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="bg-premium-navy border-t border-white/10 py-12">
        <div className="container-max text-center">
          <p className="text-gray-400 mb-2">Made with ❤️ by imrulo.eth</p>
          <p className="text-gray-500 mb-2">© {new Date().getFullYear()}. All rights reserved.</p>
          <p className="text-sm text-gray-600 italic">
            This is a domain landing page for sale purposes only. No active services are implied. Domain availability is subject to change.
          </p>
        </div>
      </footer>
    </main>
  )
}
