// Executive Decision - Core Game Logic
// This file contains the core game functionality

// Core Game Logic
class GameState {
    constructor() {
        // Initialize core business metrics
        this.metrics = {
            revenue: 50,
            employeeEngagement: 50,
            customerSatisfaction: 50
        };

        // Initialize cash
        this.cash = 10000000; // Starting with $10M cash

        // Initialize corporate values
        this.values = {
            respect: 50,
            integrity: 50,
            collaboration: 50,
            customerFocus: 50,
            excellence: 50
        };

        // Initialize faction reputations
        this.factions = {
            banks: 50,
            coOwners: 50,
            regulators: 50,
            government: 50,
            securityHolders: 50
        };

        // Game progression
        this.year = 1;
        this.week = 1;
        this.scenariosHandled = 0;
        this.activeBonuses = [];

        // Game state flags - using human readable phrases
        this.flags = {};
        
        // Flag opposites for handling mutually exclusive flags
        this.oppositeFlags = {
            "The company has a conservative risk appetite": "The company has an aggressive risk appetite",
            "The company has an aggressive risk appetite": "The company has a conservative risk appetite",
            "The company is focused on premium experiences": "The company is focused on cost efficiency",
            "The company is focused on cost efficiency": "The company is focused on premium experiences",
            "The company prioritizes employee wellbeing": "The company prioritizes shareholder returns",
            "The company prioritizes shareholder returns": "The company prioritizes employee wellbeing",
            "The company has embraced digital transformation": "The company maintains traditional operations",
            "The company maintains traditional operations": "The company has embraced digital transformation"
        };
        
        // News feed entries
        this.newsFeed = [];
        
        // Statistics
        this.stats = {
            decisionsPerYear: {},
            metricHistory: {},
            flagsTriggered: [],
            cashFlow: {}
        };
        
        // Player info
        this.playerEmail = "";
    }

    // Calculate weekly income based on revenue and employee engagement
    calculateWeeklyIncome() {
        // Base weekly income of $1M at revenue 50
        const baseWeeklyIncome = 2000000;
        
        // More dramatic scaling based on revenue
        // At revenue 100, this would be 2.5x base income ($2.5M/week)
        // At revenue 25, this would be 0.35x base income ($350K/week)
        const revenueMultiplier = Math.pow(this.metrics.revenue / 50, 1.5);
        
        // Stronger boost based on employee engagement (up to 40% at max engagement)
        const engagementBoost = 1 + (this.metrics.employeeEngagement / 250); // 0.4 at 100 engagement
        
        // Calculate final weekly income
        const weeklyIncome = Math.round(baseWeeklyIncome * revenueMultiplier * engagementBoost);
        
        return weeklyIncome;
    }

    // Set player email
    setPlayerEmail(email) {
        this.playerEmail = email;
    }

    // Apply scenario outcome effects
    applyOutcome(scenario, choice, outcome) {
        let effects = {
            metrics: {},
            values: {},
            factions: {},
            flags: [],
            cost: outcome.cost || 0
        };

        // Apply cost if specified
        if (outcome.cost) {
            this.cash -= outcome.cost;
            effects.cashImpact = -outcome.cost;
        }

        // Apply effects to metrics
        if (outcome.metrics) {
            for (const [metric, change] of Object.entries(outcome.metrics)) {
                const mappedMetric = this.mapMetricName(metric);
                if (this.metrics.hasOwnProperty(mappedMetric)) {
                    // Check for special "double" or "halve" effects
                    let finalChange = change;
                    if (change === "DOUBLE") {
                        finalChange = this.metrics[mappedMetric]; // Will double the current value
                    } else if (change === "HALVE") {
                        finalChange = -Math.ceil(this.metrics[mappedMetric] / 2); // Will halve the current value
                    }
                    
                    const originalValue = this.metrics[mappedMetric];
                    this.metrics[mappedMetric] = Math.max(0, Math.min(100, this.metrics[mappedMetric] + finalChange));
                    effects.metrics[mappedMetric] = {
                        previous: originalValue,
                        change: finalChange,
                        current: this.metrics[mappedMetric]
                    };
                }
            }
        }

        // Apply effects to values
        if (outcome.values) {
            for (const [value, change] of Object.entries(outcome.values)) {
                const mappedValue = this.mapValueName(value);
                if (this.values.hasOwnProperty(mappedValue)) {
                    const originalValue = this.values[mappedValue];
                    this.values[mappedValue] = Math.max(0, Math.min(100, this.values[mappedValue] + change));
                    effects.values[mappedValue] = {
                        previous: originalValue,
                        change: change,
                        current: this.values[mappedValue]
                    };
                }
            }
        }

        // Apply effects to factions
        if (outcome.factions) {
            for (const [faction, change] of Object.entries(outcome.factions)) {
                const mappedFaction = this.mapFactionName(faction);
                if (this.factions.hasOwnProperty(mappedFaction)) {
                    const originalValue = this.factions[mappedFaction];
                    this.factions[mappedFaction] = Math.max(0, Math.min(100, this.factions[mappedFaction] + change));
                    effects.factions[mappedFaction] = {
                        previous: originalValue,
                        change: change,
                        current: this.factions[mappedFaction]
                    };
                }
            }
        }

        // Set flags - using human readable phrases
        if (outcome.flags) {
            for (const flag of outcome.flags) {
                // Convert snake_case flag to human readable phrase if needed
                const readableFlag = this.convertFlagToReadable(flag);
                
                // Check if this flag has an opposite
                if (this.oppositeFlags[readableFlag]) {
                    // Remove the opposite flag if it exists
                    delete this.flags[this.oppositeFlags[readableFlag]];
                }
                
                // Set the flag
                this.flags[readableFlag] = true;
                effects.flags.push(readableFlag);
                
                if (!this.stats.flagsTriggered.includes(readableFlag)) {
                    this.stats.flagsTriggered.push(readableFlag);
                }
            }
        }

        // Generate news feed entry
        this.addNewsEntry(scenario, choice, effects);

        // Track statistics
        this.scenariosHandled++;
        this.week++;
        
        if (!this.stats.decisionsPerYear[this.year]) {
            this.stats.decisionsPerYear[this.year] = 0;
        }
        this.stats.decisionsPerYear[this.year]++;

        // Add weekly income
        const weeklyIncome = this.calculateWeeklyIncome();
        this.cash += weeklyIncome;

        // Track in cash flow statistics
        if (!this.stats.cashFlow[this.year]) {
            this.stats.cashFlow[this.year] = {
                income: weeklyIncome,
                expenses: outcome.cost || 0,
                net: weeklyIncome - (outcome.cost || 0)
            };
        } else {
            this.stats.cashFlow[this.year].income += weeklyIncome;
            this.stats.cashFlow[this.year].expenses += (outcome.cost || 0);
            this.stats.cashFlow[this.year].net += weeklyIncome - (outcome.cost || 0);
        }

        // Add income to effects for news feed
        effects.weeklyIncome = weeklyIncome;
        if (!effects.cashImpact) {
            effects.cashImpact = weeklyIncome;
        } else {
            effects.cashImpact += weeklyIncome;
        }

        // Check for year advancement (after 52 scenarios/weeks)
        if (this.week > 52) {
            return this.advanceYear();
        }

        // Check for cash crisis
        if (this.cash <= 0) {
            return { cashCrisis: true };
        }

        // Check for any max value bonuses
        this.checkForBonuses();

        return { effects, yearEnd: false, cashCrisis: false };
    }
    
    // Convert snake_case flag to human readable phrase
    convertFlagToReadable(flag) {
        // Check if the flag is already in a readable format
        if (flag.includes(" ")) return flag;
        
        // Convert snake_case to readable format
        const words = flag.split('_');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return `The company ${capitalizedWords.join(' ')}`;
    }
    
    // Add entry to news feed
    addNewsEntry(scenario, choice, effects) {
        // Create a basic news entry
        let entry = {
            title: scenario.title,
            decision: choice.text,
            explanation: choice.explanation || "",
            effects: effects,
            year: this.year,
            week: this.week,
            timestamp: new Date().toISOString()
        };
        
        // Add value alignment if significant
        const valueImpacts = [];
        if (effects.values) {
            for (const [value, data] of Object.entries(effects.values)) {
                if (Math.abs(data.change) >= 3) {
                    valueImpacts.push({
                        value: value,
                        impact: data.change,
                        alignment: data.change > 0 ? "aligned" : "against"
                    });
                }
            }
        }
        
        if (valueImpacts.length > 0) {
            entry.valueAlignments = valueImpacts;
        }
        
        // Add stakeholder impacts if significant
        const stakeholderImpacts = [];
        if (effects.factions) {
            for (const [faction, data] of Object.entries(effects.factions)) {
                if (Math.abs(data.change) >= 2) {
                    stakeholderImpacts.push({
                        stakeholder: faction,
                        impact: data.change
                    });
                }
            }
        }
        
        if (stakeholderImpacts.length > 0) {
            entry.stakeholderImpacts = stakeholderImpacts;
        }
        
        // Add financial impact if any
        if (effects.cashImpact) {
            entry.cashImpact = effects.cashImpact;
        }
        
        // Add to the news feed (at the beginning for reverse chronological order)
        this.newsFeed.unshift(entry);
    }

