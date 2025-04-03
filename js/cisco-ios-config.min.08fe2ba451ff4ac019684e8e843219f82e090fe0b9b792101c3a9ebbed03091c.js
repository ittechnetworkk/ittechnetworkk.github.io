document.addEventListener("DOMContentLoaded",()=>{const S=document.getElementById("save-template"),O=document.getElementById("load-template"),r=document.getElementById("save-template-modal"),a=document.getElementById("load-template-modal"),W=document.getElementById("confirm-save-template"),i=document.getElementById("templates-list"),N=document.getElementById("no-templates-message"),P=document.querySelectorAll(".close-modal");S&&O&&(S.addEventListener("click",()=>{r.style.display="block"}),O.addEventListener("click",()=>{a.style.display="block",g()}),P.forEach(e=>{e.addEventListener("click",function(){this.closest(".modal").style.display="none"})}),window.addEventListener("click",e=>{e.target===r&&(r.style.display="none"),e.target===a&&(a.style.display="none")}),W.addEventListener("click",()=>{const e=document.getElementById("template-name").value,t=document.getElementById("template-description").value;if(!e){alert("Please enter a name for your template.");return}const n=ne(),s={id:Date.now().toString(),name:e,description:t,date:(new Date).toLocaleDateString(),formState:n};se(s),r.style.display="none",document.getElementById("template-name").value="",document.getElementById("template-description").value="",alert("Template saved successfully!")}));const L=document.querySelector('.tab-btn[data-tab="routing"]');L&&L.addEventListener("click",function(){tabContents.forEach(e=>e.style.display="none"),document.getElementById("routing-content").style.display="block";const e=document.getElementById("static-routes-config");e&&(e.style.display="block"),tabButtons.forEach(e=>e.classList.remove("active")),this.classList.add("active")}),tabButtons.forEach(e=>{e.getAttribute("data-tab")!=="routing"&&e.addEventListener("click",()=>{tabButtons.forEach(e=>e.classList.remove("active")),e.classList.add("active"),tabContents.forEach(e=>e.style.display="none");const t=e.getAttribute("data-tab");document.getElementById(`${t}-content`).style.display="block"})});const D=document.getElementById("ssh-enabled"),V=document.getElementById("ssh-config");D.addEventListener("change",()=>{V.style.display=D.checked?"block":"none"});const F=document.getElementById("acl-enabled"),K=document.getElementById("acl-config");F.addEventListener("change",()=>{K.style.display=F.checked?"block":"none"});const _=document.getElementById("ntp-enabled"),X=document.getElementById("ntp-config");_.addEventListener("change",()=>{X.style.display=_.checked?"block":"none"});const R=document.getElementById("dhcp-enabled"),oe=document.getElementById("dhcp-config");R.addEventListener("change",()=>{oe.style.display=R.checked?"block":"none"});const v=document.getElementById("syslog-enabled"),Z=document.getElementById("syslog-config");v.addEventListener("change",()=>{Z.style.display=v.checked?"block":"none"}),document.getElementById("interface-description-enabled-0").addEventListener("change",function(){document.getElementById("description-group-0").style.display=this.checked?"block":"none"});const l=document.getElementById("acl-type"),H=document.querySelectorAll(".extended-acl-fields");l.addEventListener("change",()=>{const e=l.value==="extended";H.forEach(t=>{t.style.display=e?"block":"none"})});const m=document.getElementById("acl-protocol-0"),q=document.querySelectorAll(".port-fields");m.addEventListener("change",()=>{const e=m.value==="tcp"||m.value==="udp";q.forEach(t=>{t.style.display=e?"block":"none"})});const h=document.getElementById("routing-protocol"),x=document.querySelectorAll(".protocol-config");h&&(h.value="static",x.forEach(e=>{e.id==="static-routes-config"?e.style.display="block":e.style.display="none"}),h.addEventListener("change",function(){x.forEach(e=>{e.style.display="none"});const e=this.value;if(e!=="none"){const t=document.getElementById(`${e}-config`);t&&(t.style.display="block")}})),document.getElementById("static-routes-config").style.display="block";const C=document.querySelectorAll('.ip-version-btn[data-id="0"]'),E=document.querySelector('.ipv4-config[data-id="0"]'),k=document.querySelector('.ipv6-config[data-id="0"]');C.forEach(e=>{e.addEventListener("click",function(){C.forEach(e=>e.classList.remove("active")),this.classList.add("active");const e=this.getAttribute("data-version");e==="ipv4"?(E.style.display="block",k.style.display="none"):(E.style.display="none",k.style.display="block")})});const A=document.querySelectorAll(".routes-version-btn"),f=document.getElementById("ipv4-static-routes"),M=document.getElementById("ipv6-static-routes");A.forEach(e=>{e.addEventListener("click",function(){A.forEach(e=>e.classList.remove("active")),this.classList.add("active");const e=this.getAttribute("data-version");e==="ipv4"?(f.style.display="block",M.style.display="none"):(f.style.display="none",M.style.display="block")})});let e=1;const $=document.getElementById("add-interface"),d=document.getElementById("interfaces-list");$.addEventListener("click",()=>{const t=document.createElement("div");t.className="interface-item",t.innerHTML=`
            <div class="interface-header">
                <div class="input-group">
                    <label for="interface-type-${e}">Interface:</label>
                    <select id="interface-type-${e}">
                        <option value="GigabitEthernet0/0">GigabitEthernet0/0</option>
                        <option value="GigabitEthernet0/1">GigabitEthernet0/1</option>
                        <option value="FastEthernet0/0">FastEthernet0/0</option>
                        <option value="FastEthernet0/1">FastEthernet0/1</option>
                        <option value="Serial0/0/0">Serial0/0/0</option>
                        <option value="Serial0/0/1">Serial0/0/1</option>
                        <option value="Loopback0">Loopback0</option>
                    </select>
                </div>
                <button class="remove-interface" data-id="${e}">Remove</button>
            </div>
            <div class="interface-config">
                <div class="ip-version-toggle">
                    <label>IP Version:</label>
                    <div class="toggle-buttons">
                        <button type="button" class="toggle-btn active ip-version-btn" data-version="ipv4" data-id="${e}">IPv4</button>
                        <button type="button" class="toggle-btn ip-version-btn" data-version="ipv6" data-id="${e}">IPv6</button>
                    </div>
                </div>
                
                <div class="ipv4-config" data-id="${e}">
                    <div class="input-group">
                        <label for="ip-address-${e}">IP Address:</label>
                        <input type="text" id="ip-address-${e}" placeholder="192.168.1.1">
                    </div>
                    <div class="input-group">
                        <label for="subnet-mask-${e}">Subnet Mask:</label>
                        <input type="text" id="subnet-mask-${e}" placeholder="255.255.255.0">
                    </div>
                </div>
                
                <div class="ipv6-config" data-id="${e}" style="display: none;">
                    <div class="input-group">
                        <label for="ipv6-address-${e}">IPv6 Address:</label>
                        <input type="text" id="ipv6-address-${e}" placeholder="2001:db8:1:1::1">
                    </div>
                    <div class="input-group">
                        <label for="ipv6-prefix-${e}">Prefix Length:</label>
                        <input type="number" id="ipv6-prefix-${e}" placeholder="64" min="1" max="128" value="64">
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="ipv6-autoconfig-${e}">
                        <label for="ipv6-autoconfig-${e}">Enable stateless autoconfig</label>
                    </div>
                </div>
                
                <div class="checkbox-group">
                    <input type="checkbox" id="interface-enabled-${e}" checked>
                    <label for="interface-enabled-${e}">Interface Enabled</label>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" id="interface-description-enabled-${e}">
                    <label for="interface-description-enabled-${e}">Add Description</label>
                </div>
                <div class="input-group description-input" id="description-group-${e}" style="display: none;">
                    <label for="interface-description-${e}">Description:</label>
                    <input type="text" id="interface-description-${e}" placeholder="LAN Interface">
                </div>
            </div>
        `,d.appendChild(t),document.getElementById(`interface-description-enabled-${e}`).addEventListener("change",function(){document.getElementById(`description-group-${e}`).style.display=this.checked?"block":"none"});const n=t.querySelectorAll(`.ip-version-btn[data-id="${e}"]`),s=t.querySelector(`.ipv4-config[data-id="${e}"]`),o=t.querySelector(`.ipv6-config[data-id="${e}"]`);n.forEach(e=>{e.addEventListener("click",function(){n.forEach(e=>e.classList.remove("active")),this.classList.add("active");const e=this.getAttribute("data-version");e==="ipv4"?(s.style.display="block",o.style.display="none"):(s.style.display="none",o.style.display="block")})});const i=t.querySelector(".remove-interface");i.addEventListener("click",()=>{d.removeChild(t)}),e++});let s=1;const I=document.getElementById("add-static-route"),c=document.getElementById("static-routes-list");I.addEventListener("click",()=>{const e=document.createElement("div");e.className="static-route-item",e.innerHTML=`
            <div class="input-group">
                <label for="route-destination-${s}">Destination Network:</label>
                <input type="text" id="route-destination-${s}" placeholder="192.168.2.0">
            </div>
            <div class="input-group">
                <label for="route-mask-${s}">Subnet Mask:</label>
                <input type="text" id="route-mask-${s}" placeholder="255.255.255.0">
            </div>
            <div class="input-group">
                <label for="next-hop-${s}">Next Hop:</label>
                <input type="text" id="next-hop-${s}" placeholder="10.0.0.2">
            </div>
            <button class="remove-route" data-id="${s}">Remove</button>
        `,c.appendChild(e);const t=e.querySelector(".remove-route");t.addEventListener("click",()=>{c.removeChild(e)}),s++});let n=1;const G=document.getElementById("add-acl-entry"),p=document.getElementById("acl-entries");G.addEventListener("click",()=>{const e=document.createElement("div");e.className="acl-entry",e.innerHTML=`
            <div class="input-group">
                <label for="acl-action-${n}">Action:</label>
                <select id="acl-action-${n}">
                    <option value="permit">Permit</option>
                    <option value="deny">Deny</option>
                </select>
            </div>
            <div class="input-group">
                <label for="acl-source-${n}">Source:</label>
                <input type="text" id="acl-source-${n}" placeholder="any or IP address">
            </div>
            <div class="extended-acl-fields" style="display: ${l.value==="extended"?"block":"none"}">
                <div class="input-group">
                    <label for="acl-destination-${n}">Destination:</label>
                    <input type="text" id="acl-destination-${n}" placeholder="any or IP address">
                </div>
                <div class="input-group">
                    <label for="acl-protocol-${n}">Protocol:</label>
                    <select id="acl-protocol-${n}">
                        <option value="ip">IP</option>
                        <option value="tcp">TCP</option>
                        <option value="udp">UDP</option>
                        <option value="icmp">ICMP</option>
                    </select>
                </div>
                <div class="port-fields" style="display: none;">
                    <div class="input-group">
                        <label for="acl-sport-${n}">Source Port:</label>
                        <input type="text" id="acl-sport-${n}" placeholder="any or port number">
                    </div>
                    <div class="input-group">
                        <label for="acl-dport-${n}">Destination Port:</label>
                        <input type="text" id="acl-dport-${n}" placeholder="any or port number">
                    </div>
                </div>
            </div>
            <button class="remove-acl-entry" data-id="${n}">Remove</button>
        `,p.appendChild(e);const t=e.querySelector(`#acl-protocol-${n}`),s=e.querySelector(".port-fields");t.addEventListener("change",()=>{const e=t.value==="tcp"||t.value==="udp";s.style.display=e?"block":"none"});const o=e.querySelector(".remove-acl-entry");o.addEventListener("click",()=>{p.removeChild(e)}),n++});let t=1;const B=document.getElementById("add-dhcp-pool"),z=document.getElementById("dhcp-pools");B.addEventListener("click",()=>{const e=document.createElement("div");e.className="dhcp-pool",e.innerHTML=`
            <div class="input-group">
                <label for="dhcp-name-${t}">Pool Name:</label>
                <input type="text" id="dhcp-name-${t}" placeholder="LAN_POOL">
            </div>
            <div class="input-group">
                <label for="dhcp-network-${t}">Network:</label>
                <input type="text" id="dhcp-network-${t}" placeholder="192.168.1.0">
            </div>
            <div class="input-group">
                <label for="dhcp-mask-${t}">Subnet Mask:</label>
                <input type="text" id="dhcp-mask-${t}" placeholder="255.255.255.0">
            </div>
            <div class="input-group">
                <label for="dhcp-gateway-${t}">Default Gateway:</label>
                <input type="text" id="dhcp-gateway-${t}" placeholder="192.168.1.1">
            </div>
            <div class="input-group">
                <label for="dhcp-dns-${t}">DNS Servers (comma separated):</label>
                <input type="text" id="dhcp-dns-${t}" placeholder="8.8.8.8, 8.8.4.4">
            </div>
            <div class="input-group">
                <label for="dhcp-domain-${t}">Domain Name:</label>
                <input type="text" id="dhcp-domain-${t}" placeholder="example.com">
            </div>
            <div class="input-group">
                <label for="dhcp-lease-${t}">Lease Time (days):</label>
                <input type="number" id="dhcp-lease-${t}" placeholder="7" min="1" max="365">
            </div>
            <button class="remove-dhcp-pool" data-id="${t}">Remove</button>
        `,z.appendChild(e);const n=e.querySelector(".remove-dhcp-pool");n.addEventListener("click",()=>{z.removeChild(e)}),t++}),document.querySelector(".remove-interface").addEventListener("click",function(){if(document.querySelectorAll(".interface-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".interface-item");d.removeChild(e)}else alert("You need at least one interface.")});const T=document.querySelector(".remove-route");T&&T.addEventListener("click",function(){if(document.querySelectorAll(".static-route-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".static-route-item");c.removeChild(e)}else alert("You need at least one static route.")});let o=1;const U=document.getElementById("add-ipv6-route"),u=document.getElementById("ipv6-routes-list");U.addEventListener("click",()=>{const e=document.createElement("div");e.className="ipv6-route-item",e.innerHTML=`
            <div class="input-group">
                <label for="ipv6-route-destination-${o}">Destination Network:</label>
                <input type="text" id="ipv6-route-destination-${o}" placeholder="2001:db8:2::/64">
            </div>
            <div class="input-group">
                <label for="ipv6-next-hop-${o}">Next Hop:</label>
                <input type="text" id="ipv6-next-hop-${o}" placeholder="2001:db8:1::2">
            </div>
            <button class="remove-ipv6-route" data-id="${o}">Remove</button>
        `,u.appendChild(e);const t=e.querySelector(".remove-ipv6-route");t.addEventListener("click",()=>{u.removeChild(e)}),o++});const w=document.querySelector(".remove-ipv6-route");w&&w.addEventListener("click",function(){if(document.querySelectorAll(".ipv6-route-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".ipv6-route-item");u.removeChild(e)}else alert("You need at least one IPv6 static route.")});const Y=document.getElementById("generate-config"),y=document.getElementById("config-output"),j=document.getElementById("config-output-container");Y.addEventListener("click",()=>{const e=ee();y.textContent=e,j.style.display="block",j.scrollIntoView({behavior:"smooth"})});const Q=document.getElementById("copy-config"),b=document.getElementById("copy-tooltip");Q.addEventListener("click",()=>{te(y.textContent),b.style.display="block",setTimeout(()=>{b.style.display="none"},2e3)});const J=document.getElementById("reset-form");J.addEventListener("click",()=>{confirm("Are you sure you want to reset the form? All your configuration will be lost.")&&window.location.reload()});function ee(){let e="";e+=`! Cisco IOS Configuration
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
`;const d=document.querySelectorAll(".interface-item");d.forEach(t=>{const n=t.querySelector(".remove-interface").getAttribute("data-id"),a=document.getElementById(`interface-type-${n}`).value,r=document.getElementById(`interface-enabled-${n}`).checked,s=document.getElementById(`interface-description-enabled-${n}`).checked,o=s?document.getElementById(`interface-description-${n}`).value:"",i=t.querySelector(".ip-version-btn.active").getAttribute("data-version");if(e+=`interface ${a}
`,s&&o&&(e+=` description ${o}
`),i==="ipv4"){const t=document.getElementById(`ip-address-${n}`).value,s=document.getElementById(`subnet-mask-${n}`).value;t&&s&&(e+=` ip address ${t} ${s}
`)}else if(i==="ipv6"){const t=document.getElementById(`ipv6-address-${n}`).value,s=document.getElementById(`ipv6-prefix-${n}`).value,o=document.getElementById(`ipv6-autoconfig-${n}`).checked;e+=` ipv6 enable
`,t&&s&&(e+=` ipv6 address ${t}/${s}
`),o&&(e+=` ipv6 address autoconfig
`)}r?e+=` no shutdown
`:e+=` shutdown
`,e+=`!
`});const t=document.getElementById("routing-protocol").value;if(t!=="none")if(e+=`
! Routing configuration
`,t==="static"){{const t=document.querySelector(".routes-version-btn.active").getAttribute("data-version");if(t==="ipv4"){const t=document.querySelectorAll(".static-route-item");t.forEach(t=>{const n=t.querySelector(".remove-route").getAttribute("data-id"),s=document.getElementById(`route-destination-${n}`).value,o=document.getElementById(`route-mask-${n}`).value,i=document.getElementById(`next-hop-${n}`).value;s&&o&&i&&(e+=`ip route ${s} ${o} ${i}
`)})}else if(t==="ipv6"){const t=document.querySelectorAll(".ipv6-route-item");e+=`ipv6 unicast-routing
`,t.forEach(t=>{const n=t.querySelector(".remove-ipv6-route").getAttribute("data-id"),s=document.getElementById(`ipv6-route-destination-${n}`).value,o=document.getElementById(`ipv6-next-hop-${n}`).value;s&&o&&(e+=`ipv6 route ${s} ${o}
`)})}}}else if(t==="rip"){const t=document.getElementById("rip-version").value,n=document.getElementById("rip-networks").value.split(`
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
`,e}function te(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function ne(){const e={basicInfo:{hostname:document.getElementById("hostname").value,domainName:document.getElementById("domain-name").value,enableSecret:document.getElementById("enable-secret").value,consolePassword:document.getElementById("console-password").value,vtyPassword:document.getElementById("vty-password").value,banner:document.getElementById("banner-motd").value},interfaces:[],routing:{protocol:document.getElementById("routing-protocol").value,staticRoutes:{version:document.querySelector(".routes-version-btn.active")?.getAttribute("data-version")||"ipv4",ipv4Routes:[],ipv6Routes:[]},rip:{version:document.getElementById("rip-version").value,networks:document.getElementById("rip-networks").value},eigrp:{as:document.getElementById("eigrp-as").value,networks:document.getElementById("eigrp-networks").value},ospf:{processId:document.getElementById("ospf-process-id").value,routerId:document.getElementById("ospf-router-id").value,networks:document.getElementById("ospf-networks").value}},security:{ssh:{enabled:document.getElementById("ssh-enabled").checked,autoConfig:document.getElementById("ssh-auto-config").checked,version:document.getElementById("ssh-version").value,username:document.getElementById("ssh-username").value,password:document.getElementById("ssh-password").value},acl:{enabled:document.getElementById("acl-enabled").checked,type:document.getElementById("acl-type").value,number:document.getElementById("acl-number").value,entries:[]}},services:{ntp:{enabled:document.getElementById("ntp-enabled").checked,servers:document.getElementById("ntp-servers").value},dhcp:{enabled:document.getElementById("dhcp-enabled").checked,pools:[]},syslog:{enabled:document.getElementById("syslog-enabled").checked,server:document.getElementById("syslog-server").value,facility:document.getElementById("syslog-facility").value,level:document.getElementById("syslog-level").value}}};return document.querySelectorAll(".interface-item").forEach(t=>{const n=t.querySelector(".remove-interface").getAttribute("data-id"),s=t.querySelector(".ip-version-btn.active")?.getAttribute("data-version")||"ipv4",o={id:n,type:document.getElementById(`interface-type-${n}`).value,enabled:document.getElementById(`interface-enabled-${n}`).checked,hasDescription:document.getElementById(`interface-description-enabled-${n}`).checked,description:document.getElementById(`interface-description-${n}`).value,ipVersion:s,ipv4:{address:document.getElementById(`ip-address-${n}`).value,mask:document.getElementById(`subnet-mask-${n}`).value},ipv6:{address:document.getElementById(`ipv6-address-${n}`)?.value||"",prefix:document.getElementById(`ipv6-prefix-${n}`)?.value||"64",autoconfig:document.getElementById(`ipv6-autoconfig-${n}`)?.checked||!1}};e.interfaces.push(o)}),document.querySelectorAll(".static-route-item").forEach(t=>{const n=t.querySelector(".remove-route").getAttribute("data-id"),s={id:n,destination:document.getElementById(`route-destination-${n}`).value,mask:document.getElementById(`route-mask-${n}`).value,nextHop:document.getElementById(`next-hop-${n}`).value};e.routing.staticRoutes.ipv4Routes.push(s)}),document.querySelectorAll(".ipv6-route-item").forEach(t=>{const n=t.querySelector(".remove-ipv6-route").getAttribute("data-id"),s={id:n,destination:document.getElementById(`ipv6-route-destination-${n}`).value,nextHop:document.getElementById(`ipv6-next-hop-${n}`).value};e.routing.staticRoutes.ipv6Routes.push(s)}),document.querySelectorAll(".acl-entry").forEach(t=>{const n=t.querySelector(".remove-acl-entry").getAttribute("data-id"),s={id:n,action:document.getElementById(`acl-action-${n}`).value,source:document.getElementById(`acl-source-${n}`).value,destination:document.getElementById(`acl-destination-${n}`)?.value||"",protocol:document.getElementById(`acl-protocol-${n}`)?.value||"",sourcePort:document.getElementById(`acl-sport-${n}`)?.value||"",destPort:document.getElementById(`acl-dport-${n}`)?.value||""};e.security.acl.entries.push(s)}),document.querySelectorAll(".dhcp-pool").forEach(t=>{const n=t.querySelector(".remove-dhcp-pool").getAttribute("data-id"),s={id:n,name:document.getElementById(`dhcp-name-${n}`).value,network:document.getElementById(`dhcp-network-${n}`).value,mask:document.getElementById(`dhcp-mask-${n}`).value,gateway:document.getElementById(`dhcp-gateway-${n}`).value,dns:document.getElementById(`dhcp-dns-${n}`).value,domain:document.getElementById(`dhcp-domain-${n}`).value,lease:document.getElementById(`dhcp-lease-${n}`).value};e.services.dhcp.pools.push(s)}),e}function se(e){let t=JSON.parse(localStorage.getItem("ciscoConfigTemplates"))||[];t.push(e),localStorage.setItem("ciscoConfigTemplates",JSON.stringify(t))}function g(){const e=JSON.parse(localStorage.getItem("ciscoConfigTemplates"))||[];for(;i.firstChild;)i.removeChild(i.firstChild);if(e.length===0){i.appendChild(N);return}N.style.display="none",e.forEach(e=>{const t=document.createElement("div");t.className="template-item",t.innerHTML=`
                <h4>${e.name}</h4>
                <p>${e.description||"No description"}</p>
                <p><small>Created: ${e.date}</small></p>
                <div class="template-actions">
                    <button class="template-action-btn load" data-id="${e.id}">Load</button>
                    <button class="template-action-btn delete" data-id="${e.id}">Delete</button>
                </div>
            `,i.appendChild(t),t.querySelector(".load").addEventListener("click",()=>{ie(e.id)}),t.querySelector(".delete").addEventListener("click",t=>{t.stopPropagation(),ae(e.id)})})}function ie(e){const t=JSON.parse(localStorage.getItem("ciscoConfigTemplates"))||[],n=t.find(t=>t.id===e);if(!n){alert("Template not found.");return}confirm("Loading this template will replace your current configuration. Continue?")&&(re(),alert("Template loaded successfully!"),a.style.display="none")}function ae(e){if(confirm("Are you sure you want to delete this template?")){let t=JSON.parse(localStorage.getItem("ciscoConfigTemplates"))||[];t=t.filter(t=>t.id!==e),localStorage.setItem("ciscoConfigTemplates",JSON.stringify(t)),g()}}function re(){window.location.reload()}})