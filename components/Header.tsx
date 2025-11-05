'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Web3 Academy
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hover:text-purple-400">Dashboard</Link>
          <Link href="/courses" className="hover:text-purple-400">Courses</Link>
          <Link href="/marketplace" className="hover:text-purple-400">Marketplace</Link>
          <Link href="/staking" className="hover:text-purple-400">Staking</Link>
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
}
