function calculateSubnet(){const t=document.getElementById("ip").value,e=parseInt(document.getElementById("cidr").value),n=parseInt(document.getElementById("numSubnets")?.value||"0");if(isValidIPv6(t)){if(e<0||e>128){document.getElementById("result").innerHTML='<div class="error">IPv6 prefix must be between 0 and 128</div>';return}try{const n=calculateIPv6Subnet(t,e);document.getElementById("result").innerHTML=`
                <div class="result-item">
                    <strong>IPv6 Network Address:</strong> ${n}
                </div>
                <div class="result-item">
                    <strong>Prefix Length:</strong> /${e}
                </div>
                <div class="result-item">
                    <strong>Total Addresses:</strong> 2^${128-e}
                </div>
            `;return}catch{document.getElementById("result").innerHTML='<div class="error">Error calculating IPv6 subnet</div>';return}}const o=/^(\d{1,3}\.){3}\d{1,3}$/;if(!o.test(t)){document.getElementById("result").innerHTML='<div class="error">Invalid IP address format</div>';return}const s=t.split(".");for(let e of s)if(parseInt(e)>255){document.getElementById("result").innerHTML='<div class="error">IP address octets must be between 0 and 255</div>';return}if(isNaN(e)||e<0||e>32){document.getElementById("result").innerHTML='<div class="error">CIDR must be between 0 and 32</div>';return}try{const i=calculateSubnetMask(e),a=calculateNetworkAddress(t,i),r=calculateBroadcastAddress(a,e),c=calculateUsableRange(a,r),l=Math.pow(2,32-e)-2,d=calculateWildcardMask(i),u=getIPClass(parseInt(s[0]));let o=`
            <div class="result-item">
                <strong>IP Address (Binary):</strong> ${getBinaryRepresentation(t)}
            </div>
            <div class="result-item">
                <strong>Subnet Mask:</strong> ${i}
            </div>
            <div class="result-item">
                <strong>Subnet Mask (Binary):</strong> ${getBinaryRepresentation(i)}
            </div>
            <div class="result-item">
                <strong>Wildcard Mask:</strong> ${d}
            </div>
            <div class="result-item">
                <strong>Network Address:</strong> ${a}
            </div>
            <div class="result-item">
                <strong>Broadcast Address:</strong> ${r}
            </div>
            <div class="result-item">
                <strong>Usable IP Range:</strong> ${c}
            </div>
            <div class="result-item">
                <strong>Total Usable Hosts:</strong> ${l}
            </div>
            <div class="result-item">
                <strong>IP Address Class:</strong> ${u}
            </div>
        `;if(n>1)try{const t=calculateSubnets(a,e,n);o+='<div class="result-item"><strong>Subnet Divisions:</strong><ul>',t.forEach((e,t)=>{o+=`
                        <li>Subnet ${t+1}:<br>
                        Network: ${e.network}/${e.cidr}<br>
                        Usable Range: ${e.usableRange}<br>
                        Usable Hosts: ${e.usableHosts}</li>
                    `}),o+="</ul></div>"}catch(e){o+=`<div class="error">${e.message}</div>`}document.getElementById("result").innerHTML=o}catch{document.getElementById("result").innerHTML='<div class="error">An error occurred during calculation</div>'}}function calculateSubnetMask(e){const t=[];for(let n=0;n<4;n++){const s=Math.min(8,Math.max(0,e-8*n));t.push(256-Math.pow(2,8-s))}return t.join(".")}function calculateNetworkAddress(e,t){const s=e.split("."),o=t.split("."),n=[];for(let e=0;e<4;e++)n.push(parseInt(s[e])&parseInt(o[e]));return n.join(".")}function calculateBroadcastAddress(e,t){const s=e.split("."),o=32-t,n=[];for(let e=0;e<4;e++){const t=Math.min(8,Math.max(0,o-8*(3-e)));n.push(parseInt(s[e])|Math.pow(2,t)-1)}return n.join(".")}function calculateUsableRange(e,t){const n=e.split("."),s=t.split(".");n[3]=parseInt(n[3])+1;const o=n.join(".");s[3]=parseInt(s[3])-1;const i=s.join(".");return`${o} - ${i}`}function toBinary(e){return("00000000"+(e>>>0).toString(2)).slice(-8)}function getIPClass(e){return e>=1&&e<=126?"A":e>=128&&e<=191?"B":e>=192&&e<=223?"C":e>=224&&e<=239?"D (Multicast)":e>=240&&e<=255?"E (Reserved)":"Invalid"}function calculateWildcardMask(e){const t=e.split(".");return t.map(e=>255-parseInt(e)).join(".")}function getBinaryRepresentation(e){return e.split(".").map(e=>toBinary(parseInt(e))).join(".")}function calculateSubnets(e,t,n){const o=[],i=Math.ceil(Math.log2(n)),s=t+i;if(s>32)throw new Error("Too many subnets requested for this network");const a=Math.pow(2,32-s),r=e.split(".");let c=r.map(e=>parseInt(e));for(let e=0;e<n;e++){const t=[...c];let i=e*a;for(let e=3;e>=0;e--){const n=i%256;t[e]=(t[e]+n)%256,i=Math.floor(i/256)}const r=t.join("."),u=calculateSubnetMask(s),l=calculateBroadcastAddress(r,s),d=calculateUsableRange(r,l);o.push({network:r,cidr:s,usableHosts:Math.pow(2,32-s)-2,usableRange:d})}return o}function isValidIPv6(e){const t=/^(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,5}(?::[0-9A-Fa-f]{1,4}){1,2}|(?:[0-9A-Fa-f]{1,4}:){1,4}(?::[0-9A-Fa-f]{1,4}){1,3}|(?:[0-9A-Fa-f]{1,4}:){1,3}(?::[0-9A-Fa-f]{1,4}){1,4}|(?:[0-9A-Fa-f]{1,4}:){1,2}(?::[0-9A-Fa-f]{1,4}){1,5}|[0-9A-Fa-f]{1,4}:(?:(?::[0-9A-Fa-f]{1,4}){1,6})|:(?:(?::[0-9A-Fa-f]{1,4}){1,7}|:))$/;return t.test(e)}function calculateIPv6Subnet(e,t){const o=e.split(":"),i=o.map(e=>e||"0000").map(e=>("0000"+e).slice(-4)),n=i.map(e=>parseInt(e,16).toString(2).padStart(16,"0")).join(""),a=n.slice(0,t),r=n.slice(t).replace(/./g,"0"),c=a+r,s=[];for(let e=0;e<8;e++){const t=c.slice(e*16,(e+1)*16);s.push(parseInt(t,2).toString(16).padStart(4,"0"))}return s.join(":")}