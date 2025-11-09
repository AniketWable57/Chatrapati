export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  fullContent: {
    images: string[];
    detailedDescription: string;
  };
}

export interface TimelineProps {
  events: TimelineEvent[];
  showAll?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "1630",
    title: "The Divine Dawn: Birth of a Dharma-Pala",
    description: "On the auspicious day of Phalguna Krishna Tritiya, the fortress of Shivneri was blessed with the birth of Shivaji Bhosle. This was not merely a birth, but the arrival of a destined liberator, an embodiment of Swarajya and Hindu resurgence in an age of Mughal subjugation.",
    fullContent: {
      images: [
        "/images/shivneri-fort.jpg",
        "/images/shivaji-birth.jpg",
        "/images/jijabai-shivaji.jpg",
        "/images/shivneri-painting.jpg"
      ],
      detailedDescription: `
        <h3>The Auspicious Arrival of a Legend</h3>
        <p>In the pre-dawn hours of <strong>February 19, 1630</strong> (corresponding to the Hindu date of <strong>Phalguna Krishna Tritiya, 1551 Shalivahana Saka</strong>), a child was born in the rugged grandeur of Shivneri Fort, Pune. Named <strong>Shivaji</strong> after the local goddess Shivai, to whom his mother Jijabai had prayed fervently, his very name heralded a new chapter in Indian history. As noted by historian Sir Jadunath Sarkar, his birth occurred in a "period of hopeless depression" for the Hindu populace, making his eventual rise all the more extraordinary.</p>

        <h3>The Sacred Upbringing: Forging a King's Spirit</h3>
        <p>Shivaji's character was sculpted by two formidable influences. From his father, <strong>Shahaji Bhosle</strong>, a renowned general, he inherited the legacy of a Maratha Sardar and the political realities of the Deccan. But it was from his mother, <strong>Rajmata Jijabai</strong>, a woman of profound wisdom and piety, that he received his true calling. She immersed him in the epics of the <em>Ramayana</em> and <em>Mahabharata</em>, instilling in him the ideals of righteousness, justice, and the duty of a king to protect his subjects (<em>Praja-Palana</em>). As historian <strong>Shivaji Savant</strong> elaborates, Jijabai's stories of Rama's righteousness and Bhishma's valor became the "bedrock of his future ideology of Hindavi Swarajya."</p>

        <h3>The Early Training: A Prodigy in the Making</h3>
        <p>Under the able administration of his guardian, <strong>Dadoji Konddeo</strong>, Shivaji received a comprehensive education. He was trained in martial arts, horsemanship, and military strategy. More importantly, the rugged terrain of the Sahyadri mountains became his ultimate classroom. Here, with his band of loyal Maval companions, he instinctively practiced the guerrilla tactics (<em>Ganimi Kava</em>) that would later become the hallmark of his military genius, baffling and defeating much larger, conventional armies.</p>

        <h3>Historical Context and Significance</h3>
        <p>The early 17th century marked the peak of Mughal expansion under Shah Jahan, while the Deccan was divided between the Adil Shahi of Bijapur, Qutb Shahi of Golconda, and Nizam Shahi of Ahmednagar. Shivaji's birth came just years after his father Shahaji had served various Deccan sultanates, giving young Shivaji unique insights into their military and political weaknesses. Contemporary records like the <em>Shivabharata</em> mention extraordinary signs at his birth, foretelling his future greatness.</p>

        <h3>Cultural and Spiritual Foundation</h3>
        <p>Shivaji's education included not just warfare but also Sanskrit, Marathi, and administrative sciences. His spiritual guru <strong>Samarth Ramdas</strong> instilled in him the concept of "Swarajya" - self-rule that went beyond political independence to encompass cultural and religious freedom. The famous saint Tukaram's teachings also influenced his worldview, emphasizing equality and social justice.</p>

        <h3>Lessons for Modern Youth</h3>
        <p><strong>Foundation Matters:</strong> Just as Shivaji's strong foundation in values and education prepared him for greatness, today's youth should focus on building strong character and knowledge. <strong>Mother's Influence:</strong> Jijabai's role shows how parental guidance shapes destiny. <strong>Early Exposure:</strong> Shivaji's early exposure to diverse cultures and military strategies teaches us the value of broad learning. <strong>Cultural Pride:</strong> His deep connection to Hindu epics demonstrates how cultural roots can inspire great leadership. <strong>Physical and Mental Training:</strong> The balance of spiritual learning and martial training shows the importance of holistic development.</p>

        <h4>Trusted References & Publishers:</h4>
        <ul>
          <li><strong>Sarkar, Jadunath.</strong> <em>Shivaji and His Times.</em> (Orient Longman)</li>
          <li><strong>G.S. Sardesai.</strong> <em>New History of the Marathas (Vol. I).</em> (Phoenix Publications)</li>
          <li><strong>Kincaid, Dennis & Parasnis, Rao Bahadur D.B.</strong> <em>A History of the Maratha People.</em> (Oxford University Press)</li>
          <li><strong>Savant, Shivaji.</strong> <em>Shivaji Maharaj: The Epic Story of a Great Indian King.</em> (Amar Chitra Katha)</li>
          <li>Contemporary Bakhar literature, including <em>Sabhasad Bakhar</em> and <em>Chitnis Bakhar</em> (used with historical cross-verification)</li>
          <li><strong>Paramananda, Kavindra.</strong> <em>Shivabharata.</em> (Contemporary Epic Poem)</li>
          <li><strong>Jedhe Shakavali.</strong> (Family Chronicle of the Jedhe family)</li>
        </ul>
      `
    }
  },
  {
    id: 2,
    year: "1645-1655",
    title: "The First Crown Jewel: Foundation of Swarajya",
    description: "Beginning with Torna Fort at age 15, Shivaji systematically captures key fortresses, establishing the territorial foundation of the Maratha Empire and demonstrating his military genius.",
    fullContent: {
      images: [
        "/images/torna-fort.jpg",
        "/images/fort-capture.jpg",
        "/images/rajgad-fort.jpg",
        "/images/maratha-soldiers.jpg"
      ],
      detailedDescription: `
        <h3>The Spark That Lit the Fire of Swarajya</h3>
        <p>In 1645, at just 15 years of age, Shivaji began his military career with the capture of Torna Fort, one of the most formidable fortresses in the Sahyadri mountains. This was followed by the systematic acquisition of key forts like Rajgad, Kondana (later Sinhagad), and Purandar. According to historian <strong>Jadunath Sarkar</strong>, this period marked the "materialization of the dream of Swarajya," transforming abstract ambition into concrete territory.</p>

        <h3>Military Innovations and Fortification Strategy</h3>
        <p>Shivaji revolutionized fort architecture and defense systems. He established a network of 240 forts across the Sahyadris, each strategically positioned to support others. The forts were categorized into sea forts, land forts, and hill forts, creating an impregnable defense system. He introduced innovative features like hidden entrances, secret escape routes, and specialized water storage systems that could sustain garrisons for months.</p>

        <h3>Administrative Foundation and Revenue System</h3>
        <p>Parallel to military conquests, Shivaji established an efficient administrative system. He appointed dedicated officers like Havaldars for fort management and introduced the <em>Ryotwari</em> system that directly connected farmers with the state, eliminating exploitative intermediaries. This progressive revenue system, documented in the <em>Ajnapatra</em>, ensured fair taxation and farmer welfare, building popular support for his rule.</p>

        <h3>Strategic Alliances and Diplomatic Maneuvers</h3>
        <p>During this decade, Shivaji skillfully navigated complex political relationships. He maintained nominal allegiance to Bijapur while steadily expanding his territory. He forged alliances with local Deshmukhs and built a loyal cadre of commanders like Tanaji Malusare, Yesaji Kank, and Baji Pasalkar. His ability to win over former adversaries through generous terms became a hallmark of his leadership style.</p>

        <h3>The Maval Corps and Guerrilla Warfare</h3>
        <p>Shivaji recognized the potential of the rugged Maval region and its hardy inhabitants. He organized the Mavalas into a formidable light infantry corps that mastered guerrilla tactics. These soldiers could move swiftly through the mountains, launch surprise attacks, and disappear into the terrain. The Maval corps became the backbone of his early military successes against larger, conventional armies.</p>

        <h3>Naval Foundations and Coastal Security</h3>
        <p>Even in these early years, Shivaji demonstrated visionary thinking by establishing small naval bases along the Konkan coast. He recognized that control of the Arabian Sea was crucial for protecting his kingdom's western flank and trade routes. This early investment in naval power would later grow into a formidable maritime force that challenged European powers.</p>

        <h3>Lessons for Modern Youth</h3>
        <p><strong>Start Early:</strong> Shivaji's achievements at 15 show that age is no barrier to great accomplishments. <strong>Systematic Planning:</strong> His methodical approach to fort capture teaches the value of strategic planning. <strong>Innovation Matters:</strong> His military innovations demonstrate that creative thinking can overcome resource limitations. <strong>Build Strong Foundations:</strong> The simultaneous development of military and administrative systems shows the importance of comprehensive planning. <strong>Local Empowerment:</strong> His use of local talent teaches the value of grassroots leadership development.</p>

        <h4>Trusted References:</h4>
        <ul>
          <li><strong>Sarkar, Jadunath.</strong> <em>Shivaji and His Times.</em></li>
          <li><strong>Kasar, D.B.</strong> <em>Rigveda to Raigarh.</em></li>
          <li><strong>Vaidya, S.C.</strong> <em>Shivaji: The Founder of Maratha Swarajya.</em></li>
          <li><em>Ajnapatra</em> by Ramchandra Pant Amatya</li>
          <li><strong>Sabhasad Bakhar</strong> and <strong>91 Kalam Bakhar</strong></li>
          <li><strong>Sardesai, G.S.</strong> <em>New History of Marathas, Volume 1.</em></li>
        </ul>
      `
    }
  },
  {
    id: 3,
    year: "1659",
    title: "The Lion's Roar: Outwitting Afzal Khan at Pratapgad",
    description: "In a legendary encounter that changed Deccan history, Shivaji turns a treacherous invitation into a stunning victory, slaying the mighty Afzal Khan and establishing Maratha military supremacy.",
    fullContent: {
      images: [
        "/images/pratapgad-fort.jpg",
        "/images/afzal-khan-battle.jpg",
        "/images/bagh-nakh.jpg",
        "/images/battle-pratapgad-painting.jpg"
      ],
      detailedDescription: `
        <h3>The Gathering Storm: Afzal Khan's Mission of Destruction</h3>
        <p>In 1659, the Adil Shahi Sultanate of Bijapur, alarmed by Shivaji's growing power, dispatched their most feared general, Afzal Khan, with a massive army of 12,000 cavalry, 15,000 infantry, and numerous war elephants. Afzal Khan's reputation preceded him - he had previously destroyed the Maratha stronghold of Umbar and was known for his brutality. His mission was clear: capture Shivaji alive or dead and crush the nascent Maratha power permanently.</p>

        <h3>Psychological Warfare and Strategic Preparation</h3>
        <p>Afzal Khan employed psychological tactics, destroying temples and villages along his march to provoke Shivaji into open battle. However, Shivaji, understanding his numerical disadvantage, prepared meticulously. He strengthened Pratapgad fort, positioned his forces in the dense forests surrounding it, and trained his soldiers in ambush tactics. Most importantly, he anticipated treachery and prepared accordingly with hidden weapons and body armor.</p>

        <h3>The Fateful Meeting: A Masterpiece of Counter-Strategy</h3>
        <p>On November 10, 1659, the two leaders agreed to meet in a tent at the foothills of Pratapgad, each allowed only two attendants. Shivaji wore chainmail beneath his clothes and carried the <em>bagh nakh</em> (tiger claws) and a sharp <em>bichwa</em> (dagger). As Afzal Khan attempted to crush him in a bear hug and stab him with a hidden knife, Shivaji's prepared defense turned the tables. The <em>bagh nakh</em> tore through Khan's intestines, and within moments, the mighty general lay dead.</p>

        <h3>The Battle That Followed: Military Brilliance Unleashed</h3>
        <p>With their leader dead, the Bijapuri army fell into chaos. Shivaji's general, Netaji Palkar, launched the pre-positioned Maratha forces from their concealed positions. The Maratha cavalry charged while infantry emerged from the forests, attacking from all sides. The battle turned into a rout, with the Bijapuri forces suffering heavy casualties and losing their entire baggage train, artillery, and elephants.</p>

        <h3>Political and Military Consequences</h3>
        <p>The victory at Pratapgad had far-reaching consequences. It established Shivaji as the preeminent power in the Deccan, demoralized the Adil Shahi Sultanate, and attracted thousands of new recruits to the Maratha cause. The captured weapons, elephants, and treasure significantly strengthened Shivaji's military and economic position. Most importantly, it proved that the Marathas could defeat much larger conventional armies through superior strategy and courage.</p>

        <h3>Cultural and Historical Significance</h3>
        <p>The battle became immortal in Maratha folklore, symbolizing the victory of righteousness over treachery. Numerous <em>powadas</em> (ballads) were composed celebrating the event. The contemporary text <em>Shivabharata</em> by Paramananda describes it as divine intervention protecting the righteous. Pratapgad became a pilgrimage site, and the event is commemorated annually as a symbol of Maratha valor.</p>

        <h3>Lessons for Modern Youth</h3>
        <p><strong>Preparation is Key:</strong> Shivaji's meticulous preparation turned certain defeat into victory. <strong>Intelligence Over Arrogance:</strong> His use of intelligence and strategy over brute force. <strong>Anticipate Challenges:</strong> His ability to foresee treachery teaches proactive thinking. <strong>Courage in Crisis:</strong> The calmness shown in life-threatening situations. <strong>Transformational Leadership:</strong> How a single victory can transform organizational fortunes.</p>

        <h4>Trusted References:</h4>
        <ul>
          <li><strong>Kavindra Paramananda.</strong> <em>Shivabharata.</em> (Contemporary Epic Poem)</li>
          <li><strong>Sabhasad Bakhar.</strong> (Contemporary Chronicle)</li>
          <li><strong>Sardesai, G.S.</strong> <em>New History of the Marathas.</em></li>
          <li><strong>Sarkar, Jadunath.</strong> <em>Shivaji and His Times.</em></li>
          <li><strong>Chitnis Bakhar</strong> and <strong>91 Kalam Bakhar</strong></li>
          <li><strong>Portuguese records</strong> from Goa factories</li>
          <li><strong>Jedhe Shakavali</strong> chronicles</li>
        </ul>
      `
    }
  },
  {
    id: 4,
    year: "1664-1670",
    title: "The Masterstroke: Sacking of Surat and Naval Dominance",
    description: "Shivaji humbles the Mughal Empire by sacking its wealthiest port, then builds India's first modern navy, establishing complete sovereignty over land and sea.",
    fullContent: {
      images: [
        "/images/surat-raid.jpg",
        "/images/maratha-navy.jpg",
        "/images/sindhudurg-fort.jpg",
        "/images/maratha-ships.jpg"
      ],
      detailedDescription: `
        <h3>The Surat Campaign: Striking at Mughal Economic Heart</h3>
        <p>In January 1664, Shivaji launched his most audacious campaign yet - attacking Surat, the richest port of the Mughal Empire and the gateway for Haj pilgrims. With 4,000 cavalry, he descended upon the city whose governor fled in panic. For three days, the Marathas systematically collected over 10 million rupees in wealth from European factories and wealthy merchants, while specifically avoiding harming common people, mosques, or women.</p>

        <h3>Strategic Objectives and Political Impact</h3>
        <p>The Surat raid served multiple strategic purposes: it replenished Maratha coffers, demonstrated Mughal vulnerability, established Shivaji's reputation internationally, and forced Aurangzeb to divert resources from northern campaigns. Contemporary European accounts by English factors describe the meticulous planning and discipline maintained during the plunder. The attack shook Mughal prestige and established Shivaji as a major power contender.</p>

        <h3>Naval Vision: Building the First Indian Blue-Water Navy</h3>
        <p>Recognizing that complete sovereignty required maritime dominance, Shivaji established a formidable navy between 1664-1670. He built major naval bases at Vijaydurg, Sindhudurg, and Kolaba, constructing unique warships like <em>ghurabs</em> (grab ships with 10-12 guns) and <em>galbats</em> (smaller maneuverable ships). At its peak, the Maratha navy comprised 200-300 warships manned by expert Koli and Bhandari sailors.</p>

        <h3>Naval Architecture and Fortification Innovations</h3>
        <p>Shivaji's naval architects developed innovative features like double-planked hulls for extra strength, specialized cannon mounts, and reinforced prows for ramming. The sea forts were engineering marvels - Sindhudurg was built on a rocky island with hidden water channels, underground storage, and cleverly designed bastions that provided overlapping fields of fire against enemy ships.</p>

        <h3>Maritime Doctrine and Tactical Innovations</h3>
        <p>The Maratha navy developed unique tactics including coordinated land-sea operations, blockade running, and commerce raiding. They mastered the monsoon patterns and coastal currents, giving them strategic mobility. The navy protected Hindu merchant ships from European and Siddi pirates, ensured customs collection, and prevented enemy landings along the Konkan coast.</p>

        <h3>Economic Warfare and Trade Protection</h3>
        <p>Through naval dominance, Shivaji secured Maratha trade routes and collected maritime customs (<em>chauth</em>) from non-Maratha ships. He established protected trade corridors for Hindu merchants who had suffered under Portuguese and Siddi predation. The navy's success enabled economic prosperity that funded further military expansion and administrative development.</p>

        <h3>Lessons for Modern Youth</h3>
        <p><strong>Visionary Thinking:</strong> Shivaji's navy shows the importance of anticipating future challenges. <strong>Multi-dimensional Strategy:</strong> His combined land-sea operations teach integrated planning. <strong>Innovation in Adversity:</strong> Building a navy from scratch demonstrates creative problem-solving. <strong>Economic Sovereignty:</strong> His focus on protecting trade shows understanding of economic foundations. <strong>Technological Adaptation:</strong> Adopting and improving European naval technology shows learning agility.</p>

        <h4>Trusted References:</h4>
        <ul>
          <li><strong>Sarkar, Jadunath.</strong> <em>Shivaji and His Times.</em></li>
          <li><strong>Dighe, V.G.</strong> <em>Peshwa Bajirao I and Maratha Expansion.</em></li>
          <li><strong>English Factory Records</strong> from Surat and Bombay</li>
          <li><strong>Portuguese colonial archives</strong> from Goa</li>
          <li><strong>Shivaji's Naval Forts:</strong> Archaeological Survey of India reports</li>
          <li><strong>Mahabal, S.A.</strong> <em>Maratha Navy and Merchants.</em></li>
          <li>Dutch East India Company (VOC) records</li>
        </ul>
      `
    }
  },
  {
    id: 5,
    year: "1674",
    title: "The Sacred Coronation: Birth of a Chhatrapati",
    description: "In a Vedic ceremony reviving ancient Hindu traditions, Shivaji crowns himself Chhatrapati, formalizing the Maratha Empire as a sovereign Hindu kingdom and establishing a model of righteous kingship.",
    fullContent: {
      images: [
        "/images/coronation.jpg",
        "/images/raigarh-fort.jpg",
        "/images/coronation-procession.jpg",
        "/images/ashta-pradhan.jpg"
      ],
      detailedDescription: `
        <h3>The Historical Context and Political Necessity</h3>
        <p>By 1674, Shivaji had established de facto sovereignty over vast territories, but needed formal recognition to deal with other sovereign powers as an equal. The coronation served multiple purposes: it legitimized his rule in Brahmanical tradition, established diplomatic equality with Mughals and Deccan sultanates, and fulfilled the spiritual aspirations of his subjects for a righteous Hindu ruler.</p>

        <h3>Elaborate Preparations and Sacred Rituals</h3>
        <p>The coronation ceremonies lasted nearly two weeks (June 6-16, 1674) involving elaborate Vedic rituals conducted by Pandit Gaga Bhatt of Varanasi, who traced Shivaji's lineage to the Sisodia Rajputs of Mewar. The rituals included <em>Rajyabhisheka</em> (anointing), <em>Hiranyagarbha</em> (golden womb ceremony symbolizing rebirth as Kshatriya), and installation on the golden throne. Over 50,000 people attended, including diplomats from European powers.</p>

        <h3>Administrative Reforms and Governance Structure</h3>
        <p>The coronation marked the formal establishment of the <em>Ashta Pradhan Mandal</em> (Council of Eight Ministers) - a revolutionary administrative system where merit trumped birth. Each minister handled specific portfolios: Peshwa (Prime Minister), Mazumdar (Finance), Surnis (Secretary), etc. This cabinet system was remarkably modern in its specialization and accountability.</p>

        <h3>Legal and Judicial Framework</h3>
        <p>Shivaji established the <em>Rājnya-Ājnā-Patra</em> (Royal Edict) outlining principles of governance: protection of cows and Brahmins, religious tolerance, justice for all subjects, and efficient revenue administration. He created a three-tier judicial system with village <em>panchayats</em>, district courts, and royal appeals. The legal code emphasized swift justice and protection of the weak.</p>

        <h3>Economic Policies and Revenue Administration</h3>
        <p>The <em>Ryotwari</em> system was formalized, establishing direct relationship between state and farmers, eliminating intermediaries. Tax rates were fixed at 30-40% of produce with relief during droughts. Special officers (<em>Karkhanis</em>) supervised state factories producing arms, textiles, and other goods, creating a self-sufficient war economy.</p>

        <h3>Military Reorganization and Fort Administration</h3>
        <p>The coronation marked the formalization of military reforms: standardized training, regular salaries, strict discipline codes, and specialized units for infantry, cavalry, artillery, and navy. Forts were classified and systematically administered with dedicated commanders (<em>Killedars</em>), accountants (<em>Sabnis</em>), and storekeepers (<em>Karkhanis</em>).</p>

        <h3>Cultural and Religious Renaissance</h3>
        <p>The coronation sparked cultural revival - Marathi was promoted as court language, Sanskrit learning was encouraged, and temples received state patronage. Shivaji became the protector of Dharma, supporting scholars, artists, and religious institutions across his kingdom while maintaining religious tolerance toward Muslims and Christians.</p>

        <h3>Lessons for Modern Youth</h3>
        <p><strong>Institution Building:</strong> The Ashta Pradhan system teaches creating robust organizations. <strong>Meritocracy:</strong> Appointing ministers by ability rather than birth. <strong>Systematic Governance:</strong> Comprehensive administrative systems for long-term success. <strong>Cultural Confidence:</strong> Reviving indigenous traditions while being progressive. <strong>Balanced Leadership:</strong> Combining spiritual authority with practical governance.</p>

        <h4>Trusted References:</h4>
        <ul>
          <li><strong>Sardesai, G.S.</strong> <em>New History of the Marathas.</em></li>
          <li><strong>Bhat, G.H.</strong> <em>Shivaji's Coronation.</em></li>
          <li>Contemporary documents: <em>Rājnya-Ājnā-Patra</em></li>
          <li><strong>Sabhasad Bakhar</strong> and <strong>Chitnis Bakhar</strong></li>
          <li><strong>Sarkar, Jadunath.</strong> <em>Shivaji and His Times.</em></li>
          <li>European accounts by <strong>Henry Oxinden</strong> (English) and <strong>Abbé Carré</strong> (French)</li>
          <li><strong>Kavindra Paramananda's Shivabharata</strong></li>
        </ul>
      `
    }
  },
  {
    id: 6,
    year: "1674-1680",
    title: "The Southern Campaign: The Empire's Zenith",
    description: "In his final years, Shivaji embarks on an ambitious southern campaign, expanding Maratha influence into Karnataka and Tamil country, and establishing an enduring administrative legacy.",
    fullContent: {
      images: [
        "/images/southern-campaign.jpg",
        "/images/maratha-empire-map.jpg",
        "/images/ginjee-fort.jpg",
        "/images/maratha-cavalry.jpg"
      ],
      detailedDescription: `
        <h3>Strategic Objectives of Southern Expansion</h3>
        <p>The southern campaign (1674-1678) aimed to secure Maratha frontiers, access rich resources of the Carnatic region, and create strategic depth against Mughal pressure from north. Shivaji personally led campaigns into Bijapur's southern territories, Mysore plateau, and Tanjore region, demonstrating his relentless energy even after coronation.</p>

        <h3>Military Campaigns and Fort Captures</h3>
        <p>The campaign saw capture of key forts like Ginjee, Vellore, and Bangalore - strategically vital strongpoints. Shivaji's forces marched over 2,000 kilometers, adapting to diverse terrains from Western Ghats to Deccan plateau. The capture of Ginjee was particularly significant, creating a Maratha stronghold deep in Tamil country that would later play crucial role in Maratha history.</p>

        <h3>Administrative Integration and Revenue Systems</h3>
        <p>In newly conquered territories, Shivaji implemented his proven administrative systems. The <em>Ryotwari</em> revenue system was extended, local chiefs were integrated into administration, and Marathi became administrative language alongside local languages. This pragmatic approach ensured stability and loyalty in diverse cultural regions.</p>

        <h3>Diplomatic Maneuvers and Alliances</h3>
        <p>Shivaji skillfully navigated complex southern politics, forming alliances with local Nayakas against common enemies. He treated defeated rulers with respect, often restoring them as tributaries. This diplomatic finesse enabled rapid expansion with minimal resistance and created a network of allied states bufferring his core territories.</p>

        <h3>Naval Operations in Southern Waters</h3>
        <p>The southern expansion included naval operations along Coromandel coast, challenging European trading companies and securing maritime trade routes. Maratha naval squadrons based at Jinjee and other coastal forts protected merchant shipping and collected customs, extending the navy's operational range significantly.</p>

        <h3>Cultural Impact and Religious Patronage</h3>
        <p>Shivaji's southern campaign included restoration of temples and patronage to local religious institutions. He visited major pilgrimage sites, made generous donations, and positioned himself as protector of Dharma across linguistic regions. This cultural diplomacy helped legitimize Maratha rule among diverse populations.</p>

        <h3>Military Innovations and Adaptation</h3>
        <p>The campaign demonstrated Maratha army's adaptability to different warfare styles - from mountain warfare in Ghats to open battles in plains. Shivaji incorporated local military traditions, recruited Telugu and Tamil warriors, and adapted his tactics to new environments while maintaining core Maratha strengths in mobility and surprise.</p>

        <h3>Economic Consolidation and Trade Networks</h3>
        <p>The southern territories provided access to new resources: textiles from Coromandel, spices from Malabar, and rice from Tanjore. Shivaji established protected trade routes connecting his northern and southern territories, creating an integrated economic zone that enhanced Maratha prosperity and self-sufficiency.</p>

        <h3>Legacy and Historical Significance</h3>
        <p>The southern expansion created the geographical framework for future Maratha expansion under Peshwas. It demonstrated that Maratha power wasn't limited to Maharashtra but could project influence across peninsular India. The administrative systems established during this period endured long after Shivaji's death.</p>

        <h3>Lessons for Modern Youth</h3>
        <p><strong>Lifelong Learning:</strong> Shivaji's adaptability in new environments. <strong>Strategic Vision:</strong> Planning beyond immediate gains for long-term security. <strong>Cultural Intelligence:</strong> Respecting and integrating diverse traditions. <strong>Systematic Expansion:</strong> Building sustainable systems in new territories. <strong>Balance of Hard and Soft Power:</strong> Combining military strength with diplomatic finesse.</p>

        <h4>Trusted References:</h4>
        <ul>
          <li><strong>Jedhe Shakavali.</strong> (Contemporary Chronicle)</li>
          <li><strong>Sarkar, Jadunath.</strong> <em>House of Shivaji.</em></li>
          <li><strong>Venkata Ramanayya, N.</strong> <em>Shivaji in Karnataka.</em></li>
          <li>Maratha records from <strong>Peshwa Daftar</strong></li>
          <li><strong>Portuguese and Dutch</strong> colonial records</li>
          <li><strong>Local Karnataka histories</strong> and temple inscriptions</li>
          <li><strong>Sardesai, G.S.</strong> <em>New History of Marathas, Volume 2.</em></li>
        </ul>
      `
    }
  },
  {
    id: 7,
    year: "1680",
    title: "The Immortal Legacy: Passing of a Chhatrapati",
    description: "Chhatrapati Shivaji Maharaj leaves his mortal body, but his legacy of Swarajya, righteous governance, and military genius becomes an eternal inspiration for generations.",
    fullContent: {
      images: [
        "/images/raigad-samadhi.jpg",
        "/images/maratha-empire-flag.jpg",
        "/images/shivaji-memorial.jpg",
        "/images/maratha-kingdom-map.jpg"
      ],
      detailedDescription: `
        <h3>The Final Days and Succession</h3>
        <p>After a brief illness of three weeks, Chhatrapati Shivaji Maharaj passed away at Raigad on April 3, 1680. The precise nature of his illness remains debated among historians, with theories ranging from typhoid to complications from war injuries. His death created a temporary crisis as his elder son Sambhaji was under house arrest for indiscipline, while his younger son Rajaram was only ten. However, the administrative systems he built proved robust enough to survive the succession struggle.</p>

        <h3>Immediate Impact and Historical Assessment</h3>
        <p>Shivaji's death was mourned throughout his kingdom. Contemporary accounts describe widespread grief among all sections of society. Historian <strong>Jadunath Sarkar</strong> assesses his reign as "one of the most constructive and beneficent in Indian history," while <strong>G.S. Sardesai</strong> calls him "the greatest constructive genius of medieval India." His kingdom at death spanned over 100,000 square miles with annual revenue of 7-8 million rupees.</p>

        <h3>Enduring Administrative Legacy</h3>
        <p>The <em>Ashta Pradhan</em> system, revenue administration, military organization, and fort management systems outlived Shivaji by centuries. The administrative manual <em>Ajnapatra</em> written by his minister Ramchandra Pant Amatya became the guiding document for Maratha administration for generations. His systems influenced later Indian rulers including the British in some aspects of revenue administration.</p>

        <h3>Military Legacy and Strategic Doctrine</h3>
        <p>Shivaji's military innovations - guerrilla warfare, strategic use of forts, light cavalry, and naval power - became standard Maratha military doctrine. His successors, particularly the Peshwas, expanded these methods to create an empire that dominated India for a century. The Maratha Confederacy at its peak under Peshwa Bajirao I stretched from Attock to Cuttack.</p>

        <h3>Inspiration for Future Generations</h3>
        <p>During the Indian independence movement, Shivaji became the symbol of Hindu resistance and national pride. Leaders like <strong>Lokmanya Tilak</strong> organized public celebrations of Shivaji Jayanti, <strong>Veer Savarkar</strong> wrote extensively about his legacy, and <strong>Jawaharlal Nehru</strong> acknowledged his role in Indian history. His life inspired countless revolutionaries and freedom fighters.</p>

        <h3>Cultural and Social Impact</h3>
        <p>Shivaji's reign sparked Marathi cultural renaissance, standardization of Marathi language, and preservation of Hindu traditions under Islamic rule. He became the archetype of the righteous Hindu king in popular consciousness, featured in countless poems, plays, novels, and films across multiple Indian languages.</p>

        <h3>Global Historical Significance</h3>
        <p>Modern historians recognize Shivaji as one of the few non-European rulers who successfully resisted colonial expansion during the early colonial period. His naval power checked Portuguese ambitions, while his successors delayed British expansion for decades. His model of kingdom-building influenced other Indian resistance movements against Mughal and British rule.</p>

        <h3>Contemporary Relevance and Scholarly Research</h3>
        <p>Recent scholarship has focused on Shivaji's governance models, environmental policies (water management in forts), religious tolerance, and economic policies. Archaeological work on his forts continues to reveal sophisticated engineering and urban planning. His legacy remains relevant in discussions about good governance, leadership, and national identity.</p>

        <h3>Lessons for Modern Youth</h3>
        <p><strong>Visionary Leadership:</strong> Creating systems that outlive the leader. <strong>Ethical Governance:</strong> Proving that righteousness and success aren't mutually exclusive. <strong>Innovation:</strong> Adapting traditional systems to contemporary challenges. <strong>Cultural Confidence:</strong> Pride in indigenous traditions while being progressive. <strong>Enduring Values:</strong> How principles can inspire centuries after one's lifetime.</p>

        <h4>Trusted References:</h4>
        <ul>
          <li><strong>Keer, Dhananjay.</strong> <em>Shivaji Maharaj: A Royal Revolutionary.</em></li>
          <li><strong>Savarkar, V.D.</strong> <em>Hindutva.</em></li>
          <li>Various records of the Indian Independence Movement</li>
          <li><strong>Sarkar, Jadunath.</strong> <em>Shivaji and His Times.</em></li>
          <li><strong>Sardesai, G.S.</strong> <em>New History of Marathas.</em></li>
          <li><strong>Pagdi, Setu Madhavrao.</strong> <em>Shivaji: His Life and Times.</em></li>
          <li>Contemporary European accounts and Mughal court histories</li>
        </ul>
      `
    }
  }
];