    // Helper method to map metric names from scenarios to property names
    mapMetricName(metricName) {
        const metricMap = {
            'revenue': 'revenue',
            'employee_engagement': 'employeeEngagement',
            'customer_satisfaction': 'customerSatisfaction'
        };
        return metricMap[metricName] || metricName;
    }

    // Helper method to map value names from scenarios to property names
    mapValueName(valueName) {
        const valueMap = {
            'respect': 'respect',
            'integrity': 'integrity',
            'collaboration': 'collaboration',
            'customer_focus': 'customerFocus',
            'excellence': 'excellence'
        };
        return valueMap[valueName] || valueName;
    }

    // Helper method to map faction names from scenarios to property names
    mapFactionName(factionName) {
        const factionMap = {
            'banks': 'banks',
            'co_owners': 'coOwners',
            'regulators': 'regulators',
            'government': 'government',
            'security_holders': 'securityHolders'
        };
        return factionMap[factionName] || factionName;
    }

    // Advance to the next year
    advanceYear() {
        // Save current metrics to history before advancing
        this.recordMetricHistory();
        
        // Generate the annual report
        const annualReport = this.generateAnnualReport();
        
        // Increment year and reset week counter
        this.year++;
        this.week = 1;
        
        // Apply yearly effects
        this.applyYearlyEffects();
        
        return { yearEnd: true, annualReport: annualReport, cashCrisis: this.cash <= 0 };
    }

    // Generate annual report
    generateAnnualReport() {
        const previousYearStats = this.stats.metricHistory[this.year - 1];
        const startYearStats = this.stats.metricHistory[this.year - 1]?.startYear || {};
        
        return {
            year: this.year - 1,
            metrics: { ...this.metrics },
            values: { ...this.values },
            factions: { ...this.factions },
            cash: this.cash,
            revenue: this.metrics.revenue,
            changes: {
                metrics: this.compareWithPrevious(this.metrics, startYearStats.metrics || {}),
                values: this.compareWithPrevious(this.values, startYearStats.values || {}),
                factions: this.compareWithPrevious(this.factions, startYearStats.factions || {})
            },
            activeBonuses: [...this.activeBonuses],
            flags: Object.keys(this.flags),
            cashFlow: this.stats.cashFlow[this.year - 1] || { income: 0, expenses: 0, net: 0 }
        };
    }
    
    // Helper to compare current stats with previous
    compareWithPrevious(current, previous) {
        const changes = {};
        for (const [key, value] of Object.entries(current)) {
            changes[key] = {
                current: value,
                previous: previous[key] || 0,
                change: value - (previous[key] || 0)
            };
        }
        return changes;
    }

    // Record metric history for charts/statistics
    recordMetricHistory() {
        if (!this.stats.metricHistory[this.year]) {
            this.stats.metricHistory[this.year] = {
                startYear: {
                    metrics: {...this.metrics},
                    values: {...this.values},
                    factions: {...this.factions},
                    cash: this.cash
                },
                endYear: null
            };
        }
        
        // Update end year stats
        this.stats.metricHistory[this.year].endYear = {
            metrics: {...this.metrics},
            values: {...this.values},
            factions: {...this.factions},
            cash: this.cash
        };
    }

    // Process security holder distribution decision
    processDistribution(percentage) {
        const distributionAmount = (percentage / 100) * this.cash;
        
        // Deduct from cash
        this.cash -= distributionAmount;
        
        // Effect on security holder relationship
        let relationshipEffect = 0;
        
        if (percentage >= 40) {
            relationshipEffect = 10; // Substantial distribution, very happy
        } else if (percentage >= 25) {
            relationshipEffect = 5; // Moderate distribution, happy
        } else if (percentage >= 10) {
            relationshipEffect = 2; // Minimal distribution, slightly happy
        } else {
            relationshipEffect = -5; // Very small or no distribution, unhappy
        }
        
        // Apply effect to security holder relationship
        const originalValue = this.factions.securityHolders;
        this.factions.securityHolders = Math.max(0, Math.min(100, this.factions.securityHolders + relationshipEffect));
        
        // Add to news feed
        this.newsFeed.unshift({
            title: "Annual Security Holder Distribution",
            decision: `Distribute ${percentage}% of available cash (${this.formatCurrency(distributionAmount)})`,
            explanation: `The annual distribution to security holders has been processed.`,
            effects: {
                cashImpact: -distributionAmount,
                factions: {
                    securityHolders: {
                        previous: originalValue,
                        change: relationshipEffect,
                        current: this.factions.securityHolders
                    }
                }
            },
            year: this.year,
            week: this.week,
            timestamp: new Date().toISOString()
        });
        
        return {
            amount: distributionAmount,
            relationshipEffect: relationshipEffect
        };
    }

    // Apply yearly effects (could be adjusted for difficulty)
    applyYearlyEffects() {
        // Natural slight decline in metrics to create challenge
        this.metrics.revenue = Math.max(0, this.metrics.revenue - 2);
        this.metrics.employeeEngagement = Math.max(0, this.metrics.employeeEngagement - 1);
        
        // Apply active bonuses
        this.applyActiveBonuses();
    }
    
    // Apply any active bonuses
    applyActiveBonuses() {
        for (const bonus of this.activeBonuses) {
            switch(bonus) {
                case "respect_max":
                    // Automatically gain +1 to employee engagement each year
                    this.metrics.employeeEngagement = Math.min(100, this.metrics.employeeEngagement + 1);
                    break;
                // Add other bonus effects here
            }
        }
    }

    // Check for any bonuses from maxed metrics/values
    checkForBonuses() {
        // Check core metrics
        for (const [metric, value] of Object.entries(this.metrics)) {
            if (value >= 100 && !this.activeBonuses.includes(`${metric}_max`)) {
                this.activeBonuses.push(`${metric}_max`);
                // Add to news feed
                this.newsFeed.unshift({
                    title: "Bonus Unlocked",
                    explanation: `You've reached maximum ${this.getDisplayName(metric)} and unlocked a special bonus!`,
                    year: this.year,
                    week: this.week,
                    timestamp: new Date().toISOString()
                });
            }
        }
        
        // Check values
        for (const [value, rating] of Object.entries(this.values)) {
            if (rating >= 100 && !this.activeBonuses.includes(`${value}_max`)) {
                this.activeBonuses.push(`${value}_max`);
                // Add to news feed
                this.newsFeed.unshift({
                    title: "Value Bonus Unlocked",
                    explanation: `Your excellence in ${this.getDisplayName(value)} has unlocked a special bonus!`,
                    year: this.year,
                    week: this.week,
                    timestamp: new Date().toISOString()
                });
            }
        }
        
        // Check factions
        for (const [faction, rating] of Object.entries(this.factions)) {
            if (rating >= 100 && !this.activeBonuses.includes(`${faction}_max`)) {
                this.activeBonuses.push(`${faction}_max`);
                // Add to news feed
                this.newsFeed.unshift({
                    title: "Relationship Bonus Unlocked",
                    explanation: `Your excellent relationship with ${this.getDisplayName(faction)} has unlocked a special bonus!`,
                    year: this.year,
                    week: this.week,
                    timestamp: new Date().toISOString()
                });
            }
        }
    }
    
