// Executive Decision - Corporate Challenges Pack
// This file adds new corporate leadership and governance scenarios to the game

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
                            metrics: { employee_engagement: 3 },
                            values: { respect: 3, collaboration: 4, integrity: 1 },
                            factions: { security_holders: 1 },
                            flags: ["The company has effective conflict resolution processes."],
                            moneyCost: 100000 // $100,000 for mediation and facilitation
                        }
                    },
                    {
                        text: "Restructure responsibilities to minimize interaction",
                        explanation: "You reorganize the leadership structure to reduce the need for the conflicting executives to work together.",
                        outcome: {
                            metrics: { employee_engagement: 0, revenue: 1 },
                            values: { respect: -1, collaboration: -2, excellence: 1 },
                            factions: { security_holders: 2 },
                            flags: ["The company uses structural solutions for personnel conflicts."],
                            moneyCost: 250000 // $250,000 for restructuring
                        }
                    },
                    {
                        text: "Replace one or both executives",
                        explanation: "You decide that the conflict can't be resolved and begin the process of replacing leadership.",
                        outcome: {
                            metrics: { employee_engagement: -3, revenue: -1 },
                            values: { respect: -2, excellence: 2 },
                            factions: { security_holders: 3, co_owners: -1 },
                            flags: ["The company has undergone leadership changes."],
                            moneyCost: 1500000 // $1.5 million for severance and recruitment
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
                            metrics: { revenue: -4, employee_engagement: 3, customer_satisfaction: 4 },
                            values: { excellence: 3, customer_focus: 4 },
                            factions: { banks: -2, security_holders: -1, co_owners: 2 },
                            flags: ["The company has pivoted to a fundamentally new strategy."],
                            moneyCost: 50000000, // $50 million for transformation
                            veryImpactful: true // Major strategic pivot
                        }
                    },
                    {
                        text: "Implement a measured pilot program at select properties",
                        explanation: "You authorize testing the new concept at a few locations before considering wider implementation.",
                        outcome: {
                            metrics: { revenue: -1, employee_engagement: 1, customer_satisfaction: 2 },
                            values: { excellence: 2, integrity: 2 },
                            factions: { banks: 1, security_holders: 2 },
                            flags: ["The company experiments with new strategic directions."],
                            moneyCost: 15000000 // $15 million for pilot program
                        }
                    },
                    {
                        text: "Reject the pivot in favor of optimizing the current model",
                        explanation: "You decide to focus on excellence within your established business model rather than pivoting.",
                        outcome: {
                            metrics: { revenue: 2, employee_engagement: -2 },
                            values: { excellence: 1, customer_focus: -1 },
                            factions: { banks: 2, security_holders: 3, co_owners: -1 },
                            flags: ["The company maintains strategic continuity."]
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
                            metrics: { employee_engagement: 5, customer_satisfaction: 2 },
                            values: { respect: 4, integrity: 3 },
                            factions: { security_holders: -2, government: 3, regulators: 2 },
                            flags: ["The company has implemented equitable compensation reform."],
                            moneyCost: 2000000 // $2 million for adjusted compensation and benefits
                        }
                    },
                    {
                        text: "Improve transparency without changing compensation",
                        explanation: "You provide greater disclosure about compensation decisions while defending current practices.",
                        outcome: {
                            metrics: { employee_engagement: 0, customer_satisfaction: 0 },
                            values: { integrity: 1, respect: -1 },
                            factions: { security_holders: 1, government: 0, regulators: 1 },
                            moneyCost: 250000 // $250,000 for disclosure and communications
                        }
                    },
                    {
                        text: "Dismiss criticism as misunderstanding market realities",
                        explanation: "You stand firmly behind current compensation practices as necessary to attract top talent.",
                        outcome: {
                            metrics: { employee_engagement: -3, customer_satisfaction: -1 },
                            values: { respect: -3, integrity: -2 },
                            factions: { security_holders: 2, government: -2, regulators: -1 },
                            flags: ["The company faces ongoing compensation controversies."]
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
                            metrics: { employee_engagement: 4, revenue: -1 },
                            values: { excellence: 3, respect: 3 },
                            factions: { security_holders: 3, regulators: 2 },
                            flags: ["The company has strong succession planning."],
                            moneyCost: 1500000 // $1.5 million for development programs
                        }
                    },
                    {
                        text: "Develop plans for key positions with executive search firm",
                        explanation: "You work with an external firm to identify both internal and external candidates for critical roles.",
                        outcome: {
                            metrics: { employee_engagement: 0, revenue: 0 },
                            values: { excellence: 2, respect: 0 },
                            factions: { security_holders: 2, regulators: 1 },
                            moneyCost: 750000 // $750,000 for executive search services
                        }
                    },
                    {
                        text: "Implement minimal planning to satisfy governance requirements",
                        explanation: "You create basic documentation that meets governance standards without significant investment.",
                        outcome: {
                            metrics: { employee_engagement: -1, revenue: 1 },
                            values: { integrity: -1, excellence: -1 },
                            factions: { security_holders: 0, regulators: -1 },
                            flags: ["The company has succession planning vulnerabilities."],
                            moneyCost: 100000 // $100,000 for minimal compliance
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
                            metrics: { revenue: -1 },
                            values: { integrity: 5, respect: 2 },
                            factions: { regulators: 3, security_holders: 1 },
                            flags: ["The company maintains excellent governance practices."]
                        }
                    },
                    {
                        text: "Discuss privately with the director and chairman",
                        explanation: "You handle the situation discretely through private conversations rather than formal channels.",
                        outcome: {
                            metrics: { revenue: 0 },
                            values: { integrity: 0, respect: 1 },
                            factions: { regulators: 0, security_holders: 0 }
                        }
                    },
                    {
                        text: "Restructure the transaction to eliminate the conflict",
                        explanation: "You modify the deal structure to technically remove the conflict while proceeding with the transaction.",
                        outcome: {
                            metrics: { revenue: 2 },
                            values: { integrity: -2, excellence: 1 },
                            factions: { regulators: -2, security_holders: 2 },
                            flags: ["The company faces governance risks."],
                            moneyCost: 500000 // $500,000 for transaction restructuring
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
                            metrics: { employee_engagement: 4, customer_satisfaction: 2, revenue: -1 },
                            values: { respect: 3, integrity: 3, collaboration: 3, customer_focus: 3, excellence: 2 },
                            factions: { security_holders: 1, government: 2 },
                            flags: ["The company has modernized its corporate values."],
                            moneyCost: 1000000 // $1 million for values initiative
                        }
                    },
                    {
                        text: "Reinterpret existing values for current context",
                        explanation: "You keep the same core values but update their interpretation and implementation for today's environment.",
                        outcome: {
                            metrics: { employee_engagement: 2, customer_satisfaction: 1 },
                            values: { respect: 1, integrity: 1, collaboration: 1, customer_focus: 1, excellence: 1 },
                            factions: { security_holders: 2, government: 1 },
                            moneyCost: 300000 // $300,000 for communications and training
                        }
                    },
                    {
                        text: "Affirm commitment to traditional values",
                        explanation: "You strengthen your commitment to existing values, emphasizing their timeless relevance.",
                        outcome: {
                            metrics: { employee_engagement: -1, customer_satisfaction: -1, revenue: 1 },
                            values: { integrity: 2, excellence: 0 },
                            factions: { security_holders: 3, government: -1 },
                            flags: ["The company maintains traditional corporate values."],
                            moneyCost: 100000 // $100,000 for communications
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
                            metrics: { employee_engagement: 4, revenue: -1 },
                            values: { respect: 4, excellence: 1, collaboration: 2 },
                            factions: { security_holders: 0 },
                            flags: ["The company prioritizes executive wellness."],
                            moneyCost: 750000 // $750,000 for wellness program
                        }
                    },
                    {
                        text: "Temporarily redistribute responsibilities and encourage leave",
                        explanation: "You adjust workloads and encourage affected executives to take time off to recover.",
                        outcome: {
                            metrics: { employee_engagement: 2, revenue: 0 },
                            values: { respect: 2, collaboration: 1 },
                            factions: { security_holders: 1 },
                            moneyCost: 250000 // $250,000 for temporary adjustments
                        }
                    },
                    {
                        text: "Bring in temporary executive consultants to maintain momentum",
                        explanation: "You hire external consultants to maintain business performance while minimizing changes to the team.",
                        outcome: {
                            metrics: { employee_engagement: -1, revenue: 2 },
                            values: { respect: -1, excellence: 2 },
                            factions: { security_holders: 2, banks: 1 },
                            flags: ["The company relies on external consultants for executive functions."],
                            moneyCost: 2000000 // $2 million for consulting services
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
                            metrics: { employee_engagement: 5, customer_satisfaction: 3, revenue: -1 },
                            values: { integrity: 3, respect: 2, customer_focus: 3 },
                            factions: { security_holders: 1, government: 3, regulators: 2 },
                            flags: ["The company has become purpose driven."],
                            moneyCost: 2000000 // $2 million for purpose initiative
                        }
                    },
                    {
                        text: "Create a moderate purpose statement balancing stakeholders",
                        explanation: "You carefully craft a purpose that balances financial performance with social responsibility.",
                        outcome: {
                            metrics: { employee_engagement: 2, customer_satisfaction: 1, revenue: 0 },
                            values: { integrity: 1, customer_focus: 1 },
                            factions: { security_holders: 2, government: 1 },
                            moneyCost: 500000 // $500,000 for development and communications
                        }
                    },
                    {
                        text: "Reaffirm that shareholder value is the primary purpose",
                        explanation: "You explicitly state that creating shareholder value remains the company's core purpose, with other considerations secondary.",
                        outcome: {
                            metrics: { employee_engagement: -2, customer_satisfaction: -1, revenue: 2 },
                            values: { integrity: -1, customer_focus: -2 },
                            factions: { security_holders: 4, government: -2, regulators: -1 },
                            flags: ["The company prioritizes shareholder value above all."],
                            veryImpactful: true // Major stance on corporate purpose
                        }
                    }
                ]
            }
        ]
    });
    
    console.log("Corporate Challenges Pack loaded successfully");
})();