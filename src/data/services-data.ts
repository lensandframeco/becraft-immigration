export interface ServiceSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  sections: ServiceSection[];
  cta: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: 'asylum',
    title: 'Asylum',
    subtitle: 'Understanding the Process and Challenges',
    metaDescription: 'Explore the concept of asylum and its importance for individuals seeking safety in a new country. Learn the essentials now.',
    intro: 'Federal law in Title 8 U.S. Code § 1158 establishes that any alien physically present in or arriving in the United States, regardless of status, may apply for asylum. Also governed by the UN\'s 1948 Universal Declaration of Human Rights, UNHCR Refugee Convention of 1951, and the Refugee Act of 1980, a refugee is defined as any person outside their country of nationality who is unable or unwilling to avail themselves of their country\'s protection due to persecution or well-founded fear of persecution based on nationality, religion, race, membership in a particular social group, or political opinion.',
    sections: [
      {
        heading: 'Affirmative Process',
        paragraphs: [
          'To apply through the affirmative process, you must be physically present in the United States and can apply regardless of your method of arrival or current immigration status. You must apply within one year of your last arrival date, unless circumstances materially changed or extraordinary circumstances caused a delay.',
          'File Form I-589, Application for Asylum and Withholding of Removal with USCIS. After USCIS receives Form I-589, you will receive an acknowledgment of receipt and a notice to visit the nearest Application Support Center for fingerprinting.',
          'Interview priority order: (1) previously scheduled but rescheduled cases; (2) applications pending 21 days or less; (3) all other pending applications, newest first. You may bring an attorney or accredited representative. Spouses and children seeking derivative asylum must also attend. Non-English speakers must bring an interpreter. Interviews typically last about one hour.',
        ],
      },
      {
        heading: 'A Person Is Not Eligible to Apply for Asylum If They:',
        bullets: [
          'Do not follow the one-year filing deadline for Form I-589',
          'Had an immigration judge or the BIA deny their previous asylum application',
          'Can be removed to a safe third country under a two-party or multi-party agreement',
        ],
      },
      {
        heading: 'Defensive Process',
        paragraphs: [
          'The defensive process occurs when an alien requests asylum as a defense against removal. Cases are heard in adversarial proceedings before an immigration judge, who hears from both the alien and an ICE attorney.',
          'There are generally two ways people can be placed into defensive asylum processing: (1) referral from USCIS after an affirmative asylum denial; or (2) apprehension without proper documents and a determination that credible fear exists.',
        ],
      },
      {
        heading: 'Asylum Merits Interview',
        paragraphs: [
          'Aliens in expedited removal who indicate intent to apply for asylum may be referred to USCIS for credible fear screenings. If credible fear is found, USCIS can either retain and schedule an Asylum Merits Interview, or issue a Notice to Appear. If no credible fear is found, the alien can request review by an immigration judge. This procedure applies only to adults and families placed in expedited removal after May 31, 2022.',
        ],
      },
    ],
    cta: 'Do you need help applying for asylum in the greater Los Angeles area? The Law Office of Todd Becraft understands the most effective ways to handle these cases, so we will be able to help you achieve the most favorable outcome for your particular case. Our firm works very closely with every person we represent, so you can know that we will be by your side the entire time.',
  },
  {
    slug: 'bia-and-9th-circuit-appeals',
    title: 'BIA and 9th Circuit Appeals',
    subtitle: '9th Circuit Appeals and Immigration Decisions',
    metaDescription: 'Understand the process of 9th Circuit appeals and how to address adverse immigration decisions effectively.',
    intro: 'Once the Department of Homeland Security or an Immigration Judge has rendered a decision, there may be an administrative appeal to the Administrative Appeals Office (AAO) of the Department of Homeland Security or the Board of Immigration Appeals (BIA) of the Department of Justice. If the BIA denies your appeal, the next step is the Ninth Circuit Court of Appeals.',
    sections: [
      {
        heading: 'How BIA Cases Work',
        paragraphs: [
          'You must file a BIA appeal within 30 days of an immigration judge\'s denial using Form EOIR-26. The BIA is the highest administrative body for interpreting and applying immigration laws, located at EOIR headquarters in Falls Church, Virginia, with nationwide jurisdiction. BIA decisions are binding on all DHS officers and immigration judges unless modified by the Attorney General or a federal court.',
          'The BIA reviews all evidence submitted to the immigration judge but does not consider new evidence. A decision typically takes at least six months, often more than a year.',
          'The BIA may: send the case back to the immigration judge with new instructions; overturn the original decision (which could mean relief from deportation); or deny outright. If denied, the next step is the Ninth Circuit Court of Appeals.',
        ],
      },
      {
        heading: 'How Ninth Circuit Cases Work',
        paragraphs: [
          'The Ninth Circuit handles cases in California, Hawaii, Alaska, Washington, Oregon, Arizona, Idaho, Montana, and Nevada. After a BIA denial, file a Petition for Review with the Ninth Circuit.',
          'Important: Filing with the Ninth Circuit does NOT automatically delay a removal order. You must also file a Motion to Stay Removal. Like the BIA, the Ninth Circuit does not consider new evidence. Decisions typically take more than two years.',
          'If the Ninth Circuit rules in your favor, the court may grant permission to remain in the US, or send the case back to the BIA or immigration judge (a second denial remains possible). If denied, options include: requesting rehearing within 45 days; requesting rehearing en banc (rarely granted); or filing a writ of certiorari with the Supreme Court (even rarer).',
        ],
      },
    ],
    cta: 'Our firm will invest the necessary time to fully prepare for your hearing and present the strongest possible arguments in your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles BIA and 9th Circuit appeals attorney.',
  },
  {
    slug: 'cancellation-of-removal',
    title: 'Cancellation of Removal',
    subtitle: 'A Lifeline for Noncitizens',
    metaDescription: 'Understand cancellation of removal under INA for non-permanent residents and how it can protect against deportation.',
    intro: 'Non-LPR cancellation of removal under INA § 240A(b)(1) is a defensive application only — you cannot apply affirmatively to USCIS. It is only available when you are already facing removal in immigration court. When granted, the person receives a green card.',
    sections: [
      {
        heading: 'Cancellation of Removal Eligibility',
        paragraphs: [
          'To qualify for standard cancellation of removal, you must prove all three of the following:',
        ],
        numbered: [
          'Prior to receiving a Notice to Appear, you maintained continuous physical presence in the US for 10 or more years and were a person of good moral character (INA § 101(f)) during that period',
          'You were not convicted of any offense under INA § 212(a)(2), INA § 237(a)(2), or INA § 237(a)(3)',
          'Removal would cause exceptional and extremely unusual hardship to a US citizen or LPR spouse, parent, or child, and you deserve a favorable exercise of discretion',
        ],
      },
      {
        heading: 'Alternative Eligibility — VAWA (Battered or Subjected to Cruelty)',
        bullets: [
          'Battered or subjected to extreme cruelty by a US citizen or LPR spouse or parent',
          'Continuous physical presence for 3 or more years, good moral character during that period',
          'Not inadmissible under certain INA sections; not convicted of an aggravated felony',
          'Removal would result in extreme hardship to them or their child',
        ],
      },
      {
        heading: 'Satisfying the 10-Year Residence Requirement',
        paragraphs: [
          'Rent receipts, credit card statements, and pay stubs can help prove continuous residence. Affidavits from friends or family are acceptable when hard evidence is unavailable. Leaving the country for more than 90 days, or trips totaling more than 180 days, can negatively impact the 10-year calculation. Receiving a Notice to Appear stops the 10-year clock.',
        ],
      },
      {
        heading: 'Satisfying the Qualifying Relative Requirement',
        paragraphs: [
          'The qualifying relative must be a spouse, parent, or child who is either a US citizen or a lawful permanent resident. A child must be unmarried and under 21.',
        ],
      },
      {
        heading: 'Satisfying the Exceptional and Extremely Unusual Hardship Requirement',
        paragraphs: [
          'Hardship must go beyond simple sadness at separation. Unavailability of medical care in the home country often qualifies. Language barriers or a lack of support structures for qualifying relatives can also be factors in your favor.',
        ],
      },
      {
        heading: 'Satisfying the Good Moral Character Requirement',
        paragraphs: [
          'Your criminal record will be reviewed; convictions are damaging. Minor crimes can sometimes be overcome through evidence of volunteer service or steady employment.',
        ],
      },
    ],
    cta: 'You may call (213) 388-1821 or contact us online to arrange a consultation with our Los Angeles cancellation of removal lawyer.',
  },
  {
    slug: 'citizenship-and-naturalization',
    title: 'Citizenship and Naturalization',
    subtitle: 'The Citizenship and Naturalization Process Explained',
    metaDescription: 'Understand Citizenship and Naturalization requirements. Find essential information to help you through the journey.',
    intro: 'Naturalization is the process by which US citizenship is granted to a lawful permanent resident after satisfying the requirements of the INA. Acquisition of citizenship occurs through US citizen parents either at birth or after birth but before age 18.',
    sections: [
      {
        heading: 'When Citizenship Is Available',
        bullets: [
          'Valid green card/LPR status plus 5 years residing in the US',
          'Married to a US citizen plus 3 years residing in the US',
          'LPR status, served in the US military, plus 3 years in the US',
          'Married to a US citizen being transferred abroad by a government agency, armed forces, or multinational company',
        ],
      },
      {
        heading: 'Requirements Under Title 8 U.S. Code § 1427(a)',
        bullets: [
          'Resided for a minimum of 5 continuous years in the US after lawful admission for permanent residence, with physical presence for at least half that time',
          'Resided continuously within the US from the date of application up to admission to citizenship',
          'Been and still are a person of good moral character, abiding by the principles of the Constitution, well disposed to good order and happiness',
        ],
      },
      {
        heading: 'To Apply, You Must:',
        bullets: [
          'Be at least 18 years of age when filing',
          'Be able to read, write, and speak basic English',
          'Prove understanding and knowledge of US history and government',
          'Be willing to take the Oath of Allegiance',
        ],
      },
      {
        heading: 'The Naturalization Process',
        paragraphs: [
          'Submit your application to USCIS. You may be required to submit biometric data. You will then attend an interview with a USCIS immigration officer and take a US government and history test. Benefits of citizenship include the right to vote, priority to petition for family members, the ability to travel with a US passport, eligibility for federal jobs, and much more.',
        ],
      },
      {
        heading: 'Common Problems to Avoid',
        bullets: [
          'Errors or inconsistencies in Form N-400',
          'Outstanding warrants or criminal charges or convictions',
          'Failure to fulfill any requirements of citizenship',
          'Inconsistencies in prior immigration applications',
          'Fraud or mistakes in the green card process',
          'Any incomplete citizenship documents',
        ],
      },
    ],
    cta: 'Our firm has been helping immigrants for more than a decade. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles citizenship and naturalization lawyer.',
  },
  {
    slug: 'daca',
    title: 'DACA',
    subtitle: 'Insights into Immigration Relief Options',
    metaDescription: 'Understand the complexities of DACA and how it still offers valuable benefits for eligible individuals in the U.S. today.',
    intro: 'The US District Court for the Southern District of Texas imposed an injunction on July 16, 2021 (affirmed by the 5th Circuit) permanently enjoining DHS from granting DACA to new applicants, but it did not cancel existing DACA status for people in good standing. Benefits for eligible individuals include a two-year lawful status to reside in the US, the ability to apply for driver\'s licenses, and the ability to seek approval to leave and re-enter the country.',
    sections: [
      {
        heading: 'DACA Requirements',
        paragraphs: ['To be eligible for DACA, you must meet all of the following criteria:'],
        bullets: [
          'Under 31 years of age on June 15, 2012 (born on or after June 16, 1981)',
          'Came to the United States before reaching 16 years of age',
          'Lived continuously in the United States since June 15, 2007',
          'Physically present in the United States at time of filing and on June 15, 2012',
          'Did not have lawful immigration status on June 15, 2012, or at time of filing',
          'Currently enrolled in school, graduated high school or obtained a certificate of completion, obtained a GED, or were an honorably discharged veteran',
          'Have not been convicted of a felony, significant misdemeanor, or three or more other misdemeanors, and do not pose a threat to national security or public safety',
        ],
      },
      {
        heading: 'DACA Filing Process',
        paragraphs: [
          'You will need to collect and submit the following documentation:',
        ],
        bullets: [
          'Proof of identity: passport, national ID, birth certificate with photo ID, school or military ID, or a US government immigration document with photo',
          'Proof of entry before age 16: passport with admission stamp, school records, Form I-94, travel records, INS/DHS document stating entry date, employment records, hospital or medical records',
          'Proof of immigration status as of June 15, 2012',
          'Proof of continuous presence in the US on June 15, 2012 and continuous residence since June 15, 2007 (rent receipts, utility bills, employment records, school records, bank transactions, etc.)',
          'Proof of student status at time of request if applicable (school records, diploma, GED certificate)',
          'Complete Form I-821D, Form I-765, and Form I-675 Worksheet; mail to the appropriate USCIS Lockbox; visit an ASC for biometric services',
        ],
      },
    ],
    cta: 'Our firm understands how frightening many aspects of this process can be for people, but we will know how to walk you through the entire journey and make everything as simple as possible. You can call (213) 388-1821 or contact us online to receive a consultation with our Los Angeles DACA lawyer.',
  },
  {
    slug: 'deportation-and-removal',
    title: 'Deportation and Removal',
    subtitle: 'What You Need to Know',
    metaDescription: 'Understand Deportation and Removal under U.S. law. Know your rights and options if facing removal proceedings.',
    intro: 'Title 8 U.S. Code § 1229a governs removal proceedings. Few prospects can be more frightening for people who are lawful permanent residents or otherwise satisfying legal requirements to remain in the United States, because immigration officials may be preparing to argue that a person needs to be removed immediately. A deportation case ends with either deportation or remaining eligible to live and work in the US.',
    sections: [
      {
        heading: 'When DHS Commonly Begins Deportation Cases',
        bullets: [
          'Marriage fraud',
          'Person entered the United States without proper authority',
          'Person was initially in the US legally but visa has since expired',
          'Person who violates terms of admission or works without permission',
          'Green card holder found guilty of a serious crime or had difficulty with the law',
          'Person with criminal convictions',
          'Person whose asylum claim has been denied',
          'Person who overstays a visa',
          'Person filed for an immigration benefit and it was denied',
        ],
      },
      {
        heading: 'Deportation Hearings',
        paragraphs: [
          'A Notice to Appear means DHS has already begun the removal or deportation process. This document includes the reasons for removal, the court location, the date and time of the first hearing, the legal authority relied upon, your right to hire an attorney, the consequences for failing to appear, and the requirement to provide your current address and phone number.',
          'Los Angeles Immigration Court is located on Olive Street in downtown LA. The first hearing is called a "master hearing" or "master calendar hearing." A final hearing — if multiple hearings occur — is called an "individual hearing." Other hearings may include bond redetermination hearings, withholding-only hearings, and rescission hearings.',
          'It is important for people to understand that arrests in Los Angeles do not automatically translate to deportations. You will not lose a visa or green card for criminal charges, but you could be at risk.',
        ],
      },
      {
        heading: 'Most Common Crimes Among Immigrants Facing Removal',
        bullets: [
          'Drug crimes',
          'Domestic violence',
          'Sex crimes',
          'Firearm crimes',
          'Theft or robbery charges',
          'Fraud crimes',
        ],
      },
      {
        heading: 'Timeline',
        paragraphs: [
          'Some people on an expedited docket may resolve their case within six months. Cancellation of removal generally takes up to a year and a half from the master calendar hearing. If cancellation is denied, you can appeal to the BIA.',
        ],
      },
    ],
    cta: 'Our firm understands that every client we serve is unique, and we take the time to really develop relationships with the people we serve. Take the first step when you call (213) 388-1821 or contact us online today to set up a consultation with our Los Angeles deportation and removal lawyer.',
  },
  {
    slug: 'green-card-adjustment-of-status',
    title: 'Green Card / Adjustment of Status',
    subtitle: 'Your Path to Permanent Residency',
    metaDescription: 'Understand the Green Card process, from eligibility to application, and start your journey to permanent residency.',
    intro: 'Adjustment of status is the process to apply for lawful permanent residence while inside the United States. A green card (Permanent Resident Card) gives you official immigration status, entitles you to certain rights, and is required to naturalize as a US citizen. Unlike consular processing, you do not have to return to your country of citizenship — a process that can save considerable time and expense.',
    sections: [
      {
        heading: 'How to Apply for a Green Card',
        paragraphs: [
          'Most applicants need to complete at least two forms: an immigrant petition and a green card application. Another person usually files the petition on your behalf as the sponsoring petitioner. The federal government states that being a permanent resident is a privilege, not a right.',
        ],
      },
      {
        heading: 'Green Card Categories',
        bullets: [
          'Family-based: immediate relatives of US citizens (spouse, unmarried child under 21, parents of adults); family preference categories; fiancé(e)s (K-1/K-2); widow(er)s; VAWA self-petitioners',
          'Employment-based: EB-1 through EB-5 based on qualifications — extraordinary ability, outstanding researchers/professors, multinational managers, advanced degree professionals, skilled workers, and EB-5 investors',
          'Special immigrants: Special Immigrant Juveniles; Afghan/Iraqi translators; religious workers; international organization employees',
          'Refugee or asylee status (granted asylum or admitted as refugee at least one year ago)',
          'Victims of human trafficking or crime (T and U visas)',
          'Diversity Immigrant Visa Program (lottery)',
          'Cuban Adjustment Act and other special programs',
        ],
      },
      {
        heading: 'The Application Process (Inside the US)',
        numbered: [
          'File an immigrant petition with USCIS (e.g., Form I-130 for family-based, Form I-140 for employment-based)',
          'Check visa availability using the DOS Visa Bulletin',
          'File Form I-485 (Application to Register Permanent Residence or Adjust Status)',
          'Attend a biometrics ASC appointment',
          'Attend an interview when applicable',
          'Respond to any requests for evidence',
          'Receive a decision',
        ],
      },
      {
        heading: 'The Application Process (Outside the US — Consular Processing)',
        numbered: [
          'File an immigrant petition',
          'Wait for the petition decision',
          'Receive NVC notification',
          'Attend a consular office appointment at the nearest US Embassy or Consulate',
          'Receive your green card',
        ],
      },
    ],
    cta: 'Our firm will take the time to explain every single action that is happening in your case and how we are working for you. You can call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles green card/adjustment of status attorney.',
  },
  {
    slug: 'i-601a-provisional-waivers',
    title: 'I-601A Provisional Waivers',
    subtitle: 'The I 601A Application Process Explained',
    metaDescription: 'Learn about the I 601A application process and how it can affect your immigration journey. Essential information inside.',
    intro: 'Form I-601A (Application for Provisional Unlawful Presence Waiver) is for immigrant visa applicants who are relatives of US citizens or lawful permanent residents. It allows them to request a provisional waiver of unlawful presence grounds of inadmissibility under INA § 212(a)(9)(B) before departing the US for an immigrant visa interview. It does not waive other grounds of inadmissibility. When approved overseas, the person can return to the US and enjoy LPR status and a green card.',
    sections: [
      {
        heading: 'Who Can File',
        bullets: [
          'Relatives of US citizens or LPRs',
          'Diversity Visa lottery winners',
          'Other immigrant visa applicants',
        ],
      },
      {
        heading: 'Form I-601A Requirements',
        bullets: [
          'Being at least 17 years of age',
          'Being physically present in the US and able to provide biometrics',
          'Being willing to leave the US to legally obtain an immigrant visa',
          'A qualifying relative (spouse or parent who is a US citizen or LPR) would suffer extreme hardship if not united in the US',
          'Inadmissible because of unlawful presence (180 days to 365 days during a single stay, or 1 year or more in a single stay)',
          'Has a pending case with the US Department of State for an approved immigrant visa petition or Diversity Visa Program',
        ],
      },
      {
        heading: 'People Will Not Qualify If They:',
        bullets: [
          'Are younger than 17 years of age',
          'Have grounds of inadmissibility for any reason besides unlawful presence',
          'Already have applications to adjust status',
          'Are currently going through removal proceedings',
          'Fail to include details of hardships a spouse or parent would face upon removal',
          'Have a prior order of removal before or during a pending I-601A',
        ],
      },
      {
        heading: 'Extreme Hardship Factors Considered',
        bullets: [
          'Financial harm: future employability, home or business loss, significant decline in standard of living',
          'Health of qualifying relatives: ongoing specialized treatment for physical or mental conditions, limited availability in home country',
          'Personal considerations: close relatives in US or home country, separation from family, ages of involved parties, length of US residence',
          'Special considerations: religious, language, cultural, or ethnic obstacles; valid fears of harm or persecution in home country',
          'Educational losses: lack of ability to pursue higher education, disruption to current programs',
        ],
      },
      {
        heading: 'Form I-601A Process',
        paragraphs: [
          'The filing fee is $630 for Form I-601A plus an $85 biometrics fee. Processing times: Nebraska Service Center — approximately 27 months for I-601A; Potomac Service Center — approximately 35.5 months for I-601A. After approval, apply for a green card through consular processing. If denied, you can appeal within 30 days by filing Form I-290B.',
        ],
      },
    ],
    cta: 'Our firm has handled scores of these kinds of cases, so we know how to deal with every issue that might arise. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles I-601A provisional waiver attorney.',
  },
  {
    slug: 'k-1-fiance-visa',
    title: 'K-1 Fiancé Visa',
    subtitle: 'K-1 Fiancé Visa Requirements and Process Explained',
    metaDescription: 'Discover the essential details about the K-1 Fiancé Visa, a pathway to unite with your partner in the United States.',
    intro: 'US citizens wanting to bring a foreign fiancé(e) to the United States must file Form I-129F (Petition for Alien Fiancé(e)). The couple must intend to marry within 90 days of the fiancé(e) entering the US. The marriage must be bona fide — reflecting genuine intent by both parties to establish a life together, not simply to obtain an immigration benefit. If the couple marries within 90 days of K-1 admission, the fiancé(e) can apply for green card status.',
    sections: [
      {
        heading: 'K-1 Visa Eligibility',
        bullets: [
          'You are a US citizen',
          'You and your fiancé(e) intend to marry within 90 days of their admission on a K-1 visa',
          'Both of you are legally free to marry (all prior marriages legally terminated by divorce, death, or annulment)',
          'You and your fiancé(e) met in person at least once within the two-year period before filing the petition (waivable in cases of strict cultural/social customs or extreme hardship to the US citizen petitioner)',
        ],
      },
      {
        heading: 'Not Eligible If:',
        bullets: [
          'You are already married',
          'You plan to marry outside the United States',
          'Your fiancé(e) already legally resides in the United States',
        ],
      },
      {
        heading: 'K-1 Visa Process',
        numbered: [
          'File Form I-129F — USCIS reviews and may request additional evidence; if approved, sent to the DOS National Visa Center (NVC)',
          'NVC forwards the petition to the US Embassy or consulate where your fiancé(e) will apply for the K-1 visa',
          'Embassy or consulate notifies of visa interview date; fiancé(e) brings required forms and documents',
          'Consular officer determines eligibility; if approved, K-1 visa is valid for up to six months for a single entry',
          'Fiancé(e) travels to the US and seeks admission at a port of entry (CBP makes the final admission decision)',
          'US citizen and fiancé(e) have 90 days to marry',
          'After marriage: file Form I-485 for adjustment of status and a green card',
          'If married less than two years at the time of I-485 approval: USCIS grants conditional permanent resident status, with a green card valid for 2 years',
          'File Form I-751 (Petition to Remove Conditions on Residence) within 90 days before the green card expires',
        ],
      },
    ],
    cta: 'Our firm has helped scores of people all over California get the K-1 visas they needed to marry. Call (213) 388-1821 or contact us online to set up a consultation with our Los Angeles K-1 lawyer.',
  },
  {
    slug: 'temporary-protected-status-tps',
    title: 'Temporary Protected Status (TPS)',
    subtitle: 'What You Need to Know',
    metaDescription: 'Learn about Temporary Protected Status and how it impacts the lives of those facing extraordinary circumstances.',
    intro: 'Temporary Protected Status (TPS) is a form of humanitarian relief that helps foreign nationals in the US who may not qualify for asylum but are fleeing or reluctant to return to potentially dangerous situations. The Secretary of Homeland Security designates countries when conditions temporarily prevent nationals from returning safely, or when a country cannot handle the return of its nationals.',
    sections: [
      {
        heading: 'Currently Designated TPS Countries',
        bullets: [
          'Afghanistan, Cameroon, El Salvador, Haiti, Honduras, Myanmar, Nepal, Nicaragua, Somalia, South Sudan, Sudan, Syria, Ukraine, Venezuela, Yemen',
        ],
      },
      {
        heading: 'TPS Requirements',
        paragraphs: ['To be eligible, you must meet all of the following:'],
        bullets: [
          'National of a designated TPS country (or, if stateless, last habitually resided in a designated country)',
          'Filed during the initial open registration or re-registration period, or meet late initial filing requirements',
          'Continuously physically present in the US since the effective date of the most recent designation',
          'Continuously resided in the US since the country\'s specified date',
          'Brief, casual, and innocent departures from the US are permitted; you must inform USCIS of any absences',
        ],
      },
      {
        heading: 'Disqualified If You:',
        bullets: [
          'Have a felony conviction or two or more misdemeanor convictions in the US',
          'Are found inadmissible under applicable grounds in INA § 212(a)',
          'Are subject to mandatory bars to asylum (persecution of others, engaging or inciting terrorist activity)',
          'Fail to meet continuous physical presence and residence requirements',
          'Fail to register or re-register for TPS as required without good cause',
        ],
      },
      {
        heading: 'TPS Registration — Required Documents',
        bullets: [
          'Form I-821 (Application for TPS) and optionally Form I-765 (Request for Employment Authorization)',
          'Identity and nationality evidence: passport copy, birth certificate with photo ID, or national identity document',
          'Date of entry evidence: passport copy, I-94, or continuous residence documents',
          'Continuous residence evidence: rent receipts, employment records, utility bills, school records, hospital or medical records, church or organization attestations',
        ],
      },
    ],
    cta: 'Our firm works very closely with every client, so you will be kept up to date on everything that is happening with your case. Call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles TPS attorney.',
  },
  {
    slug: 'u-visa',
    title: 'U-Visa',
    subtitle: 'U-Visa Process and Important Facts',
    metaDescription: 'Explore the U-Visa process and its significance for individuals seeking safety and security in the United States.',
    intro: 'U nonimmigrant status (U visa) is immigration relief for victims of certain crimes. It makes it safer for victims to report cases to law enforcement and help authorities pursue criminal cases. Benefits include temporary immigration status, work authorization, temporary status for qualifying family members, and the possibility of lawful permanent resident status. Created by the Victims of Trafficking and Violence Protection Act (VTVPA) in 2000, the most recent USCIS statistics show an 87 percent approval rate for U visa petitioners. A U visa should be free.',
    sections: [
      {
        heading: 'Qualifying Criminal Activity Includes:',
        bullets: [
          'Abduction, Abusive Sexual Contact, Blackmail, Domestic Violence, Extortion, False Imprisonment, Female Genital Mutilation, Felonious Assault',
          'Fraud in Foreign Labor Contracting, Hostage, Incest, Involuntary Servitude, Kidnapping, Manslaughter, Murder, Obstruction of Justice',
          'Peonage, Perjury, Prostitution, Sexual Assault, Sexual Exploitation, Slave Trade, Stalking, Torture, Trafficking, Witness Tampering',
          'Unlawful Criminal Restraint, and other related crimes where elements are substantially similar',
          'Attempts, conspiracies, or solicitations to commit any of these offenses',
        ],
      },
      {
        heading: 'U-Visa Eligibility Requirements',
        bullets: [
          'You suffered substantial physical or mental abuse as a result of being a victim of qualifying criminal activity',
          'You have information about the criminal activity (if under 16 or unable to provide due to disability, a parent, guardian, or next friend may possess this information)',
          'You were, are, or are likely to be helpful to law enforcement in the investigation or prosecution',
          'The crime occurred in the US or violated American laws',
          'You are admissible to the US (if not, you can apply for a waiver on Form I-192)',
        ],
      },
      {
        heading: 'Applying for a U Visa (Inside the US)',
        bullets: [
          'Form I-918, Petition for U Nonimmigrant Status',
          'Form I-918, Supplement B, U Nonimmigrant Status Certification (signed by an authorized official of a certifying law enforcement agency)',
          'Form I-192 if inadmissibility issues are present',
          'A personal statement describing the criminal activity',
          'Evidence to establish each eligibility requirement',
        ],
      },
      {
        heading: 'Applying for a U Visa (Outside the US)',
        bullets: [
          'File all necessary forms with the Vermont Service Center',
          'Follow instructions from the Vermont Service Center, including providing fingerprints at the nearest US Embassy or Consulate',
          'If approved, engage in the consular process, including an interview with a consular officer at the nearest US Embassy or Consulate',
        ],
      },
    ],
    cta: 'Our firm will know how to help you get around any complication and be able to achieve the most favorable possible outcome for your case. You may call (213) 388-1821 or contact us online to schedule a consultation with our Los Angeles U-Visa attorney.',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug === slug);
}

// Maps English service slugs to their Spanish equivalents (for hreflang)
export const enToEsServiceSlug: Record<string, string> = {
  'asylum': 'asilo',
  'cancellation-of-removal': 'cancelacion-de-eliminacion',
  'citizenship-and-naturalization': 'ciudadania-y-naturalizacion',
  'daca': 'daca',
  'deportation-and-removal': 'deportacion-y-remocion',
  'green-card-adjustment-of-status': 'tarjeta-verde-ajuste-de-estatus',
  'i-601a-provisional-waivers': 'i-601a-exenciones-provisionales',
  'k-1-fiance-visa': 'visa-de-prometido-k-1',
  'temporary-protected-status-tps': 'estado-de-proteccion-temporal-tps',
  'u-visa': 'visa-u',
};
