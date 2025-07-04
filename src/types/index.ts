export interface EventResource {
  name: string;
  url: string;
  type: 'ppt' | 'pdf' | 'notes' | 'link' | 'blog';
}

export interface Event {
  id: string;
  title: string;
  date: string; // ISO string or human-readable
  description: string;
  longDescription?: string;
  youtubeVideoId?: string;
  youtubeViewCount?: number; // Added for displaying view counts
  resources?: EventResource[];
  tags: string[];
  imageUrl?: string;
  imageHint?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  type: 'ppt' | 'guide' | 'notes' | 'video' | 'article';
  tags: string[];
  imageUrl?: string;
  imageHint?: string;
}

export interface TeamMember {
  linkedinUrl: any;
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  imageHint?: string;
}
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  imageUrl: string;
  imageHint?: string;
}
