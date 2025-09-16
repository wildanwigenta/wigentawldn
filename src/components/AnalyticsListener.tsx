"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "../lib/gtag";
import * as gtag from "../lib/gtag";


// export default function AnalyticsListener() {
//   useEffect(() => {
    
//     console.log("Google Analytics ID di production:", GA_MEASUREMENT_ID);

//     if (typeof window !== "undefined") {
//       if (typeof window.gtag === "function") {
//         console.log("window.gtag sudah terdefinisi");
        
//         window.gtag("event", "debug_test_event", {
//           debug_mode: true,
//         });
//       } else {
//         console.warn("window.gtag belum tersedia");
//       }
//     }
//   }, []);

//   return null;
// }

export default function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null;
}