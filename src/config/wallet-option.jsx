import * as React from 'react'
import { useState } from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()
  const [showOptions, setShowOptions] = useState(false)

  const handleConnect = (connector) => {
    connect({ connector })
    setShowOptions(false)
  }

  // Wallet icons (simplified placeholders)
  const getWalletIcon = (walletName) => {
    const iconStyle = { width: '24px', height: '24px', marginRight: '12px' }
    
    switch (walletName.toLowerCase()) {
      case 'metamask':
        return (
          <svg style={iconStyle} viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.9582 1L19.8241 10.7183L22.2323 5.12254L32.9582 1Z" fill="#E17726"/>
            <path d="M2.04179 1L15.0136 10.809L12.7673 5.12254L2.04179 1Z" fill="#E27625"/>
            <path d="M28.2551 23.6652L24.7972 28.9993L32.2534 31.0574L34.4334 23.7782L28.2551 23.6652Z" fill="#E27625"/>
            <path d="M0.566559 23.7782L2.7338 31.0574L10.1899 28.9993L6.74503 23.6652L0.566559 23.7782Z" fill="#E27625"/>
          </svg>
        )
      case 'coinbase wallet':
        return (
          <svg style={iconStyle} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#1B53E4"/>
            <path d="M14 5.5C9.30558 5.5 5.5 9.30558 5.5 14C5.5 18.6944 9.30558 22.5 14 22.5C18.6944 22.5 22.5 18.6944 22.5 14C22.5 9.30558 18.6944 5.5 14 5.5ZM11.8889 17.1111C10.3222 17.1111 9.05556 15.8444 9.05556 14.2778C9.05556 12.7111 10.3222 11.4444 11.8889 11.4444H13.0556V17.1111H11.8889ZM16.1111 17.1111C14.5444 17.1111 13.2778 15.8444 13.2778 14.2778C13.2778 12.7111 14.5444 11.4444 16.1111 11.4444H17.2778V17.1111H16.1111Z" fill="white"/>
          </svg>
        )
      case 'walletconnect':
        return (
          <svg style={iconStyle} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#3B99FC"/>
            <path d="M8.38969 11.2346C11.4942 8.13009 16.5058 8.13009 19.6103 11.2346L19.9332 11.5575C20.0638 11.6881 20.0638 11.8999 19.9332 12.0305L18.6411 13.3226C18.5758 13.3879 18.4699 13.3879 18.4046 13.3226L17.9705 12.8885C15.7989 10.7169 12.2011 10.7169 10.0295 12.8885L9.56541 13.3526C9.5001 13.4179 9.39424 13.4179 9.32894 13.3526L8.03683 12.0605C7.90622 11.9299 7.90622 11.7181 8.03683 11.5875L8.38969 11.2346ZM21.8214 13.4456L23.0024 14.6266C23.133 14.7572 23.133 14.969 23.0024 15.0996L17.6865 20.4155C17.5559 20.5461 17.344 20.5461 17.2134 20.4155L13.6201 16.8221C13.5875 16.7895 13.5326 16.7895 13.5 16.8221L9.90662 20.4155C9.776 20.5461 9.56414 20.5461 9.43352 20.4155L4.1047 15.0867C3.97408 14.9561 3.97408 14.7442 4.1047 14.6136L5.2857 13.4326C5.41632 13.302 5.62819 13.302 5.7588 13.4326L9.3522 17.026C9.38478 17.0586 9.43966 17.0586 9.47224 17.026L13.0656 13.4326C13.1962 13.302 13.4081 13.302 13.5387 13.4332L17.1321 17.0267C17.1647 17.0592 17.2195 17.0592 17.2521 17.0267L20.8455 13.4332C20.9761 13.3026 21.188 13.3026 21.3186 13.4332L21.8214 13.4456Z" fill="white"/>
          </svg>
        )
      default:
        return (
          <svg style={iconStyle} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#E0E0E0"/>
            <path d="M12 7V17M7 12H17" stroke="#666666" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
    }
  }

  // If not showing options, just show the connect button with logo
  if (!showOptions) {
    return (
      <div className="connect-card">
        <div className="app-title">
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.66669L29.3333 10.6667V21.3334L16 29.3334L2.66666 21.3334V10.6667L16 2.66669Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 16L29.3333 10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 16V29.3334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 16L2.66666 10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="16" r="5" fill="#FF007A"/>
          </svg>
          Lexa App
        </div>
        
        <button onClick={() => setShowOptions(true)} className="connect-wallet-button">
          Connect Wallet
        </button>
      </div>
    )
  }

  // Show wallet options
  return (
    <div className="wallet-options">
      <div className="wallet-options-header">
        <h2 className="wallet-options-title">Connect a wallet</h2>
        <button onClick={() => setShowOptions(false)} className="close-button">×</button>
      </div>
      
      {connectors.map((connector) => (
        <button
          key={connector.id}
          className="wallet-button"
          onClick={() => handleConnect(connector)}
        >
          {getWalletIcon(connector.name)}
          {connector.name}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      ))}
    </div>
  )
}