    // Handle cash crisis
    handleCashCrisis(option) {
        switch(option) {
            case 'debt':
                // Raise debt: impacts Banks relationship and reduces revenue due to interest
                const debtAmount = 5000000; // $5M in emergency debt
                this.cash += debtAmount;
                
                // Impact on banks relationship
                const originalBanksValue = this.factions.banks;
                this.factions.banks = Math.max(0, this.factions.banks - 10);
                
                // Impact on revenue (interest burden)
                const originalRevenueValue = this.metrics.revenue;
                this.metrics.revenue = Math.max(0, this.metrics.revenue - 5);
                
                // Add to news feed
                this.newsFeed.unshift({
                    title: "Emergency Debt Financing",
                    explanation: "The company has secured emergency debt financing to continue operations.",
                    effects: {
                        cashImpact: debtAmount,
                        metrics: {
                            revenue: {
                                previous: originalRevenueValue,
                                change: -5,
                                current: this.metrics.revenue
                            }
                        },
                        factions: {
                            banks: {
                                previous: originalBanksValue,
                                change: -10,
                                current: this.factions.banks
                            }
                        }
                    },
                    year: this.year,
                    week: this.week,
                    timestamp: new Date().toISOString()
                });
                
                return {
                    amount: debtAmount,
                    revenueEffect: -5,
                    banksEffect: -10
                };
                
            case 'equity':
                // Raise equity: impacts Security Holders relationship
                const equityAmount = 7000000; // $7M in emergency equity
                this.cash += equityAmount;
                
                // Impact depends on current security holder relationship
                let securityHolderEffect = 0;
                if (this.factions.securityHolders >= 75) {
                    securityHolderEffect = -5; // Minor negative impact if relationship is strong
                } else if (this.factions.securityHolders >= 50) {
                    securityHolderEffect = -10; // Moderate impact for average relationship
                } else {
                    securityHolderEffect = -15; // Major impact for already strained relationship
                }
                
                const originalSecurityHoldersValue = this.factions.securityHolders;
                this.factions.securityHolders = Math.max(0, this.factions.securityHolders + securityHolderEffect);
                
                // Add to news feed
                this.newsFeed.unshift({
                    title: "Emergency Equity Raising",
                    explanation: "The company has issued new shares to raise emergency capital.",
                    effects: {
                        cashImpact: equityAmount,
                        factions: {
                            securityHolders: {
                                previous: originalSecurityHoldersValue,
                                change: securityHolderEffect,
                                current: this.factions.securityHolders
                            }
                        }
                    },
                    year: this.year,
                    week: this.week,
                    timestamp: new Date().toISOString()
                });
                
                return {
                    amount: equityAmount,
                    securityHolderEffect: securityHolderEffect
                };
                
            case 'assets':
                // Sell assets: significant impact on future revenue
                const assetSaleAmount = 10000000; // $10M from asset sale
                this.cash += assetSaleAmount;
                
                // Major impact on revenue
                const originalRevenueVal = this.metrics.revenue;
                this.metrics.revenue = Math.max(0, this.metrics.revenue - 15);
                
                // Add to news feed
                this.newsFeed.unshift({
                    title: "Emergency Asset Sale",
                    explanation: "The company has sold key assets to raise emergency capital.",
                    effects: {
                        cashImpact: assetSaleAmount,
                        metrics: {
                            revenue: {
                                previous: originalRevenueVal,
                                change: -15,
                                current: this.metrics.revenue
                            }
                        }
                    },
                    year: this.year,
                    week: this.week,
                    timestamp: new Date().toISOString()
                });
                
                return {
                    amount: assetSaleAmount,
                    revenueEffect: -15
                };
        }
    }

    // Check if game over
    isGameOver() {
        // Check if any core metrics are at 0
        for (const value of Object.values(this.metrics)) {
            if (value <= 0) return true;
        }
        
        // Check if any values are at 0
        for (const value of Object.values(this.values)) {
            if (value <= 0) return true;
        }
        
        // Check if any faction reputations are at 0
        for (const value of Object.values(this.factions)) {
            if (value <= 0) return true;
        }
        
        return false;
    }

    // Get reason for game over
    getGameOverReason() {
        // Check core metrics
        for (const [metric, value] of Object.entries(this.metrics)) {
            if (value <= 0) {
                switch(metric) {
                    case 'revenue':
                        return "Your company went bankrupt due to insufficient revenue.";
                    case 'employeeEngagement':
                        return "Your employees lost all motivation and began leaving en masse.";
                    case 'customerSatisfaction':
                        return "Your shopping centres became ghost towns as customers abandoned you.";
                }
            }
        }
        
        // Check values
        for (const [value, rating] of Object.entries(this.values)) {
            if (rating <= 0) {
                switch(value) {
                    case 'respect':
                        return "Your company's toxic culture led to a catastrophic talent exodus.";
                    case 'integrity':
                        return "Your company's unethical practices resulted in criminal charges.";
                    case 'collaboration':
                        return "Your siloed organization collapsed under its inability to coordinate.";
                    case 'customerFocus':
                        return "Your company's disregard for customers led to a complete market rejection.";
                    case 'excellence':
                        return "Your company's substandard practices led to critical failures across operations.";
                }
            }
        }
        
        // Check factions
        for (const [faction, rating] of Object.entries(this.factions)) {
            if (rating <= 0) {
                switch(faction) {
                    case 'banks':
                        return "The banks called in their loans, forcing your company into receivership.";
                    case 'coOwners':
                        return "Your joint venture partners sued for breach of contract, destroying the company.";
                    case 'regulators':
                        return "Regulatory bodies suspended your operating licenses indefinitely.";
                    case 'government':
                        return "Government intervention blocked all your development plans.";
                    case 'securityHolders':
                        return "A shareholder revolt ousted you from leadership.";
                }
            }
        }
        
        return "Your company failed due to mismanagement.";
    }

    // Format currency values
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
    }

    // Get display name for metrics, values, and factions
    getDisplayName(key) {
        const displayNames = {
            // Metrics
            revenue: 'Revenue',
            employeeEngagement: 'Employee Engagement',
            customerSatisfaction: 'Customer Satisfaction',
            
            // Values
            respect: 'Respect',
            integrity: 'Integrity',
            collaboration: 'Collaboration',
            customerFocus: 'Customer Focus',
            excellence: 'Excellence',
            
            // Factions
            banks: 'Banks',
            coOwners: 'Co-owners',
            regulators: 'Regulators',
            government: 'Government',
            securityHolders: 'Security Holders'
        };
        
        return displayNames[key] || key;
    }

    // Save game state
    save() {
        const saveData = {
            metrics: this.metrics,
            values: this.values,
            factions: this.factions,
            cash: this.cash,
            year: this.year,
            week: this.week,
            scenariosHandled: this.scenariosHandled,
            activeBonuses: this.activeBonuses,
            flags: this.flags,
            newsFeed: this.newsFeed,
            stats: this.stats,
            playerEmail: this.playerEmail
        };
        
        try {
            localStorage.setItem(`executiveDecisionSave_${this.playerEmail}`, JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error("Error saving game:", error);
            return false;
        }
    }

    // Load game state
    load(email) {
        try {
            const saveData = localStorage.getItem(`executiveDecisionSave_${email}`);
            if (!saveData) return false;
            
            const parsedData = JSON.parse(saveData);
            
            this.metrics = parsedData.metrics;
            this.values = parsedData.values;
            this.factions = parsedData.factions;
            this.cash = parsedData.cash || 10000000; // Default if missing
            this.year = parsedData.year;
            this.week = parsedData.week || 1; // Default if missing
            this.scenariosHandled = parsedData.scenariosHandled;
            this.activeBonuses = parsedData.activeBonuses;
            this.flags = parsedData.flags;
            this.newsFeed = parsedData.newsFeed || []; // Default if missing
            this.stats = parsedData.stats;
            this.playerEmail = email;
            
            return true;
        } catch (error) {
            console.error("Error loading game:", error);
            return false;
        }
    }

    // Get a serializable copy of the game state
    getState() {
        return {
            metrics: {...this.metrics},
            values: {...this.values},
            factions: {...this.factions},
            cash: this.cash,
            year: this.year,
            week: this.week,
            scenariosHandled: this.scenariosHandled,
            activeBonuses: [...this.activeBonuses],
            flags: {...this.flags},
            newsFeed: [...this.newsFeed],
            stats: JSON.parse(JSON.stringify(this.stats)),
            playerEmail: this.playerEmail
        };
    }
}

class ScenarioManager {
    constructor(gameState) {
        this.gameState = gameState;
        this.scenarios = [];
        this.usedScenarios = new Set();
        this.startingScenario = null;
    }

    // Set available scenarios
    setScenarios(scenarios) {
        this.scenarios = scenarios;
        
        // Set the designated starting scenario
        this.startingScenario = this.scenarios.find(scenario => scenario.id === "starting_scenario");
    }

