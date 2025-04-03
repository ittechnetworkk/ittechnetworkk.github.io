document.addEventListener("DOMContentLoaded",()=>{const z=document.querySelectorAll(".tab-btn"),le=document.querySelectorAll(".tab-content");z.forEach(e=>{e.addEventListener("click",()=>{z.forEach(e=>e.classList.remove("active")),e.classList.add("active"),le.forEach(e=>e.style.display="none");const t=e.getAttribute("data-tab");document.getElementById(`${t}-content`).style.display="block"})});const de=[{checkbox:"interface-description-enabled",section:"description-group"},{checkbox:"ipv6-enabled",section:"ipv6-config"},{checkbox:"vlan-enabled",section:"vlan-config"},{checkbox:"firewall-filter-enabled",section:"firewall-filter-config"},{checkbox:"zones-enabled",section:"zones-config"},{checkbox:"ntp-enabled",section:"ntp-config"},{checkbox:"ntp-source-interface-enabled",section:"ntp-source-interface-group"},{checkbox:"dhcp-server-enabled",section:"dhcp-server-config"},{checkbox:"syslog-enabled",section:"syslog-config"},{checkbox:"snmp-enabled",section:"snmp-config"},{checkbox:"policy-options-enabled",section:"policy-options-config"},{checkbox:"cos-enabled",section:"cos-config"},{checkbox:"routing-policy-prefix-list-enabled",section:"routing-policy-prefix-list-group"},{checkbox:"bgp-peer-import-policy-enabled",section:"bgp-peer-import-policy"},{checkbox:"bgp-peer-export-policy-enabled",section:"bgp-peer-export-policy"}];de.forEach(e=>{const t=document.getElementById(e.checkbox+"-0");if(t){const n=document.getElementById(e.section+"-0");n&&t.addEventListener("change",()=>{n.style.display=t.checked?"block":"none"})}const n=document.getElementById(e.checkbox);if(n){const t=document.getElementById(e.section);t&&n.addEventListener("change",()=>{t.style.display=n.checked?"block":"none"})}});const S=document.getElementById("static-enabled"),M=document.getElementById("ospf-enabled"),x=document.getElementById("bgp-enabled"),D=document.getElementById("static-routes-config"),L=document.getElementById("ospf-config"),F=document.getElementById("bgp-config");S&&D&&S.addEventListener("change",()=>{D.style.display=S.checked?"block":"none"}),M&&L&&M.addEventListener("change",()=>{L.style.display=M.checked?"block":"none"}),x&&F&&x.addEventListener("change",()=>{F.style.display=x.checked?"block":"none"});const v=document.getElementById("term-protocol-0"),k=document.getElementById("port-fields-0");v&&k&&v.addEventListener("change",()=>{v.value==="tcp"||v.value==="udp"?k.style.display="block":k.style.display="none"});let t=1;const R=document.getElementById("add-interface"),m=document.getElementById("interfaces-list");if(R&&m){R.addEventListener("click",()=>{const e=document.createElement("div");e.className="interface-item",e.innerHTML=`
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
            `,m.appendChild(e);const n=document.getElementById(`ipv6-enabled-${t}`);n.addEventListener("change",function(){const e=document.getElementById(`ipv6-config-${t}`);e.style.display=this.checked?"block":"none"});const s=document.getElementById(`interface-description-enabled-${t}`);s.addEventListener("change",function(){const e=document.getElementById(`description-group-${t}`);e.style.display=this.checked?"block":"none"});const o=document.getElementById(`vlan-enabled-${t}`);o.addEventListener("change",function(){const e=document.getElementById(`vlan-config-${t}`);e.style.display=this.checked?"block":"none"});const i=e.querySelector(".remove-interface");i.addEventListener("click",function(){document.querySelectorAll(".interface-item").length>1?m.removeChild(e):alert("You need at least one interface.")});const a=document.getElementById(`interface-type-${t}`);a.addEventListener("change",function(){const e=document.getElementById(`custom-interface-name-${t}`);e.style.display=this.value==="custom"?"block":"none"}),$(),t++});const e=document.querySelector(".remove-interface");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".interface-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".interface-item");m.removeChild(e)}else alert("You need at least one interface.")})}let c=1;const X=document.getElementById("add-static-route"),g=document.getElementById("static-routes-list");if(X&&g){X.addEventListener("click",()=>{const e=document.createElement("div");e.className="static-route-item",e.innerHTML=`
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
            `,g.appendChild(e);const t=e.querySelector(".remove-route");t.addEventListener("click",function(){document.querySelectorAll(".static-route-item").length>1?g.removeChild(e):alert("You need at least one static route.")}),c++});const e=document.querySelector(".remove-route");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".static-route-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".static-route-item");g.removeChild(e)}else alert("You need at least one static route.")})}let l=1;const Y=document.getElementById("add-ospf-area"),j=document.getElementById("ospf-areas");if(Y&&j){Y.addEventListener("click",()=>{const e=document.createElement("div");e.className="ospf-area-item",e.innerHTML=`
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
            `,j.appendChild(e);const t=e.querySelector(".remove-ospf-area");t.addEventListener("click",function(){document.querySelectorAll(".ospf-area-item").length>1?j.removeChild(e):alert("You need at least one OSPF area.")}),l++});const e=document.querySelector(".remove-ospf-area");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".ospf-area-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".ospf-area-item");j.removeChild(e)}else alert("You need at least one OSPF area.")})}let n=1;const V=document.getElementById("add-bgp-neighbor"),w=document.getElementById("bgp-neighbors");if(V&&w){V.addEventListener("click",()=>{const e=document.createElement("div");e.className="bgp-neighbor-item",e.innerHTML=`
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
            `,w.appendChild(e);const t=e.querySelector(`#bgp-peer-import-policy-enabled-${n}`),o=e.querySelector(`#bgp-peer-import-policy-${n}`);t&&o&&t.addEventListener("change",()=>{o.style.display=t.checked?"block":"none"});const s=e.querySelector(`#bgp-peer-export-policy-enabled-${n}`),i=e.querySelector(`#bgp-peer-export-policy-${n}`);s&&i&&s.addEventListener("change",()=>{i.style.display=s.checked?"block":"none"});const a=e.querySelector(".remove-bgp-neighbor");a.addEventListener("click",function(){document.querySelectorAll(".bgp-neighbor-item").length>1?w.removeChild(e):alert("You need at least one BGP neighbor.")}),n++});const s=document.querySelector(".remove-bgp-neighbor");s&&s.addEventListener("click",function(){if(document.querySelectorAll(".bgp-neighbor-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".bgp-neighbor-item");w.removeChild(e)}else alert("You need at least one BGP neighbor.")});const e=document.getElementById("bgp-peer-import-policy-enabled-0"),o=document.getElementById("bgp-peer-import-policy-0");e&&o&&e.addEventListener("change",()=>{o.style.display=e.checked?"block":"none"});const t=document.getElementById("bgp-peer-export-policy-enabled-0"),i=document.getElementById("bgp-peer-export-policy-0");t&&i&&t.addEventListener("change",()=>{i.style.display=t.checked?"block":"none"})}const H=document.getElementById("generate-config"),C=document.getElementById("config-output"),U=document.getElementById("config-output-container");H&&C&&U&&H.addEventListener("click",()=>{oe(),U.scrollIntoView({behavior:"smooth"})});const K=document.getElementById("reset-form");K&&K.addEventListener("click",()=>{confirm("Are you sure you want to reset the form? All your configuration will be lost.")&&window.location.reload()});const Q=document.getElementById("copy-config"),A=document.getElementById("copy-tooltip");Q&&C&&A&&Q.addEventListener("click",()=>{ue(C.textContent),A.style.display="block",setTimeout(()=>{A.style.display="none"},2e3)});function ue(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function oe(){const f=document.getElementById("config-output"),_=document.getElementById("hostname").value||"router",v=document.getElementById("domain-name").value;let e="";e+=`system {
`,e+=`    host-name ${_};
`,v&&(e+=`    domain-name ${v};
`);const a=document.getElementById("root-password").value,m=document.getElementById("use-encrypted-password").checked;a&&(m?(e+=`    root-authentication {
`,e+=`        encrypted-password "$9$XXXXXXXXXXXXXXXXXXXXXX"; # Reference only, replace with real encrypted password
`,e+=`    }
`):(e+=`    root-authentication {
`,e+=`        plain-text-password-value "${a}";
`,e+=`    }
`));const i=document.getElementById("login-user").value,r=document.getElementById("login-password").value,x=document.getElementById("user-class").value;i&&r&&(e+=`    login {
`,e+=`        user ${i} {
`,e+=`            class ${x};
`,e+=`            authentication {
`,m?e+=`                encrypted-password "$9$XXXXXXXXXXXXXXXXXXXXXX"; # Reference only, replace with real encrypted password
`:e+=`                plain-text-password-value "${r}";
`,e+=`            }
`,e+=`        }
`,e+=`    }
`);const O=document.getElementById("system-timezone").value;e+=`    time-zone ${O};
`;const d=document.getElementById("dns-servers").value;d&&(e+=`    name-server {
`,d.split(",").forEach(t=>{const n=t.trim();n&&(e+=`        ${n};
`)}),e+=`    }
`),e+=`}

`,e+=`interfaces {
`;const w=document.querySelectorAll(".interface-item");w.forEach((t,n)=>{let s=t.querySelector(`#interface-type-${n}`).value;if(s==="custom"){const o=document.getElementById(`custom-interface-name-${n}`),e=t.querySelector(`#custom-interface-value-${n}`).value;e?s=e:(console.warn("Custom interface selected but no value provided, using a default"),s="ge-0/0/0")}const a=t.querySelector(`#unit-number-${n}`).value||"0",o=t.querySelector(`#ip-address-${n}`).value,r=t.querySelector(`#prefix-length-${n}`).value||"24";e+=`    ${s} {
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

`;const h=document.getElementById("static-enabled")&&document.getElementById("static-enabled").checked,s=document.getElementById("ospf-enabled")&&document.getElementById("ospf-enabled").checked,o=document.getElementById("bgp-enabled")&&document.getElementById("bgp-enabled").checked;if(h||s||o){if(e+=`routing-options {
`,h){e+=`    static {
`;const t=document.querySelectorAll(".static-route-item");t.forEach((t,n)=>{const s=t.querySelector(`#route-destination-${n}`).value,i=t.querySelector(`#route-prefix-${n}`).value||"24",o=t.querySelector(`#next-hop-${n}`).value;s&&o&&(e+=`        route ${s}/${i} next-hop ${o};
`)}),e+=`    }
`}if(s){const t=document.getElementById("ospf-router-id").value;t&&(e+=`    router-id ${t};
`)}if(o){const t=document.getElementById("bgp-router-id").value;t&&(e+=`    router-id ${t};
`);const n=document.getElementById("bgp-local-as").value;n&&(e+=`    autonomous-system ${n};
`)}e+=`}

`}if(s||o){if(e+=`protocols {
`,s){e+=`    ospf {
`;const t=document.querySelectorAll(".ospf-area-item");t.forEach((t,n)=>{const s=t.querySelector(`#ospf-area-id-${n}`).value,o=t.querySelector(`#ospf-area-interfaces-${n}`).value;s&&o&&(e+=`        area ${s} {
`,o.split(",").forEach(t=>{const n=t.trim();n&&(e+=`            interface ${n};
`)}),e+=`        }
`)}),e+=`    }
`}if(o){e+=`    bgp {
`,e+=`        group external-peers {
`,e+=`            type external;
`;const t=document.querySelectorAll(".bgp-neighbor-item");t.forEach((t,n)=>{const s=t.querySelector(`#bgp-peer-address-${n}`).value,o=t.querySelector(`#bgp-peer-as-${n}`).value;if(s&&o){e+=`            neighbor ${s} {
`,e+=`                peer-as ${o};
`;const i=t.querySelector(`#bgp-peer-export-policy-enabled-${n}`);if(i&&i.checked){const s=t.querySelector(`#bgp-peer-export-policy-${n}`).value;s&&(e+=`                export ${s};
`)}e+=`            }
`}}),e+=`        }
`,e+=`    }
`}e+=`}

`}const p=document.getElementById("security-enabled");if(p&&p.checked){e+=`security {
`;const t=document.querySelectorAll(".zone-item");t.length>0&&(e+=`    zones {
`,t.forEach((t,n)=>{const s=t.querySelector(`#zone-name-${n}`).value,o=t.querySelector(`#zone-interfaces-${n}`).value;if(s){e+=`        security-zone ${s} {
`,o&&o.split(",").forEach(t=>{const n=t.trim();n&&(e+=`            interfaces ${n};
`)});const i=t.querySelector(`#zone-allowed-services-${n}`).value;i&&(e+=`            host-inbound-traffic {
`,e+=`                system-services {
`,i.split(",").forEach(t=>{const n=t.trim();n&&(e+=`                    ${n};
`)}),e+=`                }
`,e+=`            }
`),e+=`        }
`}}),e+=`    }
`);const n=document.querySelectorAll(".policy-item");n.length>0&&(e+=`    policies {
`,n.forEach((t,n)=>{const s=t.querySelector(`#policy-name-${n}`).value,o=t.querySelector(`#policy-from-zone-${n}`).value,i=t.querySelector(`#policy-to-zone-${n}`).value;if(s&&o&&i){e+=`        from-zone ${o} to-zone ${i} {
`,e+=`            policy ${s} {
`,e+=`                match {
`;const a=t.querySelector(`#policy-source-address-${n}`).value,r=t.querySelector(`#policy-destination-address-${n}`).value,c=t.querySelector(`#policy-application-${n}`).value;a?e+=`                    source-address ${a};
`:e+=`                    source-address any;
`,r?e+=`                    destination-address ${r};
`:e+=`                    destination-address any;
`,c?(e+="                    application [ ",c.split(",").forEach(t=>{const n=t.trim();n&&(e+=`${n} `)}),e+=`];
`):e+=`                    application any;
`,e+=`                }
`;const l=t.querySelector(`#policy-action-${n}`).value,d=t.querySelector(`#policy-log-${n}`).checked;e+=`                then {
`,e+=`                    ${l};
`,d&&(e+=`                    log {
`,e+=`                        session-init;
`,e+=`                        session-close;
`,e+=`                    }
`),e+=`                }
`,e+=`            }
`,e+=`        }
`}}),e+=`    }
`),e+=`}

