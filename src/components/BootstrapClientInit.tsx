"use client";
import { useEffect } from "react";

export const BootstrapClientInit = () => {
  useEffect(() => {
    // @ts-expect-error Import working just need to ignore type, could also create type but
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return null;
};
