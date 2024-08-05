const cardList = [
  {
    title: "Golden Retriever",
    image: "../images/golden-retriever.png",
    link: "Learn more about Golden Retrievers",
    description: "Golden Retrievers are known for their friendly and tolerant attitude. They are great family pets and also excel in obedience training and canine sports."
  },
  {
    title: "German Shepherd",
    image: "../images/german-shepherd.png",
    link: "Learn more about German Shepherds",
    description: "German Shepherds are highly intelligent and versatile working dogs. They are known for their loyalty and courage, often serving in roles such as police and service dogs."
  }
];

const submitForm = () => {
  let formData = {};
  formData.first_name = $('#first_name').val();
  formData.last_name = $('#last_name').val();
  formData.password = $('#password').val();
  formData.email = $('#email').val();
  formData.dog_story = $('#dog_story').val();

  console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = `
      <div class="col s4 center-align">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}" alt="${item.title}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${item.title}
              <i class="material-icons right">more_vert</i>
            </span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}
              <i class="material-icons right">close</i>
            </span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>`;
    $("#card-section").append(itemToAppend);
  });
}

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('#formSubmit').click(() => {
    submitForm();
  });
  addCards(cardList);
  $('.modal').modal();
});
