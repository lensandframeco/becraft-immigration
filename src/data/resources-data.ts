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
    slug: 'what-happens-if-uscis-requests-more-evidence-rfe',
    title: 'What Happens If USCIS Requests More Evidence (RFE)?',
    subtitle: 'Understanding and Successfully Responding to USCIS Requests for Evidence',
    metaDescription: 'Received an RFE from USCIS? Learn what a Request for Evidence means, why USCIS issues them, and how to prepare a strong response to keep your immigration case on track.',
    intro: 'Receiving a Request for Evidence (RFE) from U.S. Citizenship and Immigration Services can feel overwhelming. Many applicants immediately fear that their immigration case is about to be denied. In reality, an RFE is often a normal part of the immigration process and, in many cases, simply means that the immigration officer reviewing your application needs additional documentation before making a final decision. Whether you are applying for a marriage-based green card, adjustment of status, naturalization, asylum, a U visa, or an immigration waiver, a properly prepared response to an RFE can be the difference between approval and denial. At The Law Office of Todd Becraft, we have helped thousands of individuals and families successfully respond to USCIS Requests for Evidence. With more than three decades of immigration law experience, attorney Todd Becraft understands what USCIS is looking for and how to prepare strategic, persuasive responses.',
    sections: [
      {
        heading: 'What Is a USCIS Request for Evidence?',
        paragraphs: [
          'A Request for Evidence, commonly referred to as an RFE, is an official notice issued by USCIS when the agency determines that additional information is required before it can adjudicate an application or petition.',
          'An RFE does not mean your case has been denied. Instead, it means that USCIS:'
        ],
        bullets: [
          'Needs more supporting documentation.',
          'Requires clarification about facts in your application.',
          'Wants updated evidence.',
          'Has identified inconsistencies.',
          'Needs proof that you meet all eligibility requirements.'
        ]
      },
      {
        paragraphs: ['The RFE notice will explain:'],
        numbered: [
          'What documents are missing.',
          'Why is the evidence necessary.',
          'Where to send the response.',
          'The deadline to respond.'
        ]
      },
      {
        heading: 'Why USCIS Issues Requests for Evidence',
        paragraphs: [
          'USCIS officers review thousands of applications every month. Even a minor omission can lead to an RFE.'
        ]
      },
      {
        heading: 'Common Reasons for RFEs',
        paragraphs: ['Missing Civil Documents']
      },
      {
        bullets: [
          'Birth certificates',
          'Marriage certificates',
          'Divorce judgments',
          'Adoption decrees',
          'Passport pages'
        ]
      },
      {
        paragraphs: ['Insufficient Financial Evidence']
      },
      {
        bullets: [
          'IRS tax transcripts',
          'W-2s',
          'Pay stubs',
          'Employment verification letters'
        ]
      },
      {
        paragraphs: ['Lack of Proof of a Bona Fide Marriage']
      },
      {
        bullets: [
          'Joint bank accounts',
          'Insurance policies',
          'Lease agreements',
          'Photos together',
          'Travel records'
        ]
      },
      {
        paragraphs: [
          'Incomplete Medical Examination: Issues involving Form I-693 are common.',
          'Criminal History: USCIS may request certified court dispositions.',
          'Translation Problems: Documents in another language must be accompanied by certified English translations.',
          'Inconsistent Answers: Differences in dates, addresses, or prior immigration history often trigger RFEs.'
        ]
      },
      {
        heading: 'Is an RFE Bad News?',
        paragraphs: [
          'No. Receiving an RFE does not mean that USCIS intends to deny your case. In fact, many applications are approved shortly after the requested evidence is submitted.',
          'Think of an RFE as USCIS saying: "We need a little more information before we can approve your case."'
        ]
      },
      {
        heading: 'What Happens After You Receive an RFE?',
        paragraphs: [
          'Step 1: Read the Notice Carefully — Every word matters.',
          'Step 2: Identify Exactly What USCIS Is Requesting — Some RFEs are straightforward, while others involve complex legal issues.',
          'Step 3: Gather Supporting Documents — Collect every requested item and any additional evidence that strengthens your case.',
          'Step 4: Prepare a Detailed Response — A professional response package should include:'
        ],
        bullets: [
          'Cover letter',
          'Copy of the RFE notice',
          'Organized exhibits',
          'Legal analysis, if appropriate'
        ]
      },
      {
        paragraphs: [
          'Step 5: Submit Before the Deadline — USCIS generally denies cases if the response is late.',
          'Step 6: Wait for USCIS to Resume Processing — USCIS will review the response and issue a decision or another notice.'
        ]
      },
      {
        heading: 'How Long Does USCIS Take After an RFE?',
        paragraphs: [
          'Processing times vary. Some applicants receive a decision within two to six weeks, while others may wait several months, depending on:'
        ],
        bullets: [
          'The complexity of the case',
          'USCIS workload',
          'Security checks',
          'Service center location'
        ]
      },
      {
        heading: 'Case Study #1: Marriage-Based Green Card',
        paragraphs: [
          'A U.S. citizen petitioned for his spouse. USCIS issued an RFE requesting more evidence that the marriage was genuine.',
          'Evidence Submitted:'
        ],
        bullets: [
          'Joint tax returns',
          'Lease agreement',
          'Joint bank statements',
          'Family photographs',
          'Affidavits from friends'
        ]
      },
      {
        paragraphs: ['Result: The couple received approval six weeks later.']
      },
      {
        heading: 'Case Study #2: Naturalization Application',
        paragraphs: [
          'An applicant for citizenship received an RFE regarding a decades-old misdemeanor arrest.',
          'Response: The applicant submitted certified court records and proof that all conditions were satisfied.',
          'Result: USCIS approved the N-400 application.'
        ]
      },
      {
        heading: 'Case Study #3: Affidavit of Support Deficiency',
        paragraphs: [
          'A green card applicant received an RFE because the petitioner\'s income was below the federal poverty guidelines.',
          'Response: A joint sponsor was added, along with complete tax transcripts and proof of employment.',
          'Result: The adjustment of status application was approved.'
        ]
      },
      {
        heading: 'Common RFEs in Marriage-Based Green Card Cases',
        paragraphs: ['Marriage-based applications frequently receive RFEs requesting:'],
        bullets: [
          'Proof of cohabitation',
          'Joint financial accounts',
          'Insurance documents',
          'Utility bills',
          'Children\'s birth certificates',
          'Photos from family events',
          'Correspondence and messages'
        ]
      },
      {
        paragraphs: ['USCIS wants evidence that the marriage is real and not entered into solely for immigration purposes.']
      },
      {
        heading: 'Common RFEs for Adjustment of Status',
        paragraphs: ['Adjustment applicants may receive RFEs involving:'],
        bullets: [
          'Medical exams',
          'Birth certificates',
          'I-864 financial support',
          'Proof of lawful entry',
          'Prior immigration records'
        ]
      },
      {
        heading: 'Common RFEs for Citizenship Cases',
        paragraphs: ['Naturalization RFEs often focus on:'],
        bullets: [
          'Tax filing history',
          'Selective Service registration',
          'Child support obligations',
          'Criminal matters',
          'Trips outside the United States'
        ]
      },
      {
        heading: 'Common RFEs for Asylum Cases',
        paragraphs: ['Asylum applicants may be asked for:'],
        bullets: [
          'Additional declarations',
          'Country conditions evidence',
          'Police reports',
          'Medical evaluations',
          'Witness statements'
        ]
      },
      {
        heading: 'Common RFEs for U Visa Cases',
        paragraphs: ['USCIS may request:'],
        bullets: [
          'Updated Form I-918 Supplement B',
          'Medical and counseling records',
          'Police reports',
          'Evidence of substantial abuse'
        ]
      },
      {
        heading: 'Common RFEs for I-601 and I-601A Waivers',
        paragraphs: ['Waiver RFEs often request:'],
        bullets: [
          'Medical records',
          'Financial documents',
          'Psychological evaluations',
          'Country condition reports',
          'Detailed hardship declarations'
        ]
      },
      {
        heading: 'What If You Cannot Obtain the Requested Evidence?',
        paragraphs: [
          'If a document is unavailable, USCIS may accept secondary evidence. Examples include:'
        ],
        bullets: [
          'Affidavits',
          'Religious records',
          'School records',
          'Government letters confirming non-availability'
        ]
      },
      {
        heading: 'What Happens If You Miss the Deadline?',
        paragraphs: [
          'Failure to respond by the deadline will usually result in denial. Possible consequences:'
        ],
        bullets: [
          'Loss of filing fees',
          'Need to refile',
          'Additional delays',
          'Potential accrual of unlawful presence'
        ]
      },
      {
        heading: 'Can USCIS Deny My Case After an RFE Response?',
        paragraphs: [
          'Yes. If USCIS determines that the evidence is still insufficient or that you do not qualify for the immigration benefit, it may deny the case. This is why the response must be thorough, organized, and persuasive.'
        ]
      },
      {
        heading: 'RFE vs. NOID',
        paragraphs: [
          'Request for Evidence (RFE): USCIS needs more information.',
          'Notice of Intent to Deny (NOID): USCIS believes the case should be denied unless the applicant overcomes specific concerns.',
          'A NOID is more serious than an RFE.'
        ]
      },
      {
        heading: 'Tips for Responding to an RFE Successfully',
        numbered: [
          'Read the notice carefully.',
          'Respond to every issue.',
          'Organize evidence with tabs.',
          'Include a detailed cover letter.',
          'Provide translations.',
          'Keep copies.',
          'Use trackable delivery.',
          'Work with an immigration attorney.'
        ]
      },
      {
        heading: 'Mistakes to Avoid',
        bullets: [
          'Ignoring the RFE.',
          'Sending an incomplete response.',
          'Missing the deadline.',
          'Providing untranslated documents.',
          'Submitting disorganized evidence.',
          'Assuming the issue is minor.'
        ]
      },
      {
        heading: 'Example of a Strong RFE Response Package',
        paragraphs: ['A professional response may include:'],
        bullets: [
          'Attorney cover letter',
          'Table of contents',
          'Copy of the RFE notice',
          'USCIS barcode page',
          'Exhibit A through Exhibit H',
          'Legal memorandum',
          'Delivery confirmation'
        ]
      },
      {
        paragraphs: ['A well-structured response makes it easier for the USCIS officer to approve the case.']
      },
      {
        heading: 'Why USCIS Issues More RFEs in Complex Cases',
        paragraphs: ['Certain applications involve heightened scrutiny, including:'],
        bullets: [
          'Prior immigration violations',
          'Criminal records',
          'Multiple marriages',
          'Income deficiencies',
          'Fraud concerns',
          'Inconsistent statements'
        ]
      },
      {
        paragraphs: ['In these cases, the quality of the response is especially important.']
      },
      {
        heading: 'The Importance of Credibility',
        paragraphs: [
          'USCIS officers assess not only the documents submitted but also the overall credibility of the application. A complete and organized response demonstrates:'
        ],
        bullets: [
          'Honesty',
          'Preparedness',
          'Attention to detail',
          'Legal eligibility'
        ]
      },
      {
        heading: 'How an Attorney Can Strengthen Your Response',
        paragraphs: ['An experienced immigration lawyer can:'],
        bullets: [
          'Interpret the legal significance of the RFE.',
          'Identify weaknesses in the case.',
          'Gather persuasive evidence.',
          'Draft legal arguments.',
          'Ensure compliance with USCIS requirements.'
        ]
      },
      {
        heading: 'Why Choose The Law Office of Todd Becraft?',
        paragraphs: [
          'The Law Office of Todd Becraft has been helping immigrants for over 30 years. Our office handles:'
        ],
        bullets: [
          'Marriage-based green cards',
          'Family petitions',
          'Adjustment of status',
          'Naturalization',
          'Asylum',
          'U visas',
          'VAWA',
          'Waivers',
          'Deportation defense'
        ]
      },
      {
        paragraphs: ['We understand how to prepare comprehensive and persuasive responses to USCIS RFEs and Notices of Intent to Deny.']
      },
      {
        heading: 'Frequently Asked Questions',
        paragraphs: [
          'Does an RFE mean my case is weak? Not necessarily. Many strong cases receive RFEs.',
          'Can I respond on my own? Yes, but legal representation can improve your chances.',
          'Can I include extra evidence? Yes, if it directly supports the requested issue.',
          'Will USCIS process my case faster after I respond? Sometimes, but processing times vary.',
          'Is an RFE better than a denial? Absolutely. It gives you an opportunity to fix problems before USCIS decides the case.'
        ]
      },
      {
        heading: 'Final Thoughts',
        paragraphs: [
          'A USCIS Request for Evidence can be stressful, but it is often simply a request for additional information. With a timely, organized, and well-supported response, many applicants receive approvals and continue their path toward lawful status, permanent residence, or U.S. citizenship.',
          'Do not panic. Treat the RFE seriously and respond strategically.'
        ]
      },
      {
        heading: 'Contact The Law Office of Todd Becraft',
        paragraphs: [
          'If you have received a Request for Evidence from USCIS, let the experienced team at The Law Office of Todd Becraft help you prepare the strongest possible response.',
          'Call 213-388-1821 today to schedule a confidential consultation. You may also email us at tb@becraftlaw.com.',
          'Your immigration future is too important to leave to chance. Let us help you move forward with confidence.'
        ]
      }
    ],
    cta: 'If you have received a Request for Evidence from USCIS, contact The Law Office of Todd Becraft today. Call 213-388-1821 or email tb@becraftlaw.com to schedule a confidential consultation.'
  },
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
