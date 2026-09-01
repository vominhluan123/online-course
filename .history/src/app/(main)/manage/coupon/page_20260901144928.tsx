import { Plus } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { getCoupon } from "@/actions/coupon/get-coupon";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Page = async () => {
  const couponData = await getCoupon();
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
          <Badge variant="link">{activeCount} đang hoạt động</Badge>
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
