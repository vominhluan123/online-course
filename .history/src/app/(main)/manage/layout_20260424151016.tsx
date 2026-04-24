import { getUserInfo } from "@/lib/services/user.service";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) return redirect("/sign-in");
  const user = await getUserInfo({
    userId,
    charAt: function (pos: number): string {
      throw new Error("Function not implemented.");
    },
    charCodeAt: function (index: number): number {
      throw new Error("Function not implemented.");
    },
    concat: function (...strings: string[]): string {
      throw new Error("Function not implemented.");
    },
    indexOf: function (searchString: string, position?: number): number {
      throw new Error("Function not implemented.");
    },
    lastIndexOf: function (searchString: string, position?: number): number {
      throw new Error("Function not implemented.");
    },
    localeCompare: function (that: string): number {
      throw new Error("Function not implemented.");
    },
    match: function (regexp: string | RegExp): RegExpMatchArray | null {
      throw new Error("Function not implemented.");
    },
    replace: function (searchValue: string | RegExp, replaceValue: string): string {
      throw new Error("Function not implemented.");
    },
    search: function (regexp: string | RegExp): number {
      throw new Error("Function not implemented.");
    },
    slice: function (start?: number, end?: number): string {
      throw new Error("Function not implemented.");
    },
    split: function (separator: string | RegExp, limit?: number): string[] {
      throw new Error("Function not implemented.");
    },
    substring: function (start: number, end?: number): string {
      throw new Error("Function not implemented.");
    },
    toLowerCase: function (): string {
      throw new Error("Function not implemented.");
    },
    toLocaleLowerCase: function (locales?: string | string[]): string {
      throw new Error("Function not implemented.");
    },
    toUpperCase: function (): string {
      throw new Error("Function not implemented.");
    },
    toLocaleUpperCase: function (locales?: string | string[]): string {
      throw new Error("Function not implemented.");
    },
    trim: function (): string {
      throw new Error("Function not implemented.");
    },
    length: 0,
    substr: function (from: number, length?: number): string {
      throw new Error("Function not implemented.");
    },
    codePointAt: function (pos: number): number | undefined {
      throw new Error("Function not implemented.");
    },
    includes: function (searchString: string, position?: number): boolean {
      throw new Error("Function not implemented.");
    },
    endsWith: function (searchString: string, endPosition?: number): boolean {
      throw new Error("Function not implemented.");
    },
    normalize: function (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string {
      throw new Error("Function not implemented.");
    },
    repeat: function (count: number): string {
      throw new Error("Function not implemented.");
    },
    startsWith: function (searchString: string, position?: number): boolean {
      throw new Error("Function not implemented.");
    },
    anchor: function (name: string): string {
      throw new Error("Function not implemented.");
    },
    big: function (): string {
      throw new Error("Function not implemented.");
    },
    blink: function (): string {
      throw new Error("Function not implemented.");
    },
    bold: function (): string {
      throw new Error("Function not implemented.");
    },
    fixed: function (): string {
      throw new Error("Function not implemented.");
    },
    fontcolor: function (color: string): string {
      throw new Error("Function not implemented.");
    },
    fontsize: function (size: number): string {
      throw new Error("Function not implemented.");
    },
    italics: function (): string {
      throw new Error("Function not implemented.");
    },
    link: function (url: string): string {
      throw new Error("Function not implemented.");
    },
    small: function (): string {
      throw new Error("Function not implemented.");
    },
    strike: function (): string {
      throw new Error("Function not implemented.");
    },
    sub: function (): string {
      throw new Error("Function not implemented.");
    },
    sup: function (): string {
      throw new Error("Function not implemented.");
    },
    padStart: function (maxLength: number, fillString?: string): string {
      throw new Error("Function not implemented.");
    },
    padEnd: function (maxLength: number, fillString?: string): string {
      throw new Error("Function not implemented.");
    },
    trimEnd: function (): string {
      throw new Error("Function not implemented.");
    },
    trimStart: function (): string {
      throw new Error("Function not implemented.");
    },
    trimLeft: function (): string {
      throw new Error("Function not implemented.");
    },
    trimRight: function (): string {
      throw new Error("Function not implemented.");
    },
    matchAll: function (regexp: RegExp): RegExpStringIterator<RegExpExecArray> {
      throw new Error("Function not implemented.");
    },
    replaceAll: function (searchValue: string | RegExp, replaceValue: string): string {
      throw new Error("Function not implemented.");
    },
    at: function (index: number): string | undefined {
      throw new Error("Function not implemented.");
    },
    isWellFormed: function (): boolean {
      throw new Error("Function not implemented.");
    },
    toWellFormed: function (): string {
      throw new Error("Function not implemented.");
    },
    [Symbol.iterator]: function (): StringIterator<string> {
      throw new Error("Function not implemented.");
    }
  });
  console.log("🚀 ~ AdminLayout ~ user:", user);
  return <div>{children}</div>;
};

export default AdminLayout;
