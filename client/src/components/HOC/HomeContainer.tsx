// import React, { ReactElement } from "react"

import { FC } from "react";

const HomeContainer = (InputComponent: FC<any>) => (props: any) => {
    return (
      <div className="w-full max-w-[1024px] mt-[50px] flex flex-col gap-[30px] items-center mx-auto">
        <InputComponent {...props} />
      </div>
    );
};

export default HomeContainer;
