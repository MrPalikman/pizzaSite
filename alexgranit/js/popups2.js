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
  modal: ".modal1",
  btnOpen: ".section__button1",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modal2",
  btnOpen: ".section__button2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal3",
  btnOpen: ".section__button3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal4",
  btnOpen: ".section__button4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal5",
  btnOpen: ".section__button5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal6",
  btnOpen: ".section__button6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal7",
  btnOpen: ".section__button7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal8",
  btnOpen: ".section__button8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal9",
  btnOpen: ".section__button9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal10",
  btnOpen: ".section__button10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal11",
  btnOpen: ".section__button11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal12",
  btnOpen: ".section__button12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal13",
  btnOpen: ".section__button13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal14",
  btnOpen: ".section__button14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal15",
  btnOpen: ".section__button15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal16",
  btnOpen: ".section__button16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal17",
  btnOpen: ".section__button17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal18",
  btnOpen: ".section__button18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal19",
  btnOpen: ".section__button19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal20",
  btnOpen: ".section__button20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal21",
  btnOpen: ".section__button21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal22",
  btnOpen: ".section__button22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal23",
  btnOpen: ".section__button23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal24",
  btnOpen: ".section__button24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal25",
  btnOpen: ".section__button25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal26",
  btnOpen: ".section__button26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal27",
  btnOpen: ".section__button27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal28",
  btnOpen: ".section__button28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal28",
  btnOpen: ".section__button28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal29",
  btnOpen: ".section__button29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal30",
  btnOpen: ".section__button30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal31",
  btnOpen: ".section__button31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal32",
  btnOpen: ".section__button32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal33",
  btnOpen: ".section__button33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal34",
  btnOpen: ".section__button34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal35",
  btnOpen: ".section__button35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal36",
  btnOpen: ".section__button36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal37",
  btnOpen: ".section__button37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal38",
  btnOpen: ".section__button38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal39",
  btnOpen: ".section__button39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal40",
  btnOpen: ".section__button40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal41",
  btnOpen: ".section__button41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal42",
  btnOpen: ".section__button42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal43",
  btnOpen: ".section__button43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal44",
  btnOpen: ".section__button44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal45",
  btnOpen: ".section__button45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal46",
  btnOpen: ".section__button46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal47",
  btnOpen: ".section__button47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal48",
  btnOpen: ".section__button48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal49",
  btnOpen: ".section__button49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal50",
  btnOpen: ".section__button50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal51",
  btnOpen: ".section__button51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal52",
  btnOpen: ".section__button52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal53",
  btnOpen: ".section__button53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal54",
  btnOpen: ".section__button54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal55",
  btnOpen: ".section__button55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal56",
  btnOpen: ".section__button56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal57",
  btnOpen: ".section__button57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal57",
  btnOpen: ".section__button57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal58",
  btnOpen: ".section__button58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal58",
  btnOpen: ".section__button58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal59",
  btnOpen: ".section__button59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal60",
  btnOpen: ".section__button60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal61",
  btnOpen: ".section__button61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal62",
  btnOpen: ".section__button62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal63",
  btnOpen: ".section__button63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal64",
  btnOpen: ".section__button64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal65",
  btnOpen: ".section__button65",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal66",
  btnOpen: ".section__button66",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal67",
  btnOpen: ".section__button67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal68",
  btnOpen: ".section__button68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal69",
  btnOpen: ".section__button69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal70",
  btnOpen: ".section__button70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal71",
  btnOpen: ".section__button71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal72",
  btnOpen: ".section__button72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal73",
  btnOpen: ".section__button73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal74",
  btnOpen: ".section__button74",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal75",
  btnOpen: ".section__button75",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal76",
  btnOpen: ".section__button76",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal77",
  btnOpen: ".section__button77",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal78",
  btnOpen: ".section__button78",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal79",
  btnOpen: ".section__button79",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal80",
  btnOpen: ".section__button80",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal81",
  btnOpen: ".section__button81",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal82",
  btnOpen: ".section__button82",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal83",
  btnOpen: ".section__button83",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal84",
  btnOpen: ".section__button84",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal85",
  btnOpen: ".section__button85",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal86",
  btnOpen: ".section__button86",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal87",
  btnOpen: ".section__button87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal88",
  btnOpen: ".section__button88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal89",
  btnOpen: ".section__button89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal90",
  btnOpen: ".section__button90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal91",
  btnOpen: ".section__button91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal92",
  btnOpen: ".section__button92",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal93",
  btnOpen: ".section__button93",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal94",
  btnOpen: ".section__button94",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal95",
  btnOpen: ".section__button95",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal96",
  btnOpen: ".section__button96",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal97",
  btnOpen: ".section__button97",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal98",
  btnOpen: ".section__button98",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal99",
  btnOpen: ".section__button99",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal100",
  btnOpen: ".section__button100",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal101",
  btnOpen: ".section__button101",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal102",
  btnOpen: ".section__button102",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal103",
  btnOpen: ".section__button103",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal104",
  btnOpen: ".section__button104",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal105",
  btnOpen: ".section__button105",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal106",
  btnOpen: ".section__button106",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal107",
  btnOpen: ".section__button107",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal108",
  btnOpen: ".section__button108",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal109",
  btnOpen: ".section__button109",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal110",
  btnOpen: ".section__button110",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal111",
  btnOpen: ".section__button111",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal112",
  btnOpen: ".section__button112",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal113",
  btnOpen: ".section__button113",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal114",
  btnOpen: ".section__button114",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal115",
  btnOpen: ".section__button115",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal116",
  btnOpen: ".section__button116",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal117",
  btnOpen: ".section__button117",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal118",
  btnOpen: ".section__button118",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal119",
  btnOpen: ".section__button119",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal120",
  btnOpen: ".section__button120",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal121",
  btnOpen: ".section__button121",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal122",
  btnOpen: ".section__button122",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal123",
  btnOpen: ".section__button123",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal124",
  btnOpen: ".section__button124",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal125",
  btnOpen: ".section__button125",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal126",
  btnOpen: ".section__button126",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal127",
  btnOpen: ".section__button127",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal128",
  btnOpen: ".section__button128",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal129",
  btnOpen: ".section__button129",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal130",
  btnOpen: ".section__button130",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal131",
  btnOpen: ".section__button131",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal132",
  btnOpen: ".section__button132",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal133",
  btnOpen: ".section__button133",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal134",
  btnOpen: ".section__button134",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal135",
  btnOpen: ".section__button135",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal136",
  btnOpen: ".section__button136",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal137",
  btnOpen: ".section__button137",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal138",
  btnOpen: ".section__button138",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal139",
  btnOpen: ".section__button139",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal140",
  btnOpen: ".section__button140",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal141",
  btnOpen: ".section__button141",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal142",
  btnOpen: ".section__button142",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal143",
  btnOpen: ".section__button143",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal144",
  btnOpen: ".section__button144",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal145",
  btnOpen: ".section__button145",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal146",
  btnOpen: ".section__button146",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal147",
  btnOpen: ".section__button147",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal148",
  btnOpen: ".section__button148",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal149",
  btnOpen: ".section__button149",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal150",
  btnOpen: ".section__button150",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal151",
  btnOpen: ".section__button151",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal152",
  btnOpen: ".section__button152",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal153",
  btnOpen: ".section__button153",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal154",
  btnOpen: ".section__button154",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal155",
  btnOpen: ".section__button155",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal156",
  btnOpen: ".section__button156",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal157",
  btnOpen: ".section__button157",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal158",
  btnOpen: ".section__button158",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal159",
  btnOpen: ".section__button159",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal160",
  btnOpen: ".section__button160",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal161",
  btnOpen: ".section__button161",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal162",
  btnOpen: ".section__button163",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal164",
  btnOpen: ".section__button164",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal165",
  btnOpen: ".section__button165",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal166",
  btnOpen: ".section__button166",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal167",
  btnOpen: ".section__button167",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal168",
  btnOpen: ".section__button168",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal169",
  btnOpen: ".section__button169",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal170",
  btnOpen: ".section__button170",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal171",
  btnOpen: ".section__button171",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal172",
  btnOpen: ".section__button172",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal173",
  btnOpen: ".section__button173",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal174",
  btnOpen: ".section__button174",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal175",
  btnOpen: ".section__button175",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal176",
  btnOpen: ".section__button176",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal177",
  btnOpen: ".section__button177",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal178",
  btnOpen: ".section__button178",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal179",
  btnOpen: ".section__button179",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal180",
  btnOpen: ".section__button180",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal190",
  btnOpen: ".section__button190",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal191",
  btnOpen: ".section__button191",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modal192",
  btnOpen: ".section__button192",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp1",
  btnOpen: ".section__buttonKp1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp2",
  btnOpen: ".section__buttonKp2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp3",
  btnOpen: ".section__buttonKp3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp4",
  btnOpen: ".section__buttonKp4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp5",
  btnOpen: ".section__buttonKp5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp6",
  btnOpen: ".section__buttonKp6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp7",
  btnOpen: ".section__buttonKp7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp8",
  btnOpen: ".section__buttonKp8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp9",
  btnOpen: ".section__buttonKp9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp10",
  btnOpen: ".section__buttonKp10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp11",
  btnOpen: ".section__buttonKp11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp12",
  btnOpen: ".section__buttonKp12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp13",
  btnOpen: ".section__buttonKp13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp14",
  btnOpen: ".section__buttonKp14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp15",
  btnOpen: ".section__buttonKp15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp16",
  btnOpen: ".section__buttonKp16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp17",
  btnOpen: ".section__buttonKp17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp18",
  btnOpen: ".section__buttonKp18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp19",
  btnOpen: ".section__buttonKp19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp20",
  btnOpen: ".section__buttonKp20",
  btnClose: ".modal__close",
});
// modalController({
//   modal: ".modalKp21",
//   btnOpen: ".section__buttonKp21",
//   btnClose: ".modal__close",
// });
modalController({
  modal: ".modalKp22",
  btnOpen: ".section__buttonKp22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp23",
  btnOpen: ".section__buttonKp23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp24",
  btnOpen: ".section__buttonKp24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp25",
  btnOpen: ".section__buttonKp25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp26",
  btnOpen: ".section__buttonKp26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp27",
  btnOpen: ".section__buttonKp27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp28",
  btnOpen: ".section__buttonKp28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp29",
  btnOpen: ".section__buttonKp29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp30",
  btnOpen: ".section__buttonKp30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp31",
  btnOpen: ".section__buttonKp31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp32",
  btnOpen: ".section__buttonKp32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp33",
  btnOpen: ".section__buttonKp33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp34",
  btnOpen: ".section__buttonKp34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp35",
  btnOpen: ".section__buttonKp35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp36",
  btnOpen: ".section__buttonKp36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp37",
  btnOpen: ".section__buttonKp37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp38",
  btnOpen: ".section__buttonKp38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp39",
  btnOpen: ".section__buttonKp39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp40",
  btnOpen: ".section__buttonKp40",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalР1",
  btnOpen: ".section__buttonР1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР2",
  btnOpen: ".section__buttonР2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР3",
  btnOpen: ".section__buttonР3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР4",
  btnOpen: ".section__buttonР4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР5",
  btnOpen: ".section__buttonР5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР6",
  btnOpen: ".section__buttonР6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР7",
  btnOpen: ".section__buttonР7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР8",
  btnOpen: ".section__buttonР8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР9",
  btnOpen: ".section__buttonР9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР10",
  btnOpen: ".section__buttonР10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР11",
  btnOpen: ".section__buttonР11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР12",
  btnOpen: ".section__buttonР12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР13",
  btnOpen: ".section__buttonР13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР14",
  btnOpen: ".section__buttonР14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР15",
  btnOpen: ".section__buttonР15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР16",
  btnOpen: ".section__buttonР16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР17",
  btnOpen: ".section__buttonР17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР18",
  btnOpen: ".section__buttonР18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР19",
  btnOpen: ".section__buttonР19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР20",
  btnOpen: ".section__buttonР20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР21",
  btnOpen: ".section__buttonР21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР22",
  btnOpen: ".section__buttonР22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР23",
  btnOpen: ".section__buttonР23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР24",
  btnOpen: ".section__buttonР24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР25",
  btnOpen: ".section__buttonР25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР26",
  btnOpen: ".section__buttonР26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР27",
  btnOpen: ".section__buttonР27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР28",
  btnOpen: ".section__buttonР28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР29",
  btnOpen: ".section__buttonР29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР30",
  btnOpen: ".section__buttonР30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР31",
  btnOpen: ".section__buttonР31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР32",
  btnOpen: ".section__buttonР32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР33",
  btnOpen: ".section__buttonР33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР34",
  btnOpen: ".section__buttonР34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР35",
  btnOpen: ".section__buttonР35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР36",
  btnOpen: ".section__buttonР36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР37",
  btnOpen: ".section__buttonР37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР38",
  btnOpen: ".section__buttonР38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР39",
  btnOpen: ".section__buttonР39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР40",
  btnOpen: ".section__buttonР40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР41",
  btnOpen: ".section__buttonР41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР42",
  btnOpen: ".section__buttonР42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР43",
  btnOpen: ".section__buttonР43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР44",
  btnOpen: ".section__buttonР44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР45",
  btnOpen: ".section__buttonР45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР46",
  btnOpen: ".section__buttonР46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР47",
  btnOpen: ".section__buttonР47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР48",
  btnOpen: ".section__buttonР48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР49",
  btnOpen: ".section__buttonР49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР50",
  btnOpen: ".section__buttonР50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР51",
  btnOpen: ".section__buttonР51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР5253",
  btnOpen: ".section__buttonР5253",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР54",
  btnOpen: ".section__buttonР54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР55",
  btnOpen: ".section__buttonР55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР56",
  btnOpen: ".section__buttonР56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР57",
  btnOpen: ".section__buttonР57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР58",
  btnOpen: ".section__buttonР58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР59",
  btnOpen: ".section__buttonР59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР60",
  btnOpen: ".section__buttonР60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalР61",
  btnOpen: ".section__buttonР61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp34",
  btnOpen: ".section__buttonKp34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp35",
  btnOpen: ".section__buttonKp35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp36",
  btnOpen: ".section__buttonKp36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp37",
  btnOpen: ".section__buttonKp37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp38",
  btnOpen: ".section__buttonKp38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp39",
  btnOpen: ".section__buttonKp39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp40",
  btnOpen: ".section__buttonKp40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp30",
  btnOpen: ".section__buttonKp30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp31",
  btnOpen: ".section__buttonKp31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp32",
  btnOpen: ".section__buttonKp32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp33",
  btnOpen: ".section__buttonKp33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp34",
  btnOpen: ".section__buttonKp34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp35",
  btnOpen: ".section__buttonKp35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp36",
  btnOpen: ".section__buttonKp36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp37",
  btnOpen: ".section__buttonKp37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp38",
  btnOpen: ".section__buttonKp38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp39",
  btnOpen: ".section__buttonKp39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalKp40",
  btnOpen: ".section__buttonKp40",
  btnClose: ".modal__close",
});

