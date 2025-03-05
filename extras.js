// Executive Decision - Extras
// This file contains non-essential game content that enhances the experience
// but is not required for core gameplay functionality.
// The game will still function if this file fails to load.

// Detailed descriptions for bonuses that can be earned when metrics reach 100
window.gameBonuses = {
    // Core Metrics Bonuses
    revenue_max: {
        name: "Financial Excellence",
        description: "Your exceptional financial performance has made Pretty Close Centres a darling of the financial markets.",
        effect: "Reduces the negative impact of revenue-decreasing events by 25%."
    },
    employeeEngagement_max: {
        name: "Employer of Choice",
        description: "Your company has been recognized as one of Australia's best places to work, attracting top talent across the industry.",
        effect: "Employee engagement decreases more slowly and recovers more quickly after negative events."
    },
    customerSatisfaction_max: {
        name: "Customer Experience Leader",
        description: "Your shopping centres have become the gold standard for customer experience in retail property.",
        effect: "Each customer satisfaction point above 50 provides a small boost to revenue."
    },
    
    // Corporate Values Bonuses
    respect_max: {
        name: "Culture of Respect",
        description: "Pretty Close Centres is known industry-wide for its respectful treatment of employees, partners, and communities.",
        effect: "Automatically gain +1 to employee engagement each year."
    },
    integrity_max: {
        name: "Beacon of Integrity",
        description: "Your company's unwavering commitment to ethical business practices has earned universal trust.",
        effect: "+25% positive effect on regulator and government reputation from integrity-aligned decisions."
    },
    collaboration_max: {
        name: "Collaborative Powerhouse",
        description: "Pretty Close Centres' collaborative approach to business has created a network of strong partnerships.",
        effect: "Joint ventures and partnerships provide additional benefits."
    },
    customerFocus_max: {
        name: "Customer Obsessed",
        description: "Your organization has customer needs at the center of every decision, creating exceptional loyalty.",
        effect: "Customer satisfaction recovers faster from negative events and grows more quickly from positive ones."
    },
    excellence_max: {
        name: "Operational Excellence",
        description: "Pretty Close Centres sets the standard for excellence in execution across all business functions.",
        effect: "All excellence-related decisions receive a +20% bonus to their positive effects."
    },
    
    // Faction Bonuses
    banks_max: {
        name: "Financial Institution Favorite",
        description: "Banks compete aggressively to finance your projects, offering you preferential terms.",
        effect: "Revenue costs of expansion are reduced by 20%."
    },
    coOwners_max: {
        name: "Partner of Choice",
        description: "Your reputation as an ideal joint venture partner makes you the first call for new opportunities.",
        effect: "Gain access to exclusive joint venture scenarios with enhanced benefits."
    },
    regulators_max: {
        name: "Regulatory Gold Standard",
        description: "Regulators view Pretty Close Centres as the model for industry compliance and best practices.",
        effect: "Regulatory approval processes are expedited, reducing delays in new projects."
    },
    government_max: {
        name: "Government Ally",
        description: "Government entities at all levels view your company as a trusted development partner.",
        effect: "Gain early access to information about public infrastructure projects and development opportunities."
    },
    securityHolders_max: {
        name: "Shareholder Darling",
        description: "Investors have complete confidence in management's strategy and execution.",
        effect: "Negative security holder reputation impacts are reduced by 50%."
    }
};

