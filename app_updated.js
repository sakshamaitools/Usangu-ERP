// Application Data
const appData = {
  companyInfo: {
    name: "Tanzania Logistics Company",
    fleet: "1200+ Trucks",
    warehouses: "Multiple Locations",
    operations: "Import/Export & Cross-border Trade",
    countries: ["Tanzania", "Congo", "Uganda", "Rwanda", "Burundi", "Kenya"]
  },
  modules: [
    {
      id: "fleet",
      name: "Fleet Management",
      icon: "🚛",
      description: "Comprehensive fleet management for 1200+ trucks",
      features: [
        {
          name: "GPS Tracking",
          options: ["Manual Check-ins", "Real-time Automated Tracking", "Hybrid System"],
          description: "Track vehicle locations and routes across East Africa",
          cost: ["Basic", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Fuel Management",
          options: ["Manual Logging", "Automated Fuel Cards", "IoT Sensors"],
          description: "Monitor fuel consumption and costs",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Low"
        },
        {
          name: "Driver Management",
          options: ["Manual Records", "Digital Profiles", "Performance Analytics"],
          description: "Manage driver information, licenses, and performance",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Route Optimization",
          options: ["Manual Planning", "AI-Powered Optimization", "Dynamic Routing"],
          description: "Optimize routes for efficiency and cost savings",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "Maintenance Scheduling",
          options: ["Calendar-based", "Predictive Maintenance", "IoT-enabled"],
          description: "Schedule and track vehicle maintenance",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Cross-border Tracking",
          options: ["Manual Reports", "RECTS Integration", "Full Automation"],
          description: "Track vehicles across international borders",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        }
      ]
    },
    {
      id: "warehouse",
      name: "Warehouse Management",
      icon: "🏭",
      description: "Multi-location warehouse operations management",
      features: [
        {
          name: "Inventory Tracking",
          options: ["Manual Counts", "Barcode Scanning", "RFID Technology"],
          description: "Real-time inventory visibility across all locations",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Location Management",
          options: ["Basic Zones", "Detailed Mapping", "3D Warehouse Layout"],
          description: "Manage warehouse layouts and storage locations",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Goods Receiving",
          options: ["Manual Process", "Barcode Scanning", "Automated Systems"],
          description: "Streamline incoming goods processing",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Low"
        },
        {
          name: "Stock Management",
          options: ["FIFO", "FEFO", "Custom Rules"],
          description: "Implement stock rotation policies",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Multi-location Support",
          options: ["Single View", "Distributed Management", "Central Control"],
          description: "Manage multiple warehouse locations",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        }
      ]
    },
    {
      id: "customs",
      name: "Port Clearance & Customs",
      icon: "🛃",
      description: "Integrated customs and port clearance management",
      features: [
        {
          name: "TANCIS Integration",
          options: ["Manual Entry", "API Integration", "Full Automation"],
          description: "Direct integration with Tanzania Customs system",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "Congo Customs Integration",
          options: ["Manual Process", "TANCIS Connection", "Direct Integration"],
          description: "Handle Congo customs through Tanzania systems",
          cost: ["Premium", "Enterprise", "Custom"],
          complexity: "High"
        },
        {
          name: "Document Management",
          options: ["File Storage", "Digital Workflow", "AI Processing"],
          description: "Manage all customs and shipping documents",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Port Charges Calculation",
          options: ["Manual Calculation", "Automated System", "Real-time Rates"],
          description: "Calculate port and handling charges",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Clearance Tracking",
          options: ["Status Updates", "Real-time Tracking", "Predictive Analytics"],
          description: "Track clearance progress and bottlenecks",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        }
      ]
    },
    {
      id: "importexport",
      name: "Import/Export Management",
      icon: "🌍",
      description: "Complete import/export operations management",
      features: [
        {
          name: "Documentation Automation",
          options: ["Templates", "Auto-generation", "AI-powered"],
          description: "Automate creation of import/export documents",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Trade Finance Management",
          options: ["Basic Tracking", "Bank Integration", "Full Automation"],
          description: "Manage letters of credit and trade finance",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "Permits Management",
          options: ["Manual Tracking", "Digital Workflow", "Government APIs"],
          description: "Track and manage import/export permits",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Shipping Documentation",
          options: ["Manual Creation", "Template System", "Auto-generation"],
          description: "Generate bills of lading and shipping docs",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Low"
        },
        {
          name: "Currency Management",
          options: ["Fixed Rates", "Real-time Rates", "Hedging Tools"],
          description: "Handle multi-currency transactions",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        }
      ]
    },
    {
      id: "crossborder",
      name: "Cross-border Operations",
      icon: "🌐",
      description: "Specialized cross-border trade management",
      features: [
        {
          name: "Corridor Management",
          options: ["Basic Tracking", "Route Optimization", "Full Integration"],
          description: "Manage Tanzania-Congo and other corridors",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "RECTS Integration",
          options: ["Manual Reporting", "API Integration", "Real-time Sync"],
          description: "Integrate with Regional Electronic Cargo Tracking",
          cost: ["Premium", "Enterprise", "Custom"],
          complexity: "High"
        },
        {
          name: "Multi-country Compliance",
          options: ["Manual Checks", "Automated Validation", "AI Compliance"],
          description: "Ensure compliance across multiple countries",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "Transit Cargo Management",
          options: ["Basic Tracking", "Real-time Monitoring", "Predictive Analytics"],
          description: "Manage goods in transit across borders",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        }
      ]
    },
    {
      id: "financial",
      name: "Financial Management",
      icon: "💰",
      description: "Comprehensive financial and accounting system",
      features: [
        {
          name: "Multi-currency Accounting",
          options: ["Basic Support", "Real-time Conversion", "Advanced Hedging"],
          description: "Handle multiple currencies and exchange rates",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Cost Center Management",
          options: ["Basic Allocation", "Detailed Tracking", "Activity-based"],
          description: "Track costs by department and operation",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Payroll Management",
          options: ["Basic Payroll", "Integrated System", "Advanced Analytics"],
          description: "Manage payroll for 1200+ employees",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Tax Management",
          options: ["Manual Calculation", "Automated System", "Multi-country"],
          description: "Handle VAT and other taxes across countries",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "Financial Reporting",
          options: ["Standard Reports", "Custom Dashboards", "AI Insights"],
          description: "Generate financial reports and analytics",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Low"
        }
      ]
    },
    {
      id: "crm",
      name: "CRM & Customer Management",
      icon: "👥",
      description: "Customer relationship and service management",
      features: [
        {
          name: "Customer Database",
          options: ["Basic Records", "Detailed Profiles", "360° View"],
          description: "Comprehensive customer information management",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Low"
        },
        {
          name: "Quotation System",
          options: ["Manual Quotes", "Template System", "AI-powered"],
          description: "Generate and track service quotations",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Order Management",
          options: ["Basic Tracking", "Workflow System", "Automated Processing"],
          description: "Track and manage customer orders",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Contract Management",
          options: ["Document Storage", "Workflow System", "AI Analysis"],
          description: "Manage customer contracts and SLAs",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        }
      ]
    },
    {
      id: "hr",
      name: "HR Management",
      icon: "👨‍💼",
      description: "Human resources management for large workforce",
      features: [
        {
          name: "Employee Records",
          options: ["Basic Files", "Digital Profiles", "Advanced Analytics"],
          description: "Manage records for 1200+ employees",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Low"
        },
        {
          name: "Driver Licensing",
          options: ["Manual Tracking", "Automated Alerts", "Integration with Authorities"],
          description: "Track driver licenses and renewals",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Training Management",
          options: ["Basic Tracking", "Learning Management", "Compliance Tracking"],
          description: "Manage employee training programs",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Performance Tracking",
          options: ["Manual Reviews", "Automated KPIs", "360° Feedback"],
          description: "Track and evaluate employee performance",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        }
      ]
    }
  ,
    {
      id: "misc",
      name: "Miscellaneous & Integration", 
      icon: "🔗",
      description: "WhatsApp integration, chatbots, and custom features",
      features: [
        {
          name: "WhatsApp Business API Integration",
          options: ["Manual Messaging", "Automated Notifications", "Full API Integration"],
          description: "Integrate WhatsApp Business API for customer communication",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Driver Communication via WhatsApp",
          options: ["Basic Messaging", "Group Management", "Automated Updates"],
          description: "Communicate with 1200+ drivers through WhatsApp",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Low"
        },
        {
          name: "Payment Confirmation Messages",
          options: ["Manual Confirmations", "Semi-Automated", "Fully Automated"],
          description: "Send payment confirmations via WhatsApp",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        },
        {
          name: "Delivery Notification Automation",
          options: ["Basic Notifications", "Real-time Updates", "Predictive Notifications"],
          description: "Automate delivery status updates to customers",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Fleet Status Notifications",
          options: ["Manual Reports", "Automated Alerts", "AI-Powered Insights"],
          description: "Real-time fleet status updates and alerts",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Customer Service Chatbot",
          options: ["Basic FAQ Bot", "AI-Powered Assistant", "Advanced NLP Bot"],
          description: "24/7 automated customer service chatbot",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "Multi-language Chatbot Support",
          options: ["English Only", "English + Swahili", "Multi-language Support"],
          description: "Support for Swahili and English chatbot interactions",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Custom Integration Builder",
          options: ["Basic Templates", "Visual Builder", "Advanced API Builder"],
          description: "Build custom integrations with third-party systems",
          cost: ["Premium", "Enterprise", "Custom"],
          complexity: "High"
        },
        {
          name: "User-Defined Fields Creator",
          options: ["Basic Fields", "Advanced Field Types", "Dynamic Schema Builder"],
          description: "Create custom fields for business-specific requirements",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "Medium"
        },
        {
          name: "Workflow Automation Builder",
          options: ["Template-based", "Visual Workflow Designer", "Code-based Workflows"],
          description: "Build custom business process workflows",
          cost: ["Premium", "Enterprise", "Custom"],
          complexity: "High"
        },
        {
          name: "Third-Party API Connector",
          options: ["Pre-built Connectors", "Custom API Integration", "Enterprise Middleware"],
          description: "Connect with external systems and APIs",
          cost: ["Standard", "Premium", "Enterprise"],
          complexity: "High"
        },
        {
          name: "Custom Notification System",
          options: ["Email/SMS Only", "Multi-channel Notifications", "AI-Powered Alerts"],
          description: "Design custom notification and alert systems",
          cost: ["Basic", "Standard", "Premium"],
          complexity: "Medium"
        }
      ]
    }
  ]
};

// Application State
let appState = {
  currentPage: 'dashboard',
  selectedFeatures: {},
  panelCollapsed: false
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initializeApp, 100); // Small delay to ensure DOM is fully ready
});

