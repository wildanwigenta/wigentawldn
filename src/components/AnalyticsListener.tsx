"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "../lib/gtag";
import * as gtag from "../lib/gtag";

export default function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null;
}