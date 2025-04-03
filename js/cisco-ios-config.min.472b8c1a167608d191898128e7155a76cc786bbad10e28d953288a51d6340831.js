document.addEventListener("DOMContentLoaded",()=>{const h=document.querySelectorAll(".tab-btn"),x=document.querySelectorAll(".tab-content"),R=document.querySelector('.tab-btn[data-tab="routing"]');R&&R.addEventListener("click",function(){x.forEach(e=>e.style.display="none"),document.getElementById("routing-content").style.display="block";const e=document.getElementById("static-routes-config");e&&(e.style.display="block"),h.forEach(e=>e.classList.remove("active")),this.classList.add("active")}),h.forEach(e=>{e.getAttribute("data-tab")!=="routing"&&e.addEventListener("click",()=>{h.forEach(e=>e.classList.remove("active")),e.classList.add("active"),x.forEach(e=>e.style.display="none");const t=e.getAttribute("data-tab");document.getElementById(`${t}-content`).style.display="block"})});const H=document.getElementById("ssh-enabled"),B=document.getElementById("ssh-config");H.addEventListener("change",()=>{B.style.display=H.checked?"block":"none"});const V=document.getElementById("acl-enabled"),oe=document.getElementById("acl-config");V.addEventListener("change",()=>{oe.style.display=V.checked?"block":"none"});const $=document.getElementById("ntp-enabled"),J=document.getElementById("ntp-config");$.addEventListener("change",()=>{J.style.display=$.checked?"block":"none"});const W=document.getElementById("dhcp-enabled"),G=document.getElementById("dhcp-config");W.addEventListener("change",()=>{G.style.display=W.checked?"block":"none"});const U=document.getElementById("syslog-enabled"),I=document.getElementById("syslog-config");U.addEventListener("change",()=>{I.style.display=U.checked?"block":"none"}),document.getElementById("interface-description-enabled-0").addEventListener("change",function(){document.getElementById("description-group-0").style.display=this.checked?"block":"none"});const m=document.getElementById("acl-type"),Y=document.querySelectorAll(".extended-acl-fields");m.addEventListener("change",()=>{const e=m.value==="extended";Y.forEach(t=>{t.style.display=e?"block":"none"})});const p=document.getElementById("acl-protocol-0"),_e=document.querySelectorAll(".port-fields");p.addEventListener("change",()=>{const e=p.value==="tcp"||p.value==="udp";_e.forEach(t=>{t.style.display=e?"block":"none"})});const v=document.getElementById("routing-protocol"),C=document.querySelectorAll(".protocol-config");v&&(v.value="static",C.forEach(e=>{e.id==="static-routes-config"?e.style.display="block":e.style.display="none"}),v.addEventListener("change",function(){C.forEach(e=>{e.style.display="none"});const e=this.value;if(e!=="none"){const t=document.getElementById(`${e}-config`);t&&(t.style.display="block")}})),document.getElementById("static-routes-config").style.display="block";let t=1;const xe=document.getElementById("add-interface"),_=document.getElementById("interfaces-list");xe.addEventListener("click",()=>{const e=document.createElement("div");e.className="interface-item",e.innerHTML=`
            <div class="interface-header">
                <div class="input-group">
                    <label for="interface-type-${t}">Interface:</label>
                    <select id="interface-type-${t}">
                        <option value="GigabitEthernet0/0">GigabitEthernet0/0</option>
                        <option value="GigabitEthernet0/1">GigabitEthernet0/1</option>
                        <option value="FastEthernet0/0">FastEthernet0/0</option>
                        <option value="FastEthernet0/1">FastEthernet0/1</option>
                        <option value="Serial0/0/0">Serial0/0/0</option>
                        <option value="Serial0/0/1">Serial0/0/1</option>
                        <option value="Loopback0">Loopback0</option>
                    </select>
                </div>
                <button class="remove-interface" data-id="${t}">Remove</button>
            </div>
            <div class="interface-config">
                <div class="input-group">
                    <label for="ip-address-${t}">IP Address:</label>
                    <input type="text" id="ip-address-${t}" placeholder="192.168.1.1">
                </div>
                <div class="input-group">
                    <label for="subnet-mask-${t}">Subnet Mask:</label>
                    <input type="text" id="subnet-mask-${t}" placeholder="255.255.255.0">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="interface-enabled-${t}" checked>
                    <label for="interface-enabled-${t}">Interface Enabled</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="interface-description-enabled-${t}">
                    <label for="interface-description-enabled-${t}">Add Description</label>
                </div>
                <div class="input-group description-input" id="description-group-${t}" style="display: none;">
                    <label for="interface-description-${t}">Description:</label>
                    <input type="text" id="interface-description-${t}" placeholder="LAN Interface">
                </div>
            </div>
        `,_.appendChild(e),document.getElementById(`interface-description-enabled-${t}`).addEventListener("change",function(){document.getElementById(`description-group-${t}`).style.display=this.checked?"block":"none"});const n=e.querySelector(".remove-interface");n.addEventListener("click",()=>{_.removeChild(e)}),t++});let a=1;const me=document.getElementById("add-static-route"),y=document.getElementById("static-routes-list");me.addEventListener("click",()=>{const e=document.createElement("div");e.className="static-route-item",e.innerHTML=`
            <div class="input-group">
                <label for="route-destination-${a}">Destination Network:</label>
                <input type="text" id="route-destination-${a}" placeholder="192.168.2.0">
            </div>
            <div class="input-group">
                <label for="route-mask-${a}">Subnet Mask:</label>
                <input type="text" id="route-mask-${a}" placeholder="255.255.255.0">
            </div>
            <div class="input-group">
                <label for="next-hop-${a}">Next Hop:</label>
                <input type="text" id="next-hop-${a}" placeholder="10.0.0.2">
            </div>
            <button class="remove-route" data-id="${a}">Remove</button>
        `,y.appendChild(e);const t=e.querySelector(".remove-route");t.addEventListener("click",()=>{y.removeChild(e)}),a++});let s=1;const Oe=document.getElementById("add-acl-entry"),k=document.getElementById("acl-entries");Oe.addEventListener("click",()=>{const e=document.createElement("div");e.className="acl-entry",e.innerHTML=`
            <div class="input-group">
                <label for="acl-action-${s}">Action:</label>
                <select id="acl-action-${s}">
                    <option value="permit">Permit</option>
                    <option value="deny">Deny</option>
                </select>
            </div>
            <div class="input-group">
                <label for="acl-source-${s}">Source:</label>
                <input type="text" id="acl-source-${s}" placeholder="any or IP address">
            </div>
            <div class="extended-acl-fields" style="display: ${m.value==="extended"?"block":"none"}">
                <div class="input-group">
                    <label for="acl-destination-${s}">Destination:</label>
                    <input type="text" id="acl-destination-${s}" placeholder="any or IP address">
                </div>
                <div class="input-group">
                    <label for="acl-protocol-${s}">Protocol:</label>
                    <select id="acl-protocol-${s}">
                        <option value="ip">IP</option>
                        <option value="tcp">TCP</option>
                        <option value="udp">UDP</option>
                        <option value="icmp">ICMP</option>
                    </select>
                </div>
                <div class="port-fields" style="display: none;">
                    <div class="input-group">
                        <label for="acl-sport-${s}">Source Port:</label>
                        <input type="text" id="acl-sport-${s}" placeholder="any or port number">
                    </div>
                    <div class="input-group">
                        <label for="acl-dport-${s}">Destination Port:</label>
                        <input type="text" id="acl-dport-${s}" placeholder="any or port number">
                    </div>
                </div>
            </div>
            <button class="remove-acl-entry" data-id="${s}">Remove</button>
        `,k.appendChild(e);const t=e.querySelector(`#acl-protocol-${s}`),n=e.querySelector(".port-fields");t.addEventListener("change",()=>{const e=t.value==="tcp"||t.value==="udp";n.style.display=e?"block":"none"});const o=e.querySelector(".remove-acl-entry");o.addEventListener("click",()=>{k.removeChild(e)}),s++});let n=1;const je=document.getElementById("add-dhcp-pool"),M=document.getElementById("dhcp-pools");je.addEventListener("click",()=>{const e=document.createElement("div");e.className="dhcp-pool",e.innerHTML=`
            <div class="input-group">
                <label for="dhcp-name-${n}">Pool Name:</label>
                <input type="text" id="dhcp-name-${n}" placeholder="LAN_POOL">
            </div>
            <div class="input-group">
                <label for="dhcp-network-${n}">Network:</label>
                <input type="text" id="dhcp-network-${n}" placeholder="192.168.1.0">
            </div>
            <div class="input-group">
                <label for="dhcp-mask-${n}">Subnet Mask:</label>
                <input type="text" id="dhcp-mask-${n}" placeholder="255.255.255.0">
            </div>
            <div class="input-group">
                <label for="dhcp-gateway-${n}">Default Gateway:</label>
                <input type="text" id="dhcp-gateway-${n}" placeholder="192.168.1.1">
            </div>
            <div class="input-group">
                <label for="dhcp-dns-${n}">DNS Servers (comma separated):</label>
                <input type="text" id="dhcp-dns-${n}" placeholder="8.8.8.8, 8.8.4.4">
            </div>
            <div class="input-group">
                <label for="dhcp-domain-${n}">Domain Name:</label>
                <input type="text" id="dhcp-domain-${n}" placeholder="example.com">
            </div>
            <div class="input-group">
                <label for="dhcp-lease-${n}">Lease Time (days):</label>
                <input type="number" id="dhcp-lease-${n}" placeholder="7" min="1" max="365">
            </div>
            <button class="remove-dhcp-pool" data-id="${n}">Remove</button>
        `,M.appendChild(e);const t=e.querySelector(".remove-dhcp-pool");t.addEventListener("click",()=>{M.removeChild(e)}),n++}),document.querySelector(".remove-interface").addEventListener("click",function(){if(document.querySelectorAll(".interface-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".interface-item");_.removeChild(e)}else alert("You need at least one interface.")});const F=document.querySelector(".remove-route");F&&F.addEventListener("click",function(){if(document.querySelectorAll(".static-route-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".static-route-item");y.removeChild(e)}else alert("You need at least one static route.")});const ve=document.getElementById("generate-config"),z=document.getElementById("config-output"),D=document.getElementById("config-output-container");ve.addEventListener("click",()=>{const e=r();z.textContent=e,D.style.display="block",D.scrollIntoView({behavior:"smooth"})});const pe=document.getElementById("copy-config"),L=document.getElementById("copy-tooltip");pe.addEventListener("click",()=>{X(z.textContent),L.style.display="block",setTimeout(()=>{L.style.display="none"},2e3)});const q=document.getElementById("reset-form");q.addEventListener("click",()=>{confirm("Are you sure you want to reset the form? All your configuration will be lost.")&&window.location.reload()});const he=document.getElementById("validate-config"),f=document.getElementById("validation-container"),w=document.getElementById("validation-results"),ce=document.getElementById("validation-errors"),ae=document.getElementById("validation-warnings"),ne=document.getElementById("validation-info"),Q=document.getElementById("close-validation"),e={ipAddress:{regex:/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,message:"Invalid IP address format. Should be in format xxx.xxx.xxx.xxx with values between 0-255.",severity:"error"},ipv6Address:{regex:/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,message:"Invalid IPv6 address format.",severity:"error"},subnetMask:{validate:function(e){const t=e.split(".");if(t.length!==4)return!1;const n=t.map(e=>{const t=parseInt(e);return t>=0&&t<=255?t.toString(2).padStart(8,"0"):null});if(n.includes(null))return!1;const s=n.join("");return/^1*0*$/.test(s)},message:"Invalid subnet mask. A valid subnet mask consists of contiguous 1s followed by contiguous 0s when converted to binary.",severity:"error"},hostname:{regex:/^[a-zA-Z0-9][-a-zA-Z0-9_]{0,62}[a-zA-Z0-9]$/,message:"Hostname should start and end with alphanumeric characters and can contain hyphens and underscores.",severity:"error"},passwordStrength:{validate:function(e){return e.length>=8},message:"Password should be at least 8 characters for security.",severity:"warning"},domainName:{regex:/^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,message:"Invalid domain name format. Should be a valid FQDN (e.g., example.com).",severity:"error"},securityChecks:[{check:function(e){return e.toLowerCase().includes("service password-encryption")},message:"Password encryption service should be enabled for better security.",severity:"warning",fix:function(){}},{check:function(e){return!e.toLowerCase().includes("enable password")||e.toLowerCase().includes("enable secret")},message:"Use 'enable secret' instead of 'enable password' for better security.",severity:"warning",fix:function(){}},{check:function(e){const t=e.toLowerCase().includes("transport input ssh")||e.toLowerCase().includes("ip ssh"),n=e.toLowerCase().includes("transport input telnet")||e.toLowerCase().includes("transport input all");return!n||t},message:"Telnet is insecure. Consider using SSH instead.",severity:"error",fix:function(){}},{check:function(e){return e.toLowerCase().includes("no ip http server")||!e.toLowerCase().includes("ip http server")},message:"HTTP server should be disabled if not used to reduce attack surface.",severity:"info",fix:function(){}},{check:function(e){return e.toLowerCase().includes("logging")&&e.toLowerCase().includes("logging trap")},message:"Configure logging to maintain audit trails.",severity:"info",fix:function(){}}]};function K(){const t=[],i=r(),n=document.getElementById("hostname").value;n&&!e.hostname.regex.test(n)&&t.push({field:"hostname",title:"Invalid Hostname",message:e.hostname.message,severity:e.hostname.severity});const s=document.getElementById("domain-name").value;s&&!e.domainName.regex.test(s)&&t.push({field:"domain-name",title:"Invalid Domain Name",message:e.domainName.message,severity:e.domainName.severity});const o=document.getElementById("enable-secret").value;o&&!e.passwordStrength.validate(o)&&t.push({field:"enable-secret",title:"Weak Enable Secret",message:e.passwordStrength.message,severity:e.passwordStrength.severity}),document.querySelectorAll(".interface-item").forEach(n=>{const s=n.querySelector(".remove-interface").getAttribute("data-id"),o=n.querySelector(".ip-version-btn.active")?.getAttribute("data-version")||"ipv4";if(o==="ipv4"){const n=document.getElementById(`ip-address-${s}`).value,o=document.getElementById(`subnet-mask-${s}`).value;n&&!e.ipAddress.regex.test(n)&&t.push({field:`ip-address-${s}`,title:"Invalid IP Address",message:e.ipAddress.message,severity:e.ipAddress.severity}),o&&!e.subnetMask.validate(o)&&t.push({field:`subnet-mask-${s}`,title:"Invalid Subnet Mask",message:e.subnetMask.message,severity:e.subnetMask.severity})}else if(o==="ipv6"){const n=document.getElementById(`ipv6-address-${s}`)?.value;n&&!e.ipv6Address.regex.test(n)&&t.push({field:`ipv6-address-${s}`,title:"Invalid IPv6 Address",message:e.ipv6Address.message,severity:e.ipv6Address.severity})}});const a=document.getElementById("routing-protocol").value;if(a==="static"){const n=document.querySelector(".routes-version-btn.active")?.getAttribute("data-version")||"ipv4";n==="ipv4"?document.querySelectorAll(".static-route-item").forEach(n=>{const s=n.querySelector(".remove-route").getAttribute("data-id"),o=document.getElementById(`route-destination-${s}`).value,i=document.getElementById(`route-mask-${s}`).value,a=document.getElementById(`next-hop-${s}`).value;o&&!e.ipAddress.regex.test(o)&&t.push({field:`route-destination-${s}`,title:"Invalid Destination Network",message:e.ipAddress.message,severity:e.ipAddress.severity}),i&&!e.subnetMask.validate(i)&&t.push({field:`route-mask-${s}`,title:"Invalid Route Subnet Mask",message:e.subnetMask.message,severity:e.subnetMask.severity}),a&&!e.ipAddress.regex.test(a)&&t.push({field:`next-hop-${s}`,title:"Invalid Next Hop Address",message:e.ipAddress.message,severity:e.ipAddress.severity})}):n==="ipv6"&&document.querySelectorAll(".ipv6-route-item").forEach(n=>{const s=n.querySelector(".remove-ipv6-route").getAttribute("data-id"),o=document.getElementById(`ipv6-route-destination-${s}`).value,i=document.getElementById(`ipv6-next-hop-${s}`).value;if(o){const n=o.split("/");n.length>0&&!e.ipv6Address.regex.test(n[0])&&t.push({field:`ipv6-route-destination-${s}`,title:"Invalid IPv6 Destination Network",message:e.ipv6Address.message,severity:e.ipv6Address.severity})}i&&!e.ipv6Address.regex.test(i)&&t.push({field:`ipv6-next-hop-${s}`,title:"Invalid IPv6 Next Hop Address",message:e.ipv6Address.message,severity:e.ipv6Address.severity})})}return e.securityChecks.forEach(e=>{e.check(i)||t.push({field:"security",title:"Security Configuration Issue",message:e.message,severity:e.severity,hasFix:!0})}),t}function O(e){w.innerHTML="";const t=e.filter(e=>e.severity==="error").length,n=e.filter(e=>e.severity==="warning").length,s=e.filter(e=>e.severity==="info").length;ce.textContent=`${t} Error${t!==1?"s":""}`,ae.textContent=`${n} Warning${n!==1?"s":""}`,ne.textContent=`${s} Suggestion${s!==1?"s":""}`,e.forEach(e=>{const t=document.createElement("div");t.className=`validation-item ${e.severity}`;let n="";e.severity==="error"?n=`<svg xmlns="http://www.w3.org/2000/svg" class="validation-icon error" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>`:e.severity==="warning"?n=`<svg xmlns="http://www.w3.org/2000/svg" class="validation-icon warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>`:n=`<svg xmlns="http://www.w3.org/2000/svg" class="validation-icon info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>`;const s=e.hasFix?`<button class="validation-fix" data-field="${e.field}">Fix Issue</button>`:"";if(t.innerHTML=`
                ${n}
                <div class="validation-content">
                    <div class="validation-title">${e.title}</div>
                    <div class="validation-message">${e.message}</div>
                    ${s}
                </div>
            `,e.hasFix){const n=t.querySelector(".validation-fix");n.addEventListener("click",()=>{de(e)})}w.appendChild(t)}),f.style.display="block",f.scrollIntoView({behavior:"smooth"})}function de(e){e.field==="security"&&(e.message.includes("Password encryption")?alert('Fix applied: Added "service password-encryption" to the configuration.'):e.message.includes("enable secret")?alert('Fix applied: Replaced "enable password" with "enable secret".'):e.message.includes("Telnet is insecure")?(document.getElementById("ssh-enabled").checked=!0,B.style.display="block",alert('Fix applied: Enabled SSH and will configure "transport input ssh" instead of telnet.')):e.message.includes("HTTP server")?alert('Fix applied: Added "no ip http server" to the configuration.'):e.message.includes("logging")&&(document.getElementById("syslog-enabled").checked=!0,I.style.display="block",alert("Fix applied: Enabled syslog configuration.")));const t=K();O(t)}he.addEventListener("click",()=>{const e=K();O(e)}),Q.addEventListener("click",()=>{f.style.display="none"});function r(){let e="";e+=`! Cisco IOS Configuration
`,e+="! Generated on "+(new Date).toLocaleString()+`
`,e+=`!

`,e+=`! Basic setup
`,e+=`service password-encryption
`,e+=`no service pad
`,e+=`service timestamps debug datetime msec
`,e+=`service timestamps log datetime msec

`;const l=document.getElementById("hostname").value||"Router1";let n=document.getElementById("domain-name").value;const s=document.getElementById("ssh-enabled").checked,o=document.getElementById("ssh-auto-config").checked;s&&o&&!n&&(n="example.com"),e+=`hostname ${l}
`,n&&(e+=`ip domain-name ${n}
`);const i=document.getElementById("enable-secret").value;i&&(e+=`enable secret ${i}
`),s&&o&&(e+=`
! Generate RSA key for SSH
`,e+=`crypto key generate rsa modulus 2048
`);const a=document.getElementById("banner-motd").value;a&&(e+=`
banner motd #
${a}
#
`);const r=document.getElementById("console-password").value;r&&(e+=`
! Console configuration
`,e+=`line console 0
`,e+=` logging synchronous
`,e+=` exec-timeout 30 0
`,e+=` password ${r}
`,e+=` login
`);const c=document.getElementById("vty-password").value;if(c&&(e+=`
! VTY configuration
`,e+=`line vty 0 4
`,e+=` logging synchronous
`,e+=` exec-timeout 30 0
`,e+=` password ${c}
`,e+=` login
`),s){const s=document.getElementById("ssh-version").value,t=document.getElementById("ssh-username").value,n=document.getElementById("ssh-password").value;e+=`
! SSH configuration
`,o||(e+=`! Generate RSA key for SSH
`,e+=`crypto key generate rsa modulus 2048

`),e+=`! Configure SSH version and settings
`,e+=`ip ssh version ${s}
`,e+=`ip ssh authentication-retries 3
`,e+=`ip ssh time-out 60
`,t&&n&&(e+=`
! Configure SSH user authentication
`,e+=`username ${t} privilege 15 secret ${n}
`,e+=`
line vty 0 4
`,e+=` transport input ssh
`,e+=` login local
`)}e+=`
! Interface configuration
`;const d=document.querySelectorAll(".interface-item");d.forEach(t=>{const n=t.querySelector(".remove-interface").getAttribute("data-id"),r=document.getElementById(`interface-type-${n}`).value,s=document.getElementById(`ip-address-${n}`).value,o=document.getElementById(`subnet-mask-${n}`).value,c=document.getElementById(`interface-enabled-${n}`).checked,i=document.getElementById(`interface-description-enabled-${n}`).checked,a=i?document.getElementById(`interface-description-${n}`).value:"";e+=`interface ${r}
`,i&&a&&(e+=` description ${a}
`),s&&o&&(e+=` ip address ${s} ${o}
`),c?e+=` no shutdown
`:e+=` shutdown
`,e+=`!
`});const t=document.getElementById("routing-protocol").value;if(t!=="none")if(e+=`
! Routing configuration
`,t==="static"){const t=document.querySelectorAll(".static-route-item");t.forEach(t=>{const n=t.querySelector(".remove-route").getAttribute("data-id"),s=document.getElementById(`route-destination-${n}`).value,o=document.getElementById(`route-mask-${n}`).value,i=document.getElementById(`next-hop-${n}`).value;s&&o&&i&&(e+=`ip route ${s} ${o} ${i}
`)})}else if(t==="rip"){const t=document.getElementById("rip-version").value,n=document.getElementById("rip-networks").value.split(`
`).filter(e=>e.trim()!=="");e+=`router rip
`,e+=` version ${t}
`,e+=` no auto-summary
`,n.forEach(t=>{e+=` network ${t}
`})}else if(t==="eigrp"){const t=document.getElementById("eigrp-as").value,n=document.getElementById("eigrp-networks").value.split(`
`).filter(e=>e.trim()!=="");t&&(e+=`router eigrp ${t}
`,e+=` no auto-summary
`,n.forEach(t=>{e+=` network ${t}
`}))}else if(t==="ospf"){const t=document.getElementById("ospf-process-id").value,n=document.getElementById("ospf-router-id").value,s=document.getElementById("ospf-networks").value.split(`
`).filter(e=>e.trim()!=="");t&&(e+=`router ospf ${t}
`,n&&(e+=` router-id ${n}
`),s.forEach(t=>{e+=` network ${t}
`}))}if(document.getElementById("acl-enabled").checked){const n=document.getElementById("acl-type").value,t=document.getElementById("acl-number").value,s=document.querySelectorAll(".acl-entry");e+=`
! Access Control List configuration
`,s.forEach(s=>{const o=s.querySelector(".remove-acl-entry").getAttribute("data-id"),a=document.getElementById(`acl-action-${o}`).value,i=document.getElementById(`acl-source-${o}`).value;if(n==="standard")t&&i&&(e+=`access-list ${t} ${a} ${i}
`);else if(n==="extended"){const s=document.getElementById(`acl-destination-${o}`).value,n=document.getElementById(`acl-protocol-${o}`).value;if(t&&i&&s)if(n==="tcp"||n==="udp"){const r=document.getElementById(`acl-sport-${o}`).value,c=document.getElementById(`acl-dport-${o}`).value,l=r&&r!=="any"?`eq ${r}`:"",d=c&&c!=="any"?`eq ${c}`:"";e+=`access-list ${t} ${a} ${n} ${i} ${l} ${s} ${d}
`}else e+=`access-list ${t} ${a} ${n} ${i} ${s}
`}})}if(document.getElementById("ntp-enabled").checked){const t=document.getElementById("ntp-servers").value.split(`
`).filter(e=>e.trim()!=="");t.length>0&&(e+=`
! NTP configuration
`,t.forEach(t=>{e+=`ntp server ${t}
`}))}if(document.getElementById("dhcp-enabled").checked){const t=document.querySelectorAll(".dhcp-pool");e+=`
! DHCP configuration
`,t.forEach(t=>{const n=t.querySelector(".remove-dhcp-pool").getAttribute("data-id");let s=document.getElementById(`dhcp-name-${n}`).value;const o=document.getElementById(`dhcp-network-${n}`).value,i=document.getElementById(`dhcp-mask-${n}`).value,a=document.getElementById(`dhcp-gateway-${n}`).value,r=document.getElementById(`dhcp-dns-${n}`).value,c=document.getElementById(`dhcp-domain-${n}`).value,l=document.getElementById(`dhcp-lease-${n}`).value;if(s=s.replace(/ /g,"_"),s&&o&&i){if(e+=`ip dhcp pool ${s}
`,e+=` network ${o} ${i}
`,a&&(e+=` default-router ${a}
`),r){const t=r.split(",").map(e=>e.trim()).filter(e=>e);t.length>0&&(e+=` dns-server ${t.join(" ")}
`)}c&&(e+=` domain-name ${c}
`),l&&(e+=` lease ${l}
`)}})}if(document.getElementById("syslog-enabled").checked){const t=document.getElementById("syslog-server").value,n=document.getElementById("syslog-facility").value,s=document.getElementById("syslog-level").value;t&&(e+=`
! Syslog configuration
`,e+=`logging host ${t}
`,e+=`logging facility ${n}
`,e+=`logging trap ${s}
`,e+=`logging source-interface Loopback0
`)}return e+=`
! End of configuration
`,e}function X(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}const u=document.getElementById("aaa-new-model"),Z=document.getElementById("aaa-config"),l=document.getElementById("aaa-method"),ee=document.getElementById("tacacs-config"),te=document.getElementById("radius-config"),g=document.getElementById("auth-login-enabled"),se=document.getElementById("auth-login-config"),b=document.getElementById("auth-enable-enabled"),ie=document.getElementById("auth-enable-config"),d=document.getElementById("author-exec-enabled"),re=document.getElementById("author-exec-config"),j=document.getElementById("acct-exec-enabled"),le=document.getElementById("acct-exec-config");u.addEventListener("change",()=>{Z.style.display=u.checked?"block":"none"}),l.addEventListener("change",()=>{ee.style.display=l.value==="tacacs+"?"block":"none",te.style.display=l.value==="radius"?"block":"none"}),g.addEventListener("change",()=>{se.style.display=g.checked?"block":"none"}),b.addEventListener("change",()=>{ie.style.display=b.checked?"block":"none"}),d.addEventListener("change",()=>{re.style.display=d.checked?"block":"none"}),j.addEventListener("change",()=>{le.style.display=j.checked?"block":"none"});let i=1;const ue=document.getElementById("add-tacacs-server"),P=document.getElementById("tacacs-servers");ue.addEventListener("click",()=>{const e=document.createElement("div");e.className="server-item",e.innerHTML=`
            <div class="input-group">
                <label for="tacacs-server-address-${i}">Server Address:</label>
                <input type="text" id="tacacs-server-address-${i}" placeholder="192.168.1.10">
            </div>
            <div class="input-group">
                <label for="tacacs-server-key-${i}">Server Key:</label>
                <input type="password" id="tacacs-server-key-${i}" placeholder="Enter server key">
            </div>
            <div class="input-group">
                <label for="tacacs-server-port-${i}">Server Port:</label>
                <input type="number" id="tacacs-server-port-${i}" placeholder="49" value="49">
            </div>
            <button class="remove-server" data-id="${i}">Remove</button>
        `,P.appendChild(e);const t=e.querySelector(".remove-server");t.addEventListener("click",function(){P.removeChild(e)}),i++});let o=1;const fe=document.getElementById("add-radius-server"),N=document.getElementById("radius-servers");fe.addEventListener("click",()=>{const e=document.createElement("div");e.className="server-item",e.innerHTML=`
            <div class="input-group">
                <label for="radius-server-address-${o}">Server Address:</label>
                <input type="text" id="radius-server-address-${o}" placeholder="192.168.1.20">
            </div>
            <div class="input-group">
                <label for="radius-server-key-${o}">Server Key:</label>
                <input type="password" id="radius-server-key-${o}" placeholder="Enter server key">
            </div>
            <div class="input-group">
                <label for="radius-server-auth-port-${o}">Authentication Port:</label>
                <input type="number" id="radius-server-auth-port-${o}" placeholder="1812" value="1812">
            </div>
            <div class="input-group">
                <label for="radius-server-acct-port-${o}">Accounting Port:</label>
                <input type="number" id="radius-server-acct-port-${o}" placeholder="1813" value="1813">
            </div>
            <button class="remove-server" data-id="${o}">Remove</button>
        `,N.appendChild(e);const t=e.querySelector(".remove-server");t.addEventListener("click",function(){N.removeChild(e)}),o++});const ge=document.getElementById("add-login-method"),T=document.getElementById("login-method-list");ge.addEventListener("click",()=>{c(T)});const be=document.getElementById("add-enable-method"),S=document.getElementById("enable-method-list");be.addEventListener("click",()=>{c(S)});const ye=document.getElementById("add-exec-author-method"),A=document.getElementById("exec-author-method-list");ye.addEventListener("click",()=>{c(A)});const we=document.getElementById("add-exec-acct-method"),E=document.getElementById("exec-acct-method-list");we.addEventListener("click",()=>{c(E)});function c(e){const t=document.createElement("div");t.className="method-item",t.innerHTML=`
            <select class="auth-method">
                <option value="local">local</option>
                <option value="group tacacs+">group tacacs+</option>
                <option value="group radius">group radius</option>
                <option value="enable">enable</option>
                <option value="if-authenticated">if-authenticated</option>
            </select>
            <button class="move-up">↑</button>
            <button class="move-down">↓</button>
            <button class="remove-method">×</button>
        `,e.appendChild(t);const n=t.querySelector(".move-up"),s=t.querySelector(".move-down"),o=t.querySelector(".remove-method");n.addEventListener("click",()=>{const n=t.previousElementSibling;n&&e.insertBefore(t,n)}),s.addEventListener("click",()=>{const n=t.nextElementSibling;n&&e.insertBefore(n,t)}),o.addEventListener("click",()=>{e.childElementCount>1?e.removeChild(t):alert("At least one method must be configured.")})}const Ce=r;r=function(){let e=Ce();if(u.checked){e+=`
! AAA Configuration
`,e+=`aaa new-model
`;const t=l.value;if(t==="tacacs+"){const t=document.querySelectorAll("#tacacs-servers .server-item");e+=`
! TACACS+ Servers
`,t.forEach(t=>{const n=t.querySelector(".remove-server").getAttribute("data-id"),o=document.getElementById(`tacacs-server-address-${n}`).value,i=document.getElementById(`tacacs-server-key-${n}`).value,s=document.getElementById(`tacacs-server-port-${n}`).value;o&&i&&(e+=`tacacs server TACACS-${n}
`,e+=` address ipv4 ${o}
`,e+=` key ${i}
`,s&&s!=="49"&&(e+=` port ${s}
`))})}else if(t==="radius"){const t=document.querySelectorAll("#radius-servers .server-item");e+=`
! RADIUS Servers
`,t.forEach(t=>{const n=t.querySelector(".remove-server").getAttribute("data-id"),s=document.getElementById(`radius-server-address-${n}`).value,o=document.getElementById(`radius-server-key-${n}`).value,i=document.getElementById(`radius-server-auth-port-${n}`).value,a=document.getElementById(`radius-server-acct-port-${n}`).value;s&&o&&(e+=`radius server RADIUS-${n}
`,e+=` address ipv4 ${s} auth-port ${i} acct-port ${a}
`,e+=` key ${o}
`)})}if(g.checked){const t=document.getElementById("auth-login-list").value||"default",n=Array.from(T.querySelectorAll(".auth-method")).map(e=>e.value);e+=`
! Login Authentication
`,e+=`aaa authentication login ${t} ${n.join(" ")}
`}if(b.checked){const t=document.getElementById("auth-enable-list").value||"default",n=Array.from(S.querySelectorAll(".auth-method")).map(e=>e.value);e+=`
! Enable Authentication
`,e+=`aaa authentication enable ${t} ${n.join(" ")}
`}if(d.checked){const t=document.getElementById("author-exec-list").value||"default",n=Array.from(A.querySelectorAll(".auth-method")).map(e=>e.value);e+=`
! EXEC Authorization
`,e+=`aaa authorization exec ${t} ${n.join(" ")}
`}if(j.checked){const t=document.getElementById("acct-exec-list").value||"default",n=document.getElementById("acct-exec-record").value,s=Array.from(E.querySelectorAll(".auth-method")).map(e=>e.value);e+=`
! EXEC Accounting
`,e+=`aaa accounting exec ${t} ${n} ${s.join(" ")}
`}}return e}})