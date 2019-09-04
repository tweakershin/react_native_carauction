async function fetchUser(email, name = "", isAuctioneer = false) {
  let url = "";
  if (isAuctioneer) {
    url = "http://52.78.89.146:3000/api/Auctioneer";
  } else {
    url = "http://52.78.89.146:3000/api/Member";
  }

  const filter = JSON.stringify({
    where: {
      and: [
        {
          email: email
        },
        {
          lastName: name
        }
      ]
    }
  });
  url = `${url}?filter=${filter}`;

  result = await fetch(url, {
    method: "GET",
    headers: {
      "CONTENT-TYPE": "application/json"
    }
  })
    .then(resp => {
      if (!(200 <= resp.status < 300)) {
        console.warn("Network 오류");
      }
      return resp.json();
    })
    .catch(err => console.log(err));

  return result;
}

async function postUser(email, firstName, lastName) {
  const className = "com.betweak.carauction.Member";
  const defaultBalance = 100000;
  url = "http://52.78.89.146:3000/api/Member";

  const body = JSON.stringify({
    $class: className,
    email: email,
    firstName: firstName,
    lastName: lastName,
    balance: defaultBalance
  });

  result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: body
  }).then(resp => {
    if (!(200 <= resp.status < 300)) {
      console.error("Request실패");
      return resp.status;
    } else {
      return resp.json();
    }
  });
  return result;
}

export { fetchUser, postUser };
