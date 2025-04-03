document.addEventListener("DOMContentLoaded",()=>{const m=document.querySelectorAll(".tab-btn"),O=document.querySelectorAll(".tab-content");m.forEach(e=>{e.addEventListener("click",()=>{m.forEach(e=>e.classList.remove("active")),e.classList.add("active"),O.forEach(e=>e.style.display="none");const t=e.getAttribute("data-tab");document.getElementById(`${t}-content`).style.display="block"})});const u=document.getElementById("ssh-enabled"),L=document.getElementById("ssh-config");u.addEventListener("change",()=>{L.style.display=u.checked?"block":"none"});const j=document.getElementById("acl-enabled"),T=document.getElementById("acl-config");j.addEventListener("change",()=>{T.style.display=j.checked?"block":"none"});const r=document.getElementById("ntp-enabled"),F=document.getElementById("ntp-config");r.addEventListener("change",()=>{F.style.display=r.checked?"block":"none"});const c=document.getElementById("dhcp-enabled"),S=document.getElementById("dhcp-config");c.addEventListener("change",()=>{S.style.display=c.checked?"block":"none"});const d=document.getElementById("syslog-enabled"),y=document.getElementById("syslog-config");d.addEventListener("change",()=>{y.style.display=d.checked?"block":"none"}),document.getElementById("interface-description-enabled-0").addEventListener("change",function(){document.getElementById("description-group-0").style.display=this.checked?"block":"none"});const o=document.getElementById("acl-type"),k=document.querySelectorAll(".extended-acl-fields");o.addEventListener("change",()=>{const e=o.value==="extended";k.forEach(t=>{t.style.display=e?"block":"none"})});const a=document.getElementById("acl-protocol-0"),E=document.querySelectorAll(".port-fields");a.addEventListener("change",()=>{const e=a.value==="tcp"||a.value==="udp";E.forEach(t=>{t.style.display=e?"block":"none"})});const g=document.getElementById("routing-protocol"),x=document.querySelectorAll(".protocol-config");g.addEventListener("change",()=>{x.forEach(e=>{e.style.display="none"});const e=g.value;e!=="none"&&(document.getElementById(`${e}-config`).style.display="block")});let e=1;const D=document.getElementById("add-interface"),i=document.getElementById("interfaces-list");D.addEventListener("click",()=>{const t=document.createElement("div");t.className="interface-item",t.innerHTML=`
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
                <div class="input-group">
                    <label for="ip-address-${e}">IP Address:</label>
                    <input type="text" id="ip-address-${e}" placeholder="192.168.1.1">
                </div>
                <div class="input-group">
                    <label for="subnet-mask-${e}">Subnet Mask:</label>
                    <input type="text" id="subnet-mask-${e}" placeholder="255.255.255.0">
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
        `,i.appendChild(t),document.getElementById(`interface-description-enabled-${e}`).addEventListener("change",function(){document.getElementById(`description-group-${e}`).style.display=this.checked?"block":"none"});const n=t.querySelector(".remove-interface");n.addEventListener("click",()=>{i.removeChild(t)}),e++});let s=1;const _=document.getElementById("add-static-route"),b=document.getElementById("static-routes-list");_.addEventListener("click",()=>{const e=document.createElement("div");e.className="static-route-item",e.innerHTML=`
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
        `,b.appendChild(e);const t=e.querySelector(".remove-route");t.addEventListener("click",()=>{b.removeChild(e)}),s++});let n=1;const C=document.getElementById("add-acl-entry"),p=document.getElementById("acl-entries");C.addEventListener("click",()=>{const e=document.createElement("div");e.className="acl-entry",e.innerHTML=`
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
            <div class="extended-acl-fields" style="display: ${o.value==="extended"?"block":"none"}">
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
        `,p.appendChild(e);const t=e.querySelector(`#acl-protocol-${n}`),s=e.querySelector(".port-fields");t.addEventListener("change",()=>{const e=t.value==="tcp"||t.value==="udp";s.style.display=e?"block":"none"});const i=e.querySelector(".remove-acl-entry");i.addEventListener("click",()=>{p.removeChild(e)}),n++});let t=1;const A=document.getElementById("add-dhcp-pool"),l=document.getElementById("dhcp-pools");A.addEventListener("click",()=>{const e=document.createElement("div");e.className="dhcp-pool",e.innerHTML=`
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
        `,l.appendChild(e);const n=e.querySelector(".remove-dhcp-pool");n.addEventListener("click",()=>{l.removeChild(e)}),t++}),document.querySelector(".remove-interface").addEventListener("click",function(){if(document.querySelectorAll(".interface-item").length>1){const t=this.getAttribute("data-id"),e=this.closest(".interface-item");i.removeChild(e)}else alert("You need at least one interface.")});const M=document.getElementById("generate-config"),h=document.getElementById("config-output"),f=document.getElementById("config-output-container");M.addEventListener("click",()=>{const e=w();h.textContent=e,f.style.display="block",f.scrollIntoView({behavior:"smooth"})});const z=document.getElementById("copy-config"),v=document.getElementById("copy-tooltip");z.addEventListener("click",()=>{R(h.textContent),v.style.display="block",setTimeout(()=>{v.style.display="none"},2e3)});const N=document.getElementById("reset-form");N.addEventListener("click",()=>{confirm("Are you sure you want to reset the form? All your configuration will be lost.")&&window.location.reload()});function w(){let e="";e+=`! Cisco IOS Configuration
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
`,e}function R(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}})