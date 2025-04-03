document.addEventListener("DOMContentLoaded",()=>{const T=document.querySelectorAll(".tab-btn"),se=document.querySelectorAll(".tab-content");T.forEach(e=>{e.addEventListener("click",()=>{T.forEach(e=>e.classList.remove("active")),e.classList.add("active"),se.forEach(e=>e.style.display="none");const t=e.getAttribute("data-tab");document.getElementById(`${t}-content`).style.display="block"})});const oe=[{checkbox:"interface-description-enabled",section:"description-group"},{checkbox:"ipv6-enabled",section:"ipv6-config"},{checkbox:"vlan-enabled",section:"vlan-config"},{checkbox:"firewall-filter-enabled",section:"firewall-filter-config"},{checkbox:"zones-enabled",section:"zones-config"},{checkbox:"ntp-enabled",section:"ntp-config"},{checkbox:"ntp-source-interface-enabled",section:"ntp-source-interface-group"},{checkbox:"dhcp-server-enabled",section:"dhcp-server-config"},{checkbox:"syslog-enabled",section:"syslog-config"},{checkbox:"snmp-enabled",section:"snmp-config"},{checkbox:"policy-options-enabled",section:"policy-options-config"},{checkbox:"cos-enabled",section:"cos-config"},{checkbox:"routing-policy-prefix-list-enabled",section:"routing-policy-prefix-list-group"},{checkbox:"bgp-peer-import-policy-enabled",section:"bgp-peer-import-policy"},{checkbox:"bgp-peer-export-policy-enabled",section:"bgp-peer-export-policy"}];oe.forEach(e=>{const t=document.getElementById(e.checkbox+"-0");if(t){const n=document.getElementById(e.section+"-0");n&&t.addEventListener("change",()=>{n.style.display=t.checked?"block":"none"})}const n=document.getElementById(e.checkbox);if(n){const t=document.getElementById(e.section);t&&n.addEventListener("change",()=>{t.style.display=n.checked?"block":"none"})}});const C=document.getElementById("routing-protocol"),ie=document.querySelectorAll(".protocol-config");C&&C.addEventListener("change",()=>{ie.forEach(e=>{e.style.display="none"});const e=C.value;e!=="none"&&(document.getElementById(`${e}-config`).style.display="block")});const m=document.getElementById("term-protocol-0"),A=document.getElementById("port-fields-0");m&&A&&m.addEventListener("change",()=>{m.value==="tcp"||m.value==="udp"?A.style.display="block":A.style.display="none"});let t=1;const K=document.getElementById("add-interface"),f=document.getElementById("interfaces-list");if(K&&f){K.addEventListener("click",()=>{const e=document.createElement("div");e.className="interface-item",e.innerHTML=`
                <div class="interface-header">
                    <div class="input-group">
                        <label for="interface-type-${t}">Interface:</label>
                        <select id="interface-type-${t}" class="interface-type-select">
                            <option value="ge-0/0/0">ge-0/0/0</option>
                            <option value="ge-0/0/1">ge-0/0/1</option>
                            <option value="xe-0/0/0">xe-0/0/0</option>
                            <option value="xe-0/0/1">xe-0/0/1</option>
                            <option value="et-0/0/0">et-0/0/0</option>
                            <option value="lo0">lo0</option>
                            <option value="em0">em0</option>
                            <option value="custom">Custom</option>
                        </select>
                    </div>
                    <div class="input-group custom-interface-name" id="custom-interface-name-${t}" style="display: none;">
                        <label for="custom-interface-value-${t}">Custom Interface Name:</label>
                        <input type="text" id="custom-interface-value-${t}" placeholder="Enter interface name (e.g., ae0)">
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
            `,f.appendChild(e);const n=document.getElementById(`ipv6-enabled-${t}`);n.addEventListener("change",function(){const e=document.getElementById(`ipv6-config-${t}`);e.style.display=this.checked?"block":"none"});const s=document.getElementById(`interface-description-enabled-${t}`);s.addEventListener("change",function(){const e=document.getElementById(`description-group-${t}`);e.style.display=this.checked?"block":"none"});const o=document.getElementById(`vlan-enabled-${t}`);o.addEventListener("change",function(){const e=document.getElementById(`vlan-config-${t}`);e.style.display=this.checked?"block":"none"});const i=e.querySelector(".remove-interface");i.addEventListener("click",function(){document.querySelectorAll(".interface-item").length>1?f.removeChild(e):alert("You need at least one interface.")});const a=document.getElementById(`interface-type-${t}`);a.addEventListener("change",function(){const e=document.getElementById(`custom-interface-name-${t}`);e.style.display=this.value==="custom"?"block":"none"}),updateInterfaceSelects(),t++});const e=document.querySelector(".remove-interface");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".interface-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".interface-item");f.removeChild(e)}else alert("You need at least one interface.")})}let c=1;const G=document.getElementById("add-static-route"),g=document.getElementById("static-routes-list");if(G&&g){G.addEventListener("click",()=>{const e=document.createElement("div");e.className="static-route-item",e.innerHTML=`
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
            `,g.appendChild(e);const t=e.querySelector(".remove-route");t.addEventListener("click",function(){document.querySelectorAll(".static-route-item").length>1?g.removeChild(e):alert("You need at least one static route.")}),c++});const e=document.querySelector(".remove-route");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".static-route-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".static-route-item");g.removeChild(e)}else alert("You need at least one static route.")})}let l=1;const N=document.getElementById("add-ospf-area"),p=document.getElementById("ospf-areas");if(N&&p){N.addEventListener("click",()=>{const e=document.createElement("div");e.className="ospf-area-item",e.innerHTML=`
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
            `,p.appendChild(e);const t=e.querySelector(".remove-ospf-area");t.addEventListener("click",function(){document.querySelectorAll(".ospf-area-item").length>1?p.removeChild(e):alert("You need at least one OSPF area.")}),l++});const e=document.querySelector(".remove-ospf-area");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".ospf-area-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".ospf-area-item");p.removeChild(e)}else alert("You need at least one OSPF area.")})}let n=1;const Y=document.getElementById("add-bgp-neighbor"),b=document.getElementById("bgp-neighbors");if(Y&&b){Y.addEventListener("click",()=>{const e=document.createElement("div");e.className="bgp-neighbor-item",e.innerHTML=`
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
            `,b.appendChild(e);const t=e.querySelector(`#bgp-peer-import-policy-enabled-${n}`),o=e.querySelector(`#bgp-peer-import-policy-${n}`);t&&o&&t.addEventListener("change",()=>{o.style.display=t.checked?"block":"none"});const s=e.querySelector(`#bgp-peer-export-policy-enabled-${n}`),i=e.querySelector(`#bgp-peer-export-policy-${n}`);s&&i&&s.addEventListener("change",()=>{i.style.display=s.checked?"block":"none"});const a=e.querySelector(".remove-bgp-neighbor");a.addEventListener("click",function(){document.querySelectorAll(".bgp-neighbor-item").length>1?b.removeChild(e):alert("You need at least one BGP neighbor.")}),n++});const s=document.querySelector(".remove-bgp-neighbor");s&&s.addEventListener("click",function(){if(document.querySelectorAll(".bgp-neighbor-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".bgp-neighbor-item");b.removeChild(e)}else alert("You need at least one BGP neighbor.")});const e=document.getElementById("bgp-peer-import-policy-enabled-0"),o=document.getElementById("bgp-peer-import-policy-0");e&&o&&e.addEventListener("change",()=>{o.style.display=e.checked?"block":"none"});const t=document.getElementById("bgp-peer-export-policy-enabled-0"),i=document.getElementById("bgp-peer-export-policy-0");t&&i&&t.addEventListener("change",()=>{i.style.display=t.checked?"block":"none"})}const W=document.getElementById("generate-config"),E=document.getElementById("config-output"),V=document.getElementById("config-output-container");W&&E&&V&&W.addEventListener("click",()=>{re(),V.scrollIntoView({behavior:"smooth"})});const B=document.getElementById("reset-form");B&&B.addEventListener("click",()=>{confirm("Are you sure you want to reset the form? All your configuration will be lost.")&&window.location.reload()});const P=document.getElementById("copy-config"),x=document.getElementById("copy-tooltip");P&&E&&x&&P.addEventListener("click",()=>{ae(E.textContent),x.style.display="block",setTimeout(()=>{x.style.display="none"},2e3)});function ae(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function re(){const c=document.getElementById("config-output"),h=document.getElementById("hostname").value||"router",s=document.getElementById("domain-name").value;let e="";e+=`system {
`,e+=`    host-name ${h};
`,s&&(e+=`    domain-name ${s};
`);const o=document.getElementById("root-password").value,i=document.getElementById("use-encrypted-password").checked;o&&(i?(e+=`    root-authentication {
`,e+=`        encrypted-password "$9$XXXXXXXXXXXXXXXXXXXXXX"; # Reference only, replace with real encrypted password
`,e+=`    }
`):(e+=`    root-authentication {
`,e+=`        plain-text-password-value "${o}";
`,e+=`    }
`));const n=document.getElementById("login-user").value,a=document.getElementById("login-password").value,l=document.getElementById("user-class").value;n&&a&&(e+=`    login {
`,e+=`        user ${n} {
`,e+=`            class ${l};
`,e+=`            authentication {
`,i?e+=`                encrypted-password "$9$XXXXXXXXXXXXXXXXXXXXXX"; # Reference only, replace with real encrypted password
`:e+=`                plain-text-password-value "${a}";
`,e+=`            }
`,e+=`        }
`,e+=`    }
`);const d=document.getElementById("system-timezone").value;e+=`    time-zone ${d};
`;const r=document.getElementById("dns-servers").value;r&&(e+=`    name-server {
`,r.split(",").forEach(t=>{const n=t.trim();n&&(e+=`        ${n};
`)}),e+=`    }
`),e+=`}

`,e+=`interfaces {
`;const u=document.querySelectorAll(".interface-item");u.forEach((t,n)=>{let s=t.querySelector(`#interface-type-${n}`).value;if(s==="custom"){const o=document.getElementById(`custom-interface-name-${n}`),e=t.querySelector(`#custom-interface-value-${n}`).value;e?s=e:(console.warn("Custom interface selected but no value provided, using a default"),s="ge-0/0/0")}const a=t.querySelector(`#unit-number-${n}`).value||"0",o=t.querySelector(`#ip-address-${n}`).value,r=t.querySelector(`#prefix-length-${n}`).value||"24";e+=`    ${s} {
`;const c=t.querySelector(`#interface-description-enabled-${n}`).checked;if(c){const s=t.querySelector(`#interface-description-${n}`).value;s&&(e+=`        description "${s}";
`)}const i=t.querySelector(`#vlan-enabled-${n}`).checked;if(i){const s=t.querySelector(`#vlan-id-${n}`).value;s&&(e+=`        vlan-tagging;
`)}if(e+=`        unit ${a} {
`,i){const s=t.querySelector(`#vlan-id-${n}`).value;s&&(e+=`            vlan-id ${s};
`)}o&&(e+=`            family inet {
`,e+=`                address ${o}/${r};
`,e+=`            }
`);const l=t.querySelector(`#ipv6-enabled-${n}`).checked;if(l){const s=t.querySelector(`#ipv6-address-${n}`).value,o=t.querySelector(`#ipv6-prefix-length-${n}`).value||"64";s&&(e+=`            family inet6 {
`,e+=`                address ${s}/${o};
`,e+=`            }
`)}e+=`        }
`,e+=`    }
`}),e+=`}

