(function () {
  "use strict";

  const select = (selector) => document.querySelector(selector);

  const decodeHtml = (value) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = value;
    return textarea.value;
  };

  const metaSelectors = [
    { key: 'description', selector: 'meta[name="description"]' },
    { key: 'keywords', selector: 'meta[name="keywords"]' },
    { key: 'ogTitle', selector: 'meta[property="og:title"]' },
    { key: 'ogDescription', selector: 'meta[property="og:description"]' },
    { key: 'twitterTitle', selector: 'meta[property="twitter:title"]' },
    { key: 'twitterDescription', selector: 'meta[property="twitter:description"]' }
  ];

  const englishState = {
    documentLang: 'en',
    meta: {
      title: 'Vortex Development - Optimized Website Development',
      description: 'Your website is the online face of your business. We build optimized, modern, custom websites that look great on every device.',
      keywords: 'web development, optimized websites, modern websites, custom websites, responsive websites',
      ogTitle: 'Vortex Development - Optimized Website Development',
      ogDescription: 'Your website is the online face of your business. We build optimized, modern, custom websites that look great on every device.',
      twitterTitle: 'Vortex Development - Optimized Website Development',
      twitterDescription: 'Your website is the online face of your business. We build optimized, modern, custom websites that look great on every device.'
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Vortex Development',
      url: 'https://vortexdevteam.com',
      logo: 'https://vortexdevteam.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-41-98870-8878',
        contactType: 'Customer Service',
        areaServed: 'Brazil',
        availableLanguage: ['Portuguese', 'English']
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        addressCountry: 'Brazil'
      }
    },
    content: [
      { selector: '#navbar > ul > li:nth-child(1) > a', html: 'Home' },
      { selector: '#navbar > ul > li:nth-child(2) > a', html: 'About Us' },
      { selector: '#navbar > ul > li:nth-child(3) > a', html: 'Services' },
      { selector: '#navbar > ul > li:nth-child(4) > a', html: 'Pricing' },
      { selector: '#navbar > ul > li:nth-child(5) > a', html: 'Portfolio' },
      { selector: '#navbar > ul > li:nth-child(6) > a', html: 'Team' },
      { selector: '#navbar > ul > li:nth-child(7) > a', html: 'Contact' },
      { selector: '#navbar .whatsapp-cta span:last-child', html: 'Chat on WhatsApp' },
      { selector: '#hero .hero-kicker', html: 'Websites built to create trust and results' },
      { selector: '#hero h1', html: 'Your website needs to impress in the very first second.' },
      { selector: '#hero h2', html: 'We create digital experiences for businesses that want to look bigger, win clients, and sell more.' },
      { selector: '#hero .btn-get-started', html: 'Request a Quote' },
      { selector: '#hero .btn-see-work', html: 'View Projects' },
      { selector: '#hero .hero-proof span:nth-child(1)', html: '<i class="bi bi-check2-circle"></i> Design that elevates your brand' },
      { selector: '#hero .hero-proof span:nth-child(2)', html: '<i class="bi bi-check2-circle"></i> Strategy focused on business results' },
      { selector: '#hero .hero-proof span:nth-child(3)', html: '<i class="bi bi-check2-circle"></i> Fast and human support' },
      { selector: '#about .about-floating-label', html: 'Custom websites and systems' },
      { selector: '#about .about-floating-card strong', html: 'A first impression that builds trust.' },
      { selector: '#about .about-kicker', html: 'ABOUT US' },
      { selector: '#about .content h3', html: 'Your customer decides in seconds whether to trust your business.' },
      { selector: '#about .content > p', html: 'Vortex Development was born from the partnership of three friends passionate about technology. We create custom websites and web software for companies that want to sell more, look professional, and turn visitors into customers.' },
      { selector: '#about .about-points', html: '<div class="about-point"><i class="bi bi-check-circle-fill"></i><span>Modern visuals that strengthen your brand.</span></div><div class="about-point"><i class="bi bi-check-circle-fill"></i><span>Clear language that explains your service with confidence.</span></div><div class="about-point"><i class="bi bi-check-circle-fill"></i><span>Digital strategy focused on real business results.</span></div>' },
      { selector: '#about .about-metrics', html: '<div class="metric-item"><strong>100%</strong><span>Custom projects</span></div><div class="metric-item"><strong>Focus</strong><span>On local businesses and service companies</span></div><div class="metric-item"><strong>From scratch</strong><span>To final delivery</span></div>' },
      { selector: '#about .read-more', html: 'I want to impress my clients <i class="bi bi-long-arrow-right"></i>' },
      { selector: '#team .section-title h2', html: 'TEAM' },
      { selector: '#team .section-title p', html: 'Our team is ready to support you.' },
      { selector: '#team .row.gy-4 > div:nth-child(1) .member-info span', html: 'Project Lead and Developer' },
      { selector: '#team .row.gy-4 > div:nth-child(1) .member-info p', html: 'Vitor leads development across every front, making sure each project is delivered with the highest quality and efficiency while guiding the team with strategic vision and technical expertise.' },
      { selector: '#team .row.gy-4 > div:nth-child(2) .member-info span', html: 'Back-End Developer' },
      { selector: '#team .row.gy-4 > div:nth-child(2) .member-info p', html: 'Guilherme specializes in back-end development, contributing robust and innovative technical solutions to ensure every feature works smoothly and meets each client&rsquo;s needs.' },
      { selector: '#team .row.gy-4 > div:nth-child(3) .member-info span', html: 'Back-End and Cloud Computing Developer' },
      { selector: '#team .row.gy-4 > div:nth-child(3) .member-info p', html: 'Douglas is our cloud computing and database specialist, bringing modern solutions for storage, management, and scalability while always ensuring the best possible performance for our clients.' },
      { selector: '#services .section-title h2', html: 'Services' },
      { selector: '#services .section-title p', html: 'Our projects combine design, performance, and commercial strategy to turn visitors into real sales opportunities.' },
      { selector: '#services .services-trust span:nth-child(1)', html: 'Professional identity' },
      { selector: '#services .services-trust span:nth-child(2)', html: 'Conversion-driven structure' },
      { selector: '#services .services-trust span:nth-child(3)', html: 'SEO and performance' },
      { selector: '#services .services-trust span:nth-child(4)', html: 'Support at every stage' },
      { selector: '#services .row.gy-4 > div:nth-child(1) h4 a', html: 'Corporate Websites' },
      { selector: '#services .row.gy-4 > div:nth-child(1) p', html: 'They present information about a company, organization, or institution, including its story, mission, vision, team, and services.' },
      { selector: '#services .row.gy-4 > div:nth-child(2) h4 a', html: 'E-commerce' },
      { selector: '#services .row.gy-4 > div:nth-child(2) p', html: 'Custom, secure, and scalable online stores with payment integration and inventory management.' },
      { selector: '#services .row.gy-4 > div:nth-child(3) h4 a', html: 'One-Page Websites' },
      { selector: '#services .row.gy-4 > div:nth-child(3) p', html: 'Single-page websites that present all information in one place, with section-based navigation, ideal for focused campaigns or concise presentations.' },
      { selector: '#services .row.gy-4 > div:nth-child(4) h4 a', html: 'Portfolio Websites' },
      { selector: '#services .row.gy-4 > div:nth-child(4) p', html: 'Attractive and interactive digital portfolios for professionals and companies, highlighting work and projects with strong design.' },
      { selector: '#services .row.gy-4 > div:nth-child(5) h4 a', html: 'Membership Websites' },
      { selector: '#services .row.gy-4 > div:nth-child(5) p', html: 'Websites with exclusive content for members or subscribers, with restricted areas accessible only after login, ideal for clubs, gyms, and online courses.' },
      { selector: '#services .row.gy-4 > div:nth-child(6) h4 a', html: 'Event and Show Websites' },
      { selector: '#services .row.gy-4 > div:nth-child(6) p', html: 'Websites created to promote events, with information about schedules, location, registration, and other relevant details.' },
      { selector: '#services .row.gy-4 > div:nth-child(7) h4 a', html: 'Real Estate Portals' },
      { selector: '#services .row.gy-4 > div:nth-child(7) p', html: 'Websites that list properties for sale or rent, with search features, filters, and detailed property pages.' },
      { selector: '#services .row.gy-4 > div:nth-child(8) h4 a', html: 'Vehicle Sales Websites' },
      { selector: '#services .row.gy-4 > div:nth-child(8) p', html: 'Websites that list vehicles for sale, with search features, filters, and vehicle detail pages.' },
      { selector: '#services .row.gy-4 > div:nth-child(9) h4 a', html: 'Custom Websites' },
      { selector: '#services .row.gy-4 > div:nth-child(9) p', html: 'Customize your website however you need for your business. Book a meeting with us and show us your idea.' },
      { selector: '#features .section-title h2', html: 'Advantages' },
      { selector: '#features .section-title p', html: 'We do not deliver just a beautiful website. We deliver a complete digital structure to strengthen your brand and make selling easier.' },
      { selector: '#features .icon-box:nth-of-type(1) h4', html: 'Responsive Design' },
      { selector: '#features .icon-box:nth-of-type(1) p', html: 'Our websites are built to provide an excellent user experience across desktops, tablets, and smartphones.' },
      { selector: '#features .icon-box:nth-of-type(2) h4', html: 'SEO Optimization' },
      { selector: '#features .icon-box:nth-of-type(2) p', html: 'We apply SEO best practices to improve your website&rsquo;s visibility in search engines, bringing in more organic traffic and expanding your reach.' },
      { selector: '#features .icon-box:nth-of-type(3) h4', html: 'Advanced Security' },
      { selector: '#features .icon-box:nth-of-type(3) p', html: 'We implement robust security measures to protect your website from cyber threats and preserve your data integrity.' },
      { selector: '#features .icon-box:nth-of-type(4) h4', html: 'Optimized Performance' },
      { selector: '#features .icon-box:nth-of-type(4) p', html: 'Our websites are developed for fast load times and efficient performance, delivering a smooth experience for users.' },
      { selector: '#testimonials .section-title h2', html: 'Testimonials' },
      { selector: '#testimonials .section-title p', html: 'See what our clients wrote about us.' },
      { selector: '#testimonials .swiper-slide:nth-child(1) .testimonial-item p', html: '<i class="bx bxs-quote-alt-left quote-icon-left"></i>Excellent service from Vortex, fair pricing, quick response times, and they explained every detail of the project with complete honesty.<i class="bx bxs-quote-alt-right quote-icon-right"></i>' },
      { selector: '#testimonials .swiper-slide:nth-child(1) h4', html: 'Independent Professional' },
      { selector: '#testimonials .swiper-slide:nth-child(2) .testimonial-item p', html: '<i class="bx bxs-quote-alt-left quote-icon-left"></i>I had an excellent experience with the Domu Cabinets website. It not only met my expectations, but also exceeded my clients&rsquo; expectations. Navigation is intuitive and the information is clear and detailed, making product selection much easier. I strongly recommend it.<i class="bx bxs-quote-alt-right quote-icon-right"></i>' },
      { selector: '#testimonials .swiper-slide:nth-child(3) .testimonial-item p', html: '<i class="bx bxs-quote-alt-left quote-icon-left"></i>I can only say thank you. It exceeded our expectations and met our demands extremely well. The landing page was even integrated with our Salesforce CRM.<i class="bx bxs-quote-alt-right quote-icon-right"></i>' },
      { selector: '#testimonials .swiper-slide:nth-child(3) h4', html: 'Organnact USA Manager' },
      { selector: '#portfolio .section-title h2', html: 'Portfolio' },
      { selector: '#portfolio .section-title p', html: 'Real projects developed for companies that needed more digital presence, more authority, and more results.' },
      { selector: '#portfolio .portfolio-item:nth-child(1) .portfolio-dropdown a:nth-child(1)', html: 'View Images' },
      { selector: '#portfolio .portfolio-item:nth-child(1) .portfolio-dropdown a:nth-child(3)', html: 'View Project' },
      { selector: '#portfolio .portfolio-item:nth-child(2) .portfolio-dropdown a:nth-child(1)', html: 'View Images' },
      { selector: '#portfolio .portfolio-item:nth-child(2) .portfolio-dropdown a:nth-child(3)', html: 'View Project' },
      { selector: '#portfolio .portfolio-item:nth-child(3) .portfolio-dropdown a:nth-child(1)', html: 'View Images' },
      { selector: '#portfolio .portfolio-item:nth-child(3) .portfolio-dropdown a:nth-child(3)', html: 'View Project' },
      { selector: '#portfolio .portfolio-item:nth-child(4) .portfolio-dropdown a:nth-child(1)', html: 'View Images' },
      { selector: '#portfolio .portfolio-item:nth-child(4) .portfolio-dropdown a:nth-child(3)', html: 'View Project' },
      { selector: '#pricing .section-title h2', html: 'Plans' },
      { selector: '#pricing .section-title p', html: 'Choose the best format for your business stage. In every plan, we adapt the project to match your brand identity.' },
      { selector: '#pricing .pricing-grid > div:nth-child(1) .pricing-card-head', html: '<h3>Standard</h3><p class="pricing-goal">A professional website to take your brand off the ground</p><div class="pricing-value"><strong>R$ 1.497</strong><span>one-time payment</span></div>' },
      { selector: '#pricing .pricing-grid > div:nth-child(1) .pricing-list', html: '<li><i class="bi bi-check-circle-fill"></i> Pre-structured layout adapted to your business identity.</li><li><i class="bi bi-check-circle-fill"></i> Up to 5 sections of your choice.</li><li><i class="bi bi-check-circle-fill"></i> Colors, logo, texts, and images adjusted for your brand.</li><li><i class="bi bi-check-circle-fill"></i> Responsive website for mobile and desktop.</li><li><i class="bi bi-check-circle-fill"></i> WhatsApp button and contact form.</li><li><i class="bi bi-check-circle-fill"></i> Basic SEO for Google indexing.</li><li><i class="bi bi-check-circle-fill"></i> Google Analytics integration.</li><li><i class="bi bi-check-circle-fill"></i> 1 month of support for small adjustments after delivery.</li>' },
      { selector: '#pricing .pricing-grid > div:nth-child(1) .pricing-cta a', html: 'I want to launch my website' },
      { selector: '#pricing .pricing-grid > div:nth-child(2) .pricing-badge', html: 'Most chosen' },
      { selector: '#pricing .pricing-grid > div:nth-child(2) .pricing-card-head', html: '<h3>Plus</h3><p class="pricing-goal">A complete website built to sell more and convey more authority</p><div class="pricing-value"><strong>R$ 2.297</strong><span>one-time payment</span></div>' },
      { selector: '#pricing .pricing-grid > div:nth-child(2) .pricing-list', html: '<li><i class="bi bi-check-circle-fill"></i> Everything from the Standard plan.</li><li><i class="bi bi-check-circle-fill"></i> Complete website structure, with no practical limit on institutional sections.</li><li><i class="bi bi-check-circle-fill"></i> Strategic page organization and visitor journey planning.</li><li><i class="bi bi-check-circle-fill"></i> Better content distribution for conversion.</li><li><i class="bi bi-check-circle-fill"></i> More refined on-page SEO.</li><li><i class="bi bi-check-circle-fill"></i> Testimonials, differentiators, FAQ, and authority blocks included.</li><li><i class="bi bi-check-circle-fill"></i> Google Analytics and Tag Manager integration.</li><li><i class="bi bi-check-circle-fill"></i> 1 month of maintenance included.</li><li><i class="bi bi-check-circle-fill"></i> Priority in the development queue.</li>' },
      { selector: '#pricing .pricing-grid > div:nth-child(2) .pricing-cta a', html: 'I want a more complete website' },
      { selector: '#pricing .pricing-grid > div:nth-child(3) .pricing-card-head', html: '<h3>Premium</h3><p class="pricing-goal">A custom project focused on performance, automation, and scalability</p><div class="pricing-value"><strong>Starting at R$ 3.490</strong><span>custom scope</span></div>' },
      { selector: '#pricing .pricing-grid > div:nth-child(3) .pricing-list', html: '<li><i class="bi bi-check-circle-fill"></i> Tailored visual and structural project.</li><li><i class="bi bi-check-circle-fill"></i> Custom pages based on your business operation.</li><li><i class="bi bi-check-circle-fill"></i> Integrations with external tools.</li><li><i class="bi bi-check-circle-fill"></i> Advanced forms and automations.</li><li><i class="bi bi-check-circle-fill"></i> APIs and specific functionality.</li><li><i class="bi bi-check-circle-fill"></i> Advanced SEO and a more robust technical structure.</li><li><i class="bi bi-check-circle-fill"></i> Planning focused on lead generation.</li><li><i class="bi bi-check-circle-fill"></i> 1 month of support after delivery.</li><li><i class="bi bi-check-circle-fill"></i> Scope and investment defined according to project needs.</li>' },
      { selector: '#pricing .pricing-grid > div:nth-child(3) .pricing-cta a', html: 'I want a custom project' },
      { selector: '#faq .section-title h2', html: 'Frequently Asked Questions' },
      { selector: '#faq .section-title p', html: 'Here we answer the most common questions from people who want to hire a professional website with confidence.' },
      { selector: '#faq .faq-list > ul > li:nth-child(1) > a', html: 'What are the stages of website development?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>' },
      { selector: '#faq-list-1 p', html: 'Website development usually follows these stages:<br><br><strong>Initial Consultation:</strong> We understand your needs and goals.<br><strong>Planning:</strong> We define the project scope and timeline.<br><strong>Design:</strong> We create the visual layout of the website.<br><strong>Development:</strong> We build the website and implement the features.<br><strong>Testing:</strong> We run thorough tests to make sure everything works perfectly.<br><strong>Launch:</strong> We publish the website and handle the final adjustments.<br><strong>Support:</strong> We provide ongoing support for maintenance and updates.' },
      { selector: '#faq .faq-list > ul > li:nth-child(2) > a', html: 'How is the website developed?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>' },
      { selector: '#faq-list-2 p', html: 'Our website development process at Vortex Development is highly customized to fit the unique needs of each client. We start with an initial meeting to understand your goals, audience, and design preferences. Then we create a visual and structural layout that reflects your brand identity. We use modern technologies such as Angular, HTML5, CSS3, and JavaScript to build a responsive, fast, and secure website. The entire process is collaborative, keeping you informed and involved from the initial design to the final launch.' },
      { selector: '#faq .faq-list > ul > li:nth-child(3) > a', html: 'Can I update my website after it goes live?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>' },
      { selector: '#faq-list-3 p', html: 'Yes. We offer ongoing support services that include content updates, technical maintenance, and improvements whenever needed. We can also handle one-off changes even if you do not have a maintenance plan.' },
      { selector: '#faq .faq-list > ul > li:nth-child(4) > a', html: 'How long does it take to develop a website?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>' },
      { selector: '#faq-list-4 p', html: 'Development time depends on the complexity of the project. A simple website can be completed in a few weeks, while a more complex one may take a few months. We provide a detailed timeline after the initial consultation.' },
      { selector: '#faq .faq-list > ul > li:nth-child(5) > a', html: 'Does Vortex provide hosting and domain services?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>' },
      { selector: '#faq-list-5 p', html: 'We do not sell hosting or domains directly. However, we can guide you on how and where to buy these services. We deliver the project files to you and, if you need help configuring hosting and publishing the website, we charge a small setup fee for that service.' },
      { selector: '#faq .faq-list > ul > li:nth-child(6) > a', html: 'What is included in technical support?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>' },
      { selector: '#faq-list-6 p', html: 'Our technical support includes bug fixes, security updates, performance optimization, and assistance with any technical changes that may come up, such as address, phone number, or image updates.' },
      { selector: '#contact .section-title h2', html: 'Contact' },
      { selector: '#contact .section-title p', html: 'We are here to help, no matter where you are. We serve clients around the world with high-quality services and personalized support.' },
      { selector: '#contact .row:first-of-type .col-lg-6 .info-box h3', html: 'Where are we based?' },
      { selector: '#contact .row:first-of-type .col-lg-6 .info-box p', html: 'Curitiba, Paran&aacute; - Brazil' },
      { selector: '#contact .row:first-of-type .col-lg-3:nth-child(2) .info-box h3', html: 'Email' },
      { selector: '#contact .row:first-of-type .col-lg-3:nth-child(3) .info-box h3', html: 'Phone' },
      { selector: '#contact .info-box-whatsapp h3', html: 'WhatsApp' },
      { selector: '#contact .info-box-whatsapp p', html: 'Direct contact with our team to answer questions and request a proposal.' },
      { selector: '#contact .contact-whatsapp-btn', html: 'Send Message' },
      { selector: '#footer .footer-contact p', html: 'Curitiba, PR<br>Brazil <br><br><strong>Phone:</strong> +55 (41) 98870-8878<br><strong>Email:</strong> contato.vtpereira@gmail.com<br>' },
      { selector: '#footer .footer-links:nth-child(2) h4', html: 'Quick Links' },
      { selector: '#footer .footer-links:nth-child(2) ul li:nth-child(1) a', html: 'Home' },
      { selector: '#footer .footer-links:nth-child(2) ul li:nth-child(2) a', html: 'About Us' },
      { selector: '#footer .footer-links:nth-child(2) ul li:nth-child(3) a', html: 'Services' },
      { selector: '#footer .footer-links:nth-child(2) ul li:nth-child(4) a', html: 'Pricing' },
      { selector: '#footer .footer-links:nth-child(2) ul li:nth-child(5) a', html: 'Portfolio' },
      { selector: '#footer .footer-links:nth-child(2) ul li:nth-child(6) a', html: 'Team' },
      { selector: '#footer .footer-links:nth-child(2) ul li:nth-child(7) a', html: 'Contact' },
      { selector: '#footer .footer-links:nth-child(3) h4', html: 'Social Media' },
      { selector: '#footer .copyright', html: '&copy; Copyright <strong><span>Vortex Development</span></strong>. All Rights Reserved.' },
      { selector: '#footer .credits', html: 'Developed by <a href="#">Vortex Development</a>' }
    ],
    attributes: [
      { selector: 'header .logo img', attributes: { alt: 'Vortex Development logo' } },
      { selector: '#hero .hero-brand img', attributes: { alt: 'Vortex Development logo' } },
      { selector: '#hero .hero-img img', attributes: { alt: 'Web Development' } },
      { selector: '#about .about-logo', attributes: { alt: 'Vortex Development logo' } },
      { selector: '#footer .footer-contact .logo img', attributes: { alt: 'Logo' } },
      { selector: '#team .row.gy-4 > div:nth-child(1) .social a:nth-child(1)', attributes: { title: 'Portfolio - Vitor Pereira' } }
    ]
  };

  const originalState = {
    captured: false,
    documentLang: document.documentElement.lang || 'pt-BR',
    meta: {},
    content: {},
    attributes: {},
    schema: ''
  };

  const captureOriginalState = () => {
    if (originalState.captured) {
      return;
    }

    originalState.documentLang = document.documentElement.lang || 'pt-BR';
    originalState.meta.title = document.title;

    metaSelectors.forEach(({ key, selector }) => {
      const element = select(selector);
      originalState.meta[key] = element ? element.getAttribute('content') || '' : '';
    });

    englishState.content.forEach(({ selector }) => {
      const element = select(selector);
      if (element) {
        originalState.content[selector] = element.innerHTML;
      }
    });

    englishState.attributes.forEach(({ selector, attributes }) => {
      const element = select(selector);
      if (!element) {
        return;
      }

      originalState.attributes[selector] = {};
      Object.keys(attributes).forEach((name) => {
        originalState.attributes[selector][name] = element.getAttribute(name) || '';
      });
    });

    const schemaScript = select('#organization-schema');
    originalState.schema = schemaScript ? schemaScript.textContent : '';
    originalState.captured = true;
  };

  const syncToggle = (language) => {
    const toggleButton = select('[data-language-toggle]');
    const label = select('[data-language-label]');
    const options = document.querySelectorAll('[data-language-option]');

    if (!toggleButton || !label) {
      return;
    }

    const toggleState = language === 'en'
      ? { label: 'English', title: 'Select language' }
      : { label: 'Portugu\u00eas', title: 'Selecionar idioma' };

    label.textContent = toggleState.label;
    toggleButton.dataset.currentLanguage = language;
    toggleButton.setAttribute('aria-label', toggleState.title);
    toggleButton.setAttribute('title', toggleState.title);

    options.forEach((option) => {
      const isActive = option.dataset.languageOption === language;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
  };

  const applyEnglish = () => {
    document.documentElement.lang = englishState.documentLang;
    document.title = englishState.meta.title;

    metaSelectors.forEach(({ key, selector }) => {
      const element = select(selector);
      if (element) {
        element.setAttribute('content', englishState.meta[key]);
      }
    });

    englishState.content.forEach(({ selector, html }) => {
      const element = select(selector);
      if (element) {
        element.innerHTML = html;
      }
    });

    englishState.attributes.forEach(({ selector, attributes }) => {
      const element = select(selector);
      if (!element) {
        return;
      }

      Object.entries(attributes).forEach(([name, value]) => {
        element.setAttribute(name, decodeHtml(value));
      });
    });

    const schemaScript = select('#organization-schema');
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(englishState.schema, null, 2);
    }
  };

  const restorePortuguese = () => {
    document.documentElement.lang = originalState.documentLang;
    document.title = originalState.meta.title;

    metaSelectors.forEach(({ key, selector }) => {
      const element = select(selector);
      if (element && Object.prototype.hasOwnProperty.call(originalState.meta, key)) {
        element.setAttribute('content', originalState.meta[key]);
      }
    });

    Object.entries(originalState.content).forEach(([selector, html]) => {
      const element = select(selector);
      if (element) {
        element.innerHTML = html;
      }
    });

    Object.entries(originalState.attributes).forEach(([selector, attributes]) => {
      const element = select(selector);
      if (!element) {
        return;
      }

      Object.entries(attributes).forEach(([name, value]) => {
        element.setAttribute(name, value);
      });
    });

    const schemaScript = select('#organization-schema');
    if (schemaScript) {
      schemaScript.textContent = originalState.schema;
    }
  };

  const applyLanguage = (language) => {
    captureOriginalState();

    if (language === 'en') {
      applyEnglish();
    } else {
      restorePortuguese();
      language = 'pt';
    }

    syncToggle(language);

    try {
      window.localStorage.setItem('vortex-language', language);
    } catch (error) {
      // Ignore storage issues and keep the site working.
    }
  };

  const languageDropdown = select('[data-language-dropdown]');
  const toggleButton = select('[data-language-toggle]');
  const languageOptions = document.querySelectorAll('[data-language-option]');

  const setDropdownOpen = (isOpen) => {
    if (!languageDropdown || !toggleButton) {
      return;
    }

    languageDropdown.classList.toggle('is-open', isOpen);
    toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  if (toggleButton && languageDropdown) {
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setDropdownOpen(!languageDropdown.classList.contains('is-open'));
    });

    languageOptions.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.preventDefault();
        applyLanguage(option.dataset.languageOption === 'en' ? 'en' : 'pt');
        setDropdownOpen(false);
      });
    });

    document.addEventListener('click', (event) => {
      if (!languageDropdown.contains(event.target)) {
        setDropdownOpen(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    });
  }

  let initialLanguage = 'pt';
  try {
    const storedLanguage = window.localStorage.getItem('vortex-language');
    if (storedLanguage === 'en') {
      initialLanguage = 'en';
    }
  } catch (error) {
    initialLanguage = 'pt';
  }

  applyLanguage(initialLanguage);
  setDropdownOpen(false);
})();
