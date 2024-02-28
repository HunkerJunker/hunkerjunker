import React from "react";
import { Button, Container } from "./ErrorView.style";
import { MainSection } from "@/components";
import { PrimaryText, PrimaryTitle } from "@/ui";

export const ErrorView = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(error);
  return (
    <Container>
      <PrimaryTitle title='Something went wrong' />
      <PrimaryText text={error.message} />
      <Button onClick={() => reset()}>Try again</Button>
    </Container>
  );
};
