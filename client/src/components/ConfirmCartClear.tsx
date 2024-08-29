import React, { MouseEventHandler, ReactNode } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/confirm-dialog";

const ConfirmCartClear = ({
  title,
  description,
  children,
  onClick,
}: {
  title: string;
  description: string;
  children: ReactNode;
  onClick: MouseEventHandler;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="border-2 rounded-lg outline-none border-slate-300 max-w-96 bg-bg">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border border-gray-300 outline-none bg-bg hover:bg-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="text-white bg-red-600 outline-none hover:bg-red-700"
            onClick={onClick}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmCartClear;