// Achievements that can be unlocked during gameplay
window.gameAchievements = {
    long_term_success: {
        name: "Long-Term Success",
        description: "Survive for 10 years as an executive.",
        unlockCondition: "year >= 10"
    },
    balanced_excellence: {
        name: "Balanced Excellence",
        description: "Achieve 80+ in all core metrics simultaneously.",
        unlockCondition: "metrics.revenue >= 80 && metrics.employeeEngagement >= 80 && metrics.customerSatisfaction >= 80"
    },
    values_champion: {
        name: "Values Champion",
        description: "Reach 90+ in all corporate values.",
        unlockCondition: "values.respect >= 90 && values.integrity >= 90 && values.collaboration >= 90 && values.customerFocus >= 90 && values.excellence >= 90"
    },
    political_mastermind: {
        name: "Political Mastermind",
        description: "Maintain 75+ reputation with all factions simultaneously.",
        unlockCondition: "factions.banks >= 75 && factions.coOwners >= 75 && factions.regulators >= 75 && factions.government >= 75 && factions.securityHolders >= 75"
    },
    financial_wizard: {
        name: "Financial Wizard",
        description: "Maintain 95+ revenue for 3 consecutive years.",
        unlockCondition: "financialWizardYears >= 3"
    },
    peoples_champion: {
        name: "People's Champion",
        description: "Maintain 95+ employee engagement for 3 consecutive years.",
        unlockCondition: "peoplesChampionYears >= 3"
    },
    customer_hero: {
        name: "Customer Hero",
        description: "Maintain 95+ customer satisfaction for 3 consecutive years.",
        unlockCondition: "customerHeroYears >= 3"
    },
    bonus_collector: {
        name: "Bonus Collector",
        description: "Unlock 5 different bonuses.",
        unlockCondition: "activeBonuses.length >= 5"
    },
    perfect_balance: {
        name: "Perfect Balance",
        description: "Reach year 5 without any metric falling below 40.",
        unlockCondition: "year >= 5 && lowestMetricEver >= 40"
    }
};

// Tutorial messages for new players
window.gameTutorial = {
    welcome: {
        title: "Welcome to Executive Decision",
        content: "As an executive at Pretty Close Centres, you'll make strategic decisions that balance business performance, corporate values, and stakeholder relationships."
    },
    metrics: {
        title: "Understanding Metrics",
        content: "Your performance is measured through three core business metrics: Revenue, Employee Engagement, and Customer Satisfaction. If any drops to zero, your career is over!"
    },
    values: {
        title: "Corporate Values",
        content: "Pretty Close Centres has five core values: Respect, Integrity, Collaboration, Customer Focus, and Excellence. These values influence your decisions and relationships."
    },
    factions: {
        title: "Managing Relationships",
        content: "Your success depends on maintaining relationships with key stakeholders: Banks, Co-owners, Regulators, Government, and Security Holders."
    },
    decisions: {
        title: "Making Decisions",
        content: "Each scenario presents multiple choices with different impacts on your metrics, values, and relationships. Choose wisely to balance short-term gains against long-term sustainability."
    },
    bonuses: {
        title: "Earning Bonuses",
        content: "When any metric reaches 100, you'll unlock special bonuses that provide ongoing advantages. Check the Bonuses menu to see what you can earn."
    },
    survival: {
        title: "Game Objective",
        content: "Your goal is to survive as long as possible while building a successful, sustainable company that reflects your leadership priorities."
    },
    extensions: {
        title: "Scenario Extensions",
        content: "The game supports custom scenario packs that add new content. Check the 'View Scenario Packs' option in the menu to see what's installed."
    }
};

