let currentTab="enterprise",techniquesData={},threatGroupsData={},malwareData={},threatIntelligenceData={};const apiService=window.cybersecurityAPI||new CybersecurityAPIService,MITRE_API_BASE="https://attack.mitre.org/api/",VIRUSTOTAL_API_BASE="https://www.virustotal.com/vtapi/v2/",ALIENVAULT_API_BASE="https://otx.alienvault.com/api/v1/";document.addEventListener("DOMContentLoaded",function(){initializeFramework(),loadRealTimeData()});function initializeFramework(){const e=document.getElementById("techniquesList");e&&(e.innerHTML='<div class="loading">Loading MITRE ATT&CK data...</div>'),setupEventListeners(),loadCachedData()}async function loadRealTimeData(){try{await loadTechniquesFromAPI(),await loadThreatGroupsFromAPI(),await loadMalwareFromAPI(),updateFrameworkUI()}catch(e){console.error("Error loading real-time data:",e),loadCachedData()}}async function loadTechniquesFromAPI(){try{const e=await fetch("https://attack.mitre.org/api/techniques/enterprise/");if(e.ok){const t=await e.json();techniquesData=processTechniquesData(t),localStorage.setItem("mitreTechniques",JSON.stringify(techniquesData))}}catch{console.warn("Could not load techniques from API, using cached data")}}async function loadThreatGroupsFromAPI(){try{const e=await fetch("https://attack.mitre.org/api/groups/");if(e.ok){const t=await e.json();threatGroupsData=processThreatGroupsData(t),localStorage.setItem("mitreThreatGroups",JSON.stringify(threatGroupsData))}}catch{console.warn("Could not load threat groups from API, using cached data")}}async function loadMalwareFromAPI(){try{const e=await fetch("https://attack.mitre.org/api/software/");if(e.ok){const t=await e.json();malwareData=processMalwareData(t),localStorage.setItem("mitreMalware",JSON.stringify(malwareData))}}catch{console.warn("Could not load malware from API, using cached data")}}function processTechniquesData(e){const t={};return e.forEach(e=>{const n=e.tactic||"unknown";t[n]||(t[n]=[]),t[n].push({id:e.technique_id,name:e.technique_name,description:e.technique_description,url:e.technique_url,platforms:e.platforms||[],permissions:e.permissions||[],data_sources:e.data_sources||[]})}),t}function processThreatGroupsData(e){return e.map(e=>({id:e.group_id,name:e.group_name,description:e.group_description,url:e.group_url,techniques:e.techniques||[],aliases:e.aliases||[],country:e.country||"Unknown"}))}function processMalwareData(e){return e.map(e=>({id:e.software_id,name:e.software_name,description:e.software_description,url:e.software_url,techniques:e.techniques||[],platforms:e.platforms||[]}))}function loadCachedData(){const e=localStorage.getItem("mitreTechniques"),t=localStorage.getItem("mitreThreatGroups"),n=localStorage.getItem("mitreMalware");e&&(techniquesData=JSON.parse(e)),t&&(threatGroupsData=JSON.parse(t)),n&&(malwareData=JSON.parse(n)),updateFrameworkUI()}function updateFrameworkUI(){updateTechniqueExplorer(),updateThreatGroupsSection(),updateMalwareSection(),updateStatistics()}function updateTechniqueExplorer(){const e=document.getElementById("techniquesList");if(!e)return;e.innerHTML="<p>Select a tactic from the matrix above to view techniques.</p>"}function displayTechniques(e,t){const n=document.getElementById("techniquesList");if(!n)return;if(n.innerHTML="",e.length===0){n.innerHTML="<p>No techniques found for this tactic.</p>";return}const s=document.createElement("h3");s.textContent=`${t.charAt(0).toUpperCase()+t.slice(1).replace("-"," ")} Techniques`,n.appendChild(s),e.forEach(e=>{const t=document.createElement("div");t.className="technique-item enhanced",t.innerHTML=`
            <div class="technique-header">
                <h4>${e.id} - ${e.name}</h4>
                <div class="technique-meta">
                    <span class="platforms">${e.platforms?.join(", ")||"All platforms"}</span>
                    <span class="permissions">${e.permissions?.join(", ")||"No specific permissions"}</span>
                </div>
            </div>
            <p>${e.description}</p>
            <div class="technique-details">
                <div class="data-sources">
                    <strong>Data Sources:</strong> ${e.data_sources?.join(", ")||"Not specified"}
                </div>
                <div class="technique-actions">
                    <button onclick="showTechniqueDetails('${e.id}')" class="btn-details">Details</button>
                    <button onclick="addToFavorites('${e.id}')" class="btn-favorite">Favorite</button>
                    <button onclick="searchRelatedThreats('${e.id}')" class="btn-threats">Related Threats</button>
                </div>
            </div>
        `,n.appendChild(t)})}async function searchTechniques(){const t=document.getElementById("techniqueSearch");if(!t)return;const e=t.value.toLowerCase();if(e.length<2){displaySearchResults([]);return}const n=getAllTechniquesFromData(),s=n.filter(t=>t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.id.toLowerCase().includes(e));displaySearchResults(s)}function getAllTechniquesFromData(){const e=[];return Object.keys(techniquesData).forEach(t=>{techniquesData[t].forEach(n=>{n.tactic=t,e.push(n)})}),e}function updateThreatGroupsSection(){const e=document.querySelector(".threat-groups");if(!e||!threatGroupsData.length)return;e.innerHTML="<h3>Threat Groups (Live Data)</h3>",threatGroupsData.slice(0,6).forEach(t=>{const n=document.createElement("div");n.className="group-card enhanced",n.innerHTML=`
            <div class="group-header">
                <h4>${t.name}</h4>
                <span class="group-country">${t.country}</span>
            </div>
            <p>${t.description}</p>
            <div class="group-techniques">
                ${t.techniques.slice(0,5).map(e=>`<span class="technique">${e}</span>`).join("")}
                ${t.techniques.length>5?'<span class="more-techniques">+'+(t.techniques.length-5)+" more</span>":""}
            </div>
            <div class="group-actions">
                <button onclick="showGroupDetails('${t.id}')" class="btn-details">Details</button>
                <button onclick="searchGroupTechniques('${t.id}')" class="btn-techniques">View Techniques</button>
            </div>
        `,e.appendChild(n)})}function updateMalwareSection(){const t=document.querySelector(".malware-section");if(!t){const e=document.createElement("div");e.className="malware-section",e.innerHTML="<h3>Malware (Live Data)</h3>",document.querySelector(".mitre-attack-framework").appendChild(e)}if(!malwareData.length)return;const e=document.querySelector(".malware-section");e.innerHTML="<h3>Malware (Live Data)</h3>",malwareData.slice(0,6).forEach(t=>{const n=document.createElement("div");n.className="malware-card enhanced",n.innerHTML=`
            <div class="malware-header">
                <h4>${t.name}</h4>
                <span class="malware-platforms">${t.platforms.join(", ")}</span>
            </div>
            <p>${t.description}</p>
            <div class="malware-techniques">
                ${t.techniques.slice(0,3).map(e=>`<span class="technique">${e}</span>`).join("")}
                ${t.techniques.length>3?'<span class="more-techniques">+'+(t.techniques.length-3)+" more</span>":""}
            </div>
            <div class="malware-actions">
                <button onclick="showMalwareDetails('${t.id}')" class="btn-details">Details</button>
                <button onclick="searchMalwareTechniques('${t.id}')" class="btn-techniques">View Techniques</button>
            </div>
        `,e.appendChild(n)})}function updateStatistics(){const e=document.querySelector(".mitre-stats");if(!e){const e=document.createElement("div");e.className="mitre-stats",document.querySelector(".mitre-attack-framework").insertBefore(e,document.querySelector(".mitre-tabs"))}const t=document.querySelector(".mitre-stats"),n=getAllTechniquesFromData().length,s=threatGroupsData.length,o=malwareData.length;t.innerHTML=`
        <div class="stats-grid">
            <div class="stat-card">
                <h3>${n}</h3>
                <p>Techniques</p>
            </div>
            <div class="stat-card">
                <h3>${s}</h3>
                <p>Threat Groups</p>
            </div>
            <div class="stat-card">
                <h3>${o}</h3>
                <p>Malware</p>
            </div>
            <div class="stat-card">
                <h3>14</h3>
                <p>Tactics</p>
            </div>
        </div>
    `}async function showTechniqueDetails(e){try{const t=await fetch(`https://attack.mitre.org/api/techniques/${e}/`);if(t.ok){const e=await t.json();showDetailedTechniqueModal(e)}else showBasicTechniqueModal(e)}catch{showBasicTechniqueModal(e)}}function showDetailedTechniqueModal(e){const t=document.createElement("div");t.className="technique-modal",t.innerHTML=`
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${e.technique_id} - ${e.technique_name}</h2>
            <div class="technique-details">
                <p><strong>Description:</strong> ${e.technique_description}</p>
                <p><strong>Platforms:</strong> ${e.platforms?.join(", ")||"All platforms"}</p>
                <p><strong>Permissions:</strong> ${e.permissions?.join(", ")||"No specific permissions"}</p>
                <p><strong>Data Sources:</strong> ${e.data_sources?.join(", ")||"Not specified"}</p>
                <p><strong>URL:</strong> <a href="${e.technique_url}" target="_blank">View on MITRE ATT&CK</a></p>
            </div>
            <div class="modal-actions">
                <button onclick="addToFavorites('${e.technique_id}')">Add to Favorites</button>
                <button onclick="searchRelatedThreats('${e.technique_id}')">Find Related Threats</button>
            </div>
        </div>
    `,document.body.appendChild(t);const n=t.querySelector(".close");n.onclick=()=>t.remove(),window.onclick=e=>{e.target===t&&t.remove()}}function showBasicTechniqueModal(e){alert(`Detailed information for ${e} would be displayed here.

This could include:
- Detailed description
- Examples of use
- Detection methods
- Mitigation strategies
- Related techniques
- Threat groups that use this technique`)}async function searchRelatedThreats(e){try{const t=await fetch(`https://attack.mitre.org/api/techniques/${e}/groups/`);if(t.ok){const n=await t.json();showRelatedThreatsModal(e,n)}else alert(`No related threat groups found for ${e}`)}catch(e){alert(`Error searching for related threats: ${e.message}`)}}function showRelatedThreatsModal(e,t){const n=document.createElement("div");n.className="threats-modal",n.innerHTML=`
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Threat Groups Using ${e}</h2>
            <div class="groups-list">
                ${t.map(e=>`
                    <div class="group-item">
                        <h4>${e.group_name}</h4>
                        <p>${e.group_description}</p>
                        <a href="${e.group_url}" target="_blank">View on MITRE ATT&CK</a>
                    </div>
                `).join("")}
            </div>
        </div>
    `,document.body.appendChild(n);const s=n.querySelector(".close");s.onclick=()=>n.remove(),window.onclick=e=>{e.target===n&&n.remove()}}function setupEventListeners(){const e=document.querySelectorAll(".tab-btn");e.forEach(e=>{e.addEventListener("click",function(){const e=this.getAttribute("onclick")?.match(/showTab\('([^']+)'\)/)?.[1];e&&showTab(e)})});const t=document.querySelectorAll(".tactic-card");t.forEach(e=>{e.addEventListener("click",function(){const e=this.getAttribute("onclick")?.match(/showTechniques\('([^']+)'\)/)?.[1];e&&showTechniques(e)}),e.addEventListener("mouseenter",function(){this.style.transform="scale(1.05)"}),e.addEventListener("mouseleave",function(){this.style.transform="scale(1)"})})}function showTab(e){const n=document.querySelectorAll(".tab-content");n.forEach(e=>e.classList.remove("active"));const s=document.querySelectorAll(".tab-btn");s.forEach(e=>e.classList.remove("active"));const t=document.getElementById(e);t&&t.classList.add("active"),event&&event.target&&event.target.classList.add("active"),currentTab=e}function showTechniques(e){const t=techniquesData[e]||getTechniquesForTactic(e);displayTechniques(t,e)}function getTechniquesForTactic(e){const t={reconnaissance:[{id:"T1595",name:"Active Scanning",description:"Scanning IP addresses, ports, and services"},{id:"T1592",name:"Gather Victim Host Information",description:"Collecting information about the target"}],"initial-access":[{id:"T1078",name:"Valid Accounts",description:"Using existing accounts to gain access"},{id:"T1190",name:"Exploit Public-Facing Application",description:"Exploiting vulnerabilities in applications"}]};return t[e]||[]}function addToFavorites(e){const t=JSON.parse(localStorage.getItem("mitreFavorites")||"[]");t.includes(e)?showNotification(`${e} is already in your favorites.`,"info"):(t.push(e),localStorage.setItem("mitreFavorites",JSON.stringify(t)),showNotification(`${e} added to favorites!`,"success"))}function showNotification(e,t="info"){const n=document.createElement("div");n.className=`notification ${t}`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.remove()},3e3)}function displaySearchResults(e){const t=document.getElementById("techniquesList");if(!t)return;if(t.innerHTML="",e.length===0){t.innerHTML="<p>No techniques found matching your search.</p>";return}const n=document.createElement("h3");n.textContent=`Search Results (${e.length} techniques)`,t.appendChild(n),e.forEach(e=>{const n=document.createElement("div");n.className="technique-item enhanced",n.innerHTML=`
            <div class="technique-header">
                <h4>${e.id} - ${e.name}</h4>
                <span class="tactic-tag">${e.tactic}</span>
            </div>
            <p>${e.description}</p>
            <div class="technique-actions">
                <button onclick="showTechniqueDetails('${e.id}')" class="btn-details">Details</button>
                <button onclick="addToFavorites('${e.id}')" class="btn-favorite">Favorite</button>
                <button onclick="searchRelatedThreats('${e.id}')" class="btn-threats">Related Threats</button>
            </div>
        `,t.appendChild(n)})}function filterByTactic(){const t=document.getElementById("tacticFilter");if(!t)return;const e=t.value;if(e){const t=techniquesData[e]||getTechniquesForTactic(e);displayTechniques(t,e)}else{const e=document.getElementById("techniquesList");e&&(e.innerHTML="<p>Select a tactic to view techniques.</p>")}}