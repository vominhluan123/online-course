"use client";

import { OrderStatus } from "@/types/order";
import { Check, CircleCheckBig, Copy } from "lucide-react";
import { useState } from "react";

type CheckoutCardProps = {
  checkoutDetails: {
    code: string;
    total: number;
    course: {
      title: string;
    };
    status: OrderStatus;
  };
};

export default function CheckoutCard({ checkoutDetails }: CheckoutCardProps) {
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);

      setTimeout(() => {
        setCopiedField("");
      }, 2000);
    } catch (error) {
      console.log("Copy thất bại", error);
    }
  };
  const renderStatusContent = () => {
    switch (checkoutDetails.status) {
      case OrderStatus.PENDING:
        return (
          <div className="space-y-2">
            <h1>Đặt hàng thành công!</h1>
            <p className="text-base font-normal text-muted-foreground">
              Vui lòng hoàn tất thanh toán để Admin có thể xác nhận đơn hàng.
            </p>
          </div>
        );

      case OrderStatus.PAID:
        return (
          <div className="space-y-2">
            <h1>Thanh toán thành công!</h1>
            <p className="text-base font-normal text-muted-foreground">
              Đơn hàng của bạn đã được xác nhận. Bạn có thể bắt đầu học ngay.
            </p>
          <div/>
        );

      case OrderStatus.CANCELLED:
        return (
          <div className="space-y-2">
            <h1>Đơn hàng đã bị hủy</h1>
            <p className="text-base font-normal text-muted-foreground">
              Đơn hàng này không còn hiệu lực.
            </p>
          </>
        );

      default:
        return null;
    }
  };
  return (
    <div className="container max-w-2xl mx-auto py-10 px-4">
      <div className="rounded-2xl border bg-background shadow-sm p-8 space-y-6">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CircleCheckBig className="h-9 w-9 text-green-600" />
          </div>

          <div className="text-3xl font-bold">{renderStatusContent()}</div>

          <p className="text-muted-foreground leading-relaxed">
            Cảm ơn bạn đã đặt mua khóa học{" "}
            <span className="font-semibold text-foreground">
              {checkoutDetails.course.title}
            </span>
            .
          </p>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-900 p-4 text-center space-y-2">
          <p className="text-sm text-muted-foreground">Nội dung chuyển khoản</p>

          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-bold tracking-wider">
              {checkoutDetails.code}
            </span>

            <button
              onClick={() =>
                handleCopy(checkoutDetails.code, "transfer-content")
              }
              className="rounded-md p-2 hover:bg-blue-200 dark:hover:bg-blue-900 transition"
            >
              {copiedField === "transfer-content" ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <Copy className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>

          <p className="text-sm text-muted-foreground">
            Vui lòng ghi đúng nội dung này để hệ thống xác nhận đơn hàng.
          </p>
        </div>

        <div className="rounded-xl border overflow-hidden">
          <div className="bg-muted px-4 py-3 font-semibold">
            Thông tin chuyển khoản
          </div>

          <div className="divide-y">
            <div className="flex justify-between px-4 py-3 items-center">
              <span className="text-muted-foreground">Số tài khoản</span>

              <div className="flex items-center gap-2">
                <span className="font-semibold">105003175318</span>

                <button
                  onClick={() => handleCopy("105003175318", "bank-account")}
                  className="rounded-md p-2 hover:bg-muted transition"
                >
                  {copiedField === "bank-account" ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between px-4 py-3">
              <span className="text-muted-foreground">Tên tài khoản</span>
              <span className="font-semibold">Vo Minh Luan</span>
            </div>

            <div className="flex justify-between px-4 py-3">
              <span className="text-muted-foreground">Ngân hàng</span>
              <span className="font-semibold">VietinBank</span>
            </div>

            <div className="flex justify-between px-4 py-3 bg-muted/40">
              <span className="text-muted-foreground">
                Số tiền cần thanh toán
              </span>

              <span className="text-xl font-bold text-red-500">
                {checkoutDetails.total.toLocaleString("vi-VN")} VNĐ
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground">
          Sau khi chuyển khoản thành công, hệ thống sẽ xác nhận đơn hàng. Nếu
          cần hỗ trợ, vui lòng liên hệ{" "}
          <span className="font-semibold text-foreground">
            Facebook: LuanMinh
          </span>
          .
        </div>
      </div>
    </div>
  );
}
