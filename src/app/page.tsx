"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, ArrowRight, Globe, X, Play, Music2 } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

// --- Types & Content ---

type Language = "en" | "ne";

const content = {
  en: {
    nav: {
      brand: "SASMIT.",
      join: "JOIN",
      menu: "Menu"
    },
    hero: {
      headline: "Ready to Lead.",
      slogan: "Change. Transparency. Results.",
      subhead: "A new era of governance for Nepal.",
      cta: "JOIN THE TEAM",
      constituency: "Kathmandu Constituency No. 5",
      constituencyName: "Kathmandu",
      constituencyNumber: "05",
      candidateTitle: "Member of Parliament Candidate"
    },
    constituency: {
      title: "My Home, My Responsibility",
      desc: "I, Sasmit Pokharel, 29, was born, raised, and educated right here in Kathmandu. I have been continuously working close to the community. Currently, I am a candidate for Kathmandu Constituency No. 5 representing the Rastriya Swatantra Party with the election symbol 'Bell'.",
      readMore: "Read Full Commitment Letter",
      name: "Kathmandu",
      number: "05"
    },
    profile: {
      title: "Who is Sasmit?",
      education: { title: "Education", desc: "Master's in Public Policy, Anti Corruption (TU)" },
      profession: { title: "Background", desc: "LLB & BBM, Kathmandu University (2022)" },
      vision: { title: "Focus", desc: "Good Governance & Digital Transformation" }
    },
    manifesto: {
      title: "The Manifesto",
      points: [
        { title: "Education Reform & Digital Transformation", desc: "Quality, tech-friendly education. Digital Classrooms, ICT Learning, Skills & Entrepreneurship." },
        { title: "Digital Governance & Accountability", desc: "Full digitization of budget & decisions. Mobile services, Performance-based Governance." },
        { title: "Youth, Jobs & Digital Economy", desc: "Tech-based job creation. Promoting Startups, IT, Freelancing & Remote Work." },
        { title: "Digital Nomad Visa & Global Talent", desc: "Legal framework for Nomad Visas. Boosting tourism, investment & foreign exchange." },
        { title: "Service Delivery & Urban Management", desc: "One-Stop Digital Citizen Service. Long-term urban infrastructure solutions." },
        { title: "Heritage & Cultural Identity", desc: "Protection of national heritage. Heritage-based tourism & economic opportunities." }
      ]
    },
    alignment: {
      title: "A Shared Vision",
      desc: "United with the Rastriya Swatantra Party (RSP) for structural change, driven by the spirit of a new Nepal and the movement of the people.",
      partyLeader: "RABI LAMICHHANE",
      partyLeaderTitle: "The Leadership of",
      pmCandidate: "BALEN SHAH",
      pmCandidateTitle: "The Vision of"
    },
    news: {
      title: "Latest Updates",
      viewAll: "View All News",
      items: [
        { date: "Oct 24, 2025", title: "Sasmit Pokharel begins door-to-door campaign in Tokha", category: "Campaign" },
        { date: "Oct 20, 2025", title: "RSP releases national digital infrastructure policy paper", category: "Policy" },
        { date: "Oct 15, 2025", title: "Town hall meeting: Youth dialogue on employment in KTM-5", category: "Event" }
      ]
    },
    media: {
      title: "Media Coverage",
      subtitle: "Interviews & Discussions",
      items: [
        { id: "1", title: "Vision for Kathmandu-5: Discussion on Digital Governance", platform: "YouTube", date: "Jan 12, 2026", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "/whoissasmit.jpeg" },
        { id: "2", title: "Education Reform & Public Policy: Sasmit Pokharel on News24", platform: "YouTube", date: "Jan 05, 2026", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "/whoissasmit.jpeg" }
      ]
    },
    footer: {
      rights: "© 2026 Sasmit Pokharel. All rights reserved.",
      social: "Follow Us",
      contact: "Contact"
    },
    donation: {
      title: "Fuel the Movement",
      desc: "This campaign is powered by citizens, not corporations. Your contribution helps us maintain independence and reach every corner of Kathmandu-5.",
      cta: "CONTRIBUTE NOW",
      transparency: "100% Transparent • Citizen Funded"
    },
    commitmentLetterFull: ""
  },
  ne: {
    nav: {
      brand: "सस्मित.",
      join: "सामेल हुनुहोस्",
      menu: "मेनु"
    },
    hero: {
      headline: "नेतृत्व गर्न तयार।",
      slogan: "परिवर्तन पारदर्शिता परिणाम",
      subhead: "नेपालको लागि सुशासनको नयाँ युग।",
      cta: "टोलीमा सामेल हुनुहोस्",
      constituency: "काठमाडौँ क्षेत्र नं-५",
      constituencyName: "काठमाडौँ",
      constituencyNumber: "०५",
      candidateTitle: "प्रतिनिधि सभा सदस्य उम्मेदवार"
    },
    constituency: {
      title: "मेरो घर, मेरो जिम्मेवारी",
      desc: "म २९ वर्षीय सस्मित पोखरेल काठमाडौंमा जन्मिएँ, यहीँ हुर्किएँ र यहीँ पढें। समुदायसँग नजिक भएर निरन्तर काम गर्दै आएको छु। हाल राष्ट्रिय स्वतन्त्र पार्टीको तर्फबाट काठमाडौं क्षेत्र नं. ५ मा चुनाव चिन्ह घण्टी लिएर उम्मेदवार भएको छु।",
      readMore: "पूर्ण प्रतिबद्धता पत्र पढ्नुहोस्",
      name: "काठमाडौँ",
      number: "०५"
    },
    profile: {
      title: "को हुन् सस्मित?",
      education: { title: "शिक्षा", desc: "जनप्रशासन र भ्रष्टाचार निवारणमा स्नातकोत्तर (TU)" },
      profession: { title: "पृष्ठभूमि", desc: "बी.बी.एम र एल.एल.बी (काठमाडौं विश्वविद्यालय, २०२२)" },
      vision: { title: "मुख्य एजेन्डा", desc: "सुशासन र डिजिटल रूपान्तरण" }
    },
    manifesto: {
      title: "प्रतिबद्धता पत्र",
      points: [
        { title: "शिक्षा सुधार र डिजिटल रूपान्तरण", desc: "गुणस्तरीय, समान र प्रविधिमैत्री शिक्षा। डिजिटल कक्षाकोठा, सूचना प्रविधिमा आधारित सिकाइ र उद्यमशीलता।" },
        { title: "डिजिटल सुशासन र जवाफदेहिता", desc: "बजेट र योजनाको पूर्ण डिजिटलाइजेशन। मोबाइलबाटै सरकारी सेवा र नतिजामुखी शासन प्रणाली।" },
        { title: "युवा, रोजगारी र डिजिटल अर्थतन्त्र", desc: "नेपालमै रोजगारी सिर्जना गर्ने प्रविधिमैत्री नीति। स्टार्टअप, सूचना प्रविधि र रिमोट वर्कको प्रवर्द्धन।" },
        { title: "डिजिटल नोम्याड भिसा र विश्वव्यापी प्रतिभा", desc: "विदेशी डिजिटल कामदारका लागि कानुनी ढाँचा। पर्यटन प्रवर्द्धन र वैदेशिक मुद्रा आर्जनको नयाँ स्रोत।" },
        { title: "सेवा प्रवाह र शहरी व्यवस्थापन", desc: "एकीकृत डिजिटल नागरिक सेवा प्रणाली। शहरी पूर्वाधार र फोहोर व्यवस्थापनको दीर्घकालीन समाधान।" },
        { title: "सम्पदा संरक्षण र सांस्कृतिक पहिचान", desc: "स्थानीय समुदायको सहभागितामा सम्पदा संरक्षण। मौलिक संस्कृतिमा आधारित पर्यटन र आर्थिक अवसर।" }
      ]
    },
    alignment: {
      title: "साझा परिकल्पना",
      desc: "राष्ट्रिय स्वतन्त्र पार्टी (रास्वपा) सँगको आबद्धतामा नयाँ नेपालको भावना र नागरिक आन्दोलनद्वारा प्रेरित संरचनात्मक परिवर्तनका लागि सहकार्य।",
      partyLeader: "रवि लामिछाने",
      partyLeaderTitle: "नेतृत्व",
      pmCandidate: "बालेन शाह",
      pmCandidateTitle: "परिकल्पना"
    },
    news: {
      title: "ताजा अपडेटहरू",
      viewAll: "सबै समाचार हेर्नुहोस्",
      items: [
        { date: "कार्तिक ८, २०८२", title: "सस्मित पोखरेलद्वारा टोखामा घरदैलो अभियान सुरु", category: "अभियान" },
        { date: "कार्तिक ४, २०८२", title: "रास्वपाद्वारा राष्ट्रिय डिजिटल पूर्वाधार नीति पत्र सार्वजनिक", category: "नीति" },
        { date: "असोज २९, २०८२", title: "टाउन हल बैठक: काठमाडौं-५ मा रोजगारीबारे युवा संवाद", category: "कार्यक्रम" }
      ]
    },
    media: {
      title: "मिडिया कभरेज",
      subtitle: "अन्तर्वार्ता र छलफल",
      items: [
        { id: "1", title: "काठमाडौं-५ को परिकल्पना: डिजिटल सुशासनमा छलफल", platform: "YouTube", date: "पुस २८, २०८२", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "/whoissasmit.jpeg" },
        { id: "2", title: "शिक्षा सुधार र सार्वजनिक नीति: न्यूज २४ मा सस्मित पोखरेल", platform: "YouTube", date: "पुस २१, २०८२", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "/whoissasmit.jpeg" }
      ]
    },
    footer: {
      rights: "© २०२६ सस्मित पोखरेल। सर्वाधिकार सुरक्षित।",
      social: "हामीलाई पछ्याउनुहोस्",
      contact: "सम्पर्क"
    },
    donation: {
      title: "अभियानलाई सहयोग गर्नुहोस्",
      desc: "यो अभियान कर्पोरेट हाउसहरूबाट होइन, नागरिकहरूबाट सञ्चालित छ। तपाईंको सानो सहयोगले हामीलाई स्वतन्त्र रहन र काठमाडौँ-५ को प्रत्येक कुनासम्म पुग्न मद्दत गर्दछ।",
      cta: "सहयोग गर्नुहोस्",
      transparency: "१००% पारदर्शी • नागरिकद्वारा सञ्चालित"
    },
    // Full commitment letter (Nepali) — exact text from official letter
    commitmentLetterFull: `यो दस्तावेज मेरो व्यक्तिगत दृष्टिकोण, प्राथमिकता र प्रतिनिधि सभाको सदस्यका रूपमा निर्वाचित भएपश्चात् मैले संसदभित्र र आफ्नो निर्वाचन क्षेत्रका लागि काम गर्न चाहेका विषयगत एजेन्डाहरूलाई प्रतिबिम्बित गर्दछ। संसदीय वेस्टमिन्स्टर प्रणाली अन्तर्गत दलको सामूहिक नीति, सिद्धान्त र दीर्घकालीन दिशानिर्देशनलाई समेट्ने दलस्तरीय (म्याक्रो लेभल) चुनावी घोषणापत्र छुट्टै रूपमा सार्वजनिक गरिनेछ। अतः यस दस्तावेजलाई दलको आधिकारिक घोषणापत्रका रूपमा नभई, एक जना उम्मेदवारका रूपमा मेरो व्यक्तिगत प्रतिबद्धता र कार्य योजनाको रूपमा बुझिदिनुहुन अनुरोध गर्दछु।

म को हुँ?
म २९ वर्षीय सस्मित पोखरेल काठमाडौंमा जन्मिएँ, यहीँ हुर्किएँ र यहीँ पढें। समुदायसँग नजिक भएर निरन्तर काम गर्दै आएको छु। हाल राष्ट्रिय स्वतन्त्र पार्टीको तर्फबाट काठमाडौं क्षेत्र नं. ५ मा चुनाव चिन्ह घण्टी लिएर उम्मेदवार भएको छु।

मेरो योग्यता र अनुभव
शैक्षिक योग्यता
● काठमाडौं विश्वविद्यालयबाट कानून तथा व्यवस्थापन (BBM.LLB) मा स्नातक गर्दै कानून कसरी निर्माण हुन्छ र त्यसले नागरिकको दैनिक जीवनमा कसरी प्रभाव पार्छ भन्ने कुरा मैले राम्ररी बुझेको छु।
● हाल त्रिभुवन विश्वविद्यालयमा नीति, सुशासन तथा भ्रष्टाचार निवारण (Public Policy, Governance, and Anti-Corruption) विषयमा स्नातकोत्तर अध्ययन गर्दै जिम्मेवार, पारदर्शी र परिणाममुखी सार्वजनिक नीतिको पक्षमा आफूलाई थप सशक्त बनाइरहेको छु।
अनुभव
● विगत करिब एक दशकदेखि वैकल्पिक राजनीतिमा सक्रिय रही सार्वजनिक नीति र प्रणाली सुधारका क्षेत्रमा निरन्तर संलग्न छु,
● काठमाडौं महानगरपालिकामा शिक्षा क्षेत्र सुधारका लागि नीति निर्माण, बजेट व्यवस्थापन र कार्यक्रम कार्यान्वयनसम्म प्रत्यक्ष भूमिका निर्वाह गरेको छु। यसको परिणामस्वरूप यसै वर्ष देशका दुर्गम क्षेत्रका ३०,७७९ जना विपन्न, जेहेन्दार तर अवसरबाट वञ्चित विद्यार्थीहरूलाई प्रतिष्ठित र गुणस्तरीय विद्यालयहरूमा छात्रवृत्ति उपलब्ध गराउन सफल भयौं। साथै, सामुदायिक विद्यालयको पूर्वाधार सुधार र प्रविधि–मैत्री शिक्षाको विस्तारमार्फत यस्ता विद्यालयहरूमा शिक्षाको गुणस्तरमा ठोस र मापनयोग्य सुधार आएको छ।
● साथै, काठमाडौं महानगरपालिकामा सहरी योजना आयोगमा सहायक विज्ञका रूपमा कार्यरत रहँदा व्यवस्थित, दिगो तथा नागरिकमैत्री सहर निर्माणका लागि दीर्घकालीन योजना तर्जुमा गर्न योगदान दिएको छु।
● प्रदेश सांसदको सचिवालयमा कानून विभागको संयोजकका रूपमा विभिन्न प्रादेशिक कानूनको निर्माण तथा संशोधनमा सक्रिय भूमिका निर्वाह गरेको छु,
● केन्द्रीय संसद सचिवालयमा विभिन्न कानून विज्ञहरूसँग प्रशिक्षण लिँदै विधायन प्रक्रियाको गहिरो अनुभव हासिल गरेको छु,
● नागरिक जागरण र सार्वजनिक सेवा सुधारमा भएका विभिन्न आन्दोलनहरूको अभियन्ता र अग्रणी भूमिका।

मेरो उम्मेदवारी किन?
हामीले देशको समुन्नतिका लागि माटो सुहाउँदो एवम् जनचाहना बमोजिमका नीति तथा कानून बनाउनुपर्छ। जनचाहनालाई केन्द्रमा राखेर काम गर्न सक्ने सृजनशील जनप्रतिनिधिबाट मात्र देशको समग्र विकास सम्भव छ। यसका लागि संसदमा विकास एवम् नागरिक मैत्री नीति तथा कानुनको निर्माण, विधि एवम् पद्धतिको स्थापना र मुलुकको समग्र विकासका लागि नेतृत्व दिन सक्ने जनप्रतिनिधि आवश्यक छ। यसैका लागि मेरो उम्मेदवारी हो।

मेरा प्रमुख एजेन्डा के–के हुन्?
मुलुकको समग्र विकास र नागरिकमैत्री सेवा प्रवाह सुनिश्चित गर्न नीति, विधि र पद्धतिको निर्माण तथा संस्थागत विकास नै मेरो मुख्य एजेन्डा हुनेछ। यसका लागि मेरा प्रमुख प्राथमिकताहरू:
पहिलो: शिक्षा सुधार गुणस्तर, समानता र डिजिटल रूपान्तरण
शिक्षा मेरो प्राथमिकता मात्र होइन, प्रत्यक्ष काम गरेर प्रमाणित गरेको क्षेत्र पनि हो।
● सार्वजनिक विद्यालयको गुणस्तर सुधार, शिक्षकको क्षमता विकास तथा विद्यार्थी केन्द्रित नीति,
● काठमाडौं महानगरपालिकामा सफल भएको Digital Classroom, Smart Board र ICT-based Learning मोडेललाई राष्ट्रिय स्तरमा विस्तार गर्ने नीति तथा कानून निर्माण,
● सीप, प्रविधि र उद्यमशीलतासँग जोडिएको शिक्षा प्रणाली विकास,
शिक्षा खर्च होइन, लगानी हो भन्ने सोचलाई नीति तथा कानूनमा प्रतिबिम्बित गर्न प्रतिबद्ध।
दोस्रो: युवा, रोजगारी र डिजिटल अर्थतन्त्र
युवालाई विदेश पठाउने होइन, अवसर नेपालमै सिर्जना गर्ने मेरो स्पष्ट एजेन्डा हो।
● स्टार्टअप मैत्री नीति र Tech-based Employment को प्रवर्द्धन,
● Freelancers, IT Professionals र Remote Workers लाई लक्षित नीति,
● Digital Nomad Visa जस्तो अवधारणा अघि बढाउने,
● काठमाडौं महानगरपालिकामा सफल भएको सीप मेला राष्ट्रिय स्तरमा विस्तार गर्ने नीति तथा कानून निर्माण,
● विदेशी डिजिटल कामदारलाई नेपालमा बसेर काम गर्ने, खर्च गर्ने, कर तिर्ने वातावरण सिर्जना गर्दै पर्यटन र स्थानीय अर्थतन्त्र चलायमान बनाउने र यसमार्फत वैदेशिक मुद्रा आर्जन, स्थानीय रोजगारी र सेवा क्षेत्र विस्तार।
तेस्रो: खेलकुद र युवा सशक्तीकरण
खेलकुद मनोरञ्जन मात्र होइन, अनुशासन, स्वास्थ्य र अवसर पनि हो।
● विद्यालय तहबाटै खेलकुदलाई पाठ्यक्रमसँग जोड्ने नीति,
● Sports Scholarship को नीति तथा कानून निर्माण।
चौथो: सेवा प्रवाह र सहरी व्यवस्थापन
सहर व्यवस्थापनमा प्राप्त अनुभवबाट आएको मेरो प्रमुख एजेन्डा।
● नागरिक सेवाका लागि One-Stop Service System मार्फत सार्वजनिक सेवाको पूर्ण डिजिटल रूपान्तरण गर्ने,
● खानेपानी, ढल, ट्राफिक, फोहोर र आवासजस्ता समस्याको संसदमार्फत नीतिगत र दीर्घकालीन समाधान ल्याउने,
● साथै स्थानीय तहका समस्यालाई राष्ट्रिय नीति निर्माणसँग जोड्ने सेतुको भूमिका निर्वाह गर्ने।
पाँचौं: सम्पदा संरक्षण र सांस्कृतिक पहिचान
● स्थानीय समुदायसँग जोडिएको Heritage Conservation Model,
● सम्पदा–आधारित पर्यटन र आर्थिक अवसरको विकास।
● पहिचान, संस्कृति र इतिहासलाई आर्थिक अवसरसँग जोड्ने नीति।
● नेवा संस्कृति, ऐतिहासिक भवन, जात्रा र रीतिरिवाजलाई जीवन्त बनाउने र डिजिटल अभिलेख तयार गर्ने।
● स्मार्ट र दिगो सहर निर्माण गर्दा परम्परा र आधुनिकता सँगै अगाडि बढाउने।
अबको संसद कस्तो हुनुपर्छ?
संसद नीति निर्माण गर्ने थलो हो, कानुन बनाउने ठाउँ हो, पद्धति स्थापित गर्ने स्थान हो। देशको आवश्यकता एवम् जनचाहना परिपूर्तिका लागि सुधारको नेतृत्व गरी असल शासन र समुन्नतितर्फ सिंगो राष्ट्रलाई नै डोर्याउने ठाउँ नै संसद हो। त्यसैले म परिणाम दिन सक्ने संसद चाहन्छु - जहाँ ऊर्जाशील, सक्षम र जिम्मेवार युवा सांसदहरूले गहिरो बहस, पैरवी र तथ्यमा आधारित निर्णयमार्फत नीति तथा कानून निर्माण गर्नेछन्। जनताका चाहना आकाङ्क्षा तथा अपेक्षा परिपूर्ति गर्ने नीति, विधि तथा पद्धति बनाउन सक्ने संसद बनोस् भन्ने मेरो चाहना छ।
र अन्त्यमा, आदरणीय मतदाता महानुभावहरू, युवा वर्गको ऊर्जा, अनुभव र नवीनतम प्रविधिको सदुपयोगमार्फत समुन्नत नेपाल निर्माणमा योगदान गर्न म प्रतिबद्ध छु। म भाषणमा होइन, काम र नतिजामा विश्वास गर्ने प्रतिनिधि हुन चाहन्छु। त्यसैले आफ्नो अमूल्य मत घण्टी चिन्हमा प्रदान गरी मलाई सेवा गर्ने अवसर दिनुहुन हार्दिक अनुरोध गर्दछु।
धन्यवाद।
सस्मित पोखरेल
प्रतिनिधि सभा सदस्य उम्मेदवार
क्षेत्र नं. ५`
  }
};

