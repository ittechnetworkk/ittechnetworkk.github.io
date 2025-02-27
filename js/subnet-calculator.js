function calculateSubnet() {
    const ip = document.getElementById('ip').value;
    const cidr = document.getElementById('cidr').value;
    
    // IP validation
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipPattern.test(ip)) {
        document.getElementById('result').innerHTML = 'Invalid IP address format';
        return;
    }
    
    // CIDR validation
    if (cidr < 0 || cidr > 32) {
        document.getElementById('result').innerHTML = 'CIDR must be between 0 and 32';
        return;
    }
    
    // Calculate subnet mask
    const subnetMask = calculateSubnetMask(cidr);
    
    // Calculate network address
    const networkAddress = calculateNetworkAddress(ip, subnetMask);
    
    // Calculate broadcast address
    const broadcastAddress = calculateBroadcastAddress(networkAddress, cidr);
    
    // Calculate usable IP range
    const usableRange = calculateUsableRange(networkAddress, broadcastAddress);
    
    // Calculate total hosts
    const totalHosts = Math.pow(2, (32 - cidr)) - 2;
    
    // Display results
    document.getElementById('result').innerHTML = `
        <div class="result-item">
            <strong>Subnet Mask:</strong> ${subnetMask}
        </div>
        <div class="result-item">
            <strong>Network Address:</strong> ${networkAddress}
        </div>
        <div class="result-item">
            <strong>Broadcast Address:</strong> ${broadcastAddress}
        </div>
        <div class="result-item">
            <strong>Usable IP Range:</strong> ${usableRange}
        </div>
        <div class="result-item">
            <strong>Total Usable Hosts:</strong> ${totalHosts}
        </div>
    `;
}

function calculateSubnetMask(cidr) {
    const mask = [];
    for (let i = 0; i < 4; i++) {
        const n = Math.min(8, Math.max(0, cidr - 8 * i));
        mask.push(256 - Math.pow(2, 8 - n));
    }
    return mask.join('.');
}

function calculateNetworkAddress(ip, subnetMask) {
    const ipParts = ip.split('.');
    const maskParts = subnetMask.split('.');
    const networkParts = [];
    
    for (let i = 0; i < 4; i++) {
        networkParts.push(parseInt(ipParts[i]) & parseInt(maskParts[i]));
    }
    
    return networkParts.join('.');
}

function calculateBroadcastAddress(networkAddress, cidr) {
    const networkParts = networkAddress.split('.');
    const hostBits = 32 - cidr;
    const broadcast = [];
    
    for (let i = 0; i < 4; i++) {
        const n = Math.min(8, Math.max(0, hostBits - 8 * (3 - i)));
        broadcast.push(parseInt(networkParts[i]) | (Math.pow(2, n) - 1));
    }
    
    return broadcast.join('.');
}

function calculateUsableRange(networkAddress, broadcastAddress) {
    const networkParts = networkAddress.split('.');
    const broadcastParts = broadcastAddress.split('.');
    
    // First usable IP
    networkParts[3] = parseInt(networkParts[3]) + 1;
    const firstUsable = networkParts.join('.');
    
    // Last usable IP
    broadcastParts[3] = parseInt(broadcastParts[3]) - 1;
    const lastUsable = broadcastParts.join('.');
    
    return `${firstUsable} - ${lastUsable}`;
} 