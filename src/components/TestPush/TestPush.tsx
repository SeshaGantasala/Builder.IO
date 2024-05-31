import { BuilderContent } from "@builder.io/react";

export const TextPush = (props) => {
  return (
    <BuilderContent model="test-push">
      {(data, loading, fullContent) => {
        if (loading) {
          return <div>Loading...</div>;
        } else {
          return (
            <>
              <ul>
                {<div>{data.textpushmodel}</div>}
              </ul>
              {props.children}
            </>
          );
        }
      }}
    </BuilderContent>
  );
};