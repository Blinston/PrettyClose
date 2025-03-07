// Executive Decision - International Expansion Pack
// This file adds new scenarios focused on international business opportunities and challenges
// Updated with cost elements, extended impacts, and human-readable flags

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
                            cost: 35000000, // $35M international expansion investment
                            metrics: { revenue: -3, employee_engagement: 2, customer_satisfaction: 0 },
                            values: { excellence: 3, collaboration: 1 },
                            factions: { banks: -2, security_holders: 4, co_owners: 1 },
                            flags: ["The company is expanding internationally", "The company has an aggressive growth strategy"]
                        }
                    },
                    {
                        text: "Form a joint venture with local partners",
                        explanation: "You pursue international expansion with local partners to mitigate risk and leverage their market knowledge.",
                        outcome: {
                            cost: 18000000, // $18M joint venture investment
                            metrics: { revenue: -1, employee_engagement: 1, customer_satisfaction: 1 },
                            values: { collaboration: 3, integrity: 1 },
                            factions: { banks: 0, security_holders: 2, co_owners: 3 },
                            flags: ["The company forms international partnerships", "The company takes a balanced approach to global expansion"]
                        }
                    },
                    {
                        text: "Decline the opportunity to focus on domestic growth",
                        explanation: "You decide that international expansion is too risky and choose to focus on Australian opportunities.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: -1 },
                            values: { excellence: 1, integrity: 2 },
                            factions: { banks: 2, security_holders: -1 },
                            flags: ["The company focuses on domestic opportunities", "The company has a conservative risk appetite"]
                        }
                    }
                ]
            },
            {
                id: "international_regulatory_challenge",
                title: "International Regulatory Challenge",
                description: "Your international property is facing unexpected regulatory changes that could significantly impact operations.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally", "The company forms international partnerships"]
                },
                choices: [
                    {
                        text: "Adapt fully to all new regulations",
                        explanation: "You commit to complete compliance with all new requirements regardless of cost.",
                        outcome: {
                            cost: 8000000, // $8M compliance costs
                            metrics: { revenue: -4, customer_satisfaction: 2 },
                            values: { integrity: 4, excellence: 2 },
                            factions: { regulators: 4, government: 3, security_holders: -2 },
                            flags: ["The company prioritizes global regulatory compliance", "The company adapts to local requirements"]
                        }
                    },
                    {
                        text: "Negotiate for regulatory concessions",
                        explanation: "You leverage your relationships to seek exemptions or modifications to the most challenging regulations.",
                        outcome: {
                            cost: 2000000, // $2M for lobbying and negotiation
                            metrics: { revenue: -1, customer_satisfaction: 0 },
                            values: { integrity: 0, collaboration: 2 },
                            factions: { regulators: 0, government: 1, security_holders: 1 },
                            flags: ["The company negotiates with regulators", "The company seeks regulatory compromises"]
                        }
                    },
                    {
                        text: "Consider divesting from this market",
                        explanation: "You begin exploring options to sell your international property if the regulatory burden becomes too great.",
                        outcome: {
                            cost: 1500000, // $1.5M for divestment analysis
                            metrics: { revenue: 2, employee_engagement: -2 },
                            values: { integrity: -1, excellence: -1 },
                            factions: { banks: 1, security_holders: 2, co_owners: -2 },
                            flags: ["The company is willing to exit difficult markets", "The company prioritizes regulatory simplicity"]
                        }
                    }
                ]
            },
            {
                id: "cultural_sensitivity_training",
                title: "Cultural Sensitivity Initiative",
                description: "Your HR director has proposed a comprehensive cultural sensitivity training program for all staff working with international partners and properties.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally", "The company forms international partnerships"]
                },
                choices: [
                    {
                        text: "Implement an extensive cross-cultural training program",
                        explanation: "You invest in comprehensive cultural training for all employees involved in international operations.",
                        outcome: {
                            cost: 2500000, // $2.5M training program
                            metrics: { revenue: -1, employee_engagement: 4, customer_satisfaction: 2 },
                            values: { respect: 4, collaboration: 3 },
                            factions: { co_owners: 3, government: 2 },
                            flags: ["The company invests in cross-cultural competence", "The company prioritizes global cultural understanding"]
                        }
                    },
                    {
                        text: "Provide basic cultural briefings for key personnel only",
                        explanation: "You opt for targeted training only for executives and managers who directly interface with international stakeholders.",
                        outcome: {
                            cost: 800000, // $800K targeted training
                            metrics: { revenue: 0, employee_engagement: 1 },
                            values: { respect: 1, collaboration: 0 },
                            factions: { co_owners: 1, government: 0 },
                            flags: ["The company provides targeted cultural training", "The company takes a practical approach to cultural differences"]
                        }
                    },
                    {
                        text: "Rely on local partners to navigate cultural differences",
                        explanation: "Rather than investing in training, you depend on your international partners to manage cultural nuances.",
                        outcome: {
                            metrics: { revenue: 1, employee_engagement: -1 },
                            values: { respect: -2, collaboration: 2 },
                            factions: { co_owners: 2, government: -1 },
                            flags: ["The company outsources cultural knowledge", "The company delegates cross-cultural issues to partners"]
                        }
                    }
                ]
            },
            {
                id: "currency_exchange_crisis",
                title: "Currency Exchange Crisis",
                description: "Sudden currency fluctuations are creating significant financial challenges for your international operations.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally", "The company forms international partnerships"],
                    minYear: 3
                },
                choices: [
                    {
                        text: "Implement sophisticated hedging strategies",
                        explanation: "You work with financial experts to develop advanced currency hedging to protect against future fluctuations.",
                        outcome: {
                            cost: 3000000, // $3M for financial instruments and advisors
                            metrics: { revenue: -2, employee_engagement: 0 },
                            values: { excellence: 3, integrity: 1 },
                            factions: { banks: 3, security_holders: 2 },
                            flags: ["The company uses sophisticated financial instruments", "The company manages global financial risks"]
                        }
                    },
                    {
                        text: "Adjust pricing and contracts to share currency risk",
                        explanation: "You renegotiate agreements with tenants and partners to distribute currency risk more evenly.",
                        outcome: {
                            cost: 500000, // $500K legal and negotiation costs
                            metrics: { revenue: 0, customer_satisfaction: -2 },
                            values: { collaboration: 2, integrity: 1 },
                            factions: { co_owners: 2, security_holders: 1 },
                            flags: ["The company shares financial risks with partners", "The company adapts contract structures"]
                        }
                    },
                    {
                        text: "Accept short-term losses while awaiting currency stabilization",
                        explanation: "You choose to weather the storm, absorbing losses with the expectation that currency markets will eventually normalize.",
                        outcome: {
                            cost: 6000000, // $6M in absorbed losses
                            metrics: { revenue: -4, employee_engagement: -1 },
                            values: { integrity: 2, excellence: -1 },
                            factions: { banks: -1, security_holders: -3, co_owners: 1 },
                            flags: ["The company absorbs financial fluctuations", "The company takes a long-term perspective"]
                        }
                    }
                ]
            },
            {
                id: "cross_border_acquisition",
                title: "Cross-Border Acquisition Opportunity",
                description: "A struggling international competitor has approached Pretty Close Centres about a potential acquisition of their properties.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally", "The company forms international partnerships"],
                    minYear: 4
                },
                choices: [
                    {
                        text: "Pursue aggressive acquisition strategy",
                        explanation: "You move quickly to acquire multiple properties at potentially favorable prices.",
                        outcome: {
                            cost: 55000000, // $55M acquisition cost
                            metrics: { revenue: 3, employee_engagement: 1 },
                            values: { excellence: 2, collaboration: -1 },
                            factions: { banks: -2, security_holders: 3, co_owners: -1 },
                            flags: ["The company acquires international assets", "The company pursues opportunistic growth"]
                        }
                    },
                    {
                        text: "Selectively acquire only the most promising properties",
                        explanation: "You conduct thorough due diligence and only purchase properties that perfectly complement your portfolio.",
                        outcome: {
                            cost: 25000000, // $25M selective acquisition
                            metrics: { revenue: 1, employee_engagement: 2 },
                            values: { excellence: 3, integrity: 2 },
                            factions: { banks: 0, security_holders: 2, co_owners: 1 },
                            flags: ["The company makes strategic international acquisitions", "The company conducts thorough acquisition analysis"]
                        }
                    },
                    {
                        text: "Decline acquisition but form strategic alliance",
                        explanation: "Rather than acquiring assets, you create a partnership that benefits both companies without the financial commitment.",
                        outcome: {
                            cost: 2000000, // $2M partnership setup
                            metrics: { revenue: 0, employee_engagement: 1, customer_satisfaction: 2 },
                            values: { collaboration: 3, integrity: 2 },
                            factions: { banks: 1, security_holders: 0, co_owners: 3 },
                            flags: ["The company forms international strategic alliances", "The company prioritizes partnerships over ownership"]
                        }
                    }
                ]
            },
            {
                id: "international_sustainability_standards",
                title: "International Sustainability Standards",
                description: "Your international properties are facing different sustainability requirements across markets, creating compliance challenges.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally", "The company forms international partnerships"],
                    minYear: 3
                },
                choices: [
                    {
                        text: "Implement global best practices across all properties",
                        explanation: "You develop and implement sustainability standards that exceed requirements in all markets.",
                        outcome: {
                            cost: 12000000, // $12M global sustainability implementation
                            metrics: { revenue: -3, customer_satisfaction: 4 },
                            values: { integrity: 4, excellence: 3 },
                            factions: { regulators: 4, government: 3, security_holders: -1 },
                            flags: ["The company is a global sustainability leader", "The company exceeds environmental regulations worldwide"]
                        }
                    },
                    {
                        text: "Meet each market's minimum requirements efficiently",
                        explanation: "You create a tailored approach for each market that focuses on compliance without exceeding requirements.",
                        outcome: {
                            cost: 7000000, // $7M market-specific compliance
                            metrics: { revenue: -1, customer_satisfaction: 1 },
                            values: { integrity: 1, excellence: 1 },
                            factions: { regulators: 1, government: 1, security_holders: 1 },
                            flags: ["The company adapts to local sustainability requirements", "The company takes a practical approach to global compliance"]
                        }
                    },
                    {
                        text: "Focus sustainability investments on high-visibility markets only",
                        explanation: "You strategically invest in sustainability only in markets where it provides the most reputational benefit.",
                        outcome: {
                            cost: 4000000, // $4M selective sustainability
                            metrics: { revenue: 0, customer_satisfaction: 2 },
                            values: { integrity: -2, customer_focus: 2 },
                            factions: { regulators: -1, government: 1, security_holders: 2 },
                            flags: ["The company applies different standards in different markets", "The company prioritizes visible sustainability efforts"]
                        }
                    }
                ]
            },
            {
                id: "international_customer_preferences",
                title: "International Customer Preferences",
                description: "Your market research reveals significant differences in customer preferences between your domestic and international locations.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally", "The company forms international partnerships"],
                    minYear: 2
                },
                choices: [
                    {
                        text: "Fully localize each property to match regional preferences",
                        explanation: "You customize each center completely to match local consumer behaviors and preferences.",
                        outcome: {
                            cost: 9000000, // $9M comprehensive localization
                            metrics: { revenue: 1, employee_engagement: -1, customer_satisfaction: "DOUBLE" }, // Double customer satisfaction
                            values: { customer_focus: 4, excellence: 2, collaboration: -1 },
                            factions: { co_owners: 3, security_holders: 1, regulators: 2 },
                            flags: ["The company fully adapts to local markets", "The company prioritizes regional customer preferences"]
                        }
                    },
                    {
                        text: "Create a hybrid approach balancing global brand with local touches",
                        explanation: "You maintain core brand elements while adapting specific aspects to local markets.",
                        outcome: {
                            cost: 5000000, // $5M hybrid adaptation
                            metrics: { revenue: 2, employee_engagement: 2, customer_satisfaction: 3 },
                            values: { customer_focus: 3, excellence: 3 },
                            factions: { security_holders: 2, co_owners: 2 },
                            flags: ["The company balances global standards with local adaptation", "The company creates a consistent yet adaptable brand"]
                        }
                    },
                    {
                        text: "Maintain consistent global experience with minimal customization",
                        explanation: "You standardize the Pretty Close Centres experience across all markets with only essential local adaptations.",
                        outcome: {
                            cost: 2000000, // $2M limited adaptation
                            metrics: { revenue: 3, employee_engagement: 3, customer_satisfaction: -1 },
                            values: { excellence: 2, customer_focus: -2 },
                            factions: { security_holders: 3, co_owners: -1 },
                            flags: ["The company maintains global standardization", "The company prioritizes brand consistency over local adaptation"]
                        }
                    }
                ]
            },
            {
                id: "geopolitical_tension",
                title: "Geopolitical Tension Impact",
                description: "Rising geopolitical tensions between Australia and a country where you operate are creating business uncertainty and public relations challenges.",
                conditions: {
                    requiredFlags: ["The company is expanding internationally", "The company forms international partnerships"],
                    minYear: 3
                },
                choices: [
                    {
                        text: "Maintain strict political neutrality and focus on business",
                        explanation: "You issue clear statements about being apolitical and focus purely on commercial operations.",
                        outcome: {
                            metrics: { revenue: -1, employee_engagement: 0, customer_satisfaction: 0 },
                            values: { integrity: 2, respect: 1 },
                            factions: { government: 0, security_holders: 1, regulators: 1 },
                            flags: ["The company maintains political neutrality", "The company separates business from politics"]
                        }
                    },
                    {
                        text: "Restructure operations to reduce exposure in the affected market",
                        explanation: "You gradually reduce your footprint in the market to minimize risks from the geopolitical situation.",
                        outcome: {
                            cost: 15000000, // $15M restructuring costs
                            metrics: { revenue: -3, employee_engagement: -2 },
                            values: { excellence: 1, collaboration: -2 },
                            factions: { government: 2, security_holders: 2, co_owners: -2 },
                            flags: ["The company adjusts to geopolitical risks", "The company reduces exposure in challenging markets"]
                        }
                    },
                    {
                        text: "Engage in diplomatic business leadership",
                        explanation: "You position the company as a bridge between countries, engaging with officials and business leaders on both sides.",
                        outcome: {
                            cost: 3000000, // $3M diplomatic efforts
                            metrics: { revenue: 0, employee_engagement: 3, customer_satisfaction: 2 },
                            values: { respect: 3, collaboration: 4, integrity: 3 },
                            factions: { government: 4, co_owners: 3, regulators: 2 },
                            flags: ["The company acts as a diplomatic business leader", "The company bridges international relationships"]
                        }
                    }
                ]
            }
        ]
    });
    
    console.log("International Expansion Pack loaded successfully");
})();
