'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.bio': 'बायो',
    'nav.vision': 'दृष्टिकोण',
    'nav.politico': 'राजनीतिक',
    'nav.humanitarian': 'मानवतावादी',
    'nav.speeches': 'भाषण',
    'nav.contact': 'संपर्क',

    // Hero Section
    'hero.title': 'उपेन यादव',
    'hero.subtitle': 'भाजप प्रत्याशी — शाहपुरा विधानसभा क्षेत्र (042)',
    'hero.description': 'समर्पित जनसेवक जो राजस्थान के लोगों के लिए प्रगतिशील शासन, सामुदायिक विकास और नवाचार समाधानों के माध्यम से सकारात्मक बदलाव लाने के लिए प्रतिबद्ध हैं।',
    'hero.cta.primary': 'मेरे बारे में और जानें',
    'hero.cta.secondary': 'संपर्क करें',
    'hero.badge': 'भाजप',
    'hero.imageAlt': 'उपेन यादव - भाजप प्रत्याशी शाहपुरा विधानसभा',

    // Stats Section
    'stats.experience': 'वर्षों का सामाजिक सेवा अनुभव',
    'stats.programs': 'सामुदायिक कार्यक्रमों का आयोजन',
    'stats.people': 'लोगों को सीधा लाभ पहुंचाया',

    // Work Section
    'sections.work.title': 'मेरा काम जानें',
    'sections.work.subtitle': 'जनसेवा और सामुदायिक विकास के प्रति मेरी प्रतिबद्धता के विभिन्न पहलुओं को जानें।',

    // Feature Cards
    'cards.vision.title': 'दृष्टिकोण',
    'cards.vision.description': 'बेहतर राजस्थान के लिए प्रगतिशील नीतियों और नवाचार समाधानों के प्रति मेरी प्रतिबद्धता जानें।',
    'cards.vision.alt': 'दृष्टिकोण कार्ड',
    'cards.politico.title': 'राजनीतिक यात्रा',
    'cards.politico.description': 'शाहपुरा निर्वाचन क्षेत्र के लोगों की सेवा के प्रति मेरी राजनीतिक यात्रा और समर्पण के बारे में जानें।',
    'cards.politico.alt': 'राजनीतिक यात्रा कार्ड',
    'cards.humanitarian.title': 'मानवतावादी कार्य',
    'cards.humanitarian.description': 'सामाजिक कल्याण कार्यक्रमों और सामुदायिक विकास पर केंद्रित मेरी पहलों का अन्वेषण करें।',
    'cards.humanitarian.alt': 'मानवतावादी कार्य कार्ड',
    'cards.speeches.title': 'भाषण और मीडिया',
    'cards.speeches.description': 'महत्वपूर्ण मुद्दों पर मेरे भाषणों, साक्षात्कारों और सार्वजनिक संबोधनों को देखें और पढ़ें।',
    'cards.speeches.alt': 'भाषण और मीडिया कार्ड',

    // Quote Section
    'quote.text': 'सच्ची नेतृत्व की कला शासन करने में नहीं, बल्कि शासितों की देखभाल करने में है।',
    'quote.author': 'उपेन यादव',

    // CTA Section
    'cta.title': 'जुड़ाव के लिए तैयार हैं?',
    'cta.description': 'चाहे आपके पास प्रश्न हों, सुझाव हों या आप हमारे सामुदायिक पहलों में शामिल होना चाहते हों, मैं आपसे सुनना पसंद करूंगा।',
    'cta.primary': 'संपर्क करें',
    'cta.secondary': 'मेरा दृष्टिकोण पढ़ें',

    // Footer
    'footer.copyright': 'सभी अधिकार सुरक्षित',
    'footer.built': 'जनसेवा के प्रति समर्पण के साथ बनाया गया',
    'footer.quickLinks': 'त्वरित लिंक',

    // Bio Page
    'bio.hero.title': 'उपेन यादव के बारे में',
    'bio.hero.subtitle': 'भाजप प्रत्याशी — शाहपुरा विधानसभा क्षेत्र (042)',
    'bio.section.journey.title': 'मेरी यात्रा',
    'bio.section.journey.paragraph1': 'राजस्थान की जीवंत भूमि में जन्मे और पले-बढ़े, मैं हमेशा से इस धरती और इसके लोगों से गहराई से जुड़ा रहा हूं। जनसेवा में मेरी यात्रा एक सरल विश्वास के साथ शुरू हुई: कि हर नागरिक को ऐसे अवसर मिलने चाहिए जो उन्हें फलने-फूलने और अपने समुदाय की वृद्धि में योगदान करने में सक्षम बनाएं।',
    'bio.section.journey.paragraph2': 'व्यापार और सामुदायिक संगठन की पृष्ठभूमि के साथ, मैं राजनीति में करियर बनाने के लिए नहीं बल्कि सेवा के आह्वान के रूप में प्रवेश किया। भारतीय जनता पार्टी के सुशासन, आर्थिक विकास और सांस्कृतिक संरक्षण के सिद्धांत मेरे अपने मूल्यों और राजस्थान के भविष्य के लिए मेरे दृष्टिकोण के साथ गहराई से मेल खाते हैं।',
    'bio.section.journey.paragraph3': 'शाहपुरा विधानसभा क्षेत्र (042) के भाजप प्रत्याशी के रूप में, मैं परंपरागत मूल्यों का सम्मान करते हुए प्रगतिशील बदलाव लाने के लिए प्रतिबद्ध हूं। मेरे फोकस क्षेत्रों में शिक्षा, स्वास्थ्य सेवा, कृषि आधुनिकीकरण, युवा रोजगार और टिकाऊ विकास शामिल हैं।',
    'bio.section.values.title': 'मेरे मूल मूल्य',
    'bio.section.values.honesty.title': 'ईमानदारी',
    'bio.section.values.honesty.description': 'सभी कार्यों और निर्णयों में पारदर्शिता और ईमानदारी, जिनकी मैं सेवा करता हूं उनके साथ विश्वास बनाना।',
    'bio.section.values.innovation.title': 'नवाचार',
    'bio.section.values.innovation.description': 'पारंपरिक समस्याओं को हल करने और अवसर पैदा करने के लिए नए विचारों और प्रौद्योगिकियों को अपनाना।',
    'bio.section.values.inclusivity.title': 'सर्वसमावेशिता',
    'bio.section.values.inclusivity.description': 'यह सुनिश्चित करना कि हर आवाज सुनी जाए और हर समुदाय को प्रगति और समृद्धि तक समान पहुंच मिले।',
    'bio.section.values.impact.title': 'प्रभाव',
    'bio.section.values.impact.description': 'ऐसे मापने योग्य परिणामों पर ध्यान केंद्रित करना जो जीवन में सुधार लाएं और हमारे समुदायों को मजबूत करें।',
    'bio.section.education.title': 'शिक्षा और अनुभव',
    'bio.section.education.mba.title': 'व्यवसाय प्रशासन में स्नातकोत्तर',
    'bio.section.education.mba.description': 'राजस्थान विश्वविद्यालय',
    'bio.section.education.leadership.title': 'सामुदायिक नेतृत्व कार्यक्रम',
    'bio.section.education.leadership.description': 'भाजप प्रशिक्षण अकादमी',
    'bio.section.education.youth.title': 'युवा विकास पहल',
    'bio.section.education.youth.description': 'विभिन्न गैर-सरकारी संगठनों और सामुदायिक संस्थाओं के साथ',

    // Vision Page
    'vision.hero.title': 'मेरा दृष्टिकोण',
    'vision.hero.subtitle': 'शाहपुरा के लिए प्रगतिशील, समावेशी और समृद्ध भविष्य का निर्माण',
    'vision.statement.title': 'भविष्य की दृष्टि',
    'vision.statement.description': 'मैं शाहपुरा विधानसभा क्षेत्र को प्रगतिशील शासन का एक मॉडल मानता हूं जहाँ हर नागरिक को गुणवत्तापूर्ण शिक्षा, स्वास्थ्य सेवाओं और आर्थिक अवसरों तक पहुंच मिले। मेरा संकल्प ऐसे टिकाऊ समुदाय बनाना है जो हमारी परंपराओं का सम्मान करते हुए नवाचार और समावेशी विकास को अपनाएँ। साथ मिलकर हम ऐसा भविष्य बनाएँगे जहाँ हर आवाज सुनी जाए, हर सपने को सहारा मिले, और हर व्यक्ति को प्रगति में योगदान करने और फलने-फूलने का अवसर मिले।',
    'vision.pillars.title': 'प्रगति के स्तंभ',
    'vision.pillars.subtitle': 'छह प्रमुख क्षेत्र जो हम सभी के लिए बेहतर भविष्य बनाने के प्रति मेरी प्रतिबद्धता की नींव हैं।',
    'vision.pillars.education.title': 'शिक्षा में उत्कृष्टता',
    'vision.pillars.education.description': 'हर बच्चे के लिए गुणवत्तापूर्ण शिक्षा सुनिश्चित करना, आधुनिक ढांचा, कुशल शिक्षक और नवीन शिक्षण विधियाँ जो हमारे युवाओं को कल की चुनौतियों के लिए तैयार करें।',
    'vision.pillars.healthcare.title': 'स्वास्थ्य सेवाओं तक पहुंच',
    'vision.pillars.healthcare.description': 'आधुनिक सुविधाओं, सुलभ उपचार और निवारक देखभाल कार्यक्रमों के साथ ऐसा स्वास्थ्य तंत्र बनाना जो हर नागरिक के कल्याण को सुनिश्चित करे।',
    'vision.pillars.economy.title': 'आर्थिक विकास',
    'vision.pillars.economy.description': 'कृषि आधुनिकीकरण, कौशल विकास कार्यक्रमों और स्थानीय व्यवसायों व उद्यमिता को समर्थन देकर टिकाऊ रोजगार के अवसर पैदा करना।',
    'vision.pillars.agriculture.title': 'टिकाऊ कृषि',
    'vision.pillars.agriculture.description': 'कृषि पद्धतियों में तकनीक का समावेश, किसानों को उचित मूल्य सुनिश्चित करना और पर्यावरण की सुरक्षा करने वाले टिकाऊ तरीकों को बढ़ावा देना।',
    'vision.pillars.youth.title': 'युवा सशक्तिकरण',
    'vision.pillars.youth.description': 'युवाओं को कौशल विकास, सार्थक रोजगार और हमारे क्षेत्र के भविष्य को आकार देने में सक्रिय भागीदारी के अवसर प्रदान करना।',
    'vision.pillars.community.title': 'सामुदायिक विकास',
    'vision.pillars.community.description': 'सुदृढ़ ढांचे, सामाजिक कार्यक्रमों और समावेशी नीतियों के माध्यम से स्थानीय समुदायों को मजबूत बनाना जिनका लाभ समाज के हर वर्ग को मिले।',
    'vision.cta.title': 'क्या हम साथ मिलकर निर्माण के लिए तैयार हैं?',
    'vision.cta.description': 'यह दृष्टिकोण केवल आपकी भागीदारी और समर्थन से ही वास्तविकता बनेगा। आइए मिलकर वह भविष्य बनाएं जिसके हम सभी हकदार हैं।',
    'vision.cta.primary': 'आंदोलन से जुड़ें',
    'vision.cta.secondary': 'मेरी यात्रा जानें',

    // Politico Page
    'politico.hero.title': 'राजनीतिक यात्रा',
    'politico.hero.subtitle': 'लोक सेवा और लोकतांत्रिक मूल्यों के प्रति मेरी प्रतिबद्धता',
    'politico.comingSoon.title': 'जल्द आ रहा है',
    'politico.comingSoon.description': 'मेरी राजनीतिक यात्रा और समुदाय की सेवा के विस्तृत विवरण की तैयारी चल रही है।',

    // Humanitarian Page
    'humanitarian.hero.title': 'मानवतावादी कार्य',
    'humanitarian.hero.subtitle': 'समुदायों की सेवा और सकारात्मक प्रभाव बनाना',
    'humanitarian.comingSoon.title': 'जल्द आ रहा है',
    'humanitarian.comingSoon.description': 'मानवतावादी पहलों और सामुदायिक सेवा परियोजनाओं की जानकारी तैयार की जा रही है।',

    // Speeches Page
    'speeches.hero.title': 'भाषण और मीडिया',
    'speeches.hero.subtitle': 'सार्वजनिक संबोधन, साक्षात्कार और मीडिया उपस्थिति',
    'speeches.comingSoon.title': 'जल्द आ रहा है',
    'speeches.comingSoon.description': 'भाषणों और मीडिया उपस्थिति के वीडियो व प्रतिलेख तैयार किए जा रहे हैं।',

    // Contact Page
    'contact.hero.title': 'संपर्क करें',
    'contact.hero.subtitle': 'कोई प्रश्न, सुझाव या शामिल होना चाहते हैं? मुझे आपसे सुनकर खुशी होगी।',
    'contact.info.title': 'संपर्क जानकारी',
    'contact.info.office.title': 'निर्वाचन क्षेत्र कार्यालय',
    'contact.info.office.line1': 'शाहपुरा विधानसभा क्षेत्र',
    'contact.info.office.line2': 'भीलवाड़ा जिला',
    'contact.info.office.line3': 'राजस्थान, भारत',
    'contact.info.email.title': 'ईमेल',
    'contact.info.hours.title': 'कार्यालय समय',
    'contact.info.hours.line1': 'सोमवार - शनिवार',
    'contact.info.hours.line2': 'सुबह 9:00 बजे - शाम 6:00 बजे',
    'contact.follow.title': 'मेरे कार्य से जुड़े रहें',
    'contact.social.facebook': 'फ़ेसबुक',
    'contact.social.twitter': 'एक्स (Twitter)',

    // Contact Form
    'contact.form.title': 'मुझे संदेश भेजें',
    'contact.form.success': 'आपके संदेश के लिए धन्यवाद! मैं जल्द ही आपसे संपर्क करूंगा।',
    'contact.form.error': 'आपका संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें या सीधे संपर्क करें।',
    'contact.form.name.label': 'पूरा नाम *',
    'contact.form.name.placeholder': 'आपका पूरा नाम',
    'contact.form.email.label': 'ईमेल पता *',
    'contact.form.email.placeholder': 'aapka.email@udaharan.com',
    'contact.form.subject.label': 'विषय *',
    'contact.form.subject.placeholder': 'विषय चुनें',
    'contact.form.subject.general': 'सामान्य पूछताछ',
    'contact.form.subject.policy': 'नीति संबंधी प्रश्न',
    'contact.form.subject.volunteer': 'स्वयंसेवा का अवसर',
    'contact.form.subject.media': 'मीडिया पूछताछ',
    'contact.form.subject.meeting': 'भेंट अनुरोध',
    'contact.form.subject.other': 'अन्य',
    'contact.form.message.label': 'संदेश *',
    'contact.form.message.placeholder': 'आपका संदेश...',
    'contact.form.submit.sending': 'भेजा जा रहा है...',
    'contact.form.submit.default': 'संदेश भेजें',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.bio': 'Bio',
    'nav.vision': 'Vision',
    'nav.politico': 'Politico',
    'nav.humanitarian': 'Humanitarian',
    'nav.speeches': 'Speeches',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Upen Yadav',
    'hero.subtitle': 'BJP Candidate — Shahpura Assembly Constituency (042)',
    'hero.description': 'A dedicated public servant committed to bringing positive change through progressive governance, community development, and innovative solutions for the people of Rajasthan.',
    'hero.cta.primary': 'Learn More About Me',
    'hero.cta.secondary': 'Get In Touch',
    'hero.badge': 'BJP',
    'hero.imageAlt': 'Upen Yadav - BJP Candidate for Shahpura Assembly',

    // Stats Section
    'stats.experience': 'Years of Social Service Experience',
    'stats.programs': 'Community Programs Organized',
    'stats.people': 'People Directly Benefited',

    // Work Section
    'sections.work.title': 'Discover My Work',
    'sections.work.subtitle': 'Explore the many facets of my commitment to public service and community development.',

    // Feature Cards
    'cards.vision.title': 'Vision',
    'cards.vision.description': 'Discover my commitment to progressive policies and innovative solutions for a better Rajasthan.',
    'cards.vision.alt': 'Vision card',
    'cards.politico.title': 'Politico',
    'cards.politico.description': 'Learn about my political journey and dedication to serving the people of Shahpura constituency.',
    'cards.politico.alt': 'Politico card',
    'cards.humanitarian.title': 'Humanitarian Work',
    'cards.humanitarian.description': 'Explore my initiatives focused on community development and social welfare programs.',
    'cards.humanitarian.alt': 'Humanitarian work card',
    'cards.speeches.title': 'Speeches & Media',
    'cards.speeches.description': 'Watch and read my speeches, interviews, and public addresses on important issues.',
    'cards.speeches.alt': 'Speeches and media card',

    // Quote Section
    'quote.text': 'True leadership is not about being in charge. It is about taking care of those in your charge.',
    'quote.author': 'Upen Yadav',

    // CTA Section
    'cta.title': 'Ready to Connect?',
    'cta.description': 'Whether you have questions, suggestions, or want to get involved in our community initiatives, I\'d love to hear from you.',
    'cta.primary': 'Get In Touch',
    'cta.secondary': 'Read My Vision',

    // Footer
    'footer.copyright': 'All rights reserved',
    'footer.built': 'Built with dedication to public service',
    'footer.quickLinks': 'Quick Links',
    
    // Bio Page
    'bio.hero.title': 'About Upen Yadav',
    'bio.hero.subtitle': 'BJP Candidate — Shahpura Assembly Constituency (042)',
    'bio.section.journey.title': 'My Journey',
    'bio.section.journey.paragraph1': 'Born and raised in the vibrant land of Rajasthan, I have always been deeply connected to this soil and its people. My journey in public service began with a simple belief: that every citizen should have opportunities to thrive and contribute to the growth of their community.',
    'bio.section.journey.paragraph2': 'With a background in business and community organization, I entered politics not as a career but as a call to serve. The principles of the Bharatiya Janata Party—good governance, economic development, and cultural preservation—resonate deeply with my own values and my vision for the future of Rajasthan.',
    'bio.section.journey.paragraph3': 'As the BJP candidate for Shahpura Assembly Constituency (042), I am committed to bringing progressive change while honoring our traditions. My focus areas include education, healthcare, agricultural modernization, youth employment, and sustainable development.',
    'bio.section.values.title': 'My Core Values',
    'bio.section.values.honesty.title': 'Integrity',
    'bio.section.values.honesty.description': 'Transparency and honesty in every action and decision, building trust with the people I serve.',
    'bio.section.values.innovation.title': 'Innovation',
    'bio.section.values.innovation.description': 'Embracing new ideas and technologies to solve traditional challenges and create opportunities.',
    'bio.section.values.inclusivity.title': 'Inclusivity',
    'bio.section.values.inclusivity.description': 'Ensuring every voice is heard and every community has equal access to progress and prosperity.',
    'bio.section.values.impact.title': 'Impact',
    'bio.section.values.impact.description': 'Focusing on measurable outcomes that improve lives and strengthen our communities.',
    'bio.section.education.title': 'Education & Experience',
    'bio.section.education.mba.title': 'Master\'s in Business Administration',
    'bio.section.education.mba.description': 'University of Rajasthan',
    'bio.section.education.leadership.title': 'Community Leadership Program',
    'bio.section.education.leadership.description': 'BJP Training Academy',
    'bio.section.education.youth.title': 'Youth Development Initiatives',
    'bio.section.education.youth.description': 'In collaboration with various NGOs and community organizations',

    // Vision Page
    'vision.hero.title': 'My Vision',
    'vision.hero.subtitle': 'Building a progressive, inclusive, and prosperous future for Shahpura',
    'vision.statement.title': 'A Vision for Tomorrow',
    'vision.statement.description': 'I envision Shahpura Assembly Constituency as a model of progressive governance where every citizen has access to quality education, healthcare, and economic opportunities. My commitment is to build sustainable communities that honor our traditions while embracing innovation and inclusive growth. Together, we will create a future where every voice is heard, every dream is supported, and every individual has the chance to thrive and contribute to our shared prosperity.',
    'vision.pillars.title': 'Pillars of Progress',
    'vision.pillars.subtitle': 'Six key areas that form the foundation of my commitment to building a better future for all.',
    'vision.pillars.education.title': 'Education Excellence',
    'vision.pillars.education.description': 'Ensuring quality education for every child, with modern infrastructure, skilled teachers, and innovative learning methods that prepare our youth for the challenges of tomorrow.',
    'vision.pillars.healthcare.title': 'Healthcare Access',
    'vision.pillars.healthcare.description': 'Building accessible healthcare systems with modern facilities, affordable treatment, and preventive care programs that ensure the well-being of every citizen.',
    'vision.pillars.economy.title': 'Economic Development',
    'vision.pillars.economy.description': 'Creating sustainable job opportunities through agricultural modernization, skill development programs, and support for local businesses and entrepreneurship.',
    'vision.pillars.agriculture.title': 'Sustainable Agriculture',
    'vision.pillars.agriculture.description': 'Modernizing farming practices with technology, ensuring fair prices for farmers, and promoting sustainable agricultural methods that protect our environment.',
    'vision.pillars.youth.title': 'Youth Empowerment',
    'vision.pillars.youth.description': 'Creating platforms for young people to develop skills, find meaningful employment, and actively participate in shaping the future of our constituency.',
    'vision.pillars.community.title': 'Community Development',
    'vision.pillars.community.description': 'Strengthening local communities through improved infrastructure, social programs, and inclusive policies that benefit every section of society.',
    'vision.cta.title': 'Ready to Build Together?',
    'vision.cta.description': 'This vision can only become reality with your participation and support. Let\'s work together to create the future we all deserve.',
    'vision.cta.primary': 'Join the Movement',
    'vision.cta.secondary': 'Learn About My Journey',

    // Politico Page
    'politico.hero.title': 'Political Journey',
    'politico.hero.subtitle': 'My commitment to public service and democratic values',
    'politico.comingSoon.title': 'Coming Soon',
    'politico.comingSoon.description': 'Detailed information about my political journey and service to the community is being prepared.',

    // Humanitarian Page
    'humanitarian.hero.title': 'Humanitarian Work',
    'humanitarian.hero.subtitle': 'Serving communities and making a positive impact',
    'humanitarian.comingSoon.title': 'Coming Soon',
    'humanitarian.comingSoon.description': 'Information about humanitarian initiatives and community service projects is being prepared.',

    // Speeches Page
    'speeches.hero.title': 'Speeches & Media',
    'speeches.hero.subtitle': 'Public addresses, interviews, and media appearances',
    'speeches.comingSoon.title': 'Coming Soon',
    'speeches.comingSoon.description': 'Video embeds and transcripts of speeches and media appearances are being prepared.',

    // Contact Page
    'contact.hero.title': 'Get In Touch',
    'contact.hero.subtitle': 'Have a question, suggestion, or want to get involved? I\'d love to hear from you.',
    'contact.info.title': 'Contact Information',
    'contact.info.office.title': 'Constituency Office',
    'contact.info.office.line1': 'Shahpura Assembly Constituency',
    'contact.info.office.line2': 'Bhilwara District',
    'contact.info.office.line3': 'Rajasthan, India',
    'contact.info.email.title': 'Email',
    'contact.info.hours.title': 'Office Hours',
    'contact.info.hours.line1': 'Monday - Saturday',
    'contact.info.hours.line2': '9:00 AM - 6:00 PM',
    'contact.follow.title': 'Follow My Work',
    'contact.social.facebook': 'Facebook',
    'contact.social.twitter': 'Twitter',

    // Contact Form
    'contact.form.title': 'Send Me a Message',
    'contact.form.success': 'Thank you for your message! I\'ll get back to you as soon as possible.',
    'contact.form.error': 'There was an error sending your message. Please try again or contact me directly.',
    'contact.form.name.label': 'Full Name *',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.label': 'Email Address *',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.subject.label': 'Subject *',
    'contact.form.subject.placeholder': 'Select a subject',
    'contact.form.subject.general': 'General Inquiry',
    'contact.form.subject.policy': 'Policy Question',
    'contact.form.subject.volunteer': 'Volunteer Opportunity',
    'contact.form.subject.media': 'Media Inquiry',
    'contact.form.subject.meeting': 'Meeting Request',
    'contact.form.subject.other': 'Other',
    'contact.form.message.label': 'Message *',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.submit.sending': 'Sending...',
    'contact.form.submit.default': 'Send Message',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
