/**
 * Truncates an Ethereum address to show the first and last few characters
 * @param {string} address - The full Ethereum address
 * @param {number} firstChars - Number of characters to show at the beginning (default: 6)
 * @param {number} lastChars - Number of characters to show at the end (default: 4)
 * @returns {string} - The truncated address
 */
 const truncateAddress = (address, firstChars = 6, lastChars = 4) => {
    if (!address) return '';
    if (address.length < firstChars + lastChars) return address;
    
    return `${address.slice(0, firstChars)}...${address.slice(-lastChars)}`;
  };

  export default truncateAddress;