`}const g=document.getElementById("firewall-filter-enabled");if(g&&g.checked){const t=document.querySelectorAll(".filter-item");t.length>0&&(e+=`firewall {
`,t.forEach((t,n)=>{const s=t.querySelector(`#filter-name-${n}`).value,o=t.querySelector(`#filter-family-${n}`).value;if(s){e+=`    filter ${s} {
`;const a=t.querySelectorAll(".filter-term");a.forEach((t,s)=>{const o=t.querySelector(`#term-name-${n}-${s}`).value;if(o){e+=`        term ${o} {
`,e+=`            from {
`;const a=t.querySelector(`#term-source-${n}-${s}`).value,r=t.querySelector(`#term-destination-${n}-${s}`).value,i=t.querySelector(`#term-protocol-${n}-${s}`).value;if(a&&(e+=`                source-address ${a};
`),r&&(e+=`                destination-address ${r};
`),i&&(e+=`                protocol ${i};
`,i==="tcp"||i==="udp")){const o=t.querySelector(`#term-port-${n}-${s}`).value;o&&(e+=`                ${i}-destination-port ${o};
`)}e+=`            }
`;const c=t.querySelector(`#term-action-${n}-${s}`).value;e+=`            then {
`,e+=`                ${c};
`,e+=`            }
`,e+=`        }
`}}),e+=`    }
`;const o=t.querySelector(`#filter-interface-${n}`).value,i=t.querySelector(`#filter-direction-${n}`).value;o&&i&&o.trim()!==""&&(e+=`    interfaces {
`,e+=`        ${o} {
`,e+=`            filter {
`,e+=`                ${i} ${s};
`,e+=`            }
`,e+=`        }
`,e+=`    }
`)}}),e+=`}

