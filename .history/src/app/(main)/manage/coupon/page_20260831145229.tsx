import { Plus } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CouponTableType } from "@/types/coupon";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getCoupon } from "@/actions/coupon/get-coupon";

const couponData: CouponTableType[] = [
  {
    _id: "1",
    title: "Ưu đãi khai giảng",
    code: "WELCOME20",
    startDate: "2026-08-01",
    endDate: "2026-09-30",
    type: "percent",
    value: 20,
    active: true,
    maxUses: 100,
    usedCount: 24,
    courseTitle: "Next.js Pro",
  },
  {
    _id: "2",
    title: "Giảm giá học viên cũ",
    code: "LOYAL300K",
    startDate: "2026-08-10",
    endDate: "2026-12-31",
    type: "amount",
    value: 300000,
    active: true,
    maxUses: 50,
    usedCount: 8,
    courseTitle: "React Foundation",
  },
  {
    _id: "3",
    title: "Flash sale cuối tuần",
    code: "WEEKEND15",
    startDate: "2026-07-01",
    endDate: "2026-07-07",
    type: "percent",
    value: 15,
    active: false,
    maxUses: 30,
    usedCount: 30,
    courseTitle: "TypeScript Mastery",
  },
];

const Page =async () => {
  const couponData = await getCoupon({}) 
  const activeCount = couponData.filter((coupon) => coupon.active).length;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Tạo và theo dõi mã giảm giá áp dụng cho từng khóa học.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary">{activeCount} đang active</Badge>
          <Link href="/manage/coupon/new">
            <Button>
              <Plus data-icon="inline-start" />
              Tạo coupon
            </Button>
          </Link>
        </div>
      </div>

      <DataTable columns={columns} data={couponData} searchKey="title" />
    </div>
  );
};

export default Page;