function initializeApp() {
  renderModulesGrid();
  renderModulePages();
  setupNavigation();
  updateStats();
  updateSelectionPanel();
}

// Navigation Setup
function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const page = this.dataset.page;
      console.log('Navigating to:', page); // Debug log
      navigateToPage(page);
    });
  });
}

function navigateToPage(pageId) {
  console.log('Navigating to page:', pageId); // Debug log
  
  // Update navigation buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-page="${pageId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    console.log('Successfully navigated to:', pageId); // Debug log
  } else {
    console.error('Page not found:', pageId); // Debug log
  }
  
  appState.currentPage = pageId;
  
  // Update summary if on summary page
  if (pageId === 'summary') {
    updateSummaryPage();
  }
}

// Render Modules Grid
function renderModulesGrid() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  appData.modules.forEach(module => {
    const moduleCard = createModuleCard(module);
    grid.appendChild(moduleCard);
  });
}

function createModuleCard(module) {
  const card = document.createElement('div');
  card.className = 'module-card';
  
  const selectedCount = getSelectedFeaturesCount(module.id);
  const totalFeatures = module.features.length;
  const isConfigured = selectedCount > 0;
  
  card.innerHTML = `
    <div class="module-header">
      <span class="module-icon">${module.icon}</span>
      <h3>${module.name}</h3>
    </div>
    <p>${module.description}</p>
    <div class="module-progress">
      <span class="features-count">${totalFeatures} features available</span>
      <span class="selection-status ${isConfigured ? 'configured' : ''}">
        ${selectedCount}/${totalFeatures} selected
      </span>
    </div>
  `;
  
  // Add click handler with event prevention
  card.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Module card clicked:', module.id); // Debug log
    navigateToPage(module.id);
  });
  
  return card;
}

