// Executive Decision - Corporate Challenges Pack
// This file adds new corporate leadership and governance scenarios to the game
// Updated with cost elements, extended impacts, and human-readable flags

(function() {
    // Register with the game's extension system
    if (!window.gameScenarioExtensions) {
        window.gameScenarioExtensions = [];
    }
    
    // Extension metadata and scenarios
    window.gameScenarioExtensions.push({
        id: "corporate-challenges",
        name: "Corporate Challenges Pack",
        description: "New scenarios focusing on corporate leadership, governance, and executive challenges",
        version: "1.0.0",
        author: "Executive Decision Team",
        scenarios: [
            {
                id: "executive_team_conflict",
                title: "Executive Team Conflict",
                description: "A serious disagreement has emerged between key members of your executive team, threatening collaboration and decision-making.",
                choices: [
                    {
                        text: "Mediate the conflict directly and facilitate resolution",
                        explanation: "You take an active role in addressing the conflict, bringing the parties together to work through their differences.",
                        outcome: {
                            cost: 250000, // $250K executive coaching and mediation
                            metrics: { employee_engagement: 3 },
                            values: { respect: 3, collaboration: 4, integrity: 1 },
                            factions: { security_holders: 1 },
                            flags: ["The company resolves leadership conflicts constructively", "The company prioritizes leadership harmony"]
                        }
                    },
                    {
                        text: "Restructure responsibilities to minimize interaction",
                        explanation: "You reorganize the leadership structure to reduce the need for the conflicting executives to work together.",
                        outcome: {
                            cost: 500000, // $500K restructuring costs
                            metrics: { employee_engagement: 0, revenue: 1 },
                            values: { respect: -1, collaboration: -2, excellence: 1 },
                            factions: { security_holders: 2 },
                            flags: ["The company uses structural solutions for interpersonal issues", "The company prioritizes operational efficiency over collaboration"]
                        }
                    },
                    {
                        text: "Replace one or both executives",
                        explanation: "You decide that the conflict can't be resolved and begin the process of replacing leadership.",
                        outcome: {
                            cost: 2000000, // $2M severance and recruitment
                            metrics: { employee_engagement: -3, revenue: -1 },
                            values: { respect: -2, excellence: 2 },
                            factions: { security_holders: 3, co_owners: -1 },
                            flags: ["The company replaces leadership when necessary", "The company prioritizes leadership alignment over retention"]
                        }
                    }
                ]
            },
            {
                id: "strategic_pivot_proposal",
                title: "Strategic Pivot Proposal",
                description: "Your Chief Strategy Officer has proposed a significant pivot in business strategy that would shift Pretty Close Centres' focus from traditional shopping centers to mixed-use lifestyle destinations.",
                choices: [
                    {
                        text: "Fully embrace the strategic pivot",
                        explanation: "You approve the complete transformation of the business model across the entire portfolio.",
                        outcome: {
                            cost: 50000000, // $50M strategic transformation
                            metrics: { revenue: -4, employee_engagement: 3, customer_satisfaction: 4 },
                            values: { excellence: 3, customer_focus: 4 },
                            factions: { banks: -2, security_holders: -1, co_owners: 2 },
                            flags: ["The company has undergone a major strategic transformation", "The company has repositioned as a lifestyle destination provider"]
                        }
                    },
                    {
                        text: "Implement a measured pilot program at select properties",
                        explanation: "You authorize testing the new concept at a few locations before considering wider implementation.",
                        outcome: {
                            cost: 15000000, // $15M pilot program
                            metrics: { revenue: -1, employee_engagement: 1, customer_satisfaction: 2 },
                            values: { excellence: 2, integrity: 2 },
                            factions: { banks: 1, security_holders: 2 },
                            flags: ["The company tests strategic innovations carefully", "The company takes a balanced approach to business evolution"]
                        }
                    },
                    {
                        text: "Reject the pivot in favor of optimizing the current model",
                        explanation: "You decide to focus on excellence within your established business model rather than pivoting.",
                        outcome: {
                            cost: 5000000, // $5M optimization investment
                            metrics: { revenue: 2, employee_engagement: -2 },
                            values: { excellence: 1, customer_focus: -1 },
                            factions: { banks: 2, security_holders: 3, co_owners: -1 },
                            flags: ["The company optimizes its traditional business model", "The company prioritizes continuity over transformation"]
                        }
                    }
                ]
            },
            {
                id: "executive_compensation_controversy",
                title: "Executive Compensation Controversy",
                description: "Media reports have highlighted the gap between executive compensation and average employee salaries at Pretty Close Centres, triggering public criticism.",
                choices: [
                    {
                        text: "Reform compensation structure for greater equity",
                        explanation: "You implement a more equitable compensation system with reduced executive bonuses and improved employee benefits.",
                        outcome: {
                            cost: 3000000, // $3M in compensation adjustments
                            metrics: { employee_engagement: 5, customer_satisfaction: 2 },
                            values: { respect: 4, integrity: 3 },
                            factions: { security_holders: -2, government: 3, regulators: 2 },
                            flags: ["The company has equitable compensation practices", "The company prioritizes internal pay equity"]
                        }
                    },
                    {
                        text: "Improve transparency without changing compensation",
                        explanation: "You provide greater disclosure about compensation decisions while defending current practices.",
                        outcome: {
                            cost: 200000, // $200K for communication and disclosure
                            metrics: { employee_engagement: 0, customer_satisfaction: 0 },
                            values: { integrity: 1, respect: -1 },
                            factions: { security_holders: 1, government: 0, regulators: 1 },
                            flags: ["The company is transparent about executive compensation", "The company defends market-based compensation"]
                        }
                    },
                    {
                        text: "Dismiss criticism as misunderstanding market realities",
                        explanation: "You stand firmly behind current compensation practices as necessary to attract top talent.",
                        outcome: {
                            metrics: { employee_engagement: -3, customer_satisfaction: -1 },
                            values: { respect: -3, integrity: -2 },
                            factions: { security_holders: 2, government: -2, regulators: -1 },
                            flags: ["The company defends significant executive compensation", "The company prioritizes executive talent retention"]
                        }
                    }
                ]
            },
            {
                id: "leadership_succession_planning",
                title: "Leadership Succession Planning",
                description: "The board is concerned about the lack of formal succession planning for key executive positions and wants a comprehensive plan developed.",
                choices: [
                    {
                        text: "Create a robust succession plan with internal development focus",
                        explanation: "You invest in identifying and developing internal talent to create a leadership pipeline.",
                        outcome: {
                            cost: 3500000, // $3.5M leadership development program
                            metrics: { employee_engagement: 4, revenue: -1 },
                            values: { excellence: 3, respect: 3 },
                            factions: { security_holders: 3, regulators: 2 },
                            flags: ["The company develops internal leadership talent", "The company has robust succession planning"]
                        }
                    },
                    {
                        text: "Develop plans for key positions with executive search firm",
                        explanation: "You work with an external firm to identify both internal and external candidates for critical roles.",
                        outcome: {
                            cost: 1200000, // $1.2M consulting and search fees
                            metrics: { employee_engagement: 0, revenue: 0 },
                            values: { excellence: 2, respect: 0 },
                            factions: { security_holders: 2, regulators: 1 },
                            flags: ["The company uses external expertise for succession", "The company balances internal and external talent"]
                        }
                    },
                    {
                        text: "Implement minimal planning to satisfy governance requirements",
                        explanation: "You create basic documentation that meets governance standards without significant investment.",
                        outcome: {
                            cost: 200000, // $200K minimal documentation
                            metrics: { employee_engagement: -1, revenue: 1 },
                            values: { integrity: -1, excellence: -1 },
                            factions: { security_holders: 0, regulators: -1 },
                            flags: ["The company meets minimum governance requirements", "The company takes a reactive approach to succession"]
                        }
                    }
                ]
            },
            {
                id: "board_director_conflict_of_interest",
                title: "Board Director Conflict of Interest",
                description: "You've discovered a potential conflict of interest involving one of your board directors and an upcoming property transaction.",
                choices: [
                    {
                        text: "Address the conflict transparently with full board disclosure",
                        explanation: "You bring the conflict to light in a board meeting and implement governance best practices.",
                        outcome: {
                            cost: 350000, // $350K legal and governance costs
                            metrics: { revenue: -1 },
                            values: { integrity: 5, respect: 2 },
                            factions: { regulators: 3, security_holders: 1 },
                            flags: ["The company has exemplary governance practices", "The company prioritizes transparency in board matters"]
                        }
                    },
                    {
                        text: "Discuss privately with the director and chairman",
                        explanation: "You handle the situation discretely through private conversations rather than formal channels.",
                        outcome: {
                            metrics: { revenue: 0 },
                            values: { integrity: 0, respect: 1 },
                            factions: { regulators: 0, security_holders: 0 },
                            flags: ["The company handles sensitive matters discreetly", "The company values private resolution of governance issues"]
                        }
                    },
                    {
                        text: "Restructure the transaction to eliminate the conflict",
                        explanation: "You modify the deal structure to technically remove the conflict while proceeding with the transaction.",
                        outcome: {
                            cost: 500000, // $500K transaction restructuring
                            metrics: { revenue: 2 },
                            values: { integrity: -2, excellence: 1 },
                            factions: { regulators: -2, security_holders: 2 },
                            flags: ["The company restructures deals to avoid conflicts", "The company prioritizes transaction completion"]
                        }
                    }
                ]
            },
            {
                id: "corporate_values_reassessment",
                title: "Corporate Values Reassessment",
                description: "With changing market conditions and evolving social expectations, there's internal debate about whether Pretty Close Centres' corporate values need updating.",
                choices: [
                    {
                        text: "Lead a comprehensive values refresh with stakeholder input",
                        explanation: "You initiate a thorough process to revisit and potentially update company values with input from employees, customers, and partners.",
                        outcome: {
                            cost: 2000000, // $2M program and implementation
                            metrics: { employee_engagement: 4, customer_satisfaction: 2, revenue: -1 },
                            values: { respect: 3, integrity: 3, collaboration: 3, customer_focus: 3, excellence: 2 },
                            factions: { security_holders: 1, government: 2 },
                            flags: ["The company evolves its corporate values", "The company engages stakeholders in defining its culture"]
                        }
                    },
                    {
                        text: "Reinterpret existing values for current context",
                        explanation: "You keep the same core values but update their interpretation and implementation for today's environment.",
                        outcome: {
                            cost: 500000, // $500K communication and training
                            metrics: { employee_engagement: 2, customer_satisfaction: 1 },
                            values: { respect: 1, integrity: 1, collaboration: 1, customer_focus: 1, excellence: 1 },
                            factions: { security_holders: 2, government: 1 },
                            flags: ["The company refreshes its values interpretation", "The company balances tradition with evolution"]
                        }
                    },
                    {
                        text: "Affirm commitment to traditional values",
                        explanation: "You strengthen your commitment to existing values, emphasizing their timeless relevance.",
                        outcome: {
                            cost: 200000, // $200K reinforcement program
                            metrics: { employee_engagement: -1, customer_satisfaction: -1, revenue: 1 },
                            values: { integrity: 2, excellence: 0 },
                            factions: { security_holders: 3, government: -1 },
                            flags: ["The company maintains traditional values", "The company emphasizes continuity in principles"]
                        }
                    }
                ]
            },
            {
                id: "executive_burnout_crisis",
                title: "Executive Burnout Crisis",
                description: "Several members of your executive team are showing signs of severe burnout after an intense period of business challenges.",
                choices: [
                    {
                        text: "Implement a comprehensive executive wellness program",
                        explanation: "You create a structured support system including coaching, mental health resources, and workload management.",
                        outcome: {
                            cost: 1500000, // $1.5M wellness program
                            metrics: { employee_engagement: 4, revenue: -1 },
                            values: { respect: 4, excellence: 1, collaboration: 2 },
                            factions: { security_holders: 0 },
                            flags: ["The company prioritizes executive wellness", "The company invests in leadership sustainability"]
                        }
                    },
                    {
                        text: "Temporarily redistribute responsibilities and encourage leave",
                        explanation: "You adjust workloads and encourage affected executives to take time off to recover.",
                        outcome: {
                            cost: 600000, // $600K temporary staffing adjustments
                            metrics: { employee_engagement: 2, revenue: 0 },
                            values: { respect: 2, collaboration: 1 },
                            factions: { security_holders: 1 },
                            flags: ["The company addresses leadership burnout practically", "The company balances wellbeing with business needs"]
                        }
                    },
                    {
                        text: "Bring in temporary executive consultants to maintain momentum",
                        explanation: "You hire external consultants to maintain business performance while minimizing changes to the team.",
                        outcome: {
                            cost: 2500000, // $2.5M consulting fees
                            metrics: { employee_engagement: -1, revenue: 2 },
                            values: { respect: -1, excellence: 2 },
                            factions: { security_holders: 2, banks: 1 },
                            flags: ["The company uses external consultants strategically", "The company prioritizes business continuity over leader wellbeing"]
                        }
                    }
                ]
            },
            {
                id: "corporate_purpose_initiative",
                title: "Corporate Purpose Initiative",
                description: "Investors and employees are increasingly expecting companies to articulate a purpose beyond profit. Your board wants to address this trend.",
                choices: [
                    {
                        text: "Develop and launch a bold corporate purpose statement",
                        explanation: "You create a compelling purpose statement centered on community development and make it central to company strategy.",
                        outcome: {
                            cost: 3000000, // $3M program and implementation
                            metrics: { employee_engagement: 5, customer_satisfaction: 3, revenue: -1 },
                            values: { integrity: 3, respect: 2, customer_focus: 3 },
                            factions: { security_holders: 1, government: 3, regulators: 2 },
                            flags: ["The company has a purpose beyond profit", "The company embraces stakeholder capitalism"]
                        }
                    },
                    {
                        text: "Create a moderate purpose statement balancing stakeholders",
                        explanation: "You carefully craft a purpose that balances financial performance with social responsibility.",
                        outcome: {
                            cost: 800000, // $800K development and communication
                            metrics: { employee_engagement: 2, customer_satisfaction: 1, revenue: 0 },
                            values: { integrity: 1, customer_focus: 1 },
                            factions: { security_holders: 2, government: 1 },
                            flags: ["The company balances profit with purpose", "The company takes a moderate stance on social issues"]
                        }
                    },
                    {
                        text: "Reaffirm that shareholder value is the primary purpose",
                        explanation: "You explicitly state that creating shareholder value remains the company's core purpose, with other considerations secondary.",
                        outcome: {
                            metrics: { employee_engagement: -2, customer_satisfaction: -1, revenue: 2 },
                            values: { integrity: -1, customer_focus: -2 },
                            factions: { security_holders: 4, government: -2, regulators: -1 },
                            flags: ["The company prioritizes shareholder returns", "The company maintains traditional corporate principles"]
                        }
                    }
                ]
            },
            {
                id: "corporate_reputation_crisis",
                title: "Corporate Reputation Crisis",
                description: "A viral social media campaign has targeted Pretty Close Centres over perceived ethical issues, threatening significant reputational damage.",
                choices: [
                    {
                        text: "Engage directly with critics and implement substantive changes",
                        explanation: "You reach out to the campaign organizers, acknowledge valid concerns, and commit to making meaningful changes.",
                        outcome: {
                            cost: 5000000, // $5M in changes and engagement
                            metrics: { revenue: -2, employee_engagement: 4, customer_satisfaction: 3 },
                            values: { integrity: 5, respect: 4, collaboration: 3 },
                            factions: { regulators: 3, government: 3, security_holders: -2 },
                            flags: ["The company responds constructively to criticism", "The company transforms challenges into improvements"]
                        }
                    },
                    {
                        text: "Launch a counter PR campaign highlighting positives",
                        explanation: "You develop a strategic communications campaign showcasing your company's positive contributions and achievements.",
                        outcome: {
                            cost: 2000000, // $2M PR campaign
                            metrics: { revenue: 0, employee_engagement: -1, customer_satisfaction: -1 },
                            values: { integrity: -2, excellence: 1 },
                            factions: { regulators: -1, government: 0, security_holders: 1 },
                            flags: ["The company uses PR to manage crises", "The company defends its reputation aggressively"]
                        }
                    },
                    {
                        text: "Wait for the issue to pass without significant response",
                        explanation: "You make minimal public statements, betting that the social media campaign will lose momentum without engagement.",
                        outcome: {
                            metrics: { revenue: -1, employee_engagement: -3, customer_satisfaction: -2 },
                            values: { integrity: -3, respect: -2 },
                            factions: { regulators: -2, government: -2, security_holders: 0 },
                            flags: ["The company weathers criticism passively", "The company avoids engaging with social media controversies"]
                        }
                    }
                ]
            },
            {
                id: "shareholders_activist_campaign",
                title: "Shareholder Activist Campaign",
                description: "A group of activist shareholders has launched a campaign demanding changes to company strategy, governance, and capital allocation.",
                choices: [
                    {
                        text: "Engage constructively and implement reasonable demands",
                        explanation: "You meet with the activists, find common ground, and adopt changes that make sense for the business.",
                        outcome: {
                            cost: 1500000, // $1.5M implementation costs
                            metrics: { revenue: 1, employee_engagement: 1 },
                            values: { respect: 2, collaboration: 3, integrity: 2 },
                            factions: { security_holders: 5, banks: 1, regulators: 1 },
                            flags: ["The company collaborates with activist investors", "The company is open to external strategic input"]
                        }
                    },
                    {
                        text: "Firmly resist the campaign and defend current strategy",
                        explanation: "You reject the activists' demands and mount a defense of your existing strategic direction.",
                        outcome: {
                            cost: 3000000, // $3M defense campaign
                            metrics: { revenue: -1, employee_engagement: -2 },
                            values: { excellence: 1, collaboration: -3 },
                            factions: { security_holders: -3, banks: -1, regulators: -1 },
                            flags: ["The company defends its strategic independence", "The company resists external pressure on management"]
                        }
                    },
                    {
                        text: "Preemptively announce your own strategic initiatives",
                        explanation: "You launch your own set of changes that address some concerns while maintaining control of the narrative.",
                        outcome: {
                            cost: 5000000, // $5M strategic initiatives
                            metrics: { revenue: 2, employee_engagement: 2 },
                            values: { excellence: 3, integrity: 1 },
                            factions: { security_holders: 3, banks: 2, regulators: 1 },
                            flags: ["The company proactively evolves its strategy", "The company maintains control of corporate direction"]
                        }
                    }
                ]
            }
        ]
    });
    
    console.log("Corporate Challenges Pack loaded successfully");
})();
