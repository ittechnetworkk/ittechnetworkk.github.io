document.addEventListener("DOMContentLoaded",()=>{const P=document.querySelectorAll(".tab-btn"),W=document.querySelectorAll(".tab-content");P.forEach(e=>{e.addEventListener("click",()=>{P.forEach(e=>e.classList.remove("active")),e.classList.add("active"),W.forEach(e=>e.style.display="none");const t=e.getAttribute("data-tab");document.getElementById(`${t}-content`).style.display="block"})});const V=[{checkbox:"interface-description-enabled",section:"description-group"},{checkbox:"ipv6-enabled",section:"ipv6-config"},{checkbox:"vlan-enabled",section:"vlan-config"},{checkbox:"firewall-filter-enabled",section:"firewall-filter-config"},{checkbox:"zones-enabled",section:"zones-config"},{checkbox:"ntp-enabled",section:"ntp-config"},{checkbox:"ntp-source-interface-enabled",section:"ntp-source-interface-group"},{checkbox:"dhcp-server-enabled",section:"dhcp-server-config"},{checkbox:"syslog-enabled",section:"syslog-config"},{checkbox:"snmp-enabled",section:"snmp-config"},{checkbox:"policy-options-enabled",section:"policy-options-config"},{checkbox:"cos-enabled",section:"cos-config"},{checkbox:"routing-policy-prefix-list-enabled",section:"routing-policy-prefix-list-group"},{checkbox:"bgp-peer-import-policy-enabled",section:"bgp-peer-import-policy"},{checkbox:"bgp-peer-export-policy-enabled",section:"bgp-peer-export-policy"}];V.forEach(e=>{const t=document.getElementById(e.checkbox+"-0");if(t){const n=document.getElementById(e.section+"-0");n&&t.addEventListener("change",()=>{n.style.display=t.checked?"block":"none"})}const n=document.getElementById(e.checkbox);if(n){const t=document.getElementById(e.section);t&&n.addEventListener("change",()=>{t.style.display=n.checked?"block":"none"})}});const O=document.getElementById("routing-protocol"),B=document.querySelectorAll(".protocol-config");O&&O.addEventListener("change",()=>{B.forEach(e=>{e.style.display="none"});const e=O.value;e!=="none"&&(document.getElementById(`${e}-config`).style.display="block")});const g=document.getElementById("term-protocol-0"),C=document.getElementById("port-fields-0");g&&C&&g.addEventListener("change",()=>{g.value==="tcp"||g.value==="udp"?C.style.display="block":C.style.display="none"});let t=1;const H=document.getElementById("add-interface"),m=document.getElementById("interfaces-list");if(H&&m){H.addEventListener("click",()=>{const e=document.createElement("div");e.className="interface-item",e.innerHTML=`
                <div class="interface-header">
                    <div class="input-group">
                        <label for="interface-type-${t}">Interface:</label>
                        <select id="interface-type-${t}">
                            <option value="ge-0/0/0">ge-0/0/0</option>
                            <option value="ge-0/0/1">ge-0/0/1</option>
                            <option value="xe-0/0/0">xe-0/0/0</option>
                            <option value="xe-0/0/1">xe-0/0/1</option>
                            <option value="et-0/0/0">et-0/0/0</option>
                            <option value="lo0">lo0</option>
                            <option value="em0">em0</option>
                        </select>
                    </div>
                    <button class="remove-interface" data-id="${t}">Remove</button>
                </div>
                <div class="interface-config">
                    <div class="input-group">
                        <label for="unit-number-${t}">Unit Number:</label>
                        <input type="number" id="unit-number-${t}" placeholder="0" value="0" min="0" max="16385">
                    </div>
                    <div class="input-group">
                        <label for="ip-address-${t}">IP Address:</label>
                        <input type="text" id="ip-address-${t}" placeholder="192.168.1.1">
                    </div>
                    <div class="input-group">
                        <label for="prefix-length-${t}">Prefix Length:</label>
                        <input type="number" id="prefix-length-${t}" placeholder="24" value="24" min="1" max="32">
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="ipv6-enabled-${t}">
                        <label for="ipv6-enabled-${t}">Configure IPv6</label>
                    </div>
                    <div class="ipv6-config" id="ipv6-config-${t}" style="display: none;">
                        <div class="input-group">
                            <label for="ipv6-address-${t}">IPv6 Address:</label>
                            <input type="text" id="ipv6-address-${t}" placeholder="2001:db8::1">
                        </div>
                        <div class="input-group">
                            <label for="ipv6-prefix-length-${t}">Prefix Length:</label>
                            <input type="number" id="ipv6-prefix-length-${t}" placeholder="64" value="64" min="1" max="128">
                        </div>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="interface-description-enabled-${t}">
                        <label for="interface-description-enabled-${t}">Add Description</label>
                    </div>
                    <div class="input-group description-input" id="description-group-${t}" style="display: none;">
                        <label for="interface-description-${t}">Description:</label>
                        <input type="text" id="interface-description-${t}" placeholder="LAN Interface">
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="vlan-enabled-${t}">
                        <label for="vlan-enabled-${t}">Configure VLAN</label>
                    </div>
                    <div class="vlan-config" id="vlan-config-${t}" style="display: none;">
                        <div class="input-group">
                            <label for="vlan-id-${t}">VLAN ID:</label>
                            <input type="number" id="vlan-id-${t}" placeholder="10" min="1" max="4094">
                        </div>
                    </div>
                </div>
            `,m.appendChild(e);const n=[{checkbox:`interface-description-enabled-${t}`,section:`description-group-${t}`},{checkbox:`ipv6-enabled-${t}`,section:`ipv6-config-${t}`},{checkbox:`vlan-enabled-${t}`,section:`vlan-config-${t}`}];n.forEach(e=>{const t=document.getElementById(e.checkbox),n=document.getElementById(e.section);t&&n&&t.addEventListener("change",()=>{n.style.display=t.checked?"block":"none"})});const s=e.querySelector(".remove-interface");s.addEventListener("click",function(){document.querySelectorAll(".interface-item").length>1?m.removeChild(e):alert("You need at least one interface.")}),t++});const e=document.querySelector(".remove-interface");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".interface-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".interface-item");m.removeChild(e)}else alert("You need at least one interface.")})}let r=1;const E=document.getElementById("add-static-route"),h=document.getElementById("static-routes-list");if(E&&h){E.addEventListener("click",()=>{const e=document.createElement("div");e.className="static-route-item",e.innerHTML=`
                <div class="input-group">
                    <label for="route-destination-${r}">Destination Network:</label>
                    <input type="text" id="route-destination-${r}" placeholder="192.168.2.0">
                </div>
                <div class="input-group">
                    <label for="route-prefix-${r}">Prefix Length:</label>
                    <input type="number" id="route-prefix-${r}" placeholder="24" value="24" min="1" max="32">
                </div>
                <div class="input-group">
                    <label for="next-hop-${r}">Next Hop:</label>
                    <input type="text" id="next-hop-${r}" placeholder="10.0.0.2">
                </div>
                <div class="input-group">
                    <label for="route-preference-${r}">Preference (optional):</label>
                    <input type="number" id="route-preference-${r}" placeholder="10" min="1" max="255">
                </div>
                <button class="remove-route" data-id="${r}">Remove</button>
            `,h.appendChild(e);const t=e.querySelector(".remove-route");t.addEventListener("click",function(){document.querySelectorAll(".static-route-item").length>1?h.removeChild(e):alert("You need at least one static route.")}),r++});const e=document.querySelector(".remove-route");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".static-route-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".static-route-item");h.removeChild(e)}else alert("You need at least one static route.")})}let c=1;const L=document.getElementById("add-ospf-area"),p=document.getElementById("ospf-areas");if(L&&p){L.addEventListener("click",()=>{const e=document.createElement("div");e.className="ospf-area-item",e.innerHTML=`
                <div class="input-group">
                    <label for="ospf-area-id-${c}">Area ID:</label>
                    <input type="text" id="ospf-area-id-${c}" placeholder="0.0.0.0" value="0.0.0.0">
                </div>
                <div class="input-group">
                    <label for="ospf-area-interfaces-${c}">Interfaces (comma separated):</label>
                    <input type="text" id="ospf-area-interfaces-${c}" placeholder="ge-0/0/0.0, lo0.0">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="ospf-area-stub-${c}">
                    <label for="ospf-area-stub-${c}">Stub Area</label>
                </div>
                <button class="remove-ospf-area" data-id="${c}">Remove</button>
            `,p.appendChild(e);const t=e.querySelector(".remove-ospf-area");t.addEventListener("click",function(){document.querySelectorAll(".ospf-area-item").length>1?p.removeChild(e):alert("You need at least one OSPF area.")}),c++});const e=document.querySelector(".remove-ospf-area");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".ospf-area-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".ospf-area-item");p.removeChild(e)}else alert("You need at least one OSPF area.")})}let n=1;const k=document.getElementById("add-bgp-neighbor"),d=document.getElementById("bgp-neighbors");if(k&&d){k.addEventListener("click",()=>{const e=document.createElement("div");e.className="bgp-neighbor-item",e.innerHTML=`
                <div class="input-group">
                    <label for="bgp-peer-address-${n}">Peer Address:</label>
                    <input type="text" id="bgp-peer-address-${n}" placeholder="192.168.1.2">
                </div>
                <div class="input-group">
                    <label for="bgp-peer-as-${n}">Peer AS Number:</label>
                    <input type="number" id="bgp-peer-as-${n}" placeholder="65001" min="1" max="4294967295">
                </div>
                <div class="input-group">
                    <label for="bgp-peer-description-${n}">Description:</label>
                    <input type="text" id="bgp-peer-description-${n}" placeholder="Connection to ISP">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="bgp-peer-import-policy-enabled-${n}">
                    <label for="bgp-peer-import-policy-enabled-${n}">Import Policy</label>
                </div>
                <div class="input-group" id="bgp-peer-import-policy-${n}" style="display: none;">
                    <label for="bgp-peer-import-policy-name-${n}">Import Policy Name:</label>
                    <input type="text" id="bgp-peer-import-policy-name-${n}" placeholder="import-from-isp">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="bgp-peer-export-policy-enabled-${n}">
                    <label for="bgp-peer-export-policy-enabled-${n}">Export Policy</label>
                </div>
                <div class="input-group" id="bgp-peer-export-policy-${n}" style="display: none;">
                    <label for="bgp-peer-export-policy-name-${n}">Export Policy Name:</label>
                    <input type="text" id="bgp-peer-export-policy-name-${n}" placeholder="export-to-isp">
                </div>
                <button class="remove-bgp-neighbor" data-id="${n}">Remove</button>
            `,d.appendChild(e);const t=e.querySelector(`#bgp-peer-import-policy-enabled-${n}`),o=e.querySelector(`#bgp-peer-import-policy-${n}`);t&&o&&t.addEventListener("change",()=>{o.style.display=t.checked?"block":"none"});const s=e.querySelector(`#bgp-peer-export-policy-enabled-${n}`),i=e.querySelector(`#bgp-peer-export-policy-${n}`);s&&i&&s.addEventListener("change",()=>{i.style.display=s.checked?"block":"none"});const a=e.querySelector(".remove-bgp-neighbor");a.addEventListener("click",function(){document.querySelectorAll(".bgp-neighbor-item").length>1?d.removeChild(e):alert("You need at least one BGP neighbor.")}),n++});const s=document.querySelector(".remove-bgp-neighbor");s&&s.addEventListener("click",function(){if(document.querySelectorAll(".bgp-neighbor-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".bgp-neighbor-item");d.removeChild(e)}else alert("You need at least one BGP neighbor.")});const e=document.getElementById("bgp-peer-import-policy-enabled-0"),o=document.getElementById("bgp-peer-import-policy-0");e&&o&&e.addEventListener("change",()=>{o.style.display=e.checked?"block":"none"});const t=document.getElementById("bgp-peer-export-policy-enabled-0"),i=document.getElementById("bgp-peer-export-policy-0");t&&i&&t.addEventListener("change",()=>{i.style.display=t.checked?"block":"none"})}const z=document.getElementById("generate-config"),u=document.getElementById("config-output"),w=document.getElementById("config-output-container");z&&u&&w&&z.addEventListener("click",()=>{const e=I();u.textContent=e,w.style.display="block",w.scrollIntoView({behavior:"smooth"})});const T=document.getElementById("reset-form");T&&T.addEventListener("click",()=>{confirm("Are you sure you want to reset the form? All your configuration will be lost.")&&window.location.reload()});const M=document.getElementById("copy-config"),x=document.getElementById("copy-tooltip");M&&u&&x&&M.addEventListener("click",()=>{$(u.textContent),x.style.display="block",setTimeout(()=>{x.style.display="none"},2e3)});function $(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function I(){const j=document.getElementById("hostname").value||"router1",y=document.getElementById("domain-name").value||"example.com",b=document.getElementById("root-password").value||"",h=document.getElementById("use-encrypted-password").checked,i=document.getElementById("login-user").value||"admin",v=document.getElementById("login-password").value||"",w=document.getElementById("user-class").value||"super-user",_=document.getElementById("system-timezone").value||"UTC",c=document.getElementById("dns-servers").value||"";let e=`# Juniper Junos Configuration
`;if(e+=`# Generated on ${(new Date).toLocaleString()}

`,e+=`# System Configuration
`,e+=`set system host-name ${j}
`,e+=`set system domain-name ${y}
`,b&&(h?(e+=`set system root-authentication encrypted-password "$9$xxxxxxxxxxxxxxxx"
`,e+=`# Note: Replace the encrypted password with an actual encrypted password from your device
`):(e+=`set system root-authentication plain-text-password
`,e+=`# Interactive command - Enter the password when applying config
`)),e+=`set system login user ${i} class ${w}
`,v&&(h?(e+=`set system login user ${i} authentication encrypted-password "$9$xxxxxxxxxxxxxxxx"
`,e+=`# Note: Replace the encrypted password with an actual encrypted password from your device
`):(e+=`set system login user ${i} authentication plain-text-password
`,e+=`# Interactive command - Enter the password when applying config
`)),e+=`set system time-zone ${_}
`,c){const t=c.split(",").map(e=>e.trim());t.forEach(t=>{t&&(e+=`set system name-server ${t}
`)})}const d=document.querySelectorAll(".interface-item");d.length>0&&(e+=`
# Interface Configuration
`,d.forEach((t,n)=>{const s=n===0?"0":t.querySelector(".remove-interface").getAttribute("data-id"),o=document.getElementById(`interface-type-${s}`).value,r=document.getElementById(`unit-number-${s}`).value||"0",c=document.getElementById(`ip-address-${s}`).value,m=document.getElementById(`prefix-length-${s}`).value||"24",l=document.getElementById(`interface-description-enabled-${s}`),d=l&&l.checked?document.getElementById(`interface-description-${s}`).value:"",i=document.getElementById(`ipv6-enabled-${s}`),u=i&&i.checked?document.getElementById(`ipv6-address-${s}`).value:"",f=i&&i.checked?document.getElementById(`ipv6-prefix-length-${s}`).value||"64":"",a=document.getElementById(`vlan-enabled-${s}`),h=a&&a.checked?document.getElementById(`vlan-id-${s}`).value:"";d&&(e+=`set interfaces ${o} description "${d}"
`),a&&a.checked&&h&&(o.startsWith("ge-")||o.startsWith("xe-")||o.startsWith("et-"))&&(e+=`set interfaces ${o} vlan-tagging
`,e+=`set interfaces ${o} unit ${r} vlan-id ${h}
`),c&&(e+=`set interfaces ${o} unit ${r} family inet address ${c}/${m}
`),i&&i.checked&&u&&(e+=`set interfaces ${o} unit ${r} family inet6 address ${u}/${f}
`)}));const o=document.getElementById("routing-protocol").value;if(o&&o!=="none")if(e+=`
# Routing Configuration
`,o==="static"){const t=document.querySelectorAll(".static-route-item");t.forEach((t,n)=>{const s=n===0?"0":t.querySelector(".remove-route").getAttribute("data-id"),o=document.getElementById(`route-destination-${s}`).value,r=document.getElementById(`route-prefix-${s}`).value||"24",i=document.getElementById(`next-hop-${s}`).value,a=document.getElementById(`route-preference-${s}`).value;o&&i&&(e+=`set routing-options static route ${o}/${r} next-hop ${i}`,a&&(e+=` preference ${a}`),e+=`
`)})}else if(o==="ospf"){const t=document.getElementById("ospf-router-id").value;t&&(e+=`set routing-options router-id ${t}
`);const n=document.querySelectorAll(".ospf-area-item");n.forEach((t,n)=>{const s=n===0?"0":t.querySelector(".remove-ospf-area").getAttribute("data-id"),o=document.getElementById(`ospf-area-id-${s}`).value||"0.0.0.0",i=document.getElementById(`ospf-area-interfaces-${s}`).value,a=document.getElementById(`ospf-area-stub-${s}`).checked;if(i){const t=i.split(",").map(e=>e.trim());a&&(e+=`set protocols ospf area ${o} stub
`),t.forEach(t=>{t&&(e+=`set protocols ospf area ${o} interface ${t}
`)})}})}else if(o==="bgp"){const t=document.getElementById("bgp-local-as").value,n=document.getElementById("bgp-router-id").value;if(n&&(e+=`set routing-options router-id ${n}
`),t){e+=`set routing-options autonomous-system ${t}
`;const n=document.querySelectorAll(".bgp-neighbor-item");n.forEach((t,n)=>{const s=n===0?"0":t.querySelector(".remove-bgp-neighbor").getAttribute("data-id"),o=document.getElementById(`bgp-peer-address-${s}`).value,i=document.getElementById(`bgp-peer-as-${s}`).value,a=document.getElementById(`bgp-peer-description-${s}`).value;if(o&&i){e+=`set protocols bgp group EXTERNAL-PEERS type external
`,e+=`set protocols bgp group EXTERNAL-PEERS peer-as ${i}
`,e+=`set protocols bgp group EXTERNAL-PEERS neighbor ${o}`,a&&(e+=` description "${a}"`),e+=`
`;const t=document.getElementById(`bgp-peer-import-policy-enabled-${s}`);if(t&&t.checked){const t=document.getElementById(`bgp-peer-import-policy-name-${s}`).value;t&&(e+=`set protocols bgp group EXTERNAL-PEERS import ${t}
`)}const n=document.getElementById(`bgp-peer-export-policy-enabled-${s}`);if(n&&n.checked){const t=document.getElementById(`bgp-peer-export-policy-name-${s}`).value;t&&(e+=`set protocols bgp group EXTERNAL-PEERS export ${t}
`)}}})}}let n="";const m=document.getElementById("ntp-enabled");if(m&&m.checked){const e=document.getElementById("ntp-servers").value,t=document.getElementById("ntp-source-interface-enabled");if(e){if(n+=`
# NTP Configuration
`,t&&t.checked){const e=document.getElementById("ntp-source-interface").value;e&&(n+=`set system ntp source-address ${e}
`)}const s=e.split(`
`).map(e=>e.trim());s.forEach(e=>{e&&(n+=`set system ntp server ${e}
`)})}}const f=document.getElementById("dhcp-server-enabled");if(f&&f.checked){const e=document.querySelectorAll(".dhcp-pool");e.length>0&&(n+=`
# DHCP Server Configuration
`,e.forEach((e,t)=>{const s=t===0?"0":e.querySelector(".remove-dhcp-pool").getAttribute("data-id"),o=document.getElementById(`dhcp-name-${s}`).value,i=document.getElementById(`dhcp-subnet-${s}`).value,a=document.getElementById(`dhcp-range-low-${s}`).value,r=document.getElementById(`dhcp-range-high-${s}`).value,c=document.getElementById(`dhcp-router-${s}`).value,l=document.getElementById(`dhcp-dns-${s}`).value,d=document.getElementById(`dhcp-domain-${s}`).value,u=document.getElementById(`dhcp-lease-${s}`).value||"86400";if(o&&i&&a&&r){if(n+=`set system services dhcp pool ${o} address-range low ${a} high ${r}
`,n+=`set system services dhcp pool ${o} subnet ${i}
`,c&&(n+=`set system services dhcp pool ${o} router ${c}
`),l){const e=l.split(",").map(e=>e.trim());e.forEach((e)=>{e&&(n+=`set system services dhcp pool ${o} name-server ${e}
`)})}d&&(n+=`set system services dhcp pool ${o} domain-name ${d}
`),n+=`set system services dhcp pool ${o} lease-time ${u}
`}}))}const a=document.getElementById("syslog-enabled");if(a&&a.checked){const e=document.getElementById("syslog-server").value,t=document.getElementById("syslog-facility").value||"local7",s=document.getElementById("syslog-severity").value||"info";e&&(n+=`
# Syslog Configuration
`,n+=`set system syslog host ${e} facility ${t} level ${s}
`,n+=`set system syslog file messages facility ${t} level ${s}
`)}const g=document.getElementById("snmp-enabled");if(g&&g.checked){const e=document.getElementById("snmp-community").value,t=document.getElementById("snmp-location").value,s=document.getElementById("snmp-contact").value,o=document.getElementById("snmp-clients").value;if(e&&(n+=`
# SNMP Configuration
`,n+=`set snmp community ${e} authorization read-only
`,t&&(n+=`set snmp location "${t}"
`),s&&(n+=`set snmp contact "${s}"
`),o)){const t=o.split(",").map(e=>e.trim());t.forEach(t=>{t&&(n+=`set snmp community ${e} client-list-name snmp-clients
`,n+=`set snmp client-list snmp-clients ${t}
`)})}}n&&(e+=n);let t="";const r=document.getElementById("firewall-filter-enabled");if(r&&r.checked){const e=document.getElementById("filter-name").value,n=document.getElementById("filter-family").value||"inet",s=document.querySelectorAll(".filter-term-item");if(e&&s.length>0){t+=`
# Firewall Filter Configuration
`,s.forEach((s,o)=>{const i=o===0?"0":s.querySelector(".remove-term").getAttribute("data-id"),r=document.getElementById(`term-name-${i}`).value,c=document.getElementById(`term-source-address-${i}`).value,l=document.getElementById(`term-destination-address-${i}`).value,a=document.getElementById(`term-protocol-${i}`).value,d=document.getElementById(`term-source-port-${i}`)?document.getElementById(`term-source-port-${i}`).value:"",u=document.getElementById(`term-destination-port-${i}`)?document.getElementById(`term-destination-port-${i}`).value:"",h=document.getElementById(`term-action-${i}`).value;if(r&&h){t+=`set firewall family ${n} filter ${e} term ${r}`;let s=!1;c&&(t+=` from source-address ${c}`,s=!0),l&&(t+=` from destination-address ${l}`,s=!0),a&&a!=="any"&&(t+=` from protocol ${a}`,s=!0,(a==="tcp"||a==="udp")&&(d&&(t+=` from source-port ${d}`),u&&(t+=` from destination-port ${u}`))),s||(t+=` from any`),t+=` then ${h}
`}});const o=document.getElementById("filter-interface").value,i=document.getElementById("filter-direction").value||"input";o&&(t+=`set interfaces ${o} unit 0 family ${n} filter ${i} ${e}
`)}}const p=document.getElementById("zones-enabled");if(p&&p.checked){const e=document.querySelectorAll(".zone-item");if(e.length>0){t+=`
# Security Zones Configuration
`,e.forEach((e,n)=>{const s=n===0?"0":e.querySelector(".remove-zone").getAttribute("data-id"),o=document.getElementById(`zone-name-${s}`).value,i=document.getElementById(`zone-interfaces-${s}`).value,a=document.getElementById(`zone-intra-zone-${s}`).checked,r=document.getElementById(`zone-ping-${s}`).checked,c=document.getElementById(`zone-ssh-${s}`).checked,l=document.getElementById(`zone-web-${s}`).checked;if(o){t+=`set security zones security-zone ${o}`,a&&(t+=` tcp-rst
`);let e=[];if(r&&e.push("ping"),c&&e.push("ssh"),l&&(e.push("http"),e.push("https")),e.length>0&&(t+=`set security zones security-zone ${o} host-inbound-traffic system-services [ ${e.join(" ")} ]
`),i){const e=i.split(",").map(e=>e.trim());e.forEach(e=>{e&&(t+=`set security zones security-zone ${o} interfaces ${e}
`)})}}});const n=document.querySelectorAll(".policy-item");n.length>0&&(t+=`
# Security Policies Configuration
`,n.forEach((e,n)=>{const s=n===0?"0":e.querySelector(".remove-policy").getAttribute("data-id"),o=document.getElementById(`policy-name-${s}`).value,i=document.getElementById(`policy-from-zone-${s}`).value,a=document.getElementById(`policy-to-zone-${s}`).value,c=document.getElementById(`policy-source-address-${s}`).value||"any",l=document.getElementById(`policy-destination-address-${s}`).value||"any",d=document.getElementById(`policy-application-${s}`).value||"any",r=document.getElementById(`policy-action-${s}`).value,u=document.getElementById(`policy-logging-${s}`).checked;o&&i&&a&&r&&(t+=`set security policies from-zone ${i} to-zone ${a} policy ${o} match source-address ${c}
`,t+=`set security policies from-zone ${i} to-zone ${a} policy ${o} match destination-address ${l}
`,t+=`set security policies from-zone ${i} to-zone ${a} policy ${o} match application ${d}
`,t+=`set security policies from-zone ${i} to-zone ${a} policy ${o} then ${r}
`,u&&(t+=`set security policies from-zone ${i} to-zone ${a} policy ${o} then log session-init
`,t+=`set security policies from-zone ${i} to-zone ${a} policy ${o} then log session-close
`))}))}}t&&(e+=t);let s="";const u=document.getElementById("policy-options-enabled");if(u&&u.checked){const e=document.querySelectorAll(".prefix-list-item");if(e.length>0){s+=`
# Policy Options Configuration
`,e.forEach((e,t)=>{const n=t===0?"0":e.querySelector(".remove-prefix-list").getAttribute("data-id"),o=document.getElementById(`prefix-list-name-${n}`).value,i=document.getElementById(`prefix-list-prefixes-${n}`).value;if(o&&i){const e=i.split(`
`).map(e=>e.trim());e.forEach(e=>{e&&(s+=`set policy-options prefix-list ${o} ${e}
`)})}});const t=document.querySelectorAll(".route-filter-item");t.length>0&&t.forEach((e,t)=>{const n=t===0?"0":e.querySelector(".remove-route-filter").getAttribute("data-id"),o=document.getElementById(`route-filter-name-${n}`).value,i=document.getElementById(`route-filter-prefix-${n}`).value,a=document.getElementById(`route-filter-type-${n}`).value;o&&i&&(s+=`set policy-options policy-statement ${o} term default from route-filter ${i} ${a}
`,s+=`set policy-options policy-statement ${o} term default then accept
`)});const n=document.querySelectorAll(".routing-policy-item");n.length>0&&n.forEach((e,t)=>{const n=t===0?"0":e.querySelector(".remove-routing-policy").getAttribute("data-id"),o=document.getElementById(`routing-policy-name-${n}`).value,a=document.getElementById(`routing-policy-term-name-${n}`).value||"default",r=document.getElementById(`routing-policy-from-protocol-${n}`).value,i=document.getElementById(`routing-policy-prefix-list-enabled-${n}`),c=i&&i.checked?document.getElementById(`routing-policy-prefix-list-${n}`).value:"",l=document.getElementById(`routing-policy-then-action-${n}`).value;o&&l&&(r&&(s+=`set policy-options policy-statement ${o} term ${a} from protocol ${r}
`),i&&i.checked&&c&&(s+=`set policy-options policy-statement ${o} term ${a} from prefix-list ${c}
`),s+=`set policy-options policy-statement ${o} term ${a} then ${l}
`)})}}const l=document.getElementById("cos-enabled");if(l&&l.checked){const e=document.getElementById("cos-classifier-name").value,t=document.querySelectorAll(".forwarding-class-item"),n=document.querySelectorAll(".code-point-item");e&&t.length>0&&(s+=`
# Class of Service Configuration
`,t.forEach((e,t)=>{const n=t===0?"0":e.querySelector(".remove-forwarding-class").getAttribute("data-id"),o=document.getElementById(`forwarding-class-name-${n}`).value,i=document.getElementById(`forwarding-class-queue-${n}`).value;o&&i&&(s+=`set class-of-service forwarding-classes class ${o} queue-num ${i}
`)}),n.length>0&&n.forEach((t,n)=>{const o=n===0?"0":t.querySelector(".remove-code-point").getAttribute("data-id"),i=document.getElementById(`code-point-value-${o}`).value,a=document.getElementById(`code-point-forwarding-class-${o}`).value;i&&a&&(s+=`set class-of-service classifiers dscp ${e} forwarding-class ${a} code-points ${i}
`)}))}return s&&(e+=s),e}let e=1;const A=document.getElementById("add-filter"),f=document.getElementById("filters-list");if(A&&f){A.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-item",t.innerHTML=`
                <div class="input-group">
                    <label for="filter-name-${e}">Filter Name:</label>
                    <input type="text" id="filter-name-${e}" placeholder="INGRESS_FILTER">
                </div>
                <div class="input-group">
                    <label for="filter-family-${e}">Family:</label>
                    <select id="filter-family-${e}">
                        <option value="inet">inet (IPv4)</option>
                        <option value="inet6">inet6 (IPv6)</option>
                    </select>
                </div>
                <div class="filter-terms" id="filter-terms-${e}">
                    <div class="filter-term">
                        <div class="input-group">
                            <label for="term-name-${e}-0">Term Name:</label>
                            <input type="text" id="term-name-${e}-0" placeholder="allow-ssh">
                        </div>
                        <div class="input-group">
                            <label for="term-source-${e}-0">Source Address (optional):</label>
                            <input type="text" id="term-source-${e}-0" placeholder="192.168.1.0/24">
                        </div>
                        <div class="input-group">
                            <label for="term-destination-${e}-0">Destination Address (optional):</label>
                            <input type="text" id="term-destination-${e}-0" placeholder="10.0.0.0/8">
                        </div>
                        <div class="input-group">
                            <label for="term-protocol-${e}-0">Protocol (optional):</label>
                            <select id="term-protocol-${e}-0">
                                <option value="">Select Protocol</option>
                                <option value="tcp">TCP</option>
                                <option value="udp">UDP</option>
                                <option value="icmp">ICMP</option>
                            </select>
                        </div>
                        <div class="input-group term-port-group" style="display: none;">
                            <label for="term-port-${e}-0">Port (optional):</label>
                            <input type="text" id="term-port-${e}-0" placeholder="22">
                        </div>
                        <div class="input-group">
                            <label for="term-action-${e}-0">Action:</label>
                            <select id="term-action-${e}-0">
                                <option value="accept">accept</option>
                                <option value="discard">discard</option>
                                <option value="reject">reject</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button class="add-term" data-filter-id="${e}">Add Term</button>
                <div class="input-group">
                    <label for="filter-interface-${e}">Apply to Interface (optional):</label>
                    <input type="text" id="filter-interface-${e}" placeholder="ge-0/0/0">
                </div>
                <div class="input-group">
                    <label for="filter-direction-${e}">Direction:</label>
                    <select id="filter-direction-${e}">
                        <option value="input">input</option>
                        <option value="output">output</option>
                    </select>
                </div>
                <button class="remove-filter" data-id="${e}">Remove Filter</button>
            `,f.appendChild(t);const n=t.querySelector(`#term-protocol-${e}-0`),s=t.querySelector(".term-port-group");n&&s&&n.addEventListener("change",()=>{n.value==="tcp"||n.value==="udp"?s.style.display="block":s.style.display="none"});const i=t.querySelector(".add-term"),o=t.querySelector(`#filter-terms-${e}`);if(i&&o){let t=1;i.addEventListener("click",()=>{const n=document.createElement("div");n.className="filter-term",n.innerHTML=`
                        <div class="input-group">
                            <label for="term-name-${e}-${t}">Term Name:</label>
                            <input type="text" id="term-name-${e}-${t}" placeholder="allow-http">
                        </div>
                        <div class="input-group">
                            <label for="term-source-${e}-${t}">Source Address (optional):</label>
                            <input type="text" id="term-source-${e}-${t}" placeholder="192.168.1.0/24">
                        </div>
                        <div class="input-group">
                            <label for="term-destination-${e}-${t}">Destination Address (optional):</label>
                            <input type="text" id="term-destination-${e}-${t}" placeholder="10.0.0.0/8">
                        </div>
                        <div class="input-group">
                            <label for="term-protocol-${e}-${t}">Protocol (optional):</label>
                            <select id="term-protocol-${e}-${t}">
                                <option value="">Select Protocol</option>
                                <option value="tcp">TCP</option>
                                <option value="udp">UDP</option>
                                <option value="icmp">ICMP</option>
                            </select>
                        </div>
                        <div class="input-group term-port-group-${t}" style="display: none;">
                            <label for="term-port-${e}-${t}">Port (optional):</label>
                            <input type="text" id="term-port-${e}-${t}" placeholder="80">
                        </div>
                        <div class="input-group">
                            <label for="term-action-${e}-${t}">Action:</label>
                            <select id="term-action-${e}-${t}">
                                <option value="accept">accept</option>
                                <option value="discard">discard</option>
                                <option value="reject">reject</option>
                            </select>
                        </div>
                        <button class="remove-term">Remove Term</button>
                    `,o.appendChild(n);const s=n.querySelector(`#term-protocol-${e}-${t}`),i=n.querySelector(`.term-port-group-${t}`);s&&i&&s.addEventListener("change",()=>{s.value==="tcp"||s.value==="udp"?i.style.display="block":i.style.display="none"});const a=n.querySelector(".remove-term");a&&a.addEventListener("click",()=>{o.removeChild(n)}),t++})}const a=t.querySelector(".remove-filter");a&&a.addEventListener("click",()=>{document.querySelectorAll(".filter-item").length>1?f.removeChild(t):alert("You need at least one filter.")}),e++});const t=document.querySelector("#term-protocol-0-0"),n=document.querySelector(".term-port-group");t&&n&&t.addEventListener("change",()=>{t.value==="tcp"||t.value==="udp"?n.style.display="block":n.style.display="none"});const o=document.querySelector(".remove-filter");o&&o.addEventListener("click",function(){if(document.querySelectorAll(".filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".filter-item");f.removeChild(e)}else alert("You need at least one filter.")});const i=document.querySelector(".add-term"),s=document.querySelector("#filter-terms-0");if(i&&s){let e=1;i.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-term",t.innerHTML=`
                    <div class="input-group">
                        <label for="term-name-0-${e}">Term Name:</label>
                        <input type="text" id="term-name-0-${e}" placeholder="allow-http">
                    </div>
                    <div class="input-group">
                        <label for="term-source-0-${e}">Source Address (optional):</label>
                        <input type="text" id="term-source-0-${e}" placeholder="192.168.1.0/24">
                    </div>
                    <div class="input-group">
                        <label for="term-destination-0-${e}">Destination Address (optional):</label>
                        <input type="text" id="term-destination-0-${e}" placeholder="10.0.0.0/8">
                    </div>
                    <div class="input-group">
                        <label for="term-protocol-0-${e}">Protocol (optional):</label>
                        <select id="term-protocol-0-${e}">
                            <option value="">Select Protocol</option>
                            <option value="tcp">TCP</option>
                            <option value="udp">UDP</option>
                            <option value="icmp">ICMP</option>
                        </select>
                    </div>
                    <div class="input-group term-port-group-${e}" style="display: none;">
                        <label for="term-port-0-${e}">Port (optional):</label>
                        <input type="text" id="term-port-0-${e}" placeholder="80">
                    </div>
                    <div class="input-group">
                        <label for="term-action-0-${e}">Action:</label>
                        <select id="term-action-0-${e}">
                            <option value="accept">accept</option>
                            <option value="discard">discard</option>
                            <option value="reject">reject</option>
                        </select>
                    </div>
                    <button class="remove-term">Remove Term</button>
                `,s.appendChild(t);const n=t.querySelector(`#term-protocol-0-${e}`),o=t.querySelector(`.term-port-group-${e}`);n&&o&&n.addEventListener("change",()=>{n.value==="tcp"||n.value==="udp"?o.style.display="block":o.style.display="none"});const i=t.querySelector(".remove-term");i&&i.addEventListener("click",()=>{s.removeChild(t)}),e++})}}let i=1;const F=document.getElementById("add-zone"),_=document.getElementById("zones-list");if(F&&_){F.addEventListener("click",()=>{const e=document.createElement("div");e.className="zone-item",e.innerHTML=`
                <div class="input-group">
                    <label for="zone-name-${i}">Zone Name:</label>
                    <input type="text" id="zone-name-${i}" placeholder="trust">
                </div>
                <div class="input-group">
                    <label for="zone-interfaces-${i}">Interfaces (comma separated):</label>
                    <input type="text" id="zone-interfaces-${i}" placeholder="ge-0/0/0.0, ge-0/0/1.0">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="zone-ping-${i}">
                    <label for="zone-ping-${i}">Allow Ping</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="zone-ssh-${i}">
                    <label for="zone-ssh-${i}">Allow SSH</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="zone-web-${i}">
                    <label for="zone-web-${i}">Allow Web (HTTP/HTTPS)</label>
                </div>
                <button class="remove-zone" data-id="${i}">Remove Zone</button>
            `,_.appendChild(e);const t=e.querySelector(".remove-zone");t&&t.addEventListener("click",function(){document.querySelectorAll(".zone-item").length>1?_.removeChild(e):alert("You need at least one security zone.")}),i++});const e=document.querySelector(".remove-zone");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".zone-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".zone-item");_.removeChild(e)}else alert("You need at least one security zone.")})}let o=1;const D=document.getElementById("add-policy"),v=document.getElementById("policies-list");if(D&&v){D.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-item",e.innerHTML=`
                <div class="input-group">
                    <label for="policy-name-${o}">Policy Name:</label>
                    <input type="text" id="policy-name-${o}" placeholder="allow-internal-to-dmz">
                </div>
                <div class="input-group">
                    <label for="policy-from-zone-${o}">From Zone:</label>
                    <input type="text" id="policy-from-zone-${o}" placeholder="trust">
                </div>
                <div class="input-group">
                    <label for="policy-to-zone-${o}">To Zone:</label>
                    <input type="text" id="policy-to-zone-${o}" placeholder="dmz">
                </div>
                <div class="input-group">
                    <label for="policy-source-address-${o}">Source Address:</label>
                    <input type="text" id="policy-source-address-${o}" placeholder="192.168.1.0/24">
                </div>
                <div class="input-group">
                    <label for="policy-destination-address-${o}">Destination Address:</label>
                    <input type="text" id="policy-destination-address-${o}" placeholder="10.0.0.1/32">
                </div>
                <div class="input-group">
                    <label for="policy-application-${o}">Application (comma separated):</label>
                    <input type="text" id="policy-application-${o}" placeholder="junos-http, junos-https, junos-ssh">
                </div>
                <div class="input-group">
                    <label for="policy-action-${o}">Action:</label>
                    <select id="policy-action-${o}">
                        <option value="permit">permit</option>
                        <option value="deny">deny</option>
                    </select>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="policy-log-${o}">
                    <label for="policy-log-${o}">Enable Logging</label>
                </div>
                <button class="remove-policy" data-id="${o}">Remove Policy</button>
            `,v.appendChild(e);const t=e.querySelector(".remove-policy");t&&t.addEventListener("click",function(){document.querySelectorAll(".policy-item").length>1?v.removeChild(e):alert("You need at least one security policy.")}),o++});const e=document.querySelector(".remove-policy");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".policy-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-item");v.removeChild(e)}else alert("You need at least one security policy.")})}let a=1;const R=document.getElementById("add-prefix-list"),y=document.getElementById("prefix-lists");if(R&&y){R.addEventListener("click",()=>{const e=document.createElement("div");e.className="prefix-list-item",e.innerHTML=`
                <div class="input-group">
                    <label for="prefix-list-name-${a}">Prefix List Name:</label>
                    <input type="text" id="prefix-list-name-${a}" placeholder="internal-networks">
                </div>
                <div class="prefix-entries" id="prefix-entries-${a}">
                    <div class="prefix-entry">
                        <div class="input-group">
                            <label for="prefix-entry-${a}-0">Prefix:</label>
                            <input type="text" id="prefix-entry-${a}-0" placeholder="192.168.0.0/16">
                        </div>
                    </div>
                </div>
                <button class="add-prefix-entry" data-list-id="${a}">Add Prefix</button>
                <button class="remove-prefix-list" data-id="${a}">Remove Prefix List</button>
            `,y.appendChild(e);const n=e.querySelector(".add-prefix-entry"),t=e.querySelector(`#prefix-entries-${a}`);if(n&&t){let e=1;n.addEventListener("click",()=>{const n=document.createElement("div");n.className="prefix-entry",n.innerHTML=`
                        <div class="input-group">
                            <label for="prefix-entry-${a}-${e}">Prefix:</label>
                            <input type="text" id="prefix-entry-${a}-${e}" placeholder="10.0.0.0/8">
                        </div>
                        <button class="remove-prefix-entry">Remove</button>
                    `,t.appendChild(n);const s=n.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{t.removeChild(n)}),e++})}const s=e.querySelector(".remove-prefix-list");s&&s.addEventListener("click",function(){document.querySelectorAll(".prefix-list-item").length>1?y.removeChild(e):alert("You need at least one prefix list.")}),a++});const t=document.querySelector(".add-prefix-entry"),e=document.querySelector("#prefix-entries-0");if(t&&e){let n=1;t.addEventListener("click",()=>{const t=document.createElement("div");t.className="prefix-entry",t.innerHTML=`
                    <div class="input-group">
                        <label for="prefix-entry-0-${n}">Prefix:</label>
                        <input type="text" id="prefix-entry-0-${n}" placeholder="10.0.0.0/8">
                    </div>
                    <button class="remove-prefix-entry">Remove</button>
                `,e.appendChild(t);const s=t.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-prefix-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".prefix-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".prefix-list-item");y.removeChild(e)}else alert("You need at least one prefix list.")})}let l=1;const N=document.getElementById("add-route-filter"),b=document.getElementById("route-filters");if(N&&b){N.addEventListener("click",()=>{const e=document.createElement("div");e.className="route-filter-item",e.innerHTML=`
                <div class="input-group">
                    <label for="route-filter-prefix-${l}">Route Filter Prefix:</label>
                    <input type="text" id="route-filter-prefix-${l}" placeholder="0.0.0.0/0">
                </div>
                <div class="input-group">
                    <label for="route-filter-action-${l}">Action:</label>
                    <select id="route-filter-action-${l}">
                        <option value="accept">accept</option>
                        <option value="reject">reject</option>
                    </select>
                </div>
                <button class="remove-route-filter" data-id="${l}">Remove Filter</button>
            `,b.appendChild(e);const t=e.querySelector(".remove-route-filter");t&&t.addEventListener("click",function(){document.querySelectorAll(".route-filter-item").length>1?b.removeChild(e):alert("You need at least one route filter.")}),l++});const e=document.querySelector(".remove-route-filter");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".route-filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".route-filter-item");b.removeChild(e)}else alert("You need at least one route filter.")})}let s=1;const S=document.getElementById("add-policy-list"),j=document.getElementById("policy-lists");if(S&&j){S.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-list-item",e.innerHTML=`
                <div class="input-group">
                    <label for="policy-list-name-${s}">Policy Name:</label>
                    <input type="text" id="policy-list-name-${s}" placeholder="export-to-isp">
                </div>
                <div class="policy-statements" id="policy-statements-${s}">
                    <div class="policy-statement">
                        <div class="input-group">
                            <label for="statement-name-${s}-0">Statement Name:</label>
                            <input type="text" id="statement-name-${s}-0" placeholder="match-prefixes">
                        </div>
                        <div class="input-group">
                            <label for="statement-from-${s}-0">From (prefix-list or route-filter):</label>
                            <input type="text" id="statement-from-${s}-0" placeholder="internal-networks">
                        </div>
                        <div class="input-group">
                            <label for="statement-then-${s}-0">Then:</label>
                            <select id="statement-then-${s}-0">
                                <option value="accept">accept</option>
                                <option value="reject">reject</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button class="add-statement" data-policy-id="${s}">Add Statement</button>
                <button class="remove-policy-list" data-id="${s}">Remove Policy</button>
            `,j.appendChild(e);const n=e.querySelector(".add-statement"),t=e.querySelector(`#policy-statements-${s}`);if(n&&t){let e=1;n.addEventListener("click",()=>{const n=document.createElement("div");n.className="policy-statement",n.innerHTML=`
                        <div class="input-group">
                            <label for="statement-name-${s}-${e}">Statement Name:</label>
                            <input type="text" id="statement-name-${s}-${e}" placeholder="set-attributes">
                        </div>
                        <div class="input-group">
                            <label for="statement-from-${s}-${e}">From (prefix-list or route-filter):</label>
                            <input type="text" id="statement-from-${s}-${e}" placeholder="internal-networks">
                        </div>
                        <div class="input-group">
                            <label for="statement-then-${s}-${e}">Then:</label>
                            <select id="statement-then-${s}-${e}">
                                <option value="accept">accept</option>
                                <option value="reject">reject</option>
                            </select>
                        </div>
                        <button class="remove-statement">Remove</button>
                    `,t.appendChild(n);const o=n.querySelector(".remove-statement");o&&o.addEventListener("click",()=>{t.removeChild(n)}),e++})}const o=e.querySelector(".remove-policy-list");o&&o.addEventListener("click",function(){document.querySelectorAll(".policy-list-item").length>1?j.removeChild(e):alert("You need at least one policy.")}),s++});const t=document.querySelector(".add-statement"),e=document.querySelector("#policy-statements-0");if(t&&e){let n=1;t.addEventListener("click",()=>{const t=document.createElement("div");t.className="policy-statement",t.innerHTML=`
                    <div class="input-group">
                        <label for="statement-name-0-${n}">Statement Name:</label>
                        <input type="text" id="statement-name-0-${n}" placeholder="set-attributes">
                    </div>
                    <div class="input-group">
                        <label for="statement-from-0-${n}">From (prefix-list or route-filter):</label>
                        <input type="text" id="statement-from-0-${n}" placeholder="internal-networks">
                    </div>
                    <div class="input-group">
                        <label for="statement-then-0-${n}">Then:</label>
                        <select id="statement-then-0-${n}">
                            <option value="accept">accept</option>
                            <option value="reject">reject</option>
                        </select>
                    </div>
                    <button class="remove-statement">Remove</button>
                `,e.appendChild(t);const s=t.querySelector(".remove-statement");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-policy-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".policy-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-list-item");j.removeChild(e)}else alert("You need at least one policy.")})}})