    // Get the starting scenario
    getStartingScenario() {
        if (this.startingScenario) {
            return this.startingScenario;
        }
        
        // If no specific starting scenario is found, create a default one
        return {
            id: "default_starting_scenario",
            title: "Your First Day as Executive",
            description: "Welcome to your first day as an executive at Pretty Close Centres. The board has asked you to set your strategic priorities for the company.",
            image: "office.jpg",
            choices: [
                {
                    text: "Prioritize financial performance and expansion",
                    explanation: "You decide to focus on delivering strong financial results and pursuing aggressive growth opportunities.",
                    outcome: {
                        metrics: { revenue: 10, employee_engagement: -5, customer_satisfaction: 0 },
                        values: { excellence: 5, customer_focus: -3, integrity: 0 },
                        factions: { banks: 5, security_holders: 10, co_owners: 3, regulators: -3 },
                        flags: ["The company has an aggressive growth strategy", "The company prioritizes shareholder returns"]
                    }
                },
                {
                    text: "Focus on customer experience and innovation",
                    explanation: "You decide to position Pretty Close Centres as a leader in customer experience and retail innovation.",
                    outcome: {
                        metrics: { revenue: 0, employee_engagement: 5, customer_satisfaction: 10 },
                        values: { excellence: 5, customer_focus: 10, collaboration: 5 },
                        factions: { co_owners: 5, regulators: 3, security_holders: -3 },
                        flags: ["The company is focused on premium experiences", "The company has embraced digital transformation"]
                    }
                },
                {
                    text: "Emphasize corporate responsibility and sustainability",
                    explanation: "You commit to making Pretty Close Centres a leader in ethical business practices and environmental sustainability.",
                    outcome: {
                        metrics: { revenue: -5, employee_engagement: 10, customer_satisfaction: 5 },
                        values: { respect: 10, integrity: 10, collaboration: 5 },
                        factions: { government: 10, regulators: 10, security_holders: -5 },
                        flags: ["The company prioritizes corporate responsibility", "The company is an environmental leader"]
                    }
                }
            ]
        };
    }

    // Get the next scenario based on conditions
    getNextScenario() {
        // For the first scenario, return the starting scenario
        if (this.gameState.scenariosHandled === 0) {
            return this.getStartingScenario();
        }
        
        // Filter scenarios based on conditions
        const eligibleScenarios = this.scenarios.filter(scenario => {
            // Skip the starting scenario after it's been used
            if (scenario.id === "starting_scenario") {
                return false;
            }
            
            // Skip used scenarios unless they're repeatable
            if (this.usedScenarios.has(scenario.id) && !scenario.repeatable) {
                return false;
            }
            
            // Check conditions
            if (scenario.conditions) {
                // Check year range
                if (scenario.conditions.minYear && this.gameState.year < scenario.conditions.minYear) {
                    return false;
                }
                if (scenario.conditions.maxYear && this.gameState.year > scenario.conditions.maxYear) {
                    return false;
                }
                
                // Check required flags
                if (scenario.conditions.requiredFlags) {
                    for (const flag of scenario.conditions.requiredFlags) {
                        // Convert to human readable for checking
                        const readableFlag = this.gameState.convertFlagToReadable(flag);
                        if (!this.gameState.flags[readableFlag]) {
                            return false;
                        }
                    }
                }
                
                // Check excluded flags
                if (scenario.conditions.excludedFlags) {
                    for (const flag of scenario.conditions.excludedFlags) {
                        // Convert to human readable for checking
                        const readableFlag = this.gameState.convertFlagToReadable(flag);
                        if (this.gameState.flags[readableFlag]) {
                            return false;
                        }
                    }
                }
                
                // Check metric ranges
                if (scenario.conditions.metrics) {
                    for (const [metric, range] of Object.entries(scenario.conditions.metrics)) {
                        const mappedMetric = this.gameState.mapMetricName(metric);
                        const value = this.gameState.metrics[mappedMetric];
                        if (range.min !== undefined && value < range.min) {
                            return false;
                        }
                        if (range.max !== undefined && value > range.max) {
                            return false;
                        }
                    }
                }
                
                // Check value ranges
                if (scenario.conditions.values) {
                    for (const [value, range] of Object.entries(scenario.conditions.values)) {
                        const mappedValue = this.gameState.mapValueName(value);
                        const rating = this.gameState.values[mappedValue];
                        if (range.min !== undefined && rating < range.min) {
                            return false;
                        }
                        if (range.max !== undefined && rating > range.max) {
                            return false;
                        }
                    }
                }
                
                // Check faction ranges
                if (scenario.conditions.factions) {
                    for (const [faction, range] of Object.entries(scenario.conditions.factions)) {
                        const mappedFaction = this.gameState.mapFactionName(faction);
                        const rating = this.gameState.factions[mappedFaction];
                        if (range.min !== undefined && rating < range.min) {
                            return false;
                        }
                        if (range.max !== undefined && rating > range.max) {
                            return false;
                        }
                    }
                }
            }
            
            // Scenario is eligible
            return true;
        });
        
        // If no eligible scenarios, use a default one
        if (eligibleScenarios.length === 0) {
            return this.getDefaultScenario();
        }
        
        // Apply priority and weights to select scenario
        let totalWeight = 0;
        const weightedScenarios = eligibleScenarios.map(scenario => {
            const priority = scenario.priority || 1;
            const weight = scenario.weight || 1;
            const effectiveWeight = weight * priority;
            totalWeight += effectiveWeight;
            return {
                scenario,
                weight: effectiveWeight
            };
        });
        
        // Select scenario based on weights
        let random = Math.random() * totalWeight;
        let selectedScenario = null;
        
        for (const { scenario, weight } of weightedScenarios) {
            random -= weight;
            if (random <= 0) {
                selectedScenario = scenario;
                break;
            }
        }
        
        // If something went wrong, use the first eligible scenario
        if (!selectedScenario) {
            selectedScenario = eligibleScenarios[0];
        }
        
        // Mark scenario as used
        this.usedScenarios.add(selectedScenario.id);
        
        return selectedScenario;
    }

    // Get a default/fallback scenario
    getDefaultScenario() {
        // Create a simple default scenario
        return {
            id: "default_scenario",
            title: "Daily Operations",
            description: "Another day managing Pretty Close Centres. What will you focus on today?",
            image: "office.jpg",
            choices: [
                {
                    text: "Focus on financial performance",
                    explanation: "You dedicate your attention to improving revenue and financial metrics.",
                    outcome: {
                        metrics: { revenue: 3, employee_engagement: -1 },
                        values: { excellence: 2, customer_focus: -1 }
                    }
                },
                {
                    text: "Focus on employee welfare",
                    explanation: "You spend time addressing employee concerns and improving workplace conditions.",
                    outcome: {
                        metrics: { revenue: -1, employee_engagement: 3 },
                        values: { respect: 2, excellence: -1 }
                    }
                },
                {
                    text: "Focus on customer experience",
                    explanation: "You dedicate resources to enhancing the customer experience in your centres.",
                    outcome: {
                        metrics: { revenue: 1, customer_satisfaction: 3 },
                        values: { customer_focus: 2, collaboration: 1 }
                    }
                }
            ]
        };
    }

    // Reset used scenarios (e.g., on year change)
    resetUsedScenarios() {
        this.usedScenarios.clear();
    }
}

class Game {
    constructor() {
        this.gameState = new GameState();
        this.scenarioManager = new ScenarioManager(this.gameState);
        this.currentScenario = null;
        this.isRunning = false;
        
        // UI elements
        this.elements = {
            screens: {
                start: document.getElementById('start-screen'),
                game: document.getElementById('game-screen'),
                gameOver: document.getElementById('game-over-screen')
            },
            metrics: {
                revenue: {
                    meter: document.querySelector('#revenue .meter'),
                    value: document.querySelector('#revenue .metric-value')
                },
                employeeEngagement: {
                    meter: document.querySelector('#employee-engagement .meter'),
                    value: document.querySelector('#employee-engagement .metric-value')
                },
                customerSatisfaction: {
                    meter: document.querySelector('#customer-satisfaction .meter'),
                    value: document.querySelector('#customer-satisfaction .metric-value')
                }
            },
            values: {
                respect: {
                    meter: document.querySelector('#respect .meter'),
                    value: document.querySelector('#respect .metric-value')
                },
                integrity: {
                    meter: document.querySelector('#integrity .meter'),
                    value: document.querySelector('#integrity .metric-value')
                },
                collaboration: {
                    meter: document.querySelector('#collaboration .meter'),
                    value: document.querySelector('#collaboration .metric-value')
                },
                customerFocus: {
                    meter: document.querySelector('#customer-focus .meter'),
                    value: document.querySelector('#customer-focus .metric-value')
                },
                excellence: {
                    meter: document.querySelector('#excellence .meter'),
                    value: document.querySelector('#excellence .metric-value')
                }
            },
            factions: {
                banks: {
                    meter: document.querySelector('#banks .meter'),
                    value: document.querySelector('#banks .metric-value')
                },
                coOwners: {
                    meter: document.querySelector('#co-owners .meter'),
                    value: document.querySelector('#co-owners .metric-value')
                },
                regulators: {
                    meter: document.querySelector('#regulators .meter'),
                    value: document.querySelector('#regulators .metric-value')
                },
                government: {
                    meter: document.querySelector('#government .meter'),
                    value: document.querySelector('#government .metric-value')
                },
                securityHolders: {
                    meter: document.querySelector('#security-holders .meter'),
                    value: document.querySelector('#security-holders .metric-value')
                }
            },
            scenario: {
                title: document.getElementById('scenario-title'),
                description: document.getElementById('scenario-description'),
                image: document.getElementById('scenario-image'),
                choicesContainer: document.getElementById('choices-container')
            },
            newsFeed: document.getElementById('news-feed-container'),
            playerEmail: document.getElementById('player-email'),
            cashAmount: document.getElementById('cash-amount'),
            yearDisplay: document.getElementById('year'),
            weekDisplay: document.getElementById('week'),
            overlays: {
                menu: document.getElementById('menu-overlay'),
                stats: document.getElementById('stats-overlay'),
                bonuses: document.getElementById('bonuses-overlay'),
                flags: document.getElementById('flags-overlay'),
                scenarioPacks: document.getElementById('scenario-packs-overlay'),
                annualReport: document.getElementById('annual-report-overlay'),
                cashCrisis: document.getElementById('cash-crisis-overlay')
            },
            gameOver: {
                reason: document.getElementById('game-over-reason'),
                stats: document.getElementById('final-stats-content'),
                yearsSurvived: document.getElementById('years-survived')
            },
            annualReport: {
                year: document.getElementById('annual-report-year'),
                content: document.getElementById('annual-report-content'),
                distributionChoices: document.getElementById('distribution-choices')
            },
            notification: document.getElementById('notification'),
            notificationMessage: document.getElementById('notification-message')
        };
        
        this.setupEventListeners();
    }