`)}let n=!1,t="";const j=document.getElementById("ntp-enabled");if(j&&j.checked){const e=document.getElementById("ntp-servers").value;e&&(n=!0,t+=`    ntp {
`,e.split(",").forEach(e=>{const n=e.trim();n&&(t+=`        server ${n};
`)}),t+=`    }
`)}const y=document.getElementById("dhcp-server-enabled");if(y&&y.checked){n=!0,t+=`    services {
`,t+=`        dhcp {
`;const e=document.querySelectorAll(".dhcp-pool");e.forEach((e,n)=>{const i=e.querySelector(`#dhcp-name-${n}`).value,a=e.querySelector(`#dhcp-subnet-${n}`).value,s=e.querySelector(`#dhcp-range-low-${n}`).value,o=e.querySelector(`#dhcp-range-high-${n}`).value,u=s&&o?`${s} to ${o}`:"",r=e.querySelector(`#dhcp-router-${n}`).value,c=e.querySelector(`#dhcp-dns-${n}`).value,l=e.querySelector(`#dhcp-domain-${n}`).value,d=e.querySelector(`#dhcp-lease-${n}`).value;i&&a&&(s||o)&&(t+=`            pool ${i} {
`,t+=`                subnet ${a};
`,t+=`                address-range ${u};
`,r&&(t+=`                router ${r};
`),c&&(t+=`                name-server ${c};
`),l&&(t+=`                domain-name "${l}";
`),d&&(t+=`                maximum-lease-time ${d};
`),t+=`            }
`)}),t+=`        }
`,t+=`    }
`}const b=document.getElementById("syslog-enabled");if(b&&b.checked){const e=document.getElementById("syslog-server").value,s=document.getElementById("syslog-facility").value,o=document.getElementById("syslog-severity").value;e&&(n=!0,t+=`    syslog {
`,t+=`        host ${e} {
`,t+=`            facility ${s};
`,t+=`            level ${o};
`,t+=`        }
`,t+=`    }
`)}const u=document.getElementById("snmp-enabled");if(u&&u.checked){const e=document.getElementById("snmp-community").value,s=document.getElementById("snmp-location").value,o=document.getElementById("snmp-contact").value,i=document.getElementById("snmp-clients").value;e&&(n=!0,t+=`    snmp {
`,s&&(t+=`        location "${s}";
`),o&&(t+=`        contact "${o}";
`),t+=`        community ${e} {
`,i?i.split(",").forEach(e=>{const n=e.trim();n&&(t+=`            client-list ${n};
`)}):t+=`            authorization read-only;
`,t+=`        }
`,t+=`    }
`)}n&&(e+=`system {
`,e+=t,e+=`}

