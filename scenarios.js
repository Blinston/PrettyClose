// Executive Decision - Game Scenarios
// This file contains all game scenarios

window.gameScenarios = [
    // --- Core Business Scenarios ---
    {
        id: "new_shopping_centre",
        title: "New Shopping Centre Opportunity",
        description: "A prime location has become available in a growing suburban area. Your development team believes this could be an excellent opportunity to expand Pretty Close Centres' footprint.",
        image: "construction.jpg",
        choices: [
            {
                text: "Pursue aggressive development with premium retailers",
                explanation: "You decide to build a high-end shopping centre targeting affluent customers with luxury brands.",
                outcome: {
                    metrics: { revenue: 5, employee_engagement: 2, customer_satisfaction: -2 },
                    values: { excellence: 3, customer_focus: -1 },
                    factions: { banks: 2, security_holders: 3, co_owners: 1 },
                    moneyCost: 30000000 // $30 million for premium development
                }
            },
            {
                text: "Create a balanced community centre with diverse retailers",
                explanation: "You opt for a mixed-use development with a balance of retail, dining, and community spaces.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: 3, customer_satisfaction: 4 },
                    values: { respect: 2, collaboration: 3, customer_focus: 3 },
                    factions: { government: 3, co_owners: 2, regulators: 2 },
                    moneyCost: 22000000 // $22 million for balanced development
                }
            },
            {
                text: "Pass on this opportunity to focus on existing assets",
                explanation: "You decide the risk doesn't justify the potential return and choose to reinvest in your current properties instead.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: -1, customer_satisfaction: 1 },
                    values: { integrity: 2, excellence: 1 },
                    factions: { banks: 3, security_holders: -1 },
                    flags: ["The company is pursuing a conservative strategy."]
                }
            }
        ]
    },
    {
        id: "anchor_tenant_leaving",
        title: "Anchor Tenant Leaving",
        description: "One of your major anchor tenants has announced they're not renewing their lease at your flagship centre. This will leave a significant vacant space and could impact foot traffic.",
        choices: [
            {
                text: "Offer significant incentives to attract a prestigious new tenant",
                explanation: "You approve a generous leasing package to lure a high-profile tenant, accepting lower short-term returns for long-term stability.",
                outcome: {
                    metrics: { revenue: -3, customer_satisfaction: 5 },
                    values: { excellence: 2, customer_focus: 3 },
                    factions: { security_holders: -2, co_owners: 2 },
                    moneyCost: 8000000 // $8 million in tenant incentives
                }
            },
            {
                text: "Divide the space for multiple smaller retailers",
                explanation: "You decide to reconfigure the large space into several smaller retail units, diversifying your tenant mix.",
                outcome: {
                    metrics: { revenue: 2, customer_satisfaction: 1 },
                    values: { collaboration: 2, excellence: 1 },
                    factions: { security_holders: 2, banks: 1 },
                    moneyCost: 3500000 // $3.5 million for reconfiguration
                }
            },
            {
                text: "Reimagine the space as an experiential destination",
                explanation: "You transform the space into a mixed-use area with food, entertainment, and community features.",
                outcome: {
                    metrics: { revenue: 1, employee_engagement: 3, customer_satisfaction: 4 },
                    values: { excellence: 4, customer_focus: 3 },
                    factions: { government: 2, co_owners: 1, security_holders: -1 },
                    flags: ["The company is focusing on experiential retail."],
                    moneyCost: 5000000 // $5 million for experiential transformation
                }
            }
        ]
    },
    {
        id: "digital_transformation",
        title: "Digital Transformation Initiative",
        description: "Your CTO has proposed a comprehensive digital transformation program to modernize Pretty Close Centres' operations and customer experience.",
        choices: [
            {
                text: "Approve the full transformation program",
                explanation: "You commit to a full digital overhaul, investing in new systems, customer apps, and smart building technology.",
                outcome: {
                    metrics: { revenue: -3, employee_engagement: 4, customer_satisfaction: 3 },
                    values: { excellence: 4, customer_focus: 3 },
                    factions: { banks: -1, security_holders: -2, regulators: 2 },
                    flags: ["The company is a digital leader in the industry."],
                    moneyCost: 12000000 // $12 million for full digital transformation
                }
            },
            {
                text: "Implement a phased approach over several years",
                explanation: "You approve a gradual implementation plan that spreads costs and organizational change over time.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 2, customer_satisfaction: 1 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { banks: 1, security_holders: 1 },
                    moneyCost: 4000000 // $4 million initial investment with more phased
                }
            },
            {
                text: "Focus only on customer-facing digital improvements",
                explanation: "You prioritize only the digital initiatives that directly enhance the customer experience.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: -1, customer_satisfaction: 3 },
                    values: { customer_focus: 4, collaboration: -1 },
                    factions: { security_holders: 1, co_owners: 2 },
                    moneyCost: 2500000 // $2.5 million for customer-facing technology
                }
            }
        ]
    },
    {
        id: "rental_negotiation_strategy",
        title: "Rental Negotiation Strategy",
        description: "The retail market is shifting, and your leasing team needs direction on the approach to take with upcoming lease renewals across your portfolio.",
        choices: [
            {
                text: "Hold firm on rental rates to maximize returns",
                explanation: "You instruct your team to maintain current rental rates, focusing on financial performance.",
                outcome: {
                    metrics: { revenue: 3, customer_satisfaction: -2 },
                    values: { excellence: 1, customer_focus: -2 },
                    factions: { security_holders: 3, co_owners: -1 }
                }
            },
            {
                text: "Offer flexible terms to retain quality tenants",
                explanation: "You authorize more accommodating lease terms to maintain relationships with valuable tenants.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 3 },
                    values: { respect: 2, collaboration: 3 },
                    factions: { co_owners: 3, security_holders: -1 }
                }
            },
            {
                text: "Implement data-driven, customized approach per tenant",
                explanation: "You invest in analytics to determine optimal terms for each tenant based on their performance and value to the centre.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: 1, customer_satisfaction: 1 },
                    values: { excellence: 3, integrity: 2 },
                    factions: { banks: 2, security_holders: 2 },
                    flags: ["The company uses data-driven leasing strategies."],
                    moneyCost: 750000 // $750,000 for analytics software and expertise
                }
            }
        ]
    },
    {
        id: "sustainability_initiative",
        title: "Sustainability Initiative",
        description: "Your board is pushing for stronger environmental sustainability measures across all Pretty Close Centres properties to align with emerging ESG standards.",
        choices: [
            {
                text: "Launch a comprehensive sustainability program",
                explanation: "You approve a full suite of initiatives including solar panels, water recycling, and waste reduction programs.",
                outcome: {
                    metrics: { revenue: -2, employee_engagement: 4, customer_satisfaction: 2 },
                    values: { integrity: 4, excellence: 3 },
                    factions: { regulators: 4, government: 3, security_holders: -1 },
                    flags: ["The company is a sustainability leader."],
                    moneyCost: 15000000 // $15 million for comprehensive sustainability
                }
            },
            {
                text: "Implement cost-effective sustainability measures",
                explanation: "You select only the sustainability initiatives with positive ROI or minimal impact on finances.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: 1, customer_satisfaction: 1 },
                    values: { integrity: 1, excellence: 1 },
                    factions: { regulators: 1, security_holders: 1 },
                    moneyCost: 3000000 // $3 million for limited initiatives
                }
            },
            {
                text: "Create a public sustainability plan but delay implementation",
                explanation: "You announce ambitious sustainability goals but delay the most expensive measures until regulations require them.",
                outcome: {
                    metrics: { revenue: 1, employee_engagement: -2 },
                    values: { integrity: -3, customer_focus: 1 },
                    factions: { regulators: -2, government: -1, security_holders: 2 },
                    moneyCost: 500000 // $500,000 for planning and PR
                }
            }
        ]
    },

    // --- Employee Focused Scenarios ---
    {
        id: "corporate_restructuring",
        title: "Corporate Restructuring",
        description: "Operational inefficiencies have been identified across the organization. The executive team is considering a restructuring plan that would eliminate some positions while creating others.",
        choices: [
            {
                text: "Implement the full restructuring plan quickly",
                explanation: "You decide to make all changes at once, believing a quick transition will minimize disruption.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: -5, customer_satisfaction: -1 },
                    values: { excellence: 2, respect: -3 },
                    factions: { security_holders: 3, regulators: -1 },
                    moneyCost: 2000000, // $2 million for severance payments
                    veryImpactful: true // This is a major decision with significant impact
                }
            },
            {
                text: "Phase in changes gradually with employee input",
                explanation: "You create a transition committee that includes staff representatives to gradually implement changes.",
                outcome: {
                    metrics: { revenue: 1, employee_engagement: 2 },
                    values: { respect: 3, collaboration: 3, integrity: 2 },
                    factions: { security_holders: -1, regulators: 1 },
                    moneyCost: 1000000 // $1 million for transition support
                }
            },
            {
                text: "Focus on natural attrition and retraining",
                explanation: "Rather than layoffs, you rely on natural turnover and invest in retraining existing staff for new roles.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 4 },
                    values: { respect: 4, collaboration: 2, excellence: -1 },
                    factions: { security_holders: -2, co_owners: 1 },
                    flags: ["The company prioritizes employee welfare over efficiency."],
                    moneyCost: 1500000 // $1.5 million for training programs
                }
            }
        ]
    },
    {
        id: "executive_compensation",
        title: "Executive Compensation Review",
        description: "The board's compensation committee has proposed significant increases to the executive bonus structure to 'remain competitive' in the market. This comes after a year of asking employees to accept minimal raises due to market conditions.",
        choices: [
            {
                text: "Approve the executive compensation increase",
                explanation: "You agree that competitive executive compensation is necessary to retain top talent at the leadership level.",
                outcome: {
                    metrics: { employee_engagement: -4 },
                    values: { respect: -3, integrity: -2 },
                    factions: { security_holders: 1, regulators: -1 },
                    moneyCost: 3000000 // $3 million in increased executive compensation
                }
            },
            {
                text: "Reject the increase and propose profit sharing for all employees",
                explanation: "You counter with a company-wide profit-sharing plan that includes both executives and staff.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 5 },
                    values: { respect: 4, integrity: 3 },
                    factions: { security_holders: -1, regulators: 2 },
                    flags: ["The company has implemented equitable compensation practices."],
                    moneyCost: 2000000 // $2 million in broader-based compensation
                }
            },
            {
                text: "Defer the decision until financial performance improves",
                explanation: "You delay any compensation changes until the company meets specific financial targets.",
                outcome: {
                    metrics: { employee_engagement: 1 },
                    values: { integrity: 2, excellence: 1 },
                    factions: { security_holders: 2, banks: 1 }
                }
            }
        ]
    },
    {
        id: "workplace_flexibility",
        title: "Workplace Flexibility Policy",
        description: "After a successful trial of hybrid work arrangements for corporate staff, HR is recommending making flexible work arrangements permanent. However, some executives are concerned about impacts on collaboration and company culture.",
        choices: [
            {
                text: "Make flexible work arrangements permanent and expanded",
                explanation: "You formalize a policy giving employees significant autonomy over their work location and schedule.",
                outcome: {
                    metrics: { employee_engagement: 5, revenue: -1 },
                    values: { respect: 3, collaboration: -1 },
                    factions: { regulators: 1 },
                    flags: ["The company has a progressive workplace culture."],
                    moneyCost: 500000 // $500,000 for technology and policy implementation
                }
            },
            {
                text: "Implement a balanced hybrid model with core office days",
                explanation: "You create a structured hybrid approach requiring regular in-office days to maintain culture while offering flexibility.",
                outcome: {
                    metrics: { employee_engagement: 3 },
                    values: { respect: 2, collaboration: 2, excellence: 1 },
                    factions: { security_holders: 1 },
                    moneyCost: 250000 // $250,000 for adjustments and technology
                }
            },
            {
                text: "Return primarily to in-office work with limited exceptions",
                explanation: "You prioritize in-person collaboration with flexibility offered only in special circumstances.",
                outcome: {
                    metrics: { employee_engagement: -2, revenue: 1 },
                    values: { respect: -1, collaboration: 2 },
                    factions: { security_holders: 2, co_owners: 1 }
                }
            }
        ]
    },
    {
        id: "diversity_inclusion",
        title: "Diversity and Inclusion Program",
        description: "Your HR director has presented a comprehensive plan to improve diversity, equity, and inclusion at Pretty Close Centres, noting that the company lags behind industry benchmarks in these areas.",
        choices: [
            {
                text: "Implement the full program with public commitments",
                explanation: "You fully embrace the initiative with transparent goals, dedicated resources, and public reporting on progress.",
                outcome: {
                    metrics: { employee_engagement: 4, customer_satisfaction: 2 },
                    values: { respect: 5, integrity: 3 },
                    factions: { regulators: 2, government: 3 },
                    flags: ["The company is a leader in diversity and inclusion."],
                    moneyCost: 1500000 // $1.5 million for program implementation
                }
            },
            {
                text: "Adopt key elements internally without public targets",
                explanation: "You implement diversity initiatives within the company but avoid making public commitments that might be scrutinized.",
                outcome: {
                    metrics: { employee_engagement: 2, customer_satisfaction: 1 },
                    values: { respect: 2, integrity: 0 },
                    factions: { regulators: 0, government: 1 },
                    moneyCost: 800000 // $800,000 for internal initiatives
                }
            },
            {
                text: "Focus only on regulatory compliance requirements",
                explanation: "You limit initiatives to what's required by equal opportunity regulations without additional programs.",
                outcome: {
                    metrics: { employee_engagement: -2 },
                    values: { respect: -3, integrity: -1 },
                    factions: { regulators: -1, government: -2 },
                    moneyCost: 100000 // $100,000 for compliance measures
                }
            }
        ]
    },
    {
        id: "whistleblower_allegation",
        title: "Whistleblower Allegation",
        description: "An anonymous whistleblower has alleged improper financial reporting practices at one of your joint venture properties. The claims involve potential overstating of occupancy rates to investors.",
        choices: [
            {
                text: "Launch a full independent investigation",
                explanation: "You immediately engage an external firm to conduct a thorough investigation of the allegations.",
                outcome: {
                    metrics: { revenue: -2, employee_engagement: 2 },
                    values: { integrity: 5, respect: 2 },
                    factions: { regulators: 3, security_holders: -1, banks: 2 },
                    flags: ["The company maintains transparent governance practices."],
                    moneyCost: 1000000 // $1 million for external investigation
                }
            },
            {
                text: "Conduct an internal review before deciding next steps",
                explanation: "You direct your internal audit team to assess the allegations before determining if external investigation is warranted.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: 0 },
                    values: { integrity: 0, excellence: 1 },
                    factions: { regulators: 0, security_holders: 1 },
                    moneyCost: 200000 // $200,000 for internal audit resources
                }
            },
            {
                text: "Dismiss the allegations as unfounded and strengthen confidentiality",
                explanation: "You reject the claims and implement stricter confidentiality measures for property performance data.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: -3 },
                    values: { integrity: -4, respect: -2 },
                    factions: { regulators: -4, security_holders: 2, banks: -2 },
                    flags: ["The company faces significant governance risks."],
                    veryImpactful: true // This is a major ethical decision with long-term consequences
                }
            }
        ]
    },

    // --- Customer Focused Scenarios ---
    {
        id: "customer_experience_redesign",
        title: "Customer Experience Redesign",
        description: "Your marketing team has proposed a significant investment to enhance the customer experience across all Pretty Close Centres properties, focusing on digital integration, amenities, and service.",
        choices: [
            {
                text: "Approve the comprehensive experience redesign",
                explanation: "You commit resources to completely transform the customer experience with premium amenities and technology.",
                outcome: {
                    metrics: { revenue: -2, customer_satisfaction: 5 },
                    values: { customer_focus: 4, excellence: 3 },
                    factions: { co_owners: 2, security_holders: -1 },
                    flags: ["The company prioritizes exceptional customer experiences."],
                    moneyCost: 10000000 // $10 million for comprehensive redesign
                }
            },
            {
                text: "Implement improvements selectively at flagship properties",
                explanation: "You focus enhancements on your highest-performing centers to maximize ROI.",
                outcome: {
                    metrics: { revenue: 0, customer_satisfaction: 2 },
                    values: { customer_focus: 2, excellence: 1 },
                    factions: { co_owners: 1, security_holders: 1 },
                    moneyCost: 4000000 // $4 million for selective improvements
                }
            },
            {
                text: "Focus only on low-cost, high-impact improvements",
                explanation: "You prioritize affordable enhancements like staff training and signage improvements.",
                outcome: {
                    metrics: { revenue: 1, customer_satisfaction: 1 },
                    values: { customer_focus: 1, excellence: -1 },
                    factions: { security_holders: 2 },
                    moneyCost: 1000000 // $1 million for minor improvements
                }
            }
        ]
    },
    {
        id: "community_engagement",
        title: "Community Engagement Initiative",
        description: "Your public affairs team has developed a proposal to strengthen community relationships through local partnerships, events, and charitable initiatives centered around your shopping centres.",
        choices: [
            {
                text: "Launch a flagship community foundation with significant funding",
                explanation: "You create a dedicated foundation with substantial funding to support community programs across all your locations.",
                outcome: {
                    metrics: { revenue: -2, customer_satisfaction: 4 },
                    values: { respect: 3, integrity: 2, customer_focus: 3 },
                    factions: { government: 4, regulators: 2, security_holders: -2 },
                    flags: ["The company is a champion for community development."],
                    moneyCost: 5000000 // $5 million for foundation establishment
                }
            },
            {
                text: "Develop targeted partnerships with local organizations",
                explanation: "You establish strategic relationships with community groups that align with your business goals.",
                outcome: {
                    metrics: { revenue: 0, customer_satisfaction: 3 },
                    values: { collaboration: 3, customer_focus: 2 },
                    factions: { government: 2, co_owners: 1 },
                    moneyCost: 1500000 // $1.5 million for partnership programs
                }
            },
            {
                text: "Increase community space within existing centres",
                explanation: "You dedicate more areas within your properties for community use, events, and gatherings.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 2 },
                    values: { customer_focus: 2, collaboration: 1 },
                    factions: { government: 3, co_owners: 0 },
                    moneyCost: 2000000 // $2 million for space conversion
                }
            }
        ]
    },
    {
        id: "tenant_mix_strategy",
        title: "Tenant Mix Strategy",
        description: "Market research indicates changing consumer preferences that might require adjustments to your typical tenant mix at Pretty Close Centres properties.",
        choices: [
            {
                text: "Shift toward experiential tenants and entertainment",
                explanation: "You direct leasing to prioritize experience-focused tenants like dining, entertainment, and interactive retail.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 4 },
                    values: { customer_focus: 3, excellence: 2 },
                    factions: { co_owners: 2, security_holders: -1 },
                    flags: ["The company is focusing on experiential retail."],
                    moneyCost: 3000000 // $3 million for tenant incentives and remodeling
                }
            },
            {
                text: "Maintain balanced mix but upgrade quality across categories",
                explanation: "You keep the traditional retail categories but seek higher-quality tenants in each segment.",
                outcome: {
                    metrics: { revenue: 2, customer_satisfaction: 2 },
                    values: { excellence: 3, customer_focus: 1 },
                    factions: { security_holders: 2, co_owners: 1 },
                    moneyCost: 1500000 // $1.5 million for upgrades and incentives
                }
            },
            {
                text: "Focus on necessity-based retail with proven stability",
                explanation: "You prioritize tenants providing essential goods and services with reliable customer traffic.",
                outcome: {
                    metrics: { revenue: 3, customer_satisfaction: -1 },
                    values: { excellence: 1, customer_focus: -1 },
                    factions: { banks: 3, security_holders: 3, co_owners: -1 },
                    flags: ["The company is pursuing a conservative strategy."],
                    moneyCost: 500000 // $500,000 for minor adjustments
                }
            }
        ]
    },
    {
        id: "customer_data_privacy",
        title: "Customer Data Privacy Strategy",
        description: "Your digital team wants to expand customer data collection across your centres to enhance marketing and improve tenant performance, but there are privacy considerations.",
        choices: [
            {
                text: "Implement comprehensive data collection with explicit consent",
                explanation: "You approve expanded data collection with transparent opt-in processes and clear privacy controls for customers.",
                outcome: {
                    metrics: { revenue: 2, customer_satisfaction: 0 },
                    values: { integrity: 2, customer_focus: 2, excellence: 2 },
                    factions: { regulators: 2, security_holders: 2 },
                    flags: ["The company uses data-driven retail strategies."],
                    moneyCost: 2000000 // $2 million for systems and compliance
                }
            },
            {
                text: "Collect anonymous aggregate data only",
                explanation: "You limit data collection to anonymized information that cannot be traced to individual customers.",
                outcome: {
                    metrics: { revenue: 1, customer_satisfaction: 2 },
                    values: { integrity: 3, customer_focus: 1 },
                    factions: { regulators: 3, security_holders: 0 },
                    moneyCost: 1000000 // $1 million for limited systems
                }
            },
            {
                text: "Prioritize minimal data collection and maximum privacy",
                explanation: "You take a conservative approach, collecting only essential data required for operations.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 3 },
                    values: { integrity: 4, excellence: -1 },
                    factions: { regulators: 4, security_holders: -1 },
                    flags: ["The company prioritizes customer privacy above analytics."],
                    moneyCost: 300000 // $300,000 for basic systems
                }
            }
        ]
    },
    {
        id: "safety_security_incident",
        title: "Safety and Security Incident",
        description: "There has been a significant security incident at one of your major shopping centres that received media attention. No one was seriously injured, but customers are concerned about safety.",
        choices: [
            {
                text: "Implement comprehensive security overhaul across all properties",
                explanation: "You invest in advanced security technology, increased staff, and enhanced protocols at all locations.",
                outcome: {
                    metrics: { revenue: -2, customer_satisfaction: 4 },
                    values: { integrity: 3, customer_focus: 3, excellence: 2 },
                    factions: { regulators: 3, government: 2, security_holders: -1 },
                    flags: ["The company leads the industry in security practices."],
                    moneyCost: 7000000 // $7 million for comprehensive security upgrades
                }
            },
            {
                text: "Address specific vulnerabilities at the affected location",
                explanation: "You focus improvements on fixing the exact issues that contributed to the incident at the specific property.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 1 },
                    values: { integrity: 1, customer_focus: 1 },
                    factions: { regulators: 1, government: 0 },
                    moneyCost: 1500000 // $1.5 million for targeted improvements
                }
            },
            {
                text: "Launch a public relations campaign emphasizing safety record",
                explanation: "You focus on communications to reassure customers rather than making substantial security changes.",
                outcome: {
                    metrics: { revenue: 0, customer_satisfaction: -2 },
                    values: { integrity: -2, customer_focus: -1 },
                    factions: { regulators: -2, government: -1 },
                    flags: ["The company prioritizes PR over substantive changes."],
                    moneyCost: 500000 // $500,000 for PR campaign
                }
            }
        ]
    },

    // --- Business Partner Focused Scenarios ---
    {
        id: "joint_venture_conflict",
        title: "Joint Venture Conflict",
        description: "A significant disagreement has emerged with your capital partner in one of your largest joint venture properties regarding future development plans.",
        choices: [
            {
                text: "Compromise on development plans to preserve the relationship",
                explanation: "You find middle ground that addresses your partner's concerns while maintaining some of your objectives.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: 1 },
                    values: { collaboration: 3, respect: 2, integrity: 1 },
                    factions: { co_owners: 4, banks: 1 }
                }
            },
            {
                text: "Stand firm on your vision and use legal leverage if necessary",
                explanation: "You refuse to compromise on what you believe is the right strategy for the property's future.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: -1 },
                    values: { excellence: 2, collaboration: -3, respect: -2 },
                    factions: { co_owners: -4, security_holders: 2, banks: -1 },
                    flags: ["The company is involved in partnership conflicts."],
                    moneyCost: 1000000 // $1 million for legal costs
                }
            },
            {
                text: "Propose buying out the partner's stake",
                explanation: "You make an offer to acquire your partner's interest to gain full control of the property.",
                outcome: {
                    metrics: { revenue: -3, employee_engagement: 2 },
                    values: { excellence: 1, collaboration: -1 },
                    factions: { co_owners: -1, banks: -2, security_holders: -1 },
                    flags: ["The company is consolidating its portfolio ownership."],
                    moneyCost: 50000000 // $50 million for acquisition (major expense)
                }
            }
        ]
    },
    {
        id: "banking_relationship",
        title: "Banking Relationship Review",
        description: "Your CFO is reviewing banking relationships as several loan facilities are coming up for renewal. There's an opportunity to consolidate banking partners or renegotiate terms.",
        choices: [
            {
                text: "Maintain diverse banking relationships with multiple partners",
                explanation: "You continue working with multiple financial institutions to maintain flexibility and relationship diversity.",
                outcome: {
                    metrics: { revenue: -1 },
                    values: { collaboration: 2, integrity: 1 },
                    factions: { banks: 2, security_holders: 1 }
                }
            },
            {
                text: "Consolidate to fewer partners for better terms and efficiency",
                explanation: "You reduce the number of banking relationships to gain leverage for better terms and simplify management.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: 1 },
                    values: { excellence: 2, collaboration: -1 },
                    factions: { banks: -1, security_holders: 2 },
                    flags: ["The company has consolidated its banking relationships."]
                }
            },
            {
                text: "Explore alternative financing sources beyond traditional banks",
                explanation: "You investigate new funding sources like private debt, green bonds, or international banks.",
                outcome: {
                    metrics: { revenue: 1 },
                    values: { excellence: 3, integrity: 1 },
                    factions: { banks: -3, security_holders: 3, regulators: -1 },
                    flags: ["The company uses alternative financing strategies."],
                    moneyCost: 500000 // $500,000 for advisory fees
                }
            }
        ]
    },
    {
        id: "supplier_ethics_issue",
        title: "Supplier Ethics Issue",
        description: "An investigation has revealed that a major construction contractor used by Pretty Close Centres has been involved in unethical labor practices at sites not related to your properties.",
        choices: [
            {
                text: "Immediately terminate the relationship and find new suppliers",
                explanation: "You cut ties completely with the contractor despite their competitive pricing and familiarity with your projects.",
                outcome: {
                    metrics: { revenue: -3, employee_engagement: 3 },
                    values: { integrity: 5, respect: 3, excellence: -1 },
                    factions: { regulators: 3, government: 2, security_holders: -2 },
                    flags: ["The company maintains an ethical supply chain."],
                    moneyCost: 2500000 // $2.5 million for transition costs
                }
            },
            {
                text: "Demand corrective action while conditionally continuing the relationship",
                explanation: "You maintain the relationship but require the contractor to implement specific reforms with verification.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 1 },
                    values: { integrity: 2, collaboration: 2 },
                    factions: { regulators: 1, government: 1, security_holders: 0 },
                    moneyCost: 500000 // $500,000 for monitoring and compliance
                }
            },
            {
                text: "Continue the relationship but enhance monitoring of your projects",
                explanation: "You maintain the relationship but implement additional oversight of their work on your properties.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: -2 },
                    values: { integrity: -3, respect: -2, excellence: 1 },
                    factions: { regulators: -2, government: -1, security_holders: 1 },
                    flags: ["The company faces ethics risks in its supply chain."],
                    moneyCost: 200000 // $200,000 for limited monitoring
                }
            }
        ]
    },
    {
        id: "regulatory_relationship",
        title: "Regulatory Relationship Strategy",
        description: "Upcoming changes to property development regulations could significantly impact your future projects. You need to decide how to approach your relationship with regulatory authorities.",
        choices: [
            {
                text: "Proactively engage with regulators and offer industry expertise",
                explanation: "You participate constructively in the regulatory process, offering data and suggestions to shape effective regulations.",
                outcome: {
                    metrics: { employee_engagement: 2 },
                    values: { integrity: 3, collaboration: 3 },
                    factions: { regulators: 4, government: 2 },
                    flags: ["The company partners effectively with regulators."],
                    moneyCost: 500000 // $500,000 for engagement and advisory
                }
            },
            {
                text: "Join industry association lobbying efforts",
                explanation: "You work through industry groups to influence regulations in ways favorable to property developers.",
                outcome: {
                    metrics: { revenue: 1 },
                    values: { collaboration: 2, integrity: 0 },
                    factions: { regulators: 0, government: 1, security_holders: 1 },
                    moneyCost: 300000 // $300,000 for industry association fees
                }
            },
            {
                text: "Prepare to adapt to whatever regulations emerge",
                explanation: "You focus on flexibility and readiness to comply with new rules rather than trying to influence them.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 1 },
                    values: { integrity: 2, excellence: 2 },
                    factions: { regulators: 2, banks: 1 },
                    flags: ["The company prioritizes regulatory compliance."]
                }
            }
        ]
    },
    {
        id: "tenant_financial_difficulty",
        title: "Tenant Financial Difficulty",
        description: "Several of your mid-sized retail tenants are experiencing financial challenges and have requested rent concessions to avoid closure.",
        choices: [
            {
                text: "Offer temporary rent reductions to support struggling tenants",
                explanation: "You provide short-term financial relief to help viable tenants weather their difficulties.",
                outcome: {
                    metrics: { revenue: -2, customer_satisfaction: 3 },
                    values: { respect: 3, collaboration: 3 },
                    factions: { banks: -1, security_holders: -2 },
                    flags: ["The company supports tenants through difficult periods."],
                    moneyCost: 2000000 // $2 million in rent concessions
                }
            },
            {
                text: "Evaluate each tenant individually based on performance data",
                explanation: "You analyze each tenant's situation, offering help only to those with strong long-term prospects.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 1 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { banks: 1, security_holders: 1 },
                    moneyCost: 800000 // $800,000 in selective concessions
                }
            },
            {
                text: "Enforce lease terms and prepare to replace struggling tenants",
                explanation: "You maintain strict enforcement of contracts, focusing on finding replacement tenants where necessary.",
                outcome: {
                    metrics: { revenue: 1, customer_satisfaction: -3 },
                    values: { respect: -3, collaboration: -2, excellence: 1 },
                    factions: { security_holders: 3, banks: 2, co_owners: -1 },
                    flags: ["The company takes a hardline approach to leasing."],
                    moneyCost: 1000000 // $1 million for tenant replacement costs
                }
            }
        ]
    },

    // --- Governance and Compliance Scenarios ---
    {
        id: "board_composition",
        title: "Board Composition Debate",
        description: "Several institutional investors are pushing for changes to your board composition, citing concerns about diversity and relevant experience for evolving market conditions.",
        choices: [
            {
                text: "Proactively refresh the board with diverse new directors",
                explanation: "You lead a board renewal process focused on adding diverse perspectives and new expertise.",
                outcome: {
                    metrics: { employee_engagement: 3 },
                    values: { respect: 3, excellence: 2, integrity: 2 },
                    factions: { security_holders: 3, regulators: 2 },
                    flags: ["The company has progressive governance practices."],
                    moneyCost: 500000 // $500,000 for search and onboarding
                }
            },
            {
                text: "Make incremental changes as director terms expire",
                explanation: "You plan for gradual board evolution through normal term expirations rather than immediate changes.",
                outcome: {
                    metrics: { employee_engagement: 1 },
                    values: { respect: 1, integrity: 1 },
                    factions: { security_holders: 1, regulators: 0 }
                }
            },
            {
                text: "Defend the current board composition and expertise",
                explanation: "You resist pressure to change, highlighting the current board's industry knowledge and experience.",
                outcome: {
                    metrics: { employee_engagement: -1 },
                    values: { respect: -2, integrity: -1 },
                    factions: { security_holders: -3, regulators: -1 },
                    flags: ["The company is experiencing governance conflicts."]
                }
            }
        ]
    },
    {
        id: "disclosure_dilemma",
        title: "Disclosure Dilemma",
        description: "A potential issue has been discovered with a property in your portfolio that might affect its value, but the situation is still developing and unclear.",
        choices: [
            {
                text: "Disclose the potential issue immediately with available information",
                explanation: "You opt for full transparency, sharing what you know even though the situation is still evolving.",
                outcome: {
                    metrics: { revenue: -2 },
                    values: { integrity: 4, excellence: -1 },
                    factions: { regulators: 3, security_holders: -1 },
                    flags: ["The company prioritizes transparent disclosure practices."]
                }
            },
            {
                text: "Investigate thoroughly before making any disclosure",
                explanation: "You gather complete information before deciding whether disclosure is necessary.",
                outcome: {
                    metrics: { revenue: 0 },
                    values: { integrity: 1, excellence: 2 },
                    factions: { regulators: 0, security_holders: 1 },
                    moneyCost: 300000 // $300,000 for investigation
                }
            },
            {
                text: "Minimize the issue in disclosures to prevent market overreaction",
                explanation: "You disclose only what's legally required, presenting the issue in the most favorable light possible.",
                outcome: {
                    metrics: { revenue: 2 },
                    values: { integrity: -3, excellence: -1 },
                    factions: { regulators: -3, security_holders: 2, banks: 1 },
                    flags: ["The company faces disclosure risks."]
                }
            }
        ]
    },
    {
        id: "executive_succession",
        title: "Executive Succession Planning",
        description: "Your board has raised concerns about the lack of a formal succession plan for key executive positions, highlighting this as a governance risk.",
        choices: [
            {
                text: "Develop a comprehensive succession plan with internal pipeline",
                explanation: "You create detailed plans for all key roles with identified internal candidates and development paths.",
                outcome: {
                    metrics: { employee_engagement: 4 },
                    values: { excellence: 3, respect: 2 },
                    factions: { security_holders: 3, regulators: 2 },
                    flags: ["The company has robust succession planning in place."],
                    moneyCost: 1000000 // $1 million for planning and development
                }
            },
            {
                text: "Create plans for top roles only with external recruitment focus",
                explanation: "You develop succession plans only for C-suite positions, primarily looking to external candidates.",
                outcome: {
                    metrics: { employee_engagement: -1 },
                    values: { excellence: 1, respect: -1 },
                    factions: { security_holders: 2, regulators: 1 },
                    moneyCost: 500000 // $500,000 for limited planning
                }
            },
            {
                text: "Maintain flexible approach rather than formal plan",
                explanation: "You resist creating rigid succession plans, preferring to address leadership needs as they arise.",
                outcome: {
                    metrics: { employee_engagement: 0 },
                    values: { excellence: -1, integrity: -1 },
                    factions: { security_holders: -2, regulators: -1 },
                    flags: ["The company has succession planning vulnerabilities."]
                }
            }
        ]
    },
    {
        id: "annual_report_focus",
        title: "Annual Report Focus",
        description: "Your investor relations team is preparing the annual report and needs direction on what aspects of the business to emphasize given mixed performance across different metrics.",
        choices: [
            {
                text: "Focus on balanced reporting with transparent discussion of challenges",
                explanation: "You present a complete picture of both achievements and difficulties with plans for improvement.",
                outcome: {
                    metrics: { employee_engagement: 2 },
                    values: { integrity: 4, excellence: 1 },
                    factions: { regulators: 3, security_holders: 1, banks: 2 },
                    flags: ["The company maintains transparent reporting practices."],
                    moneyCost: 300000 // $300,000 for comprehensive reporting
                }
            },
            {
                text: "Emphasize financial metrics and shareholder returns",
                explanation: "You highlight financial performance and capital returns while downplaying operational challenges.",
                outcome: {
                    metrics: { employee_engagement: -1 },
                    values: { integrity: -1, excellence: 1 },
                    factions: { security_holders: 3, banks: 1, regulators: -1 },
                    moneyCost: 200000 // $200,000 for reporting
                }
            },
            {
                text: "Showcase ESG achievements and community impact",
                explanation: "You emphasize sustainability initiatives, community engagement, and governance improvements.",
                outcome: {
                    metrics: { employee_engagement: 3 },
                    values: { integrity: 2, customer_focus: 2 },
                    factions: { government: 3, regulators: 2, security_holders: -1 },
                    flags: ["The company emphasizes ESG performance."],
                    moneyCost: 350000 // $350,000 for ESG reporting
                }
            }
        ]
    },
    {
        id: "activist_investor",
        title: "Activist Investor Challenge",
        description: "An activist investor has acquired a significant stake in Pretty Close Centres and is publicly calling for strategic changes, including asset sales and management restructuring.",
        choices: [
            {
                text: "Engage constructively and consider their proposals",
                explanation: "You open a dialogue with the activist, evaluating their ideas on their merits without defensiveness.",
                outcome: {
                    metrics: { employee_engagement: 1 },
                    values: { respect: 2, collaboration: 2 },
                    factions: { security_holders: 2, banks: 1 },
                    moneyCost: 500000 // $500,000 for advisory services
                }
            },
            {
                text: "Defend current strategy and rally supportive investors",
                explanation: "You actively resist the activist's agenda, communicating with other investors to maintain support.",
                outcome: {
                    metrics: { employee_engagement: -1 },
                    values: { excellence: 1, respect: -1 },
                    factions: { security_holders: -1, banks: 1 },
                    flags: ["The company is in conflict with investors."],
                    moneyCost: 1000000 // $1 million for defense and communications
                }
            },
            {
                text: "Implement preemptive strategic changes to address concerns",
                explanation: "You announce your own initiatives that partially address the activist's concerns while maintaining control.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 2 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { security_holders: 3, co_owners: -1 },
                    flags: ["The company is pivoting its strategic direction."],
                    moneyCost: 2000000 // $2 million for strategic initiatives
                }
            }
        ]
    },

    // --- Crisis and Opportunity Scenarios ---
    {
        id: "economic_downturn",
        title: "Economic Downturn Response",
        description: "Economic indicators suggest a significant downturn is coming that will likely impact retail spending, tenant stability, and property values.",
        conditions: {
            minYear: 2
        },
        choices: [
            {
                text: "Implement defensive strategy with cost cutting and debt reduction",
                explanation: "You focus on financial resilience through operational efficiency and strengthening the balance sheet.",
                outcome: {
                    metrics: { revenue: -2, employee_engagement: -3, customer_satisfaction: -1 },
                    values: { excellence: 2, customer_focus: -2 },
                    factions: { banks: 3, security_holders: 2, co_owners: -1 },
                    flags: ["The company is prepared for recession conditions."],
                    veryImpactful: true // Major economic decision affecting all aspects
                }
            },
            {
                text: "Maintain operations but increase tenant support programs",
                explanation: "You prepare assistance programs to help valuable tenants weather the downturn successfully.",
                outcome: {
                    metrics: { revenue: -3, customer_satisfaction: 3 },
                    values: { customer_focus: 3, collaboration: 3, respect: 2 },
                    factions: { security_holders: -2, banks: -1, co_owners: 2 },
                    flags: ["The company supports tenants through difficult periods."],
                    moneyCost: 5000000 // $5 million for tenant support
                }
            },
            {
                text: "View as opportunity to acquire distressed assets",
                explanation: "You position the company to take advantage of the downturn by acquiring properties at discounted prices.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: 2 },
                    values: { excellence: 3, collaboration: -1 },
                    factions: { banks: -2, security_holders: 3, co_owners: 1 },
                    flags: ["The company pursues opportunistic growth strategies."],
                    moneyCost: 1000000 // $1 million for deal assessments and preparation
                }
            }
        ]
    },
    {
        id: "natural_disaster",
        title: "Natural Disaster Impact",
        description: "A major natural disaster has caused significant damage to one of your shopping centres, affecting both the physical property and the surrounding community.",
        choices: [
            {
                text: "Prioritize community support beyond property restoration",
                explanation: "You commit resources to both rebuilding your property and supporting broader community recovery efforts.",
                outcome: {
                    metrics: { revenue: -3, customer_satisfaction: 5 },
                    values: { respect: 4, integrity: 3, customer_focus: 4 },
                    factions: { government: 4, security_holders: -2, co_owners: 2 },
                    flags: ["The company is a champion for community development."],
                    moneyCost: 15000000, // $15 million for rebuilding and community support
                    veryImpactful: true // Significant crisis response
                }
            },
            {
                text: "Focus on rapid property restoration and reopening",
                explanation: "You concentrate exclusively on getting your centre operational as quickly as possible.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 0 },
                    values: { excellence: 2, customer_focus: 1, respect: -1 },
                    factions: { security_holders: 2, co_owners: 1, government: -1 },
                    moneyCost: 10000000 // $10 million for rebuilding
                }
            },
            {
                text: "Evaluate redevelopment or divestment options",
                explanation: "You consider whether reconstruction, repurposing, or selling the damaged property is the best option.",
                outcome: {
                    metrics: { revenue: 1, customer_satisfaction: -3 },
                    values: { excellence: 1, customer_focus: -3, respect: -2 },
                    factions: { security_holders: 3, government: -3, co_owners: -1 },
                    flags: ["The company takes opportunistic approaches to asset management."],
                    moneyCost: 2000000 // $2 million for assessments and planning
                }
            }
        ]
    },
    {
        id: "acquisition_opportunity",
        title: "Major Acquisition Opportunity",
        description: "A competitor has unexpectedly put a portfolio of high-quality shopping centres up for sale at a potentially attractive price point.",
        choices: [
            {
                text: "Pursue aggressive acquisition of the entire portfolio",
                explanation: "You make a bold move to acquire all the available properties, significantly expanding your footprint.",
                outcome: {
                    metrics: { revenue: 5, employee_engagement: 3, customer_satisfaction: 0 },
                    values: { excellence: 3, collaboration: -1 },
                    factions: { banks: -3, security_holders: 2, co_owners: -1 },
                    flags: ["The company is in a major expansion phase."],
                    moneyCost: 200000000, // $200 million for acquisition
                    veryImpactful: true // Transformative acquisition
                }
            },
            {
                text: "Selectively bid only on properties that fit strategic criteria",
                explanation: "You carefully evaluate each property and pursue only those that align perfectly with your strategy.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: 1 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { banks: -1, security_holders: 1, co_owners: 1 },
                    moneyCost: 80000000 // $80 million for selective acquisition
                }
            },
            {
                text: "Pass on the opportunity to focus on organic growth",
                explanation: "You decide against the acquisition, preferring to invest in improving your existing properties.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 0, customer_satisfaction: 2 },
                    values: { customer_focus: 2, excellence: 1 },
                    factions: { banks: 2, security_holders: -1 },
                    flags: ["The company prioritizes organic growth over acquisitions."]
                }
            }
        ]
    },
    {
        id: "technology_disruption",
        title: "Retail Technology Disruption",
        description: "A new retail technology is rapidly gaining adoption and threatens to significantly change consumer behavior in ways that could impact traditional shopping centres.",
        conditions: {
            minYear: 3
        },
        choices: [
            {
                text: "Invest heavily in adopting and integrating the new technology",
                explanation: "You position Pretty Close Centres as a technology leader, fully embracing the innovation.",
                outcome: {
                    metrics: { revenue: -2, employee_engagement: 3, customer_satisfaction: 4 },
                    values: { excellence: 4, customer_focus: 3 },
                    factions: { security_holders: 1, co_owners: 2, banks: -1 },
                    flags: ["The company is a technology leader in the industry."],
                    moneyCost: 15000000 // $15 million for technology investment
                }
            },
            {
                text: "Pilot the technology in select locations before broader rollout",
                explanation: "You take a measured approach, testing the technology's impact before full commitment.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: 1, customer_satisfaction: 1 },
                    values: { excellence: 2, customer_focus: 1 },
                    factions: { security_holders: 1, co_owners: 1 },
                    moneyCost: 5000000 // $5 million for pilot program
                }
            },
            {
                text: "Focus on experiential aspects that technology cannot replace",
                explanation: "Rather than competing technologically, you emphasize unique in-person experiences that digital cannot match.",
                outcome: {
                    metrics: { revenue: 1, customer_satisfaction: 2 },
                    values: { customer_focus: 2, collaboration: 2, excellence: -1 },
                    factions: { co_owners: 2, government: 1 },
                    flags: ["The company is focusing on experiential retail."],
                    moneyCost: 8000000 // $8 million for experiential enhancements
                }
            }
        ]
    },
    {
        id: "public_controversy",
        title: "Public Controversy",
        description: "A controversial political figure has rented space at one of your shopping centres for a campaign event, triggering protests and calls for cancellation from some community groups.",
        choices: [
            {
                text: "Allow the event but issue statement of neutrality",
                explanation: "You permit the event to proceed while clearly stating this doesn't represent company endorsement.",
                outcome: {
                    metrics: { customer_satisfaction: -1 },
                    values: { integrity: 2, respect: 0 },
                    factions: { government: 0, security_holders: 1 },
                    moneyCost: 200000 // $200,000 for security and communications
                }
            },
            {
                text: "Cancel the event citing security concerns",
                explanation: "You terminate the rental agreement, explaining that potential disruption presents safety risks.",
                outcome: {
                    metrics: { customer_satisfaction: 1 },
                    values: { integrity: -1, customer_focus: 2 },
                    factions: { government: -1, regulators: 1 },
                    flags: ["The company avoids controversial situations."],
                    moneyCost: 50000 // $50,000 for communication and managing fallout
                }
            },
            {
                text: "Create dialogue by hosting additional community events",
                explanation: "You allow the event but also create space for diverse community voices through additional programming.",
                outcome: {
                    metrics: { customer_satisfaction: 2 },
                    values: { respect: 3, integrity: 3, collaboration: 3 },
                    factions: { government: 2, regulators: 1, security_holders: -1 },
                    flags: ["The company promotes community dialogue."],
                    moneyCost: 500000 // $500,000 for additional events and security
                }
            }
        ]
    },

    // --- End Game Scenarios ---
    {
        id: "legacy_planning",
        title: "Executive Legacy Planning",
        description: "As your tenure as a senior executive continues, you're considering what lasting impact you want to have on Pretty Close Centres and its culture.",
        conditions: {
            minYear: 5
        },
        choices: [
            {
                text: "Focus on financial performance and shareholder returns",
                explanation: "You dedicate yourself to maximizing profits and market position as your primary legacy.",
                outcome: {
                    metrics: { revenue: 3, employee_engagement: -1 },
                    values: { excellence: 2, customer_focus: -1 },
                    factions: { security_holders: 3, banks: 2 },
                    flags: ["The company prioritizes financial performance."]
                }
            },
            {
                text: "Prioritize corporate culture and values",
                explanation: "You work to institutionalize a strong values-based culture that will outlast your tenure.",
                outcome: {
                    metrics: { revenue: -1, employee_engagement: 4 },
                    values: { respect: 3, integrity: 3, collaboration: 3 },
                    factions: { regulators: 2, co_owners: 1 },
                    flags: ["The company has established a strong values-based legacy."],
                    moneyCost: 1000000 // $1 million for culture initiatives
                }
            },
            {
                text: "Develop industry-leading sustainability practices",
                explanation: "You position Pretty Close Centres as a pioneer in environmentally and socially responsible property management.",
                outcome: {
                    metrics: { revenue: -2, customer_satisfaction: 3 },
                    values: { integrity: 4, customer_focus: 2, excellence: 2 },
                    factions: { government: 3, regulators: 3, security_holders: -1 },
                    flags: ["The company is a sustainability leader."],
                    moneyCost: 5000000 // $5 million for sustainability initiatives
                }
            }
        ]
    },
    {
        id: "company_future",
        title: "Company Future Direction",
        description: "The board has requested your strategic vision for Pretty Close Centres' long-term future over the next decade given changing retail landscapes.",
        conditions: {
            minYear: 7
        },
        choices: [
            {
                text: "Evolve into a mixed-use property developer beyond retail",
                explanation: "You propose expanding beyond shopping centres into residential, office, and entertainment developments.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: 4 },
                    values: { excellence: 3, collaboration: 2 },
                    factions: { banks: -1, security_holders: 2, co_owners: 2 },
                    flags: ["The company is pursuing a diversification strategy."],
                    veryImpactful: true // Major strategic direction
                }
            },
            {
                text: "Focus on premium retail destinations with experiential focus",
                explanation: "You recommend concentrating on fewer, higher-quality shopping centres with unique experiences.",
                outcome: {
                    metrics: { revenue: 3, customer_satisfaction: 3 },
                    values: { customer_focus: 3, excellence: 2 },
                    factions: { co_owners: 3, security_holders: 1 },
                    flags: ["The company is focusing on premium retail destinations."],
                    veryImpactful: true // Major strategic direction
                }
            },
            {
                text: "Become a digital-physical retail hybrid platform",
                explanation: "You envision transforming the company into a technology-enabled retail platform connecting online and physical shopping.",
                outcome: {
                    metrics: { revenue: 0, employee_engagement: 2, customer_satisfaction: 4 },
                    values: { excellence: 4, customer_focus: 3, collaboration: 2 },
                    factions: { security_holders: 3, banks: -2 },
                    flags: ["The company is transforming into a digital-physical hybrid."],
                    moneyCost: 25000000, // $25 million for digital transformation
                    veryImpactful: true // Major strategic direction
                }
            }
        ]
    }
];