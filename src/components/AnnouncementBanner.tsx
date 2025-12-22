import React from 'react';
import { Megaphone, ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  onViewCategories?: () => void;
}

export default function AnnouncementBanner({ onViewCategories }: AnnouncementBannerProps) {
  const handleViewCategories = () => {
    if (onViewCategories) {
      onViewCategories();
    }
  };

  return (

  );
}