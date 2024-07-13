export interface IProfilePicture {
  id: number;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  image: string;
  created_by: number;
}

interface IUserDetails {
  name?: string;
  company_name?: string;
  contact_name?: string;
  phone?: string;
  vat?: string;
  bill_email?: string;
  mail_address?: string;
  gender?: string;
  about?: string;
  note?: string;
  profile_picture?: IProfilePicture;
  cover_picture?: IProfilePicture;
}

export interface IUser {
  id: number;
  email?: string;
  username?: string | null;
  user_details?: IUserDetails;
  user_type?: string;
  project_count?: number;
  date_joined?: string;
  last_login?: string | null;
}
