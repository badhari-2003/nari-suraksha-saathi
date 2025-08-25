// Nari Suraksha Saathi - JavaScript functionality (Fixed)

// Data from the provided JSON
const appData = {
  ngos: [
    {
      name: "Women's Rights Foundation",
      focus: "Workplace Harassment",
      location: "New Delhi",
      phone: "011-XXXX-XXXX",
      whatsapp: "91XXXXXXXXXX",
      description: "Provides legal support and counseling for workplace harassment cases"
    },
    {
      name: "Legal Aid Society",
      focus: "Labor Rights",
      location: "Mumbai",
      phone: "022-XXXX-XXXX", 
      whatsapp: "91XXXXXXXXXX",
      description: "Free legal aid for informal sector workers and labor law violations"
    },
    {
      name: "Domestic Workers Union",
      focus: "Worker Protection",
      location: "Bangalore",
      phone: "080-XXXX-XXXX",
      whatsapp: "91XXXXXXXXXX", 
      description: "Union support for domestic workers' rights and safety"
    },
    {
      name: "SafeSpace NGO",
      focus: "Violence Prevention",
      location: "Chennai",
      phone: "044-XXXX-XXXX",
      whatsapp: "91XXXXXXXXXX",
      description: "24/7 helpline and support for women facing violence"
    },
    {
      name: "Empowerment Collective",
      focus: "Economic Rights",
      location: "Kolkata", 
      phone: "033-XXXX-XXXX",
      whatsapp: "91XXXXXXXXXX",
      description: "Financial literacy and economic empowerment for women"
    },
    {
      name: "Justice For All",
      focus: "Legal Support",
      location: "Pune",
      phone: "020-XXXX-XXXX",
      whatsapp: "91XXXXXXXXXX",
      description: "Comprehensive legal support and representation"
    }
  ],
  safetyTips: [
    "Always inform someone trusted about your work location and timings",
    "Keep emergency contacts saved with speed dial",
    "Trust your instincts - if something feels wrong, seek help immediately",
    "Learn about your basic rights as a worker",
    "Keep important documents in a safe, accessible place",
    "Build a support network with other workers",
    "Know the local police station and NGO contacts",
    "Document any inappropriate incidents with dates and details"
  ],
  myRightsContent: {
    english: {
      harassment: [
        "Verbal harassment includes unwelcome comments about appearance, personal life, or threats",
        "Physical harassment involves unwanted touching, blocking someone's path, or physical intimidation", 
        "Sexual harassment includes unwelcome sexual advances, requests for sexual favors, or sexual jokes",
        "Creating a hostile work environment through discriminatory behavior is also harassment"
      ],
      rights: [
        "You have the right to a safe and respectful workplace",
        "You have the right to report harassment without fear of retaliation",
        "You have the right to seek legal assistance and support",
        "You have the right to fair wages and working conditions",
        "You have the right to organize and join worker groups"
      ],
      posh: [
        "The POSH Act (Prevention of Sexual Harassment) protects all women at workplaces",
        "It applies to both organized and unorganized sectors",
        "Employers must provide a safe working environment",
        "Internal Complaints Committees should be formed for addressing complaints",
        "Confidentiality and non-retaliation are guaranteed"
      ]
    },
    hindi: {
      harassment: [
        "मौखिक उत्पीड़न में रूप-रंग, व्यक्तिगत जीवन पर अवांछित टिप्पणी या धमकी शामिल है",
        "शारीरिक उत्पीड़न में अवांछित स्पर्श, रास्ता रोकना या शारीरिक धमकी शामिल है",
        "यौन उत्पीड़न में अवांछित यौन प्रस्ताव, यौन सुविधा की मांग या यौन चुटकुले शामिल हैं",
        "भेदभावपूर्ण व्यवहार के माध्यम से शत्रुतापूर्ण कार्य वातावरण बनाना भी उत्पीड़न है"
      ],
      rights: [
        "आपको सुरक्षित और सम्मानजनक कार्यक्षेत्र का अधिकार है",
        "आपको बदले के डर के बिना उत्पीड़न की रिपोर्ट करने का अधिकार है",
        "आपको कानूनी सहायता और समर्थन मांगने का अधिकार है",
        "आपको उचित मजदूरी और काम की परिस्थितियों का अधिकार है",
        "आपको संगठित होने और मजदूर समूहों में शामिल होने का अधिकार है"
      ],
      posh: [
        "POSH अधिनियम (यौन उत्पीड़न की रोकथाम) सभी महिलाओं को कार्यक्षेत्र में सुरक्षा देता है",
        "यह संगठित और असंगठित दोनों क्षेत्रों में लागू होता है",
        "नियोक्ताओं को सुरक्षित कार्य वातावरण प्रदान करना चाहिए",
        "शिकायतों के निपटारे के लिए आंतरिक शिकायत समितियां बनानी चाहिए",
        "गोपनीयता और गैर-प्रतिशोध की गारंटी है"
      ]
    }
  }
};

