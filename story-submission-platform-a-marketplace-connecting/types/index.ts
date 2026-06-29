export type Role = "writer" | "producer" | "admin";
export type UserProfile = { id: string; name: string; role: Role; avatar: string; bio: string; verified: boolean };
export type Story = { id: string; title: string; genre: string; language: string; type: string; writer: UserProfile; logline: string; synopsis: string; cover: string; views: number; likes: number; bookmarks: number; postedAt: string; featured: boolean };
