let main = document.getElementById("contain");

//get api //

async function getData() {
  const res = await fetch("https://api.covid19india.org/data.json");
  const data = await res.json();

  return data;
}

async function displayui() {
  const post = await getData();
  post1 = post.cases_time_series;
  console.log(post1);
  post1.forEach((pos) => {
    console.log(pos);
    var eltable = document.createElement("table");
    eltable.innerHTML = `

<tr>
<th>Daily Confirmed</th>
<th>Daily Deceased</th>
<th>Daily recovered</th>
<th>Date</th>
<th>Total Confirmed</th>
<th>Total Deceased</th>
<th>Total Recovered</th>
</tr>
<tr>
<td>${pos.dailyconfirmed}</td>
<td>${pos.dailydeceased}</td>
<td>${pos.dailyrecovered}</td>
<td>${pos.date}</td>
<td>${pos.totalconfirmed}</td>
<td>${pos.totaldeceased}</td>
<td>${pos.totalrecovered}</td>
</tr>


`;
    main.appendChild(eltable);
    eltable.classList.add("table");
  });
}

displayui();

/*

var eltable = document.createElement("table");
eltable.classList.add("table");

eltable.innerHTML = `

<tr>
<th>Daily Confirmed</th>
<th>Daily Deceased</th>
<th>Daily recovered</th>
<th>Date</th>
<th>Total Confirmed</th>
<th>Total Deceased</th>
<th>Total Recovered</th>
</tr>
<tr>
<td>0012</td>
<td>080</td>
<td>0012</td>
<td>080</td>
<td>0012</td>
<td>080</td>
<td>080</td>
</tr>


`;
main.appendChild(eltable);

*/
