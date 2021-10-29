/* Show Menu */
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click',()  =>{
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle','nav-menu')


/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))


/* Change Background Header */ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200 ) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* Show Scroll Top */ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560 ) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/* Mixitup Filter Portfolio */ 
/* SOURCE CODE : https://www.kunkalabs.com/mixitup/docs/get-started/ */
const mixer = mixitup('.menu_container', {
    selectors: {
        target: '.menu_content'
    },
    animation: {
        duration: 400
    }
});


/* Link Active Portfolio */ 
const linkMenu = document.querySelectorAll('.menu_item')

function activeMenu(){
    if(linkMenu){
        linkMenu.forEach(l => l.classList.remove('active-menu'))
        this.classList.add('active-menu')
    }
}
linkMenu.forEach(l => l.addEventListener('click', activeMenu))


/* Swiper Carousel */ 
/* SOURCE CODE : https://swiperjs.com/get-started */
const swiper = new Swiper('.testimonial_container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
  })


/* GSAP Animation */ 
/* SOURCE CODE : https://greensock.com */
gsap.from('.home_img', {opacity: 0, duration:2, delay: .5, x:60})
gsap.from('.home_data', {opacity: 0, duration:2, delay: .8, y:25})
gsap.from('.home_greeting, .home_name, .home_desc, .home_button', {opacity: 0, duration:2, delay: 1, y:25, ease:'expo.out', stagger:'.2'})
gsap.from('.home_social-icon', {opacity: 0, duration:2, delay: 2.3, y:25, ease:'expo.out', stagger:'.2'})

gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration:2, delay: 1.5, y:25, ease:'expo.out', stagger:'.2'})
gsap.from('.nav_item', {opacity: 0, duration:2, delay: 1.8, y:25, ease:'expo.out', stagger:'.2'})


/* Get Schedule */
var pageCounter = 1;
var timeContainer = document.getElementById("schedule_info");
var btn = document.getElementById("btn");

/* Button set up for Get Schedule */
btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'json/schedule-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      pageCounter++;
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  /* If an error occurs while clicking the button. show the pop up */
  ourRequest.onerror = function() {
    const openButtons = document.querySelectorAll('[data-modal-target]')
    const closeButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay1')

    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
      })
    })

    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
      })
    })

    function openModal(modal) {
      if (modal == null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    }

    function closeModal(modal) {
      if (modal == null) return
      modal.classList.remove('active')
      overlay.classList.remove('active')
    }
    console.log("Connection error. Please connect to a network");
  };

  ourRequest.send();
});

/* If the response is okay and connected, load the data */
function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name ;
    htmlString += "<p>" + " Opening time : " + data[i].time;
    htmlString += "<p>" + " Mains : " + data[i].mains;
    htmlString += "<p>" + " Desserts : " + data[i].desserts;
    htmlString += "<p>" + " Sambals : " + data[i].sambals;
    
    htmlString += "<p>" + "Services:  ";
    for (ii = 0; ii < data[i].services.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].services[ii];
      } else {
        htmlString += " and " + data[i].services[ii];
      }
    }
    htmlString += '</p>';
  }

  timeContainer.insertAdjacentHTML('beforeend', htmlString);
}


/* Button Set Up for submitting questions */
const btnn = document.getElementById('btn-questions') 

btnn.addEventListener('click', () => {

  const form = {
    name :document.getElementById('name'),
    email: document.getElementById('email'),
    subject : document.getElementById('subject'),
    number : document.getElementById('number'),
    message : document.getElementById('message'),
    printed: document.getElementById('list-group')
  }

  const requestData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    number: form.number.value,
    message: form.message.value
  }

  const option_Post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  }
  
  async function post() {
    const respond = await fetch('/api/question', option_Post);

    if(respond.ok){
      const data = await respond.json();
      const newEmail = data.email;
      const newSubject = data.subject;
      const newNumber = data.number;
      const newMessage = data.message;
      const newName = data.name;

      swal({
        title: "Are you sure to submit? Please check your information below:",
        text: data.printed,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((submit) => {
        if (submit) {
          swal("Your question has been submitted. Our team will get back to you as soon as possible!", {
            icon: "success",
            text: "SUBMISSION SUCCESSFUL! \r\n \r\nYour reference id is: " + data.id +"\r\n \r\nPlease remember your reference id in order to update or delete your submission.",
          });
        } 
        else {
          swal("Your question haven't been submitted. Feel free to edit your question");
        }
      });
    }

    else{
      const message = "We connected to the server but something happened";
      throw new Error(message);
    }
  }

  if(requestData.name === "" || requestData.email === "" || requestData.subject === ""|| requestData.number===""|| requestData.message===""){
    swal({
      title: "Oops",
      text: "Please complete all the sections!",
      icon: "error",
      button: "Close",
    });
    return
  }

  else if(!((requestData.email).includes("@"))){
    swal({
      title: "Oops",
      text: "Please use a valid email address!",
      icon: "error",
      button: "Close",
    });
    return
  }

  else if(Number.isInteger(parseInt(requestData.number)) === false){
    swal({
      title: "Oops",
      text: "Please use a valid phone number !",
      icon: "error",
      button: "Close",
    });
    return
  }
  
  else{
    post().catch(error => {
      swal({
        title: "Oh no!",
        text: "There's something wrong with your connection. Please check your network before submitting",
        icon: "error",
        button: "Close"
      });
    })
  }
})


/* Button set up for delete questions */
const deletesub = document.getElementById('delete')

