// Examples of very impactful scenarios to add to the scenarios.js file

// Example of a very positive impactful scenario
{
    id: "major_acquisition_success",
    title: "Landmark Acquisition Triumph",
    description: "Your strategic acquisition of a competing shopping centre portfolio has exceeded all expectations, with synergies and performance far surpassing initial projections.",
    image: "success.jpg",
    conditions: {
        minYear: 3,
        requiredFlags: ["The company prioritizes financial performance."]
    },
    choices: [
        {
            text: "Leverage this success to pursue even more aggressive expansion",
            explanation: "You capitalize on the momentum to launch an even more ambitious growth strategy.",
            outcome: {
                metrics: { revenue: 15 },
                values: { excellence: 10, collaboration: -5 },
                factions: { security_holders: 15, banks: 10, co_owners: -5 },
                flags: ["The company has an aggressive risk appetite."],
                veryImpactful: true // This makes the positive changes double the metric
            }
        },
        {
            text: "Consolidate gains and focus on integration",
            explanation: "You focus on fully integrating the acquisition before making any new moves.",
            outcome: {
                metrics: { revenue: 8, employee_engagement: 5 },
                values: { excellence: 5, collaboration: 5 },
                factions: { security_holders: 8, co_owners: 5 }
            }
        },
        {
            text: "Share success through community investment",
            explanation: "You direct some of the acquisition gains toward community programs around your properties.",
            outcome: {
                metrics: { revenue: 5, customer_satisfaction: 10 },
                values: { respect: 7, integrity: 5, customer_focus: 8 },
                factions: { government: 10, regulators: 8, security_holders: -3 },
                flags: ["The company invests in communities."]
            }
        }
    ]
},

// Example of a very negative impactful scenario
{
    id: "major_corporate_scandal",
    title: "Corporate Scandal Erupts",
    description: "A major investigation has revealed serious ethical breaches in how property deals were structured at Pretty Close Centres before your tenure. The media is in a frenzy, and stakeholders are demanding answers.",
    image: "crisis.jpg",
    conditions: {
        minYear: 2,
        maxYear: 8
    },
    choices: [
        {
            text: "Accept full responsibility and implement sweeping reforms",
            explanation: "You take accountability for the organization's past mistakes and announce comprehensive reforms.",
            outcome: {
                metrics: { revenue: -10, employee_engagement: 8 },
                values: { integrity: 15, respect: 8 },
                factions: { security_holders: -8, regulators: 5 },
                flags: ["The company has undergone ethical reform."]
            }
        },
        {
            text: "Distance current leadership from past actions",
            explanation: "You emphasize that these issues predate your leadership and detail how things are different now.",
            outcome: {
                metrics: { revenue: -5, employee_engagement: -5 },
                values: { integrity: -10 },
                factions: { regulators: -8, government: -5, security_holders: -3 },
                veryImpactful: true // This makes the negative changes halve the metric
            }
        },
        {
            text: "Launch aggressive counter-narrative and legal defense",
            explanation: "You dispute the allegations and fight back through legal means and public relations.",
            outcome: {
                metrics: { revenue: -3, employee_engagement: -8, customer_satisfaction: -10 },
                values: { integrity: -15, respect: -10 },
                factions: { regulators: -15, government: -10 },
                flags: ["The company is in legal battles."],
                veryImpactful: true
            }
        }
    ]
}
