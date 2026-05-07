import { CircleX } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
type EmptyStateProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  href?: string;
  variant?: "default" | "warning" | "destructive";
};
const EmptyState = ({
  icon,
  title,
  description,
  buttonText,
  href,
  variant,
}: EmptyStateProps) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full bg-card border rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-5">
          {icon}
        </div>

        <h1 className="text-2xl font-bold mb-3">{title}</h1>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <Button asChild variant="custom">
          <Link href={href}>Quay về trang chủ</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
