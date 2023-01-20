(function ($) {
  var myBlog = [
    {
      title: "Bueatiful Kitchen",
      text: "Helo Hello",
      image: "/images/kitchen.jpg",
      link: "#"
    },
    {
      title: "Bueatiful Kitchen",
      text: "Helo Hello",
      image: "/images/kitchen.jpg",
      link: "#"
    },
    {
      title: "Bueatiful Kitchen",
      text: "Helo Hello",
      image: "/images/kitchen.jpg",
      link: "#"
    },
    {
      title: "Bueatiful Kitchen",
      text: "Helo Hello",
      image: "/images/kitchen.jpg",
      link: "#"
    },
    {
      title: "Bueatiful Kitchen",
      text: "Helo Hello",
      image: "/images/kitchen.jpg",
      link: "#"
    }
  ];

  var blog = document.getElementById("myListBlog");
  var innerHTML = "";
  for (let i = 0; i < myBlog.length; i++) {
    let data = myBlog[i];
    innerHTML += `
    <li class="list-item">
      <div class="thumb">
        <a href="${data.image}" class="lightbox">
          <img class="info_img" src="${data.image}" alt="" />
        </a>
      </div>
      <h3 class="head_color before">${data.title}</h3>
      <p>${data.text}</p>
      <div class="colored_button_div">
        <a href="${data.link}" class="colored_button">View Home</a>
      </div>
    </li>
    `;
  }
  blog.innerHTML = innerHTML;

  $("#myListBlog").magnificPopup({
    delegate: "a",
    type: "image"
  });
})(jQuery);
