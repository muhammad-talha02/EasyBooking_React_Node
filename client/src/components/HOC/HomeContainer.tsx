// import React, { ReactElement } from "react"

import { FC } from "react";

const HomeContainer = (InputComponent: FC<any>) => (props: any) => {
    return (
      <div className="mt-[50px] flex flex-col gap-[30px] items-center">
        <InputComponent {...props} />
      </div>
    );
};

export default HomeContainer;
