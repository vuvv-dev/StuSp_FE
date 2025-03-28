import ExamRoomModule from "@/components/modules/ExamRoomModule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StuSp - latest",
  description: "Generated by create next app",
  icons: "/StuSp.svg",
};

export default function ExamRoom() {
  return <ExamRoomModule />;
}
