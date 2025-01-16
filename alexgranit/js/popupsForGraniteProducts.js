const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
      `;

  const closeModal = (event) => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === "Escape"
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, time);

      window.removeEventListener("keydown", closeModal);
    }
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    window.addEventListener("keydown", closeModal);
  };

  buttonElems.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalElem.addEventListener("click", closeModal);
};

modalController({
  modal: ".modalИГ1",
  btnOpen: ".section__buttonИГ1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ2",
  btnOpen: ".section__buttonИГ2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ3",
  btnOpen: ".section__buttonИГ3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ4",
  btnOpen: ".section__buttonИГ4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ5",
  btnOpen: ".section__buttonИГ5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ6",
  btnOpen: ".section__buttonИГ6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ7",
  btnOpen: ".section__buttonИГ7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ8",
  btnOpen: ".section__buttonИГ8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ9",
  btnOpen: ".section__buttonИГ9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ10",
  btnOpen: ".section__buttonИГ10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ11",
  btnOpen: ".section__buttonИГ11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ12",
  btnOpen: ".section__buttonИГ12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ13",
  btnOpen: ".section__buttonИГ13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ15",
  btnOpen: ".section__buttonИГ15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ16",
  btnOpen: ".section__buttonИГ16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ17",
  btnOpen: ".section__buttonИГ17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ18",
  btnOpen: ".section__buttonИГ18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ19",
  btnOpen: ".section__buttonИГ19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ20",
  btnOpen: ".section__buttonИГ20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ21",
  btnOpen: ".section__buttonИГ21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ22",
  btnOpen: ".section__buttonИГ22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ23",
  btnOpen: ".section__buttonИГ23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ24",
  btnOpen: ".section__buttonИГ24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ25",
  btnOpen: ".section__buttonИГ25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ26",
  btnOpen: ".section__buttonИГ26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ27",
  btnOpen: ".section__buttonИГ27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ28",
  btnOpen: ".section__buttonИГ28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ29",
  btnOpen: ".section__buttonИГ29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ30",
  btnOpen: ".section__buttonИГ30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ31",
  btnOpen: ".section__buttonИГ31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ32",
  btnOpen: ".section__buttonИГ32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ33",
  btnOpen: ".section__buttonИГ33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ34",
  btnOpen: ".section__buttonИГ34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ35",
  btnOpen: ".section__buttonИГ35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ36",
  btnOpen: ".section__buttonИГ36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ37",
  btnOpen: ".section__buttonИГ37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ38",
  btnOpen: ".section__buttonИГ38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ39",
  btnOpen: ".section__buttonИГ39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ40",
  btnOpen: ".section__buttonИГ40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ41",
  btnOpen: ".section__buttonИГ41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ42",
  btnOpen: ".section__buttonИГ42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ43",
  btnOpen: ".section__buttonИГ43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ44",
  btnOpen: ".section__buttonИГ44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ45",
  btnOpen: ".section__buttonИГ45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ46",
  btnOpen: ".section__buttonИГ46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ47",
  btnOpen: ".section__buttonИГ47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ48",
  btnOpen: ".section__buttonИГ48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ49",
  btnOpen: ".section__buttonИГ49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ50",
  btnOpen: ".section__buttonИГ50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ51",
  btnOpen: ".section__buttonИГ51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ52",
  btnOpen: ".section__buttonИГ52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ53",
  btnOpen: ".section__buttonИГ53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ54",
  btnOpen: ".section__buttonИГ54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ55",
  btnOpen: ".section__buttonИГ55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ56",
  btnOpen: ".section__buttonИГ56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ57",
  btnOpen: ".section__buttonИГ57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ58",
  btnOpen: ".section__buttonИГ58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ59",
  btnOpen: ".section__buttonИГ59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ60",
  btnOpen: ".section__buttonИГ60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ61",
  btnOpen: ".section__buttonИГ61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ62",
  btnOpen: ".section__buttonИГ62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ63",
  btnOpen: ".section__buttonИГ63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ64",
  btnOpen: ".section__buttonИГ64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ65",
  btnOpen: ".section__buttonИГ65",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ66",
  btnOpen: ".section__buttonИГ66",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ67",
  btnOpen: ".section__buttonИГ67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ68",
  btnOpen: ".section__buttonИГ68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ69",
  btnOpen: ".section__buttonИГ69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ70",
  btnOpen: ".section__buttonИГ70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ71",
  btnOpen: ".section__buttonИГ71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ72",
  btnOpen: ".section__buttonИГ72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ73",
  btnOpen: ".section__buttonИГ73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ74",
  btnOpen: ".section__buttonИГ74",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ75",
  btnOpen: ".section__buttonИГ75",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ76",
  btnOpen: ".section__buttonИГ76",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ77",
  btnOpen: ".section__buttonИГ77",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ78",
  btnOpen: ".section__buttonИГ78",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ79",
  btnOpen: ".section__buttonИГ79",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ80",
  btnOpen: ".section__buttonИГ80",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ81",
  btnOpen: ".section__buttonИГ81",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ82",
  btnOpen: ".section__buttonИГ82",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ83",
  btnOpen: ".section__buttonИГ83",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ84",
  btnOpen: ".section__buttonИГ84",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ85",
  btnOpen: ".section__buttonИГ85",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ86",
  btnOpen: ".section__buttonИГ86",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ87",
  btnOpen: ".section__buttonИГ87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ88",
  btnOpen: ".section__buttonИГ88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ89",
  btnOpen: ".section__buttonИГ89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ90",
  btnOpen: ".section__buttonИГ90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ91",
  btnOpen: ".section__buttonИГ91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ92",
  btnOpen: ".section__buttonИГ92",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ93",
  btnOpen: ".section__buttonИГ93",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ94",
  btnOpen: ".section__buttonИГ94",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ95",
  btnOpen: ".section__buttonИГ95",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ96",
  btnOpen: ".section__buttonИГ96",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ87",
  btnOpen: ".section__buttonИГ87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ88",
  btnOpen: ".section__buttonИГ88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ89",
  btnOpen: ".section__buttonИГ89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ90",
  btnOpen: ".section__buttonИГ90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ91",
  btnOpen: ".section__buttonИГ91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ92",
  btnOpen: ".section__buttonИГ92",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ93",
  btnOpen: ".section__buttonИГ93",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ94",
  btnOpen: ".section__buttonИГ94",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ95",
  btnOpen: ".section__buttonИГ95",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ96",
  btnOpen: ".section__buttonИГ96",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ97",
  btnOpen: ".section__buttonИГ97",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ98",
  btnOpen: ".section__buttonИГ98",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalИГ99",
  btnOpen: ".section__buttonИГ99",
  btnClose: ".modal__close",
});
