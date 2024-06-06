import React from "react";

import Separator from "@/components/Separator";

function CTA({ content }) {
  const size = content.length * 2 - 1;

  return (
    <>
      {Array(size)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              content[index / 2]
            ) : (
              <Separator gap={8}>|</Separator>
            )}
          </React.Fragment>
        ))}
    </>
  );
}

export default CTA;
