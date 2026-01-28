// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import Image from "next/image";

// interface Specialty {
//   id: string;
//   title: string;
//   icon: string;
//   description: string;
// }

// interface MedicalSpecialtiesProps {
//   apiEndpoint?: string;
//   onSpecialtyClick?: (specialty: Specialty) => void;
// }

// const MedicalSpecialties: React.FC<MedicalSpecialtiesProps> = ({
//   apiEndpoint,
//   onSpecialtyClick,
// }) => {
//   const [specialties, setSpecialties] = useState<Specialty[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const defaultSpecialties: Specialty[] = [
//     {
//       id: "14d78964-8041-4040-96b6-2b3e2dc9148d",
//       title: "Cardiology",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769577689/file.png",
//       description:
//         "Specializes in heart and blood vessel diseases, including heart attacks and hypertension.",
//     },
//     {
//       id: "1b15c8e0-03fd-40d6-992b-21e065262ac2",
//       title: "Endocrinology",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769580178/file.png",
//       description:
//         "Specializes in hormone-related diseases, including diabetes and thyroid disorders.",
//     },
//     {
//       id: "3305d8f7-d888-4869-b8cf-d6906fbd1b48",
//       title: "Neurology",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769577793/file.png",
//       description:
//         "Specializes in disorders of the brain, spinal cord, and nervous system.",
//     },
//     {
//       id: "396256bb-44d4-411d-9c91-7dcc988bacd9",
//       title: "Pediatrics",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769580013/file.png",
//       description:
//         "Specializes in the medical care of infants, children, and adolescents.",
//     },
//     {
//       id: "5a9cf9cf-28d5-4bea-b8f5-d5f0f6194953",
//       title: "Orthopedics",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769579959/file.png",
//       description:
//         "Specializes in the musculoskeletal system, including bones, joints, and muscles.",
//     },
//     {
//       id: "bdb375f8-b152-4073-a6ed-79d10b61041e",
//       title: "Dermatology",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769577748/file.png",
//       description:
//         "Specializes in skin, hair, and nail conditions and diseases.",
//     },
//     {
//       id: "cb9f4988-112e-40ab-b503-75a6121b33af",
//       title: "Gynaecology & Obstetrics",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769577862/file.png",
//       description:
//         "Specializes in female reproductive health, pregnancy, childbirth, and related",
//     },
//     {
//       id: "cfadbd41-37fa-4e10-a170-2896b1726511",
//       title: "Gastroenterology",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769580061/file.png",
//       description:
//         "Specializes in the digestive system, including the stomach, intestines, and liver.",
//     },
//     {
//       id: "de8c4223-4058-457e-8da6-49bf203139fe",
//       title: "Psychiatry",
//       icon: "https://res.cloudinary.com/dddao5xne/image/upload/v1769580130/file.png",
//       description:
//         "Specializes in diagnosing and treating mental health and behavioral disorders.",
//     },
//   ];

//   useEffect(() => {
//     const fetchSpecialties = async () => {
//       if (!apiEndpoint) {
//         setSpecialties(defaultSpecialties);
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(apiEndpoint);
//         if (!response.ok) {
//           throw new Error("Failed to fetch specialties");
//         }
//         const result = await response.json();
//         setSpecialties(result.data || defaultSpecialties);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//         setSpecialties(defaultSpecialties);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSpecialties();
//   }, [apiEndpoint]);

//   const handleCardClick = (specialty: Specialty) => {
//     if (onSpecialtyClick) {
//       onSpecialtyClick(specialty);
//     }
//   };

//   // Animation variants
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const headerVariants: Variants = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//   };

//   const iconVariants: Variants = {
//     initial: {
//       scale: 1,
//       rotate: 0,
//     },
//     hover: {
//       scale: 1.1,
//       rotate: 5,
//       transition: {
//         duration: 0.3,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//   };

//   // Loading Component
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-emerald-50/30 to-neutral-50 flex items-center justify-center">
//         <div className="text-center">
//           <motion.div
//             className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full mx-auto"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           />
//           <motion.p
//             className="mt-4 text-neutral-600 font-medium"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Loading specialties...
//           </motion.p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-emerald-50/30 to-neutral-50 relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
//       {/* Animated Background Blobs */}
//       <motion.div
//         className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-3xl"
//         animate={{
//           x: [0, -50, 0],
//           y: [0, 50, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"
//         animate={{
//           x: [0, 50, 0],
//           y: [0, -50, 0],
//           scale: [1, 1.15, 1],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1,
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-16"
//           initial="hidden"
//           animate="visible"
//           variants={headerVariants}
//         >
//           <motion.div
//             className="inline-block mb-4"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <span className="inline-flex items-center px-6 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm uppercase tracking-wider">
//               Medical Excellence
//             </span>
//           </motion.div>

//           <motion.h1
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Explore Our Specialties
//           </motion.h1>

//           <motion.p
//             className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             Comprehensive healthcare services across multiple medical
//             disciplines, delivered by expert physicians committed to your
//             wellbeing
//           </motion.p>
//         </motion.div>

