export interface Category {
  id: number;
  name: string;
  slug: string;
  active: boolean;
  thumbnail: string | null;
  thumbnail_width: number | null;
  thumbnail_height: number | null;
  order: number;
  alternate_title: string;
  alternate_url: string;
  description: string;
  meta_keywords: string;
  meta_extra: string;
  lft: number;
  rght: number;
  tree_id: number;
  level: number;
  parent: Category | null;
}

export interface Pricing {
  id: number;
  created_at: string;
  updated_at: string;
  pricing_type: number;
  currency: string;
  created_by: number;
}

export interface ProjectMilestone {
  id: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  started_at: string;
  ended_at: string;
  note: string;
  status: number;
  title: string;
  created_by: number;
  project: number;
  complete: boolean;
}

export interface ClientProject {
  id: number;
  category: Category;
  pricing: Pricing;
  projectmilestones: ProjectMilestone[];
  created_at: string;
  updated_at: string;
  is_active: boolean;
  started_at: string;
  ended_at: string;
  status: number;
  title: string;
  description: string;
  price: string;
  created_by: number;
  client: number;
}

export interface ClientFile {
  id: number;
  created_at: string;
  updated_at: string;
  file_name: string;
  file: string;
  created_by: number;
}

export interface ClientDocument {
  id: number;
  file: ClientFile;
  created_at: string;
  updated_at: string;
  note: string;
  doc_type: number;
  created_by: number;
  project: number;
}