
let students = [
    {
      id: 1,
      name: "Xuân Bách",
      email: "bachnx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nam",
    },
    {
      id: 2,
      name: "Xuân Lâm",
      email: "lamnx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nam",
    },
    {
      id: 3,
      name: "Xuân Hưng",
      email: "hungnx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nam",
    },
    {
      id: 4,
      name: "Xuân Bách",
      email: "hainx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nữ",
    },
  ];
  let tbody = document.getElementById("tbody");
  // Render dữ liệu
  
     function renderStudents() {
      tbody.innerHTML = "";
      for (let i = 0; i < students.length; i++) {
      tbody.innerHTML =
        tbody.innerHTML +
        ` <tr>
      <th scope="row">${i + 1}</th>
      <td>${students[i].name}</td>
      <td>${students[i].email}</td>
      <td>${students[i].phone}</td>
      <td>${students[i].address}</td>
      <td>${students[i].gender}</td>
      <td>
        <button class="btn-edit" id=${students[i].id}>Edit</button>
        <button class="btn-delete" id=${students[i].id}>Delete</button>
      </td>
     </tr>`;
     }
     }
  
     renderStudents();
  
  // Thực hiện tính năng thêm
    let mainForm = document.getElementById("main-form");
    console.log(mainForm);
    mainForm.onsubmit = function (e) {
    e.preventDefault();
    let newData = {
      id: Math.floor(Math.random() * 1000),
      name: mainForm.name.value,
      email: mainForm.email.value,
      phone: mainForm.phone.value,
      address: mainForm.add.value,
      gender: mainForm.gender.value,
    };
    //   console.log(newData);
    students.push(newData);
    //   console.log(students);
    renderStudents();
  };
  
  tbody.onclick = function (e) {
    // Edit
    if (e.target.classList.contains("btn-edit")) {
      let id = Number(e.target.id);
      let check = -1;
      for (let i = 0; i < students.length; i++) {
        if (id === students[i].id) {
          check = i;
        }
      }
      if (check != -1) {
        updateIndex = check;
        tbody.innerHTML = `<tr>
      <th scope="row">${check + 1}</th>
      <td> <input type="text" id="name" name="name"/></td>
      <td> <input type="email" id="email" name="email" /></td>
      <td> <input type="text" id="phone" name="phone" /></td>
      <td> <input type="text" id="add" name="add" /></td>
      <td> <input type="radio" name="gender" value="Nam" checked />
      Nam
      <input type="radio" name="gender" value="Nữ" /> Nữ</td>
      <td>
        <button class="btn-confirm" id=${check}>Confirm</button>
        <button class="btn-delete" id=${check}>Delete</button>
      </td>
    </tr>`;
      }
    }
    if (e.target.classList.contains("btn-confirm")) {
      let newName =
        e.target.parentElement.parentElement.children[1].children[0].value;
      let newEmail =
        e.target.parentElement.parentElement.children[2].children[0].value;
      let newPhone =
        e.target.parentElement.parentElement.children[3].children[0].value;
      let newAdd =
        e.target.parentElement.parentElement.children[4].children[0].value;
      let newGender =
        e.target.parentElement.parentElement.children[5].children[0].value;
      console.log(newName, newEmail, newPhone, newAdd, newGender);
      students[updateIndex] = {
        ...students[updateIndex],
        name: newName,
        email: newEmail,
        phone: newPhone,
        address: newAdd,
        gender: newGender,
      };
      renderStudents();
    }
    //   Delete
    if (e.target.classList.contains("btn-delete")) {
      let id = Number(e.target.id);
      let check = -1;
      for (let i = 0; i < students.length; i++) {
        if (id == students[i].id) {
          check = i;
        }
      }
      if (check != -1) {
        students.splice(check, 1);
      }
      renderStudents();
    }
  };
  
  // Tìm kiếm tên học viên
  let btnSearch = document.getElementById("btn-search");
  console.log(btnSearch);
  let inputSearch = document.getElementById("search");
  
  btnSearch.onclick = function (e) {
    console.log(inputSearch.value);
    let result = [];
    for (let i = 0; i < students.length; i++) {
      if (inputSearch.value === students[i].name) {
        result.push(students[i]);
      }
    }
    console.log(result);
    tbody.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      tbody.innerHTML =
        tbody.innerHTML +
        ` <tr>
      <th scope="row">${i + 1}</th>
      <td>${result[i].name}</td>
      <td>${result[i].email}</td>
      <td>${result[i].phone}</td>
      <td>${result[i].address}</td>
      <td>${result[i].gender}</td>
      <td>
        <button class="btn-edit" id=${result[i].id}>Edit</button>
        <button class="btn-delete" id=${result[i].id}>Delete</button>
      </td>
    </tr>`;
    }
  };
  
  // Sắp xếp
  let btnSort = document.getElementById("btn-sort");
  btnSort.onclick = function () {
    students.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    renderStudents();
  };