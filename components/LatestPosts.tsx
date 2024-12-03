"use client";

import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// This would typically come from TinaCMS
const posts = [
  {
    id: 1,
    title: "How to Choose the Right Storage Unit Size",
    excerpt: "A comprehensive guide to selecting the perfect storage unit size for your needs...",
    author: "John Doe",
    date: "2024-03-20",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Storage Unit Organization Tips",
    excerpt: "Expert tips and tricks for maximizing your storage unit space...",
    author: "Jane Smith",
    date: "2024-03-18",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "Climate-Controlled vs Standard Units",
    excerpt: "Understanding the differences between climate-controlled and standard storage units...",
    author: "Mike Johnson",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1505662695181-d4b60363d2a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  }
];

export default function LatestPosts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with storage tips, industry news, and helpful guides
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-4 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}