// Extended help content
window.gameHelp = {
    general: {
        title: "Game Overview",
        content: "Executive Decision is a corporate strategy game where you balance multiple competing priorities. Each decision affects your metrics, values, and relationships, with both immediate and long-term consequences."
    },
    metrics: {
        title: "Core Business Metrics",
        content: `
            <p><strong>Revenue:</strong> Represents the financial performance of Pretty Close Centres. Affected by business decisions, tenant relationships, and market conditions.</p>
            <p><strong>Employee Engagement:</strong> Reflects workforce morale, productivity, and loyalty. Influenced by corporate culture, compensation, and leadership style.</p>
            <p><strong>Customer Satisfaction:</strong> Measures how shoppers perceive your centres. Affected by tenant mix, amenities, maintenance, and customer service.</p>
        `
    },
    values: {
        title: "Corporate Values",
        content: `
            <p><strong>Respect:</strong> Shows how the company treats employees, partners, and communities. Influences workplace culture and reputation.</p>
            <p><strong>Integrity:</strong> Reflects ethical standards and transparency. Affects trust with regulators and partners.</p>
            <p><strong>Collaboration:</strong> Measures ability to work effectively with internal teams and external partners.</p>
            <p><strong>Customer Focus:</strong> Indicates prioritization of customer needs in decision-making.</p>
            <p><strong>Excellence:</strong> Represents commitment to high standards in operations and development.</p>
        `
    },
    factions: {
        title: "Stakeholder Relationships",
        content: `
            <p><strong>Banks:</strong> Financial institutions that provide debt financing. Good relationships mean better loan terms.</p>
            <p><strong>Co-owners:</strong> Joint venture partners in property developments. Strong relationships lead to better partnerships.</p>
            <p><strong>Regulators:</strong> Government oversight bodies that approve developments and monitor compliance.</p>
            <p><strong>Government:</strong> Local and state authorities that influence planning, taxes, and infrastructure.</p>
            <p><strong>Security Holders:</strong> Shareholders and investors who own securities in the company.</p>
        `
    },
    strategy: {
        title: "Strategic Advice",
        content: `
            <p><strong>Balance:</strong> Don't neglect any metric or relationship for too long. Even small deficits can compound over time.</p>
            <p><strong>Values Matter:</strong> Corporate values aren't just cosmetic - they significantly impact relationships and long-term performance.</p>
            <p><strong>Think Long-Term:</strong> Some decisions offer short-term gains at long-term costs. Consider future implications.</p>
            <p><strong>Adapt:</strong> Be prepared to shift strategy as market conditions and company situation evolves over the years.</p>
            <p><strong>Priorities:</strong> You can't excel at everything simultaneously. Choose areas of focus that align with your leadership vision.</p>
        `
    },
    extensions: {
        title: "Scenario Extensions",
        content: `
            <p><strong>What Are Extensions?</strong> Extensions are additional scenario packs that add new content to the game, focusing on specific themes or challenges.</p>
            <p><strong>Viewing Installed Extensions:</strong> You can see all loaded extension packs via the "View Scenario Packs" option in the menu.</p>
            <p><strong>How Extensions Work:</strong> Extension scenarios are seamlessly integrated with the base game scenarios, appearing when their conditions are met.</p>
            <p><strong>Creating Extensions:</strong> Advanced users can create custom scenario packs by adding new JavaScript files following the extension format.</p>
        `
    }
};

// Additional game statistics tracking functions
window.gameStats = {
    trackDecisionImpact: function(gameState, scenario, choiceIndex) {
        // Track the impact of each decision for detailed end-game statistics
        if (!gameState.stats.decisionImpacts) {
            gameState.stats.decisionImpacts = [];
        }
        
        const choice = scenario.choices[choiceIndex];
        const impact = {
            year: gameState.year,
            scenarioId: scenario.id,
            scenarioTitle: scenario.title,
            choice: choice.text,
            metrics: {},
            values: {},
            factions: {}
        };
        
        // Record metric changes
        if (choice.outcome.metrics) {
            for (const [metric, change] of Object.entries(choice.outcome.metrics)) {
                const mappedMetric = gameState.mapMetricName(metric);
                impact.metrics[mappedMetric] = change;
            }
        }
        
        // Record value changes
        if (choice.outcome.values) {
            for (const [value, change] of Object.entries(choice.outcome.values)) {
                const mappedValue = gameState.mapValueName(value);
                impact.values[mappedValue] = change;
            }
        }
        
        // Record faction changes
        if (choice.outcome.factions) {
            for (const [faction, change] of Object.entries(choice.outcome.factions)) {
                const mappedFaction = gameState.mapFactionName(faction);
                impact.factions[mappedFaction] = change;
            }
        }
        
        gameState.stats.decisionImpacts.push(impact);
    },
    
    generateEndGameReport: function(gameState) {
        // Generate a detailed end-game report with statistics and visualization data
        const report = {
            yearsSurvived: gameState.year,
            finalMetrics: {...gameState.metrics},
            finalValues: {...gameState.values},
            finalFactions: {...gameState.factions},
            activeBonuses: [...gameState.activeBonuses],
            flagsTriggered: [...gameState.stats.flagsTriggered],
            metricHistory: gameState.stats.metricHistory,
            achievements: [],
            topDecisions: []
        };
        
        // Calculate achievements
        for (const [id, achievement] of Object.entries(window.gameAchievements || {})) {
            const achieved = this.evaluateAchievement(gameState, achievement.unlockCondition);
            if (achieved) {
                report.achievements.push({
                    id,
                    name: achievement.name,
                    description: achievement.description
                });
            }
        }
        
        // Find most impactful decisions
        if (gameState.stats.decisionImpacts && gameState.stats.decisionImpacts.length > 0) {
            // Sort by absolute total impact across all metrics, values, and factions
            const sortedImpacts = [...gameState.stats.decisionImpacts].sort((a, b) => {
                const getTotalImpact = (impact) => {
                    let total = 0;
                    for (const change of Object.values(impact.metrics)) {
                        total += Math.abs(change);
                    }
                    for (const change of Object.values(impact.values)) {
                        total += Math.abs(change);
                    }
                    for (const change of Object.values(impact.factions)) {
                        total += Math.abs(change);
                    }
                    return total;
                };
                
                return getTotalImpact(b) - getTotalImpact(a);
            });
            
            // Take top 5 most impactful decisions
            report.topDecisions = sortedImpacts.slice(0, 5).map(impact => ({
                year: impact.year,
                scenarioTitle: impact.scenarioTitle,
                choice: impact.choice
            }));
        }
        
        return report;
    },
    
    evaluateAchievement: function(gameState, condition) {
        // Simple evaluation of achievement conditions
        // In a real implementation, this would use a proper condition parser
        try {
            // Create context for condition evaluation
            const context = {
                year: gameState.year,
                metrics: gameState.metrics,
                values: gameState.values,
                factions: gameState.factions,
                activeBonuses: gameState.activeBonuses,
                
                // Special tracking variables that would be maintained by the game
                financialWizardYears: 0, // Example placeholder
                peoplesChampionYears: 0, // Example placeholder
                customerHeroYears: 0, // Example placeholder
                lowestMetricEver: 40 // Example placeholder
            };
            
            // Simple condition evaluator (this is a simplified example)
            // In reality, you'd use a proper expression evaluator
            // This is just to illustrate the concept
            const result = eval(`with (context) { ${condition} }`);
            return result;
        } catch (error) {
            console.error("Error evaluating achievement condition:", error);
            return false;
        }
    }
};

