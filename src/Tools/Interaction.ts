import db from '../../public/db.json';
import {BlogType} from "../Types/BlogType.ts";

export function getBlogs(): BlogType[] {
  return db;
}
export function getBlog(slug: string): BlogType|undefined {
  return db.find((blog: BlogType) => blog.slug === slug);
}