// Global variables
let currentLanguage = 'english';
let filteredNgos = [...appData.ngos];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Nari Suraksha Saathi...');
    
    // Setup all functionality
    setupNavigation();
    setupIncidentReporting();
    setupLanguageToggle();
    setupNgoDirectory();
    setupSafetyTips();
    loadRightsContent();
    
    // Show home section by default
    showSection('home');
    
    console.log('Nari Suraksha Saathi initialized successfully');
});

// Navigation functionality
function setupNavigation() {
    console.log('Setting up navigation...');
    
    // Bottom navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        console.log(`Setting up nav item ${index}:`, item.dataset.section);
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            console.log('Nav item clicked:', section);
            showSection(section);
        });
    });
    
    // Quick action buttons
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach((btn, index) => {
        console.log(`Setting up quick action ${index}:`, btn.dataset.section);
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            console.log('Quick action clicked:', section);
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    console.log('Showing section:', sectionName);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('Section activated:', sectionName);
    } else {
        console.error('Section not found:', sectionName);
    }
    
    // Update navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionName) {
            item.classList.add('active');
        }
    });
}

// Incident reporting functionality
function setupIncidentReporting() {
    console.log('Setting up incident reporting...');
    
    const incidentForm = document.getElementById('incident-form');
    if (!incidentForm) {
        console.error('Incident form not found');
        return;
    }
    
    incidentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        
        // Get form data
        const incidentType = document.getElementById('incident-type').value;
        const incidentDescription = document.getElementById('incident-description').value;
        const incidentLocation = document.getElementById('incident-location').value;
        const incidentDate = document.getElementById('incident-date').value;
        const anonymousRadio = document.querySelector('input[name="anonymous"]:checked');
        const anonymous = anonymousRadio ? anonymousRadio.value : 'yes';
        
        const incidentData = {
            type: incidentType,
            description: incidentDescription,
            location: incidentLocation,
            date: incidentDate,
            anonymous: anonymous
        };
        
        // Validate required fields
        if (!incidentData.type || !incidentData.description.trim()) {
            alert('Please fill in all required fields (Type and Description)');
            return;
        }
        
        // Display success message and data
        displayReportSuccess(incidentData);
        
        // Log to console (as specified in requirements)
        console.log('Incident Report (PROTOTYPE - NOT SENT):', incidentData);
    });
}

function displayReportSuccess(data) {
    console.log('Displaying report success');
    
    const incidentForm = document.getElementById('incident-form');
    const reportSuccess = document.getElementById('report-success');
    const submittedData = document.getElementById('submitted-data');
    
    // Hide form, show success
    incidentForm.classList.add('hidden');
    reportSuccess.classList.remove('hidden');
    
    // Format the submitted data
    const typeLabels = {
        'verbal': 'Verbal Harassment',
        'physical': 'Physical Harassment', 
        'sexual': 'Sexual Harassment',
        'other': 'Other'
    };
    
    const dataHtml = `
        <p><strong>Incident Type:</strong> ${typeLabels[data.type] || data.type}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Location:</strong> ${data.location || 'Not specified'}</p>
        <p><strong>Date:</strong> ${data.date || 'Not specified'}</p>
        <p><strong>Anonymous:</strong> ${data.anonymous === 'yes' ? 'Yes' : 'No'}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
    `;
    
    submittedData.innerHTML = dataHtml;
}

function resetReportForm() {
    console.log('Resetting report form');
    const incidentForm = document.getElementById('incident-form');
    const reportSuccess = document.getElementById('report-success');
    
    incidentForm.reset();
    incidentForm.classList.remove('hidden');
    reportSuccess.classList.add('hidden');
}

// Language toggle functionality
function setupLanguageToggle() {
    console.log('Setting up language toggle...');
    
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            console.log('Language changed to:', lang);
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update button states
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update content
    loadRightsContent();
}