// --------------------------gorizontal-----------------------------------------

modalController({
  modal: ".modalГ1",
  btnOpen: ".section__buttonГ1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ2",
  btnOpen: ".section__buttonГ2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ3",
  btnOpen: ".section__buttonГ3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ4",
  btnOpen: ".section__buttonГ4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ5",
  btnOpen: ".section__buttonГ5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ6",
  btnOpen: ".section__buttonГ6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ7",
  btnOpen: ".section__buttonГ7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ8",
  btnOpen: ".section__buttonГ8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ9",
  btnOpen: ".section__buttonГ9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ10",
  btnOpen: ".section__buttonГ10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ11",
  btnOpen: ".section__buttonГ11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ12",
  btnOpen: ".section__buttonГ12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ13",
  btnOpen: ".section__buttonГ13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ14",
  btnOpen: ".section__buttonГ14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ15",
  btnOpen: ".section__buttonГ15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ16",
  btnOpen: ".section__buttonГ16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ17",
  btnOpen: ".section__buttonГ17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ18",
  btnOpen: ".section__buttonГ18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ19",
  btnOpen: ".section__buttonГ19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ20",
  btnOpen: ".section__buttonГ20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ21",
  btnOpen: ".section__buttonГ21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ22",
  btnOpen: ".section__buttonГ22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ23",
  btnOpen: ".section__buttonГ23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ24",
  btnOpen: ".section__buttonГ24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ25",
  btnOpen: ".section__buttonГ25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ26",
  btnOpen: ".section__buttonГ26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ27",
  btnOpen: ".section__buttonГ27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ28",
  btnOpen: ".section__buttonГ28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ29",
  btnOpen: ".section__buttonГ29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ30",
  btnOpen: ".section__buttonГ30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ31",
  btnOpen: ".section__buttonГ31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ32",
  btnOpen: ".section__buttonГ32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ33",
  btnOpen: ".section__buttonГ33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ34",
  btnOpen: ".section__buttonГ34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ35",
  btnOpen: ".section__buttonГ35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ36",
  btnOpen: ".section__buttonГ36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ37",
  btnOpen: ".section__buttonГ37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ38",
  btnOpen: ".section__buttonГ38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ39",
  btnOpen: ".section__buttonГ39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ40",
  btnOpen: ".section__buttonГ40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ41",
  btnOpen: ".section__buttonГ41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ42",
  btnOpen: ".section__buttonГ42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ43",
  btnOpen: ".section__buttonГ43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ44",
  btnOpen: ".section__buttonГ44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ45",
  btnOpen: ".section__buttonГ45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ46",
  btnOpen: ".section__buttonГ46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ47",
  btnOpen: ".section__buttonГ47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ48",
  btnOpen: ".section__buttonГ48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ49",
  btnOpen: ".section__buttonГ49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ50",
  btnOpen: ".section__buttonГ50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ51",
  btnOpen: ".section__buttonГ51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ52",
  btnOpen: ".section__buttonГ52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ53",
  btnOpen: ".section__buttonГ53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ54",
  btnOpen: ".section__buttonГ54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ55",
  btnOpen: ".section__buttonГ55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ56",
  btnOpen: ".section__buttonГ56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ57",
  btnOpen: ".section__buttonГ57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ58",
  btnOpen: ".section__buttonГ58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ59",
  btnOpen: ".section__buttonГ59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ60",
  btnOpen: ".section__buttonГ60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ61",
  btnOpen: ".section__buttonГ61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ62",
  btnOpen: ".section__buttonГ62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ63",
  btnOpen: ".section__buttonГ63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ64",
  btnOpen: ".section__buttonГ64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ65",
  btnOpen: ".section__buttonГ65",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ66",
  btnOpen: ".section__buttonГ66",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ67",
  btnOpen: ".section__buttonГ67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ68",
  btnOpen: ".section__buttonГ68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ69",
  btnOpen: ".section__buttonГ69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ70",
  btnOpen: ".section__buttonГ70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ71",
  btnOpen: ".section__buttonГ71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ72",
  btnOpen: ".section__buttonГ72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ73",
  btnOpen: ".section__buttonГ73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ74",
  btnOpen: ".section__buttonГ74",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ75",
  btnOpen: ".section__buttonГ75",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ76",
  btnOpen: ".section__buttonГ76",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ77",
  btnOpen: ".section__buttonГ77",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ78",
  btnOpen: ".section__buttonГ78",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ79",
  btnOpen: ".section__buttonГ79",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ80",
  btnOpen: ".section__buttonГ80",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ81",
  btnOpen: ".section__buttonГ81",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ82",
  btnOpen: ".section__buttonГ82",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ83",
  btnOpen: ".section__buttonГ83",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ84",
  btnOpen: ".section__buttonГ84",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ85",
  btnOpen: ".section__buttonГ85",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ86",
  btnOpen: ".section__buttonГ86",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ87",
  btnOpen: ".section__buttonГ87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ88",
  btnOpen: ".section__buttonГ88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ89",
  btnOpen: ".section__buttonГ89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ90",
  btnOpen: ".section__buttonГ90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ91",
  btnOpen: ".section__buttonГ91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ92",
  btnOpen: ".section__buttonГ92",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ93",
  btnOpen: ".section__buttonГ93",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ94",
  btnOpen: ".section__buttonГ94",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ95",
  btnOpen: ".section__buttonГ95",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ96",
  btnOpen: ".section__buttonГ96",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ97",
  btnOpen: ".section__buttonГ97",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ98",
  btnOpen: ".section__buttonГ98",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ99",
  btnOpen: ".section__buttonГ99",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ100",
  btnOpen: ".section__buttonГ100",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ101",
  btnOpen: ".section__buttonГ101",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ102",
  btnOpen: ".section__buttonГ102",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ103",
  btnOpen: ".section__buttonГ103",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ104",
  btnOpen: ".section__buttonГ104",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ105",
  btnOpen: ".section__buttonГ105",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ106",
  btnOpen: ".section__buttonГ106",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ107",
  btnOpen: ".section__buttonГ107",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ108",
  btnOpen: ".section__buttonГ108",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ109",
  btnOpen: ".section__buttonГ109",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ110",
  btnOpen: ".section__buttonГ110",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ111",
  btnOpen: ".section__buttonГ111",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ112",
  btnOpen: ".section__buttonГ112",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ113",
  btnOpen: ".section__buttonГ113",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ114",
  btnOpen: ".section__buttonГ114",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ115",
  btnOpen: ".section__buttonГ115",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ116",
  btnOpen: ".section__buttonГ116",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ117",
  btnOpen: ".section__buttonГ117",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ118",
  btnOpen: ".section__buttonГ118",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ119",
  btnOpen: ".section__buttonГ119",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ120",
  btnOpen: ".section__buttonГ120",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ121",
  btnOpen: ".section__buttonГ121",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ122",
  btnOpen: ".section__buttonГ122",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ123",
  btnOpen: ".section__buttonГ123",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ124",
  btnOpen: ".section__buttonГ124",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ125",
  btnOpen: ".section__buttonГ125",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ126",
  btnOpen: ".section__buttonГ126",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ127",
  btnOpen: ".section__buttonГ127",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalГ128",
  btnOpen: ".section__buttonГ128",
  btnClose: ".modal__close",
});
//-------------------------------------------------------------------exclusive--------------------------------------------
modalController({
  modal: ".modalЭП1",
  btnOpen: ".section__buttonЭП1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП2",
  btnOpen: ".section__buttonЭП2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП3",
  btnOpen: ".section__buttonЭП3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП4",
  btnOpen: ".section__buttonЭП4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП5",
  btnOpen: ".section__buttonЭП5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП6",
  btnOpen: ".section__buttonЭП6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП7",
  btnOpen: ".section__buttonЭП7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП8",
  btnOpen: ".section__buttonЭП8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП9",
  btnOpen: ".section__buttonЭП9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП10",
  btnOpen: ".section__buttonЭП10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП11",
  btnOpen: ".section__buttonЭП11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП12",
  btnOpen: ".section__buttonЭП12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП13",
  btnOpen: ".section__buttonЭП13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП13а",
  btnOpen: ".section__buttonЭП13а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП14",
  btnOpen: ".section__buttonЭП14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП15",
  btnOpen: ".section__buttonЭП15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП16",
  btnOpen: ".section__buttonЭП16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП17",
  btnOpen: ".section__buttonЭП17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП18",
  btnOpen: ".section__buttonЭП18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП19",
  btnOpen: ".section__buttonЭП19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП20",
  btnOpen: ".section__buttonЭП20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП21",
  btnOpen: ".section__buttonЭП21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП22",
  btnOpen: ".section__buttonЭП22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП23",
  btnOpen: ".section__buttonЭП23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП24",
  btnOpen: ".section__buttonЭП24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП25",
  btnOpen: ".section__buttonЭП25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП26",
  btnOpen: ".section__buttonЭП26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП27",
  btnOpen: ".section__buttonЭП27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП28",
  btnOpen: ".section__buttonЭП28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП29",
  btnOpen: ".section__buttonЭП29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП30",
  btnOpen: ".section__buttonЭП30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП31",
  btnOpen: ".section__buttonЭП31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП32",
  btnOpen: ".section__buttonЭП32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП33",
  btnOpen: ".section__buttonЭП33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП34",
  btnOpen: ".section__buttonЭП34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП35",
  btnOpen: ".section__buttonЭП35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП36",
  btnOpen: ".section__buttonЭП36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП37",
  btnOpen: ".section__buttonЭП37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП38",
  btnOpen: ".section__buttonЭП38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП39",
  btnOpen: ".section__buttonЭП39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП40",
  btnOpen: ".section__buttonЭП40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП41",
  btnOpen: ".section__buttonЭП41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП42",
  btnOpen: ".section__buttonЭП42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП43",
  btnOpen: ".section__buttonЭП43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП44",
  btnOpen: ".section__buttonЭП44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП45",
  btnOpen: ".section__buttonЭП45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП46",
  btnOpen: ".section__buttonЭП46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП47",
  btnOpen: ".section__buttonЭП47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП48",
  btnOpen: ".section__buttonЭП48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП49",
  btnOpen: ".section__buttonЭП49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП50",
  btnOpen: ".section__buttonЭП50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП51",
  btnOpen: ".section__buttonЭП51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП52",
  btnOpen: ".section__buttonЭП52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП53",
  btnOpen: ".section__buttonЭП53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП54",
  btnOpen: ".section__buttonЭП54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП55",
  btnOpen: ".section__buttonЭП55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП56",
  btnOpen: ".section__buttonЭП56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП57",
  btnOpen: ".section__buttonЭП57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП58",
  btnOpen: ".section__buttonЭП58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП59",
  btnOpen: ".section__buttonЭП59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП60",
  btnOpen: ".section__buttonЭП60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП61",
  btnOpen: ".section__buttonЭП61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП62",
  btnOpen: ".section__buttonЭП62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП63",
  btnOpen: ".section__buttonЭП63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП64",
  btnOpen: ".section__buttonЭП64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП65",
  btnOpen: ".section__buttonЭП65",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП66",
  btnOpen: ".section__buttonЭП66",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП67",
  btnOpen: ".section__buttonЭП67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП68",
  btnOpen: ".section__buttonЭП68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП69",
  btnOpen: ".section__buttonЭП69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП70",
  btnOpen: ".section__buttonЭП70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП70А",
  btnOpen: ".section__buttonЭП70А",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП70АА",
  btnOpen: ".section__buttonЭП70АА",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП71",
  btnOpen: ".section__buttonЭП71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП72",
  btnOpen: ".section__buttonЭП72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП73",
  btnOpen: ".section__buttonЭП73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП74",
  btnOpen: ".section__buttonЭП74",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП75",
  btnOpen: ".section__buttonЭП75",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП76",
  btnOpen: ".section__buttonЭП76",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП77",
  btnOpen: ".section__buttonЭП77",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП78",
  btnOpen: ".section__buttonЭП78",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП79",
  btnOpen: ".section__buttonЭП79",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП80",
  btnOpen: ".section__buttonЭП80",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП81",
  btnOpen: ".section__buttonЭП81",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП82",
  btnOpen: ".section__buttonЭП82",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП83",
  btnOpen: ".section__buttonЭП83",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП84",
  btnOpen: ".section__buttonЭП84",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП85",
  btnOpen: ".section__buttonЭП85",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП86",
  btnOpen: ".section__buttonЭП86",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП87",
  btnOpen: ".section__buttonЭП87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП88",
  btnOpen: ".section__buttonЭП88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП89",
  btnOpen: ".section__buttonЭП89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП90",
  btnOpen: ".section__buttonЭП90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП91",
  btnOpen: ".section__buttonЭП91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП92",
  btnOpen: ".section__buttonЭП92",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЭП97",
  btnOpen: ".section__buttonЭП97",
  btnClose: ".modal__close",
});
// ------------------------------------------------------------complexes
modalController({
  modal: ".modalЕ1",
  btnOpen: ".section__buttonЕ1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ2А",
  btnOpen: ".section__buttonЕ2А",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ3",
  btnOpen: ".section__buttonЕ3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ4а",
  btnOpen: ".section__buttonЕ4а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ5",
  btnOpen: ".section__buttonЕ5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ6а",
  btnOpen: ".section__buttonЕ6а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ7",
  btnOpen: ".section__buttonЕ7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ8",
  btnOpen: ".section__buttonЕ8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ10",
  btnOpen: ".section__buttonЕ10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ10г",
  btnOpen: ".section__buttonЕ10г",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ11",
  btnOpen: ".section__buttonЕ11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ12а",
  btnOpen: ".section__buttonЕ12а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ13",
  btnOpen: ".section__buttonЕ13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ14а",
  btnOpen: ".section__buttonЕ14а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ15",
  btnOpen: ".section__buttonЕ15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ16",
  btnOpen: ".section__buttonЕ16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ17",
  btnOpen: ".section__buttonЕ17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ18б",
  btnOpen: ".section__buttonЕ18б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ20",
  btnOpen: ".section__buttonЕ20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ21",
  btnOpen: ".section__buttonЕ21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ22",
  btnOpen: ".section__buttonЕ22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ23",
  btnOpen: ".section__buttonЕ23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ23б",
  btnOpen: ".section__buttonЕ23б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ25",
  btnOpen: ".section__buttonЕ25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ29",
  btnOpen: ".section__buttonЕ29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ30",
  btnOpen: ".section__buttonЕ30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ31",
  btnOpen: ".section__buttonЕ31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ32",
  btnOpen: ".section__buttonЕ32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ33а",
  btnOpen: ".section__buttonЕ33а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ36а",
  btnOpen: ".section__buttonЕ36а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ39",
  btnOpen: ".section__buttonЕ39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ40",
  btnOpen: ".section__buttonЕ40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ41",
  btnOpen: ".section__buttonЕ41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ42",
  btnOpen: ".section__buttonЕ42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ43",
  btnOpen: ".section__buttonЕ43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ45",
  btnOpen: ".section__buttonЕ45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ46",
  btnOpen: ".section__buttonЕ46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ47",
  btnOpen: ".section__buttonЕ47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ49",
  btnOpen: ".section__buttonЕ49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ50",
  btnOpen: ".section__buttonЕ50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ52",
  btnOpen: ".section__buttonЕ52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ54б",
  btnOpen: ".section__buttonЕ54б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ55а",
  btnOpen: ".section__buttonЕ55а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ56",
  btnOpen: ".section__buttonЕ56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ61а",
  btnOpen: ".section__buttonЕ61а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ68",
  btnOpen: ".section__buttonЕ68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ70",
  btnOpen: ".section__buttonЕ70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ72",
  btnOpen: ".section__buttonЕ72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм1",
  btnOpen: ".section__buttonм1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм2",
  btnOpen: ".section__buttonм2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм3",
  btnOpen: ".section__buttonм3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм4",
  btnOpen: ".section__buttonм4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм5",
  btnOpen: ".section__buttonм5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм6",
  btnOpen: ".section__buttonм6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм7",
  btnOpen: ".section__buttonм7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм8",
  btnOpen: ".section__buttonм8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм9",
  btnOpen: ".section__buttonм9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalм10",
  btnOpen: ".section__buttonм10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalЕ1",
  btnOpen: ".section__buttonмк1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк2",
  btnOpen: ".section__buttonмк2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк3",
  btnOpen: ".section__buttonмк3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк4",
  btnOpen: ".section__buttonмк4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк5",
  btnOpen: ".section__buttonмк5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк6",
  btnOpen: ".section__buttonмк6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк7",
  btnOpen: ".section__buttonмк7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк9",
  btnOpen: ".section__buttonмк9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк10",
  btnOpen: ".section__buttonмк10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк11",
  btnOpen: ".section__buttonмк11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк12",
  btnOpen: ".section__buttonмк12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк13",
  btnOpen: ".section__buttonмк13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк14",
  btnOpen: ".section__buttonмк14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк15",
  btnOpen: ".section__buttonмк15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк16",
  btnOpen: ".section__buttonмк16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк17",
  btnOpen: ".section__buttonмк17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк18",
  btnOpen: ".section__buttonмк18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк19",
  btnOpen: ".section__buttonмк19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк20",
  btnOpen: ".section__buttonмк20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк21",
  btnOpen: ".section__buttonмк21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк22",
  btnOpen: ".section__buttonмк22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк23",
  btnOpen: ".section__buttonмк23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк24",
  btnOpen: ".section__buttonмк24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк25",
  btnOpen: ".section__buttonмк25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк26",
  btnOpen: ".section__buttonмк26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк27",
  btnOpen: ".section__buttonмк27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк28",
  btnOpen: ".section__buttonмк28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк29",
  btnOpen: ".section__buttonмк29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк30",
  btnOpen: ".section__buttonмк30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк31",
  btnOpen: ".section__buttonмк31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк32",
  btnOpen: ".section__buttonмк32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк33",
  btnOpen: ".section__buttonмк33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк34",
  btnOpen: ".section__buttonмк34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк35",
  btnOpen: ".section__buttonмк35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк36",
  btnOpen: ".section__buttonмк36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк37",
  btnOpen: ".section__buttonмк37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк38",
  btnOpen: ".section__buttonмк38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк39",
  btnOpen: ".section__buttonмк39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк40",
  btnOpen: ".section__buttonмк40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк41",
  btnOpen: ".section__buttonмк41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк42",
  btnOpen: ".section__buttonмк42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк43",
  btnOpen: ".section__buttonмк43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк44",
  btnOpen: ".section__buttonмк44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк45",
  btnOpen: ".section__buttonмк45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк46",
  btnOpen: ".section__buttonмк46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк47",
  btnOpen: ".section__buttonмк47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк48",
  btnOpen: ".section__buttonмк48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк49",
  btnOpen: ".section__buttonмк49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк50",
  btnOpen: ".section__buttonмк50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк51",
  btnOpen: ".section__buttonмк51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк52",
  btnOpen: ".section__buttonмк52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк53",
  btnOpen: ".section__buttonмк53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк54",
  btnOpen: ".section__buttonмк54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк55",
  btnOpen: ".section__buttonмк55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк56",
  btnOpen: ".section__buttonмк56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк57",
  btnOpen: ".section__buttonмк57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк58",
  btnOpen: ".section__buttonмк58",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalмк60",
  btnOpen: ".section__buttonмк60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк61",
  btnOpen: ".section__buttonмк61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк62",
  btnOpen: ".section__buttonмк62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк63",
  btnOpen: ".section__buttonмк63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк64",
  btnOpen: ".section__buttonмк64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк65",
  btnOpen: ".section__buttonмк65",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalмк67",
  btnOpen: ".section__buttonмк67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк68",
  btnOpen: ".section__buttonмк68",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalмк69",
  btnOpen: ".section__buttonмк69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк70",
  btnOpen: ".section__buttonмк70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк71",
  btnOpen: ".section__buttonмк71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк72",
  btnOpen: ".section__buttonмк72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк73",
  btnOpen: ".section__buttonмк73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк74",
  btnOpen: ".section__buttonмк74",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalмк75",
  btnOpen: ".section__buttonмк75",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк76",
  btnOpen: ".section__buttonмк76",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalмк90",
  btnOpen: ".section__buttonмк90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalмк91",
  btnOpen: ".section__buttonмк91",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalC1",
  btnOpen: ".section__buttonC1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС1а",
  btnOpen: ".section__buttonС1а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС2",
  btnOpen: ".section__buttonС2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС3",
  btnOpen: ".section__buttonС3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС4",
  btnOpen: ".section__buttonС4",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС5",
  btnOpen: ".section__buttonС5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС6",
  btnOpen: ".section__buttonС6",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС7",
  btnOpen: ".section__buttonС7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС8",
  btnOpen: ".section__buttonС8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС8б",
  btnOpen: ".section__buttonС8б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС9",
  btnOpen: ".section__buttonС9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС10",
  btnOpen: ".section__buttonС10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС11",
  btnOpen: ".section__buttonС11",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС12",
  btnOpen: ".section__buttonС12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС14",
  btnOpen: ".section__buttonС14",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС15",
  btnOpen: ".section__buttonС15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС16",
  btnOpen: ".section__buttonС16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС17",
  btnOpen: ".section__buttonС17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС18",
  btnOpen: ".section__buttonС18",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС19",
  btnOpen: ".section__buttonС19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС20",
  btnOpen: ".section__buttonС20",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС21",
  btnOpen: ".section__buttonС21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС22",
  btnOpen: ".section__buttonС22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС23",
  btnOpen: ".section__buttonС23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС24",
  btnOpen: ".section__buttonС24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС25",
  btnOpen: ".section__buttonС25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС26",
  btnOpen: ".section__buttonС26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС31",
  btnOpen: ".section__buttonС31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС33",
  btnOpen: ".section__buttonС33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС50",
  btnOpen: ".section__buttonС50",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС61",
  btnOpen: ".section__buttonС61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС62",
  btnOpen: ".section__buttonС62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС64",
  btnOpen: ".section__buttonС64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС65а",
  btnOpen: ".section__buttonС65а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС67б",
  btnOpen: ".section__buttonС67б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС68б",
  btnOpen: ".section__buttonС68б",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС69",
  btnOpen: ".section__buttonС69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС70б",
  btnOpen: ".section__buttonС70б",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС71б",
  btnOpen: ".section__buttonС71б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС74а",
  btnOpen: ".section__buttonС74а",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС75б",
  btnOpen: ".section__buttonС75б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС76б",
  btnOpen: ".section__buttonС76б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС77б",
  btnOpen: ".section__buttonС77б",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС78б",
  btnOpen: ".section__buttonС78б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС79б",
  btnOpen: ".section__buttonС79б",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalС80б",
  btnOpen: ".section__buttonС80б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС82б",
  btnOpen: ".section__buttonС82б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС83а",
  btnOpen: ".section__buttonС83а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС84а",
  btnOpen: ".section__buttonС84а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС85а",
  btnOpen: ".section__buttonС85а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС86а",
  btnOpen: ".section__buttonС86а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalС93",
  btnOpen: ".section__buttonС93",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе2а",
  btnOpen: ".section__buttonсе2а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе3",
  btnOpen: ".section__buttonсе3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе4",
  btnOpen: ".section__buttonсе4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе5",
  btnOpen: ".section__buttonсе5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе6а",
  btnOpen: ".section__buttonсе6а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе7",
  btnOpen: ".section__buttonсе7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе8а",
  btnOpen: ".section__buttonсе8а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе9",
  btnOpen: ".section__buttonсе9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе10",
  btnOpen: ".section__buttonсе10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе11",
  btnOpen: ".section__buttonсе11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе12",
  btnOpen: ".section__buttonсе12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе13",
  btnOpen: ".section__buttonсе13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе16",
  btnOpen: ".section__buttonсе16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе17",
  btnOpen: ".section__buttonсе17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalсе19",
  btnOpen: ".section__buttonсе19",
  btnClose: ".modal__close",
});
// -------------------------------------------------------baby
// modalController({
//   modal: ".modalф76",
//   btnOpen: ".section__buttonф76",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф77",
//   btnOpen: ".section__buttonф77",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф78",
//   btnOpen: ".section__buttonф78",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф79",
//   btnOpen: ".section__buttonф79",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф80",
//   btnOpen: ".section__buttonф80",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф81",
//   btnOpen: ".section__buttonф81",
//   btnClose: ".modal__close",
// });