`);const l=document.getElementById("policy-options-enabled");if(l&&l.checked){e+=`policy-options {
`;const t=document.querySelectorAll(".prefix-list-item");t.forEach((t,n)=>{const s=t.querySelector(`#prefix-list-name-${n}`).value,o=t.querySelector(`#prefix-list-prefixes-${n}`).value;s&&o&&(e+=`    prefix-list ${s} {
`,o.split(`
`).forEach(t=>{const n=t.trim();n&&(e+=`        ${n};
`)}),e+=`    }
`)});const n=document.querySelectorAll(".route-filter-item");n.forEach((t,n)=>{const s=t.querySelector(`#route-filter-name-${n}`).value,o=t.querySelector(`#route-filter-prefix-${n}`).value,i=t.querySelector(`#route-filter-type-${n}`).value;s&&o&&i&&(e+=`    route-filter-list ${s} {
`,e+=`        ${o} ${i};
`,e+=`    }
`)});const s=document.querySelectorAll(".routing-policy-item");s.forEach((t,n)=>{const s=t.querySelector(`#routing-policy-name-${n}`).value,o=t.querySelector(`#routing-policy-term-name-${n}`).value,i=t.querySelector(`#routing-policy-from-protocol-${n}`).value,a=t.querySelector(`#routing-policy-prefix-list-enabled-${n}`),r=t.querySelector(`#routing-policy-then-action-${n}`).value;if(s&&o){if(e+=`    policy-statement ${s} {
`,e+=`        term ${o} {
`,e+=`            from {
`,i&&(e+=`                protocol ${i};
`),a&&a.checked){const s=t.querySelector(`#routing-policy-prefix-list-${n}`).value;s&&(e+=`                prefix-list ${s};
`)}e+=`            }
`,e+=`            then {
`,e+=`                ${r};
`,e+=`            }
`,e+=`        }
`,e+=`    }
`}}),e+=`}

`}const c=document.getElementById("cos-enabled");if(c&&c.checked){e+=`class-of-service {
`;const s=document.getElementById("cos-classifier-name").value||"default",t=document.querySelectorAll(".forwarding-class-item");t.length>0&&(e+=`    forwarding-classes {
`,t.forEach((t,n)=>{const s=t.querySelector(`#forwarding-class-name-${n}`).value,o=t.querySelector(`#forwarding-class-queue-${n}`).value;s&&o&&(e+=`        class ${s} queue ${o};
`)}),e+=`    }
`);const n=document.querySelectorAll(".code-point-item");n.length>0&&(e+=`    classifiers {
`,e+=`        dscp ${s} {
`,n.forEach((t,n)=>{const s=t.querySelector(`#code-point-value-${n}`).value,o=t.querySelector(`#code-point-forwarding-class-${n}`).value;s&&o&&(e+=`            forwarding-class ${o} {
`,e+=`                dscp ${s};
`,e+=`            }
`)}),e+=`        }
`,e+=`    }
`),e+=`}

