// "use client";
// import { useEffect, useRef } from "react";
// import type { ReactNode, ElementType } from "react";

// interface JarallaxSectionProps {
//   children: ReactNode;
//   className?: string;

//   // HTML tag to use
//   as?: ElementType; // e.g., "section", "div", "article", "header", etc.

//   // Image/Video settings
//   imgSrc?: string;
//   videoSrc?: string; // YouTube or Vimeo URL

//   // Parallax settings
//   speed?: number; // -1.0 to 2.0 (0.5 is default)
//   type?: "scroll" | "scale" | "opacity" | "scroll-opacity" | "scale-opacity";

//   // Position settings
//   imgPosition?: string; // e.g., "50% 50%", "center center", "top left"
//   imgRepeat?: "no-repeat" | "repeat";
//   imgSize?: "cover" | "contain" | "auto" | string;

//   // Advanced settings
//   zIndex?: number;
//   disableParallax?: boolean | RegExp | (() => boolean);
//   disableVideo?: boolean | RegExp | (() => boolean);

//   // Custom overlay
//   overlayColor?: string;
//   overlayOpacity?: number;
// }

// const JarallaxSection = ({
//   children,
//   className = "",
//   as: Component = "section", // Default to section
//   imgSrc,
//   videoSrc,
//   speed = 0.5,
//   type = "scroll",
//   imgPosition = "50% 50%",
//   imgRepeat = "no-repeat",
//   imgSize = "cover",
//   zIndex = -100,
//   disableParallax,
//   disableVideo,
//   overlayColor = "rgba(0, 0, 0, 1)",
//   overlayOpacity = 0.8,
// }: JarallaxSectionProps) => {
//   const jarallaxRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     let destroyJarallax: (() => void) | null = null;

//     const initJarallax = async () => {
//       if (!jarallaxRef.current) return;

//       const { jarallax } = await import("jarallax");

//       jarallax(jarallaxRef.current, {
//         speed,
//         type,
//         imgSrc,
//         videoSrc,
//         imgPosition,
//         imgRepeat,
//         imgSize,
//         zIndex,
//         disableParallax,
//         disableVideo,
//       });

//       destroyJarallax = () => {
//         jarallax(jarallaxRef.current as HTMLElement, "destroy");
//       };
//     };

//     initJarallax();

//     return () => {
//       destroyJarallax?.();
//     };
//   }, [
//     speed,
//     type,
//     imgSrc,
//     videoSrc,
//     imgPosition,
//     imgRepeat,
//     imgSize,
//     zIndex,
//     disableParallax,
//     disableVideo,
//   ]);


//   return (
//     <Component ref={jarallaxRef} className={`jarallax ${className}`}>
//       {overlayColor && (
//         <div
//           className="jarallax-overlay"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: overlayColor,
//             opacity: overlayOpacity,
//             zIndex: 0,
//           }}
//         />
//       )}
//       <div className="jarallax-content" style={{ position: "relative", zIndex: 1 }}>
//         {children}
//       </div>
//     </Component>
//   );
// }


// export default JarallaxSection;





"use client";
import { useEffect, useRef } from "react";
import type { ReactNode, ElementType } from "react";

interface JarallaxSectionProps {
  children: ReactNode;
  className?: string;

  // HTML tag to use
  as?: ElementType;

  // Image/Video settings
  imgSrc?: string;
  videoSrc?: string;

  // Parallax settings
  speed?: number; // -1.0 to 2.0 (0.5 is default)
  type?: "scroll" | "scale" | "opacity" | "scroll-opacity" | "scale-opacity";

  // Position settings
  imgPosition?: string;
  imgRepeat?: "no-repeat" | "repeat";
  imgSize?: "cover" | "contain" | "auto" | string;

  // Advanced settings
  zIndex?: number;
  disableParallax?: boolean | RegExp | (() => boolean);
  disableVideo?: boolean | RegExp | (() => boolean);

  // Custom overlay
  overlayColor?: string;
  overlayOpacity?: number;

  // Additional accessibility
  ariaLabel?: string;
  role?: string;
}

const JarallaxSection = ({
  children,
  className = "",
  as = "section",
  imgSrc,
  videoSrc,
  speed = 0.5,
  type = "scroll",
  imgPosition = "50% 50%",
  imgRepeat = "no-repeat",
  imgSize = "cover",
  zIndex = -100,
  disableParallax,
  disableVideo,
  overlayColor = "rgba(0, 0, 0, 1)",
  overlayOpacity = 0.8,
  ariaLabel,
  role,
}: JarallaxSectionProps) => {
  const jarallaxRef = useRef<HTMLElement>(null);
  const Component = as as ElementType;

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    let destroyJarallax: (() => void) | null = null;

    const initJarallax = async () => {
      if (!jarallaxRef.current) return;

      try {
        const { jarallax } = await import("jarallax");

        // Initialize jarallax
        jarallax(jarallaxRef.current, {
          speed,
          type,
          imgSrc,
          videoSrc,
          imgPosition,
          imgRepeat,
          imgSize,
          zIndex,
          disableParallax,
          disableVideo,
        });

        destroyJarallax = () => {
          if (jarallaxRef.current) {
            jarallax(jarallaxRef.current, "destroy");
          }
        };
      } catch (error) {
        console.error("Failed to initialize Jarallax:", error);
      }
    };

    initJarallax();

    return () => {
      destroyJarallax?.();
    };
  }, [
    speed,
    type,
    imgSrc,
    videoSrc,
    imgPosition,
    imgRepeat,
    imgSize,
    zIndex,
    disableParallax,
    disableVideo,
  ]);

  return (
    <Component
      ref={jarallaxRef}
      className={`jarallax ${className}`.trim()}
      aria-label={ariaLabel}
      role={role}
      style={{ position: "relative" }}
    >
      {overlayColor && (
        <div
          className="jarallax-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            zIndex: 1,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
      )}
      <div
        className="jarallax-content"
        style={{ position: "relative", zIndex: 2 }}
      >
        {children}
      </div>
    </Component>
  );
};

export default JarallaxSection;