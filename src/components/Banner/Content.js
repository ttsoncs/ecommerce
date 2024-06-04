import React from "react";

import Separator from "@/components/Separator";

function Content({ content }) {
  const num_elements = content.length * 2 - 1;

  return (
    <>
      {Array(num_elements)
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

export default Content;
