import { getDefaultConfig } from 'connectkit'
import {  createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'


export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')


export const metadata = {
    appName: 'AppKit',
    description: 'AppKit Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = createConfig(
    getDefaultConfig({
        chains: [sepolia],
        walletConnectProjectId: projectId,
        ...metadata
    })
)
