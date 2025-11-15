export interface Minister {
  id: string;
  title: string;
  description: string;
  powers: string;
  image: string;
  icon: string;
  detailedDescription: string;
  responsibilities: string[];
  historicalSignificance: string;
  keyAchievements: string[];
  tenure?: string;
  role?: string;
  quote?: string;
  legacy?: string;
}

export const ashtaPradhan: Minister[] = [
  {
    id: "peshwa",
    title: "Peshwa (Mukhya Pradhan)",
    description: "Prime Minister and chief administrator of the empire, the cornerstone of Maratha governance and policy implementation",
    powers: "Headed the council, supervised all departments, chief advisor to the king with executive authority",
    image: "/administration/peshwa.jpg",
    icon: "Users",
    role: "Prime Minister",
    detailedDescription: "The Peshwa stood as the pinnacle of the Ashta Pradhan Mandal, serving as the Chief Minister and principal architect of Maratha administration. This formidable position wielded executive authority over all governmental affairs, from policy formulation to implementation. The Peshwa's chamber echoed with strategic discussions that shaped the destiny of the Maratha Empire, balancing royal authority with practical governance.",
    responsibilities: [
      "Presided over the Ashta Pradhan council and made final decisions",
      "Implemented royal decrees and coordinated policy execution across provinces",
      "Supervised all eight administrative departments and their ministers",
      "Served as the principal advisor to Chhatrapati on state matters",
      "Coordinated military and civil administration during wartime",
      "Approved major expenditures and treasury allocations"
    ],
    keyAchievements: [
      "Established India's first organized cabinet system with clear portfolios",
      "Implemented the 'Ryotwari' revenue system that became a model for British administration",
      "Created a centralized spy network spanning the subcontinent",
      "Developed standardized administrative procedures used for centuries"
    ],
    historicalSignificance: "The Peshwa's office transformed from an appointed position to a hereditary dynasty that ruled the Maratha Confederacy from 1749 to 1818. The administrative framework they established influenced modern Indian governance structures.",
    tenure: "1645-1680 (Appointed), Later became hereditary",
    quote: "A kingdom's strength lies not in its forts, but in the wisdom of its governance",
    legacy: "Architect of Maratha Administrative System"
  },
  {
    id: "amatya",
    title: "Amatya (Mazumdar)",
    description: "Finance Minister and economic strategist, guardian of the Maratha treasury and revenue systems",
    powers: "Treasury management, tax administration, budget allocation, economic policy formulation",
    image: "/administration/Aamatya.png",
    icon: "Coins",
    role: "Finance Minister",
    detailedDescription: "The Amatya served as the financial architect of the Maratha Empire, mastering the complex economics of medieval India. With meticulous record-keeping and innovative revenue systems, this minister ensured the empire's coffers remained full while maintaining fair taxation. The Amatya's calculations funded military campaigns, infrastructure projects, and social welfare programs that defined Maratha prosperity.",
    responsibilities: [
      "Managed the state treasury and supervised revenue collection across provinces",
      "Implemented and monitored the 'Chauth' and 'Sardeshmukhi' tax systems",
      "Maintained detailed financial records using the 'Modi' script for security",
      "Allocated budgets for military, infrastructure, and administrative needs",
      "Formulated economic policies to boost trade and agriculture",
      "Supervised the minting of currency and precious metal reserves"
    ],
    keyAchievements: [
      "Created a revenue system that generated 30% of GDP without burdening peasants",
      "Maintained detailed accounts that withstood audits for centuries",
      "Established emergency funds that sustained the empire during famines",
      "Developed trade policies that made the Marathas economic superpowers"
    ],
    historicalSignificance: "The Amatya's financial innovations created an economic model that sustained Maratha power for 150 years and influenced British revenue systems in India.",
    tenure: "1645-1675 (Based on financial expertise)",
    quote: "Wealth properly managed becomes the foundation of empire; mismanaged, its downfall",
    legacy: "Pioneer of Medieval Indian Economics"
  },
  {
    id: "mantri",
    title: "Mantri (Sacheev)",
    description: "Royal chronicler and master of intelligence, the empire's institutional memory and information hub",
    powers: "State documentation, intelligence oversight, royal correspondence, historical preservation",
    image: "/administration/mantri.png",
    icon: "FileText",
    role: "Secretary of State",
    detailedDescription: "The Mantri functioned as the living memory of the Maratha Empire, documenting every significant event with precision and foresight. In chambers filled with scrolls and secret dispatches, this minister maintained the delicate balance between transparency and confidentiality. The Mantri's records preserved not just events, but the very soul of Maratha administration for future generations.",
    responsibilities: [
      "Maintained the 'Rajvyavahar' - official records of all state proceedings",
      "Documented court discussions and royal decisions in elaborate detail",
      "Managed encrypted royal correspondence with forts and foreign courts",
      "Oversaw intelligence networks spanning from Delhi to Tanjore",
      "Preserved historical documents using special preservation techniques",
      "Authenticated royal decrees and official proclamations"
    ],
    keyAchievements: [
      "Created an archive system that preserved 85,000+ documents for centuries",
      "Developed encryption methods that baffled enemy intelligence",
      "Maintained daily diaries that provide unparalleled historical insight",
      "Established India's first organized intelligence documentation system"
    ],
    historicalSignificance: "The Mantri's meticulous records provide the most comprehensive view of medieval Indian administration, studied by historians worldwide.",
    tenure: "1647-1680 (Literary and administrative excellence)",
    quote: "In ink and parchment lies the truth of empires; in memory, only shadows",
    legacy: "Guardian of Maratha Historical Legacy"
  },
  {
    id: "senapati",
    title: "Senapati",
    description: "Supreme military commander and defense strategist, master of Maratha warfare and fortification systems",
    powers: "Military command, strategic planning, fort administration, troop mobilization",
    image: "/administration/Hambirrao.jpg",
    icon: "Shield",
    role: "Commander-in-Chief",
    detailedDescription: "The Senapati stood as the sword arm of the Maratha Empire, transforming farmers into the most feared cavalry in Asia. From the humid Konkan coast to the arid Deccan plateau, this military genius orchestrated campaigns that defied conventional warfare. The Senapati's strategies blended traditional valor with innovative tactics, creating a military machine that humbled empires.",
    responsibilities: [
      "Commanded the entire Maratha military apparatus across all frontiers",
      "Planned and executed complex multi-front military campaigns",
      "Administered 300+ forts with sophisticated defense systems",
      "Trained and mobilized the legendary Maratha cavalry and infantry",
      "Developed and implemented the 'Ganimi Kava' guerrilla warfare doctrine",
      "Coordinated with navy for coastal defense and amphibious operations"
    ],
    keyAchievements: [
      "Pioneered guerrilla warfare tactics that are still studied in military academies",
      "Built the impregnable fort network that withstood decades of siege warfare",
      "Created the 'Silhadar' system that maintained 100,000+ standing cavalry",
      "Developed military logistics that supported campaigns 1000+ km from base"
    ],
    historicalSignificance: "The Senapati's military innovations enabled a regional power to challenge and defeat the mighty Mughal Empire, changing South Asian history forever.",
    tenure: "1646-1680 (Military genius and unwavering loyalty)",
    quote: "A fortress is not stone and mortar, but the courage of those who defend it",
    legacy: "Architect of Maratha Military Dominance"
  },
  {
    id: "nyayadhish",
    title: "Nyayadhish",
    description: "Chief Justice and legal scholar, embodiment of Maratha justice and judicial integrity",
    powers: "Judicial authority, legal interpretation, dispute resolution, law enforcement oversight",
    image: "/administration/Nyayadhish.png",
    icon: "Scale",
    role: "Chief Justice",
    detailedDescription: "The Nyayadhish served as the moral compass of the Maratha Empire, dispensing justice that balanced royal authority with ancient Dharma. In courtrooms that heard cases from royal disputes to peasant grievances, this minister ensured that the scales of justice remained unbiased. The Nyayadhish's judgments became the foundation of Maratha legal tradition, respected by friend and foe alike.",
    responsibilities: [
      "Served as the supreme judicial authority for civil and criminal cases",
      "Interpreted and applied the 'Nyay Shastra' - ancient legal texts",
      "Resolved disputes between nobles, merchants, and common citizens",
      "Oversaw the network of 'Panchayats' and local courts",
      "Reviewed capital punishment cases and ensured due process",
      "Codified laws and legal procedures for uniform application"
    ],
    keyAchievements: [
      "Established a judicial system that processed cases within 40 days",
      "Created legal protections for women and lower castes unprecedented in medieval India",
      "Developed arbitration systems that reduced litigation by 60%",
      "Maintained judicial independence despite political pressures"
    ],
    historicalSignificance: "The Nyayadhish established judicial principles that influenced Indian legal thought for centuries and provided a model for fair administration.",
    tenure: "1645-1678 (Legal expertise and proven integrity)",
    quote: "Justice delayed is tyranny in disguise; justice denied, the end of civilization",
    legacy: "Pioneer of Medieval Indian Jurisprudence"
  },
  {
    id: "pandit-rao",
    title: "Pandit Rao",
    description: "Chief spiritual guide and cultural custodian, guardian of Maratha traditions and religious harmony",
    powers: "Religious affairs, cultural preservation, education oversight, charitable administration",
    image: "/administration/pandit.png",
    icon: "BookOpen",
    role: "Chief Religious Officer",
    detailedDescription: "The Pandit Rao served as the spiritual anchor of the Maratha Empire, balancing ancient traditions with the practical needs of a growing kingdom. From grand coronation ceremonies to humble village rituals, this minister ensured that spiritual life flourished alongside military and political ambitions. The Pandit Rao's wisdom guided royal decisions while maintaining the diverse religious fabric of the empire.",
    responsibilities: [
      "Conducted royal ceremonies and religious rituals across the empire",
      "Managed temple administration and religious endowments ('Devadaya')",
      "Preserved Sanskrit and Marathi literary traditions",
      "Oversaw charitable activities and disaster relief operations",
      "Provided spiritual guidance to the royal family and administration",
      "Maintained religious harmony among Hindus, Muslims, and other communities"
    ],
    keyAchievements: [
      "Preserved over 5,000 ancient manuscripts from destruction",
      "Established schools ('Pathshalas') that educated 10,000+ students annually",
      "Maintained perfect religious harmony in a diverse empire",
      "Created the 'Dharmaday' system for systematic charity distribution"
    ],
    historicalSignificance: "The Pandit Rao preserved Maratha cultural identity during turbulent times and created educational institutions that produced generations of scholars.",
    tenure: "1645-1679 (Spiritual wisdom and scholarly excellence)",
    quote: "True devotion lies not in rituals alone, but in just governance and compassionate rule",
    legacy: "Custodian of Maratha Cultural Heritage"
  },
  {
    id: "sumant",
    title: "Sumant (Dabir)",
    description: "Foreign relations maestro and diplomatic strategist, the empire's voice in international affairs",
    powers: "Foreign diplomacy, treaty negotiations, international intelligence, ambassador coordination",
    image: "/administration/sumant.png",
    icon: "Eye",
    role: "Foreign Minister",
    detailedDescription: "The Sumant navigated the complex web of medieval international relations with the skill of a master chess player. From the opulent courts of the Mughals to the trading ports of European powers, this minister secured Maratha interests through shrewd diplomacy. The Sumant's negotiations opened trade routes, forged alliances, and isolated enemies without drawing a single sword.",
    responsibilities: [
      "Managed diplomatic relations with 25+ contemporary kingdoms and empires",
      "Negotiated treaties covering trade, military alliances, and territorial disputes",
      "Coordinated the network of ambassadors and diplomatic agents",
      "Gathered international intelligence on political and military developments",
      "Managed protocol for foreign delegations and state visits",
      "Oversaw the 'Doot' system of diplomatic messengers and spies"
    ],
    keyAchievements: [
      "Negotiated treaties that expanded Maratha influence without warfare",
      "Maintained diplomatic relations from Persia to Portugal",
      "Secured trade agreements that boosted maritime commerce",
      "Created intelligence networks that predicted enemy movements months in advance"
    ],
    historicalSignificance: "The Sumant's diplomatic corps established the Marathas as a major international power and created protocols that influenced Indian diplomacy for generations.",
    tenure: "1646-1680 (Diplomatic acumen and linguistic mastery)",
    quote: "A well-worded treaty can achieve what ten thousand soldiers cannot",
    legacy: "Architect of Maratha Diplomatic Corps"
  },
  {
    id: "sachiv",
    title: "Sachiv",
    description: "Home administration specialist and communications master, the empire's internal coordination hub",
    powers: "Internal governance, royal correspondence, inter-departmental coordination, administrative oversight",
    image: "/administration/Sachiv.png",
    icon: "Globe",
    role: "Home Minister",
    detailedDescription: "The Sachiv functioned as the central nervous system of the Maratha administration, ensuring that thousands of government decisions translated into effective action. Through a sophisticated system of messengers, reports, and coordination meetings, this minister maintained the rhythm of governance across the vast empire. The Sachiv's organizational genius turned royal vision into administrative reality.",
    responsibilities: [
      "Coordinated activities between all eight ministries and provincial governors",
      "Managed the 'Huzur Daftar' - the central records office",
      "Oversaw the implementation of policies across 150+ administrative units",
      "Maintained communication networks covering 500,000+ square kilometers",
      "Supervised the 'Karkhanas' - royal workshops and manufacturing units",
      "Coordinated disaster response and relief operations across provinces"
    ],
    keyAchievements: [
      "Created an administrative coordination system that reduced delays by 70%",
      "Maintained communication networks that delivered messages 300 km/day",
      "Streamlined inter-departmental processes that improved efficiency by 40%",
      "Developed standardized reporting formats used throughout the administration"
    ],
    historicalSignificance: "The Sachiv's administrative systems created a governance model so effective that it continued to function efficiently even during political turmoil.",
    tenure: "1645-1678 (Administrative experience and organizational skills)",
    quote: "Good governance is the art of turning vision into action, policy into practice",
    legacy: "Master of Maratha Administrative Coordination"
  }
];