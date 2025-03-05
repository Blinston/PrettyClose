// Examples of scenarios involving money costs to add to the scenarios.js file

// High-cost renovation scenario
{
    id: "major_renovation_project",
    title: "Major Centre Renovation",
    description: "Your flagship shopping centre is showing its age, and market research indicates that a significant renovation could substantially increase foot traffic and rental rates.",
    image: "construction.jpg",
    choices: [
        {
            text: "Approve full luxury renovation with premium amenities",
            explanation: "You commit to a comprehensive renovation with high-end finishes and premium facilities.",
            outcome: {
                metrics: { revenue: 8, customer_satisfaction: 10 },
                values: { excellence: 8, customer_focus: 5 },
                factions: { co_owners: 5, security_holders: -2 },
                moneyCost: 15000000 // $15 million
            }
        },
        {
            text: "Implement targeted renovation of key areas only",
            explanation: "You approve a focused renovation of only the most critical areas to improve appearance and function.",
            outcome: {
                metrics: { revenue: 5, customer_satisfaction: 6 },
                values: { excellence: 3, customer_focus: 3 },
                factions: { co_owners: 3, security_holders: 1 },
                moneyCost: 7000000 // $7 million
            }
        },
        {
            text: "Defer renovation for another year",
            explanation: "You decide to postpone the renovation to conserve capital for other priorities.",
            outcome: {
                metrics: { revenue: -2, customer_satisfaction: -3 },
                values: { excellence: -2, customer_focus: -3 },
                factions: { co_owners: -2, security_holders: 2 },
                flags: ["The company postponed renovations."]
            }
        }
    ]
},

// Technology investment scenario
{
    id: "retail_technology_investment",
    title: "Retail Technology Investment",
    description: "Your digital team has proposed an advanced customer analytics platform that would give tenants unprecedented insights into shopper behavior across your centres.",
    image: "technology.jpg",
    choices: [
        {
            text: "Invest in enterprise-grade solution for all properties",
            explanation: "You approve the full implementation across your entire portfolio with premium features.",
            outcome: {
                metrics: { revenue: 6, customer_satisfaction: 4 },
                values: { excellence: 6, customer_focus: 4, collaboration: 5 },
                factions: { security_holders: 3, co_owners: 5 },
                moneyCost: 5000000, // $5 million
                flags: ["The company is technology focused."]
            }
        },
        {
            text: "Pilot at three top-performing centres first",
            explanation: "You approve a limited pilot program to test the technology before broader deployment.",
            outcome: {
                metrics: { revenue: 2, customer_satisfaction: 2 },
                values: { excellence: 3, customer_focus: 2 },
                factions: { security_holders: 1, co_owners: 2 },
                moneyCost: 1500000 // $1.5 million
            }
        },
        {
            text: "Decline the proposal as too expensive",
            explanation: "You determine that the cost outweighs the potential benefits at this time.",
            outcome: {
                metrics: { revenue: -1, customer_satisfaction: -1 },
                values: { excellence: -2, customer_focus: -2 },
                factions: { security_holders: 2 },
                flags: ["The company is conservative with technology investments."]
            }
        }
    ]
},

// Security investment scenario
{
    id: "security_infrastructure",
    title: "Security Infrastructure Upgrade",
    description: "Your head of operations has recommended a comprehensive security upgrade across all properties, including advanced surveillance systems and enhanced security personnel training.",
    image: "security.jpg",
    choices: [
        {
            text: "Implement state-of-the-art security across all properties",
            explanation: "You invest in cutting-edge security technology and comprehensive training for all centres.",
            outcome: {
                metrics: { customer_satisfaction: 5 },
                values: { excellence: 4, customer_focus: 5 },
                factions: { regulators: 3, government: 2 },
                moneyCost: 3500000, // $3.5 million
                flags: ["The company prioritizes security."]
            }
        },
        {
            text: "Upgrade high-risk locations only",
            explanation: "You approve security upgrades only for centres with higher incident rates.",
            outcome: {
                metrics: { customer_satisfaction: 2 },
                values: { excellence: 1, customer_focus: 2 },
                factions: { regulators: 1, government: 1 },
                moneyCost: 1200000 // $1.2 million
            }
        },
        {
            text: "Increase security staff without technology upgrades",
            explanation: "You choose to enhance the human element of security without costly technology investments.",
            outcome: {
                metrics: { customer_satisfaction: 1 },
                values: { customer_focus: 1 },
                factions: { regulators: 0, government: 0 },
                moneyCost: 500000 // $500,000
            }
        }
    ]
}
