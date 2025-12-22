export type AboutIcon = "eye" | "folder" | "message-circle" | "star" | "list" | "compass" | "heart" | "user" | "settings";

export interface AboutCard {
  id: string;
  title: string;
  description: string;
  icon: AboutIcon;
}

export const aboutCard: AboutCard[] = [
  {
    id: "track",
    title: "Track Movies & Series",
    description: "Keep track of movies and series you’ve watched or plan to watch.",
    icon: "eye",
  },
  {
    id: "organize",
    title: "Organize Your Watchlist",
    description: "Build your personal library with favorites, ratings and custom lists.",
    icon: "folder",
  },
  {
    id: "interact",
    title: "Interact with Community",
    description: "Engage with other users through comments, reviews, and recommendations.",
    icon: "message-circle",
  },
   {
    id: "rate",
    title: "Rate Content",
    description: "Give personal ratings to movies and series you’ve watched.",
    icon: "star",
  },
  {
    id: "lists",
    title: "Create Lists",
    description: "Create public or private lists to organize content your way.",
    icon: "list",
  },
  {
    id: "discover",
    title: "Discover Content",
    description: "Explore movies and series shared by other users.",
    icon: "compass",
  },
  {
    id: "favorites",
    title: "Mark Favorites",
    description: "Save your favorite movies and series for quick access.",
    icon: "heart",
  },
  {
    id: "profile",
    title: "Personal Profile",
    description: "Manage your activity, lists and personal preferences.",
    icon: "user",
  },
  {
    id: "admin",
    title: "Content Management",
    description: "Admins can create and manage movies and series.",
    icon: "settings",
  },
];
