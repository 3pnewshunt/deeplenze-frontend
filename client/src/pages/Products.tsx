/* Desert Futurism Design - Products Page
 * Showcase of six innovative products
 * Colors: Midnight Blue, Digital Gold, Electric Teal
 */
import HeroImage from "@/assets/images/herosection.png";
import nalystLogo from "@/assets/images/nalyst.png";
import newsHuntLogo from "@/assets/images/newshunt_logo.png";
import kastLogo from "@/assets/images/ForeQast.svg";
import hr360Logo from "@/assets/images/QanoonHr.svg";
import khellaLogo from "@/assets/images/HoorLogo.svg";
import assadLogo from "@/assets/images/DiraaLogo.svg";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Building2,
  Lightbulb,
  Tv2,
  Newspaper,
  PenLine,
  Search,
  Shield,
  Landmark,
  ShoppingBag,
  Star,
  ShoppingCart,
  Store,
  Truck,
  Users,
  Flag,
  Network,
  Globe,
  ExternalLink,
} from 'lucide-react';

// Android SVG icon component
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341a.87.87 0 01-.87-.87V9.53a.87.87 0 011.74 0v4.94a.87.87 0 01-.87.87zm-11.046 0a.87.87 0 01-.87-.87V9.53a.87.87 0 011.74 0v4.94a.87.87 0 01-.87.87zm10.21-6.683H7.313a.348.348 0 00-.348.348v7.478c0 .192.156.348.348.348h.87v2.61a.87.87 0 001.74 0v-2.61h2.174v2.61a.87.87 0 001.74 0v-2.61h.87a.348.348 0 00.348-.348V9.006a.348.348 0 00-.348-.348zM8.948 6.695l-.826-1.431a.174.174 0 00-.3.174l.838 1.452a5.203 5.203 0 00-2.356 2.007h10.392A5.203 5.203 0 0014.34 6.89l.838-1.452a.174.174 0 10-.3-.174l-.826 1.431A5.16 5.16 0 0012 6.26a5.16 5.16 0 00-3.052.435z" />
  </svg>
);

// Apple SVG icon component
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
  </svg>
);