// --- Components ---

const Navbar = ({ lang, setLang, t, joinLink }: { lang: Language, setLang: (l: Language) => void, t: any, joinLink: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-2xl md:text-3xl font-black transition-colors duration-500 ${isScrolled ? "text-balen-black" : "text-white"} ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}
        >
          {t.nav.brand}
        </motion.h1>
        
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={() => setLang(lang === "en" ? "ne" : "en")}
            className={`group flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full border-2 transition-all cursor-pointer ${isScrolled ? "border-balen-black/10 text-balen-black hover:border-rsp-blue" : "border-white/20 text-white hover:border-white"}`}
          >
            <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span className={lang === "en" ? "tracking-widest" : "tracking-normal"}>{lang === "en" ? "नेपाली" : "ENGLISH"}</span>
          </button>
          
          <a
            href={joinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:block px-8 py-2.5 rounded-sm font-bold text-xs md:text-sm transition-all cursor-pointer shadow-lg active:scale-95 ${isScrolled ? "bg-balen-black text-white hover:bg-rsp-blue" : "bg-white text-rsp-blue hover:bg-rsp-blue hover:text-white"} ${lang === "en" ? "tracking-[0.2em]" : "tracking-normal"}`}
          >
            {t.nav.join}
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ t, lang, joinLink }: { t: any, lang: Language, joinLink: string }) => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/flag-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-rsp-blue/25 z-[1] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[2] pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-1 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left order-1 lg:order-1 py-12 lg:py-0"
        >
          <div className="flex flex-col gap-2 mb-4">
            <span className={`text-white/80 font-bold text-xs uppercase ${lang === "en" ? "tracking-[0.2em]" : "tracking-normal"}`}>
              {t.hero.candidateTitle}
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-0.5 w-8 bg-white/60"></div>
              <h2 className={`text-xl font-bold text-white ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
                {t.hero.constituency}
              </h2>
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className={`text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold text-white leading-tight ${lang === "en" ? "tracking-tighter" : "tracking-normal"} whitespace-nowrap drop-shadow-sm`}>
              {t.hero.headline}
            </h1>
            <p className={`text-2xl md:text-4xl font-semibold text-white/90 ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
              {t.hero.slogan}
            </p>
          </div>

          <motion.a
            href={joinLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group bg-white text-rsp-blue text-lg font-bold px-8 py-4 flex items-center gap-3 transition-all cursor-pointer mt-8 rounded-sm mx-auto lg:ml-0 shadow-2xl w-fit ${lang === "ne" ? "tracking-normal" : ""}`}
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center lg:justify-end order-2 lg:order-2 self-end items-end"
        >
           <div className="relative w-full max-w-[550px] lg:max-w-[750px] xl:max-w-[900px] flex items-end">
             <img 
               src="/candidate-picture.png" 
               alt="Sasmit Pokharel" 
               className="w-full h-auto object-contain filter contrast-[1.05] brightness-110 drop-shadow-2xl relative z-10 block"
               style={{ maxHeight: '85vh', marginBottom: '-1px' }}
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

const ManifestoModal = ({ isOpen, onClose, lang }: { isOpen: boolean, onClose: () => void, lang: Language }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 bg-balen-black/90 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-4xl h-full max-h-[90vh] overflow-hidden rounded-sm flex flex-col shadow-2xl"
      >
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
          <h2 className={`text-2xl font-bold text-balen-black tracking-tight ${lang === "ne" ? "tracking-normal" : ""}`}>
            {lang === "en" ? "Full Commitment Letter" : "पूर्ण प्रतिबद्धता पत्र"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <X className="w-6 h-6 text-balen-black" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 md:p-12 text-balen-black">
          {lang === "ne" ? (
            (() => {
              const raw = (content.ne as { commitmentLetterFull: string }).commitmentLetterFull;
              const lines = raw.split(/\n/);
              const mainTitle = /^म को हुँ\?|^मेरो योग्यता र अनुभव|^मेरो उम्मेदवारी किन\?|^मेरा प्रमुख एजेन्डा के–के हुन्\?|^अबको संसद कस्तो हुनुपर्छ\?/;
              const subTitle = /^शैक्षिक योग्यता|^अनुभव$|^पहिलो:|^दोस्रो:|^तेस्रो:|^चौथो:|^पाँचौं:/;
              const agendaSub = /^शिक्षा मेरो|^युवालाई विदेश|^खेलकुद मनोरञ्जन|^सहर व्यवस्थापनमा|^स्थानीय समुदाय/;
              const signatureStart = /^धन्यवाद।/;
              const out: React.ReactNode[] = [];
              let i = 0;
              let key = 0;
              while (i < lines.length) {
                const line = lines[i];
                const t = line.trim();
                if (!t) { i++; continue; }
                if (mainTitle.test(t)) {
                  out.push(<h3 key={key++} className="text-2xl font-bold text-balen-black mt-8 mb-4 pb-2 border-b-2 border-rsp-blue/30 tracking-normal">{t}</h3>);
                  i++;
                  continue;
                }
                if (subTitle.test(t)) {
                  out.push(<h4 key={key++} className="text-lg font-bold text-rsp-blue mt-6 mb-2 tracking-normal">{t}</h4>);
                  i++;
                  continue;
                }
                if (agendaSub.test(t)) {
                  out.push(<p key={key++} className="mb-3 text-gray-700 italic tracking-normal">{t}</p>);
                  i++;
                  continue;
                }
                if (signatureStart.test(t)) {
                  const sigLines: string[] = [];
                  while (i < lines.length && lines[i].trim()) sigLines.push(lines[i++].trim());
                  out.push(
                    <div key={key++} className="mt-10 pt-8 border-t border-gray-200 text-center space-y-2">
                      <p className="text-lg font-semibold text-balen-black tracking-normal">{sigLines[0]}</p>
                      <p className="text-2xl font-bold text-balen-black tracking-normal">{sigLines[1]}</p>
                      <p className="text-sm text-gray-600 uppercase tracking-normal">{sigLines[2]}</p>
                      <p className="text-sm font-bold text-rsp-blue tracking-normal">{sigLines[3]}</p>
                    </div>
                  );
                  continue;
                }
                if (/^●/.test(t)) {
                  const bullets: string[] = [];
                  while (i < lines.length && /^●/.test(lines[i].trim())) bullets.push(lines[i++].trim().replace(/^●\s*/, ""));
                  if (bullets.length) out.push(<ul key={key++} className="list-disc pl-6 space-y-2 mb-4 text-gray-800 tracking-normal">{bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>);
                  continue;
                }
                if (t.endsWith("।") || t.endsWith("।") || t.endsWith(",")) {
                  out.push(<p key={key++} className="mb-4 leading-relaxed tracking-normal">{t}</p>);
                  i++;
                  continue;
                }
                out.push(<p key={key++} className="mb-4 leading-relaxed tracking-normal">{t}</p>);
                i++;
              }
              return <div className="space-y-1 text-base md:text-lg leading-relaxed tracking-normal max-w-3xl">{out}</div>;
            })()
          ) : (
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="font-bold border-l-4 border-rsp-blue pl-4 py-2 bg-blue-50/50">
              This document reflects my personal vision, priorities, and the specific agendas I wish to work on for the parliament and my constituency after being elected as a member of the House of Representatives.
            </p>

            <section className="space-y-4">
              <h3 className="text-3xl font-black tracking-tighter uppercase border-b-2 border-balen-black inline-block">Who am I?</h3>
              <p>
                I, Sasmit Pokharel, 29, was born, raised, and educated right here in Kathmandu. I have been continuously working close to the community. Currently, I am a candidate for Kathmandu Constituency No. 5 representing the Rastriya Swatantra Party with the election symbol &apos;Bell&apos;.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Qualifications & Experience</h3>
              <div className="space-y-4 bg-gray-50 p-6 border border-gray-100">
                <div>
                  <h4 className="font-bold text-rsp-blue uppercase text-sm tracking-widest mb-2">Education</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Graduated in Law and Management (BBM.LLB) from Kathmandu University.</li>
                    <li>Currently pursuing Masters in Public Policy, Governance, and Anti-Corruption at Tribhuvan University.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-rsp-blue uppercase text-sm tracking-widest mb-2">Experience</h4>
                  <ul className="list-disc pl-5 space-y-2 text-base">
                    <li>Active in alternative politics for nearly a decade, continuously involved in public policy and system reform.</li>
                    <li>Direct role in policy making, budget management, and program implementation for education reform in Kathmandu Metropolitan City.</li>
                    <li>Contributed to long-term urban planning as an Assistant Expert at the Urban Planning Commission of KMC.</li>
                    <li>Active role in drafting and amending provincial laws as Coordinator of the Law Department at the Provincial Assembly Secretariat.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Why My Candidacy?</h3>
              <p>
                We need to formulate policies and laws that suit our soil and reflect the people&apos;s aspirations for the country&apos;s prosperity. Only a creative representative who works with the people&apos;s wishes at the center can make the country&apos;s overall development possible. For this, a representative who can lead in drafting development and citizen-friendly policies and laws in parliament, establishing systems and methods, and leading the country&apos;s overall development is necessary. This is why I am a candidate.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">My Key Agendas</h3>
              <div className="grid gap-6">
                {[
                  { t_en: "1. Education Reform: Quality, Equality & Digital Transformation", d_en: "Improving public school quality, teacher capacity building, and student-centered policies. Expanding the Digital Classroom, Smart Board, and ICT-based Learning model nationally. Developing an education system linked with skills, technology, and entrepreneurship." },
                  { t_en: "2. Youth, Jobs & Digital Economy", d_en: "Creating opportunities in Nepal instead of sending youth abroad. Promoting Startup-friendly policies and Tech-based Employment. Policies targeting Freelancers, IT Professionals, and Remote Workers. Advancing the Digital Nomad Visa concept." },
                  { t_en: "3. Sports & Youth Empowerment", d_en: "Sports is not just entertainment but also discipline, health, and opportunity. Policy to link sports with curriculum from school level. Drafting Sports Scholarship policies and laws." },
                  { t_en: "4. Service Delivery & Urban Management", d_en: "Full digital transformation of public services through a One-Stop Service System. Bringing policy and long-term solutions to parliament for issues like drinking water, sewage, traffic, waste, and housing." },
                  { t_en: "5. Heritage Conservation & Cultural Identity", d_en: "Heritage Conservation Model linked with the local community. Development of heritage-based tourism and economic opportunities. Policies linking identity, culture, and history with economic opportunities. Digitizing archives of Newa culture, historic buildings, festivals, and rituals." }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-rsp-blue pl-6 py-2 bg-gray-50/50">
                    <h5 className="font-bold text-balen-black text-lg mb-2">{item.t_en}</h5>
                    <p className="text-gray-700 leading-relaxed">{item.d_en}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">What should the parliament be like?</h3>
              <p>
                Parliament is a place for policy making, law drafting, and establishing systems. It is the place to lead the entire nation towards good governance and prosperity by leading reforms to fulfill the country&apos;s needs and people&apos;s aspirations. Therefore, I want a parliament that can deliver results - where energetic, capable, and responsible youth MPs create policies and laws through deep debate, advocacy, and fact-based decisions.
              </p>
            </section>

            <p className="text-xl font-medium pt-8 text-center italic text-gray-500 border-t border-gray-100 mt-8">
              &quot;I want to be a representative who believes in work and results, not just speeches.&quot;
            </p>
            
            <div className="text-center pt-4">
              <p className="font-bold text-balen-black text-lg">Sasmit Pokharel</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Candidate, House of Representatives</p>
              <p className="text-sm text-rsp-blue font-bold">Kathmandu Constituency No. 5</p>
            </div>
          </div>
          )}
        </div>
        
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-balen-black text-white px-8 py-2 rounded-sm font-bold text-sm tracking-widest hover:bg-rsp-blue transition-colors cursor-pointer"
          >
            {lang === "en" ? "CLOSE" : "बन्द गर्नुहोस्"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Constituency = ({ t, lang, onOpenModal }: { t: any, lang: Language, onOpenModal: () => void }) => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden -mt-px">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
             <div className="relative">
               <div className={`text-[10rem] font-bold text-balen-black/5 absolute -top-16 -left-10 select-none ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
                 {t.constituency.number}
               </div>
               <div className="relative z-10">
                 <h3 className={`text-6xl font-bold text-balen-black ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
                   {t.constituency.number}
                 </h3>
                 <p className={`text-rsp-blue font-bold text-xs uppercase mt-2 ${lang === "en" ? "tracking-[0.3em]" : "tracking-normal"}`}>
                   {t.constituency.name}
                 </p>
               </div>
             </div>
          </div>
          <div className="w-full md:w-2/3 space-y-8 text-center md:text-left">
            <h2 className={`text-3xl md:text-5xl font-bold text-balen-black tracking-tight leading-tight ${lang === "en" ? "" : "tracking-normal"}`}>
              {t.constituency.title}
            </h2>
            <p className={`text-xl md:text-2xl text-gray-600 leading-relaxed font-normal italic ${lang === "ne" ? "not-italic tracking-normal font-normal" : ""}`}>
              "{t.constituency.desc}"
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
              <span className={`text-balen-black/60 font-bold text-xl border-b border-balen-black/10 inline-block pb-2 ${lang === "en" ? "tracking-wide" : "tracking-normal"}`}>Sasmit Pokharel</span>
              
              <button 
                onClick={onOpenModal}
                className="flex items-center gap-3 bg-rsp-blue text-white hover:bg-balen-black hover:text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest cursor-pointer group transition-all shadow-xl shadow-rsp-blue/10"
              >
                {t.constituency.readMore}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Profile = ({ t, lang }: { t: any, lang: Language }) => {
  return (
    <section className="relative py-24 lg:py-48 overflow-hidden bg-rsp-blue">
      {/* Background Image with 60% Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/whoissasmit.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover grayscale brightness-75"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-rsp-blue/60"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center md:text-right"
        >
          <h2 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
            {t.profile.title}
          </h2>
          <div className="w-24 h-1 bg-accent-gold ml-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { key: 'education', data: t.profile.education, color: 'bg-white/10', textColor: 'text-white', accent: 'text-white/60' },
            { key: 'profession', data: t.profile.profession, color: 'bg-balen-black/40', textColor: 'text-white', accent: 'text-white/60' },
            { key: 'vision', data: t.profile.vision, color: 'bg-white/10', textColor: 'text-white', accent: 'text-white/60' }
          ].map((item, i) => (
            <motion.div 
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
              className={`p-6 md:p-10 ${item.color} ${item.textColor} backdrop-blur-md border border-white/10 shadow-2xl rounded-none flex flex-col justify-between min-h-[200px] md:min-h-[320px] transition-all duration-200 group`}
              style={{ 
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <div>
                <h3 className={`${item.accent} font-bold text-xs uppercase mb-4 ${lang === "en" ? "tracking-widest" : "tracking-normal"}`}>{item.data.title}</h3>
                <p className={`text-xl lg:text-2xl font-bold leading-tight ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>{item.data.desc}</p>
              </div>
              <div className={`w-12 h-0.5 ${item.key === 'profession' ? 'bg-accent-gold' : 'bg-white/40'} mt-8`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Manifesto = ({ t, lang }: { t: any, lang: Language }) => {
  return (
    <section className="pt-24 pb-24 lg:pb-48 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className={`text-3xl md:text-5xl font-bold text-balen-black mb-6 leading-none ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
            {t.manifesto.title}
          </h2>
          <div className="w-12 h-1 bg-rsp-blue mx-auto mb-6"></div>
          <p className={`text-base text-gray-500 font-medium leading-relaxed max-w-lg mx-auto ${lang === "ne" ? "tracking-normal" : ""}`}>
            Our vision for a modern, digital, and accountable Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-24">
          {/* Left Column (Points 1-3) */}
          <div className="space-y-8">
            {t.manifesto.points.slice(0, 3).map((point: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group relative p-6 -m-6 hover:bg-rsp-blue/2 rounded-none transition-all duration-300 cursor-default"
              >
                <div className="flex items-baseline gap-6">
                  <span className={`text-4xl md:text-5xl font-black text-gray-100 group-hover:text-rsp-blue transition-colors duration-500 leading-none ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
                    0{i + 1}
                  </span>
                  <div className="space-y-3">
                    <h3 className={`text-xl md:text-2xl font-bold text-balen-black leading-tight group-hover:text-rsp-blue transition-colors duration-300 ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
                      {point.title}
                    </h3>
                    <p className={`text-base text-gray-600 leading-relaxed font-medium ${lang === "ne" ? "tracking-normal font-normal" : ""}`}>
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column (Points 4-6) */}
          <div className="space-y-8">
            {t.manifesto.points.slice(3, 6).map((point: any, i: number) => (
              <motion.div 
                key={i + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative p-6 -m-6 hover:bg-rsp-blue/2 rounded-none transition-all duration-300 cursor-default"
              >
                <div className="flex items-baseline gap-6">
                  <span className={`text-4xl md:text-5xl font-black text-gray-100 group-hover:text-rsp-blue transition-colors duration-500 leading-none ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
                    0{i + 4}
                  </span>
                  <div className="space-y-3">
                    <h3 className={`text-xl md:text-2xl font-bold text-balen-black leading-tight group-hover:text-rsp-blue transition-colors duration-300 ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
                      {point.title}
                    </h3>
                    <p className={`text-base text-gray-600 leading-relaxed font-medium ${lang === "ne" ? "tracking-normal font-normal" : ""}`}>
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Alignment = ({ t, lang }: { t: any, lang: Language }) => {
  return (
    <section className="relative overflow-hidden min-h-[60vh] -mt-1">
      {/* Full-cover background: white left, image right — on mobile image only behind bell */}
      <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none">
        <div className="flex-1 bg-white" />
        <div
          className="hidden lg:block flex-1 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/Shared-vision.png')" }}
          aria-hidden
        />
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-16 pb-24 lg:pt-32 lg:pb-48 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-stretch min-h-[50vh] lg:min-h-[55vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center text-center lg:text-left space-y-8 lg:space-y-12 pb-10 lg:pb-0"
          >
            <h2 className={`text-4xl md:text-6xl font-bold text-balen-black leading-tight ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>{t.alignment.title}</h2>
            <p className={`text-xl md:text-2xl text-gray-600 leading-relaxed ${lang === "ne" ? "tracking-normal" : ""}`}>{t.alignment.desc}</p>
            
            <div className="flex flex-col gap-8 lg:gap-12 pt-4">
              <div className="space-y-3 lg:space-y-4 w-full max-w-2xl">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                  <span className={`text-gray-400 font-bold uppercase text-xs ${lang === "en" ? "tracking-[0.3em]" : "tracking-normal"}`}>{t.alignment.partyLeaderTitle}</span>
                </div>
                <span className={`text-[2.4rem] md:text-[4.2rem] font-black text-balen-black block leading-none ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
                  {t.alignment.partyLeader}
                </span>
              </div>

              <div className="space-y-3 lg:space-y-4 w-full max-w-2xl">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-12 h-1 bg-rsp-blue"></div>
                  <span className={`text-rsp-blue font-bold uppercase text-xs ${lang === "en" ? "tracking-[0.3em]" : "tracking-normal"}`}>{t.alignment.pmCandidateTitle}</span>
                </div>
                <span className={`text-5xl md:text-8xl font-black text-balen-black block ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
                  {t.alignment.pmCandidate}
                </span>
              </div>
            </div>
          </motion.div>
          
          <div className="flex items-center justify-center relative min-h-[280px] lg:min-h-full lg:h-full pl-8 lg:pl-16">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                rotate: [0, -5, 5, -5, 0],
                transition: { 
                  rotate: { duration: 0.5, ease: "easeInOut" },
                  scale: { duration: 0.3 }
                }
              }}
              onClick={() => window.open('https://rspnepal.org/', '_blank')}
              className="relative z-10 group cursor-pointer"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.8, 
                ease: "easeOut",
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-rsp-blue rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden bg-white border-8 border-white group-hover:border-accent-gold transition-colors duration-300">
                <img 
                  src="/RSP-logo.png" 
                  alt="RSP Logo" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaCoverage = ({ t, lang }: { t: any, lang: Language }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <section className="py-24 bg-rsp-blue relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className={`text-white/80 font-bold text-xs uppercase tracking-widest ${lang === "ne" ? "tracking-normal" : ""}`}>
            {t.media.subtitle}
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold text-white ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
            {t.media.title}
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.media.items.map((item: any, i: number) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer space-y-4"
              onClick={() => setActiveVideo(item.url)}
            >
              <div className="relative aspect-video overflow-hidden bg-balen-black rounded-sm shadow-xl">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-white/5 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-balen-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                    <span>{item.platform}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              <h3 className={`text-lg font-bold text-white group-hover:text-accent-gold transition-colors leading-snug line-clamp-2 ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 bg-balen-black/95 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-rsp-blue transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
              >
                <X className="w-6 h-6" />
                <span>Close</span>
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${getYoutubeId(activeVideo)}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const NewsFeed = ({ t, lang, blacklist }: { t: any, lang: Language, blacklist: string[] }) => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Narrowing the search specifically to Sasmit Pokharel for precision
        const query = lang === "en" ? '"Sasmit Pokharel"' : '"सस्मित पोखरेल"';
        const hl = lang === "en" ? "en-NP" : "ne-NP";
        const ceid = lang === "en" ? "NP:en" : "NP:ne";
        
        const googleNewsUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${hl}&gl=NP&ceid=${ceid}`;
        
        // Primary Attempt: rss2json
        try {
          const rss2jsonRes = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(googleNewsUrl)}`
          );
          const data = await rss2jsonRes.json();
          if (data.status === 'ok' && data.items?.length > 0) {
            // Negative Keyword Filter from props
            const formattedNews = data.items
              .filter((item: any) => !blacklist.some(keyword => item.title.toLowerCase().includes(keyword.toLowerCase())))
              .slice(0, 3)
              .map((item: any) => ({
                date: new Date(item.pubDate).toLocaleDateString(lang === 'en' ? 'en-US' : 'ne-NP', {
                  month: 'short', day: 'numeric', year: 'numeric'
                }),
                title: item.title.split(" - ")[0],
                category: "Candidate",
                link: item.link
              }));
              
            setNews(formattedNews);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.warn("rss2json failed, trying proxy...");
        }

        // Secondary Attempt: AllOrigins Proxy
        try {
          const proxyRes = await fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(googleNewsUrl)}`
          );
          if (!proxyRes.ok) throw new Error("Proxy response not ok");
          const proxyData = await proxyRes.json();
          const parser = new DOMParser();
          const xml = parser.parseFromString(proxyData.contents, "text/xml");
          const items = Array.from(xml.querySelectorAll("item")).slice(0, 3);
          
          if (items.length > 0) {
            // Negative Keyword Filter from props
            const formattedNews = items
              .filter((item: any) => {
                const title = item.querySelector("title")?.textContent?.toLowerCase() || "";
                return !blacklist.some(keyword => title.includes(keyword.toLowerCase()));
              })
              .slice(0, 3)
              .map((item: any) => ({
                date: new Date(item.querySelector("pubDate")?.textContent || "").toLocaleDateString(lang === 'en' ? 'en-US' : 'ne-NP', {
                  month: 'short', day: 'numeric', year: 'numeric'
                }),
                title: item.querySelector("title")?.textContent?.split(" - ")[0] || "",
                category: "Candidate",
                link: item.querySelector("link")?.textContent || "#"
              }));
            setNews(formattedNews);
          } else {
            setNews(t.news.items);
          }
        } catch (proxyError) {
          console.warn("Secondary proxy failed:", proxyError);
          setNews(t.news.items);
        }
      } catch (error) {
        console.error("All news sources failed:", error);
        setNews(t.news.items);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [lang, t.news.items, blacklist]);

  const handleViewAll = () => {
    const query = lang === "en" ? '"Sasmit Pokharel"' : '"सस्मित पोखरेल"';
    const hl = lang === "en" ? "en-NP" : "ne-NP";
    const ceid = lang === "en" ? "NP:en" : "NP:ne";
    window.open(`https://news.google.com/search?q=${encodeURIComponent(query)}&hl=${hl}&gl=NP&ceid=${ceid}`, '_blank');
  };

  return (
    <section className="py-24 bg-rsp-blue relative overflow-hidden border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75 ${loading ? "opacity-100" : ""}`}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className={`text-white/80 font-bold text-xs uppercase tracking-widest ${lang === "ne" ? "tracking-normal" : ""}`}>
                {loading ? (lang === "en" ? "Fetching..." : "खोज्दै...") : (lang === "en" ? "Live Updates" : "प्रत्यक्ष अपडेट")}
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold text-white ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
              {t.news.title}
            </h2>
          </div>
          <button 
            onClick={handleViewAll}
            className={`text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2 pb-2 border-b border-white/20 ${lang === "ne" ? "tracking-normal" : ""}`}
          >
            {t.news.viewAll}
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {news.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-black/5 hover:bg-black/10 p-6 rounded-sm transition-all duration-300"
              onClick={() => window.open(item.link, '_blank')}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/60">
                  <span className={lang === "ne" ? "tracking-normal" : ""}>{item.category}</span>
                  <span className={lang === "ne" ? "tracking-normal" : ""}>{item.date}</span>
                </div>
                <h3 className={`text-xl font-bold text-white group-hover:text-accent-gold transition-colors duration-300 leading-snug line-clamp-2 ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
                  {item.title}
                </h3>
                <div className="w-0 group-hover:w-full h-0.5 bg-accent-gold transition-all duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Donation = ({ t, lang, donationLink }: { t: any, lang: Language, donationLink: string }) => {
  return (
    <section className="py-16 md:py-24 bg-rsp-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-2xl shadow-black/10 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10">
          <div className="max-w-2xl space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-1 w-8 bg-rsp-blue"></div>
              <span className={`text-rsp-blue font-bold text-xs uppercase tracking-[0.2em] ${lang === "ne" ? "tracking-normal" : ""}`}>
                {t.donation.transparency}
              </span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold text-balen-black leading-tight ${lang === "en" ? "tracking-tight" : "tracking-normal"}`}>
              {t.donation.title}
            </h2>
            <p className={`text-lg md:text-xl text-gray-600 leading-relaxed ${lang === "ne" ? "tracking-normal" : ""}`}>
              {t.donation.desc}
            </p>
          </div>
          
          <motion.a
            href={donationLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group bg-balen-black text-white text-lg font-bold px-10 py-5 flex items-center gap-3 transition-all cursor-pointer rounded-sm shadow-xl hover:bg-rsp-blue ${lang === "ne" ? "tracking-normal" : "tracking-widest"}`}
          >
            {t.donation.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t, lang, socials }: { t: any, lang: Language, socials?: { facebook?: string, tiktok?: string, instagram?: string } }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        <div className={`text-2xl font-bold text-balen-black text-center md:text-left ${lang === "en" ? "tracking-tighter" : "tracking-normal"}`}>
          {t.nav.brand}
        </div>
        
        <div className="flex justify-center gap-6 text-balen-black">
          {socials?.facebook && (
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-rsp-blue cursor-pointer transition-colors" />
            </a>
          )}
          {socials?.tiktok && (
            <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">
              <Music2 className="w-6 h-6 hover:text-rsp-blue cursor-pointer transition-colors" />
            </a>
          )}
          {socials?.instagram && (
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-rsp-blue cursor-pointer transition-colors" />
            </a>
          )}
          {!socials && (
            <>
              <Facebook className="w-6 h-6 hover:text-rsp-blue cursor-pointer transition-colors" />
              <Music2 className="w-6 h-6 hover:text-rsp-blue cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-rsp-blue cursor-pointer transition-colors" />
            </>
          )}
        </div>
        
        <div className={`text-sm text-gray-500 text-center md:text-right ${lang === "ne" ? "tracking-normal" : ""}`}>
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cmsData, setCmsData] = useState<any>(null);
  
  useEffect(() => {
    const fetchCmsData = async () => {
      try {
        const query = `{
          "settings": *[_type == "settings"][0],
          "profileCards": *[_type == "profileCard"] | order(order asc),
          "mediaCoverage": *[_type == "mediaCoverage"] | order(_createdAt desc),
          "manifestoPoints": *[_type == "manifestoPoint"] | order(order asc)
        }`;
        const data = await client.fetch(query);
        setCmsData(data);
      } catch (err) {
        console.warn("Sanity fetch failed, using fallbacks:", err);
      }
    };
    fetchCmsData();
  }, []);

  const t = content[lang];

  // Merge CMS data into content
  const mergedContent = { ...t };
  if (cmsData) {
    // 1. Profile Cards
    if (cmsData.profileCards?.length >= 3) {
      const cards = cmsData.profileCards.map((c: any) => ({
        title: lang === 'en' ? c.titleEn : c.titleNe,
        desc: lang === 'en' ? c.descEn : c.descNe
      }));
      mergedContent.profile = { ...t.profile, education: cards[0], profession: cards[1], vision: cards[2] };
    }

    // 2. Media Coverage
    if (cmsData.mediaCoverage?.length > 0) {
      const items = cmsData.mediaCoverage.map((m: any) => ({
        id: m._id,
        title: lang === 'en' ? m.titleEn : m.titleNe,
        platform: m.platform,
        date: lang === 'en' ? m.dateEn : m.dateNe,
        url: m.url,
        thumbnail: m.customThumbnail ? urlFor(m.customThumbnail).url() : "/whoissasmit.jpeg"
      }));
      mergedContent.media = { ...t.media, items };
    }

    // 3. Manifesto Points
    if (cmsData.manifestoPoints?.length > 0) {
      const points = cmsData.manifestoPoints.map((p: any) => ({
        title: lang === 'en' ? p.titleEn : p.titleNe,
        desc: lang === 'en' ? p.descEn : p.descNe
      }));
      mergedContent.manifesto = { ...t.manifesto, points };
    }

    // 4. Hero & Alignment Overrides
    if (cmsData.settings) {
      const s = cmsData.settings;
      if (lang === 'en') {
        if (s.heroHeadlineEn) mergedContent.hero.headline = s.heroHeadlineEn;
        if (s.heroSloganEn) mergedContent.hero.slogan = s.heroSloganEn;
        if (s.alignmentPartyLeaderEn) mergedContent.alignment.partyLeader = s.alignmentPartyLeaderEn;
        if (s.alignmentPmCandidateEn) mergedContent.alignment.pmCandidate = s.alignmentPmCandidateEn;
        if (s.constituencyNameEn) {
          mergedContent.hero.constituencyName = s.constituencyNameEn;
          mergedContent.constituency.name = s.constituencyNameEn;
        }
        if (s.constituencyNumberEn) {
          mergedContent.hero.constituencyNumber = s.constituencyNumberEn;
          mergedContent.constituency.number = s.constituencyNumberEn;
        }
        if (s.constituencyNameEn || s.constituencyNumberEn) {
          mergedContent.hero.constituency = `${s.constituencyNameEn || 'Kathmandu'} Constituency No. ${s.constituencyNumberEn || '5'}`;
        }
        if (s.constituencyDescEn) mergedContent.constituency.desc = s.constituencyDescEn;
      } else {
        if (s.heroHeadlineNe) mergedContent.hero.headline = s.heroHeadlineNe;
        if (s.heroSloganNe) mergedContent.hero.slogan = s.heroSloganNe;
        if (s.alignmentPartyLeaderNe) mergedContent.alignment.partyLeader = s.alignmentPartyLeaderNe;
        if (s.alignmentPmCandidateNe) mergedContent.alignment.pmCandidate = s.alignmentPmCandidateNe;
        if (s.constituencyNameNe) {
          mergedContent.hero.constituencyName = s.constituencyNameNe;
          mergedContent.constituency.name = s.constituencyNameNe;
        }
        if (s.constituencyNumberNe) {
          mergedContent.hero.constituencyNumber = s.constituencyNumberNe;
          mergedContent.constituency.number = s.constituencyNumberNe;
        }
        if (s.constituencyNameNe || s.constituencyNumberNe) {
          mergedContent.hero.constituency = `${s.constituencyNameNe || 'काठमाडौँ'} क्षेत्र नं-${s.constituencyNumberNe || '५'}`;
        }
        if (s.constituencyDescNe) mergedContent.constituency.desc = s.constituencyDescNe;
        if (s.commitmentLetterNe) mergedContent.commitmentLetterFull = s.commitmentLetterNe;
      }
    }
  }

  const joinLink = cmsData?.settings?.joinButtonLink || "https://forms.gle/k7RCYppDsQ3gpzPs5";
  const donationLink = cmsData?.settings?.donationLink || "https://esewa.com.np"; // Placeholder
  const blacklist = cmsData?.settings?.newsBlacklist || ["scandal", "arrest", "fraud", "corruption", "fake", "controversy", "crime", "allegation", "murder", "lawsuit"];
  const socials = cmsData?.settings ? {
    facebook: cmsData.settings.facebookUrl,
    tiktok: cmsData.settings.tiktokUrl,
    instagram: cmsData.settings.instagramUrl,
  } : undefined;

  return (
    <main className="min-h-screen font-sans selection:bg-accent-gold selection:text-balen-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar lang={lang} setLang={setLang} t={mergedContent} joinLink={joinLink} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero t={mergedContent} lang={lang} joinLink={joinLink} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Donation t={mergedContent} lang={lang} donationLink={donationLink} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Constituency t={mergedContent} lang={lang} onOpenModal={() => setIsModalOpen(true)} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Profile t={mergedContent} lang={lang} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Manifesto t={mergedContent} lang={lang} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <MediaCoverage t={mergedContent} lang={lang} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Alignment t={mergedContent} lang={lang} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <NewsFeed t={mergedContent} lang={lang} blacklist={blacklist} />
      </motion.div>
      
      <Footer t={mergedContent} lang={lang} socials={socials} />
      
      <AnimatePresence>
        {isModalOpen && (
          <ManifestoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} lang={lang} />
        )}
      </AnimatePresence>
    </main>
  );
}
