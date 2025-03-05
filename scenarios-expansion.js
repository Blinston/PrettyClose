// Executive Decision - International Expansion Pack
// This file adds new scenarios focused on international business opportunities and challenges

(function() {
    // Register with the game's extension system
    if (!window.gameScenarioExtensions) {
        window.gameScenarioExtensions = [];
    }
    
    // Extension metadata and scenarios
    window.gameScenarioExtensions.push({
        id: "international-expansion",
        name: "International Expansion Pack",
        description: "New scenarios focusing on international business opportunities and challenges",
        version: "1.0.0",
        author: "Executive Decision Team",
        scenarios: [
            {
                id: "international_expansion_opportunity",
                title: "International Expansion Opportunity",
                description: "A prominent real estate broker has approached you with an opportunity to expand Pretty Close Centres into a growing Asian market.",
                image: "international.jpg",
                choices: [
                    {
                        text: "Aggressively pursue international expansion",
                        explanation: "You commit significant resources to establishing a presence in this new market.",
                        outcome: {
                            metrics: { revenue: -3, employee_engagement: 2, customer_satisfaction: 0 },
                            values: { excellence: 3, collaboration: 1 },
                            factions: { banks: -2, security_holders: 4, co_owners: 1 },
                            flags: ["international_expansion"]
                        }
                    },
                    {
                        text: "Form a joint venture with local partners",
                        explanation: "You pursue international expansion with local partners to mitigate risk and leverage their market knowledge.",
                        outcome: {
                            metrics: { revenue: -1, employee_engagement: 1, customer_satisfaction: 1 },
                            values: { collaboration: 3, integrity: 1 },
                            factions: { banks: 0, security_holders: 2, co_owners: 3 },
                            flags: ["international_partnership"]
                        }
                    },
                    {
                        text: "Decline the opportunity to focus on domestic growth",
                        explanation: "You decide that international expansion is too risky and choose to focus on Australian opportunities.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: -1 },
                            values: { excellence: 1, integrity: 2 },
                            factions: { banks: 2, security_holders: -1 },
                            flags: ["domestic_focus"]
                        }
                    }
                ]
            },
            {
                id: "international_regulatory_challenge",
                title: "International Regulatory Challenge",
                description: "Your international property is facing unexpected regulatory changes that could significantly impact operations.",
                conditions: {
                    requiredFlags: ["international_expansion", "international_partnership"]
                },
                choices: [
                    {
                        text: "Adapt fully to all new regulations",
                        explanation: "You commit to complete compliance with all new requirements regardless of cost.",
                        outcome: {
                            metrics: { revenue: -4, customer_satisfaction: 2 },
                            values: { integrity: 4, excellence: 2 },
                            factions: { regulators: 4, government: 3, security_holders: -2 }
                        }
                    },
                    {
                        text: "Negotiate for regulatory concessions",
                        explanation: "You leverage your relationships to seek exemptions or modifications to the most challenging regulations.",
                        outcome: {
                            metrics: { revenue: -1, customer_satisfaction: 0 },
                            values: { integrity: 0, collaboration: 2 },
                            factions: { regulators: 0, government: 1, security_holders: 1 }
                        }
                    },
                    {
                        text: "Consider divesting from this market",
                        explanation: "You begin exploring options to sell your international property if the regulatory burden becomes too great.",
                        outcome: {
                            metrics: { revenue: 2, employee_engagement: -2 },
                            values: { integrity: -1, excellence: -1 },
                            factions: { banks: 1, security_holders: 2, co_owners: -2 },
                            flags: ["international_retreat"]
                        }
                    }
                ]
            },
            {
                id: "cultural_sensitivity_training",
                title: "Cultural Sensitivity Initiative",
                description: "Your HR director has proposed a comprehensive cultural sensitivity training program for all staff working with international partners and properties.",
                conditions: {
                    requiredFlags: ["international_expansion", "international_partnership"]
                },
                choices: [
                    {
                        text: "Implement an extensive cross-cultural training program",
                        explanation: "You invest in comprehensive cultural training for all employees involved in international operations.",
                        outcome: {
                            metrics: { revenue: -1, employee_engagement: 4, customer_satisfaction: 2 },
                            values: { respect: 4, collaboration: 3 },
                            factions: { co_owners: 3, government: 2 },
                            flags: ["cultural_competence"]
                        }
                    },
                    {
                        text: "Provide basic cultural briefings for key personnel only",
                        explanation: "You opt for targeted training only for executives and managers who directly interface with international stakeholders.",
                        outcome: {
                            metrics: { revenue: 0, employee_engagement: 1 },
                            values: { respect: 1, collaboration: 0 },
                            factions: { co_owners: 1, government: 0 }
                        }
                    },
                    {
                        text: "Rely on local partners to navigate cultural differences",
                        explanation: "Rather than investing in training, you depend on your international partners to manage cultural nuances.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: -1 },
                            values: { respect: -2, collaboration: 2 },
                            factions: { co_owners: 2, government: -1 },
                            flags: ["cultural_outsourcing"]
                        }
                    }
                ]
            },
            {
                id: "currency_exchange_crisis",
                title: "Currency Exchange Crisis",
                description: "Sudden currency fluctuations are creating significant financial challenges for your international operations.",
                conditions: {
                    requiredFlags: ["international_expansion", "international_partnership"],
                    minYear: 3
                },
                choices: [
                    {
                        text: "Implement sophisticated hedging strategies",
                        explanation: "You work with financial experts to develop advanced currency hedging to protect against future fluctuations.",
                        outcome: {
                            metrics: { revenue: -2, employee_engagement: 0 },
                            values: { excellence: 3, integrity: 1 },
                            factions: { banks: 3, security_holders: 2 },
                            flags: ["financial_sophistication"]
                        }
                    },
                    {
                        text: "Adjust pricing and contracts to share currency risk",
                        explanation: "You renegotiate agreements with tenants and partners to distribute currency risk more evenly.",
                        outcome: {
                            metrics: { revenue: 0, customer_satisfaction: -2 },
                            values: { collaboration: 2, integrity: 1 },
                            factions: { co_owners: 2, security_holders: 1 }
                        }
                    },
                    {
                        text: "Accept short-term losses while awaiting currency stabilization",
                        explanation: "You choose to weather the storm, absorbing losses with the expectation that currency markets will eventually normalize.",
                        outcome: {
                            metrics: { revenue: -4, employee_engagement: -1 },
                            values: { integrity: 2, excellence: -1 },
                            factions: { banks: -1, security_holders: -3, co_owners: 1 },
                            flags: ["financial_vulnerability"]
                        }
                    }
                ]
            },
            {
                id: "cross_border_acquisition",
                title: "Cross-Border Acquisition Opportunity",
                description: "A struggling international competitor has approached Pretty Close Centres about a potential acquisition of their properties.",
                conditions: {
                    requiredFlags: ["international_expansion", "international_partnership"],
                    minYear: 4
                },
                choices: [
                    {
                        text: "Pursue aggressive acquisition strategy",
                        explanation: "You move quickly to acquire multiple properties at potentially favorable prices.",
                        outcome: {
                            metrics: { revenue: 3, employee_engagement: 1 },
                            values: { excellence: 2, collaboration: -1 },
                            factions: { banks: -2, security_holders: 3, co_owners: -1 },
                            flags: ["international_consolidation"]
                        }
                    },
                    {
                        text: "Selectively acquire only the most promising properties",
                        explanation: "You conduct thorough due diligence and only purchase properties that perfectly complement your portfolio.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: 2 },
                            values: { excellence: 3, integrity: 2 },
                            factions: { banks: 0, security_holders: 2, co_owners: 1 }
                        }
                    },
                    {
                        text: "Decline acquisition but form strategic alliance",
                        explanation: "Rather than acquiring assets, you create a partnership that benefits both companies without the financial commitment.",
                        outcome: {
                            metrics: { revenue: 0, employee_engagement: 1, customer_satisfaction: 2 },
                            values: { collaboration: 3, integrity: 2 },
                            factions: { banks: 1, security_holders: 0, co_owners: 3 },
                            flags: ["international_alliance"]
                        }
                    }
                ]
            },
            {
                id: "international_sustainability_standards",
                title: "International Sustainability Standards",
                description: "Your international properties are facing different sustainability requirements across markets, creating compliance challenges.",
                conditions: {
                    requiredFlags: ["international_expansion", "international_partnership"],
                    minYear: 3
                },
                choices: [
                    {
                        text: "Implement global best practices across all properties",
                        explanation: "You develop and implement sustainability standards that exceed requirements in all markets.",
                        outcome: {
                            metrics: { revenue: -3, customer_satisfaction: 4 },
                            values: { integrity: 4, excellence: 3 },
                            factions: { regulators: 4, government: 3, security_holders: -1 },
                            flags: ["global_sustainability_leader"]
                        }
                    },
                    {
                        text: "Meet each market's minimum requirements efficiently",
                        explanation: "You create a tailored approach for each market that focuses on compliance without exceeding requirements.",
                        outcome: {
                            metrics: { revenue: -1, customer_satisfaction: 1 },
                            values: { integrity: 1, excellence: 1 },
                            factions: { regulators: 1, government: 1, security_holders: 1 }
                        }
                    },
                    {
                        text: "Focus sustainability investments on high-visibility markets only",
                        explanation: "You strategically invest in sustainability only in markets where it provides the most reputational benefit.",
                        outcome: {
                            metrics: { revenue: 0, customer_satisfaction: 2 },
                            values: { integrity: -2, customer_focus: 2 },
                            factions: { regulators: -1, government: 1, security_holders: 2 },
                            flags: ["selective_sustainability"]
                        }
                    }
                ]
            },
            {
                id: "international_customer_preferences",
                title: "International Customer Preferences",
                description: "Your market research reveals significant differences in customer preferences between your domestic and international locations.",
                conditions: {
                    requiredFlags: ["international_expansion", "international_partnership"],
                    minYear: 2
                },
                choices: [
                    {
                        text: "Fully localize each property to match regional preferences",
                        explanation: "You customize each center completely to match local consumer behaviors and preferences.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: -1, customer_satisfaction: 5 },
                            values: { customer_focus: 4, excellence: 2, collaboration: -1 },
                            factions: { co_owners: 3, security_holders: 1, regulators: 2 },
                            flags: ["localization_expert"]
                        }
                    },
                    {
                        text: "Create a hybrid approach balancing global brand with local touches",
                        explanation: "You maintain core brand elements while adapting specific aspects to local markets.",
                        outcome: {
                            metrics: { revenue: 2, employee_engagement: 2, customer_satisfaction: 3 },
                            values: { customer_focus: 3, excellence: 3 },
                            factions: { security_holders: 2, co_owners: 2 }
                        }
                    },
                    {
                        text: "Maintain consistent global experience with minimal customization",
                        explanation: "You standardize the Pretty Close Centres experience across all markets with only essential local adaptations.",
                        outcome: {
                            metrics: { revenue: 3, employee_engagement: 3, customer_satisfaction: -1 },
                            values: { excellence: 2, customer_focus: -2 },
                            factions: { security_holders: 3, co_owners: -1 },
                            flags: ["global_standardization"]
                        }
                    }
                ]
            }
        ]
    });
    
    console.log("International Expansion Pack loaded successfully");
})();