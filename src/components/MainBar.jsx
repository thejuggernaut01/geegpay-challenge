"use client";

import React, { useState } from "react";
import Modal from "./ModalComponent";

const MainBar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="w-[90%] mx-auto mt-3">
        <h1>Geegpay Fitness Dashboard Challenge</h1>
      </section>

      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default MainBar;