// Render Module Pages
function renderModulePages() {
  const container = document.getElementById('module-pages');
  if (!container) return;
  
  // Clear existing pages (except dashboard and summary)
  const existingModulePages = container.querySelectorAll('.page');
  existingModulePages.forEach(page => page.remove());
  
  appData.modules.forEach(module => {
    const page = createModulePage(module);
    container.appendChild(page);
  });
}

function createModulePage(module) {
  const page = document.createElement('div');
  page.id = module.id;
  page.className = 'page';
  
  page.innerHTML = `
    <div class="container">
      <div class="module-page-header">
        <span class="module-icon">${module.icon}</span>
        <div>
          <h2>${module.name}</h2>
          <p>${module.description}</p>
        </div>
      </div>
      <div class="features-grid">
        ${module.features.map(feature => createFeatureCard(module.id, feature)).join('')}
      </div>
    </div>
  `;
  
  return page;
}

function createFeatureCard(moduleId, feature) {
  const featureKey = `${moduleId}_${feature.name.replace(/\s+/g, '_').replace(/[&\/]/g, '_')}`;
  const isSelected = appState.selectedFeatures[featureKey] ? true : false;
  const selectedOption = appState.selectedFeatures[featureKey]?.option || feature.options[0];
  
  return `
    <div class="feature-card ${isSelected ? 'selected' : ''}" data-feature-key="${featureKey}">
      <div class="feature-header">
        <h3>${feature.name}</h3>
        <div class="feature-toggle">
          <span style="font-size: 12px; color: var(--color-text-secondary);">Enable</span>
          <div class="toggle-switch ${isSelected ? 'active' : ''}" 
               onclick="toggleFeature('${moduleId}', '${feature.name.replace(/'/g, "\\'")}')">
          </div>
        </div>
      </div>
      <p class="feature-description">${feature.description}</p>
      <div class="feature-options">
        ${feature.options.map((option, index) => `
          <div class="option-item">
            <input type="radio" 
                   id="${featureKey}_${index}"
                   name="${featureKey}" 
                   value="${option}"
                   ${selectedOption === option ? 'checked' : ''}
                   onchange="updateFeatureOption('${moduleId}', '${feature.name.replace(/'/g, "\\'")}', '${option.replace(/'/g, "\\'")}')"
                   ${!isSelected ? 'disabled' : ''}>
            <label for="${featureKey}_${index}">${option}</label>
          </div>
        `).join('')}
      </div>
      <div class="feature-meta">
        <div class="meta-item">
          <span>💼</span>
          <span>Cost: ${feature.cost.join(', ')}</span>
        </div>
        <div class="meta-item">
          <span>⚙️</span>
          <span class="complexity-${feature.complexity.toLowerCase()}">
            Complexity: ${feature.complexity}
          </span>
        </div>
        <div class="meta-item">
          <span style="cursor: pointer; color: var(--color-primary);" 
                onclick="showFeatureDetails('${moduleId}', '${feature.name.replace(/'/g, "\\'")}')">
            ℹ️ Details
          </span>
        </div>
      </div>
    </div>
  `;
}

