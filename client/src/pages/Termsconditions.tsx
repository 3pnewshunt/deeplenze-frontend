import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import HeroImage from "@/assets/images/herosection.png";
export default function TermsConditions() {
  const { dir, language } = useLanguage();
  const isRTL = dir === 'rtl';

  // const sections = [
  //   {
  //     number: '1.',
  //     title: language === 'en' ? 'Acceptance of Terms' : 'قبول الشروط',
  //     content: language === 'en'
  //       ? 'By accessing or using Deeplenze services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.'
  //       : 'بالوصول إلى خدمات ديب لنز أو استخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.',
  //   },
  //   {
  //     number: '2.',
  //     title: language === 'en' ? 'Use of Services' : 'استخدام الخدمات',
  //     isList: true,
  //     items: language === 'en'
  //       ? [
  //         'You must be at least 18 years old to use our services.',
  //         'You agree not to misuse or attempt to disrupt our platform.',
  //         'You are responsible for maintaining the confidentiality of your account credentials.',
  //         'You agree to provide accurate and up-to-date information.',
  //       ]
  //       : [
  //         'يجب أن يكون عمرك 18 عاماً على الأقل لاستخدام خدماتنا.',
  //         'توافق على عدم إساءة استخدام منصتنا أو محاولة تعطيلها.',
  //         'أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك.',
  //         'توافق على تقديم معلومات دقيقة ومحدّثة.',
  //       ],
  //   },
  //   {
  //     number: '3.',
  //     title: language === 'en' ? 'Intellectual Property' : 'الملكية الفكرية',
  //     content: language === 'en'
  //       ? 'All content, trademarks, and technology on our platform are owned by or licensed to Deeplenze. You may not copy, reproduce, or distribute any part of our services without prior written permission.'
  //       : 'جميع المحتويات والعلامات التجارية والتقنيات الموجودة على منصتنا مملوكة لشركة ديب لنز أو مرخصة لها. لا يجوز لك نسخ أي جزء من خدماتنا أو إعادة إنتاجه أو توزيعه دون إذن كتابي مسبق.',
  //   },
  //   {
  //     number: '4.',
  //     title: language === 'en' ? 'User Content' : 'محتوى المستخدم',
  //     content: language === 'en'
  //       ? 'You retain ownership of any content you submit. By submitting content, you grant Deeplenze a non-exclusive, royalty-free license to use it solely for providing and improving our services.'
  //       : 'تحتفظ بملكية أي محتوى تقدمه. بتقديم المحتوى، فإنك تمنح ديب لنز ترخيصاً غير حصري وخالياً من حقوق الملكية لاستخدامه فقط لتقديم خدماتنا وتحسينها.',
  //   },
  //   {
  //     number: '5.',
  //     title: language === 'en' ? 'Limitation of Liability' : 'تحديد المسؤولية',
  //     content: language === 'en'
  //       ? 'Deeplenze shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the past 12 months.'
  //       : 'لن تكون ديب لنز مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية ناجمة عن استخدامك لخدماتنا. لن تتجاوز مسؤوليتنا الإجمالية المبلغ الذي دفعته خلال الاثني عشر شهراً الماضية.',
  //   },
  //   {
  //     number: '6.',
  //     title: language === 'en' ? 'Termination' : 'الإنهاء',
  //     content: language === 'en'
  //       ? 'We reserve the right to suspend or terminate your access at any time if you violate these terms or engage in conduct harmful to other users or our platform.'
  //       : 'نحتفظ بالحق في تعليق وصولك أو إنهائه في أي وقت إذا انتهكت هذه الشروط أو تصرفت بطريقة ضارة بالمستخدمين الآخرين أو منصتنا.',
  //   },
  //   {
  //     number: '7.',
  //     title: language === 'en' ? 'Third-Party Links' : 'روابط الطرف الثالث',
  //     content: language === 'en'
  //       ? 'Our services may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.'
  //       : 'قد تحتوي خدماتنا على روابط لمواقع إلكترونية تابعة لجهات خارجية. نحن لسنا مسؤولين عن محتوى تلك المواقع أو ممارسات الخصوصية الخاصة بها.',
  //   },
  //   {
  //     number: '8.',
  //     title: language === 'en' ? 'Modifications to Terms' : 'تعديلات الشروط',
  //     content: language === 'en'
  //       ? 'We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms.'
  //       : 'قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرار استخدامك للخدمات بعد التغييرات يُعدّ قبولاً للشروط المعدّلة.',
  //   },
  //   {
  //     number: '9.',
  //     title: language === 'en' ? 'Governing Law' : 'القانون الحاكم',
  //     content: language === 'en'
  //       ? 'These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Saudi Arabia.'
  //       : 'تخضع هذه الشروط لقوانين المملكة العربية السعودية. وتخضع أي نزاعات للاختصاص القضائي الحصري لمحاكم المملكة العربية السعودية.',
  //   },
  //   {
  //     number: '10.',
  //     title: language === 'en' ? 'Contact' : 'تواصل معنا',
  //     content: language === 'en'
  //       ? 'For any questions regarding these Terms, please reach out to us at support@deeplenze.com.'
  //       : 'لأي أسئلة تتعلق بهذه الشروط، يرجى التواصل معنا على support@deeplenze.com.',
  //   },
  // ];

  return (
    <div className="min-h-screen ">
      <Navbar />

      <main className="flex-1 pt-20">


        {/* Hero */}
        <div className="relative w-full pl-5 pr-8 py-24 overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={HeroImage}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* <p className="text-[#32a7b5] text-sm font-semibold uppercase tracking-widest mb-3">
      {language === 'en' ? 'Legal' : 'قانوني'}
    </p> */}
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-5 ${isRTL ? 'font-arabic' : 'font-display'}`}>
              {language === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
            </h1>
            {/* <p className={`text-white/80 text-center text-lg leading-relaxed mb-4  ${isRTL ? 'font-arabic' : 'font-body'}`}>
      {language === 'en'
        ? "Please read these Terms and Conditions carefully before using Deeplenze's platform and services."
        : 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصة وخدمات ديب لنز.'}
    </p> */}
            {/* <p className="text-white/50 text-base">
      {language === 'en' ? 'Last updated: February 7, 2026' : 'آخر تحديث: ٧ فبراير ٢٠٢٦'}
    </p> */}
          </div>

        </div>

        <div className="max-w-7xl px-5 mx-auto  py-16 space-y-5 text-slate-600 text-sm md:text-base leading-8">
          <p>Welcome to Deeplenz. These Terms and Conditions govern your access to and use of the Deeplenz website, its services, software platforms, and digital products. By accessing or using this website and any services offered by Deeplenz, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, you should not use this website or any of the services provided through it.</p>
          <p>Deeplenz is a technology company that provides professional services and digital products in the fields of cybersecurity, artificial intelligence, cloud computing, and digital transformation. The company offers consulting, implementation, analytics, monitoring, and managed services for organizations seeking to improve their technological infrastructure and security posture. Deeplenz may also develop and distribute proprietary software platforms and digital products designed to support enterprise operations, cybersecurity protection, AI-driven analytics, and cloud-based solutions.</p>
          <p>By using this website, you confirm that you are legally capable of entering into binding agreements and that you will comply with all applicable laws and regulations. Users must not engage in any activity that could harm, disrupt, or interfere with the operation of the website or services. Unauthorized access attempts, misuse of the platform, fraudulent activities, or actions that compromise the security or performance of the website are strictly prohibited.</p>
          <p>The services provided by Deeplenz may include cybersecurity assessments, threat monitoring, penetration testing, AI system development, machine learning integration, cloud infrastructure consulting, system architecture design, and enterprise software development. Access to certain services may require separate agreements, service contracts, or statements of work that define the scope, deliverables, and obligations of both parties. These agreements may include additional terms specific to the services being provided.</p>
          <p>Deeplenz may also offer proprietary software products, applications, and platforms through its website or related services. Such software is licensed to users and not sold. Users are granted a limited, non-exclusive license to use the software in accordance with the terms provided by Deeplenz. Users may not reverse engineer, modify, copy, distribute, or attempt to extract source code from any Deeplenz software without prior written consent.</p>
          <p>All content available on the Deeplenz website, including but not limited to text, graphics, designs, software, logos, product descriptions, and technological frameworks, is the intellectual property of Deeplenz or its licensors. This content is protected by applicable intellectual property laws. Users may not reproduce, distribute, publish, or commercially exploit any part of the website or its content without prior written authorization from Deeplenz.</p>
          <p>During the course of providing services, Deeplenz and its clients may exchange confidential information. Both parties agree to treat such information with strict confidentiality and to use it only for the purpose of fulfilling contractual obligations. Deeplenz will implement reasonable measures to safeguard sensitive client information and ensure that it is handled in accordance with professional standards and applicable data protection laws.</p>
          <p>While Deeplenz provides cybersecurity solutions and services designed to enhance security and resilience, no system can be guaranteed to be completely secure. Users acknowledge that cybersecurity threats evolve continuously and that Deeplenz cannot guarantee the complete prevention of security incidents, breaches, or system failures. Clients are responsible for maintaining appropriate internal controls, security practices, and operational safeguards within their own environments.</p>
          <p>The Deeplenz website or services may integrate with third-party technologies, cloud providers, software platforms, or external APIs. Deeplenz does not control and is not responsible for the practices, availability, performance, or data handling policies of these third-party services. Users are encouraged to review the terms and privacy policies of any third-party providers before using their services.</p>
          <p>To the maximum extent permitted by law, Deeplenz shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of its website, services, or products. This includes but is not limited to loss of profits, loss of data, business interruption, or damages resulting from security incidents involving third-party systems. Any liability of Deeplenz related to the services provided shall be limited to the amount paid by the client for the specific service that gave rise to the claim.</p>
          <p>All services and products provided by Deeplenz are offered on an "as is" and "as available" basis unless otherwise specified in a written agreement. Deeplenz does not provide warranties of any kind, whether express or implied, including warranties related to merchantability, fitness for a particular purpose, or non-infringement.</p>
          <p>Certain services, software products, or subscriptions offered by Deeplenz may require payment. Payment terms, billing cycles, and service fees will be specified in contracts, service agreements, invoices, or subscription plans provided to the client. Failure to comply with payment obligations may result in suspension or termination of services.</p>
          <p>Deeplenz reserves the right to suspend or terminate access to its website, services, or software products if a user violates these Terms, engages in unlawful activities, or fails to meet contractual or payment obligations. Deeplenz may also restrict access if it determines that continued use poses security risks or operational threats.</p>
          <p>These Terms and Conditions may be updated or modified by Deeplenz from time to time to reflect changes in services, legal requirements, or operational policies. Any updates will be published on the website, and continued use of the website or services after such updates constitutes acceptance of the revised Terms.</p>
          <p>These Terms shall be governed and interpreted in accordance with the applicable laws of the jurisdiction in which Deeplenz operates or where the relevant service agreement is executed. Any disputes arising from the use of the website or services shall be resolved in accordance with the applicable legal framework and dispute resolution procedures.</p>
          <p>If you have any questions regarding these Terms and Conditions or require further information about Deeplenz services and products, you may contact Deeplenz through the contact information provided on the website.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}