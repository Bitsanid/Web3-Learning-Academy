'use client';

import { useState } from 'react';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';

export default function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    twitter: '@johndoe',
    farcaster: '@john',
    discord: 'johndoe#1234',
    github: 'johndoe',
  });
  const { updateProfile, isLoading } = useUpdateProfile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(profile);
  };

  return (
    <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label htmlFor="twitter" className="block text-sm font-medium mb-1">
            Twitter Handle
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={profile.twitter}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label htmlFor="farcaster" className="block text-sm font-medium mb-1">
            Farcaster Handle
          </label>
          <input
            type="text"
            id="farcaster"
            name="farcaster"
            value={profile.farcaster}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label htmlFor="discord" className="block text-sm font-medium mb-1">
            Discord Handle
          </label>
          <input
            type="text"
            id="discord"
            name="discord"
            value={profile.discord}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div>
          <label htmlFor="github" className="block text-sm font-medium mb-1">
            GitHub Handle
          </label>
          <input
            type="text"
            id="github"
            name="github"
            value={profile.github}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 disabled:bg-gray-500"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