//         {/* Error Message */}
//         <AnimatePresence>
//           {error && (
//             <motion.div
//               className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-center"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//             >
//               <p className="text-red-700 text-sm">
//                 {error} - Showing default specialties
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Specialties Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <AnimatePresence>
//             {specialties.map((specialty, index) => (
//               <motion.div
//                 key={specialty.id}
//                 variants={cardVariants}
//                 whileHover={{
//                   y: -8,
//                   transition: { duration: 0.3 },
//                 }}
//                 onClick={() => handleCardClick(specialty)}
//                 onKeyPress={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     handleCardClick(specialty);
//                   }
//                 }}
//                 role="button"
//                 tabIndex={0}
//                 className="group relative bg-white rounded-2xl p-8 cursor-pointer border border-neutral-200/60 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//               >
//                 {/* Top Border Animation */}
//                 <motion.div
//                   className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-emerald-500"
//                   initial={{ scaleX: 0 }}
//                   whileHover={{ scaleX: 1 }}
//                   transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                   style={{ transformOrigin: "left" }}
//                 />

//                 {/* Background Glow Effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   initial={{ scale: 0 }}
//                   whileHover={{ scale: 2 }}
//                   transition={{ duration: 0.6 }}
//                 />

//                 {/* Icon */}
//                 <motion.div
//                   className="relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:from-emerald-600 group-hover:to-emerald-500 transition-all duration-300"
//                   variants={iconVariants}
//                   whileHover="hover"
//                 >
//                   <motion.img
//                     src={specialty.icon}
//                     alt={specialty.title}
//                     className="w-11 h-11 object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
//                     style={{
//                       filter:
//                         "invert(31%) sepia(73%) saturate(1347%) hue-rotate(128deg) brightness(91%) contrast(88%)",
//                     }}
//                   />
//                 </motion.div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   <motion.h3
//                     className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300"
//                     layout
//                   >
//                     {specialty.title}
//                   </motion.h3>

//                   <motion.p
//                     className="text-neutral-600 text-sm leading-relaxed"
//                     layout
//                   >
//                     {specialty.description}
//                   </motion.p>
//                 </div>

//                 {/* Decorative Element */}
//                 <motion.div
//                   className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   initial={{ scale: 0 }}
//                   whileHover={{ scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* View All Button */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <motion.button
//             className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
//             whileHover={{ scale: 1.02, y: -2 }}
//             whileTap={{ scale: 0.98 }}
//             transition={{ duration: 0.2 }}
//           >
//             {/* Button Background Animation */}
//             <motion.div
//               className="absolute inset-0 bg-emerald-500"
//               initial={{ scale: 0, borderRadius: "50%" }}
//               whileHover={{ scale: 2.5, borderRadius: "0%" }}
//               transition={{ duration: 0.5 }}
//             />

//             <span className="relative z-10">View All Specialties</span>

//             <motion.svg
//               className="relative z-10 w-5 h-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               animate={{ x: [0, 4, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </motion.svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MedicalSpecialties;

"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

interface Specialty {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface SpecialtiesSectionProps {
  specialties: Specialty[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
} as const;

export default function MedicalSpecialities({
  specialties,
}: SpecialtiesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="w-full py-16 bg-background" ref={ref}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary text-sm font-medium mb-2 tracking-wide uppercase"
          >
            Available specialties
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold text-foreground"
          >
            Explore Doctors
            <br />
            from 36+ clinical
            <br />
            areas
          </motion.h2>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {specialties?.map((specialty, index) => (
            <motion.div key={specialty.id} variants={item} custom={index}>
              <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 border-border bg-card backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center h-full relative">
                  {/* Background Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{
                      scale: { duration: 0.3 },
                      rotate: { duration: 0.5 },
                    }}
                    className="w-20 h-20 mb-4 rounded-full bg-accent flex items-center justify-center relative overflow-hidden z-10"
                  >
                    <motion.div
                      className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                    >
                      <Image
                        src={specialty.icon}
                        alt={specialty.title}
                        width={48}
                        height={48}
                        className="relative z-10 object-contain drop-shadow-lg"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {specialty.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                    {specialty.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <motion.div
                    className="h-1 bg-linear-to-r from-primary to-primary/50 mt-4 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "3rem", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* More Card with Advanced Animation */}
          <motion.div variants={item}>
            <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 border-border bg-card cursor-pointer backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-60 relative">
                {/* Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Animated Dots */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 mb-4 rounded-full bg-accent flex items-center justify-center relative z-10"
                >
                  <div className="flex gap-1.5">
                    {[0, 0.15, 0.3].map((delay, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.3, 1],
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: delay,
                          ease: "easeInOut",
                        }}
                        className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/50"
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  More
                </motion.h3>

                <p className="text-sm text-muted-foreground relative z-10">
                  Explore many more...
                </p>

                {/* Animated Circle */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/20 rounded-lg"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
