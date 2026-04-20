import stamped from "@/assets/stamped-concrete.jpg";
import gutter from "@/assets/concrete-gutter.jpg";
import bobcat from "@/assets/bobcat-work.jpg";
import dump from "@/assets/dump-truck.jpg";
import plumbing from "@/assets/plumbing.jpg";
import repair from "@/assets/concrete-repair.jpg";
import clearing from "@/assets/lot-clearing.jpg";

export const services = [
  {
    eyebrow: "Decorative Concrete",
    title: "Stamped Concrete",
    description:
      "Custom patios, walkways, and driveways stamped to mimic stone, brick, or slate. Beautiful, durable, and built to last in the Tuscaloosa climate.",
    image: stamped,
  },
  {
    eyebrow: "Site Drainage",
    title: "Concrete Curb & Gutter",
    description:
      "Precision-formed curb and gutter for residential streets, driveways, and commercial lots throughout Northport and Tuscaloosa.",
    image: gutter,
  },
  {
    eyebrow: "Restoration",
    title: "Concrete Repair",
    description:
      "Crack repair, slab leveling, and resurfacing — restoring sidewalks, driveways, and foundations to like-new condition.",
    image: repair,
  },
  {
    eyebrow: "Underground Utilities",
    title: "Plumbing",
    description:
      "Underground plumbing rough-in, water and sewer line installation, and trench work coordinated with your concrete project.",
    image: plumbing,
  },
  {
    eyebrow: "Site Work",
    title: "Bobcat Services",
    description:
      "Skid-steer grading, backfilling, dirt moving, and material handling — the right machine for tight residential lots.",
    image: bobcat,
  },
  {
    eyebrow: "Hauling",
    title: "Dump Truck Services",
    description:
      "Gravel, dirt, and debris hauling. Reliable delivery and removal across West Alabama.",
    image: dump,
  },
  {
    eyebrow: "Land Prep",
    title: "Small Lot Clearing",
    description:
      "Brush removal, tree clearing, and lot prep for new builds, additions, and outdoor living projects.",
    image: clearing,
  },
] as const;
