// Executive Decision - Game Scenarios
// This file contains all game scenarios with updated features for money, impacts, and flags

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
                    cost: 45000000, // $45M development cost
                    metrics: { revenue: 5, employee_engagement: 2, customer_satisfaction: -2 },
                    values: { excellence: 3, customer_focus: -1 },
                    factions: { banks: 2, security_holders: 3, co_owners: 1 },
                    flags: ["The company focuses on luxury developments", "The company has expanded its footprint"]
                }
            },
            {
                text: "Create a balanced community centre with diverse retailers",
                explanation: "You opt for a mixed-use development with a balance of retail, dining, and community spaces.",
                outcome: {
                    cost: 35000000, // $35M development cost
                    metrics: { revenue: 2, employee_engagement: 3, customer_satisfaction: 4 },
                    values: { respect: 2, collaboration: 3, customer_focus: 3 },
                    factions: { government: 3, co_owners: 2, regulators: 2 },
                    flags: ["The company creates balanced community spaces", "The company has expanded its footprint"]
                }
            },
            {
                text: "Pass on this opportunity to focus on existing assets",
                explanation: "You decide the risk doesn't justify the potential return and choose to reinvest in your current properties instead.",
                outcome: {
                    cost: 10000000, // $10M reinvestment in existing properties
                    metrics: { revenue: -1, employee_engagement: -1, customer_satisfaction: 1 },
                    values: { integrity: 2, excellence: 1 },
                    factions: { banks: 3, security_holders: -1 },
                    flags: ["The company has a conservative risk appetite", "The company prioritizes existing asset optimization"]
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
                    cost: 3500000, // $3.5M in tenant incentives
                    metrics: { revenue: -3, customer_satisfaction: 5 },
                    values: { excellence: 2, customer_focus: 3 },
                    factions: { security_holders: -2, co_owners: 2 },
                    flags: ["The company prioritizes premium tenant relationships", "The company is willing to invest in long-term stability"]
                }
            },
            {
                text: "Divide the space for multiple smaller retailers",
                explanation: "You decide to reconfigure the large space into several smaller retail units, diversifying your tenant mix.",
                outcome: {
                    cost: 2000000, // $2M renovation cost
                    metrics: { revenue: 2, customer_satisfaction: 1 },
                    values: { collaboration: 2, excellence: 1 },
                    factions: { security_holders: 2, banks: 1 },
                    flags: ["The company prioritizes tenant diversification", "The company is adaptable to market changes"]
                }
            },
            {
                text: "Reimagine the space as an experiential destination",
                explanation: "You transform the space into a mixed-use area with food, entertainment, and community features.",
                outcome: {
                    cost: 5000000, // $5M for major redesign
                    metrics: { revenue: 1, employee_engagement: 3, customer_satisfaction: 4 },
                    values: { excellence: 4, customer_focus: 3 },
                    factions: { government: 2, co_owners: 1, security_holders: -1 },
                    flags: ["The company is focused on experiential retail", "The company embraces retail innovation"]
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
                    cost: 12000000, // $12M digital transformation investment
                    metrics: { revenue: -3, employee_engagement: 4, customer_satisfaction: 3 },
                    values: { excellence: 4, customer_focus: 3 },
                    factions: { banks: -1, security_holders: -2, regulators: 2 },
                    flags: ["The company has embraced digital transformation", "The company is a technology innovator"]
                }
            },
            {
                text: "Implement a phased approach over several years",
                explanation: "You approve a gradual implementation plan that spreads costs and organizational change over time.",
                outcome: {
                    cost: 4000000, // $4M initial phase
                    metrics: { revenue: -1, employee_engagement: 2, customer_satisfaction: 1 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { banks: 1, security_holders: 1 },
                    flags: ["The company is methodical about technological change", "The company takes a balanced approach to innovation"]
                }
            },
            {
                text: "Focus only on customer-facing digital improvements",
                explanation: "You prioritize only the digital initiatives that directly enhance the customer experience.",
                outcome: {
                    cost: 6000000, // $6M for customer-facing improvements
                    metrics: { revenue: 0, employee_engagement: -1, customer_satisfaction: 3 },
                    values: { customer_focus: 4, collaboration: -1 },
                    factions: { security_holders: 1, co_owners: 2 },
                    flags: ["The company prioritizes customer-facing technology", "The company focuses on visible innovations"]
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
                    factions: { security_holders: 3, co_owners: -1 },
                    flags: ["The company prioritizes tenant revenue maximization", "The company takes a firm negotiation stance"]
                }
            },
            {
                text: "Offer flexible terms to retain quality tenants",
                explanation: "You authorize more accommodating lease terms to maintain relationships with valuable tenants.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 3 },
                    values: { respect: 2, collaboration: 3 },
                    factions: { co_owners: 3, security_holders: -1 },
                    flags: ["The company values tenant relationships", "The company is flexible in business arrangements"]
                }
            },
            {
                text: "Implement data-driven, customized approach per tenant",
                explanation: "You invest in analytics to determine optimal terms for each tenant based on their performance and value to the centre.",
                outcome: {
                    cost: 1500000, // $1.5M for analytics software and team
                    metrics: { revenue: 2, employee_engagement: 1, customer_satisfaction: 1 },
                    values: { excellence: 3, integrity: 2 },
                    factions: { banks: 2, security_holders: 2 },
                    flags: ["The company uses data-driven decision making", "The company takes a sophisticated approach to leasing"]
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
                    cost: 9000000, // $9M sustainability investment
                    metrics: { revenue: -2, employee_engagement: 4, customer_satisfaction: 2 },
                    values: { integrity: 4, excellence: 3 },
                    factions: { regulators: 4, government: 3, security_holders: -1 },
                    flags: ["The company is an environmental leader", "The company prioritizes ESG performance"]
                }
            },
            {
                text: "Implement cost-effective sustainability measures",
                explanation: "You select only the sustainability initiatives with positive ROI or minimal impact on finances.",
                outcome: {
                    cost: 3000000, // $3M targeted investment
                    metrics: { revenue: 0, employee_engagement: 1, customer_satisfaction: 1 },
                    values: { integrity: 1, excellence: 1 },
                    factions: { regulators: 1, security_holders: 1 },
                    flags: ["The company takes a balanced approach to sustainability", "The company prioritizes ROI-positive initiatives"]
                }
            },
            {
                text: "Create a public sustainability plan but delay implementation",
                explanation: "You announce ambitious sustainability goals but delay the most expensive measures until regulations require them.",
                outcome: {
                    cost: 500000, // $500K for planning and PR
                    metrics: { revenue: 1, employee_engagement: -2 },
                    values: { integrity: -3, customer_focus: 1 },
                    factions: { regulators: -2, government: -1, security_holders: 2 },
                    flags: ["The company engages in greenwashing", "The company prioritizes appearances over substance"]
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
                    cost: 4000000, // $4M in severance and restructuring costs
                    metrics: { revenue: 2, employee_engagement: -5, customer_satisfaction: -1 },
                    values: { excellence: 2, respect: -3 },
                    factions: { security_holders: 3, regulators: -1 },
                    flags: ["The company prioritizes operational efficiency", "The company takes decisive but difficult actions"]
                }
            },
            {
                text: "Phase in changes gradually with employee input",
                explanation: "You create a transition committee that includes staff representatives to gradually implement changes.",
                outcome: {
                    cost: 2500000, // $2.5M in consulting and gradual implementation
                    metrics: { revenue: 1, employee_engagement: 2 },
                    values: { respect: 3, collaboration: 3, integrity: 2 },
                    factions: { security_holders: -1, regulators: 1 },
                    flags: ["The company values employee input", "The company takes a measured approach to change"]
                }
            },
            {
                text: "Focus on natural attrition and retraining",
                explanation: "Rather than layoffs, you rely on natural turnover and invest in retraining existing staff for new roles.",
                outcome: {
                    cost: 3000000, // $3M in training programs
                    metrics: { revenue: -1, employee_engagement: 4 },
                    values: { respect: 4, collaboration: 2, excellence: -1 },
                    factions: { security_holders: -2, co_owners: 1 },
                    flags: ["The company prioritizes employee wellbeing", "The company invests in its workforce"]
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
                    cost: 2000000, // $2M in additional executive compensation
                    metrics: { employee_engagement: -4 },
                    values: { respect: -3, integrity: -2 },
                    factions: { security_holders: 1, regulators: -1 },
                    flags: ["The company has inequality in compensation practices", "The company prioritizes executive retention"]
                }
            },
            {
                text: "Reject the increase and propose profit sharing for all employees",
                explanation: "You counter with a company-wide profit-sharing plan that includes both executives and staff.",
                outcome: {
                    cost: 3500000, // $3.5M in broad profit sharing
                    metrics: { revenue: -1, employee_engagement: 5 },
                    values: { respect: 4, integrity: 3 },
                    factions: { security_holders: -1, regulators: 2 },
                    flags: ["The company has equitable compensation practices", "The company prioritizes organizational fairness"]
                }
            },
            {
                text: "Defer the decision until financial performance improves",
                explanation: "You delay any compensation changes until the company meets specific financial targets.",
                outcome: {
                    metrics: { employee_engagement: 1 },
                    values: { integrity: 2, excellence: 1 },
                    factions: { security_holders: 2, banks: 1 },
                    flags: ["The company links compensation to performance", "The company takes a prudent approach to expenses"]
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
                    cost: 1000000, // $1M for technology and policy implementation
                    metrics: { employee_engagement: 5, revenue: -1 },
                    values: { respect: 3, collaboration: -1 },
                    factions: { regulators: 1 },
                    flags: ["The company embraces progressive workplace policies", "The company prioritizes employee autonomy"]
                }
            },
            {
                text: "Implement a balanced hybrid model with core office days",
                explanation: "You create a structured hybrid approach requiring regular in-office days to maintain culture while offering flexibility.",
                outcome: {
                    cost: 500000, // $500K for hybrid workspace modifications
                    metrics: { employee_engagement: 3 },
                    values: { respect: 2, collaboration: 2, excellence: 1 },
                    factions: { security_holders: 1 },
                    flags: ["The company balances flexibility with collaboration", "The company modernizes workplace practices"]
                }
            },
            {
                text: "Return primarily to in-office work with limited exceptions",
                explanation: "You prioritize in-person collaboration with flexibility offered only in special circumstances.",
                outcome: {
                    metrics: { employee_engagement: -2, revenue: 1 },
                    values: { respect: -1, collaboration: 2 },
                    factions: { security_holders: 2, co_owners: 1 },
                    flags: ["The company maintains traditional operations", "The company prioritizes in-person collaboration"]
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
                    cost: 2000000, // $2M DEI program investment
                    metrics: { employee_engagement: 4, customer_satisfaction: 2 },
                    values: { respect: 5, integrity: 3 },
                    factions: { regulators: 2, government: 3 },
                    flags: ["The company is a DEI leader", "The company makes public commitments to social progress"]
                }
            },
            {
                text: "Adopt key elements internally without public targets",
                explanation: "You implement diversity initiatives within the company but avoid making public commitments that might be scrutinized.",
                outcome: {
                    cost: 800000, // $800K for internal programs
                    metrics: { employee_engagement: 2, customer_satisfaction: 1 },
                    values: { respect: 2, integrity: 0 },
                    factions: { regulators: 0, government: 1 },
                    flags: ["The company takes incremental steps on diversity", "The company avoids public scrutiny"]
                }
            },
            {
                text: "Focus only on regulatory compliance requirements",
                explanation: "You limit initiatives to what's required by equal opportunity regulations without additional programs.",
                outcome: {
                    metrics: { employee_engagement: -2 },
                    values: { respect: -3, integrity: -1 },
                    factions: { regulators: -1, government: -2 },
                    flags: ["The company complies only with minimum requirements", "The company resists progressive workplace changes"]
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
                    cost: 1500000, // $1.5M investigation cost
                    metrics: { revenue: -2, employee_engagement: 2 },
                    values: { integrity: 5, respect: 2 },
                    factions: { regulators: 3, security_holders: -1, banks: 2 },
                    flags: ["The company prioritizes transparency and accountability", "The company takes allegations seriously"]
                }
            },
            {
                text: "Conduct an internal review before deciding next steps",
                explanation: "You direct your internal audit team to assess the allegations before determining if external investigation is warranted.",
                outcome: {
                    cost: 300000, // $300K internal review
                    metrics: { revenue: 0, employee_engagement: 0 },
                    values: { integrity: 0, excellence: 1 },
                    factions: { regulators: 0, security_holders: 1 },
                    flags: ["The company handles issues internally first", "The company is cautious about external involvement"]
                }
            },
            {
                text: "Dismiss the allegations as unfounded and strengthen confidentiality",
                explanation: "You reject the claims and implement stricter confidentiality measures for property performance data.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: -3 },
                    values: { integrity: -4, respect: -2 },
                    factions: { regulators: -4, security_holders: 2, banks: -2 },
                    flags: ["The company suppresses criticism", "The company prioritizes appearances over substance"]
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
                    cost: 15000000, // $15M comprehensive redesign
                    metrics: { revenue: -2, customer_satisfaction: "DOUBLE" }, // Double customer satisfaction
                    values: { customer_focus: 4, excellence: 3 },
                    factions: { co_owners: 2, security_holders: -1 },
                    flags: ["The company prioritizes exceptional customer experiences", "The company is a retail experience innovator"]
                }
            },
            {
                text: "Implement improvements selectively at flagship properties",
                explanation: "You focus enhancements on your highest-performing centers to maximize ROI.",
                outcome: {
                    cost: 6000000, // $6M targeted improvements
                    metrics: { revenue: 0, customer_satisfaction: 2 },
                    values: { customer_focus: 2, excellence: 1 },
                    factions: { co_owners: 1, security_holders: 1 },
                    flags: ["The company prioritizes selective investment", "The company focuses on flagship properties"]
                }
            },
            {
                text: "Focus only on low-cost, high-impact improvements",
                explanation: "You prioritize affordable enhancements like staff training and signage improvements.",
                outcome: {
                    cost: 1500000, // $1.5M modest improvements
                    metrics: { revenue: 1, customer_satisfaction: 1 },
                    values: { customer_focus: 1, excellence: -1 },
                    factions: { security_holders: 2 },
                    flags: ["The company prioritizes cost-efficient improvements", "The company is fiscally conservative"]
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
                    cost: 4000000, // $4M foundation establishment
                    metrics: { revenue: -2, customer_satisfaction: 4 },
                    values: { respect: 3, integrity: 2, customer_focus: 3 },
                    factions: { government: 4, regulators: 2, security_holders: -2 },
                    flags: ["The company is a community champion", "The company invests in social responsibility"]
                }
            },
            {
                text: "Develop targeted partnerships with local organizations",
                explanation: "You establish strategic relationships with community groups that align with your business goals.",
                outcome: {
                    cost: 1200000, // $1.2M partnership program
                    metrics: { revenue: 0, customer_satisfaction: 3 },
                    values: { collaboration: 3, customer_focus: 2 },
                    factions: { government: 2, co_owners: 1 },
                    flags: ["The company creates strategic community partnerships", "The company balances community and business needs"]
                }
            },
            {
                text: "Increase community space within existing centres",
                explanation: "You dedicate more areas within your properties for community use, events, and gatherings.",
                outcome: {
                    cost: 2500000, // $2.5M space conversion
                    metrics: { revenue: -1, customer_satisfaction: 2 },
                    values: { customer_focus: 2, collaboration: 1 },
                    factions: { government: 3, co_owners: 0 },
                    flags: ["The company provides community spaces", "The company integrates community needs into business operations"]
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
                    cost: 3000000, // $3M for tenant incentives and space modifications
                    metrics: { revenue: -1, customer_satisfaction: 4 },
                    values: { customer_focus: 3, excellence: 2 },
                    factions: { co_owners: 2, security_holders: -1 },
                    flags: ["The company is focused on experiential retail", "The company adapts to changing consumer preferences"]
                }
            },
            {
                text: "Maintain balanced mix but upgrade quality across categories",
                explanation: "You keep the traditional retail categories but seek higher-quality tenants in each segment.",
                outcome: {
                    cost: 2000000, // $2M tenant upgrade incentives
                    metrics: { revenue: 2, customer_satisfaction: 2 },
                    values: { excellence: 3, customer_focus: 1 },
                    factions: { security_holders: 2, co_owners: 1 },
                    flags: ["The company focuses on quality tenant relationships", "The company maintains traditional retail with improvements"]
                }
            },
            {
                text: "Focus on necessity-based retail with proven stability",
                explanation: "You prioritize tenants providing essential goods and services with reliable customer traffic.",
                outcome: {
                    cost: 500000, // $500K minor adjustments
                    metrics: { revenue: 3, customer_satisfaction: -1 },
                    values: { excellence: 1, customer_focus: -1 },
                    factions: { banks: 3, security_holders: 3, co_owners: -1 },
                    flags: ["The company has a conservative leasing strategy", "The company prioritizes stable cash flow"]
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
                    cost: 2500000, // $2.5M data infrastructure and compliance
                    metrics: { revenue: 2, customer_satisfaction: 0 },
                    values: { integrity: 2, customer_focus: 2, excellence: 2 },
                    factions: { regulators: 2, security_holders: 2 },
                    flags: ["The company is data-driven with strong ethics", "The company balances innovation with privacy"]
                }
            },
            {
                text: "Collect anonymous aggregate data only",
                explanation: "You limit data collection to anonymized information that cannot be traced to individual customers.",
                outcome: {
                    cost: 1000000, // $1M limited data infrastructure
                    metrics: { revenue: 1, customer_satisfaction: 2 },
                    values: { integrity: 3, customer_focus: 1 },
                    factions: { regulators: 3, security_holders: 0 },
                    flags: ["The company prioritizes privacy over data completeness", "The company takes a cautious approach to customer data"]
                }
            },
            {
                text: "Prioritize minimal data collection and maximum privacy",
                explanation: "You take a conservative approach, collecting only essential data required for operations.",
                outcome: {
                    metrics: { revenue: -1, customer_satisfaction: 3 },
                    values: { integrity: 4, excellence: -1 },
                    factions: { regulators: 4, security_holders: -1 },
                    flags: ["The company is a privacy-first organization", "The company prioritizes customer trust over data analytics"]
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
                    cost: 7000000, // $7M security upgrade
                    metrics: { revenue: -2, customer_satisfaction: 4 },
                    values: { integrity: 3, customer_focus: 3, excellence: 2 },
                    factions: { regulators: 3, government: 2, security_holders: -1 },
                    flags: ["The company prioritizes customer safety above all", "The company invests in preventative security measures"]
                }
            },
            {
                text: "Address specific vulnerabilities at the affected location",
                explanation: "You focus improvements on fixing the exact issues that contributed to the incident at the specific property.",
                outcome: {
                    cost: 1500000, // $1.5M targeted improvements
                    metrics: { revenue: -1, customer_satisfaction: 1 },
                    values: { integrity: 1, customer_focus: 1 },
                    factions: { regulators: 1, government: 0 },
                    flags: ["The company addresses specific vulnerabilities", "The company takes a targeted approach to security"]
                }
            },
            {
                text: "Launch a public relations campaign emphasizing safety record",
                explanation: "You focus on communications to reassure customers rather than making substantial security changes.",
                outcome: {
                    cost: 500000, // $500K PR campaign
                    metrics: { revenue: 0, customer_satisfaction: -2 },
                    values: { integrity: -2, customer_focus: -1 },
                    factions: { regulators: -2, government: -1 },
                    flags: ["The company prioritizes appearances over substance", "The company uses PR to manage issues"]
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
                    factions: { co_owners: 4, banks: 1 },
                    flags: ["The company values partner relationships", "The company seeks collaborative solutions"]
                }
            },
            {
                text: "Stand firm on your vision and use legal leverage if necessary",
                explanation: "You refuse to compromise on what you believe is the right strategy for the property's future.",
                outcome: {
                    cost: 800000, // $800K legal costs
                    metrics: { revenue: 2, employee_engagement: -1 },
                    values: { excellence: 2, collaboration: -3, respect: -2 },
                    factions: { co_owners: -4, security_holders: 2, banks: -1 },
                    flags: ["The company is assertive in partnerships", "The company prioritizes its vision over relationships"]
                }
            },
            {
                text: "Propose buying out the partner's stake",
                explanation: "You make an offer to acquire your partner's interest to gain full control of the property.",
                outcome: {
                    cost: 25000000, // $25M buyout cost
                    metrics: { revenue: -3, employee_engagement: 2 },
                    values: { excellence: 1, collaboration: -1 },
                    factions: { co_owners: -1, banks: -2, security_holders: -1 },
                    flags: ["The company prefers full ownership over partnerships", "The company is willing to invest for control"]
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
                    factions: { banks: 2, security_holders: 1 },
                    flags: ["The company diversifies financial relationships", "The company takes a balanced approach to banking"]
                }
            },
            {
                text: "Consolidate to fewer partners for better terms and efficiency",
                explanation: "You reduce the number of banking relationships to gain leverage for better terms and simplify management.",
                outcome: {
                    metrics: { revenue: 2, employee_engagement: 1 },
                    values: { excellence: 2, collaboration: -1 },
                    factions: { banks: -1, security_holders: 2 },
                    flags: ["The company streamlines financial relationships", "The company prioritizes financial efficiency"]
                }
            },
            {
                text: "Explore alternative financing sources beyond traditional banks",
                explanation: "You investigate new funding sources like private debt, green bonds, or international banks.",
                outcome: {
                    cost: 500000, // $500K advisory fees
                    metrics: { revenue: 1 },
                    values: { excellence: 3, integrity: 1 },
                    factions: { banks: -3, security_holders: 3, regulators: -1 },
                    flags: ["The company explores innovative financing", "The company embraces financial innovation"]
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
                    cost: 2000000, // $2M in transition costs
                    metrics: { revenue: -3, employee_engagement: 3 },
                    values: { integrity: 5, respect: 3, excellence: -1 },
                    factions: { regulators: 3, government: 2, security_holders: -2 },
                    flags: ["The company has zero tolerance for ethical violations", "The company holds suppliers to high standards"]
                }
            },
            {
                text: "Demand corrective action while conditionally continuing the relationship",
                explanation: "You maintain the relationship but require the contractor to implement specific reforms with verification.",
                outcome: {
                    cost: 500000, // $500K for oversight and verification
                    metrics: { revenue: -1, employee_engagement: 1 },
                    values: { integrity: 2, collaboration: 2 },
                    factions: { regulators: 1, government: 1, security_holders: 0 },
                    flags: ["The company influences supplier behavior", "The company balances ethics with business relationships"]
                }
            },
            {
                text: "Continue the relationship but enhance monitoring of your projects",
                explanation: "You maintain the relationship but implement additional oversight of their work on your properties.",
                outcome: {
                    cost: 300000, // $300K for additional monitoring
                    metrics: { revenue: 0, employee_engagement: -2 },
                    values: { integrity: -3, respect: -2, excellence: 1 },
                    factions: { regulators: -2, government: -1, security_holders: 1 },
                    flags: ["The company prioritizes business relationships over ethics", "The company compartmentalizes ethical concerns"]
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
                    cost: 400000, // $400K regulatory engagement
                    metrics: { employee_engagement: 2 },
                    values: { integrity: 3, collaboration: 3 },
                    factions: { regulators: 4, government: 2 },
                    flags: ["The company collaborates with regulators", "The company shapes regulatory development"]
                }
            },
            {
                text: "Join industry association lobbying efforts",
                explanation: "You work through industry groups to influence regulations in ways favorable to property developers.",
                outcome: {
                    cost: 250000, // $250K industry association contribution
                    metrics: { revenue: 1 },
                    values: { collaboration: 2, integrity: 0 },
                    factions: { regulators: 0, government: 1, security_holders: 1 },
                    flags: ["The company works through industry associations", "The company engages in collective advocacy"]
                }
            },
            {
                text: "Prepare to adapt to whatever regulations emerge",
                explanation: "You focus on flexibility and readiness to comply with new rules rather than trying to influence them.",
                outcome: {
                    cost: 600000, // $600K compliance preparation
                    metrics: { revenue: -1, employee_engagement: 1 },
                    values: { integrity: 2, excellence: 2 },
                    factions: { regulators: 2, banks: 1 },
                    flags: ["The company prioritizes regulatory compliance", "The company adapts rather than resists"]
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
                    cost: 2500000, // $2.5M in rent concessions
                    metrics: { revenue: -2, customer_satisfaction: 3 },
                    values: { respect: 3, collaboration: 3 },
                    factions: { banks: -1, security_holders: -2 },
                    flags: ["The company supports tenants through difficulties", "The company prioritizes long-term relationships"]
                }
            },
            {
                text: "Evaluate each tenant individually based on performance data",
                explanation: "You analyze each tenant's situation, offering help only to those with strong long-term prospects.",
                outcome: {
                    cost: 1200000, // $1.2M in targeted support
                    metrics: { revenue: -1, customer_satisfaction: 1 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { banks: 1, security_holders: 1 },
                    flags: ["The company uses data-driven decision making", "The company takes a balanced approach to tenant support"]
                }
            },
            {
                text: "Enforce lease terms and prepare to replace struggling tenants",
                explanation: "You maintain strict enforcement of contracts, focusing on finding replacement tenants where necessary.",
                outcome: {
                    cost: 800000, // $800K for leasing commissions
                    metrics: { revenue: 1, customer_satisfaction: -3 },
                    values: { respect: -3, collaboration: -2, excellence: 1 },
                    factions: { security_holders: 3, banks: 2, co_owners: -1 },
                    flags: ["The company enforces contracts strictly", "The company prioritizes financial performance over relationships"]
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
                    flags: ["The company prepares for economic downturns", "The company prioritizes financial resilience"]
                }
            },
            {
                text: "Maintain operations but increase tenant support programs",
                explanation: "You prepare assistance programs to help valuable tenants weather the downturn successfully.",
                outcome: {
                    cost: 5000000, // $5M tenant support fund
                    metrics: { revenue: -3, customer_satisfaction: 3 },
                    values: { customer_focus: 3, collaboration: 3, respect: 2 },
                    factions: { security_holders: -2, banks: -1, co_owners: 2 },
                    flags: ["The company supports its ecosystem during downturns", "The company prioritizes tenant relationships"]
                }
            },
            {
                text: "View as opportunity to acquire distressed assets",
                explanation: "You position the company to take advantage of the downturn by acquiring properties at discounted prices.",
                outcome: {
                    cost: 15000000, // $15M acquisition fund
                    metrics: { revenue: 0, employee_engagement: 2 },
                    values: { excellence: 3, collaboration: -1 },
                    factions: { banks: -2, security_holders: 3, co_owners: 1 },
                    flags: ["The company is opportunistic during downturns", "The company has a countercyclical strategy"]
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
                    cost: 12000000, // $12M for repairs and community support
                    metrics: { revenue: -3, customer_satisfaction: 5 },
                    values: { respect: 4, integrity: 3, customer_focus: 4 },
                    factions: { government: 4, security_holders: -2, co_owners: 2 },
                    flags: ["The company is a community champion during crises", "The company prioritizes social responsibility"]
                }
            },
            {
                text: "Focus on rapid property restoration and reopening",
                explanation: "You concentrate exclusively on getting your centre operational as quickly as possible.",
                outcome: {
                    cost: 8000000, // $8M for expedited repairs
                    metrics: { revenue: -1, customer_satisfaction: 0 },
                    values: { excellence: 2, customer_focus: 1, respect: -1 },
                    factions: { security_holders: 2, co_owners: 1, government: -1 },
                    flags: ["The company focuses on business continuity", "The company prioritizes operational recovery"]
                }
            },
            {
                text: "Evaluate redevelopment or divestment options",
                explanation: "You consider whether reconstruction, repurposing, or selling the damaged property is the best option.",
                outcome: {
                    cost: 1000000, // $1M for evaluation and planning
                    metrics: { revenue: 1, customer_satisfaction: -3 },
                    values: { excellence: 1, customer_focus: -3, respect: -2 },
                    factions: { security_holders: 3, government: -3, co_owners: -1 },
                    flags: ["The company is opportunistic during crises", "The company prioritizes strategic repositioning"]
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
                    cost: 75000000, // $75M major acquisition
                    metrics: { revenue: 5, employee_engagement: 3, customer_satisfaction: 0 },
                    values: { excellence: 3, collaboration: -1 },
                    factions: { banks: -3, security_holders: 2, co_owners: -1 },
                    flags: ["The company pursues ambitious expansion", "The company makes transformative acquisitions"]
                }
            },
            {
                text: "Selectively bid only on properties that fit strategic criteria",
                explanation: "You carefully evaluate each property and pursue only those that align perfectly with your strategy.",
                outcome: {
                    cost: 30000000, // $30M targeted acquisition
                    metrics: { revenue: 2, employee_engagement: 1 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { banks: -1, security_holders: 1, co_owners: 1 },
                    flags: ["The company takes a selective approach to growth", "The company prioritizes strategic fit in acquisitions"]
                }
            },
            {
                text: "Pass on the opportunity to focus on organic growth",
                explanation: "You decide against the acquisition, preferring to invest in improving your existing properties.",
                outcome: {
                    cost: 10000000, // $10M for organic improvements
                    metrics: { revenue: -1, employee_engagement: 0, customer_satisfaction: 2 },
                    values: { customer_focus: 2, excellence: 1 },
                    factions: { banks: 2, security_holders: -1 },
                    flags: ["The company focuses on organic growth", "The company prioritizes existing asset optimization"]
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
                    cost: 8000000, // $8M technology investment
                    metrics: { revenue: -2, employee_engagement: 3, customer_satisfaction: 4 },
                    values: { excellence: 4, customer_focus: 3 },
                    factions: { security_holders: 1, co_owners: 2, banks: -1 },
                    flags: ["The company embraces technological disruption", "The company is a retail innovation leader"]
                }
            },
            {
                text: "Pilot the technology in select locations before broader rollout",
                explanation: "You take a measured approach, testing the technology's impact before full commitment.",
                outcome: {
                    cost: 3000000, // $3M pilot program
                    metrics: { revenue: 0, employee_engagement: 1, customer_satisfaction: 1 },
                    values: { excellence: 2, customer_focus: 1 },
                    factions: { security_holders: 1, co_owners: 1 },
                    flags: ["The company tests innovations carefully", "The company takes a measured approach to technology"]
                }
            },
            {
                text: "Focus on experiential aspects that technology cannot replace",
                explanation: "Rather than competing technologically, you emphasize unique in-person experiences that digital cannot match.",
                outcome: {
                    cost: 5000000, // $5M experiential development
                    metrics: { revenue: 1, customer_satisfaction: 2 },
                    values: { customer_focus: 2, collaboration: 2, excellence: -1 },
                    factions: { co_owners: 2, government: 1 },
                    flags: ["The company counters digital with experiential", "The company emphasizes the human experience"]
                }
            }
        ]
    },
    {
        id: "market_crash",
        title: "Property Market Crash",
        description: "The commercial property market has suddenly crashed, with valuations dropping by 20-30% across the sector. Investors are panicking and market confidence is low.",
        conditions: {
            minYear: 4
        },
        choices: [
            {
                text: "Hold steady and communicate confidence to the market",
                explanation: "You maintain your strategy and issue statements emphasizing your company's strong fundamentals and long-term outlook.",
                outcome: {
                    metrics: { revenue: -3, employee_engagement: 1 },
                    values: { integrity: 2, excellence: 1 },
                    factions: { security_holders: 2, banks: 1 },
                    flags: ["The company maintains stability during market turbulence", "The company takes a long-term perspective"]
                }
            },
            {
                text: "Accelerate 'mark to market' valuations and take the financial hit now",
                explanation: "You quickly revalue your portfolio to reflect market conditions, accepting a significant one-time financial impact.",
                outcome: {
                    metrics: { revenue: "HALVE", employee_engagement: -2 }, // Half the revenue
                    values: { integrity: 4, excellence: -1 },
                    factions: { security_holders: -3, banks: 3, regulators: 4 },
                    flags: ["The company embraces radical transparency", "The company accepts short-term pain for credibility"]
                }
            },
            {
                text: "Launch a share buyback to support stock price",
                explanation: "You use company cash reserves to buy back shares at depressed prices, supporting the stock and signaling confidence.",
                outcome: {
                    cost: 15000000, // $15M share buyback
                    metrics: { revenue: 0, employee_engagement: 2 },
                    values: { excellence: 2, integrity: 1 },
                    factions: { security_holders: 5, banks: -2 },
                    flags: ["The company acts to support shareholders during crises", "The company is willing to use reserves strategically"]
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
                    flags: ["The company maintains political neutrality", "The company honors contractual commitments"]
                }
            },
            {
                text: "Cancel the event citing security concerns",
                explanation: "You terminate the rental agreement, explaining that potential disruption presents safety risks.",
                outcome: {
                    cost: 100000, // $100K potential legal costs
                    metrics: { customer_satisfaction: 1 },
                    values: { integrity: -1, customer_focus: 2 },
                    factions: { government: -1, regulators: 1 },
                    flags: ["The company avoids controversial associations", "The company prioritizes shopping center harmony"]
                }
            },
            {
                text: "Create dialogue by hosting additional community events",
                explanation: "You allow the event but also create space for diverse community voices through additional programming.",
                outcome: {
                    cost: 250000, // $250K for additional events
                    metrics: { customer_satisfaction: 2 },
                    values: { respect: 3, integrity: 3, collaboration: 3 },
                    factions: { government: 2, regulators: 1, security_holders: -1 },
                    flags: ["The company promotes community dialogue", "The company values diverse perspectives"]
                }
            }
        ]
    },

    // --- High-Impact Scenarios ---
    {
        id: "revolutionary_retail_concept",
        title: "Revolutionary Retail Concept",
        description: "Your innovation team has developed a revolutionary retail concept that could completely transform the shopping experience and significantly differentiate Pretty Close Centres from competitors.",
        conditions: {
            minYear: 3,
            values: { excellence: { min: 70 } }
        },
        choices: [
            {
                text: "Go all-in on the revolutionary concept across your portfolio",
                explanation: "You make a bold company-wide commitment to completely transform your shopping centres with this innovative approach.",
                outcome: {
                    cost: 35000000, // $35M transformation investment
                    metrics: { revenue: -5, employee_engagement: 10, customer_satisfaction: "DOUBLE" },
                    values: { excellence: 15, customer_focus: 10, collaboration: 5 },
                    factions: { security_holders: -5, co_owners: 5, regulators: 2 },
                    flags: ["The company is a revolutionary retail innovator", "The company takes bold strategic risks"]
                }
            },
            {
                text: "Test the concept with a flagship showcase property",
                explanation: "You transform one property into a showcase for the new concept while maintaining the traditional approach elsewhere.",
                outcome: {
                    cost: 15000000, // $15M flagship investment
                    metrics: { revenue: -2, employee_engagement: 5, customer_satisfaction: 8 },
                    values: { excellence: 8, customer_focus: 5, collaboration: 3 },
                    factions: { security_holders: -2, co_owners: 3, regulators: 1 },
                    flags: ["The company creates innovation showcases", "The company balances innovation with stability"]
                }
            },
            {
                text: "Incorporate elements of the concept selectively across properties",
                explanation: "You adopt the most practical innovations from the concept while maintaining your core business model.",
                outcome: {
                    cost: 8000000, // $8M selective implementation
                    metrics: { revenue: 0, employee_engagement: 3, customer_satisfaction: 5 },
                    values: { excellence: 5, customer_focus: 3, collaboration: 1 },
                    factions: { security_holders: 1, co_owners: 2, regulators: 0 },
                    flags: ["The company evolves incrementally", "The company takes a balanced approach to innovation"]
                }
            }
        ]
    },
    {
        id: "major_fraud_discovery",
        title: "Internal Fraud Discovery",
        description: "A routine audit has uncovered evidence of significant financial fraud within the company involving several senior employees. The scheme has been operating for years and involves millions of dollars.",
        choices: [
            {
                text: "Full disclosure, cooperation with authorities, and immediate terminations",
                explanation: "You disclose everything publicly, cooperate fully with law enforcement, and terminate all involved employees immediately.",
                outcome: {
                    cost: 3000000, // $3M investigation and legal costs
                    metrics: { revenue: -5, employee_engagement: -3 },
                    values: { integrity: "DOUBLE", excellence: -5, respect: -2 },
                    factions: { regulators: 10, security_holders: -5, banks: -3 },
                    flags: ["The company prioritizes transparency above all", "The company has zero tolerance for ethical violations"]
                }
            },
            {
                text: "Handle internally with quiet terminations and improved controls",
                explanation: "You address the issue internally without public disclosure, fire involved employees, and strengthen financial controls.",
                outcome: {
                    cost: 5000000, // $5M repayment and controls
                    metrics: { revenue: -2, employee_engagement: -1 },
                    values: { integrity: -3, excellence: 2, respect: 1 },
                    factions: { regulators: -5, security_holders: 2, banks: 1 },
                    flags: ["The company handles issues quietly", "The company prioritizes reputation management"]
                }
            },
            {
                text: "Conduct thorough investigation before taking any action",
                explanation: "You launch an exhaustive investigation to understand the full scope before deciding on next steps.",
                outcome: {
                    cost: 1500000, // $1.5M investigation
                    metrics: { revenue: 0, employee_engagement: 1 },
                    values: { integrity: 3, excellence: 3, respect: 2 },
                    factions: { regulators: 2, security_holders: 0, banks: 1 },
                    flags: ["The company is methodical about governance", "The company prioritizes complete understanding"]
                }
            }
        ]
    },
    {
        id: "revolutionary_sustainability",
        title: "Revolutionary Sustainability Initiative",
        description: "Environmental experts have approached your company with a proposal for a groundbreaking sustainability transformation that would make Pretty Close Centres the world's first carbon-negative shopping centre operator.",
        conditions: {
            values: { integrity: { min: 60 } }
        },
        choices: [
            {
                text: "Commit to the full carbon-negative transformation",
                explanation: "You announce an ambitious plan to transform all properties to be carbon-negative within 5 years, no matter the cost.",
                outcome: {
                    cost: 25000000, // $25M initial investment
                    metrics: { revenue: -8, employee_engagement: 15, customer_satisfaction: 10 },
                    values: { integrity: "DOUBLE", respect: 15, excellence: 8 },
                    factions: { regulators: 15, government: 15, security_holders: -10 },
                    flags: ["The company is a revolutionary environmental leader", "The company prioritizes planet over profits"]
                }
            },
            {
                text: "Develop a phased implementation plan with clear ROI targets",
                explanation: "You commit to the carbon-negative goal but with a phased approach that balances investments with financial returns.",
                outcome: {
                    cost: 10000000, // $10M initial phase
                    metrics: { revenue: -3, employee_engagement: 8, customer_satisfaction: 5 },
                    values: { integrity: 10, respect: 8, excellence: 5 },
                    factions: { regulators: 8, government: 8, security_holders: -3 },
                    flags: ["The company balances sustainability with business needs", "The company is a pragmatic environmental leader"]
                }
            },
            {
                text: "Implement only the highest-visibility elements of the plan",
                explanation: "You select the most visible and marketable sustainability initiatives while deferring the more costly, less visible elements.",
                outcome: {
                    cost: 5000000, // $5M visible initiatives
                    metrics: { revenue: 0, employee_engagement: -5, customer_satisfaction: 3 },
                    values: { integrity: -5, respect: -2, excellence: -1 },
                    factions: { regulators: 2, government: 3, security_holders: 2 },
                    flags: ["The company engages in greenwashing", "The company prioritizes sustainability marketing over substance"]
                }
            }
        ]
    }
];
