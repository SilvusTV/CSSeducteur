import db from "../../public/db.json";
import { BlogType } from "../Types/BlogType.ts";

export function getBlogs(): BlogType[] {
  return db;
}

export function getActiveBlogs(): BlogType[] {
  return db.filter(
    (blog: BlogType) => blog.uploadDate < new Date().toISOString(),
  );
}

export function get3ActiveBlogs(): BlogType[] {
  return db
    .filter((blog: BlogType) => blog.uploadDate < new Date().toISOString())
    .slice(0, 3);
}

export function getBlog(slug: string): BlogType | undefined {
  return db.find((blog: BlogType) => blog.slug === slug);
}
