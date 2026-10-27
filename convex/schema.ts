import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  services: defineTable({
    title: v.string(),
    description: v.string(),
    order: v.number(),
  }).index("by_order", ["order"]),
});