`}if(f){f.textContent=e;const t=document.getElementById("config-output-container");t&&(t.style.display="block")}return e}let e=1;const I=document.getElementById("add-filter"),u=document.getElementById("filters-list");if(I&&u){I.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-item",t.innerHTML=`
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
            `,u.appendChild(t);const n=t.querySelector(`#term-protocol-${e}-0`),s=t.querySelector(".term-port-group");n&&s&&n.addEventListener("change",()=>{n.value==="tcp"||n.value==="udp"?s.style.display="block":s.style.display="none"});const i=t.querySelector(".add-term"),o=t.querySelector(`#filter-terms-${e}`);if(i&&o){let t=1;i.addEventListener("click",()=>{const n=document.createElement("div");n.className="filter-term",n.innerHTML=`
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
                    `,o.appendChild(n);const s=n.querySelector(`#term-protocol-${e}-${t}`),i=n.querySelector(`.term-port-group-${t}`);s&&i&&s.addEventListener("change",()=>{s.value==="tcp"||s.value==="udp"?i.style.display="block":i.style.display="none"});const a=n.querySelector(".remove-term");a&&a.addEventListener("click",()=>{o.removeChild(n)}),t++})}const a=t.querySelector(".remove-filter");a&&a.addEventListener("click",()=>{document.querySelectorAll(".filter-item").length>1?u.removeChild(t):alert("You need at least one filter.")}),e++});const t=document.querySelector("#term-protocol-0-0"),n=document.querySelector(".term-port-group");t&&n&&t.addEventListener("change",()=>{t.value==="tcp"||t.value==="udp"?n.style.display="block":n.style.display="none"});const o=document.querySelector(".remove-filter");o&&o.addEventListener("click",function(){if(document.querySelectorAll(".filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".filter-item");u.removeChild(e)}else alert("You need at least one filter.")});const i=document.querySelector(".add-term"),s=document.querySelector("#filter-terms-0");if(i&&s){let e=1;i.addEventListener("click",()=>{const t=document.createElement("div");t.className="filter-term",t.innerHTML=`
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
                `,s.appendChild(t);const n=t.querySelector(`#term-protocol-0-${e}`),o=t.querySelector(`.term-port-group-${e}`);n&&o&&n.addEventListener("change",()=>{n.value==="tcp"||n.value==="udp"?o.style.display="block":o.style.display="none"});const i=t.querySelector(".remove-term");i&&i.addEventListener("click",()=>{s.removeChild(t)}),e++})}}let i=1;const N=document.getElementById("add-zone"),h=document.getElementById("zones-list");if(N&&h){N.addEventListener("click",()=>{const e=document.createElement("div");e.className="zone-item",e.innerHTML=`
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
            `,h.appendChild(e);const t=e.querySelector(".remove-zone");t&&t.addEventListener("click",function(){document.querySelectorAll(".zone-item").length>1?h.removeChild(e):alert("You need at least one security zone.")}),i++});const e=document.querySelector(".remove-zone");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".zone-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".zone-item");h.removeChild(e)}else alert("You need at least one security zone.")})}let o=1;const P=document.getElementById("add-policy"),O=document.getElementById("policies-list");if(P&&O){P.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-item",e.innerHTML=`
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
            `,O.appendChild(e);const t=e.querySelector(".remove-policy");t&&t.addEventListener("click",function(){document.querySelectorAll(".policy-item").length>1?O.removeChild(e):alert("You need at least one security policy.")}),o++});const e=document.querySelector(".remove-policy");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".policy-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-item");O.removeChild(e)}else alert("You need at least one security policy.")})}let r=1;const B=document.getElementById("add-prefix-list"),_=document.getElementById("prefix-lists");if(B&&_){B.addEventListener("click",()=>{const e=document.createElement("div");e.className="prefix-list-item",e.innerHTML=`
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
            `,_.appendChild(e);const n=e.querySelector(".add-prefix-entry"),t=e.querySelector(`#prefix-entries-${r}`);if(n&&t){let e=1;n.addEventListener("click",()=>{const n=document.createElement("div");n.className="prefix-entry",n.innerHTML=`
                        <div class="input-group">
                            <label for="prefix-entry-${r}-${e}">Prefix:</label>
                            <input type="text" id="prefix-entry-${r}-${e}" placeholder="10.0.0.0/8">
                        </div>
                        <button class="remove-prefix-entry">Remove</button>
                    `,t.appendChild(n);const s=n.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{t.removeChild(n)}),e++})}const s=e.querySelector(".remove-prefix-list");s&&s.addEventListener("click",function(){document.querySelectorAll(".prefix-list-item").length>1?_.removeChild(e):alert("You need at least one prefix list.")}),r++});const t=document.querySelector(".add-prefix-entry"),e=document.querySelector("#prefix-entries-0");if(t&&e){let n=1;t.addEventListener("click",()=>{const t=document.createElement("div");t.className="prefix-entry",t.innerHTML=`
                    <div class="input-group">
                        <label for="prefix-entry-0-${n}">Prefix:</label>
                        <input type="text" id="prefix-entry-0-${n}" placeholder="10.0.0.0/8">
                    </div>
                    <button class="remove-prefix-entry">Remove</button>
                `,e.appendChild(t);const s=t.querySelector(".remove-prefix-entry");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-prefix-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".prefix-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".prefix-list-item");_.removeChild(e)}else alert("You need at least one prefix list.")})}let d=1;const T=document.getElementById("add-route-filter"),y=document.getElementById("route-filters");if(T&&y){T.addEventListener("click",()=>{const e=document.createElement("div");e.className="route-filter-item",e.innerHTML=`
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
            `,y.appendChild(e);const t=e.querySelector(".remove-route-filter");t&&t.addEventListener("click",function(){document.querySelectorAll(".route-filter-item").length>1?y.removeChild(e):alert("You need at least one route filter.")}),d++});const e=document.querySelector(".remove-route-filter");e&&e.addEventListener("click",function(){if(document.querySelectorAll(".route-filter-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".route-filter-item");y.removeChild(e)}else alert("You need at least one route filter.")})}let s=1;const q=document.getElementById("add-policy-list"),b=document.getElementById("policy-lists");if(q&&b){q.addEventListener("click",()=>{const e=document.createElement("div");e.className="policy-list-item",e.innerHTML=`
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
            `,b.appendChild(e);const n=e.querySelector(".add-statement"),t=e.querySelector(`#policy-statements-${s}`);if(n&&t){let e=1;n.addEventListener("click",()=>{const n=document.createElement("div");n.className="policy-statement",n.innerHTML=`
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
                    `,t.appendChild(n);const o=n.querySelector(".remove-statement");o&&o.addEventListener("click",()=>{t.removeChild(n)}),e++})}const o=e.querySelector(".remove-policy-list");o&&o.addEventListener("click",function(){document.querySelectorAll(".policy-list-item").length>1?b.removeChild(e):alert("You need at least one policy.")}),s++});const t=document.querySelector(".add-statement"),e=document.querySelector("#policy-statements-0");if(t&&e){let n=1;t.addEventListener("click",()=>{const t=document.createElement("div");t.className="policy-statement",t.innerHTML=`
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
                `,e.appendChild(t);const s=t.querySelector(".remove-statement");s&&s.addEventListener("click",()=>{e.removeChild(t)}),n++})}const n=document.querySelector(".remove-policy-list");n&&n.addEventListener("click",function(){if(document.querySelectorAll(".policy-list-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".policy-list-item");b.removeChild(e)}else alert("You need at least one policy.")})}const G=document.getElementById("validate-config"),p=document.getElementById("validation-container"),f=document.getElementById("validation-results"),Z=document.getElementById("validation-errors"),J=document.getElementById("validation-warnings"),ee=document.getElementById("validation-info");if(G&&p){G.addEventListener("click",()=>{const e=ce();re(e)});const e=document.getElementById("close-validation");e&&e.addEventListener("click",()=>{p.style.display="none"})}const a={ipAddress:/^(\d{1,3}\.){3}\d{1,3}$/,ipv6Address:/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}$|^([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}$|^([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}$|^([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$/,hostname:/^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/,domainName:/^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,passwordStrength:function(e){return e&&e.length>=8},validSubnet:function(e,t){return!!e&&!!t&&!!/^(\d{1,3}\.){3}\d{1,3}$/.test(e)&&!(t<0||t>32)},validIpv6Subnet:function(e,t){return!!e&&!!t&&!!/^[0-9a-fA-F:]+$/.test(e)&&!(t<0||t>128)},securityChecks:[{id:"root-password",check:()=>document.getElementById("root-password").value.length>0,message:"Root password is not set. This is a security risk in production environments.",severity:"error",fix:()=>{alert("Please set a strong root password"),document.getElementById("root-password").focus()}},{id:"ssh-access",check:()=>{const t=document.querySelectorAll(".interface-item");let e=!1;return t.forEach(t=>{const n=t.querySelector("select").value;(n==="em0"||n==="fxp0")&&(e=!0)}),e},message:"No dedicated management interface (em0/fxp0) detected. It is recommended to have a separate management interface for secure access.",severity:"warning",fix:()=>{alert("Add a management interface (em0 or fxp0) for secure management access");const e=document.getElementById("add-interface");e&&e.click()}},{id:"ntp-config",check:()=>{const e=document.getElementById("ntp-enabled");return e&&e.checked},message:"NTP is not configured. Accurate time is important for logging, authentication, and security features.",severity:"info",fix:()=>{const e=document.getElementById("ntp-enabled");e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}},{id:"syslog-config",check:()=>{const e=document.getElementById("syslog-enabled");return e&&e.checked},message:"Syslog is not configured. Remote logging is recommended for security and troubleshooting.",severity:"info",fix:()=>{const e=document.getElementById("syslog-enabled");e&&(e.checked=!0,e.dispatchEvent(new Event("change")))}}]};function ce(){const e=[],t=document.getElementById("hostname").value;t?a.hostname.test(t)||e.push({id:"hostname-invalid",message:"Hostname contains invalid characters. Use only alphanumeric characters and hyphens.",severity:"error",fix:()=>{document.getElementById("hostname").focus()}}):e.push({id:"hostname-empty",message:"Hostname is not set. This is required for device identification.",severity:"error",fix:()=>{document.getElementById("hostname").focus()}});const n=document.getElementById("domain-name").value;n&&!a.domainName.test(n)&&e.push({id:"domain-invalid",message:"Domain name is invalid. Use a valid domain format like example.com.",severity:"warning",fix:()=>{document.getElementById("domain-name").focus()}});const s=document.querySelectorAll(".interface-item");s.length===0?e.push({id:"no-interfaces",message:"No interfaces configured. At least one interface is recommended.",severity:"warning",fix:()=>{const e=document.getElementById("add-interface");e&&e.click()}}):s.forEach((t,n)=>{const s=t.querySelector(`#ip-address-${n}`).value,o=t.querySelector(`#prefix-length-${n}`).value;s&&!a.ipAddress.test(s)?e.push({id:`interface-${n}-ip-invalid`,message:`Interface ${n+1} has an invalid IP address format. Use IPv4 format (e.g., 192.168.1.1).`,severity:"error",fix:()=>{t.querySelector(`#ip-address-${n}`).focus()}}):s&&!a.validSubnet(s,o)&&e.push({id:`interface-${n}-subnet-invalid`,message:`Interface ${n+1} has an invalid subnet configuration. Check IP and prefix length.`,severity:"error",fix:()=>{t.querySelector(`#prefix-length-${n}`).focus()}});const i=t.querySelector(`#ipv6-enabled-${n}`).checked;if(i){const s=t.querySelector(`#ipv6-address-${n}`).value,o=t.querySelector(`#ipv6-prefix-length-${n}`).value;s?a.validIpv6Subnet(s,o)||e.push({id:`interface-${n}-ipv6-invalid`,message:`Interface ${n+1} has an invalid IPv6 configuration. Check address and prefix length.`,severity:"error",fix:()=>{t.querySelector(`#ipv6-address-${n}`).focus()}}):e.push({id:`interface-${n}-ipv6-empty`,message:`Interface ${n+1} has IPv6 enabled but no address specified.`,severity:"warning",fix:()=>{t.querySelector(`#ipv6-address-${n}`).focus()}})}});const o=document.getElementById("static-enabled")&&document.getElementById("static-enabled").checked,i=document.getElementById("ospf-enabled")&&document.getElementById("ospf-enabled").checked,r=document.getElementById("bgp-enabled")&&document.getElementById("bgp-enabled").checked;if(o){const t=document.querySelectorAll(".static-route-item");t.length===0?e.push({id:"no-static-routes",message:"Static routing is enabled but no routes are configured.",severity:"warning",fix:()=>{const e=document.getElementById("add-static-route");e&&e.click()}}):t.forEach((t,n)=>{const s=t.querySelector(`#route-destination-${n}`).value,i=t.querySelector(`#route-prefix-${n}`).value||"24",o=t.querySelector(`#next-hop-${n}`).value;!s||!o?e.push({id:`static-route-${n}-incomplete`,message:`Static route ${n+1} is incomplete. Destination and next hop are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#next-hop-${n}`).focus():t.querySelector(`#route-destination-${n}`).focus()}}):a.ipAddress.test(s)?a.ipAddress.test(o)||e.push({id:`static-route-${n}-nexthop-invalid`,message:`Static route ${n+1} has an invalid next hop address format.`,severity:"error",fix:()=>{t.querySelector(`#next-hop-${n}`).focus()}}):e.push({id:`static-route-${n}-destination-invalid`,message:`Static route ${n+1} has an invalid destination address format.`,severity:"error",fix:()=>{t.querySelector(`#route-destination-${n}`).focus()}})})}if(i){const t=document.getElementById("ospf-router-id").value;t?a.ipAddress.test(t)||e.push({id:"ospf-router-id-invalid",message:"OSPF router ID has an invalid format. It should be in IPv4 format (e.g., 1.1.1.1).",severity:"error",fix:()=>{document.getElementById("ospf-router-id").focus()}}):e.push({id:"ospf-router-id-missing",message:"OSPF is enabled but router ID is not set. This is required for OSPF operation.",severity:"error",fix:()=>{document.getElementById("ospf-router-id").focus()}});const n=document.querySelectorAll(".ospf-area-item");n.length===0?e.push({id:"no-ospf-areas",message:"OSPF is enabled but no areas are configured.",severity:"error",fix:()=>{const e=document.getElementById("add-ospf-area");e&&e.click()}}):n.forEach((t,n)=>{const s=t.querySelector(`#ospf-area-id-${n}`).value,o=t.querySelector(`#ospf-area-interfaces-${n}`).value;(!s||!o)&&e.push({id:`ospf-area-${n}-incomplete`,message:`OSPF area ${n+1} is incomplete. Area ID and interfaces are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#ospf-area-interfaces-${n}`).focus():t.querySelector(`#ospf-area-id-${n}`).focus()}})})}if(r){const s=document.getElementById("bgp-local-as").value,t=document.getElementById("bgp-router-id").value;s||e.push({id:"bgp-local-as-missing",message:"BGP is enabled but local AS number is not set. This is required for BGP operation.",severity:"error",fix:()=>{document.getElementById("bgp-local-as").focus()}}),t?a.ipAddress.test(t)||e.push({id:"bgp-router-id-invalid",message:"BGP router ID has an invalid format. It should be in IPv4 format (e.g., 1.1.1.1).",severity:"error",fix:()=>{document.getElementById("bgp-router-id").focus()}}):e.push({id:"bgp-router-id-missing",message:"BGP is enabled but router ID is not set. This is required for BGP operation.",severity:"error",fix:()=>{document.getElementById("bgp-router-id").focus()}});const n=document.querySelectorAll(".bgp-neighbor-item");n.length===0?e.push({id:"no-bgp-neighbors",message:"BGP is enabled but no neighbors are configured.",severity:"error",fix:()=>{const e=document.getElementById("add-bgp-neighbor");e&&e.click()}}):n.forEach((t,n)=>{const s=t.querySelector(`#bgp-peer-address-${n}`).value,o=t.querySelector(`#bgp-peer-as-${n}`).value;!s||!o?e.push({id:`bgp-neighbor-${n}-incomplete`,message:`BGP neighbor ${n+1} is incomplete. Peer address and AS number are required.`,severity:"error",fix:()=>{s?o||t.querySelector(`#bgp-peer-as-${n}`).focus():t.querySelector(`#bgp-peer-address-${n}`).focus()}}):a.ipAddress.test(s)||e.push({id:`bgp-neighbor-${n}-address-invalid`,message:`BGP neighbor ${n+1} has an invalid peer address format.`,severity:"error",fix:()=>{t.querySelector(`#bgp-peer-address-${n}`).focus()}})})}return a.securityChecks.forEach(t=>{t.check()||e.push({id:t.id,message:t.message,severity:t.severity,fix:t.fix})}),e}function re(e){if(!p||!f)return;f.innerHTML="";const t=e.filter(e=>e.severity==="error").length,n=e.filter(e=>e.severity==="warning").length,s=e.filter(e=>e.severity==="info").length;if(Z&&(Z.textContent=`${t} Error${t!==1?"s":""}`),J&&(J.textContent=`${n} Warning${n!==1?"s":""}`),ee&&(ee.textContent=`${s} Suggestion${s!==1?"s":""}`),e.length===0){const e=document.createElement("div");e.className="validation-item info",e.innerHTML=`
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
                `,f.appendChild(t),e.fix){const n=t.querySelector(".validation-fix");n&&n.addEventListener("click",()=>{e.fix()})}})}p.style.display="block"}function ae(){document.querySelectorAll(".interface-type-select").forEach(e=>{e.addEventListener("change",function(){const t=this.id.split("-").pop(),e=document.getElementById(`custom-interface-name-${t}`);this.value==="custom"?e.style.display="block":e.style.display="none"})})}ae();function ie(){const n=document.getElementById("interfaces-list"),s=n.querySelectorAll(".interface-item"),e=s.length,t=document.createElement("div");t.className="interface-item",t.innerHTML=`
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
        `,n.appendChild(t);const o=document.getElementById(`ipv6-enabled-${e}`);o.addEventListener("change",function(){const t=document.getElementById(`ipv6-config-${e}`);t.style.display=this.checked?"block":"none"});const i=document.getElementById(`interface-description-enabled-${e}`);i.addEventListener("change",function(){const t=document.getElementById(`description-group-${e}`);t.style.display=this.checked?"block":"none"});const a=document.getElementById(`vlan-enabled-${e}`);a.addEventListener("change",function(){const t=document.getElementById(`vlan-config-${e}`);t.style.display=this.checked?"block":"none"});const r=t.querySelector(".remove-interface");r.addEventListener("click",function(){document.querySelectorAll(".interface-item").length>1?n.removeChild(t):alert("You need at least one interface.")});const c=document.getElementById(`interface-type-${e}`);c.addEventListener("change",function(){const t=document.getElementById(`custom-interface-name-${e}`);t.style.display=this.value==="custom"?"block":"none"}),$()}let W=document.getElementById("add-interface");W&&W.addEventListener("click",ie);const se=document.getElementById("ipv6-enabled-0");se&&se.addEventListener("change",function(){const e=document.getElementById("ipv6-config-0");e.style.display=this.checked?"block":"none"});const ne=document.getElementById("interface-description-enabled-0");ne&&ne.addEventListener("change",function(){const e=document.getElementById("description-group-0");e.style.display=this.checked?"block":"none"});const te=document.getElementById("vlan-enabled-0");te&&te.addEventListener("change",function(){const e=document.getElementById("vlan-config-0");e.style.display=this.checked?"block":"none"});const E=document.getElementById("interface-type-0");E&&(E.classList.add("interface-type-select"),E.addEventListener("change",function(){const e=document.getElementById("custom-interface-name-0");e&&(e.style.display=this.value==="custom"?"block":"none")}));function $(){const e=[],t=document.querySelectorAll(".interface-item");t.forEach((t,n)=>{let s=t.querySelector(`#interface-type-${n}`).value;if(s==="custom"){const e=t.querySelector(`#custom-interface-value-${n}`).value;e?s=e:s="ge-0/0/0"}const i=t.querySelector(`#unit-number-${n}`).value||"0",o=`${s}.${i}`;e.push({name:o,value:o})});const n=document.querySelectorAll(".interface-select");n.forEach(t=>{const s=t.value;t.innerHTML="";const n=document.createElement("option");n.value="",n.textContent="-- Select Interface --",t.appendChild(n),e.forEach(e=>{const n=document.createElement("option");n.value=e.value,n.textContent=e.name,t.appendChild(n)}),s&&(t.value=s)})}})