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
                            flags: ["The company is expanding internationally."],
                            moneyCost: 50000000 // $50 million for international expansion
                        }
                    },
                    {
                        text: "Form a joint venture with local partners",
                        explanation: "You pursue international expansion with local partners to mitigate risk and leverage their market knowledge.",
                        outcome: {
                            metrics: { revenue: -1, employee_engagement: 1, customer_satisfaction: 1 },
                            values: { collaboration: 3, integrity: 1 },
                            factions: { banks: 0, security_holders: 2, co_owners: 3 },
                            flags: ["The company has formed international partnerships."],
                            moneyCost: 25000000 // $25 million for joint venture
                        }
                    },
                    {
                        text: "Decline the opportunity to focus on domestic growth",
                        explanation: "You decide that international expansion is too risky and choose to focus on Australian opportunities.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: -1 },
                            values: { excellence: 1, integrity: 2 },
                            factions: { banks: 2, security_holders: -1 },
                            flags: ["The company is focusing on domestic markets."]
                        }
                    }
                ]
            },
            {
                id: "international_regulatory_challenge",
                title: "International Regulatory Challenge",
                description: "Your international property is facing unexpected regulatory changes that could significantly impact operations.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally.", "The company has formed international partnerships."]
                },
                choices: [
                    {
                        text: "Adapt fully to all new regulations",
                        explanation: "You commit to complete compliance with all new requirements regardless of cost.",
                        outcome: {
                            metrics: { revenue: -4, customer_satisfaction: 2 },
                            values: { integrity: 4, excellence: 2 },
                            factions: { regulators: 4, government: 3, security_holders: -2 },
                            moneyCost: 5000000 // $5 million for regulatory compliance
                        }
                    },
                    {
                        text: "Negotiate for regulatory concessions",
                        explanation: "You leverage your relationships to seek exemptions or modifications to the most challenging regulations.",
                        outcome: {
                            metrics: { revenue: -1, customer_satisfaction: 0 },
                            values: { integrity: 0, collaboration: 2 },
                            factions: { regulators: 0, government: 1, security_holders: 1 },
                            moneyCost: 1000000 // $1 million for lobbying and negotiations
                        }
                    },
                    {
                        text: "Consider divesting from this market",
                        explanation: "You begin exploring options to sell your international property if the regulatory burden becomes too great.",
                        outcome: {
                            metrics: { revenue: 2, employee_engagement: -2 },
                            values: { integrity: -1, excellence: -1 },
                            factions: { banks: 1, security_holders: 2, co_owners: -2 },
                            flags: ["The company has retreated from international markets."],
                            moneyCost: 2000000 // $2 million for market exit costs
                        }
                    }
                ]
            },
            {
                id: "cultural_sensitivity_training",
                title: "Cultural Sensitivity Initiative",
                description: "Your HR director has proposed a comprehensive cultural sensitivity training program for all staff working with international partners and properties.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally.", "The company has formed international partnerships."]
                },
                choices: [
                    {
                        text: "Implement an extensive cross-cultural training program",
                        explanation: "You invest in comprehensive cultural training for all employees involved in international operations.",
                        outcome: {
                            metrics: { revenue: -1, employee_engagement: 4, customer_satisfaction: 2 },
                            values: { respect: 4, collaboration: 3 },
                            factions: { co_owners: 3, government: 2 },
                            flags: ["The company has developed strong cultural competence."],
                            moneyCost: 1500000 // $1.5 million for training program
                        }
                    },
                    {
                        text: "Provide basic cultural briefings for key personnel only",
                        explanation: "You opt for targeted training only for executives and managers who directly interface with international stakeholders.",
                        outcome: {
                            metrics: { revenue: 0, employee_engagement: 1 },
                            values: { respect: 1, collaboration: 0 },
                            factions: { co_owners: 1, government: 0 },
                            moneyCost: 400000 // $400,000 for limited training
                        }
                    },
                    {
                        text: "Rely on local partners to navigate cultural differences",
                        explanation: "Rather than investing in training, you depend on your international partners to manage cultural nuances.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: -1 },
                            values: { respect: -2, collaboration: 2 },
                            factions: { co_owners: 2, government: -1 },
                            flags: ["The company outsources cultural navigation to partners."]
                        }
                    }
                ]
            },
            {
                id: "currency_exchange_crisis",
                title: "Currency Exchange Crisis",
                description: "Sudden currency fluctuations are creating significant financial challenges for your international operations.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally.", "The company has formed international partnerships."],
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
                            flags: ["The company uses sophisticated financial strategies."],
                            moneyCost: 3000000 // $3 million for financial services
                        }
                    },
                    {
                        text: "Adjust pricing and contracts to share currency risk",
                        explanation: "You renegotiate agreements with tenants and partners to distribute currency risk more evenly.",
                        outcome: {
                            metrics: { revenue: 0, customer_satisfaction: -2 },
                            values: { collaboration: 2, integrity: 1 },
                            factions: { co_owners: 2, security_holders: 1 },
                            moneyCost: 500000 // $500,000 for contract renegotiation
                        }
                    },
                    {
                        text: "Accept short-term losses while awaiting currency stabilization",
                        explanation: "You choose to weather the storm, absorbing losses with the expectation that currency markets will eventually normalize.",
                        outcome: {
                            metrics: { revenue: -4, employee_engagement: -1 },
                            values: { integrity: 2, excellence: -1 },
                            factions: { banks: -1, security_holders: -3, co_owners: 1 },
                            flags: ["The company has financial vulnerabilities in international markets."],
                            moneyCost: 8000000 // $8 million in absorbed losses
                        }
                    }
                ]
            },
            {
                id: "cross_border_acquisition",
                title: "Cross-Border Acquisition Opportunity",
                description: "A struggling international competitor has approached Pretty Close Centres about a potential acquisition of their properties.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally.", "The company has formed international partnerships."],
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
                            flags: ["The company is consolidating international markets."],
                            moneyCost: 100000000, // $100 million for acquisitions
                            veryImpactful: true // Major international growth
                        }
                    },
                    {
                        text: "Selectively acquire only the most promising properties",
                        explanation: "You conduct thorough due diligence and only purchase properties that perfectly complement your portfolio.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: 2 },
                            values: { excellence: 3, integrity: 2 },
                            factions: { banks: 0, security_holders: 2, co_owners: 1 },
                            moneyCost: 40000000 // $40 million for selective acquisitions
                        }
                    },
                    {
                        text: "Decline acquisition but form strategic alliance",
                        explanation: "Rather than acquiring assets, you create a partnership that benefits both companies without the financial commitment.",
                        outcome: {
                            metrics: { revenue: 0, employee_engagement: 1, customer_satisfaction: 2 },
                            values: { collaboration: 3, integrity: 2 },
                            factions: { banks: 1, security_holders: 0, co_owners: 3 },
                            flags: ["The company has formed international strategic alliances."],
                            moneyCost: 2000000 // $2 million for alliance setup
                        }
                    }
                ]
            },
            {
                id: "international_sustainability_standards",
                title: "International Sustainability Standards",
                description: "Your international properties are facing different sustainability requirements across markets, creating compliance challenges.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally.", "The company has formed international partnerships."],
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
                            flags: ["The company is a global sustainability leader."],
                            moneyCost: 12000000 // $12 million for global sustainability program
                        }
                    },
                    {
                        text: "Meet each market's minimum requirements efficiently",
                        explanation: "You create a tailored approach for each market that focuses on compliance without exceeding requirements.",
                        outcome: {
                            metrics: { revenue: -1, customer_satisfaction: 1 },
                            values: { integrity: 1, excellence: 1 },
                            factions: { regulators: 1, government: 1, security_holders: 1 },
                            moneyCost: 6000000 // $6 million for varied compliance
                        }
                    },
                    {
                        text: "Focus sustainability investments on high-visibility markets only",
                        explanation: "You strategically invest in sustainability only in markets where it provides the most reputational benefit.",
                        outcome: {
                            metrics: { revenue: 0, customer_satisfaction: 2 },
                            values: { integrity: -2, customer_focus: 2 },
                            factions: { regulators: -1, government: 1, security_holders: 2 },
                            flags: ["The company takes a selective approach to sustainability."],
                            moneyCost: 4000000 // $4 million for selective sustainability
                        }
                    }
                ]
            },
            {
                id: "international_customer_preferences",
                title: "International Customer Preferences",
                description: "Your market research reveals significant differences in customer preferences between your domestic and international locations.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally.", "The company has formed international partnerships."],
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
                            flags: ["The company excels at localization."],
                            moneyCost: 15000000 // $15 million for localization
                        }
                    },
                    {
                        text: "Create a hybrid approach balancing global brand with local touches",
                        explanation: "You maintain core brand elements while adapting specific aspects to local markets.",
                        outcome: {
                            metrics: { revenue: 2, employee_engagement: 2, customer_satisfaction: 3 },
                            values: { customer_focus: 3, excellence: 3 },
                            factions: { security_holders: 2, co_owners: 2 },
                            moneyCost: 8000000 // $8 million for balanced approach
                        }
                    },
                    {
                        text: "Maintain consistent global experience with minimal customization",
                        explanation: "You standardize the Pretty Close Centres experience across all markets with only essential local adaptations.",
                        outcome: {
                            metrics: { revenue: 3, employee_engagement: 3, customer_satisfaction: -1 },
                            values: { excellence: 2, customer_focus: -2 },
                            factions: { security_holders: 3, co_owners: -1 },
                            flags: ["The company maintains global standardization."],
                            moneyCost: 3000000 // $3 million for standardization
                        }
                    }
                ]
            }
        ]
    });
    
    console.log("International Expansion Pack loaded successfully");
})();