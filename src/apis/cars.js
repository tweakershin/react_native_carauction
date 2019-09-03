async function fetchMyCar(userEmail) {
  url = "http://52.78.89.146:3000/api/Car";
  filter = {
    where: {
      owner: `resource:com.betweak.carauction.Member#${userEmail}`
    }
  };
  url = `${url}?filter=${JSON.stringify(filter)}`;

  return await fetch(url, {
    method: "GET"
  }).then(resp => {
    if (!(200 <= resp.status < 300)) {
      return false;
    } else {
      return resp.json();
    }
  });
}

export { fetchMyCar };
