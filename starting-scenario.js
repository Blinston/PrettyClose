// Executive Decision - Starting Scenario
// This file contains the initial scenario shown to the player at the start of a new game

// Add starting scenario to game scenarios
(function() {
    // Make sure gameScenarios exists
    if (!window.gameScenarios) {
        window.gameScenarios = [];
    }
    
    // Add the starting scenario
    window.gameScenarios.push({
        id: "starting_scenario",
        title: "Your First Day as Executive",
        description: "Welcome to your first day as an executive at Pretty Close Centres, one of Australia's leading shopping centre companies. The board has asked you to establish your strategic priorities for the coming years. This decision will significantly impact the company's direction.",
        image: "office.jpg",
        choices: [
            {
                text: "Focus on aggressive growth and financial performance",
                explanation: "You announce a strategy centered on ambitious expansion, acquisitions, and maximizing shareholder returns. Financial markets respond positively, but some stakeholders wonder about the long-term sustainability of this approach.",
                outcome: {
                    // No immediate cost but sets direction
                    metrics: { revenue: 15, employee_engagement: -5, customer_satisfaction: -2 },
                    values: { excellence: 5, customer_focus: -3, integrity: -2, respect: -3, collaboration: -1 },
                    factions: { banks: 8, security_holders: 15, co_owners: 3, regulators: -5, government: -3 },
                    flags: ["The company has an aggressive growth strategy", "The company prioritizes shareholder returns", "The company has an aggressive risk appetite"]
                }
            },
            {
                text: "Prioritize customer experience and retail innovation",
                explanation: "You announce a vision focused on transforming Pretty Close Centres into retail innovation hubs with exceptional customer experiences. Your strategy emphasizes technology integration, premium amenities, and partnerships with cutting-edge retailers.",
                outcome: {
                    cost: 2000000, // $2M initial investment in innovation
                    metrics: { revenue: 0, employee_engagement: 8, customer_satisfaction: 15 },
                    values: { excellence: 10, customer_focus: 15, collaboration: 5, respect: 3, integrity: 2 },
                    factions: { co_owners: 10, government: 5, regulators: 5, security_holders: -3, banks: 2 },
                    flags: ["The company is focused on premium experiences", "The company has embraced digital transformation", "The company prioritizes customer experience"]
                }
            },
            {
                text: "Emphasize corporate responsibility and sustainability",
                explanation: "You announce an ambitious vision for Pretty Close Centres as a leader in sustainable retail property development. Your strategy emphasizes environmental initiatives, community engagement, and ethical business practices, even if they sometimes come at the expense of short-term profits.",
                outcome: {
                    cost: 5000000, // $5M initial sustainability investment
                    metrics: { revenue: -5, employee_engagement: 12, customer_satisfaction: 8 },
                    values: { respect: 15, integrity: 15, collaboration: 10, customer_focus: 5, excellence: 3 },
                    factions: { government: 15, regulators: 12, security_holders: -8, banks: -3, co_owners: 5 },
                    flags: ["The company prioritizes corporate responsibility", "The company is an environmental leader", "The company has a conservative risk appetite"]
                }
            }
        ]
    });
    
    console.log("Starting scenario loaded successfully");
})();