    // Initialize the game
    async init() {
        try {
            // Load extension scenarios first
            await this.loadScenarioExtensions();
            
            // Load base scenarios (now will incorporate extensions)
            await this.loadScenarios();
            
            // Load any additional game resources
            await this.loadExtras();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Show start screen
            this.showScreen('start');
        } catch (error) {
            console.error('Game initialization error:', error);
            this.showNotification('Failed to initialize game. Please refresh the page.');
        }
    }

    // Helper method to load extension files from a list
    async loadExtensionFiles(fileList) {
        const loadPromises = fileList.map(file => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = file;
                
                script.onload = () => {
                    console.log(`Successfully loaded scenario extension: ${file}`);
                    resolve(true);
                };
                
                script.onerror = () => {
                    console.warn(`Failed to load scenario extension: ${file}`);
                    resolve(false);
                };
                
                document.head.appendChild(script);
            });
        });
        
        await Promise.all(loadPromises);
    }

    // Helper method to try loading extensions by common naming patterns
    async loadExtensionsByPattern() {
        // Try these common extension names
        const extensionPatterns = [
            'scenarios-expansion.js',
            'scenarios-corporate.js',
            'scenarios-crisis.js',
            'scenarios-custom.js'
        ];
        
        await this.loadExtensionFiles(extensionPatterns);
    }

    // Load scenario extensions
    async loadScenarioExtensions() {
        // Create a global container for extension registrations if it doesn't exist
        if (!window.gameScenarioExtensions) {
            window.gameScenarioExtensions = [];
        }
        
        // Look for an extensions manifest file first
        try {
            const manifestScript = document.createElement('script');
            manifestScript.src = 'scenario-extensions.manifest.js';
            
            await new Promise((resolve, reject) => {
                manifestScript.onload = resolve;
                manifestScript.onerror = reject;
                document.head.appendChild(manifestScript);
            });
            
            // If manifest is loaded, it should have populated window.scenarioExtensionsList
            if (window.scenarioExtensionsList && Array.isArray(window.scenarioExtensionsList)) {
                console.log('Loading extensions from manifest:', window.scenarioExtensionsList);
                await this.loadExtensionFiles(window.scenarioExtensionsList);
            }
        } catch (e) {
            console.log('No extension manifest found, looking for extension files with naming pattern');
            // Fall back to trying common extension patterns
            await this.loadExtensionsByPattern();
        }
    }

    // Load scenarios from external files
    async loadScenarios() {
        try {
            // Initialize array for all scenarios
            let allScenarios = [];
            
            // First load base scenarios from scenarios.js
            if (window.gameScenarios) {
                allScenarios = [...window.gameScenarios];
                console.log(`Loaded ${allScenarios.length} base scenarios`);
            } else {
                console.error('Failed to load scenarios.js');
                this.showNotification('Failed to load scenario data. Please refresh the page.');
                return;
            }
            
            // Then incorporate any extension scenarios that have been registered
            if (window.gameScenarioExtensions && window.gameScenarioExtensions.length > 0) {
                console.log(`Found ${window.gameScenarioExtensions.length} scenario extensions`);
                for (const extension of window.gameScenarioExtensions) {
                    console.log(`Loading scenario extension: ${extension.name} (${extension.scenarios.length} scenarios)`);
                    allScenarios = [...allScenarios, ...extension.scenarios];
                }
            }
            
            // Set the combined scenarios
            this.scenarioManager.setScenarios(allScenarios);
            console.log(`Total scenarios loaded: ${allScenarios.length}`);
            
        } catch (error) {
            console.error('Error loading scenarios:', error);
            throw error;
        }
    }

    // Load extra features
    async loadExtras() {
        try {
            // Check if the extras script is available
            if (window.gameBonuses) {
                // Initialize bonuses
                this.bonuses = window.gameBonuses;
            } else {
                // Create fallback bonuses
                this.bonuses = {
                    revenue_max: {
                        name: "Financial Excellence",
                        description: "Your strong financial performance attracts better financing terms.",
                        effect: "Reduced impact from negative revenue events."
                    },
                    employeeEngagement_max: {
                        name: "Employer of Choice",
                        description: "Your company is recognized as a top workplace.",
                        effect: "Employee engagement drops more slowly over time."
                    },
                    customerSatisfaction_max: {
                        name: "Customer Champion",
                        description: "Your centers are beloved by shoppers.",
                        effect: "Customer satisfaction provides revenue bonuses."
                    }
                };
            }
        } catch (error) {
            console.error('Error loading extras:', error);
            // Continue without extras
            this.bonuses = {};
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Start button
        document.getElementById('start-button').addEventListener('click', () => {
            const email = this.elements.playerEmail.value.trim();
            if (email) {
                this.gameState.setPlayerEmail(email);
                this.start();
            } else {
                this.showNotification('Please enter an email address to save your progress.');
            }
        });
        
        // Load button
        document.getElementById('load-button').addEventListener('click', () => {
            const email = this.elements.playerEmail.value.trim();
            if (email) {
                this.loadGame(email);
            } else {
                this.showNotification('Please enter your email address to load your saved game.');
            }
        });
        
        // Restart button
        document.getElementById('restart-button').addEventListener('click', () => {
            this.start();
        });
        
        // Main menu button
        document.getElementById('main-menu-button').addEventListener('click', () => {
            this.showScreen('start');
        });
        
        // Menu button
        document.getElementById('menu-button').addEventListener('click', () => {
            this.toggleOverlay('menu');
        });
        
        // Close menu button
        document.getElementById('close-menu-button').addEventListener('click', () => {
            this.hideOverlay('menu');
        });
        
        // Save game button
        document.getElementById('save-game-button').addEventListener('click', () => {
            this.saveGame();
            this.hideOverlay('menu');
        });
        
        // Menu load button
        document.getElementById('menu-load-button').addEventListener('click', () => {
            const email = this.gameState.playerEmail;
            if (email) {
                this.loadGame(email);
                this.hideOverlay('menu');
            } else {
                this.showNotification('No email address found. Please return to the main menu to enter your email.');
            }
        });
        
        // View stats button
        document.getElementById('view-stats-button').addEventListener('click', () => {
            this.showStats();
            this.hideOverlay('menu');
        });
        
        // View bonuses button
        document.getElementById('view-bonuses-button').addEventListener('click', () => {
            this.showBonuses();
            this.hideOverlay('menu');
        });
        
        // View flags button
        document.getElementById('view-flags-button').addEventListener('click', () => {
            this.showFlags();
            this.hideOverlay('menu');
        });
        
        // View scenario packs button
        document.getElementById('view-scenario-packs-button').addEventListener('click', () => {
            this.showScenarioPacks();
            this.hideOverlay('menu');
        });
        
        // Close stats button
        document.getElementById('close-stats-button').addEventListener('click', () => {
            this.hideOverlay('stats');
        });
        
        // Close bonuses button
        document.getElementById('close-bonuses-button').addEventListener('click', () => {
            this.hideOverlay('bonuses');
        });
        
        // Close flags button
        document.getElementById('close-flags-button').addEventListener('click', () => {
            this.hideOverlay('flags');
        });
        
        // Close scenario packs button
        document.getElementById('close-scenario-packs-button').addEventListener('click', () => {
            this.hideOverlay('scenarioPacks');
        });
        
        // Annual report continue button
        document.getElementById('continue-annual-report-button').addEventListener('click', () => {
            this.hideOverlay('annualReport');
            this.nextScenario();
        });
        
        // Cash crisis buttons
        document.getElementById('raise-debt-button').addEventListener('click', () => {
            this.handleCashCrisis('debt');
        });
        
        document.getElementById('raise-equity-button').addEventListener('click', () => {
            this.handleCashCrisis('equity');
        });
        
        document.getElementById('sell-assets-button').addEventListener('click', () => {
            this.handleCashCrisis('assets');
        });
        
        // Quit button
        document.getElementById('quit-button').addEventListener('click', () => {
            this.quit();
        });
        
        // Collapsible sections
        document.querySelectorAll('.metric-group h3').forEach(header => {
            header.addEventListener('click', () => {
                const group = header.parentElement;
                group.classList.toggle('collapsed');
            });
        });
    }

    // Handle cash crisis response
    handleCashCrisis(option) {
        const result = this.gameState.handleCashCrisis(option);
        this.hideOverlay('cashCrisis');
        this.updateUI();
        this.nextScenario();
        return result;
    }

    // Start a new game
    start() {
        this.gameState = new GameState();
        this.gameState.setPlayerEmail(this.elements.playerEmail.value.trim());
        this.scenarioManager = new ScenarioManager(this.gameState);
        
        // Load all scenarios including extensions
        let allScenarios = [];
        
        // Add base scenarios
        if (window.gameScenarios) {
            allScenarios = [...window.gameScenarios];
        }
        
        // Add extension scenarios
        if (window.gameScenarioExtensions) {
            for (const extension of window.gameScenarioExtensions) {
                allScenarios = [...allScenarios, ...extension.scenarios];
            }
        }
        
        this.scenarioManager.setScenarios(allScenarios);
        this.isRunning = true;
        
        this.showScreen('game');
        this.updateUI();
        this.nextScenario();
    }

    // Load a saved game
    loadGame(email) {
        if (this.gameState.load(email)) {
            this.scenarioManager = new ScenarioManager(this.gameState);
            
            // Load all scenarios including extensions
            let allScenarios = [];
            
            // Add base scenarios
            if (window.gameScenarios) {
                allScenarios = [...window.gameScenarios];
            }
            
            // Add extension scenarios
            if (window.gameScenarioExtensions) {
                for (const extension of window.gameScenarioExtensions) {
                    allScenarios = [...allScenarios, ...extension.scenarios];
                }
            }
            
            this.scenarioManager.setScenarios(allScenarios);
            this.isRunning = true;
            
            this.showScreen('game');
            this.updateUI();
            this.updateNewsFeed();
            this.nextScenario();
            
            this.showNotification('Game loaded successfully!');
        } else {
            this.showNotification('No saved game found for this email address.');
        }
    }

    // Save the current game
    saveGame() {
        if (this.gameState.save()) {
            this.showNotification('Game saved successfully!');
            return true;
        } else {
            this.showNotification('Failed to save game.');
            return false;
        }
    }

    // Quit to main menu
    quit() {
        this.isRunning = false;
        this.hideOverlay('menu');
        this.showScreen('start');
    }

    // Show stats overlay
    showStats() {
        const statsElement = document.getElementById('stats-content');
        statsElement.innerHTML = this.generateStatsHTML();
        this.showOverlay('stats');
    }

    // Generate HTML for stats display
    generateStatsHTML() {
        const { metrics, values, factions, year, week, cash, activeBonuses, stats } = this.gameState.getState();
        
        return `
            <div class="stats-section">
                <h3>Company Year: ${year}, Week: ${week}</h3>
                <h4>Financial</h4>
                <ul>
                    <li>Cash on Hand: ${this.formatCurrency(cash)}</li>
                    <li>Revenue Performance: ${metrics.revenue}</li>
                </ul>
                
                <h4>Core Business Metrics</h4>
                <ul>
                    <li>Revenue: ${metrics.revenue}</li>
                    <li>Employee Engagement: ${metrics.employeeEngagement}</li>
                    <li>Customer Satisfaction: ${metrics.customerSatisfaction}</li>
                </ul>
                
                <h4>Corporate Values</h4>
                <ul>
                    <li>Respect: ${values.respect}</li>
                    <li>Integrity: ${values.integrity}</li>
                    <li>Collaboration: ${values.collaboration}</li>
                    <li>Customer Focus: ${values.customerFocus}</li>
                    <li>Excellence: ${values.excellence}</li>
                </ul>
                
                <h4>Faction Relationships</h4>
                <ul>
                    <li>Banks: ${factions.banks}</li>
                    <li>Co-owners: ${factions.coOwners}</li>
                    <li>Regulators: ${factions.regulators}</li>
                    <li>Government: ${factions.government}</li>
                    <li>Security Holders: ${factions.securityHolders}</li>
                </ul>
                
                <h4>Active Bonuses</h4>
                <ul>
                    ${activeBonuses.length > 0 
                        ? activeBonuses.map(bonus => `<li>${this.getBonusName(bonus)}</li>`).join('')
                        : '<li>No active bonuses</li>'
                    }
                </ul>
                
                <h4>Decisions Made</h4>
                <ul>
                    ${Object.entries(stats.decisionsPerYear).map(([year, count]) => 
                        `<li>Year ${year}: ${count} decisions</li>`
                    ).join('')}
                </ul>
            </div>
        `;
    }

    // Show bonuses overlay
    showBonuses() {
        const bonusesElement = document.getElementById('bonuses-content');
        bonusesElement.innerHTML = this.generateBonusesHTML();
        this.showOverlay('bonuses');
    }

    // Show flags overlay
    showFlags() {
        const flagsElement = document.getElementById('flags-content');
        flagsElement.innerHTML = this.generateFlagsHTML();
        this.showOverlay('flags');
    }
    
    // Generate HTML for flags display
    generateFlagsHTML() {
        const flags = Object.keys(this.gameState.flags);
        
        if (flags.length === 0) {
            return '<p>No company status flags are currently active.</p>';
        }
        
        return `
            <div class="flags-list">
                <p>The following conditions currently apply to your company:</p>
                <ul>
                    ${flags.map(flag => `<li>${flag}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Generate HTML for bonuses display
    generateBonusesHTML() {
        const { activeBonuses } = this.gameState;
        let bonusesHTML = '<div class="bonuses-list">';
        
        // Active bonuses
        bonusesHTML += '<h3>Active Bonuses</h3>';
        if (activeBonuses.length > 0) {
            bonusesHTML += '<ul>';
            for (const bonusId of activeBonuses) {
                const bonus = this.getBonusDetails(bonusId);
                bonusesHTML += `
                    <li class="bonus active-bonus">
                        <h4>${bonus.name}</h4>
                        <p>${bonus.description}</p>
                        <p><strong>Effect:</strong> ${bonus.effect}</p>
                    </li>
                `;
            }
            bonusesHTML += '</ul>';
        } else {
            bonusesHTML += '<p>No active bonuses yet. Reach 100 in any metric to unlock bonuses!</p>';
        }
        
        // Available bonuses
        bonusesHTML += '<h3>Available Bonuses</h3><ul>';
        
        // Create categories
        const categories = {
            'Core Metrics': ['revenue_max', 'employeeEngagement_max', 'customerSatisfaction_max'],
            'Corporate Values': ['respect_max', 'integrity_max', 'collaboration_max', 'customerFocus_max', 'excellence_max'],
            'Faction Relationships': ['banks_max', 'coOwners_max', 'regulators_max', 'government_max', 'securityHolders_max']
        };
        
        for (const [category, bonusIds] of Object.entries(categories)) {
            bonusesHTML += `<h4>${category}</h4>`;
            
            for (const bonusId of bonusIds) {
                const bonus = this.getBonusDetails(bonusId);
                const isActive = activeBonuses.includes(bonusId);
                
                bonusesHTML += `
                    <li class="bonus ${isActive ? 'active-bonus' : 'inactive-bonus'}">
                        <h4>${bonus.name}</h4>
                        <p>${bonus.description}</p>
                        <p><strong>Effect:</strong> ${bonus.effect}</p>
                        ${isActive ? '<span class="bonus-active-tag">ACTIVE</span>' : ''}
                    </li>
                `;
            }
        }
        
        bonusesHTML += '</ul></div>';
        return bonusesHTML;
    }

    // Show scenario packs overlay
    showScenarioPacks() {
        const packsElement = document.getElementById('scenario-packs-content');
        packsElement.innerHTML = this.generateScenarioPacksHTML();
        this.showOverlay('scenarioPacks');
    }

    // Generate HTML for scenario packs display
    generateScenarioPacksHTML() {
        let packsHTML = '<div class="scenario-packs-list">';
        
        // Base scenarios
        packsHTML += `
            <div class="scenario-pack">
                <h3>Base Scenarios</h3>
                <p>The core scenarios included with Executive Decision.</p>
                <p><strong>Status:</strong> ${window.gameScenarios ? 'Loaded' : 'Not Loaded'}</p>
                ${window.gameScenarios ? `<p><strong>Scenarios:</strong> ${window.gameScenarios.length}</p>` : ''}
            </div>
        `;
        
        // Extension packs
        if (window.gameScenarioExtensions && window.gameScenarioExtensions.length > 0) {
            packsHTML += '<h3>Extension Packs</h3>';
            
            for (const extension of window.gameScenarioExtensions) {
                packsHTML += `
                    <div class="scenario-pack extension-pack">
                        <h4>${extension.name}</h4>
                        <p>${extension.description || 'No description available.'}</p>
                        <p><strong>ID:</strong> ${extension.id}</p>
                        <p><strong>Scenarios:</strong> ${extension.scenarios.length}</p>
                        ${extension.version ? `<p><strong>Version:</strong> ${extension.version}</p>` : ''}
                        ${extension.author ? `<p><strong>Author:</strong> ${extension.author}</p>` : ''}
                    </div>
                `;
            }
        } else {
            packsHTML += `
                <h3>Extension Packs</h3>
                <p>No extension packs loaded.</p>
                <p>To add more scenarios, place scenario extension files in the same directory as the game and refresh the page.</p>
                <p><em>Tip: Name your extension files starting with "scenarios-" (e.g., scenarios-custom.js) or add them to scenario-extensions.manifest.js</em></p>
            `;
        }
        
        packsHTML += '</div>';
        return packsHTML;
    }

    // Update the news feed display
    updateNewsFeed() {
        const newsFeed = this.gameState.newsFeed;
        this.elements.newsFeed.innerHTML = '';
        
        if (newsFeed.length === 0) {
            this.elements.newsFeed.innerHTML = '<p class="empty-feed">Your company news will appear here.</p>';
            return;
        }
        
        for (const entry of newsFeed) {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            
            // Format the entry
            let newsContent = `
                <div class="news-header">
                    <h4>${entry.title}</h4>
                    <span class="news-date">Year ${entry.year}, Week ${entry.week}</span>
                </div>
                <p class="news-decision"><strong>Decision:</strong> ${entry.decision}</p>
            `;
            
            if (entry.explanation) {
                newsContent += `<p class="news-explanation">${entry.explanation}</p>`;
            }
            
            // Add value alignments if any
            if (entry.valueAlignments && entry.valueAlignments.length > 0) {
                newsContent += '<div class="news-values">';
                for (const alignment of entry.valueAlignments) {
                    const valueClass = alignment.alignment === 'aligned' ? 'positive' : 'negative';
                    newsContent += `
                        <span class="value-tag ${valueClass}">
                            ${this.gameState.getDisplayName(alignment.value)} 
                            ${alignment.impact > 0 ? '↑' : '↓'}
                        </span>
                    `;
                }
                newsContent += '</div>';
            }
            
            // Add stakeholder impacts if any
            if (entry.stakeholderImpacts && entry.stakeholderImpacts.length > 0) {
                newsContent += '<div class="news-stakeholders">';
                for (const impact of entry.stakeholderImpacts) {
                    const impactClass = impact.impact > 0 ? 'positive' : 'negative';
                    newsContent += `
                        <span class="stakeholder-tag ${impactClass}">
                            ${this.gameState.getDisplayName(impact.stakeholder)} 
                            ${impact.impact > 0 ? '↑' : '↓'}
                        </span>
                    `;
                }
                newsContent += '</div>';
            }
            
            // Add financial impact if any
            if (entry.cashImpact) {
                const cashClass = entry.cashImpact > 0 ? 'positive' : 'negative';
                newsContent += `
                    <p class="news-financial ${cashClass}">
                        Financial Impact: ${this.formatCurrency(entry.cashImpact)}
                    </p>
                `;
            }
            
            newsItem.innerHTML = newsContent;
            this.elements.newsFeed.appendChild(newsItem);
        }
    }

    // Show annual report
    showAnnualReport(report) {
        // Set the year
        this.elements.annualReport.year.textContent = report.year;
        
        // Generate content
        let reportHTML = `
            <div class="annual-report-section">
                <h3>Financial Summary</h3>
                <p>Cash on Hand: ${this.formatCurrency(report.cash)}</p>
                <p>Revenue Performance: ${report.revenue} (${report.changes.metrics.revenue.change > 0 ? '+' : ''}${report.changes.metrics.revenue.change})</p>
                
                <h3>Business Metrics</h3>
                <div class="metrics-summary">
                    <div class="metric-change">
                        <span class="metric-label">Employee Engagement</span>
                        <span class="metric-value ${report.changes.metrics.employeeEngagement.change > 0 ? 'positive' : (report.changes.metrics.employeeEngagement.change < 0 ? 'negative' : '')}">
                            ${report.metrics.employeeEngagement} (${report.changes.metrics.employeeEngagement.change > 0 ? '+' : ''}${report.changes.metrics.employeeEngagement.change})
                        </span>
                    </div>
                    <div class="metric-change">
                        <span class="metric-label">Customer Satisfaction</span>
                        <span class="metric-value ${report.changes.metrics.customerSatisfaction.change > 0 ? 'positive' : (report.changes.metrics.customerSatisfaction.change < 0 ? 'negative' : '')}">
                            ${report.metrics.customerSatisfaction} (${report.changes.metrics.customerSatisfaction.change > 0 ? '+' : ''}${report.changes.metrics.customerSatisfaction.change})
                        </span>
                    </div>
                </div>
                
                <h3>Key Stakeholder Relations</h3>
                <div class="stakeholder-summary">
                    ${Object.entries(report.changes.factions).map(([faction, data]) => `
                        <div class="stakeholder-change">
                            <span class="stakeholder-label">${this.gameState.getDisplayName(faction)}</span>
                            <span class="stakeholder-value ${data.change > 0 ? 'positive' : (data.change < 0 ? 'negative' : '')}">
                                ${data.current} (${data.change > 0 ? '+' : ''}${data.change})
                            </span>
                        </div>
                    `).join('')}
                </div>
                
                <h3>Corporate Values</h3>
                <div class="values-summary">
                    ${Object.entries(report.changes.values).map(([value, data]) => `
                        <div class="value-change">
                            <span class="value-label">${this.gameState.getDisplayName(value)}</span>
                            <span class="value-value ${data.change > 0 ? 'positive' : (data.change < 0 ? 'negative' : '')}">
                                ${data.current} (${data.change > 0 ? '+' : ''}${data.change})
                            </span>
                        </div>
                    `).join('')}
                </div>
                
                ${report.activeBonuses.length > 0 ? `
                    <h3>Active Bonuses</h3>
                    <ul class="bonuses-summary">
                        ${report.activeBonuses.map(bonus => `<li>${this.getBonusName(bonus)}</li>`).join('')}
                    </ul>
                ` : ''}
                
                ${report.flags.length > 0 ? `
                    <h3>Company Status</h3>
                    <ul class="flags-summary">
                        ${report.flags.map(flag => `<li>${flag}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
        
        this.elements.annualReport.content.innerHTML = reportHTML;
        
        // Set up distribution choices
        const distributionChoices = document.getElementById('distribution-choices');
        distributionChoices.innerHTML = '';
        
        // Create distribution options based on available cash
        const options = [
            { percentage: 0, label: "No Distribution (0%)" },
            { percentage: 10, label: "Minimal Distribution (10%)" },
            { percentage: 25, label: "Standard Distribution (25%)" },
            { percentage: 40, label: "Generous Distribution (40%)" }
        ];
        
        for (const option of options) {
            const amount = (option.percentage / 100) * report.cash;
            const button = document.createElement('button');
            button.className = 'distribution-option menu-button';
            button.textContent = `${option.label} - ${this.formatCurrency(amount)}`;
            
            button.addEventListener('click', () => {
                this.gameState.processDistribution(option.percentage);
                this.hideOverlay('annualReport');
                this.updateUI();
                this.updateNewsFeed();
                this.nextScenario();
            });
            
            distributionChoices.appendChild(button);
        }
        
        this.showOverlay('annualReport');
    }

    // Get bonus name (with fallback)
    getBonusName(bonusId) {
        const bonus = this.getBonusDetails(bonusId);
        return bonus ? bonus.name : bonusId;
    }

    // Get bonus details (with fallback)
    getBonusDetails(bonusId) {
        if (this.bonuses && this.bonuses[bonusId]) {
            return this.bonuses[bonusId];
        }
        
        // Fallback values for bonuses
        const fallbackBonuses = {
            // Core metrics
            revenue_max: {
                name: "Financial Excellence",
                description: "Your strong financial performance attracts better financing terms.",
                effect: "Reduced impact from negative revenue events."
            },
            employeeEngagement_max: {
                name: "Employer of Choice",
                description: "Your company is recognized as a top workplace.",
                effect: "Employee engagement drops more slowly over time."
            },
            customerSatisfaction_max: {
                name: "Customer Champion",
                description: "Your centers are beloved by shoppers.",
                effect: "Customer satisfaction provides revenue bonuses."
            },
            
            // Values
            respect_max: {
                name: "Respectful Workplace",
                description: "Your company is known for its respectful treatment of all stakeholders.",
                effect: "Improved employee engagement growth."
            },
            integrity_max: {
                name: "Beacon of Integrity",
                description: "Your company is trusted implicitly by all parties.",
                effect: "Regulatory approvals come more easily."
            },
            collaboration_max: {
                name: "Collaborative Excellence",
                description: "Your company excels at internal and external collaboration.",
                effect: "Better outcomes from joint projects."
            },
            customerFocus_max: {
                name: "Customer Obsessed",
                description: "Your company puts customers at the center of every decision.",
                effect: "Customer satisfaction grows more quickly."
            },
            excellence_max: {
                name: "Operational Excellence",
                description: "Your company is known for excellent execution.",
                effect: "Revenue grows more consistently."
            },
            
            // Factions
            banks_max: {
                name: "Banking Darling",
                description: "Banks compete to finance your projects.",
                effect: "Reduced costs on financing."
            },
            coOwners_max: {
                name: "Partner of Choice",
                description: "Co-owners seek you out for joint ventures.",
                effect: "Better terms on joint ventures."
            },
            regulators_max: {
                name: "Regulatory Exemplar",
                description: "Regulators use your company as a model for compliance.",
                effect: "Faster regulatory approvals."
            },
            government_max: {
                name: "Government Partner",
                description: "Government officials trust your company implicitly.",
                effect: "Favorable treatment on policy matters."
            },
            securityHolders_max: {
                name: "Shareholder Favorite",
                description: "Security holders have complete confidence in management.",
                effect: "Lower volatility during market downturns."
            }
        };
        
        return fallbackBonuses[bonusId] || {
            name: `Bonus: ${bonusId}`,
            description: "A special bonus for your company.",
            effect: "Provides special benefits."
        };
    }

    // Format currency values
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
    }

    // Show a specific screen
    showScreen(screenName) {
        // Hide all screens
        for (const [name, element] of Object.entries(this.elements.screens)) {
            element.classList.add('hidden');
        }
        
        // Show requested screen
        this.elements.screens[screenName].classList.remove('hidden');
    }

    // Show an overlay
    showOverlay(overlayName) {
        this.elements.overlays[overlayName].classList.remove('hidden');
    }

    // Hide an overlay
    hideOverlay(overlayName) {
        this.elements.overlays[overlayName].classList.add('hidden');
    }

    // Toggle an overlay
    toggleOverlay(overlayName) {
        this.elements.overlays[overlayName].classList.toggle('hidden');
    }

    // Show a notification
    showNotification(message, duration = 3000) {
        this.elements.notificationMessage.textContent = message;
        this.elements.notification.classList.remove('hidden');
        
        setTimeout(() => {
            this.elements.notification.classList.add('hidden');
        }, duration);
    }

    // Move to the next scenario
    nextScenario() {
        // Check for game over
        if (this.gameState.isGameOver()) {
            this.gameOver();
            return;
        }
        
        // Check for cash crisis
        if (this.gameState.cash <= 0) {
            this.showOverlay('cashCrisis');
            return;
        }
        
        // Get the next scenario
        this.currentScenario = this.scenarioManager.getNextScenario();
        
        // Update the scenario display
        this.updateScenarioDisplay();
        
        // Update metrics and other UI elements
        this.updateUI();
    }

    // Update the scenario display
    updateScenarioDisplay() {
        const { title, description, image, choices } = this.currentScenario;
        
        // Update text
        this.elements.scenario.title.textContent = title;
        this.elements.scenario.description.textContent = description;
        
        // Update image if available
        if (image) {
            this.elements.scenario.image.style.backgroundImage = `url('${image}')`;
        } else {
            this.elements.scenario.image.style.backgroundImage = 'url("office.jpg")';
        }
        
        // Generate choice buttons
        this.elements.scenario.choicesContainer.innerHTML = '';
        
        choices.forEach((choice, index) => {
            const choiceButton = document.createElement('button');
            choiceButton.className = 'choice-button';
            
            // Show cost if any
            let buttonText = choice.text;
            if (choice.outcome && choice.outcome.cost) {
                buttonText += ` (Cost: ${this.formatCurrency(choice.outcome.cost)})`;
            }
            
            choiceButton.textContent = buttonText;
            
            choiceButton.addEventListener('click', () => {
                this.makeChoice(index);
            });
            
            this.elements.scenario.choicesContainer.appendChild(choiceButton);
        });
    }

    // Make a choice in the current scenario
    makeChoice(choiceIndex) {
        const choice = this.currentScenario.choices[choiceIndex];
        
        // Check if player has enough money if choice has a cost
        if (choice.outcome && choice.outcome.cost && this.gameState.cash < choice.outcome.cost) {
            this.showNotification("You don't have enough cash to make this choice!");
            return;
        }
        
        // Apply outcome
        const result = this.gameState.applyOutcome(this.currentScenario, choice, choice.outcome);
        
        // Update UI
        this.updateUI();
        
        // Update news feed
        this.updateNewsFeed();
        
        // Check for special conditions
        if (result.yearEnd) {
            // Year end - show annual report
            this.showAnnualReport(result.annualReport);
        } else if (result.cashCrisis) {
            // Cash crisis
            this.showOverlay('cashCrisis');
        } else {
            // Normal flow - get next scenario
            this.nextScenario();
        }
    }

    // Update all UI elements
    updateUI() {
        // Update year and week
        this.elements.yearDisplay.textContent = this.gameState.year;
        this.elements.weekDisplay.textContent = this.gameState.week;
        
        // Update cash
        this.elements.cashAmount.textContent = Number(this.gameState.cash).toLocaleString();
        
        // Update metrics
        for (const [metric, value] of Object.entries(this.gameState.metrics)) {
            if (this.elements.metrics[metric]) {
                this.elements.metrics[metric].meter.style.width = `${value}%`;
                this.elements.metrics[metric].value.textContent = value;
                
                // Color coding
                this.setMeterColor(this.elements.metrics[metric].meter, value);
            }
        }
        
        // Update values
        for (const [value, rating] of Object.entries(this.gameState.values)) {
            if (this.elements.values[value]) {
                this.elements.values[value].meter.style.width = `${rating}%`;
                this.elements.values[value].value.textContent = rating;
                
                // Color coding
                this.setMeterColor(this.elements.values[value].meter, rating);
            }
        }
        
        // Update factions
        for (const [faction, rating] of Object.entries(this.gameState.factions)) {
            if (this.elements.factions[faction]) {
                this.elements.factions[faction].meter.style.width = `${rating}%`;
                this.elements.factions[faction].value.textContent = rating;
                
                // Color coding
                this.setMeterColor(this.elements.factions[faction].meter, rating);
            }
        }
    }

    // Set meter color based on value
    setMeterColor(meterElement, value) {
        if (value <= 20) {
            meterElement.className = 'meter critical';
        } else if (value <= 40) {
            meterElement.className = 'meter poor';
        } else if (value <= 60) {
            meterElement.className = 'meter average';
        } else if (value <= 80) {
            meterElement.className = 'meter good';
        } else {
            meterElement.className = 'meter excellent';
        }
    }

    // Game over
    gameOver() {
        this.isRunning = false;
        
        // Get reason for game over
        const reason = this.gameState.getGameOverReason();
        
        // Update game over screen
        this.elements.gameOver.reason.textContent = reason;
        this.elements.gameOver.yearsSurvived.textContent = this.gameState.year;
        
        // Generate final stats
        this.elements.gameOver.stats.innerHTML = this.generateStatsHTML();
        
        // Show game over screen
        this.showScreen('gameOver');
    }
}

// Initialize game when document is ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new Game();
    window.game.init();
});
