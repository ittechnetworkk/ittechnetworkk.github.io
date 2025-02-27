function calculateSubnet(){const t=document.getElementById("ip").value,e=parseInt(document.getElementById("cidr").value),n=/^(\d{1,3}\.){3}\d{1,3}$/;if(!n.test(t)){document.getElementById("result").innerHTML='<div class="error">Invalid IP address format</div>';return}const s=t.split(".");for(let e of s)if(parseInt(e)>255){document.getElementById("result").innerHTML='<div class="error">IP address octets must be between 0 and 255</div>';return}if(isNaN(e)||e<0||e>32){document.getElementById("result").innerHTML='<div class="error">CIDR must be between 0 and 32</div>';return}try{const s=calculateSubnetMask(e),n=calculateNetworkAddress(t,s),o=calculateBroadcastAddress(n,e),i=calculateUsableRange(n,o),a=Math.pow(2,32-e)-2;document.getElementById("result").innerHTML=`
            <div class="result-item">
                <strong>Subnet Mask:</strong> ${s}
            </div>
            <div class="result-item">
                <strong>Network Address:</strong> ${n}
            </div>
            <div class="result-item">
                <strong>Broadcast Address:</strong> ${o}
            </div>
            <div class="result-item">
                <strong>Usable IP Range:</strong> ${i}
            </div>
            <div class="result-item">
                <strong>Total Usable Hosts:</strong> ${a}
            </div>
        `}catch{document.getElementById("result").innerHTML='<div class="error">An error occurred during calculation</div>'}}function calculateSubnetMask(e){const t=[];for(let n=0;n<4;n++){const s=Math.min(8,Math.max(0,e-8*n));t.push(256-Math.pow(2,8-s))}return t.join(".")}function calculateNetworkAddress(e,t){const s=e.split("."),o=t.split("."),n=[];for(let e=0;e<4;e++)n.push(parseInt(s[e])&parseInt(o[e]));return n.join(".")}function calculateBroadcastAddress(e,t){const s=e.split("."),o=32-t,n=[];for(let e=0;e<4;e++){const t=Math.min(8,Math.max(0,o-8*(3-e)));n.push(parseInt(s[e])|Math.pow(2,t)-1)}return n.join(".")}function calculateUsableRange(e,t){const n=e.split("."),s=t.split(".");n[3]=parseInt(n[3])+1;const o=n.join(".");s[3]=parseInt(s[3])-1;const i=s.join(".");return`${o} - ${i}`}