// Feature Selection Functions
function toggleFeature(moduleId, featureName) {
  console.log('Toggling feature:', moduleId, featureName); // Debug log
  
  const featureKey = `${moduleId}_${featureName.replace(/\s+/g, '_').replace(/[&\/]/g, '_')}`;
  const module = appData.modules.find(m => m.id === moduleId);
  const feature = module.features.find(f => f.name === featureName);
  
  if (!feature) {
    console.error('Feature not found:', featureName);
    return;
  }
  
  if (appState.selectedFeatures[featureKey]) {
    delete appState.selectedFeatures[featureKey];
    console.log('Feature deselected:', featureKey);
  } else {
    appState.selectedFeatures[featureKey] = {
      moduleId: moduleId,
      featureName: featureName,
      option: feature.options[0],
      cost: feature.cost[0],
      complexity: feature.complexity
    };
    console.log('Feature selected:', featureKey, appState.selectedFeatures[featureKey]);
  }
  
  // Force immediate UI update
  updateStats();
  updateSelectionPanel();
  updateCurrentModulePage();
  updateModuleCards();
}

function updateFeatureOption(moduleId, featureName, option) {
  console.log('Updating feature option:', moduleId, featureName, option); // Debug log
  
  const featureKey = `${moduleId}_${featureName.replace(/\s+/g, '_').replace(/[&\/]/g, '_')}`;
  if (appState.selectedFeatures[featureKey]) {
    appState.selectedFeatures[featureKey].option = option;
    const feature = appData.modules.find(m => m.id === moduleId).features.find(f => f.name === featureName);
    const optionIndex = feature.options.indexOf(option);
    appState.selectedFeatures[featureKey].cost = feature.cost[optionIndex] || feature.cost[0];
    
    updateStats();
    updateSelectionPanel();
  }
}

