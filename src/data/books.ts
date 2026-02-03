export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export const featuredBooks: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    price: 24.99,
    category: "Fiction",
    image: "/books/midnight-library.jpg",
    rating: 4.6,
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Tiny changes, remarkable results. A proven framework for building good habits and breaking bad ones.",
    price: 27.0,
    category: "Self-Help",
    image: "/books/atomic-habits.jpg",
    rating: 4.8,
  },
  {
    id: "3",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    description:
      "A mysterious and compelling coming-of-age story set in the marshes of North Carolina.",
    price: 18.99,
    category: "Fiction",
    image: "/books/crawdads.jpg",
    rating: 4.7,
  },
];
