import { ReactNode } from "react";

type HeadingProps = {
  classes?: string;
  children?: ReactNode;
};
export const H1 = ({ classes, children }: HeadingProps) => {
  return (
    <>
      <h1 className={`mb-2 mt-0 text-5xl font-medium leading-tight ${classes}`}>
        {children}
      </h1>
    </>
  );
};

export const H2 = ({ classes, children }: HeadingProps) => {
  return (
    <>
      <h1 className={`mb-2 mt-0 text-4xl font-medium leading-tight ${classes}`}>
        {children}
      </h1>
    </>
  );
};

export const H3 = ({ classes, children }: HeadingProps) => {
  return (
    <>
      <h1 className={`mb-2 mt-0 text-3xl font-medium leading-tight ${classes}`}>
        {children}
      </h1>
    </>
  );
};

export const H4 = ({ classes, children }: HeadingProps) => {
  return (
    <>
      <h1 className={`mb-2 mt-0 text-2xl font-medium leading-tight ${classes}`}>
        {children}
      </h1>
    </>
  );
};

export const H5 = ({ classes, children }: HeadingProps) => {
  return (
    <>
      <h1 className={`mb-2 mt-0 text-xl font-medium leading-tight ${classes}`}>
        {children}
      </h1>
    </>
  );
};

export const H6 = ({ classes, children }: HeadingProps) => {
  return (
    <>
      <h1
        className={`mb-2 mt-0 text-base font-medium leading-tight ${classes}`}
      >
        {children}
      </h1>
    </>
  );
};
