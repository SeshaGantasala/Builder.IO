import { BuilderContent } from "@builder.io/react";

export const TestPush = (props) => {
  return (
    <BuilderContent model="test-push">
      {(data, loading, fullContent) => {
        if (loading) {
          return <div>Loading...</div>;
        } else {
          return (
            <>
              <ul>
                {<div>{data.testpushmodel}</div>}
              </ul>
              {props.children}
            </>
          );
        }
      }}
    </BuilderContent>
  );
};