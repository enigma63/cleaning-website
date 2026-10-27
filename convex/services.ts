import { internalMutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("services").withIndex("by_order").collect();
  },
});

const defaultServices = [
  {
    title: "Home Cleaning",
    description:
      "Reliable cleaning for apartments, houses, and family homes with careful attention to kitchens, bathrooms, floors, and living spaces.",
  },
  {
    title: "Office Cleaning",
    description:
      "Professional cleaning for offices and commercial spaces that keeps your workplace fresh, presentable, and ready for business.",
  },
  {
    title: "Airbnb Cleaning",
    description:
      "Fast turnover cleaning for short-let and Airbnb properties so every guest arrives to a spotless, welcoming space.",
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Detailed cleaning that removes dust, debris, and buildup after building or renovation work, leaving the property move-in ready.",
  },
];

// Run once with: npx convex run services:seed
export const seed = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("services").first();
    if (existing) return "Services already seeded";
    for (const [order, service] of defaultServices.entries()) {
      await ctx.db.insert("services", { ...service, order });
    }
    return `Seeded ${defaultServices.length} services`;
  },
});
