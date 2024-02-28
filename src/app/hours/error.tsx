"use client";
import { ErrorView } from "@/features";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorView reset={reset} error={error} />;
}
