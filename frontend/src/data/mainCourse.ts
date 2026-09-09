export interface MainCourseArticle {
  title: string;
  subtitle: string;
  image: string;
}

export interface MainCourseBlog {
  title: string;
  date: string;
  author: string;
  description: string;
  image: string;
}

export interface MainCourseTeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const featuredArticles: MainCourseArticle[] = [
  { title: "MADE IN INDIA", subtitle: "Home Grown Beverages", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=85&w=900" },
  { title: "Chai is in !", subtitle: "The Indian phenomenon", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=85&w=900" },
  { title: "Bath Bomb Cocktails", subtitle: "Margarita-flavored fizzers", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=85&w=900" },
  { title: "MADE IN INDIA", subtitle: "Home Grown Beverages", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=85&w=900" },
  { title: "Chai is in !", subtitle: "The Indian phenomenon", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=85&w=900" },
  { title: "Bath Bomb Cocktails", subtitle: "Margarita-flavored fizzers", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=85&w=900" }
];

export const beverageCategories = ["Show All", "Beer", "Champagne", "Cocktails", "Spirits", "Wine"];

export const beverageGallery = [
  { category: "Beer", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=85&w=900" },
  { category: "Champagne", image: "https://images.unsplash.com/photo-1558642891-54be180ea339?auto=format&fit=crop&q=85&w=900" },
  { category: "Cocktails", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=85&w=900" },
  { category: "Spirits", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=85&w=900" },
  { category: "Beer", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=85&w=900" },
  { category: "Wine", image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=85&w=900" },
  { category: "Spirits", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=85&w=900" },
  { category: "Wine", image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&q=85&w=900" },
];

export const blogPosts: MainCourseBlog[] = [
  { title: "Reason To Eat Chocolate Everyday", date: "Aug 16, 2020", author: "ITC Admin", description: "Reason to eat chocolate everyday", image: "https://images.unsplash.com/photo-1548907040-4d42c9b1a2c8?auto=format&fit=crop&q=85&w=900" },
  { title: "Fun Facts about Breakfast", date: "Jul 03, 2020", author: "ITC Admin", description: "Breakfast", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=85&w=900" },
];

export const statistics = [
  { value: "100+", label: "Service quality", icon: "user" },
  { value: "21+", label: "Experience", icon: "tag" },
  { value: "16+", label: "Awarded", icon: "trophy" },
  { value: "221+", label: "Customer", icon: "users" },
] as const;

export const teamMembers: MainCourseTeamMember[] = [
  { name: "Anaya Kapoor", role: "CHEF", description: "Anaya Kapoor a Chef with 9 years of experience mostly in Indian Cuisine", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=85&w=800" },
  { name: "Prashant Bhatia", role: "HEAD CHEF", description: "Prasant Bhatia is a Head Chef with 14 years of rich experience in Western Cuisine", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=85&w=800" },
  { name: "Ravi Kumar", role: "BAKER", description: "Ravi Kumar is a Baker who started baking at a young age of 11 years helping his father who ran a local bakery shop.", image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=85&w=800" },
];

export const footerColumns = [
  ["Home", "F&B Ideas", "F&B Brands", "Operating Equipments"],
  ["Beverages", "F&B Events", "RL Culinary Initiatives", "ARCS"],
  ["WPS", "Recipe Archive"],
];