`;const t=document.getElementById("routing-protocol").value;if(t&&t!=="none"){if(e+=`routing-options {
`,t==="static"){e+=`    static {
`;const t=document.querySelectorAll(".static-route-item");t.forEach((t,n)=>{const s=t.querySelector(`#route-destination-${n}`).value,i=t.querySelector(`#route-prefix-${n}`).value||"24",o=t.querySelector(`#next-hop-${n}`).value;s&&o&&(e+=`        route ${s}/${i} next-hop ${o};
`)}),e+=`    }
`}if(t==="ospf"||t==="bgp"){const n=document.getElementById(`${t}-router-id`).value;n&&(e+=`    router-id ${n};
`)}if(t==="bgp"){const t=document.getElementById("bgp-local-as").value;t&&(e+=`    autonomous-system ${t};
`)}e+=`}

`}c.textContent=e,document.getElementById("config-output-container").style.display="block"}let e=1;const z=document.getElementById("add-filter"),h=document.getElementById("filters-list");if(z&&h){z.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-item",t.innerHTML=`
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
            `,h.appendChild(t);const n=t.querySelector(`#term-protocol-${e}-0`),s=t.querySelector(".term-port-group");n&&s&&n.addEventListener("change",()=>{n.value==="tcp"||n.value==="udp"?s.style.display="block":s.style.display="none"});const i=t.querySelector(".add-term"),o=t.querySelector(`#filter-terms-${e}`);if(i&&o){let t=1;i.addEventListener("click",()=>{const n=document.createElement("div");n.className="filter-term",n.innerHTML=`
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
                    `,o.appendChild(n);const s=n.querySelector(`#term-protocol-${e}-${t}`),i=n.querySelector(`.term-port-group-${t}`);s&&i&&s.addEventListener("change",()=>{s.value==="tcp"||s.value==="udp"?i.style.display="block":i.style.display="none"});const a=n.querySelector(".remove-term");a&&a.addEventListener("click",()=>{o.removeChild(n)}),t++})}const a=t.querySelector(".remove-filter");a&&a.addEventListener("click",()=>{document.querySelectorAll(".filter-item").length>1?h.removeChild(t):alert("You need at least one filter.")}),e++});const t=document.querySelector("#term-protocol-0-0"),n=document.querySelector(".term-port-group");t&&n&&t.addEventListener("change",()=>{t.value==="tcp"||t.value==="udp"?n.style.display="block":n.style.display="none"});const o=document.querySelector(".remove-filter");o&&o.addEventListener("click",function(){if(document.querySelectorAll(".filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".filter-item");h.removeChild(e)}else alert("You need at least one filter.")});const i=document.querySelector(".add-term"),s=document.querySelector("#filter-terms-0");if(i&&s){let e=1;i.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-term",t.innerHTML=`
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
            `,_.appendChild(e);const t=e.querySelector(".remove-zone");t&&t.addEventListener("click",function(){document.querySelectorAll(".zone-item").length>1?_.removeChild(e):alert("You need at least one security zone.")}),i++});const e=document.querySelector(".remove-zone");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".zone-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".zone-item");_.removeChild(e)}else alert("You need at least one security zone.")})}let o=1;const D=document.getElementById("add-policy"),y=document.getElementById("policies-list");if(D&&y){D.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-item",e.innerHTML=`
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
            `,y.appendChild(e);const t=e.querySelector(".remove-policy");t&&t.addEventListener("click",function(){document.querySelectorAll(".policy-item").length>1?y.removeChild(e):alert("You need at least one security policy.")}),o++});const e=document.querySelector(".remove-policy");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".policy-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-item");y.removeChild(e)}else alert("You need at least one security policy.")})}let r=1;const R=document.getElementById("add-prefix-list"),O=document.getElementById("prefix-lists");if(R&&O){R.addEventListener("click",()=>{const e=document.createElement("div");e.className="prefix-list-item",e.innerHTML=`
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
            `,O.appendChild(e);const n=e.querySelector(".add-prefix-entry"),t=e.querySelector(`#prefix-entries-${r}`);if(n&&t){let e=1;n.addEventListener("click",()=>{const n=document.createElement("div");n.className="prefix-entry",n.innerHTML=`
                        <div class="input-group">
                            <label for="prefix-entry-${r}-${e}">Prefix:</label>
                            <input type="text" id="prefix-entry-${r}-${e}" placeholder="10.0.0.0/8">
                        </div>
                        <button class="remove-prefix-entry">Remove</button>
                    `,t.appendChild(n);const s=n.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{t.removeChild(n)}),e++})}const s=e.querySelector(".remove-prefix-list");s&&s.addEventListener("click",function(){document.querySelectorAll(".prefix-list-item").length>1?O.removeChild(e):alert("You need at least one prefix list.")}),r++});const t=document.querySelector(".add-prefix-entry"),e=document.querySelector("#prefix-entries-0");if(t&&e){let n=1;t.addEventListener("click",()=>{const t=document.createElement("div");t.className="prefix-entry",t.innerHTML=`
                    <div class="input-group">
                        <label for="prefix-entry-0-${n}">Prefix:</label>
                        <input type="text" id="prefix-entry-0-${n}" placeholder="10.0.0.0/8">
                    </div>
                    <button class="remove-prefix-entry">Remove</button>
                `,e.appendChild(t);const s=t.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-prefix-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".prefix-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".prefix-list-item");O.removeChild(e)}else alert("You need at least one prefix list.")})}let d=1;const I=document.getElementById("add-route-filter"),w=document.getElementById("route-filters");if(I&&w){I.addEventListener("click",()=>{const e=document.createElement("div");e.className="route-filter-item",e.innerHTML=`
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
            `,w.appendChild(e);const t=e.querySelector(".remove-route-filter");t&&t.addEventListener("click",function(){document.querySelectorAll(".route-filter-item").length>1?w.removeChild(e):alert("You need at least one route filter.")}),d++});const e=document.querySelector(".remove-route-filter");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".route-filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".route-filter-item");w.removeChild(e)}else alert("You need at least one route filter.")})}let s=1;const $=document.getElementById("add-policy-list"),j=document.getElementById("policy-lists");if($&&j){$.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-list-item",e.innerHTML=`
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
                `,e.appendChild(t);const s=t.querySelector(".remove-statement");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-policy-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".policy-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-list-item");j.removeChild(e)}else alert("You need at least one policy.")})}const U=document.getElementById("validate-config"),M=document.getElementById("close-validation"),u=document.getElementById("validation-container"),v=document.getElementById("validation-results"),S=document.getElementById("validation-errors"),X=document.getElementById("validation-warnings"),Q=document.getElementById("validation-info");U&&u&&U.addEventListener("click",()=>{const e=J();ee(e)}),M&&u&&M.addEventListener("click",()=>{u.style.display="none"});const a={ipAddress:/^(\d{1,3}\.){3}\d{1,3}$/,ipv6Address:/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}$|^([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}$|^([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}$|^([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$/,hostname:/^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/,domainName:/^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,passwordStrength:e=>e&&e.length>=8,validSubnet:(e,t)=>!!e&&!!t&&!!/^(\d{1,3}\.){3}\d{1,3}$/.test(e)&&!(t<0||t>32),validIpv6Subnet:(e,t)=>!!e&&!!t&&!!/^[0-9a-fA-F:]+$/.test(e)&&!(t<0||t>128),securityChecks:[{id:"root-password",check:()=>document.getElementById("root-password").value.length>0,message:"Root password is not set. This is a security risk in production environments.",severity:"error",fix:()=>{alert("Please set a strong root password"),document.getElementById("root-password").focus()}},{id:"ssh-access",check:()=>{const t=document.querySelectorAll(".interface-item");let e=!1;return t.forEach(t=>{const n=t.querySelector("select").value;(n==="em0"||n==="fxp0")&&(e=!0)}),e},message:"No dedicated management interface (em0/fxp0) detected. It is recommended to have a separate management interface for secure access.",severity:"warning",fix:()=>{alert("Add a management interface (em0 or fxp0) for secure management access");const e=document.getElementById("add-interface");e&&e.click()}},{id:"ntp-config",check:()=>{const e=document.getElementById("ntp-enabled");return e&&e.checked},message:"NTP is not configured. Accurate time is important for logging, authentication, and security features.",severity:"info",fix:()=>{const e=document.getElementById("ntp-enabled");e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}},{id:"syslog-config",check:()=>{const e=document.getElementById("syslog-enabled");return e&&e.checked},message:"Syslog is not configured. Remote logging is recommended for security and troubleshooting.",severity:"info",fix:()=>{const e=document.getElementById("syslog-enabled");e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}}]};function J(){const e=[],n=document.getElementById("hostname").value;n?a.hostname.test(n)||e.push({id:"hostname-invalid",message:"Hostname contains invalid characters. Use only alphanumeric characters and hyphens.",severity:"error",fix:()=>{document.getElementById("hostname").focus()}}):e.push({id:"hostname-empty",message:"Hostname is not set. This is required for device identification.",severity:"error",fix:()=>{document.getElementById("hostname").focus()}});const s=document.getElementById("domain-name").value;s&&!a.domainName.test(s)&&e.push({id:"domain-invalid",message:"Domain name is invalid. Use a valid domain format like example.com.",severity:"warning",fix:()=>{document.getElementById("domain-name").focus()}});const o=document.querySelectorAll(".interface-item");o.length===0?e.push({id:"no-interfaces",message:"No interfaces configured. At least one interface is recommended.",severity:"warning",fix:()=>{const e=document.getElementById("add-interface");e&&e.click()}}):o.forEach((t,n)=>{const s=t.querySelector(`#ip-address-${n}`).value,o=t.querySelector(`#prefix-length-${n}`).value;s&&!a.ipAddress.test(s)?e.push({id:`interface-${n}-ip-invalid`,message:`Interface ${n+1} has an invalid IP address format. Use IPv4 format (e.g., 192.168.1.1).`,severity:"error",fix:()=>{t.querySelector(`#ip-address-${n}`).focus()}}):s&&!a.validSubnet(s,o)&&e.push({id:`interface-${n}-subnet-invalid`,message:`Interface ${n+1} has an invalid subnet configuration. Check IP and prefix length.`,severity:"error",fix:()=>{t.querySelector(`#prefix-length-${n}`).focus()}});const i=t.querySelector(`#ipv6-enabled-${n}`).checked;if(i){const s=t.querySelector(`#ipv6-address-${n}`).value,o=t.querySelector(`#ipv6-prefix-length-${n}`).value;s?a.validIpv6Subnet(s,o)||e.push({id:`interface-${n}-ipv6-invalid`,message:`Interface ${n+1} has an invalid IPv6 configuration. Check address and prefix length.`,severity:"error",fix:()=>{t.querySelector(`#ipv6-address-${n}`).focus()}}):e.push({id:`interface-${n}-ipv6-empty`,message:`Interface ${n+1} has IPv6 enabled but no address specified.`,severity:"warning",fix:()=>{t.querySelector(`#ipv6-address-${n}`).focus()}})}});const t=document.getElementById("routing-protocol").value;if(t==="static"){const t=document.querySelectorAll(".static-route-item");t.length===0?e.push({id:"no-static-routes",message:"Static routing is selected but no routes are configured.",severity:"warning",fix:()=>{const e=document.getElementById("add-static-route");e&&e.click()}}):t.forEach((t,n)=>{const s=t.querySelector(`#route-destination-${n}`).value,i=t.querySelector(`#route-prefix-${n}`).value,o=t.querySelector(`#next-hop-${n}`).value;!s||!o?e.push({id:`static-route-${n}-incomplete`,message:`Static route ${n+1} is incomplete. Destination and next hop are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#next-hop-${n}`).focus():t.querySelector(`#route-destination-${n}`).focus()}}):a.ipAddress.test(s)?a.ipAddress.test(o)||e.push({id:`static-route-${n}-nexthop-invalid`,message:`Static route ${n+1} has an invalid next hop address format.`,severity:"error",fix:()=>{t.querySelector(`#next-hop-${n}`).focus()}}):e.push({id:`static-route-${n}-destination-invalid`,message:`Static route ${n+1} has an invalid destination address format.`,severity:"error",fix:()=>{t.querySelector(`#route-destination-${n}`).focus()}})})}else if(t==="ospf"){const t=document.getElementById("ospf-router-id").value;t?a.ipAddress.test(t)||e.push({id:"ospf-router-id-invalid",message:"OSPF router ID has an invalid format. It should be in IPv4 format (e.g., 1.1.1.1).",severity:"error",fix:()=>{document.getElementById("ospf-router-id").focus()}}):e.push({id:"ospf-router-id-missing",message:"OSPF is enabled but router ID is not set. This is required for OSPF operation.",severity:"error",fix:()=>{document.getElementById("ospf-router-id").focus()}});const n=document.querySelectorAll(".ospf-area-item");n.length===0?e.push({id:"no-ospf-areas",message:"OSPF is enabled but no areas are configured.",severity:"error",fix:()=>{const e=document.getElementById("add-ospf-area");e&&e.click()}}):n.forEach((t,n)=>{const s=t.querySelector(`#ospf-area-id-${n}`).value,o=t.querySelector(`#ospf-area-interfaces-${n}`).value;(!s||!o)&&e.push({id:`ospf-area-${n}-incomplete`,message:`OSPF area ${n+1} is incomplete. Area ID and interfaces are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#ospf-area-interfaces-${n}`).focus():t.querySelector(`#ospf-area-id-${n}`).focus()}})})}else if(t==="bgp"){const s=document.getElementById("bgp-local-as").value,t=document.getElementById("bgp-router-id").value;s||e.push({id:"bgp-local-as-missing",message:"BGP is enabled but local AS number is not set. This is required for BGP operation.",severity:"error",fix:()=>{document.getElementById("bgp-local-as").focus()}}),t?a.ipAddress.test(t)||e.push({id:"bgp-router-id-invalid",message:"BGP router ID has an invalid format. It should be in IPv4 format (e.g., 1.1.1.1).",severity:"error",fix:()=>{document.getElementById("bgp-router-id").focus()}}):e.push({id:"bgp-router-id-missing",message:"BGP is enabled but router ID is not set. This is required for BGP operation.",severity:"error",fix:()=>{document.getElementById("bgp-router-id").focus()}});const n=document.querySelectorAll(".bgp-neighbor-item");n.length===0?e.push({id:"no-bgp-neighbors",message:"BGP is enabled but no neighbors are configured.",severity:"error",fix:()=>{const e=document.getElementById("add-bgp-neighbor");e&&e.click()}}):n.forEach((t,n)=>{const s=t.querySelector(`#bgp-peer-address-${n}`).value,o=t.querySelector(`#bgp-peer-as-${n}`).value;!s||!o?e.push({id:`bgp-neighbor-${n}-incomplete`,message:`BGP neighbor ${n+1} is incomplete. Peer address and AS number are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#bgp-peer-as-${n}`).focus():t.querySelector(`#bgp-peer-address-${n}`).focus()}}):a.ipAddress.test(s)||e.push({id:`bgp-neighbor-${n}-address-invalid`,message:`BGP neighbor ${n+1} has an invalid peer address format.`,severity:"error",fix:()=>{t.querySelector(`#bgp-peer-address-${n}`).focus()}})})}return a.securityChecks.forEach(t=>{t.check()||e.push({id:t.id,message:t.message,severity:t.severity,fix:t.fix})}),e}function ee(e){if(!u||!v)return;v.innerHTML="";const t=e.filter(e=>e.severity==="error").length,n=e.filter(e=>e.severity==="warning").length,s=e.filter(e=>e.severity==="info").length;if(S&&(S.textContent=`${t} Error${t!==1?"s":""}`),X&&(X.textContent=`${n} Warning${n!==1?"s":""}`),Q&&(Q.textContent=`${s} Suggestion${s!==1?"s":""}`),e.length===0){const e=document.createElement("div");e.className="validation-item info",e.innerHTML=`
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
            `,v.appendChild(e)}else{const t=[...e].sort((e,t)=>{const n={error:0,warning:1,info:2};return n[e.severity]-n[t.severity]});t.forEach(e=>{const t=document.createElement("div");t.className=`validation-item ${e.severity}`;let n="";e.severity==="error"?n=`
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
                `,v.appendChild(t),e.fix){const n=t.querySelector(".validation-fix");n&&n.addEventListener("click",()=>{e.fix()})}})}u.style.display="block"}function te(){document.querySelectorAll(".interface-type-select").forEach(e=>{e.addEventListener("change",function(){const t=this.id.split("-").pop(),e=document.getElementById(`custom-interface-name-${t}`);this.value==="custom"?e.style.display="block":e.style.display="none"})})}te();function ne(){const n=document.getElementById("interfaces-list"),s=n.querySelectorAll(".interface-item"),e=s.length,t=document.createElement("div");t.className="interface-item",t.innerHTML=`
            <div class="interface-header">
                <div class="input-group">
                    <label for="interface-type-${e}">Interface:</label>
                    <select id="interface-type-${e}" class="interface-type-select">
                        <option value="ge-0/0/0">ge-0/0/0</option>
                        <option value="ge-0/0/1">ge-0/0/1</option>
                        <option value="xe-0/0/0">xe-0/0/0</option>
                        <option value="xe-0/0/1">xe-0/0/1</option>
                        <option value="et-0/0/0">et-0/0/0</option>
                        <option value="lo0">lo0</option>
                        <option value="em0">em0</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>
                <div class="input-group custom-interface-name" id="custom-interface-name-${e}" style="display: none;">
                    <label for="custom-interface-value-${e}">Custom Interface Name:</label>
                    <input type="text" id="custom-interface-value-${e}" placeholder="Enter interface name (e.g., ae0)">
                </div>
                <button class="remove-interface" data-id="${e}">Remove</button>
            </div>
            <div class="interface-config">
                <div class="input-group">
                    <label for="unit-number-${e}">Unit Number:</label>
                    <input type="number" id="unit-number-${e}" placeholder="0" value="0" min="0" max="16385">
                </div>
                <div class="input-group">
                    <label for="ip-address-${e}">IP Address:</label>
                    <input type="text" id="ip-address-${e}" placeholder="192.168.1.1">
                </div>
                <div class="input-group">
                    <label for="prefix-length-${e}">Prefix Length:</label>
                    <input type="number" id="prefix-length-${e}" placeholder="24" value="24" min="1" max="32">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="ipv6-enabled-${e}">
                    <label for="ipv6-enabled-${e}">Configure IPv6</label>
                </div>
                <div class="ipv6-config" id="ipv6-config-${e}" style="display: none;">
                    <div class="input-group">
                        <label for="ipv6-address-${e}">IPv6 Address:</label>
                        <input type="text" id="ipv6-address-${e}" placeholder="2001:db8::1">
                    </div>
                    <div class="input-group">
                        <label for="ipv6-prefix-length-${e}">Prefix Length:</label>
                        <input type="number" id="ipv6-prefix-length-${e}" placeholder="64" value="64" min="1" max="128">
                    </div>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="interface-description-enabled-${e}">
                    <label for="interface-description-enabled-${e}">Add Description</label>
                </div>
                <div class="input-group description-input" id="description-group-${e}" style="display: none;">
                    <label for="interface-description-${e}">Description:</label>
                    <input type="text" id="interface-description-${e}" placeholder="LAN Interface">
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="vlan-enabled-${e}">
                    <label for="vlan-enabled-${e}">Configure VLAN</label>
                </div>
                <div class="vlan-config" id="vlan-config-${e}" style="display: none;">
                    <div class="input-group">
                        <label for="vlan-id-${e}">VLAN ID:</label>
                        <input type="number" id="vlan-id-${e}" placeholder="10" min="1" max="4094">
                    </div>
                </div>
            </div>
        `,n.appendChild(t);const o=document.getElementById(`ipv6-enabled-${e}`);o.addEventListener("change",function(){const t=document.getElementById(`ipv6-config-${e}`);t.style.display=this.checked?"block":"none"});const i=document.getElementById(`interface-description-enabled-${e}`);i.addEventListener("change",function(){const t=document.getElementById(`description-group-${e}`);t.style.display=this.checked?"block":"none"});const a=document.getElementById(`vlan-enabled-${e}`);a.addEventListener("change",function(){const t=document.getElementById(`vlan-config-${e}`);t.style.display=this.checked?"block":"none"});const r=t.querySelector(".remove-interface");r.addEventListener("click",function(){document.querySelectorAll(".interface-item").length>1?n.removeChild(t):alert("You need at least one interface.")});const c=document.getElementById(`interface-type-${e}`);c.addEventListener("change",function(){const t=document.getElementById(`custom-interface-name-${e}`);t.style.display=this.value==="custom"?"block":"none"}),updateInterfaceSelects()}let Z=document.getElementById("add-interface");Z&&Z.addEventListener("click",ne);const q=document.getElementById("ipv6-enabled-0");q&&q.addEventListener("change",function(){const e=document.getElementById("ipv6-config-0");e.style.display=this.checked?"block":"none"});const H=document.getElementById("interface-description-enabled-0");H&&H.addEventListener("change",function(){const e=document.getElementById("description-group-0");e.style.display=this.checked?"block":"none"});const L=document.getElementById("vlan-enabled-0");L&&L.addEventListener("change",function(){const e=document.getElementById("vlan-config-0");e.style.display=this.checked?"block":"none"});const k=document.getElementById("interface-type-0");k&&(k.classList.add("interface-type-select"),k.addEventListener("change",function(){const e=document.getElementById("custom-interface-name-0");e&&(e.style.display=this.value==="custom"?"block":"none")}))})