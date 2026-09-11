"use client";

import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const RefreshButton = () => {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);

    router.refresh();

    // Chỉ để icon có cảm giác đang refresh
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleRefresh}
      disabled={isRefreshing}
      title="Làm mới dữ liệu"
      cla
    >
      <RefreshCw className={isRefreshing ? "animate-spin" : ""} />
    </Button>
  );
};