function getSelectedFeaturesCount(moduleId) {
  return Object.keys(appState.selectedFeatures).filter(key => key.startsWith(moduleId + '_')).length;
}

function updateCurrentModulePage() {
  if (appState.currentPage !== 'dashboard' && appState.currentPage !== 'summary') {
    const module = appData.modules.find(m => m.id === appState.currentPage);
    if (module) {
      const currentPageElement = document.getElementById(appState.currentPage);
      if (currentPageElement) {
        currentPageElement.innerHTML = `
          <div class="container">
            <div class="module-page-header">
              <span class="module-icon">${module.icon}</span>
              <div>
                <h2>${module.name}</h2>
                <p>${module.description}</p>
              </div>
            </div>
            <div class="features-grid">
              ${module.features.map(feature => createFeatureCard(module.id, feature)).join('')}
            </div>
          </div>
        `;
      }
    }
  }
}

// UI Update Functions
function updateStats() {
  const configuredModules = appData.modules.filter(module => 
    getSelectedFeaturesCount(module.id) > 0
  ).length;
  
  const totalSelectedFeatures = Object.keys(appState.selectedFeatures).length;
  const estimatedCost = calculateEstimatedCost();
  
  const configuredModulesEl = document.getElementById('configured-modules');
  const selectedFeaturesEl = document.getElementById('selected-features');
  const estimatedCostEl = document.getElementById('estimated-cost');
  
  if (configuredModulesEl) {
    configuredModulesEl.textContent = `${configuredModules}/${appData.modules.length}`;
  }
  if (selectedFeaturesEl) {
    selectedFeaturesEl.textContent = totalSelectedFeatures;
  }
  if (estimatedCostEl) {
    estimatedCostEl.textContent = `$${estimatedCost.toLocaleString()}`;
  }
  
  console.log('Stats updated:', { configuredModules, totalSelectedFeatures, estimatedCost }); // Debug log
}

function calculateEstimatedCost() {
  let total = 0;
  const costMapping = { 'Basic': 1000, 'Standard': 2500, 'Premium': 5000, 'Enterprise': 10000, 'Custom': 15000 };
  
  Object.values(appState.selectedFeatures).forEach(selection => {
    total += costMapping[selection.cost] || 1000;
  });
  
  return total;
}

function updateModuleCards() {
  renderModulesGrid();
}

function updateSelectionPanel() {
  const summary = document.getElementById('selection-summary');
  if (!summary) return;
  
  const selectedCount = Object.keys(appState.selectedFeatures).length;
  
  if (selectedCount === 0) {
    summary.innerHTML = '<p>No features selected yet</p>';
    return;
  }
  
  let html = `<div style="margin-bottom: 16px;"><strong>${selectedCount} features selected</strong></div>`;
  
  const groupedByModule = {};
  Object.entries(appState.selectedFeatures).forEach(([key, selection]) => {
    const module = appData.modules.find(m => m.id === selection.moduleId);
    if (!groupedByModule[selection.moduleId]) {
      groupedByModule[selection.moduleId] = { module: module, features: [] };
    }
    groupedByModule[selection.moduleId].features.push(selection);
  });
  
  Object.values(groupedByModule).forEach(group => {
    html += `
      <div class="selected-item">
        <div class="selected-item-header">${group.module.icon} ${group.module.name}</div>
        ${group.features.map(feature => `
          <div class="selected-item-feature">• ${feature.featureName} (${feature.option})</div>
        `).join('')}
      </div>
    `;
  });
  
  summary.innerHTML = html;
}

