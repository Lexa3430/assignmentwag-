import { useAccount, useDisconnect, useEnsName, useEnsAvatar, useSwitchChain } from 'wagmi'
import { useState } from 'react'

import truncateAddress from './utils/truncateAdress'

export function Account() {
  const { address, isConnected, connector, chain } = useAccount()
  const { disconnect } = useDisconnect()
  const { switchChain, chains } = useSwitchChain()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName || '' })
  const [selectedChain, setSelectedChain] = useState(chain?.id || '')
  
  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address)
      alert('Address copied to clipboard')
    }
  }

  if (!isConnected) return <p className="status-text">Not Connected</p>

  return (
    <div className="account-container">
      <div className="account-header">
        <h2 className="account-title">Account</h2>
        <button onClick={() => disconnect()} className="close-button">×</button>
      </div>
      
      <div className="account-info">
        <div className="address-display">
          {ensAvatar && (
            <img 
              src={ensAvatar} 
              alt="ENS Avatar" 
              className="address-avatar" 
            />
          )}
          <span className="address-text">
            {ensName || truncateAddress(address)}
          </span>
          <button onClick={copyAddress} className="copy-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V17M8 5C8 6.10457 8.89543 7 10 7H14C15.1046 7 16 6.10457 16 5M8 5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5M16 5V7C16 8.10457 16.8954 9 18 9H20C21.1046 9 22 9.89543 22 11V17C22 18.1046 21.1046 19 20 19H18" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <p><strong>Connected with:</strong> {connector?.name}</p>
      </div>
      
      <div className="chain-selection">
        <label htmlFor="chain-select">Network</label>
        <select
          id="chain-select"
          className="chain-selector"
          value={selectedChain}
          onChange={(e) => {
            const chainId = Number(e.target.value)
            setSelectedChain(chainId)
            switchChain({ chainId })
          }}
        >
          {chains.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>
      
      <button className="disconnect-button" onClick={() => disconnect()}>
        Disconnect
      </button>
    </div>
  )
}