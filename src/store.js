import { createStore } from "redux";

const initialState = {
  members: [
    {
      id: 1,
      name: "Romi Jimenez",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U02SRG8DS6S-b1bbd891e3c8-72",
    },
    {
      id: 2,
      name: "Otoniel Reyes",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U02TYE364R2-c12297e8ae26-72",
    },
    {
      id: 3,
      name: "Victor Nisael Rodriguez",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U02SY7RC7RR-ca04dab9142d-72",
    },
    {
      id: 4,
      name: "Federico Gomez",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U035KGXC079-0453e3063fab-72",
    },
    {
      id: 5,
      name: "Juan Boujon",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U0371564KRN-33b4f25eee59-72",
    },
    {
      id: 6,
      name: "Rafael Segovia",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U0361MDQFV5-2cd1c91cf84e-72",
    },
    {
      id: 7,
      name: "Diego Avila",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U036CNU6S2D-eaea38daf5b8-72",
    },
    {
      id: 8,
      name: "Pablo Pelardas",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U035TF88WNA-ee559b8f2f08-48",
    },
    {
      id: 9,
      name: "Andrés Espinoza",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U031TMPT1QA-900013d34ffd-72",
    },
    {
      id: 10,
      name: "Gonzalo Madona",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U03604WPS67-ga3391a8d048-72",
    },
    {
      id: 11,
      name: "Mariano Dunand",
      photo: "https://ca.slack-edge.com/TPRS7H4PN-U036CNUJXG9-865a3029c0be-72",
    },
  ],

  sup: [],
  penitence: [],
};

const reducerTeam = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SUP":
      return {
        ...state,
        sup: state.sup.concat(action.member),
        members: state.members.filter(
          (member) => member.id !== action.member.id
        ),
      };
    case "REMOVE_SUP":
      return {
        ...state,
        sup: state.sup.filter((member) => member.id !== action.member.id),
        members: state.members.concat(action.member),
      };
    case "ADD_PENITENCE":
      return {
        ...state,
        penitence: state.penitence.concat(action.member),
        members: state.members.filter(
          (member) => member.id !== action.member.id
        ),
      };
    case "REMOVE_PENITENCE":
      return { 
        ...state, 
        penitence: state.penitence.filter((member) => member.id !== action.member.id),
        members: state.members.concat(action.member),
    };
    default:
      return { state };
  }
};

export default createStore(reducerTeam);
