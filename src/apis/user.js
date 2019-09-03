async function fetchUser(email, name = "", isAuctioneer = false) {
  if (isAuctioneer) {
    url = "http://52.78.89.146:3000/api/Auctioneer";
  } else {
    url = "http://52.78.89.146:3000/api/Member";
  }
  filter = JSON.stringify({
    where: {
      and: {
        email: email,
        lastName: name
      }
    }
  });
  // filter = '{"where": {"email": "ys@betweak.com", "lastName": "shin"}}';
  // url = url + params;
  url = `${url}?filter=${filter}`;
  fetch(url, {
    method: "GET"
  }).then(resp => {
    if (!(200 <= resp.status < 300)) {
      console.error("Request실패");
      return resp.status;
    } else {
      return resp.json();
    }
  });
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

  fetch(url, {
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
}
