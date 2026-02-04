
// --- Block Types for Rich Article Content ---

export interface TextBlock {
  type: 'text';
  title?: string; // Optional section title like "Impressions"
  content: string; // The HTML/text content
}

export interface GalleryBlock {
  type: 'gallery';
  title?: string; // Optional gallery title
  images: {
    src: string; // URL or local path like '/assets/images/photo.jpg'
    caption?: string;
  }[];
}

export interface YoutubeBlock {
  type: 'youtube';
  title?: string;
  videoId: string; // The ID from the YouTube URL
}

// A union type representing any possible content block
export type ContentBlock = TextBlock | GalleryBlock | YoutubeBlock;


// --- Main Data Structures ---

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string; // Main featured image for the article card
  summary: string;
  content: ContentBlock[]; // Content is now an array of different blocks
}

export interface Player {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  jerseyNumber: number;
}

export interface BoardMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Sponsor {
    id: number;
    name: string;
    logoUrl: string;
    websiteUrl: string;
}
