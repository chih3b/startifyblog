import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Powerful Features for Startups
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Everything you need: legal compliance, team building, sustainability, and technical guidance
            </p>
          </div>
        </section>

        {/* ComplianceGuard Features */}
        <section id="complianceguard" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-semibold mb-4">
                ComplianceGuard
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                AI-Powered Legal Assistant
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate Tunisia's Startup Act and ensure full legal compliance with AI assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Chat Assistant</h3>
                <p className="text-gray-600">
                  Ask questions about Tunisian startup law and get instant, accurate answers powered by our knowledge graph of legal documents.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Document Generation</h3>
                <p className="text-gray-600">
                  Automatically generate company statutes, terms of service, investment contracts, and startup label applications.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Scoring</h3>
                <p className="text-gray-600">
                  Get a detailed compliance score across 5 regulatory axes with specific recommendations for improvement.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Quiz</h3>
                <p className="text-gray-600">
                  Take a self-assessment quiz covering 9 legal domains to identify gaps in your startup's compliance.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Monitoring</h3>
                <p className="text-gray-600">
                  Automatic monitoring of official Tunisian government websites for regulatory changes that affect your startup.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Graph</h3>
                <p className="text-gray-600">
                  Visualize relationships between laws, articles, entities, and obligations in an interactive graph powered by Neo4j.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TeamBuilder Features */}
        <section id="teambuilder" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold mb-4">
                TeamBuilder
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                AI-Powered Recruitment Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find, evaluate, and hire the perfect team members for your startup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart CV Upload</h3>
                <p className="text-gray-600">
                  Drag and drop CVs in PDF, DOCX, or image format. AI automatically extracts all candidate information.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Team Builder</h3>
                <p className="text-gray-600">
                  Describe your project in natural language and get AI-recommended team compositions with roles and salaries.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Candidate Pool</h3>
                <p className="text-gray-600">
                  Manage all candidates in one place with advanced filtering by skills, seniority, availability, and location.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Salary Intelligence</h3>
                <p className="text-gray-600">
                  Real-time salary benchmarking for Tunisian market with role-specific ranges based on seniority and skills.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Matching</h3>
                <p className="text-gray-600">
                  AI-powered candidate matching that analyzes skills, experience, and cultural fit to find the best matches.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard Analytics</h3>
                <p className="text-gray-600">
                  Track key metrics including total candidates, invitations sent, acceptance rates, and skill distributions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Green Analysis Features */}
        <section id="greenanalysis" className="py-20 bg-gradient-to-br from-green-50 via-white to-lime-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full font-semibold mb-4">
                Green Analysis
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Environmental & ESG Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measure your environmental impact and access green financing opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Assessment</h3>
                <p className="text-gray-600">
                  AI-powered analysis of your startup's environmental impact across operations, supply chain, and product lifecycle.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ESG Scoring</h3>
                <p className="text-gray-600">
                  Comprehensive ESG (Environmental, Social, Governance) scoring with detailed breakdowns and improvement recommendations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certification Advisor</h3>
                <p className="text-gray-600">
                  Get guidance on green certifications (ISO 14001, B Corp, Carbon Neutral) with eligibility assessment and application support.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Green Financing</h3>
                <p className="text-gray-600">
                  Match with green financing programs (ANME, FODEP, EU funds) based on your sustainability profile and project type.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability Coach</h3>
                <p className="text-gray-600">
                  Personalized recommendations for reducing carbon footprint, improving sustainability practices, and achieving green goals.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Reporting</h3>
                <p className="text-gray-600">
                  Generate investor-ready sustainability reports with carbon metrics, ESG scores, and progress tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Agent Features */}
        <section id="techagent" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
                Tech Agent
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                AI Technical Advisor
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get expert technical guidance from ideation to scaling
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Stack Recommendations</h3>
                <p className="text-gray-600">
                  AI-powered technology stack recommendations based on your project requirements, team skills, and budget constraints.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Architecture Design</h3>
                <p className="text-gray-600">
                  System architecture design with microservices, databases, APIs, and infrastructure recommendations tailored to your needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Product Roadmap</h3>
                <p className="text-gray-600">
                  Strategic product roadmap with phased development plan, feature prioritization, and milestone definitions.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Estimation</h3>
                <p className="text-gray-600">
                  Detailed cost breakdown for infrastructure, development, and operations with budget optimization recommendations.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Review</h3>
                <p className="text-gray-600">
                  Security assessment with authentication, authorization, data protection, and compliance recommendations.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Library Discovery</h3>
                <p className="text-gray-600">
                  Discover relevant open-source libraries, frameworks, and tools with integration guidance and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start using Startify today and transform how you build your startup
            </p>
            <Link
              href="http://localhost:3000"
              className="inline-block px-8 py-4 bg-white text-teal-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
