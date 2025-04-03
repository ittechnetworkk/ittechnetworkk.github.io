document.addEventListener("DOMContentLoaded",()=>{const P=document.querySelectorAll(".tab-btn"),Z=document.querySelectorAll(".tab-content");P.forEach(e=>{e.addEventListener("click",()=>{P.forEach(e=>e.classList.remove("active")),e.classList.add("active"),Z.forEach(e=>e.style.display="none");const t=e.getAttribute("data-tab");document.getElementById(`${t}-content`).style.display="block"})});const Y=[{checkbox:"interface-description-enabled",section:"description-group"},{checkbox:"ipv6-enabled",section:"ipv6-config"},{checkbox:"vlan-enabled",section:"vlan-config"},{checkbox:"firewall-filter-enabled",section:"firewall-filter-config"},{checkbox:"zones-enabled",section:"zones-config"},{checkbox:"ntp-enabled",section:"ntp-config"},{checkbox:"ntp-source-interface-enabled",section:"ntp-source-interface-group"},{checkbox:"dhcp-server-enabled",section:"dhcp-server-config"},{checkbox:"syslog-enabled",section:"syslog-config"},{checkbox:"snmp-enabled",section:"snmp-config"},{checkbox:"policy-options-enabled",section:"policy-options-config"},{checkbox:"cos-enabled",section:"cos-config"},{checkbox:"routing-policy-prefix-list-enabled",section:"routing-policy-prefix-list-group"},{checkbox:"bgp-peer-import-policy-enabled",section:"bgp-peer-import-policy"},{checkbox:"bgp-peer-export-policy-enabled",section:"bgp-peer-export-policy"}];Y.forEach(e=>{const t=document.getElementById(e.checkbox+"-0");if(t){const n=document.getElementById(e.section+"-0");n&&t.addEventListener("change",()=>{n.style.display=t.checked?"block":"none"})}const n=document.getElementById(e.checkbox);if(n){const t=document.getElementById(e.section);t&&n.addEventListener("change",()=>{t.style.display=n.checked?"block":"none"})}});const C=document.getElementById("routing-protocol"),G=document.querySelectorAll(".protocol-config");C&&C.addEventListener("change",()=>{G.forEach(e=>{e.style.display="none"});const e=C.value;e!=="none"&&(document.getElementById(`${e}-config`).style.display="block")});const w=document.getElementById("term-protocol-0"),E=document.getElementById("port-fields-0");w&&E&&w.addEventListener("change",()=>{w.value==="tcp"||w.value==="udp"?E.style.display="block":E.style.display="none"});let t=1;const V=document.getElementById("add-interface"),x=document.getElementById("interfaces-list");if(V&&x){V.addEventListener("click",()=>{const e=document.createElement("div");e.className="interface-item",e.innerHTML=`
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
            `,x.appendChild(e);const n=[{checkbox:`interface-description-enabled-${t}`,section:`description-group-${t}`},{checkbox:`ipv6-enabled-${t}`,section:`ipv6-config-${t}`},{checkbox:`vlan-enabled-${t}`,section:`vlan-config-${t}`}];n.forEach(e=>{const t=document.getElementById(e.checkbox),n=document.getElementById(e.section);t&&n&&t.addEventListener("change",()=>{n.style.display=t.checked?"block":"none"})});const s=e.querySelector(".remove-interface");s.addEventListener("click",function(){document.querySelectorAll(".interface-item").length>1?x.removeChild(e):alert("You need at least one interface.")}),t++});const e=document.querySelector(".remove-interface");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".interface-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".interface-item");x.removeChild(e)}else alert("You need at least one interface.")})}let c=1;const W=document.getElementById("add-static-route"),O=document.getElementById("static-routes-list");if(W&&O){W.addEventListener("click",()=>{const e=document.createElement("div");e.className="static-route-item",e.innerHTML=`
                <div class="input-group">
                    <label for="route-destination-${c}">Destination Network:</label>
                    <input type="text" id="route-destination-${c}" placeholder="192.168.2.0">
                </div>
                <div class="input-group">
                    <label for="route-prefix-${c}">Prefix Length:</label>
                    <input type="number" id="route-prefix-${c}" placeholder="24" value="24" min="1" max="32">
                </div>
                <div class="input-group">
                    <label for="next-hop-${c}">Next Hop:</label>
                    <input type="text" id="next-hop-${c}" placeholder="10.0.0.2">
                </div>
                <div class="input-group">
                    <label for="route-preference-${c}">Preference (optional):</label>
                    <input type="number" id="route-preference-${c}" placeholder="10" min="1" max="255">
                </div>
                <button class="remove-route" data-id="${c}">Remove</button>
            `,O.appendChild(e);const t=e.querySelector(".remove-route");t.addEventListener("click",function(){document.querySelectorAll(".static-route-item").length>1?O.removeChild(e):alert("You need at least one static route.")}),c++});const e=document.querySelector(".remove-route");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".static-route-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".static-route-item");O.removeChild(e)}else alert("You need at least one static route.")})}let l=1;const q=document.getElementById("add-ospf-area"),p=document.getElementById("ospf-areas");if(q&&p){q.addEventListener("click",()=>{const e=document.createElement("div");e.className="ospf-area-item",e.innerHTML=`
                <div class="input-group">
                    <label for="ospf-area-id-${l}">Area ID:</label>
                    <input type="text" id="ospf-area-id-${l}" placeholder="0.0.0.0" value="0.0.0.0">
                </div>
                <div class="input-group">
                    <label for="ospf-area-interfaces-${l}">Interfaces (comma separated):</label>
                    <input type="text" id="ospf-area-interfaces-${l}" placeholder="ge-0/0/0.0, lo0.0">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="ospf-area-stub-${l}">
                    <label for="ospf-area-stub-${l}">Stub Area</label>
                </div>
                <button class="remove-ospf-area" data-id="${l}">Remove</button>
            `,p.appendChild(e);const t=e.querySelector(".remove-ospf-area");t.addEventListener("click",function(){document.querySelectorAll(".ospf-area-item").length>1?p.removeChild(e):alert("You need at least one OSPF area.")}),l++});const e=document.querySelector(".remove-ospf-area");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".ospf-area-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".ospf-area-item");p.removeChild(e)}else alert("You need at least one OSPF area.")})}let n=1;const M=document.getElementById("add-bgp-neighbor"),b=document.getElementById("bgp-neighbors");if(M&&b){M.addEventListener("click",()=>{const e=document.createElement("div");e.className="bgp-neighbor-item",e.innerHTML=`
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
            `,b.appendChild(e);const t=e.querySelector(`#bgp-peer-import-policy-enabled-${n}`),o=e.querySelector(`#bgp-peer-import-policy-${n}`);t&&o&&t.addEventListener("change",()=>{o.style.display=t.checked?"block":"none"});const s=e.querySelector(`#bgp-peer-export-policy-enabled-${n}`),i=e.querySelector(`#bgp-peer-export-policy-${n}`);s&&i&&s.addEventListener("change",()=>{i.style.display=s.checked?"block":"none"});const a=e.querySelector(".remove-bgp-neighbor");a.addEventListener("click",function(){document.querySelectorAll(".bgp-neighbor-item").length>1?b.removeChild(e):alert("You need at least one BGP neighbor.")}),n++});const s=document.querySelector(".remove-bgp-neighbor");s&&s.addEventListener("click",function(){if(document.querySelectorAll(".bgp-neighbor-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".bgp-neighbor-item");b.removeChild(e)}else alert("You need at least one BGP neighbor.")});const e=document.getElementById("bgp-peer-import-policy-enabled-0"),o=document.getElementById("bgp-peer-import-policy-0");e&&o&&e.addEventListener("change",()=>{o.style.display=e.checked?"block":"none"});const t=document.getElementById("bgp-peer-export-policy-enabled-0"),i=document.getElementById("bgp-peer-export-policy-0");t&&i&&t.addEventListener("change",()=>{i.style.display=t.checked?"block":"none"})}const B=document.getElementById("generate-config"),y=document.getElementById("config-output"),A=document.getElementById("config-output-container");B&&y&&A&&B.addEventListener("click",()=>{const e=Q();y.textContent=e,A.style.display="block",A.scrollIntoView({behavior:"smooth"})});const L=document.getElementById("reset-form");L&&L.addEventListener("click",()=>{confirm("Are you sure you want to reset the form? All your configuration will be lost.")&&window.location.reload()});const S=document.getElementById("copy-config"),k=document.getElementById("copy-tooltip");S&&y&&k&&S.addEventListener("click",()=>{X(y.textContent),k.style.display="block",setTimeout(()=>{k.style.display="none"},2e3)});function X(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function Q(){const j=document.getElementById("hostname").value||"router1",y=document.getElementById("domain-name").value||"example.com",b=document.getElementById("root-password").value||"",h=document.getElementById("use-encrypted-password").checked,i=document.getElementById("login-user").value||"admin",v=document.getElementById("login-password").value||"",w=document.getElementById("user-class").value||"super-user",_=document.getElementById("system-timezone").value||"UTC",c=document.getElementById("dns-servers").value||"";let e=`# Juniper Junos Configuration
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
`)}))}return s&&(e+=s),e}let e=1;const T=document.getElementById("add-filter"),v=document.getElementById("filters-list");if(T&&v){T.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-item",t.innerHTML=`
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
            `,v.appendChild(t);const n=t.querySelector(`#term-protocol-${e}-0`),s=t.querySelector(".term-port-group");n&&s&&n.addEventListener("change",()=>{n.value==="tcp"||n.value==="udp"?s.style.display="block":s.style.display="none"});const i=t.querySelector(".add-term"),o=t.querySelector(`#filter-terms-${e}`);if(i&&o){let t=1;i.addEventListener("click",()=>{const n=document.createElement("div");n.className="filter-term",n.innerHTML=`
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
                    `,o.appendChild(n);const s=n.querySelector(`#term-protocol-${e}-${t}`),i=n.querySelector(`.term-port-group-${t}`);s&&i&&s.addEventListener("change",()=>{s.value==="tcp"||s.value==="udp"?i.style.display="block":i.style.display="none"});const a=n.querySelector(".remove-term");a&&a.addEventListener("click",()=>{o.removeChild(n)}),t++})}const a=t.querySelector(".remove-filter");a&&a.addEventListener("click",()=>{document.querySelectorAll(".filter-item").length>1?v.removeChild(t):alert("You need at least one filter.")}),e++});const t=document.querySelector("#term-protocol-0-0"),n=document.querySelector(".term-port-group");t&&n&&t.addEventListener("change",()=>{t.value==="tcp"||t.value==="udp"?n.style.display="block":n.style.display="none"});const o=document.querySelector(".remove-filter");o&&o.addEventListener("click",function(){if(document.querySelectorAll(".filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".filter-item");v.removeChild(e)}else alert("You need at least one filter.")});const i=document.querySelector(".add-term"),s=document.querySelector("#filter-terms-0");if(i&&s){let e=1;i.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-term",t.innerHTML=`
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
            `,_.appendChild(e);const t=e.querySelector(".remove-zone");t&&t.addEventListener("click",function(){document.querySelectorAll(".zone-item").length>1?_.removeChild(e):alert("You need at least one security zone.")}),i++});const e=document.querySelector(".remove-zone");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".zone-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".zone-item");_.removeChild(e)}else alert("You need at least one security zone.")})}let o=1;const D=document.getElementById("add-policy"),m=document.getElementById("policies-list");if(D&&m){D.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-item",e.innerHTML=`
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
            `,m.appendChild(e);const t=e.querySelector(".remove-policy");t&&t.addEventListener("click",function(){document.querySelectorAll(".policy-item").length>1?m.removeChild(e):alert("You need at least one security policy.")}),o++});const e=document.querySelector(".remove-policy");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".policy-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-item");m.removeChild(e)}else alert("You need at least one security policy.")})}let r=1;const R=document.getElementById("add-prefix-list"),h=document.getElementById("prefix-lists");if(R&&h){R.addEventListener("click",()=>{const e=document.createElement("div");e.className="prefix-list-item",e.innerHTML=`
                <div class="input-group">
                    <label for="prefix-list-name-${r}">Prefix List Name:</label>
                    <input type="text" id="prefix-list-name-${r}" placeholder="internal-networks">
                </div>
                <div class="prefix-entries" id="prefix-entries-${r}">
                    <div class="prefix-entry">
                        <div class="input-group">
                            <label for="prefix-entry-${r}-0">Prefix:</label>
                            <input type="text" id="prefix-entry-${r}-0" placeholder="192.168.0.0/16">
                        </div>
                    </div>
                </div>
                <button class="add-prefix-entry" data-list-id="${r}">Add Prefix</button>
                <button class="remove-prefix-list" data-id="${r}">Remove Prefix List</button>
            `,h.appendChild(e);const n=e.querySelector(".add-prefix-entry"),t=e.querySelector(`#prefix-entries-${r}`);if(n&&t){let e=1;n.addEventListener("click",()=>{const n=document.createElement("div");n.className="prefix-entry",n.innerHTML=`
                        <div class="input-group">
                            <label for="prefix-entry-${r}-${e}">Prefix:</label>
                            <input type="text" id="prefix-entry-${r}-${e}" placeholder="10.0.0.0/8">
                        </div>
                        <button class="remove-prefix-entry">Remove</button>
                    `,t.appendChild(n);const s=n.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{t.removeChild(n)}),e++})}const s=e.querySelector(".remove-prefix-list");s&&s.addEventListener("click",function(){document.querySelectorAll(".prefix-list-item").length>1?h.removeChild(e):alert("You need at least one prefix list.")}),r++});const t=document.querySelector(".add-prefix-entry"),e=document.querySelector("#prefix-entries-0");if(t&&e){let n=1;t.addEventListener("click",()=>{const t=document.createElement("div");t.className="prefix-entry",t.innerHTML=`
                    <div class="input-group">
                        <label for="prefix-entry-0-${n}">Prefix:</label>
                        <input type="text" id="prefix-entry-0-${n}" placeholder="10.0.0.0/8">
                    </div>
                    <button class="remove-prefix-entry">Remove</button>
                `,e.appendChild(t);const s=t.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-prefix-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".prefix-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".prefix-list-item");h.removeChild(e)}else alert("You need at least one prefix list.")})}let d=1;const I=document.getElementById("add-route-filter"),j=document.getElementById("route-filters");if(I&&j){I.addEventListener("click",()=>{const e=document.createElement("div");e.className="route-filter-item",e.innerHTML=`
                <div class="input-group">
                    <label for="route-filter-prefix-${d}">Route Filter Prefix:</label>
                    <input type="text" id="route-filter-prefix-${d}" placeholder="0.0.0.0/0">
                </div>
                <div class="input-group">
                    <label for="route-filter-action-${d}">Action:</label>
                    <select id="route-filter-action-${d}">
                        <option value="accept">accept</option>
                        <option value="reject">reject</option>
                    </select>
                </div>
                <button class="remove-route-filter" data-id="${d}">Remove Filter</button>
            `,j.appendChild(e);const t=e.querySelector(".remove-route-filter");t&&t.addEventListener("click",function(){document.querySelectorAll(".route-filter-item").length>1?j.removeChild(e):alert("You need at least one route filter.")}),d++});const e=document.querySelector(".remove-route-filter");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".route-filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".route-filter-item");j.removeChild(e)}else alert("You need at least one route filter.")})}let s=1;const $=document.getElementById("add-policy-list"),g=document.getElementById("policy-lists");if($&&g){$.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-list-item",e.innerHTML=`
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
            `,g.appendChild(e);const n=e.querySelector(".add-statement"),t=e.querySelector(`#policy-statements-${s}`);if(n&&t){let e=1;n.addEventListener("click",()=>{const n=document.createElement("div");n.className="policy-statement",n.innerHTML=`
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
                    `,t.appendChild(n);const o=n.querySelector(".remove-statement");o&&o.addEventListener("click",()=>{t.removeChild(n)}),e++})}const o=e.querySelector(".remove-policy-list");o&&o.addEventListener("click",function(){document.querySelectorAll(".policy-list-item").length>1?g.removeChild(e):alert("You need at least one policy.")}),s++});const t=document.querySelector(".add-statement"),e=document.querySelector("#policy-statements-0");if(t&&e){let n=1;t.addEventListener("click",()=>{const t=document.createElement("div");t.className="policy-statement",t.innerHTML=`
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
                `,e.appendChild(t);const s=t.querySelector(".remove-statement");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-policy-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".policy-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-list-item");g.removeChild(e)}else alert("You need at least one policy.")})}const U=document.getElementById("validate-config"),K=document.getElementById("close-validation"),u=document.getElementById("validation-container"),f=document.getElementById("validation-results"),H=document.getElementById("validation-errors"),N=document.getElementById("validation-warnings"),z=document.getElementById("validation-info");U&&u&&U.addEventListener("click",()=>{const e=J();ee(e)}),K&&u&&K.addEventListener("click",()=>{u.style.display="none"});const a={ipAddress:/^(\d{1,3}\.){3}\d{1,3}$/,ipv6Address:/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}$|^([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}$|^([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}$|^([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$/,hostname:/^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/,domainName:/^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,passwordStrength:e=>e&&e.length>=8,validSubnet:(e,t)=>!!e&&!!t&&!!/^(\d{1,3}\.){3}\d{1,3}$/.test(e)&&!(t<0||t>32),validIpv6Subnet:(e,t)=>!!e&&!!t&&!!/^[0-9a-fA-F:]+$/.test(e)&&!(t<0||t>128),securityChecks:[{id:"root-password",check:()=>document.getElementById("root-password").value.length>0,message:"Root password is not set. This is a security risk in production environments.",severity:"error",fix:()=>{alert("Please set a strong root password"),document.getElementById("root-password").focus()}},{id:"ssh-access",check:()=>{const t=document.querySelectorAll(".interface-item");let e=!1;return t.forEach(t=>{const n=t.querySelector("select").value;(n==="em0"||n==="fxp0")&&(e=!0)}),e},message:"No dedicated management interface (em0/fxp0) detected. It is recommended to have a separate management interface for secure access.",severity:"warning",fix:()=>{alert("Add a management interface (em0 or fxp0) for secure management access");const e=document.getElementById("add-interface");e&&e.click()}},{id:"ntp-config",check:()=>{const e=document.getElementById("ntp-enabled");return e&&e.checked},message:"NTP is not configured. Accurate time is important for logging, authentication, and security features.",severity:"info",fix:()=>{const e=document.getElementById("ntp-enabled");e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}},{id:"syslog-config",check:()=>{const e=document.getElementById("syslog-enabled");return e&&e.checked},message:"Syslog is not configured. Remote logging is recommended for security and troubleshooting.",severity:"info",fix:()=>{const e=document.getElementById("syslog-enabled");e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}}]};function J(){const e=[],n=document.getElementById("hostname").value;n?a.hostname.test(n)||e.push({id:"hostname-invalid",message:"Hostname contains invalid characters. Use only alphanumeric characters and hyphens.",severity:"error",fix:()=>{document.getElementById("hostname").focus()}}):e.push({id:"hostname-empty",message:"Hostname is not set. This is required for device identification.",severity:"error",fix:()=>{document.getElementById("hostname").focus()}});const s=document.getElementById("domain-name").value;s&&!a.domainName.test(s)&&e.push({id:"domain-invalid",message:"Domain name is invalid. Use a valid domain format like example.com.",severity:"warning",fix:()=>{document.getElementById("domain-name").focus()}});const o=document.querySelectorAll(".interface-item");o.length===0?e.push({id:"no-interfaces",message:"No interfaces configured. At least one interface is recommended.",severity:"warning",fix:()=>{const e=document.getElementById("add-interface");e&&e.click()}}):o.forEach((t,n)=>{const s=t.querySelector(`#ip-address-${n}`).value,o=t.querySelector(`#prefix-length-${n}`).value;s&&!a.ipAddress.test(s)?e.push({id:`interface-${n}-ip-invalid`,message:`Interface ${n+1} has an invalid IP address format. Use IPv4 format (e.g., 192.168.1.1).`,severity:"error",fix:()=>{t.querySelector(`#ip-address-${n}`).focus()}}):s&&!a.validSubnet(s,o)&&e.push({id:`interface-${n}-subnet-invalid`,message:`Interface ${n+1} has an invalid subnet configuration. Check IP and prefix length.`,severity:"error",fix:()=>{t.querySelector(`#prefix-length-${n}`).focus()}});const i=t.querySelector(`#ipv6-enabled-${n}`).checked;if(i){const s=t.querySelector(`#ipv6-address-${n}`).value,o=t.querySelector(`#ipv6-prefix-length-${n}`).value;s?a.validIpv6Subnet(s,o)||e.push({id:`interface-${n}-ipv6-invalid`,message:`Interface ${n+1} has an invalid IPv6 configuration. Check address and prefix length.`,severity:"error",fix:()=>{t.querySelector(`#ipv6-address-${n}`).focus()}}):e.push({id:`interface-${n}-ipv6-empty`,message:`Interface ${n+1} has IPv6 enabled but no address specified.`,severity:"warning",fix:()=>{t.querySelector(`#ipv6-address-${n}`).focus()}})}});const t=document.getElementById("routing-protocol").value;if(t==="static"){const t=document.querySelectorAll(".static-route-item");t.length===0?e.push({id:"no-static-routes",message:"Static routing is selected but no routes are configured.",severity:"warning",fix:()=>{const e=document.getElementById("add-static-route");e&&e.click()}}):t.forEach((t,n)=>{const s=t.querySelector(`#route-destination-${n}`).value,i=t.querySelector(`#route-prefix-${n}`).value,o=t.querySelector(`#next-hop-${n}`).value;!s||!o?e.push({id:`static-route-${n}-incomplete`,message:`Static route ${n+1} is incomplete. Destination and next hop are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#next-hop-${n}`).focus():t.querySelector(`#route-destination-${n}`).focus()}}):a.ipAddress.test(s)?a.ipAddress.test(o)||e.push({id:`static-route-${n}-nexthop-invalid`,message:`Static route ${n+1} has an invalid next hop address format.`,severity:"error",fix:()=>{t.querySelector(`#next-hop-${n}`).focus()}}):e.push({id:`static-route-${n}-destination-invalid`,message:`Static route ${n+1} has an invalid destination address format.`,severity:"error",fix:()=>{t.querySelector(`#route-destination-${n}`).focus()}})})}else if(t==="ospf"){const t=document.getElementById("ospf-router-id").value;t?a.ipAddress.test(t)||e.push({id:"ospf-router-id-invalid",message:"OSPF router ID has an invalid format. It should be in IPv4 format (e.g., 1.1.1.1).",severity:"error",fix:()=>{document.getElementById("ospf-router-id").focus()}}):e.push({id:"ospf-router-id-missing",message:"OSPF is enabled but router ID is not set. This is required for OSPF operation.",severity:"error",fix:()=>{document.getElementById("ospf-router-id").focus()}});const n=document.querySelectorAll(".ospf-area-item");n.length===0?e.push({id:"no-ospf-areas",message:"OSPF is enabled but no areas are configured.",severity:"error",fix:()=>{const e=document.getElementById("add-ospf-area");e&&e.click()}}):n.forEach((t,n)=>{const s=t.querySelector(`#ospf-area-id-${n}`).value,o=t.querySelector(`#ospf-area-interfaces-${n}`).value;(!s||!o)&&e.push({id:`ospf-area-${n}-incomplete`,message:`OSPF area ${n+1} is incomplete. Area ID and interfaces are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#ospf-area-interfaces-${n}`).focus():t.querySelector(`#ospf-area-id-${n}`).focus()}})})}else if(t==="bgp"){const s=document.getElementById("bgp-local-as").value,t=document.getElementById("bgp-router-id").value;s||e.push({id:"bgp-local-as-missing",message:"BGP is enabled but local AS number is not set. This is required for BGP operation.",severity:"error",fix:()=>{document.getElementById("bgp-local-as").focus()}}),t?a.ipAddress.test(t)||e.push({id:"bgp-router-id-invalid",message:"BGP router ID has an invalid format. It should be in IPv4 format (e.g., 1.1.1.1).",severity:"error",fix:()=>{document.getElementById("bgp-router-id").focus()}}):e.push({id:"bgp-router-id-missing",message:"BGP is enabled but router ID is not set. This is required for BGP operation.",severity:"error",fix:()=>{document.getElementById("bgp-router-id").focus()}});const n=document.querySelectorAll(".bgp-neighbor-item");n.length===0?e.push({id:"no-bgp-neighbors",message:"BGP is enabled but no neighbors are configured.",severity:"error",fix:()=>{const e=document.getElementById("add-bgp-neighbor");e&&e.click()}}):n.forEach((t,n)=>{const s=t.querySelector(`#bgp-peer-address-${n}`).value,o=t.querySelector(`#bgp-peer-as-${n}`).value;!s||!o?e.push({id:`bgp-neighbor-${n}-incomplete`,message:`BGP neighbor ${n+1} is incomplete. Peer address and AS number are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#bgp-peer-as-${n}`).focus():t.querySelector(`#bgp-peer-address-${n}`).focus()}}):a.ipAddress.test(s)||e.push({id:`bgp-neighbor-${n}-address-invalid`,message:`BGP neighbor ${n+1} has an invalid peer address format.`,severity:"error",fix:()=>{t.querySelector(`#bgp-peer-address-${n}`).focus()}})})}return a.securityChecks.forEach(t=>{t.check()||e.push({id:t.id,message:t.message,severity:t.severity,fix:t.fix})}),e}function ee(e){if(!u||!f)return;f.innerHTML="";const t=e.filter(e=>e.severity==="error").length,n=e.filter(e=>e.severity==="warning").length,s=e.filter(e=>e.severity==="info").length;if(H&&(H.textContent=`${t} Error${t!==1?"s":""}`),N&&(N.textContent=`${n} Warning${n!==1?"s":""}`),z&&(z.textContent=`${s} Suggestion${s!==1?"s":""}`),e.length===0){const e=document.createElement("div");e.className="validation-item info",e.innerHTML=`
                <div class="validation-icon info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <div class="validation-content">
                    <div class="validation-title">Configuration Validated</div>
                    <div class="validation-message">No issues found. Your configuration looks good!</div>
                </div>
            `,f.appendChild(e)}else{const t=[...e].sort((e,t)=>{const n={error:0,warning:1,info:2};return n[e.severity]-n[t.severity]});t.forEach(e=>{const t=document.createElement("div");t.className=`validation-item ${e.severity}`;let n="";e.severity==="error"?n=`
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    `:e.severity==="warning"?n=`
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                    `:n=`
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    `;let s="";if(e.fix&&(s=`<button class="validation-fix">Fix Issue</button>`),t.innerHTML=`
                    <div class="validation-icon ${e.severity}">
                        ${n}
                    </div>
                    <div class="validation-content">
                        <div class="validation-title">${e.severity==="info"?"Suggestion":e.severity==="warning"?"Warning":"Error"}</div>
                        <div class="validation-message">${e.message}</div>
                        ${s}
                    </div>
                `,f.appendChild(t),e.fix){const n=t.querySelector(".validation-fix");n&&n.addEventListener("click",()=>{e.fix()})}})}u.style.display="block"}})