deletesub.addEventListener('click', () => {
  swal("Please input your id: ", {
    content: "input",
  })
  .then((value) => {
    const ID = {
      id: value
    }
    const delete_Sub = {
      method: 'DELETE',
      header: {
        'Content-type': 'application/json'
      }
    }
    async function getSub(){
      const getresponse = await fetch('/' + ID.id)
      const getdata = await getresponse.json()
      if (getresponse.ok){
        if (getdata.label){
          swal({
            title: "This is your information,do you want to delete?",
            text: "Name: " + getdata.name + " Email: " + getdata.email + " , Subject: " + 
                  getdata.subject + ", Number: " + getdata.number + "Message:' " + getdata.message + "'",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              deleteSUB()
              async function deleteSUB() {
                const response = await fetch('/' + ID.id, delete_Sub)
                const data = await response.json()
                if(data.label){
                  swal("Your submission has been deleted!")
                }
              }
              }
            else {
              swal("Your submission is safe!");
            }
          })
        }else{
          swal({
            title: "Oh no!",
            text: "We connected to the server but something went wrong",
            icon: "error",
            button: "Close",
            dangerMode: true
          })};

        }else{
          swal({
            title: "ID not found",
            text: "No information under the id. Please recheck your submission id",
            icon: "error",
            button: "Close",
            dangerMode: true
          })};
      }
    getSub().catch(error => {
          swal({
            title: "Connection Error",
            text: "Please recheck your network before connecting.",
            icon: "error",
            button: "Close",
            dangerMode: true
          });
      })
    }  
)})


// Button Set Up for Membership
const memberbutton = document.getElementById('btn-addmember') 

memberbutton.addEventListener('click', () => {

  const formm = {
    name :document.getElementById('namee'),
    email: document.getElementById('emaill'),
    number : document.getElementById('nom'),
    type : document.getElementById('membertype'),
    printed: document.getElementById('list-group')
  }

  const requestDataa = {
    name: formm.name.value,
    email: formm.email.value,
    number: formm.number.value,
    type: formm.type.value
  }

  const option_post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestDataa)
  }

  async function post() {
    const response = await fetch('/', option_post);
    if(response.ok){
      const data = await response.json();
      const newEmail = data.email;
      const newNumber = data.number;
      const newType = data.type;
      const newName = data.name;

      swal({
        title: "Are you sure to submit? Please check your information below:",
        text: data.printed,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((submit) => {
        if (submit) {
          swal({
            title: "SUBMITTED SUCCESSFULLY! \r\n",
            text: "Congratulations on being one of our members! \r\n \r\n Your member id is: " + data.id + "\r\n \r\nPlease remember your member id to check your membership.",
    
            icon: "success",
          });
        } else {
          swal("Your membership has not been made. Feel free to edit your membership.");
        }
      });
    }
    else{
      const message = "We connected to the server but something happened";
      throw new Error(message);
    }
  }

  if(requestDataa.name === "" || requestDataa.email === "" || requestDataa.number === ""|| requestDataa.type===""){
    swal({
      title: "Oops",
      text: "Please complete all the sections!",
      icon: "error",
      button: "Close",
    });
    return
  }
  else if(!((requestDataa.email).includes("@"))){
    swal({
      title: "Oops",
      text: "Please use a valid email address!",
      icon: "error",
      button: "Close",
    });
    return
  }
  else if(Number.isInteger(parseInt(requestDataa.number)) === false){
      swal({
        title: "Oops",
        text: "Please use a valid phone number !",
        icon: "error",
        button: "Close",
      });
      return
    }
  
  else{
    post().catch(error => {
      swal({
        title: "Oh no!",
        text: "There is something wrong with the connection. Please check your network before submitting.",
        icon: "error",
        button: "Close"
      });
  })
  }
})

// Button for delete membership
const deletemem = document.getElementById('deletemember')

deletemem.addEventListener('click', () => {
  swal("Please input your member id: ", {
    content: "input",
  })
  .then((value) => {
    const memberID = {
      memberid: value
    }
    const delete_Mem = {
      method: 'DELETE',
      header: {
        'Content-type': 'application/json'
      }
    }
    async function getMem(){
      const getmemresponse = await fetch('/member/' + memberID.memberid)
      const getmemdata = await getmemresponse.json()
      if (getmemresponse.ok){
        if (getmemdata.label){
          swal({
            title: "This is your membership, do you wish to terminate it?",
            text: "Name: " + getmemdata.name + ". Email: " + getmemdata.email + " Number: " + getmemdata.number + 
            " Membership type: " + getmemdata.type,
            icon: "warning",
            buttons: true,
            dangerMode: true
          })
          .then((willDel) => {
            if (willDel) {
              deleteMem()
              async function deleteMem() {
                const response = await fetch('/member/' + memberID.memberid, delete_Mem)
                const data = await response.json()
                if(data.label){
                  swal("Your membership has been terminated!")
                }
              }
              }
            else {
              swal("Your information is safe!");
            }
          })
        }else{
          swal({
            title: "Oh no!",
            text: "We connected to the server but something went wrong",
            icon: "error",
            button: "Close",
            dangerMode: true
          })};

        }else{
          swal({
            title: "ID not found",
            text: "No information under the id. Please recheck your membership id",
            icon: "error",
            button: "Close",
            dangerMode: true
          })};
      }
    getMem().catch(error => {
          swal({
            title: "Connection Error",
            text: "Please recheck your network before connecting.",
            icon: "error",
            button: "Close",
            dangerMode: true
          });
      })
    }  
)})