// Summary Page Functions
function updateSummaryPage() {
  const container = document.getElementById('selected-summary');
  if (!container) return;
  
  const selectedCount = Object.keys(appState.selectedFeatures).length;
  
  if (selectedCount === 0) {
    container.innerHTML = '<p>No features selected yet. Please go back and select features from the modules.</p>';
    return;
  }
  
  let html = '';
  const groupedByModule = {};
  
  Object.entries(appState.selectedFeatures).forEach(([key, selection]) => {
    const module = appData.modules.find(m => m.id === selection.moduleId);
    if (!groupedByModule[selection.moduleId]) {
      groupedByModule[selection.moduleId] = { module: module, features: [] };
    }
    groupedByModule[selection.moduleId].features.push(selection);
  });
  
  Object.values(groupedByModule).forEach(group => {
    html += `
      <div class="card" style="margin-bottom: 16px;">
        <div class="card__body">
          <h4>${group.module.icon} ${group.module.name}</h4>
          <ul style="margin: 8px 0; padding-left: 20px;">
            ${group.features.map(feature => `
              <li><strong>${feature.featureName}:</strong> ${feature.option} (${feature.cost} tier)</li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// Modal Functions
function showFeatureDetails(moduleId, featureName) {
  const module = appData.modules.find(m => m.id === moduleId);
  const feature = module.features.find(f => f.name === featureName);
  
  const modal = document.getElementById('feature-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  
  if (!modal || !title || !body) return;
  
  title.textContent = `${feature.name} - Details`;
  
  body.innerHTML = `
    <div style="margin-bottom: 16px;">
      <h4>Description</h4>
      <p>${feature.description}</p>
    </div>
    
    <div style="margin-bottom: 16px;">
      <h4>Available Options</h4>
      <ul>
        ${feature.options.map((option, index) => `
          <li><strong>${option}:</strong> ${feature.cost[index]} tier</li>
        `).join('')}
      </ul>
    </div>
    
    <div style="margin-bottom: 16px;">
      <h4>Implementation Details</h4>
      <p><strong>Complexity:</strong> <span class="complexity-${feature.complexity.toLowerCase()}">${feature.complexity}</span></p>
      <p><strong>Cost Range:</strong> ${feature.cost.join(' → ')}</p>
    </div>
    
    <div>
      <h4>Integration Requirements</h4>
      <p>This feature may require integration with existing systems and third-party providers. Detailed technical specifications will be provided during implementation planning.</p>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('feature-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Panel Functions
function togglePanel() {
  const panel = document.getElementById('selection-panel');
  const toggle = document.querySelector('.panel-toggle');
  const mainContent = document.querySelector('.main-content');
  
  if (!panel || !toggle || !mainContent) return;
  
  if (appState.panelCollapsed) {
    panel.style.transform = 'translateX(0)';
    toggle.textContent = '−';
    mainContent.style.marginRight = '320px';
    appState.panelCollapsed = false;
  } else {
    panel.style.transform = 'translateX(100%)';
    toggle.textContent = '+';
    mainContent.style.marginRight = '0';
    appState.panelCollapsed = true;
  }
}

// Export and Save Functions
function exportSummary() {
  const selectedFeatures = Object.values(appState.selectedFeatures);
  const totalCost = calculateEstimatedCost();
  
  const report = {
    company: appData.companyInfo.name,
    generatedDate: new Date().toLocaleDateString(),
    selectedFeatures: selectedFeatures,
    totalEstimatedCost: totalCost,
    modulesSummary: appData.modules.map(module => ({
      name: module.name,
      selectedFeatures: getSelectedFeaturesCount(module.id),
      totalFeatures: module.features.length
    }))
  };
  
  const dataStr = JSON.stringify(report, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Tanzania_Logistics_ERP_Selection.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
  
  alert('Summary report exported successfully!');
}

function saveDraft() {
  alert('Draft saved successfully! In a real application, this would be saved to your account.');
}

function resetSelections() {
  if (confirm('Are you sure you want to reset all selections? This cannot be undone.')) {
    appState.selectedFeatures = {};
    updateStats();
    updateSelectionPanel();
    updateCurrentModulePage();
    updateModuleCards();
    alert('All selections have been reset.');
  }
}

// Event Listeners for Modal
document.addEventListener('click', function(e) {
  if (e.target.id === 'feature-modal') {
    closeModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});