// modalController({
//   modal: ".modalф83",
//   btnOpen: ".section__buttonф83",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф85",
//   btnOpen: ".section__buttonф85",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф86",
//   btnOpen: ".section__buttonф86",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф87",
//   btnOpen: ".section__buttonф87",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф88",
//   btnOpen: ".section__buttonф88",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф89",
//   btnOpen: ".section__buttonф89",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф90",
//   btnOpen: ".section__buttonф90",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф91",
//   btnOpen: ".section__buttonф91",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф92",
//   btnOpen: ".section__buttonф92",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф93",
//   btnOpen: ".section__buttonф93",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф94",
//   btnOpen: ".section__buttonф94",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф95",
//   btnOpen: ".section__buttonф95",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф97",
//   btnOpen: ".section__buttonф97",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф98",
//   btnOpen: ".section__buttonф98",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф99",
//   btnOpen: ".section__buttonф99",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф101",
//   btnOpen: ".section__buttonф101",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalф102",
//   btnOpen: ".section__buttonф102",
//   btnClose: ".modal__close",
// });

modalController({
  modal: ".modalД1",
  btnOpen: ".section__buttonД1",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД2",
  btnOpen: ".section__buttonД2",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД3",
  btnOpen: ".section__buttonД3",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД4",
  btnOpen: ".section__buttonД4",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД5",
  btnOpen: ".section__buttonД5",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД6",
  btnOpen: ".section__buttonД6",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД7",
  btnOpen: ".section__buttonД7",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД8",
  btnOpen: ".section__buttonД8",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД9",
  btnOpen: ".section__buttonД9",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД10",
  btnOpen: ".section__buttonД10",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД11",
  btnOpen: ".section__buttonД11",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД12",
  btnOpen: ".section__buttonД12",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД13",
  btnOpen: ".section__buttonД13",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД14а",
  btnOpen: ".section__buttonД14а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД15",
  btnOpen: ".section__buttonД15",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД16",
  btnOpen: ".section__buttonД16",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД17",
  btnOpen: ".section__buttonД17",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД18",
  btnOpen: ".section__buttonД18",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД19",
  btnOpen: ".section__buttonД19",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД20",
  btnOpen: ".section__buttonД20",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД21",
  btnOpen: ".section__buttonД21",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД22",
  btnOpen: ".section__buttonД22",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД23",
  btnOpen: ".section__buttonД23",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД23б",
  btnOpen: ".section__buttonД23б",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД24",
  btnOpen: ".section__buttonД24",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД25",
  btnOpen: ".section__buttonД25",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД26",
  btnOpen: ".section__buttonД26",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД27",
  btnOpen: ".section__buttonД27",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД28",
  btnOpen: ".section__buttonД28",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД29",
  btnOpen: ".section__buttonД29",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД30",
  btnOpen: ".section__buttonД30",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД31",
  btnOpen: ".section__buttonД31",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД32",
  btnOpen: ".section__buttonД32",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД33",
  btnOpen: ".section__buttonД33",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД34",
  btnOpen: ".section__buttonД34",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД35",
  btnOpen: ".section__buttonД35",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД36",
  btnOpen: ".section__buttonД36",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД37",
  btnOpen: ".section__buttonД37",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД38",
  btnOpen: ".section__buttonД38",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД39",
  btnOpen: ".section__buttonД39",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД39а",
  btnOpen: ".section__buttonД39а",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД40",
  btnOpen: ".section__buttonД40",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД41",
  btnOpen: ".section__buttonД41",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД42",
  btnOpen: ".section__buttonД42",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД43",
  btnOpen: ".section__buttonД43",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД44",
  btnOpen: ".section__buttonД44",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД45",
  btnOpen: ".section__buttonД45",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД46",
  btnOpen: ".section__buttonД46",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД47",
  btnOpen: ".section__buttonД47",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД48",
  btnOpen: ".section__buttonД48",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД49",
  btnOpen: ".section__buttonД49",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД50",
  btnOpen: ".section__buttonД50",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД51",
  btnOpen: ".section__buttonД51",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД52",
  btnOpen: ".section__buttonД52",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД53",
  btnOpen: ".section__buttonД53",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД54",
  btnOpen: ".section__buttonД54",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД55",
  btnOpen: ".section__buttonД55",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД56",
  btnOpen: ".section__buttonД56",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД57",
  btnOpen: ".section__buttonД57",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД58",
  btnOpen: ".section__buttonД58",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД59",
  btnOpen: ".section__buttonД59",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД60",
  btnOpen: ".section__buttonД60",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД61",
  btnOpen: ".section__buttonД61",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД62",
  btnOpen: ".section__buttonД62",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД63",
  btnOpen: ".section__buttonД63",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД64",
  btnOpen: ".section__buttonД64",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД65",
  btnOpen: ".section__buttonД65",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД66",
  btnOpen: ".section__buttonД66",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД67",
  btnOpen: ".section__buttonД67",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД68",
  btnOpen: ".section__buttonД68",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД69",
  btnOpen: ".section__buttonД69",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД70",
  btnOpen: ".section__buttonД70",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД71",
  btnOpen: ".section__buttonД71",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД72",
  btnOpen: ".section__buttonД72",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД73",
  btnOpen: ".section__buttonД73",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД74",
  btnOpen: ".section__buttonД74",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД75",
  btnOpen: ".section__buttonД75",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД76",
  btnOpen: ".section__buttonД76",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД77",
  btnOpen: ".section__buttonД77",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД78",
  btnOpen: ".section__buttonД78",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД79",
  btnOpen: ".section__buttonД79",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД80",
  btnOpen: ".section__buttonД80",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД81",
  btnOpen: ".section__buttonД81",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД82",
  btnOpen: ".section__buttonД82",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД83",
  btnOpen: ".section__buttonД83",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД85",
  btnOpen: ".section__buttonД85",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД86",
  btnOpen: ".section__buttonД86",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД87",
  btnOpen: ".section__buttonД87",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД88",
  btnOpen: ".section__buttonД88",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД89",
  btnOpen: ".section__buttonД89",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД90",
  btnOpen: ".section__buttonД90",
  btnClose: ".modal__close",
});
modalController({
  modal: ".modalД91",
  btnOpen: ".section__buttonД91",
  btnClose: ".modal__close",
});

modalController({
  modal: ".modalД92",
  btnOpen: ".section__buttonД92",
  btnClose: ".modal__close",
});
// modalController({
//   modal: ".modalД91",
//   btnOpen: ".section__buttonД91",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalД91",
//   btnOpen: ".section__buttonД91",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalД91",
//   btnOpen: ".section__buttonД91",
//   btnClose: ".modal__close",
// });
// modalController({
//   modal: ".modalД91",
//   btnOpen: ".section__buttonД91",
//   btnClose: ".modal__close",
// });
