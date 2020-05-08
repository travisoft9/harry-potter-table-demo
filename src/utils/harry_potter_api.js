export default {
  fetchCharacters: () => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return fetch(
      "https://www.potterapi.com/v1/characters?key=$2a$10$bhNbxOAX2LZMfn4TMp6Equ1Hq7.R5CUM5suQ4yeAQmr1Pdpv.fkQa",
      requestOptions
    ).then((response) => response.json());
  },
};
