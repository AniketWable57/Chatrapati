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
    description: "The role of the Peshwa, initially the Mukhya Pradhan (Chief Minister) in Chhatrapati Shivaji’s Ashtapradhan Mandal, underwent a monumental transformation, culminating in the Peshwas becoming the de facto rulers of the Maratha Empire. Starting with the Bhat family in the early 18th century, the post became hereditary, shifting the center of power from the Chhatrapati's court in Satara to the Peshwa's administrative capital in Pune. The Peshwa consolidated authority by controlling all aspects of state governance, including general administration, revenue collection, and judicial matters, essentially serving as the Head of Government. They were the architects of grand military strategy and the final authority on foreign policy and diplomacy, managing the vast network of treaties and alliances. This centralized control allowed for massive expansion, but also led to the creation of the Maratha Confederacy, where powerful regional families like the Scindias and Holkars were delegated autonomous power under the Peshwa's ultimate supervision. This evolution saw the Peshwa emerge as the supreme executive, effectively superseding the political power of the Chhatrapati and directing the empire's destiny until its eventual decline.",
    powers: "The Peshwa transitioned from being the Mukhya Pradhan (Chief Minister) in the original Ashtapradhan council to the de facto ruler of the Maratha Empire, particularly after the office became hereditary under the Bhat family. Their core powers were administrative, centered on the Huzur Daftar in Pune, where they oversaw the entire civil, revenue, and judicial administration of the state. Functionally, the Peshwa commanded the supreme military direction and grand strategy, personally initiating the empire's vast expansion, while also serving as the ultimate authority on foreign policy and diplomacy. This allowed them to negotiate crucial treaties, manage the collection of imperial taxes like Chauth and Sardeshmukhi, and crucially, formalize the Maratha Confederacy by delegating territories to major autonomous chiefs, cementing their position as the apex of the Maratha political structure.",
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
    description: "The position of Amatya (or Majumdar) was a cornerstone of the Ashta Pradhan Mandal, the systematic Council of Eight Ministers established by Chhatrapati Shivaji Maharaj. The Amatya served as the kingdom's Finance Minister and Accountant General, holding the weighty responsibility of managing the state's entire financial structure, including auditing all revenue and expenditure, and ensuring the stability of the treasury necessary for military and administrative operations. The importance of this office transcended mere bookkeeping, as evidenced by Ramchandra Pant Amatya's tenure. He not only flawlessly executed the financial duties but, more gloriously, utilized his administrative and financial acumen to sustain the entire Maratha resistance during the critical War of Independence against the Mughals, acting as the de facto head of state and demonstrating that the position required immense strategic and political leadership beyond just finance.",
    powers: "The Amatya, or Majumdar, held significant administrative and financial authority as the kingdom's chief fiscal officer within the Ashta Pradhan Mandal. Their primary power lay in oversight of the entire state revenue and expenditure. This authority meant that every public account, record of income from territories, and expenditure on military or administrative projects had to be audited and countersigned by the Amatya, ensuring strict financial discipline and preventing mismanagement. They were directly responsible to the Chhatrapati for the solvency and integrity of the treasury. Furthermore, as the person overseeing the implementation of the Ryotwari land revenue system, the Amatya had a direct, crucial influence over the economic welfare of the peasantry (Rayat). In periods of instability, such as the Maratha War of Independence, the holder of this post, most notably Ramchandra Pant Amatya, could exercise near-absolute executive power in coordinating resistance and sustaining the state, showcasing the strategic importance of this financial position beyond simple accounting.",
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
    description: "The Mantri was designated as the state's Chronicler, Interior Minister, and Chief Intelligence Officer within the administrative framework established by Chhatrapati Shivaji Maharaj. His position was foundational to the King's personal safety and his ability to monitor both court and kingdom. The Mantri was primarily responsible for meticulously maintaining the court proceedings and the King's daily activities, creating a comprehensive historical record of the reign. This role necessitated constant proximity to the Chhatrapati, ensuring that all significant events, decisions, and administrative actions were formally documented. As the official chronicler, the Mantri essentially served as the eyes and ears of the administration, providing a written record that prevented future disputes over royal decrees and actions, thereby upholding the integrity of the Maratha Swarajya's governance.",
    powers: "The Mantri's authority was rooted in his control over two vital state functions: Internal Intelligence and Archival Documentation. His key power lay in his role as the head of the Intelligence and Espionage Department; he gathered information about political developments and potential threats both from within the kingdom and from foreign powers. This made him indispensable to the King's strategic planning and preemptive actions against internal disloyalty or external aggression. Furthermore, the Mantri held the power to supervise the state's record-keeping and archives, ensuring the accuracy and security of official state papers. By controlling the flow of vital internal information and managing the state's formal records, the Mantri held a powerful check on the actions of other ministers and officers, making the position a critical component of Shivaji's merit-based system of checks and balances.",
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
    description: "The Senapatis embodied a profound loyalty to the ideal of 'Hindavi Swarajya'—self-rule—a vision bequeathed by Chhatrapati Shivaji. Whether it was Prataprao Gujar’s heroic, defiant charge at Nesari or the steadfast defense organized by subsequent military heads, they consistently placed honor and duty above personal safety. They were the architects of a military machine that pushed the Maratha banner from the Deccan plateau deep into the North, their cavalry’s thunder echoing across the subcontinent. This martial glory culminated in the establishment of a vast empire, a period defined by the courage and tactical brilliance of these exceptional, inspiring leaders who carved independence out of the rocky terrain of Maharashtra and etched their legacy forever in the annals of time.",
    powers: "The Senapati (Commander-in-Chief) of the Maratha Empire held an office of paramount authority, centered on the military but extending into high-level administration as a key member of the Ashtapradhan Mandal (Council of Eight Ministers). Their primary responsibility was comprehensive military command and strategic planning, involving leading major campaigns, formulating battlefield tactics like 'Ganimi Kawa' (guerrilla warfare), and ensuring the overall defense of the realm. This included overseeing troop mobilization, recruitment, and strict discipline across the army, including the cavalry (Bargirs) and infantry (Mavlis). Furthermore, the Senapati had a vital role in fort administration, being ultimately responsible for the military readiness and strategic defense of the vast network of Maratha hill forts. As a minister, they provided crucial counsel to the Chhatrapati on matters of war and peace, and managed the logistics and finance for the military, including the disbursement of salaries. Under Chhatrapati Shivaji, this powerful office was awarded based on personal merit and was not hereditary, underscoring its immense importance and the King's personal control over the armed forces.",
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
    description: "The Nyayadhish was the Chief Justice of the Maratha Swarajya, standing as one of the two ministers (along with the Pandit Rao) who were exempt from holding military commands. This separation of judicial power from executive and military command was a key feature of Shivaji's progressive governance. The Nyayadhish headed the judicial system, which was based on Hindu civil and canon law, and was responsible for maintaining the sanctity and consistency of legal proceedings across the realm. This ensured that justice was administered impartially, rooted in traditional laws but with a focus on equity for all subjects.",
    powers: "The primary authority of the Nyayadhish was the final judgment on all civil and criminal cases in the kingdom. They presided over the highest court of appeal, supervising the judicial procedures carried out by lower courts and local Panchayats. Their power extended to interpreting ancient legal texts to resolve disputes and administer justice. Critically, the Nyayadhish served as a direct check on the administrative powers of other ministers and officers by ensuring that all state actions, revenue collections, and official conduct adhered strictly to the established laws and principles of Dharma (righteous conduct) as envisioned by the Chhatrapati.",
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
    description: "The Pandit Rao (or Danadhyaksha) was designated as the state's High Priest and the Head of Ecclesiastical Affairs and Charities. This was a pivotal position, as the Maratha state emphasized Dharma and public welfare. The Pandit Rao's role was entirely focused on the religious and social fabric of the kingdom, without any military duties. His responsibilities included officiating religious ceremonies at court, advising the King on matters of religious law, and ensuring the moral uprightness of the administration and the populace.",
    powers: "The Pandit Rao's authority centered on his management of state-sponsored charities, grants, and religious endowments. He determined the allocation of funds to religious institutions, scholars, and Brahmins, promoting learning and spiritual well-being. Furthermore, he possessed the power to determine auspicious dates for state functions and acted as the censor of public morals and canon law. He advised the King on matters concerning the treatment of religious groups and ensured the state's adherence to its duty as the protector of Hindu faith, while also respecting other beliefs, thereby upholding the secular principles of the Swarajya.",
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
    description: "The Sumant (also known as the Dabir) was the Foreign Minister of the Maratha Swarajya. His position was vital for managing diplomatic relations, maintaining communication with rival powers, and navigating the complex geopolitical landscape of the Deccan, which included the Mughal Empire, the Sultanates, and European trading companies. The Sumant's work was entirely diplomatic, requiring shrewd negotiation skills, language proficiency, and a comprehensive understanding of foreign courts.",
    powers: "The Sumant's chief power was his control over foreign policy, diplomacy, and intelligence gathering in external affairs. He was responsible for receiving foreign ambassadors and envoys, conducting delicate negotiations for treaties (war or peace), and advising the Chhatrapati directly on all external matters. By serving as the King's primary source of information regarding the intentions, military strength, and internal workings of other kingdoms, the Sumant's recommendations directly influenced decisions of war and alliance, making him a critical figure in the strategic expansion and defense of the Swarajya.",
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
    description: "The Sachiv (also known as the Surnavis or Shurunavis) served as the Chief Secretary of the state. His portfolio was vast, centering on official correspondence and the meticulous upkeep of official state records. The Sachiv was responsible for drafting and reviewing all royal edicts (Farmaans), letters, and state documents, ensuring they were written in the proper language, sealed correctly, and accurately conveyed the Chhatrapati's intent. This role was key to maintaining the high standard and formality of official government communication.The Sachiv (also known as the Surnavis or Shurunavis) served as the Chief Secretary of the state. His portfolio was vast, centering on official correspondence and the meticulous upkeep of official state records. The Sachiv was responsible for drafting and reviewing all royal edicts (Farmaans), letters, and state documents, ensuring they were written in the proper language, sealed correctly, and accurately conveyed the Chhatrapati's intent. This role was key to maintaining the high standard and formality of official government communication.",
    powers: "The Sachiv's authority stemmed from his custodianship and power to review royal correspondence. He was empowered to revise the drafts of state letters and documents, a significant check on administrative language and protocol. Moreover, he was responsible for scrutinizing and checking the accounts of the Parganas (districts), functioning as a secondary financial auditor alongside the Amatya. This dual role of chief communicator and regional financial checker made the Sachiv essential for both the centralized documentation and the decentralized accountability of the Maratha administration.",
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