// Enhanced feedback messages for player decisions
window.gameFeedback = {
    getBonusUnlockMessage: function(bonusId) {
        const bonus = window.gameBonuses[bonusId];
        if (!bonus) return "You've unlocked a new bonus!";
        
        return `<strong>Bonus Unlocked: ${bonus.name}</strong><br>${bonus.description}<br><em>Effect: ${bonus.effect}</em>`;
    },
    
    getYearSummary: function(gameState, previousYearStats) {
        let summary = `<h4>Year ${gameState.year - 1} Summary</h4>`;
        
        // Compare current metrics with previous year
        if (previousYearStats && previousYearStats.metrics) {
            summary += '<p><strong>Annual Performance:</strong></p>';
            summary += '<ul>';
            
            // Revenue change
            const revChange = gameState.metrics.revenue - previousYearStats.metrics.revenue;
            const revChangeClass = revChange > 0 ? 'positive' : (revChange < 0 ? 'negative' : 'neutral');
            summary += `<li class="${revChangeClass}">Revenue: ${revChange > 0 ? '+' : ''}${revChange.toFixed(1)}</li>`;
            
            // Employee Engagement change
            const engChange = gameState.metrics.employeeEngagement - previousYearStats.metrics.employeeEngagement;
            const engChangeClass = engChange > 0 ? 'positive' : (engChange < 0 ? 'negative' : 'neutral');
            summary += `<li class="${engChangeClass}">Employee Engagement: ${engChange > 0 ? '+' : ''}${engChange.toFixed(1)}</li>`;
            
            // Customer Satisfaction change
            const satChange = gameState.metrics.customerSatisfaction - previousYearStats.metrics.customerSatisfaction;
            const satChangeClass = satChange > 0 ? 'positive' : (satChange < 0 ? 'negative' : 'neutral');
            summary += `<li class="${satChangeClass}">Customer Satisfaction: ${satChange > 0 ? '+' : ''}${satChange.toFixed(1)}</li>`;
            
            summary += '</ul>';
        }
        
        // Add any notable events from the year
        if (gameState.yearEvents && gameState.yearEvents.length > 0) {
            summary += '<p><strong>Notable Events:</strong></p>';
            summary += '<ul>';
            for (const event of gameState.yearEvents) {
                summary += `<li>${event}</li>`;
            }
            summary += '</ul>';
        }
        
        return summary;
    },
    
    getMetricWarning: function(metricName, value) {
        if (value <= 20) {
            switch(metricName) {
                case 'revenue':
                    return "URGENT: Financial crisis imminent. Immediate action required to prevent bankruptcy.";
                case 'employeeEngagement':
                    return "CRITICAL: Employee morale has collapsed. Mass resignations are likely without intervention.";
                case 'customerSatisfaction':
                    return "ALERT: Customer exodus in progress. Shopping centres experiencing alarming decline in foot traffic.";
                default:
                    return `WARNING: ${metricName} is at a critically low level.`;
            }
        } else if (value <= 35) {
            switch(metricName) {
                case 'revenue':
                    return "WARNING: Financial performance is concerning shareholders and creditors.";
                case 'employeeEngagement':
                    return "CAUTION: Employee dissatisfaction is increasing turnover and affecting performance.";
                case 'customerSatisfaction':
                    return "WARNING: Customer complaints are rising and tenant sales are beginning to suffer.";
                default:
                    return `CAUTION: ${metricName} is at a concerning level.`;
            }
        }
        
        return null; // No warning needed
    },
    
    getValueWarning: function(valueName, rating) {
        if (rating <= 20) {
            switch(valueName) {
                case 'respect':
                    return "CRITICAL: Company culture has become toxic and dysfunctional.";
                case 'integrity':
                    return "URGENT: Serious ethical concerns are threatening company reputation and regulatory standing.";
                case 'collaboration':
                    return "ALERT: Organizational silos are preventing effective cooperation and decision-making.";
                case 'customerFocus':
                    return "CRITICAL: The company has lost sight of customer needs, endangering its market position.";
                case 'excellence':
                    return "URGENT: Quality and performance standards have deteriorated to dangerous levels.";
                default:
                    return `WARNING: ${valueName} is at a critically low level.`;
            }
        } else if (rating <= 35) {
            switch(valueName) {
                case 'respect':
                    return "WARNING: Respect issues are causing increased workplace tension and complaints.";
                case 'integrity':
                    return "CAUTION: Integrity concerns are beginning to affect trust with key stakeholders.";
                case 'collaboration':
                    return "WARNING: Collaboration challenges are hindering project execution and partnerships.";
                case 'customerFocus':
                    return "CAUTION: Customer needs are not being prioritized consistently across the organization.";
                case 'excellence':
                    return "WARNING: Quality and performance standards are slipping below industry expectations.";
                default:
                    return `CAUTION: ${valueName} is at a concerning level.`;
            }
        }
        
        return null; // No warning needed
    },
    
    getFactionWarning: function(factionName, rating) {
        if (rating <= 20) {
            switch(factionName) {
                case 'banks':
                    return "URGENT: Banking relationships severely strained. Loan covenant breaches likely.";
                case 'coOwners':
                    return "CRITICAL: Joint venture partners considering legal action over disagreements.";
                case 'regulators':
                    return "ALERT: Regulatory scrutiny has intensified with potential for formal investigation.";
                case 'government':
                    return "URGENT: Government opposition threatens approvals and operating permissions.";
                case 'securityHolders':
                    return "CRITICAL: Investor revolt brewing with calls for leadership changes.";
                default:
                    return `WARNING: Relationship with ${factionName} is at a critically low level.`;
            }
        } else if (rating <= 35) {
            switch(factionName) {
                case 'banks':
                    return "WARNING: Banking partners expressing concerns about company direction.";
                case 'coOwners':
                    return "CAUTION: Joint venture partners raising issues with management approach.";
                case 'regulators':
                    return "WARNING: Regulatory compliance issues requiring immediate attention.";
                case 'government':
                    return "CAUTION: Government stakeholders expressing reservations about company activities.";
                case 'securityHolders':
                    return "WARNING: Investors questioning strategy and demanding improved performance.";
                default:
                    return `CAUTION: Relationship with ${factionName} needs attention.`;
            }
        }
        
        return null; // No warning needed
    }
};

// Capture startup functionality in a function to handle loading errors gracefully
window.initExtras = function() {
    console.log("Extras module loaded successfully");
    // This function could perform additional initialization if needed
};

// Initialize extras if this file loads
window.initExtras();