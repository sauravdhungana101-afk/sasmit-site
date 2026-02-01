import { createClient } from '@sanity/client'

// Configuration - Use your actual project ID
const client = createClient({
  projectId: 'f4zgi1j5',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-30',
  // You will need to provide a token with write access
  token: process.env.SANITY_WRITE_TOKEN, 
})

const settings = {
  _type: 'settings',
  _id: 'siteSettings', // Use a fixed ID for singleton-like behavior
  siteTitle: 'Sasmit Pokharel - Kathmandu 5',
  joinButtonLink: 'https://forms.gle/k7RCYppDsQ3gpzPs5',
  donationLink: 'https://esewa.com.np',
  newsBlacklist: ["scandal", "arrest", "fraud", "corruption", "fake", "controversy", "crime", "allegation", "murder", "lawsuit"],
  constituencyNameEn: 'Kathmandu',
  constituencyNameNe: 'काठमाडौँ',
  constituencyNumberEn: '05',
  constituencyNumberNe: '०५',
  constituencyDescEn: "I, Sasmit Pokharel, 29, was born, raised, and educated right here in Kathmandu. I have been continuously working close to the community. Currently, I am a candidate for Kathmandu Constituency No. 5 representing the Rastriya Swatantra Party with the election symbol 'Bell'.",
  constituencyDescNe: "म २९ वर्षीय सस्मित पोखरेल काठमाडौंमा जन्मिएँ, यहीँ हुर्किएँ र यहीँ पढें। समुदायसँग नजिक भएर निरन्तर काम गर्दै आएको छु। हाल राष्ट्रिय स्वतन्त्र पार्टीको तर्फबाट काठमाडौं क्षेत्र नं. ५ मा चुनाव चिन्ह घण्टी लिएर उम्मेदवार भएको छु।",
  heroHeadlineEn: 'Ready to Lead.',
  heroHeadlineNe: 'नेतृत्व गर्न तयार।',
  heroSloganEn: 'Change. Transparency. Results.',
  heroSloganNe: 'परिवर्तन पारदर्शिता परिणाम',
  alignmentPartyLeaderEn: 'RABI LAMICHHANE',
  alignmentPartyLeaderNe: 'रवि लामिछाने',
  alignmentPmCandidateEn: 'BALEN SHAH',
  alignmentPmCandidateNe: 'बालेन शाह',
  commitmentLetterNe: `यो दस्तावेज मेरो व्यक्तिगत दृष्टिकोण, प्राथमिकता र प्रतिनिधि सभाको सदस्यका रूपमा निर्वाचित भएपश्चात् मैले संसदभित्र र आफ्नो निर्वाचन क्षेत्रका लागि काम गर्न चाहेका विषयगत एजेन्डाहरूलाई प्रतिबिम्बित गर्दछ। संसदीय वेस्टमिन्स्टर प्रणाली अन्तर्गत दलको सामूहिक नीति, सिद्धान्त र दीर्घकालीन दिशानिर्देशनलाई समेट्ने दलस्तरीय (म्याक्रो लेभल) चुनावी घोषणापत्र छुट्टै रूपमा सार्वजनिक गरिनेछ। अतः यस दस्तावेजलाई दलको आधिकारिक घोषणापत्रका रूपमा नभई, एक जना उम्मेदवारका रूपमा मेरो व्यक्तिगत प्रतिबद्धता र कार्य योजनाको रूपमा बुझिदिनुहुन अनुरोध गर्दछु।

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
क्षेत्र नं. ५`,
  facebookUrl: 'https://www.facebook.com/sasmitp',
  tiktokUrl: 'https://www.tiktok.com/@sasmit4parliament',
  instagramUrl: 'https://www.instagram.com/sasmitpokharel',
}

const profileCards = [
  {
    _type: 'profileCard',
    titleEn: 'Education',
    titleNe: 'शिक्षा',
    descEn: "Master's in Public Policy, Anti Corruption (TU)",
    descNe: 'जनप्रशासन र भ्रष्टाचार निवारणमा स्नातकोत्तर (TU)',
    order: 1
  },
  {
    _type: 'profileCard',
    titleEn: 'Background',
    titleNe: 'पृष्ठभूमि',
    descEn: 'LLB & BBM, Kathmandu University (2022)',
    descNe: 'बी.बी.एम र एल.एल.बी (काठमाडौं विश्वविद्यालय, २०२२)',
    order: 2
  },
  {
    _type: 'profileCard',
    titleEn: 'Focus',
    titleNe: 'मुख्य एजेन्डा',
    descEn: 'Good Governance & Digital Transformation',
    descNe: 'सुशासन र डिजिटल रूपान्तरण',
    order: 3
  }
]