function loadRightsContent() {
    console.log('Loading rights content for language:', currentLanguage);
    
    const content = appData.myRightsContent[currentLanguage];
    
    // Update harassment list
    const harassmentList = document.getElementById('harassment-list');
    if (harassmentList) {
        harassmentList.innerHTML = '';
        content.harassment.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            harassmentList.appendChild(li);
        });
    }
    
    // Update rights list
    const rightsList = document.getElementById('rights-list');
    if (rightsList) {
        rightsList.innerHTML = '';
        content.rights.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            rightsList.appendChild(li);
        });
    }
    
    // Update POSH list
    const poshList = document.getElementById('posh-list');
    if (poshList) {
        poshList.innerHTML = '';
        content.posh.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            poshList.appendChild(li);
        });
    }
}

// NGO directory functionality
function setupNgoDirectory() {
    console.log('Setting up NGO directory...');
    
    // Setup search functionality
    const searchInput = document.getElementById('search-ngos');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            console.log('Searching NGOs for:', searchTerm);
            filterNgos(searchTerm);
        });
    }
    
    // Initial render
    renderNgoList();
}

function filterNgos(searchTerm) {
    if (!searchTerm) {
        filteredNgos = [...appData.ngos];
    } else {
        filteredNgos = appData.ngos.filter(ngo => 
            ngo.focus.toLowerCase().includes(searchTerm) ||
            ngo.name.toLowerCase().includes(searchTerm) ||
            ngo.location.toLowerCase().includes(searchTerm)
        );
    }
    renderNgoList();
}

function renderNgoList() {
    console.log('Rendering NGO list, count:', filteredNgos.length);
    
    const ngoList = document.getElementById('ngo-list');
    if (!ngoList) {
        console.error('NGO list element not found');
        return;
    }
    
    if (filteredNgos.length === 0) {
        ngoList.innerHTML = '<div class="card"><div class="card__body"><p>No organizations found matching your search.</p></div></div>';
        return;
    }
    
    ngoList.innerHTML = '';
    
    filteredNgos.forEach(ngo => {
        const ngoCard = createNgoCard(ngo);
        ngoList.appendChild(ngoCard);
    });
}

function createNgoCard(ngo) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'ngo-card';
    
    cardDiv.innerHTML = `
        <div class="ngo-header">
            <h3 class="ngo-name">${ngo.name}</h3>
            <span class="ngo-focus">${ngo.focus}</span>
        </div>
        <div class="ngo-body">
            <p class="ngo-location">📍 ${ngo.location}</p>
            <p class="ngo-description">${ngo.description}</p>
            <div class="ngo-actions">
                <a href="tel:${ngo.phone}" class="ngo-btn ngo-btn--call">
                    📞 Call Now
                </a>
                <a href="https://wa.me/${ngo.whatsapp}" target="_blank" class="ngo-btn ngo-btn--whatsapp">
                    💬 WhatsApp
                </a>
            </div>
        </div>
    `;
    
    return cardDiv;
}

// Safety tips functionality
function setupSafetyTips() {
    console.log('Setting up safety tips...');
    
    const safetyTipsList = document.getElementById('safety-tips-list');
    if (!safetyTipsList) {
        console.error('Safety tips list not found');
        return;
    }
    
    const safetyIcons = ['🛡️', '📱', '👥', '📚', '📋', '🤝', '🏢', '📝'];
    
    appData.safetyTips.forEach((tip, index) => {
        const tipDiv = document.createElement('div');
        tipDiv.className = 'safety-tip';
        
        const icon = safetyIcons[index] || '💡';
        
        tipDiv.innerHTML = `
            <div class="safety-tip-icon">${icon}</div>
            <div class="safety-tip-text">${tip}</div>
        `;
        
        safetyTipsList.appendChild(tipDiv);
    });
    
    console.log('Safety tips rendered:', appData.safetyTips.length);
}

// Expose reset function globally for the button onclick
window.resetReportForm = resetReportForm;

// Console message for developers
console.log(`
🌟 Nari Suraksha Saathi - Woman's Safety Companion
⚠️  PROTOTYPE APPLICATION - Educational purposes only
📝 No real data is sent or stored
🔒 All contacts and reports are simulated
`);

// Track user interactions for prototype analytics (console only)
function trackInteraction(action, details) {
    console.log(`User Interaction [PROTOTYPE]: ${action}`, details);
}

// Add interaction tracking to key elements
document.addEventListener('click', function(e) {
    if (e.target.matches('.nav-item')) {
        trackInteraction('Navigation', { section: e.target.dataset.section });
    } else if (e.target.matches('.ngo-btn')) {
        trackInteraction('NGO Contact', { type: e.target.textContent.includes('Call') ? 'call' : 'whatsapp' });
    } else if (e.target.matches('.lang-btn')) {
        trackInteraction('Language Change', { language: e.target.dataset.lang });
    }
});