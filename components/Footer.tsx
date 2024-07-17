import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { logout } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ user }: { user?: User }) => {
  const router = useRouter();
  if (!user) return null;
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full cursor-pointer items-center justify-between gap-2 py-6">
        <div className="flex size-10 min-w-10 items-center justify-center rounded-full bg-gray-200">
          <span className="font-semibold text-xl">{user.firstName[0]}</span>
        </div>
        <div className="flex flex-col w-full flex-1 pr-10">
          <span className="truncate">
            {user.firstName}&nbsp;{user.lastName}
          </span>
          <span className="truncate">{user.email}</span>
        </div>
      </div>
      <Button
        type="button"
        variant="ghost"
        onClick={() => {
          logout();
          router.push("/sign-in");
        }}
        className="text-sm rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-700"
      >
        Logout
      </Button>
    </div>
  );
};

export default Footer;