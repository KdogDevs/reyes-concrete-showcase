// All photos and videos are stored in Lovable Cloud storage (sergio-media bucket)
// and tagged in the public.media_assets table. The URLs below point to the
// featured asset for each service (sort_order = 1 / is_featured = true).

const STORAGE = "https://mbeyzpujepawmgmsyhih.supabase.co/storage/v1/object/public/sergio-media";

export const heroVideo = `${STORAGE}/videos/IMG_1526.mp4`;
export const heroPoster = `${STORAGE}/videos/IMG_1526_poster.jpg`;

export const services = [
  {
    eyebrow: "Decorative Concrete",
    title: "Stamped Concrete",
    description:
      "Custom patios, walkways, and driveways stamped to mimic stone, brick, or wood plank. Beautiful, durable, and built to last in the Tuscaloosa climate.",
    image: `${STORAGE}/photos/IMG_3767.jpg`,
  },
  {
    eyebrow: "Site Drainage",
    title: "Concrete Curb & Gutter",
    description:
      "Precision-formed curb and gutter for residential driveways, parking lots, and commercial sites throughout Northport and Tuscaloosa.",
    image: `${STORAGE}/photos/IMG_1404.jpg`,
  },
  {
    eyebrow: "Restoration",
    title: "Concrete Repair",
    description:
      "Tear-out, slab demolition, resurfacing, and replacement — restoring driveways, patios, and floors to like-new condition.",
    image: `${STORAGE}/photos/C235EA04.jpg`,
  },
  {
    eyebrow: "Flatwork",
    title: "Concrete Slabs & Flatwork",
    description:
      "Driveways, sidewalks, garage floors, and pole-barn slabs — poured, screeded, and finished by an experienced crew.",
    image: `${STORAGE}/photos/IMG_0351.jpg`,
  },
  {
    eyebrow: "Underground Utilities",
    title: "Plumbing",
    description:
      "Underground plumbing rough-in, water and sewer line installation, and trench work coordinated with your concrete project.",
    image: `${STORAGE}/photos/2092BBAC.jpg`,
  },
  {
    eyebrow: "Site Work",
    title: "Bobcat Services",
    description:
      "Skid-steer grading, backfilling, dirt moving, and material handling — the right machine for tight residential lots.",
    image: `${STORAGE}/photos/IMG_1404.jpg`,
  },
  {
    eyebrow: "Hauling",
    title: "Dump Truck Services",
    description:
      "Gravel, dirt, and debris hauling. Reliable delivery and removal across West Alabama.",
    image: `${STORAGE}/photos/IMG_1510.jpg`,
  },
  {
    eyebrow: "Land Prep",
    title: "Small Lot Clearing",
    description:
      "Brush removal, grading, and lot prep for new builds, additions, pole barns, and outdoor living projects.",
    image: `${STORAGE}/photos/IMG_1510.jpg`,
  },
] as const;