const manifestoPoints = [
  { _type: 'manifestoPoint', titleEn: "Education Reform & Digital Transformation", titleNe: "शिक्षा सुधार र डिजिटल रूपान्तरण", descEn: "Quality, tech-friendly education. Digital Classrooms, ICT Learning, Skills & Entrepreneurship.", descNe: "गुणस्तरीय, समान र प्रविधिमैत्री शिक्षा। डिजिटल कक्षाकोठा, सूचना प्रविधिमा आधारित सिकाइ र उद्यमशीलता।", order: 1 },
  { _type: 'manifestoPoint', titleEn: "Digital Governance & Accountability", titleNe: "डिजिटल सुशासन र जवाफदेहिता", descEn: "Full digitization of budget & decisions. Mobile services, Performance-based Governance.", descNe: "बजेट र योजनाको पूर्ण डिजिटलाइजेशन। मोबाइलबाटै सरकारी सेवा र नतिजामुखी शासन प्रणाली।", order: 2 },
  { _type: 'manifestoPoint', titleEn: "Youth, Jobs & Digital Economy", titleNe: "युवा, रोजगारी र डिजिटल अर्थतन्त्र", descEn: "Tech-based job creation. Promoting Startups, IT, Freelancing & Remote Work.", descNe: "नेपालमै रोजगारी सिर्जना गर्ने प्रविधिमैत्री नीति। स्टार्टअप, सूचना प्रविधि र रिमोट वर्कको प्रवर्द्धन।", order: 3 },
  { _type: 'manifestoPoint', titleEn: "Digital Nomad Visa & Global Talent", titleNe: "डिजिटल नोम्याड भिसा र विश्वव्यापी प्रतिभा", descEn: "Legal framework for Nomad Visas. Boosting tourism, investment & foreign exchange.", descNe: "विदेशी डिजिटल कामदारका लागि कानुनी ढाँचा। पर्यटन प्रवर्द्धन र वैदेशिक मुद्रा आर्जनको नयाँ स्रोत।", order: 4 },
  { _type: 'manifestoPoint', titleEn: "Service Delivery & Urban Management", titleNe: "सेवा प्रवाह र शहरी व्यवस्थापन", descEn: "One-Stop Digital Citizen Service. Long-term urban infrastructure solutions.", descNe: "एकीकृत डिजिटल नागरिक सेवा प्रणाली। शहरी पूर्वाधार र फोहोर व्यवस्थापनको दीर्घकालीन समाधान।", order: 5 },
  { _type: 'manifestoPoint', titleEn: "Heritage & Cultural Identity", titleNe: "सम्पदा संरक्षण र सांस्कृतिक पहिचान", descEn: "Protection of national heritage. Heritage-based tourism & economic opportunities.", descNe: "स्थानीय समुदायको सहभागितामा सम्पदा संरक्षण। मौलिक संस्कृतिमा आधारित पर्यटन र आर्थिक अवसर।", order: 6 }
]

const mediaCoverage = [
  { _type: 'mediaCoverage', titleEn: "Vision for Kathmandu-5: Discussion on Digital Governance", titleNe: "काठमाडौं-५ को परिकल्पना: डिजिटल सुशासनमा छलफल", platform: "YouTube", dateEn: "Jan 12, 2026", dateNe: "पुस २८, २०८२", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { _type: 'mediaCoverage', titleEn: "Education Reform & Public Policy: Sasmit Pokharel on News24", titleNe: "शिक्षा सुधार र सार्वजनिक नीति: न्यूज २४ मा सस्मित पोखरेल", platform: "YouTube", dateEn: "Jan 05, 2026", dateNe: "पुस २१, २०८२", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
]

async function importData() {
  try {
    console.log('Starting import...')
    
    // 1. Settings (Singleton)
    await client.createOrReplace(settings)
    console.log('Imported Settings')

    // 2. Profile Cards
    for (const card of profileCards) {
      await client.create(card)
    }
    console.log('Imported Profile Cards')

    // 3. Manifesto Points
    for (const point of manifestoPoints) {
      await client.create(point)
    }
    console.log('Imported Manifesto Points')

    // 4. Media Coverage
    for (const item of mediaCoverage) {
      await client.create(item)
    }
    console.log('Imported Media Coverage')

    console.log('Import completed successfully!')
  } catch (err) {
    console.error('Import failed:', err)
  }
}

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('Error: SANITY_WRITE_TOKEN environment variable is not set.')
  process.exit(1)
}

importData()
