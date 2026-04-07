'use client'

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClarityAnalytics() {
  useEffect(() => {
    // Initialize Microsoft Clarity with Google Analytics syncing capabilities
    if (typeof window !== 'undefined') {
      try {
        Clarity.init('w6wt7yvmx7');
      } catch (error) {
        console.error('Failed to initialize Microsoft Clarity:', error);
      }
    }
  }, []);

  return null;
}
