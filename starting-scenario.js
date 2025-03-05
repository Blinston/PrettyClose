// Add this scenario to the scenarios.js file

// Starting scenario that sets up the game
{
    id: "starting_scenario",
    title: "First Day as Executive",
    description: "Today is your first day as an executive at Pretty Close Centres, an ASX-listed property company specializing in shopping centres. The board has asked you to establish your strategic priorities that will guide your leadership approach.",
    image: "office.jpg",
    choices: [
        {
            text: "Focus on financial growth and shareholder returns",
            explanation: "You decide to prioritize revenue growth and shareholder value above all other considerations.",
            outcome: {
                metrics: { revenue: 10, employee_engagement: 3, customer_satisfaction: -5 },
                values: { excellence: 5, customer_focus: -3, integrity: -2 },
                factions: { security_holders: 10, banks: 8, regulators: -5 },
                flags: ["The company prioritizes financial performance.", "The company is shareholder focused."]
            }
        },
        {
            text: "Build a balanced business with strong stakeholder relationships",
            explanation: "You commit to a balanced approach that considers all stakeholders in your decision making.",
            outcome: {
                metrics: { revenue: 5, employee_engagement: 5, customer_satisfaction: 5 },
                values: { respect: 5, integrity: 5, collaboration: 5, customer_focus: 5, excellence: 5 },
                factions: { security_holders: 5, co_owners: 5, regulators: 5, government: 5, banks: 5 },
                flags: ["The company takes a balanced approach to stakeholders."]
            }
        },
        {
            text: "Establish a purpose-driven organization focused on community impact",
            explanation: "You declare that Pretty Close Centres will measure success by its positive impact on communities and society.",
            outcome: {
                metrics: { revenue: -5, employee_engagement: 10, customer_satisfaction: 10 },
                values: { respect: 8, integrity: 8, customer_focus: 7, collaboration: 5, excellence: 2 },
                factions: { government: 10, regulators: 7, co_owners: 5, security_holders: -8 },
                flags: ["The company has become purpose driven.", "The company prioritizes social impact."]
            }
        }
    ]
}
