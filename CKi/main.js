
const urlhoareal = 'http://localhost:3000/hoareal';
const urlhoafake = 'http://localhost:3000/hoafake';
let id = ' ';

function renderwhey(hoareal) {
  const tablehoareal = document.querySelector('#tbl');
  const output = `<tr data-id='${hoareal.id}'>
    <td>${hoareal.name}</td>
    <td>
      <img src="${hoareal.img}" style="width: 70px; height: 70px;">
    </td>
    <td>${hoareal.price}</td>
    <td>${hoareal.quantity}</td>
    <td><span>${hoareal.detail}</span></td>
    <td><button class='edit-btn' (${hoareal.id})>Edit</button></td>
    <td><button class='delete-btn' ${hoareal.id}>Delete</button></td>
  </tr>`;
  tablehoareal.insertAdjacentHTML('beforeend', output);
}

function Whey() {
  const tablehoareal = document.querySelector('#tbl');
  tablehoareal.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  fetch(urlhoareal)
    .then(res => res.json())
    .then(data => {
      data.forEach(hoareal => {
        renderwhey(hoareal);
      });
    });
}

function rendertangsm(hoafake) {
  const tablehoafake = document.querySelector('#tbl');
  const output = `<tr data-id='${hoafake.id}'>
    <td>${hoafake.name}</td>
    <td>
      <img src="${hoafake.img}" style="width: 70px; height: 70px;">
    </td>
    <td>${hoafake.price}</td>
    <td>${hoafake.quantity}</td>
    <td><span>${hoafake.detail}</span></td>
    <td><button class='edit-btn' ${hoafake.id}>Edit</button></td>
    <td><button class='delete-btn'${hoafake.id}>Delete</button></td>
  </tr>`;
  tablehoafake.insertAdjacentHTML('beforeend', output);
  
}
function Tang() {
  const tablehoafake = document.querySelector('#tbl');
  tablehoafake.innerHTML = ''; // Xóa nội dung bảng trước khi thêm dữ liệu mới
  fetch(urlhoafake)
    .then(res => res.json())
    .then(data => {
      data.forEach(hoafake => {
        rendertangsm(hoafake);
      });
    });

}
