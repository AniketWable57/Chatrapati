// warriors/warriors.ts

export interface WarriorDetails {
  birthDate: string
  deathDate: string
  birthplace: string
  clan: string
  rank: string
  battles: string[]
  achievements: string[]
  militaryStrategies: string[]
  allegiance: string
  weapons: string[]
  horseName?: string
  training?: string
  mentor?: string
  lastWords?: string
  memorials?: string[]
}

export interface Warrior {
  id: string
  name: string
  title: string
  era: string
  servicePeriod: string
  commander: string
  description: string
  significance: string
  image: string
  images?: string[]
  relatedForts: string[] // Array of fort IDs that this warrior is associated with
  fullHistory: WarriorDetails
}

export const warriors: Warrior[] = [
  {
    id: "tanaji-malusare",
    name: "Tanaji Malusare",
    title: "The Lion of Sinhagad",
    era: "Maratha Empire",
    servicePeriod: "1640-1670",
    commander: "Chhatrapati Shivaji Maharaj",
    description: `Tanaji Malusare was one of Shivaji Maharaj's most trusted and brave commanders, famously known for his heroic capture of Sinhagad Fort. Born in Godoli village, Tanaji came from the Malusare clan and was childhood friends with Shivaji. He played a crucial role in many important battles and was known for his exceptional bravery and loyalty. The most legendary episode of his life was the night attack on Sinhagad Fort (then called Kondhana) in 1670. Tanaji led a select group of 300 Mavle soldiers who scaled the steep cliffs using monitor lizards (ghorpad) as living ropes. During the fierce battle inside the fort, Tanaji fought valiantly against Udaybhan Rathod, the fort commander, but lost his life in the process. When Shivaji heard about Tanaji's sacrifice, he famously said "Gad ala pan Sinha gela" (The fort is won but the lion is lost). In honor of his bravery, Shivaji renamed the fort from Kondhana to Sinhagad (Lion's Fort).`,
    significance: "Hero of Sinhagad Fort capture, symbol of Maratha bravery and sacrifice",
    image: "/images/warriors/tanaji-malusare/tanaji-malusare.jpg",
    images: [
      "/images/warriors/tanaji-malusare/tanaji-malusare.jpg",
      "/images/warriors/tanaji-malusare/tanaji-malusare1.jpg",
      "/images/warriors/tanaji-malusare/tanaji-malusare2.jpg",
       "/images/warriors/tanaji-malusare/tanaji-malusare3.jpg"
    ],
    relatedForts: ["sinhagad-fort", "pratapgad-fort", "raigad-fort"],
    fullHistory: {
      birthDate: "c. 1600",
      deathDate: "February 4, 1670",
      birthplace: "Godoli, Javali, Maharashtra",
      clan: "Malusare",
      rank: "Sarnaubat (General)",
      battles: [
        "Battle of Sinhagad (1670)",
        "Battle of Pratapgad (1659)",
        "Battle of Kolhapur (1659)",
        "Various campaigns in Konkan"
      ],
      achievements: [
        "Successfully captured Sinhagad Fort against overwhelming odds",
        "Key commander in Shivaji's early campaigns",
        "Master of guerrilla warfare and mountain combat",
        "Led many successful night attacks"
      ],
      militaryStrategies: [
        "Guerrilla warfare tactics",
        "Night attacks and surprise assaults",
        "Mountain warfare expertise",
        "Use of local terrain advantage"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Talwar (Sword)", "Dhaal (Shield)", "Bagh Nakh", "Lance"],
      horseName: "Sheila",
      training: "Traditional Maratha military training",
      mentor: "Shahaji Raje Bhosale",
      lastWords: "The fort is captured, tell Shivaji Raje we have won!",
      memorials: [
        "Tanaji Malusare Samadhi at Sinhagad Fort",
        "Statues across Maharashtra",
        "Tanaji Malusare Museum at Sinhagad"
      ]
    }
  },
  {
    id: "baji-prabhu-deshpande",
    name: "Baji Prabhu Deshpande",
    title: "The Hero of Pavan Khind",
    era: "Maratha Empire",
    servicePeriod: "1640-1660",
    commander: "Chhatrapati Shivaji Maharaj",
    description: `Baji Prabhu Deshpande is immortalized in Maratha history for his extraordinary sacrifice at the Battle of Pavan Khind in 1660. As Shivaji Maharaj was escaping from Panhala Fort which was under siege by Siddi Jauhar's forces, Baji Prabhu volunteered to hold back the enemy at a narrow mountain pass called Ghodkhind. With just 300 soldiers, Baji Prabhu defended the pass against a 10,000-strong Bijapuri army for over 15 hours. He continued fighting even after being severely wounded, buying crucial time for Shivaji to reach safety at Vishalgad Fort. According to legend, Baji Prabhu fought until he heard cannon fire from Vishalgad, signaling Shivaji's safe arrival. Only then did he succumb to his injuries. This heroic stand allowed Shivaji to escape and continue the Maratha struggle for independence.`,
    significance: "Symbol of ultimate sacrifice and loyalty, hero of Pavan Khind",
    image: "/images/warriors/baji-prabhu-deshpande/baji.jpg",
    relatedForts: ["panhala-fort", "vishalgad-fort", "raigad-fort"],
    fullHistory: {
      birthDate: "c. 1615",
      deathDate: "July 13, 1660",
      birthplace: "Shind, Maharashtra",
      clan: "Deshpande",
      rank: "Sarnaubat (General)",
      battles: [
        "Battle of Pavan Khind (1660)",
        "Battle of Pratapgad (1659)",
        "Various campaigns against Bijapur Sultanate"
      ],
      achievements: [
        "Held back 10,000 enemy troops with just 300 soldiers",
        "Saved Shivaji Maharaj's life during Panhala escape",
        "Exemplified ultimate sacrifice for the Maratha cause",
        "Master of defensive warfare and rearguard actions"
      ],
      militaryStrategies: [
        "Defensive warfare tactics",
        "Rearguard actions",
        "Use of narrow passes and terrain",
        "Last stand strategies"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Dandpatta (Flexible Sword)", "Dhaal", "Farsa", "Bow and Arrow"],
      horseName: "Rakshak",
      training: "Traditional Maratha warfare",
      lastWords: "I can hear the cannon from Vishalgad! Shivaji Raje is safe!",
      memorials: [
        "Baji Prabhu Deshpande Samadhi at Pavan Khind",
        "Memorial at Vishalgad Fort",
        "Statues across Maharashtra"
      ]
    }
  },
  {
    id: "sambhaji-maharaj",
    name: "Sambhaji Maharaj",
    title: "Second Chhatrapati of Maratha Empire",
    era: "Maratha Empire",
    servicePeriod: "1674-1689",
    commander: "Self (Chhatrapati)",
    description: `Sambhaji Bhosale was the second Chhatrapati of the Maratha Empire, succeeding his father Shivaji Maharaj. Born at Purandar Fort, Sambhaji was trained in administration and warfare from a young age. His reign was marked by continuous warfare against the Mughal Empire under Aurangzeb. Despite being captured and subjected to brutal torture, Sambhaji refused to convert to Islam or reveal Maratha secrets. He was executed by Aurangzeb in 1689, but his martyrdom inspired the Marathas to continue their struggle. Sambhaji was also a scholar and wrote several works in Sanskrit and Marathi.`,
    significance: "Martyr Chhatrapati who defended Maratha sovereignty against Mughals",
    image: "/images/warriors/chhatrapati-sambhaji-maharaj/chhatrapati-sambjaji-maharaj.jpg",
    relatedForts: ["purandar-fort", "raigad-fort", "panhala-fort", "vijaydurg-fort"],
    fullHistory: {
      birthDate: "May 14, 1657",
      deathDate: "March 11, 1689",
      birthplace: "Purandar Fort, Maharashtra",
      clan: "Bhosale",
      rank: "Chhatrapati (Emperor)",
      battles: [
        "Mughal-Maratha War (1681-1689)",
        "Battle of Burhanpur (1681)",
        "Defense of Raigad Fort",
        "Various campaigns against Portuguese"
      ],
      achievements: [
        "Successfully defended Maratha Empire against Mughal invasion",
        "Expanded Maratha territory in Konkan",
        "Authored several literary works in Sanskrit",
        "Maintained Maratha sovereignty under extreme pressure"
      ],
      militaryStrategies: [
        "Guerrilla warfare continuation",
        "Fort defense strategies",
        "Naval warfare expansion",
        "Diplomatic alliances"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Talwar", "Dhaal", "Farsa", "Katar"],
      training: "Royal military and administrative training under Shivaji Maharaj",
      lastWords: "I am the son of Shivaji, I will never bow to Aurangzeb!",
      memorials: [
        "Sambhaji Maharaj Samadhi at Tulapur",
        "Statues across Maharashtra",
        "Memorial at Raigad Fort"
      ]
    }
  },
  {
    id: "kanhoji-angre",
    name: "Kanhoji Angre",
    title: "The Master of the Arabian Sea",
    era: "Maratha Empire",
    servicePeriod: "1698-1729",
    commander: "Chhatrapati Rajaram, Chhatrapati Shahu",
    description: `Kanhoji Angre was the first notable chief of the Maratha Navy and remains one of the most celebrated naval commanders in Indian history. Appointed as Sarkhel (Admiral) by Chhatrapati Rajaram, Kanhoji built a formidable navy that dominated the Arabian Sea coast from Sawantwadi to Bombay. He established a network of sea forts and successfully challenged European naval powers including the Portuguese, Dutch, and British. Under his command, the Maratha Navy protected the Konkan coast and collected taxes from merchant ships, ensuring Maratha sovereignty over coastal territories.`,
    significance: "Founder of Maratha Naval power, terror to European colonial powers",
    image: "/images/warriors/kanhoji-angre.jpg",
    relatedForts: ["vijaydurg-fort", "sindhudurg-fort", "suvarnadurg-fort", "padmadurg-fort"],
    fullHistory: {
      birthDate: "1669",
      deathDate: "July 4, 1729",
      birthplace: "Angrevadi, near Alibag",
      clan: "Angre",
      rank: "Sarkhel (Admiral)",
      battles: [
        "Naval battles against Portuguese",
        "Battles against British East India Company",
        "Campaigns against Siddis of Janjira",
        "Defense of Maratha coastline"
      ],
      achievements: [
        "Built formidable Maratha Navy from scratch",
        "Successfully challenged European naval powers",
        "Established network of sea forts",
        "Protected Maratha trade routes and sovereignty"
      ],
      militaryStrategies: [
        "Naval guerrilla warfare",
        "Coastal defense systems",
        "Ship boarding tactics",
        "Intelligence network along coast"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Naval cannons", "Grab ships", "Marine infantry", "Traditional arms"],
      memorials: [
        "Kanhoji Angre Samadhi at Alibag",
        "Indian Navy's INS Angre named after him",
        "Statues at various sea forts"
      ]
    }
  },
  {
    id: "murarbaji-deshpande",
    name: "Murarbaji Deshpande",
    title: "The Defender of Purandar",
    era: "Maratha Empire",
    servicePeriod: "1650-1665",
    commander: "Chhatrapati Shivaji Maharaj",
    description: `Murarbaji Deshpande was a brave commander in Shivaji's army, best known for his heroic defense of Purandar Fort against the Mughal general Diler Khan in 1665. When the Mughals laid siege to Purandar, Murarbaji and his small garrison defended the fort with exceptional courage. Despite being heavily outnumbered, he refused to surrender and fought valiantly. According to historical accounts, when Diler Khan offered him a position in the Mughal army, Murarbaji famously replied that he would rather die serving Shivaji than live serving Aurangzeb. His sacrifice forced Shivaji to negotiate the Treaty of Purandar, but his bravery became legendary.`,
    significance: "Heroic defender of Purandar Fort against Mughals",
    image: "/images/warriors/murarbaji-deshpande.jpg",
    relatedForts: ["purandar-fort", "raigad-fort", "torna-fort"],
    fullHistory: {
      birthDate: "c. 1620",
      deathDate: "1665",
      birthplace: "Guhagar, Maharashtra",
      clan: "Deshpande",
      rank: "Killedar (Fort Commander)",
      battles: [
        "Defense of Purandar Fort (1665)",
        "Various campaigns in Konkan",
        "Battles against Bijapur Sultanate"
      ],
      achievements: [
        "Heroic defense of Purandar against overwhelming Mughal forces",
        "Exemplified Maratha loyalty and courage",
        "Inspired future generations of Maratha warriors",
        "Key commander in Shivaji's early expansion"
      ],
      militaryStrategies: [
        "Fort defense tactics",
        "Mountain warfare",
        "Last stand strategies",
        "Garrison management"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Talwar", "Dhaal", "Bhall", "Bow and Arrow"],
      lastWords: "I serve only Shivaji Raje! I would rather die with honor than live with disgrace!",
      memorials: [
        "Murarbaji Deshpande Samadhi at Purandar Fort",
        "Memorial statue at Purandar",
        "Featured in various Maratha historical works"
      ]
    }
  },
  {
    id: "suryaji-malusare",
    name: "Suryaji Malusare",
    title: "The Avenger Brother",
    era: "Maratha Empire",
    servicePeriod: "1645-1670",
    commander: "Chhatrapati Shivaji Maharaj",
    description: `Suryaji Malusare was the younger brother of Tanaji Malusare and played a crucial role in the capture of Sinhagad Fort. After Tanaji fell in battle against Udaybhan Rathod, Suryaji took command of the Maratha forces and continued the fight. He personally confronted and killed Udaybhan, avenging his brother's death. Suryaji then successfully secured the fort and completed the mission his brother had started. His leadership ensured that Tanaji's sacrifice was not in vain and the fort was captured for the Maratha Empire.`,
    significance: "Completed Sinhagad capture after brother's sacrifice, avenged Tanaji's death",
    image: "/images/warriors/suryaji-malusare.jpg",
    relatedForts: ["sinhagad-fort", "raigad-fort", "pratapgad-fort"],
    fullHistory: {
      birthDate: "c. 1610",
      deathDate: "c. 1680",
      birthplace: "Godoli, Javali, Maharashtra",
      clan: "Malusare",
      rank: "Subedar",
      battles: [
        "Battle of Sinhagad (1670)",
        "Battle of Pratapgad (1659)",
        "Various Konkan campaigns"
      ],
      achievements: [
        "Took command after Tanaji's death and completed Sinhagad capture",
        "Personally killed Udaybhan Rathod to avenge brother's death",
        "Successfully secured Sinhagad Fort for Marathas",
        "Continued family legacy of military service"
      ],
      militaryStrategies: [
        "Quick decision making in battle",
        "Leadership under pressure",
        "Mountain assault tactics",
        "Close combat expertise"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Talwar", "Dhaal", "Khanjar", "Lance"],
      memorials: [
        "Recognized in Sinhagad Fort history",
        "Mentioned in various historical accounts of Sinhagad capture"
      ]
    }
  },
  {
    id: "firangoji-narsala",
    name: "Firangoji Narsala",
    title: "The Defender of Chakan",
    era: "Maratha Empire",
    servicePeriod: "1640-1660",
    commander: "Chhatrapati Shivaji Maharaj",
    description: `Firangoji Narsala was the commander of Chakan Fort and is famous for his heroic defense against the Mughal general Shaista Khan in 1660. When Shaista Khan laid siege to Chakan with a large army, Firangoji and his small garrison defended the fort for almost two months. Despite being heavily outnumbered and under constant attack, they refused to surrender. The defense was so fierce that it delayed Shaista Khan's advance and gave Shivaji valuable time to prepare other defenses. Firangoji's bravery became legendary in Maratha history.`,
    significance: "Heroic defender of Chakan Fort against Shaista Khan",
    image: "/images/warriors/firangoji-narsala.jpg",
    relatedForts: ["chakan-fort", "pune-fort", "raigad-fort"],
    fullHistory: {
      birthDate: "c. 1615",
      deathDate: "c. 1675",
      birthplace: "Narsala, Maharashtra",
      clan: "Narsala",
      rank: "Killedar (Fort Commander)",
      battles: [
        "Defense of Chakan Fort (1660)",
        "Various campaigns under Shivaji",
        "Battles against Mughal forces"
      ],
      achievements: [
        "Held Chakan Fort against massive Mughal army for nearly two months",
        "Delayed Shaista Khan's advance significantly",
        "Exemplified Maratha fort defense capabilities",
        "Inspired other fort commanders with his bravery"
      ],
      militaryStrategies: [
        "Fort defense under siege",
        "Resource management during prolonged siege",
        "Morale maintenance of garrison",
        "Delaying tactics"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Talwar", "Dhaal", "Nagar", "Musket"],
      memorials: [
        "Firangoji Narsala Memorial at Chakan",
        "Mentioned in historical accounts of Shaista Khan's campaign"
      ]
    }
  },
  {
    id: "yesaji-kank",
    name: "Yesaji Kank",
    title: "The Trusted Bodyguard",
    era: "Maratha Empire",
    servicePeriod: "1645-1674",
    commander: "Chhatrapati Shivaji Maharaj",
    description: `Yesaji Kank was one of Shivaji Maharaj's most trusted bodyguards and commanders. He was part of Shivaji's inner circle and played a crucial role in many important events, including Shivaji's famous escape from Agra in 1666. Yesaji was known for his loyalty, bravery, and intelligence. He was instrumental in planning and executing Shivaji's escape from Mughal captivity, disguising himself and other Maratha soldiers to facilitate the escape. Yesaji served Shivaji throughout his life and was present at the coronation in 1674.`,
    significance: "Trusted bodyguard of Shivaji, key in Agra escape",
    image: "/images/warriors/yesaji-kank.jpg",
    relatedForts: ["raigad-fort", "panhala-fort", "vishalgad-fort"],
    fullHistory: {
      birthDate: "c. 1625",
      deathDate: "c. 1685",
      birthplace: "Konkan region, Maharashtra",
      clan: "Kank",
      rank: "Bodyguard Commander",
      battles: [
        "Shivaji's escape from Agra (1666)",
        "Various protection duties",
        "Battle of Pratapgad (1659)",
        "Coronation security (1674)"
      ],
      achievements: [
        "Successfully planned and executed Shivaji's escape from Agra",
        "Served as trusted bodyguard throughout Shivaji's life",
        "Maintained absolute loyalty and discretion",
        "Key member of Shivaji's inner security circle"
      ],
      militaryStrategies: [
        "Personal security tactics",
        "Escape and evasion strategies",
        "Intelligence gathering",
        "Disguise and deception operations"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Talwar", "Dhaal", "Katar", "Pistol"],
      memorials: [
        "Mentioned in historical accounts of Agra escape",
        "Recognized in Maratha historical records"
      ]
    }
  },
  {
    id: "siddi-hilal",
    name: "Siddi Hilal",
    title: "The African Maratha",
    era: "Maratha Empire",
    servicePeriod: "1665-1690",
    commander: "Chhatrapati Shivaji Maharaj, Chhatrapati Sambhaji",
    description: `Siddi Hilal was an African-origin commander who served loyally in the Maratha army. Originally from the Siddi community of African descent in India, he joined Shivaji's forces and became known for his bravery and loyalty. Siddi Hilal played important roles in various campaigns and was particularly valued for his expertise in artillery and fort warfare. His service demonstrates the inclusive nature of the Maratha Empire, where talent and loyalty were valued above ethnicity or background.`,
    significance: "African-origin commander in Maratha army, symbol of Maratha inclusivity",
    image: "/images/warriors/siddi-hilal.jpg",
    relatedForts: ["raigad-fort", "vijaydurg-fort", "sindhudurg-fort"],
    fullHistory: {
      birthDate: "c. 1640",
      deathDate: "c. 1700",
      birthplace: "Janjira region",
      clan: "Siddi",
      rank: "Artillery Commander",
      battles: [
        "Various naval campaigns",
        "Fort defense operations",
        "Artillery support in multiple battles"
      ],
      achievements: [
        "Rose to command position despite foreign origins",
        "Expertise in artillery and naval warfare",
        "Demonstrated exceptional loyalty to Maratha cause",
        "Symbol of Maratha Empire's inclusive policies"
      ],
      militaryStrategies: [
        "Artillery deployment",
        "Naval gunnery",
        "Fort defense artillery",
        "Coastal bombardment tactics"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Cannons", "Mortars", "Naval artillery", "Personal arms"],
      memorials: [
        "Mentioned in Maratha military records",
        "Recognized in historical accounts of Maratha diversity"
      ]
    }
  },
  {
    id: "netaji-palkar",
    name: "Netaji Palkar",
    title: "The Cavalry Commander",
    era: "Maratha Empire",
    servicePeriod: "1645-1676",
    commander: "Chhatrapati Shivaji Maharaj",
    description: `Netaji Palkar was one of Shivaji's most capable cavalry commanders and played a crucial role in expanding Maratha territory. He was instrumental in many campaigns in the Karnataka region and was known for his mobility and surprise attacks. Netaji was captured by the Mughals and forced to convert to Islam, but he eventually escaped and returned to the Maratha fold, reconverting to Hinduism. Despite his ordeal, he continued to serve the Maratha cause with dedication.`,
    significance: "Expert cavalry commander, survived capture and returned to Maratha service",
    image: "/images/warriors/netaji-palkar.jpg",
    relatedForts: ["raigad-fort", "panhala-fort", "vijaydurg-fort"],
    fullHistory: {
      birthDate: "c. 1620",
      deathDate: "c. 1681",
      birthplace: "Maharashtra",
      clan: "Palkar",
      rank: "Cavalry Commander",
      battles: [
        "Campaigns in Karnataka",
        "Various cavalry operations",
        "Battles against Bijapur and Mughals"
      ],
      achievements: [
        "Successfully led Maratha cavalry in southern expansions",
        "Survived Mughal captivity and returned to Maratha service",
        "Expert in mobile warfare and surprise attacks",
        "Maintained loyalty despite extreme circumstances"
      ],
      militaryStrategies: [
        "Cavalry mobility tactics",
        "Surprise attacks and raids",
        "Reconnaissance operations",
        "Terrain utilization for cavalry"
      ],
      allegiance: "Maratha Empire",
      weapons: ["Cavalry sword", "Lance", "Shield", "Horse archery"],
      memorials: [
        "Mentioned in Maratha campaign records",
        "Recognized in historical accounts of Maratha cavalry"
      ]
    }
  }
];