export default function Products() {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const products = [
    {
      id: 1,
      name: t('products.nalyst.name'),
      description: t('products.nalyst.description'),
      logo: nalystLogo,
      color: '#00D4AA',
      tagline: language === 'en' ? 'AI Powered Analytics' : 'تحليلات مدعومة بالذكاء الاصطناعي',
      url: "https://nalyst.ai",
      platforms: {
        // android: "https://play.google.com/",
        // ios: "https://apps.apple.com/",
        web: "https://nalyst.ai"
      },
      industries: language === 'en'
        ? [
          { label: 'Government Organizations', Icon: Building2, color: '#6366f1', bg: '#ede9fe', border: '#c4b5fd' },
          { label: 'Think Tanks', Icon: Lightbulb, color: '#a855f7', bg: '#faf5ff', border: '#d8b4fe' },
          { label: 'Media Departments', Icon: Tv2, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ]
        : [
          { label: 'الحكومة', Icon: Building2, color: '#6366f1', bg: '#ede9fe', border: '#c4b5fd' },
          { label: 'مراكز الفكر', Icon: Lightbulb, color: '#a855f7', bg: '#faf5ff', border: '#d8b4fe' },
          { label: 'الإعلام', Icon: Tv2, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ],
      features: language === 'en'
        ? ['Real time global news monitoring', 'Custom analytics dashboards', 'Entity extraction & trend detection', 'Multi language news analysis']
        : ['معالجة البيانات في الوقت الفعلي', 'منشئ لوحات المعلومات المخصصة', 'رؤى تنبؤية', 'تكامل متعدد المصادر'],
    },
    {
      id: 2,
      name: t('products.newshunt.name'),
      description: t('products.newshunt.description'),
      logo: newsHuntLogo,
      color: '#C9A227',
      tagline: language === 'en' ? 'GLOBAL NEWS AGGREGATION' : 'الذكاء الإعلامي',
      url: 'https://newshunt.io',
      platforms: {
        android: "https://play.google.com/store/apps/details?id=com.ngen.newshunt",
        ios: "https://apps.apple.com/us/app/news-hunt-app/id6472041101",
        web: "https://newshunt.io"
      },
      industries: language === 'en'
        ? [
          { label: 'Government Organizations', Icon: Building2, color: '#6366f1', bg: '#ede9fe', border: '#c4b5fd' },
          { label: 'Think Tanks', Icon: Lightbulb, color: '#a855f7', bg: '#faf5ff', border: '#d8b4fe' },
          { label: 'Media Departments', Icon: Tv2, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ]
        : [
          { label: 'وكالات الأخبار', Icon: Newspaper, color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd' },
          { label: 'الصحفيون', Icon: PenLine, color: '#10b981', bg: '#f0fdf4', border: '#a7f3d0' },
          { label: 'الباحثون', Icon: Search, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ],
      features: language === 'en'
        ? ['Global news & opinion aggregation', 'Multi language news coverage', 'Personalized feeds & customization', 'Smart alerts and trending topics']
        : ['تجميع الأخبار بالذكاء الاصطناعي', 'تحليل المشاعر', 'اكتشاف الاتجاهات', 'تنبيهات وتقارير مخصصة'],
    },
    {
      id: 3,
      name: t('products.asaad.name'),
      description: t('products.asaad.description'),
      logo: assadLogo,
      color: '#00D4AA',
      tagline: language === 'en' ? 'AI POWERED INTRUSION DETECTION' : 'أمان المؤسسات',
      url: 'https://diraa.io',
      platforms: {
        // android: "https://play.google.com/",
        // ios: "https://apps.apple.com/",
        web: "https://diraa.io"
      },
      industries: language === 'en'
        ? [
          { label: 'Government Organizations', Icon: Building2, color: '#6366f1', bg: '#ede9fe', border: '#c4b5fd' },
          { label: 'Think Tanks', Icon: Lightbulb, color: '#a855f7', bg: '#faf5ff', border: '#d8b4fe' },
          { label: 'Media Departments', Icon: Tv2, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ]
        : [
          { label: 'الشركات', Icon: Building2, color: '#6366f1', bg: '#ede9fe', border: '#c4b5fd' },
          { label: 'البنوك', Icon: Landmark, color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd' },
          { label: 'الدفاع', Icon: Shield, color: '#ef4444', bg: '#fef2f2', border: '#fecaca' },
        ],
      features: language === 'en'
        ? ['AI generated detection rules', 'Real time intrusion detection & prevention', 'Advanced threat monitoring', 'Security analytics & alerts']
        : ['اكتشاف التهديدات والاستجابة', 'إدارة الثغرات', 'مراقبة الامتثال', 'تحليلات الأمان'],
    },
    {
      id: 4,
      name: t('products.khella.name'),
      description: t('products.khella.description'),
      logo: khellaLogo,
      color: '#C9A227',
      tagline: language === 'en' ? 'SMART BEAUTY SHOPPING' : 'التعاون الذكي',
      url: 'https://hoor.app',
      platforms: {
        android: "https://play.google.com/",
        ios: "https://apps.apple.com/",
        web: "https://hoor.app"
      },
      industries: language === 'en'
        ? [
          { label: 'Retail', Icon: ShoppingBag, color: '#ec4899', bg: '#fdf2f8', border: '#f9a8d4' },
          { label: 'Beauty Brands', Icon: Star, color: '#a855f7', bg: '#faf5ff', border: '#d8b4fe' },
          { label: 'E-Commerce', Icon: ShoppingCart, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ]
        : [
          { label: 'التجزئة', Icon: ShoppingBag, color: '#ec4899', bg: '#fdf2f8', border: '#f9a8d4' },
          { label: 'العلامات التجارية', Icon: Star, color: '#a855f7', bg: '#faf5ff', border: '#d8b4fe' },
          { label: 'التجارة الإلكترونية', Icon: ShoppingCart, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ],
      features: language === 'en'
        ? ['Beauty product price comparison', 'Multi store product aggregation', 'Find nearest available shops', 'Smart product recommendations']
        : ['المراسلة الآمنة', 'مؤتمرات الفيديو', 'مشاركة الملفات والتعاون', 'مساعد الاجتماعات بالذكاء الاصطناعي'],
    },
    {
      id: 5,
      name: t('products.4kast.name'),
      description: t('products.4kast.description'),
      logo: kastLogo,
      color: '#00D4AA',
      tagline: language === 'en' ? 'PREDICTIVE RETAIL INTELLIGENCE' : 'الذكاء التنبؤي',
      url: 'https://foreqast.com',
      platforms: {
        // android: "https://play.google.com/",
        // ios: "https://apps.apple.com/",
        web: "https://foreqast.com"
      },
      industries: language === 'en'
        ? [
          { label: 'Retail Chains', Icon: Store, color: '#10b981', bg: '#f0fdf4', border: '#a7f3d0' },
          { label: 'E-Commerce', Icon: ShoppingCart, color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd' },
          { label: 'Logistics', Icon: Truck, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ]
        : [
          { label: 'سلاسل البيع', Icon: Store, color: '#10b981', bg: '#f0fdf4', border: '#a7f3d0' },
          { label: 'التجارة الإلكترونية', Icon: ShoppingCart, color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd' },
          { label: 'اللوجستيات', Icon: Truck, color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
        ],
      features: language === 'en'
        ? ['Sales forecasting', 'Inventory demand prediction', 'Retail and e commerce analytics', 'Smart inventory planning']
        : ['التنبؤ بالطلب', 'التنبؤ بالمخاطر', 'تحليل السوق', 'تخطيط السيناريوهات'],
    },
    {
      id: 6,
      name: t('products.hr360.name'),
      description: t('products.hr360.description'),
      logo: hr360Logo,
      color: '#C9A227',
      tagline: language === 'en' ? 'SAUDI COMPLIANT HR MANAGEMENT' : 'إدارة الموارد البشرية',
      url: 'https://qanunhr.com',
      platforms: {
        // android: "https://play.google.com/",
        // ios: "https://apps.apple.com/",
        web: "https://qanunhr.com"
      },
      industries: language === 'en'
        ? [
          { label: 'Corporations', Icon: Network, color: '#6366f1', bg: '#ede9fe', border: '#c4b5fd' },
          { label: 'HR Departments', Icon: Users, color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd' },
          { label: 'Saudi Enterprises', Icon: Flag, color: '#10b981', bg: '#f0fdf4', border: '#a7f3d0' },
        ]
        : [
          { label: 'الشركات الكبرى', Icon: Network, color: '#6366f1', bg: '#ede9fe', border: '#c4b5fd' },
          { label: 'الموارد البشرية', Icon: Users, color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd' },
          { label: 'المؤسسات السعودية', Icon: Flag, color: '#10b981', bg: '#f0fdf4', border: '#a7f3d0' },
        ],
      features: language === 'en'
        ? ['Employee lifecycle management', 'Payroll & benefits automation', 'Performance tracking & evaluation', 'Compliance with Saudi labor regulations']
        : ['إدارة دورة حياة الموظف', 'تتبع الأداء', 'أتمتة الرواتب', 'التعلم والتطوير'],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HeroImage} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/40"></div>
          <div className="absolute inset-0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className={`max-w-3xl mx-auto text-center ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {t('products.title')}
            </h1>
            <p className={`text-xl text-white leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #32a7b5 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-[#32a7b5]/15 hover:border-[#32a7b5]/60 transition-all duration-500 flex flex-col h-[610px] md:h-[560px] ${dir === 'rtl' ? 'text-right' : ''}`}
                style={{ boxShadow: '0 4px 24px rgba(50,167,181,0.08)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(50,167,181,0.18)' }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#32a7b5] to-[#1d7a85] flex-shrink-0" />
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#32a7b5]/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className={`relative z-10 p-5 sm:p-7 flex flex-col flex-1 overflow-hidden ${dir === 'rtl' ? 'text-right' : ''}`}>

                  {/* Header */}
                  <div className={`flex items-center gap-4 mb-4 flex-shrink-0 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <a href={product.url}
                      className="flex-shrink-0 w-22 h-22 rounded-2xl bg-[#f0fafb] border border-[#32a7b5]/20 flex items-center justify-center hover:scale-110 hover:border-[#32a7b5]/50 hover:bg-[#32a7b5]/10 transition-all duration-300 overflow-hidden">
                      <img src={product.logo} alt={product.name} className="w-20 h-20 object-contain" />
                    </a>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 truncate ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
                        {product.name}
                      </h3>
                      <span className={`inline-block text-[11px] font-bold text-[#32a7b5] uppercase tracking-widest px-3 py-1 rounded-full bg-[#32a7b5]/8 border border-[#32a7b5]/20 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                        {product.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#32a7b5]/20 to-transparent mb-4 flex-shrink-0" />

                  {/* Description */}
                  <p className={`text-gray-500 mb-4 leading-relaxed text-sm line-clamp-2 flex-shrink-0 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                    {product.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 flex-shrink-0">
                    {product.features.map((feature, i) => (
                      <div key={i}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f0fafb] border border-[#32a7b5]/10 group-hover:border-[#32a7b5]/25 transition-colors duration-300 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-[#32a7b5]" />
                        <span className={`text-gray-700 text-xs font-medium leading-tight ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ── Built for Industries ── */}
                  <div className="mb-3 flex-shrink-0">
                    <p className={`text-[12px] font-bold text-gray-400 uppercase tracking-[0.18em] mb-2 ${dir === 'rtl' ? 'font-arabic text-right' : ''}`}>
                      {language === 'en' ? 'Built for Industries' : 'مُصمَّم للقطاعات'}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      {product.industries.map((ind, i) => (
                        <span key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 hover:scale-105 cursor-default"
                          style={{ color: ind.color, backgroundColor: ind.bg, borderColor: ind.border }}>
                          <ind.Icon className="w-3.5 h-3.5" style={{ color: ind.color }} />
                          {ind.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Available On (Platform Icons) ── */}
                  <div className={`flex items-center gap-2 mb-4 flex-shrink-0 flex-wrap ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-[12px] font-bold text-gray-400 uppercase tracking-[0.18em] ${dir === 'rtl' ? 'font-arabic ml-1' : 'mr-1'}`}>
                      {language === 'en' ? 'Available on' : 'متاح على'}
                    </span>

                    {/* Android */}
                    {product.platforms?.android && (
                      <a href={product.platforms.android} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: '#f0fdf4', borderColor: '#86efac', color: '#16a34a' }}>
                        <AndroidIcon className="w-4.5 h-4.5" />
                        <span className="text-[10px] font-bold">Android</span>
                      </a>
                    )}

                    {/* iOS */}
                    {product.platforms?.ios && (
                      <a href={product.platforms.ios} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: '#f5f5f5', borderColor: '#d4d4d4', color: '#404040' }}>
                        <AppleIcon className="w-4.5 h-4.5" />
                        <span className="text-[10px] font-bold">IOS</span>
                      </a>
                    )}

                    {/* Web */}
                    {product.platforms?.web && (
                      <a href={product.platforms.web} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: '#f0f9ff', borderColor: '#7dd3fc', color: '#0284c7' }}>
                        <Globe className="w-4.5 h-4.5" />
                        <span className="text-[10px] font-bold">Web</span>
                      </a>
                    )}
                  </div>

                  {/* ── Buttons ── */}
                  <div className={`grid grid-cols-2 gap-3 mt-auto flex-shrink-0 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <Link href="/contact" className="w-full">
                      <motion.button
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#32a7b5] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-[0_8px_24px_rgba(50,167,181,0.4)] hover:bg-[#1d8f9d] transition-all duration-300 ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <span className="truncate">{language === 'en' ? 'Request Demo' : 'طلب عرض'}</span>
                        <ArrowIcon className="w-3.5 h-3.5 flex-shrink-0" />
                      </motion.button>
                    </Link>

          
                    <a href={product.url} className="w-full">
                      <motion.button
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#32a7b5] font-bold text-xs sm:text-sm rounded-xl border-2 border-[#32a7b5] hover:bg-[#32a7b5] hover:text-white transition-all duration-300 ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        {/* <Globe size={14} className="flex-shrink-0" />  */}
                        <span>{language === 'en' ? 'Visit' : 'زيارة'}</span>
                        <ExternalLink size={15} className="flex-shrink-0" />
                      </motion.button>
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#32a7b5]/10 border-2 border-[#32a7b5]/30 flex items-center justify-center mx-auto mb-6 shadow-md">
              <Sparkles className="w-8 h-8 text-[#32a7b5]" />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#314158] mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Seamless Integration' : 'تكامل سلس'}
            </h2>
            <p className={`text-gray-700 text-lg leading-relaxed ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? "All our products are designed to work together seamlessly, creating a unified ecosystem that enhances your organization's capabilities. Whether you need one solution or the complete suite, we ensure smooth integration with your existing systems."
                : 'جميع منتجاتنا مصممة للعمل معاً بسلاسة، مما يخلق نظاماً بيئياً موحداً يعزز قدرات مؤسستك. سواء كنت بحاجة إلى حل واحد أو المجموعة الكاملة، نضمن التكامل السلس مع أنظمتك الحالية.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 relative">
          <motion.div
            className={`text-center max-w-3xl mx-auto ${dir === 'rtl' ? 'font-arabic' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-[#314158] mb-6 ${dir === 'rtl' ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Ready to Get Started?' : 'هل أنت مستعد للبدء؟'}
            </h2>
            <p className={`text-gray-700 text-lg mb-10 ${dir === 'rtl' ? 'font-arabic' : 'font-body'}`}>
              {language === 'en'
                ? 'Contact us today to schedule a personalized demo and discover how our products can transform your business.'
                : 'تواصل معنا اليوم لجدولة عرض توضيحي مخصص واكتشف كيف يمكن لمنتجاتنا تحويل أعمالك.'
              }
            </p>
            <Link href="/contact">
              <motion.button
                className={`inline-flex items-center gap-3 px-10 py-5 bg-[#32a7b5] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all ${dir === 'rtl' ? 'flex-row-reverse font-arabic' : 'font-body'}`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'Schedule a Demo' : 'جدولة عرض توضيحي'}
                <ArrowIcon className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}