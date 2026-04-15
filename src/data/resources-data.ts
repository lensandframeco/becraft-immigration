export interface ResourceSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
}

export interface ResourceData {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  sections: ResourceSection[];
  cta: string;
}

export const resourcesData: ResourceData[] = [
  {
    slug: 'the-becraft-guide-to-avoiding-deportation',
    title: 'The Becraft Guide to Avoiding Deportation',
    subtitle: 'What Are Your Legal Rights If You Might Be Deported?',
    metaDescription: 'A comprehensive guide to avoiding deportation from the Law Office of Todd Becraft — understand your legal options, defenses, and relief measures.',
    intro: 'Deportation, also known as removal, is a serious and often distressing process in which a non-citizen is ordered to leave a country due to a violation of immigration laws. If you or someone you know is facing the risk of deportation, it is crucial to understand the legal options available. Several legal recourses can help challenge removal orders and provide avenues for remaining in the country lawfully. At the Law Office of Todd Becraft, we bring many years of experience helping people just like you to avoid getting deported.',
    sections: [
      {
        heading: 'Understanding the Deportation Process',
        paragraphs: [
          'Before diving into legal recourses, it is important to understand how deportation proceedings work. Deportation typically begins with an arrest or a notice to appear (NTA) before an immigration judge. The U.S. Immigration and Customs Enforcement (ICE) agency is responsible for enforcing deportation orders in the United States.',
          'The process generally follows these steps:',
        ],
        bullets: [
          'Issuance of a Notice to Appear (NTA): This document outlines the reasons for the removal proceedings and specifies a court date.',
          'Master Calendar Hearing: This initial hearing allows the non-citizen to respond to the charges and request relief.',
          'Individual Hearing: If relief is sought, a separate hearing will be scheduled to present evidence and legal arguments.',
          'Decision by the Immigration Judge: The judge will either grant relief or issue a deportation order.',
          'Appeals: If the judge orders deportation, the individual may have options to appeal the decision.',
          'Removal or Stay of Removal: If all legal options are exhausted, the individual may be deported or granted a stay of removal.',
        ],
      },
      {
        heading: 'Legal Recourses for Avoiding Deportation',
        paragraphs: [
          'There are several defenses and legal recourses available for individuals facing deportation. Each case is unique, and seeking legal counsel is crucial for determining the best course of action.',
        ],
      },
      {
        heading: '1. Challenging the Deportation Charges',
        paragraphs: [
          'One of the first steps in fighting deportation is challenging the legal basis for removal. Possible defenses include:',
        ],
        bullets: [
          'Procedural Defects: If the NTA contains incorrect information, or if the government fails to follow proper procedures, the case may be dismissed.',
          'Lack of Evidence: The government must prove that the individual is removable. If sufficient evidence is lacking, the case may be dismissed.',
          'Unlawful Arrest or Detention: If an individual\'s rights were violated during the arrest or detention process, the removal proceedings could be challenged.',
        ],
      },
      {
        heading: '2. Asylum and Protection from Persecution',
        paragraphs: [
          'Individuals who fear persecution in their home country due to race, religion, nationality, political opinion, or membership in a particular social group may apply for asylum. To be eligible, an applicant must:',
        ],
        bullets: [
          'File the application within one year of arrival in the U.S. (or show exceptional circumstances for late filing).',
          'Demonstrate a credible fear of persecution.',
          'Provide evidence supporting the claim.',
        ],
      },
      {
        heading: '3. Withholding of Removal',
        paragraphs: [
          'Similar to asylum, withholding of removal prevents deportation if the individual can prove they would face persecution in their home country. However, the burden of proof is higher than for asylum, and withholding of removal does not provide a direct path to permanent residency.',
          'This form of relief is particularly useful for individuals who miss the one-year deadline for asylum applications or who have been convicted of certain crimes that bar them from asylum eligibility.',
        ],
      },
      {
        heading: '4. Protection Under the Convention Against Torture (CAT)',
        paragraphs: [
          'Individuals who can prove that they are likely to face torture by the government or with government acquiescence if returned to their home country may qualify for protection under CAT. Unlike asylum, this protection does not lead to permanent residency but it does prevent deportation to the home country.',
        ],
      },
      {
        heading: '5. Cancellation of Removal',
        paragraphs: [
          'Cancellation of removal is a form of relief available to certain individuals who have established strong ties to the U.S. Eligibility criteria vary depending on whether the applicant is a lawful permanent resident (LPR) or a non-permanent resident.',
        ],
        bullets: [
          'For Lawful Permanent Residents: Must have been an LPR for at least five years, resided in the U.S. continuously for at least seven years, and must not have been convicted of an aggravated felony.',
          'For Non-Permanent Residents: Must have been physically present in the U.S. for at least ten years, demonstrate good moral character, and prove that removal would cause exceptional and extremely unusual hardship to a qualifying U.S. citizen or LPR family member.',
        ],
      },
      {
        heading: '6. Adjustment of Status',
        paragraphs: [
          'Some individuals facing deportation may be eligible to adjust their status to that of a lawful permanent resident (green card holder). This option may be available if:',
        ],
        bullets: [
          'The individual has an immediate family member who is a U.S. citizen or lawful permanent resident and can petition for them.',
          'The individual qualifies under certain employment-based categories.',
          'The individual qualifies under special programs such as the Violence Against Women Act (VAWA) or special immigrant juvenile status (SIJS).',
        ],
      },
      {
        heading: '7. Deferred Action and Prosecutorial Discretion',
        paragraphs: [
          'In some cases, immigration authorities may decide not to pursue deportation — known as prosecutorial discretion. One well-known form is Deferred Action for Childhood Arrivals (DACA), which provides temporary relief from deportation to certain undocumented immigrants who arrived in the U.S. as children. Factors that may influence prosecutorial discretion include:',
        ],
        bullets: [
          'Length of time in the U.S.',
          'Family ties in the U.S.',
          'Contributions to the community.',
          'Health issues.',
        ],
      },
      {
        heading: '8. Voluntary Departure',
        paragraphs: [
          'If no other legal remedies are available, an individual may request voluntary departure. This allows them to leave the U.S. on their own terms rather than being forcibly removed, including the ability to reapply for legal entry in the future without the penalties associated with deportation.',
        ],
      },
      {
        heading: '9. Appeals and Motions to Reopen',
        paragraphs: [
          'If a removal order is issued, there are still opportunities to challenge the decision through appeals and motions to reopen or reconsider. The appeals process can be complex, requiring legal expertise to navigate successfully.',
        ],
      },
    ],
    cta: 'Deportation is a serious legal matter, but numerous legal options exist for individuals at risk of removal. Seeking immediate legal counsel is essential. At the Law Office of Todd Becraft, we bring years of experience helping people avoid removal. Call us today: 213-388-1821.',
  },
  {
    slug: 'the-becraft-guide-to-how-to-get-a-green-card',
    title: 'The Becraft Guide to How to Get a Green Card',
    subtitle: 'How to Become a Lawful Permanent Resident of the United States',
    metaDescription: 'A step-by-step guide to getting a green card from the Law Office of Todd Becraft — eligibility categories, application process, and what to expect.',
    intro: 'A green card, officially known as a Permanent Resident Card, grants an immigrant the right to live and work permanently in the United States, a status known as Lawful Permanent Residency. Securing a green card is often a crucial step on the journey toward U.S. citizenship. At the Law Office of Todd Becraft, we bring many years of experience helping people navigate the challenging process of getting your green card.',
    sections: [
      {
        heading: '1. Green Card Eligibility Categories',
        paragraphs: [
          'There are several ways to qualify for a green card, and each category has its own requirements.',
        ],
      },
      {
        heading: 'A. Family-Based Green Cards',
        paragraphs: [
          'Immediate Relatives of U.S. Citizens: If you are the spouse, unmarried child under 21, or parent of a U.S. citizen, you qualify as an immediate relative. This category is given priority, with no annual limit on green cards issued. Other family-based categories include unmarried sons and daughters of U.S. citizens over 21, married children of U.S. citizens, and siblings of U.S. citizens — though these are subject to annual quotas and longer waiting times.',
        ],
      },
      {
        heading: 'B. Employment-Based Green Cards',
        paragraphs: [
          'Many green cards are issued to foreign nationals who have been offered employment in the U.S. These are divided into categories (EB-1 through EB-5) based on qualifications, including priority workers, professionals with advanced degrees, skilled workers, and EB-5 investors willing to invest significant capital in a U.S. business.',
        ],
      },
      {
        heading: 'C. Diversity Visa Lottery',
        paragraphs: [
          'Each year, the Diversity Immigrant Visa Program randomly selects applicants from countries with historically low immigration rates to the U.S. If selected, winners can apply for a green card, provided they meet the eligibility requirements.',
        ],
      },
      {
        heading: 'D. Humanitarian Grounds',
        paragraphs: [
          'Individuals granted refugee or asylee status in the U.S. can apply for a green card after one year. Special categories also exist for victims of human trafficking (T visas) and crime victims (U visas), among others.',
        ],
      },
      {
        heading: '2. The Green Card Application Process',
        paragraphs: [
          'While the process can vary depending on your eligibility category, it generally follows these key steps:',
        ],
      },
      {
        heading: 'A. Filing a Petition',
        paragraphs: [
          'For family-sponsored green cards, the U.S. citizen or permanent resident sponsor must file Form I-130, Petition for Alien Relative, with USCIS. For employment-based green cards, the employer typically files Form I-140, Immigrant Petition for Alien Worker. A labor certification from the U.S. Department of Labor may also be required.',
        ],
      },
      {
        heading: 'B. Adjustment of Status or Consular Processing',
        paragraphs: [
          'If you\'re already in the U.S. under a non-immigrant visa, you can apply for adjustment of status by submitting Form I-485. If you\'re applying from outside the U.S., you will go through consular processing at a U.S. embassy or consulate in your home country.',
        ],
      },
      {
        heading: 'C. Attend Your Interview',
        paragraphs: [
          'In most cases, applicants are required to attend an interview either with USCIS (if adjusting status in the U.S.) or at a U.S. consulate (if applying from abroad). During the interview, you may be asked about your background, relationship to your sponsor, or your qualifications for the green card.',
        ],
      },
      {
        heading: 'D. Receive Your Green Card',
        paragraphs: [
          'If your application is approved, you will be issued a green card allowing you to live and work in the U.S. as a permanent resident. Your green card will initially be valid for 10 years (or two years for conditional residents like spouses of U.S. citizens).',
        ],
      },
      {
        heading: '3. Special Considerations and Challenges',
        paragraphs: [
          'Some green card categories are subject to annual quotas. If there is a backlog in your category, you may be assigned a priority date — check the Visa Bulletin published by the U.S. Department of State to track availability. Certain applicants may receive a conditional green card requiring them to file Form I-751 to remove conditions before it expires. If your application is denied, you may have the opportunity to appeal or file a motion to reopen.',
        ],
      },
      {
        heading: '4. Preparing for Life as a Green Card Holder',
        paragraphs: [
          'As a permanent resident, you\'ll enjoy the ability to live and work anywhere in the U.S., access to government benefits, and a pathway to U.S. citizenship. However, green card holders also have responsibilities:',
        ],
        bullets: [
          'File U.S. income taxes annually.',
          'Obey all federal, state, and local laws.',
          'Renew your green card every 10 years.',
          'Maintain your U.S. residency — prolonged absences can jeopardize your status.',
        ],
      },
    ],
    cta: 'Securing a green card is a major step toward achieving your goals in the United States. At the Law Office of Todd Becraft, we provide expert support tailored to your specific situation. Call us today to get the process started: 213-388-1821.',
  },
  {
    slug: 'the-becraft-guide-on-how-to-become-a-us-citizen',
    title: 'The Becraft Guide on How to Become a US Citizen',
    subtitle: 'The Pathway to American Citizenship',
    metaDescription: 'A complete guide to U.S. naturalization from the Law Office of Todd Becraft — eligibility requirements, the step-by-step process, and life as a new citizen.',
    intro: 'Becoming a U.S. citizen involves several legal steps, and a deep commitment to the values of freedom and democracy. You may be seeking greater security, new opportunities, or the chance to reunite with family. At the Law Office of Todd Becraft, we understand the complexities involved in immigration law and are dedicated to helping individuals and families through this important life transition.',
    sections: [
      {
        heading: '1. Eligibility: Are You Ready to Apply?',
        paragraphs: [
          'Before you can apply for U.S. citizenship, you need to meet several requirements that ensure you\'ve established yourself in the United States.',
        ],
      },
      {
        heading: 'A. Lawful Permanent Resident Status',
        paragraphs: [
          'The first step is holding the status of a Lawful Permanent Resident (LPR) — also known as having a green card. Most lawful permanent residents got their green card through family sponsorship, employment, or by being granted refugee or asylee status. Pathways to LPR status include:',
        ],
        bullets: [
          'Family Sponsorship',
          'Employment-Based Immigration',
          'Diversity Visa Lottery',
          'Asylum or Refugee Status',
          'Special Immigrant Categories (religious workers, international organization employees, U.S. military service members)',
        ],
      },
      {
        heading: 'B. Continuous Residence',
        paragraphs: [
          'Once you have your green card, you need to have lived in the United States continuously for a certain period:',
        ],
        bullets: [
          'Five years of continuous residence is required for most applicants.',
          'Three years of continuous residence is required if you are married to a U.S. citizen.',
        ],
      },
      {
        heading: 'C. Physical Presence',
        bullets: [
          'You must have been physically present in the U.S. for at least 30 months out of the last five years.',
          'If applying based on marriage to a U.S. citizen, 18 months out of the last three years.',
        ],
      },
      {
        heading: 'D. Good Moral Character',
        paragraphs: [
          'You must demonstrate good moral character, meaning you\'ve followed the laws, paid your taxes, and acted responsibly. Certain behaviors — such as committing serious crimes or failing to file taxes — can disqualify you.',
        ],
      },
      {
        heading: 'E. Basic English Proficiency',
        paragraphs: [
          'You need to show basic proficiency in reading, writing, and speaking English, tested during your citizenship interview. The test focuses on everyday language skills and uses simple sentences.',
        ],
      },
      {
        heading: 'F. Knowledge of U.S. History and Civics',
        paragraphs: [
          'You\'ll need to pass a civics test covering basic U.S. history and government. USCIS provides a list of 100 potential questions. You\'ll be asked up to 10 during your interview and need to get at least six correct.',
        ],
      },
      {
        heading: '2. The Naturalization Process: Step-by-Step',
      },
      {
        heading: 'A. Filing Form N-400',
        paragraphs: [
          'The first step is submitting Form N-400, Application for Naturalization. This form asks for information about your personal history, including address, employment, and travel history. The form can be filed online or by mail, and fees include a filing fee and biometrics fee.',
        ],
      },
      {
        heading: 'B. Biometrics Appointment',
        paragraphs: [
          'USCIS will schedule you for a biometrics appointment where your fingerprints, photo, and signature are collected for a background check.',
        ],
      },
      {
        heading: 'C. The Naturalization Interview and Tests',
        paragraphs: [
          'A USCIS officer will review your application and ask you questions to verify information. During the interview you\'ll also take:',
        ],
        bullets: [
          'English Test: You\'ll be asked to read and write simple sentences in English, and answer a few basic spoken questions.',
          'Civics Test: You\'ll be asked up to 10 questions about American history and government — you need to get six correct to pass.',
        ],
      },
      {
        heading: 'D. The Oath of Allegiance',
        paragraphs: [
          'The final step is taking the Oath of Allegiance at your naturalization ceremony. You\'ll recite the oath alongside other new citizens and receive your Certificate of Naturalization — your official proof of U.S. citizenship.',
        ],
      },
      {
        heading: '3. Life as a U.S. Citizen',
        paragraphs: [
          'Once you\'ve completed the naturalization process, you\'ll enjoy all the rights and privileges of citizenship:',
        ],
        bullets: [
          'The right to vote in federal, state, and local elections.',
          'Apply for a U.S. passport for easier international travel.',
          'Sponsor family members for a green card.',
          'Access to federal jobs and security clearances.',
          'Full participation in jury duty and civic life.',
        ],
      },
      {
        heading: '4. Special Circumstances and Exceptions',
        bullets: [
          'Military Service: May qualify for expedited naturalization without the usual residence requirements.',
          'Older Applicants: Applicants 50+ who have lived in the U.S. as a green card holder for 20+ years may take the civics test in their native language.',
          'Medical Exemptions: Applicants with physical or mental disabilities may qualify for a waiver from the English or civics tests.',
        ],
      },
    ],
    cta: 'Becoming a U.S. citizen is about becoming part of a nation with a rich history and a culture that celebrates individuality and freedom. The Law Office of Todd Becraft is ready to help you navigate every step of the journey. Call us today: 213-388-1821.',
  },
  {
    slug: 'video-tutorials',
    title: 'Video Tutorials',
    subtitle: 'Immigration information from Attorney Todd Becraft',
    metaDescription: 'Watch Attorney Todd Becraft explain immigration processes, opportunities, and helpful information for immigrants to the United States.',
    intro: 'Attorney Todd Becraft describes various immigration processes, opportunities and other helpful information for immigrants to the United States.',
    sections: [
      {
        heading: 'What You\'ll Learn',
        bullets: [
          'U-Visas, which ultimately become a Green Card, are available to victims of certain crimes if there\'s a police report.',
          'Your rights if and when ICE knocks on your door.',
          'Step-by-step explanations of common immigration processes.',
        ],
      },
    ],
    cta: 'Have questions about your specific situation? Call the Law Office of Todd Becraft today: 213-388-1821.',
  },
];

export function getResourceBySlug(slug: string): ResourceData | undefined {
  return resourcesData.find(r => r.slug === slug);
}
