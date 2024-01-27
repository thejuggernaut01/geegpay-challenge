import React from "react";

const Invoice = () => {
  return (
    <>
      <section className="fixed inset-0 z-10 flex items-end justify-center bg-opacity-25 backdrop-brightness-50 md:items-center w-full">
        <article
          className={`border dark:border-slate-950 rounded-lg bg-background dark:bg-slate-950 mt-5 w-full md:w-[80%] lg:w-[60%] xl:w-[50%]`}
        >
          <div className="w-[95%] mx-auto space-y-3 mt-5 ">
            <div className="flex items-center justify-between">
              <h3 className="text-primary">Invoice</h3>
            </div>
          </div>
        </article>

        <article></article>
      </section>
    </>
  );
};

export default Invoice;
