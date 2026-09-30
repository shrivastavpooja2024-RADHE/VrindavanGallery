/* =========================
   MOBILE MENU
========================= */

const menuBtn =
  document.getElementById("menuBtn");

const navbar =
  document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

  navbar.classList.toggle("active");

});


/* Menu link click होने पर
   mobile menu बंद हो जाएगा */

document
  .querySelectorAll(".navbar a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navbar.classList.remove("active");

    });

  });


/* =========================
   GALLERY FILTER
========================= */

const filterButtons =
  document.querySelectorAll(".filter-btn");

const galleryImages =
  document.querySelectorAll(".gallery-img");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter =
      button.dataset.filter;

    galleryImages.forEach(image => {

      const category =
        image.dataset.category;

      if (
        filter === "all" ||
        category === filter
      ) {

        image.style.display = "block";

      } else {

        image.style.display = "none";

      }

    });

  });

});


/* =========================
   IMAGE LIGHTBOX
========================= */

const lightbox =
  document.getElementById("lightbox");

const lightboxImg =
  document.getElementById("lightboxImg");

const closeLightbox =
  document.getElementById("closeLightbox");


galleryImages.forEach(image => {

  image.addEventListener("click", () => {

    lightbox.classList.add("active");

    lightboxImg.src =
      image.src;

    document.body.style.overflow =
      "hidden";

  });

});


closeLightbox.addEventListener(
  "click",
  closeGallery
);


lightbox.addEventListener(
  "click",
  event => {

    if (event.target === lightbox) {

      closeGallery();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeGallery();

    }

  }
);


function closeGallery() {

  lightbox.classList.remove("active");

  document.body.style.overflow =
    "auto";

}


/* =========================
   BACK TO TOP
========================= */

const topBtn =
  document.getElementById("topBtn");


window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});


topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year")
  .textContent =
  new Date().getFullYear();
  /* =================================
   VRINDAVAN PLACE INFORMATION
================================= */

const placeData = {

  banke: {
    icon: "🛕",
    title: "श्री बाँके बिहारी मंदिर",
    description: `
      <p>
        श्री बाँके बिहारी मंदिर वृंदावन के
        सबसे प्रसिद्ध मंदिरों में से एक है।
        यहाँ ठाकुर जी श्री बाँके बिहारी के
        स्वरूप में विराजमान हैं।
      </p>

      <h3>विशेषता</h3>

      <p>
        मंदिर की दर्शन परंपरा और उत्सव
        बड़ी संख्या में भक्तों को आकर्षित करते हैं।
        दर्शन व्यवस्था अवसर और पर्व के अनुसार
        बदल सकती है।
      </p>

      <h3>यात्रा सुझाव</h3>

      <p>
        भीड़ वाले दिनों में पहले से योजना बनाएँ
        और दर्शन का वर्तमान समय मंदिर के
        आधिकारिक स्रोत से जाँचें।
      </p>
    `
  },


  raman: {
    icon: "🌸",
    title: "श्री राधा रमण मंदिर",
    description: `
      <p>
        श्री राधा रमण मंदिर वृंदावन की
        गौड़ीय वैष्णव परंपरा से जुड़ा
        प्रसिद्ध मंदिर है।
      </p>

      <p>
        मंदिर का संबंध श्री गोपाल भट्ट
        गोस्वामी की परंपरा से है।
      </p>

      <h3>विशेषता</h3>

      <p>
        श्री राधा रमण जी के दर्शन और
        पारंपरिक सेवा-पद्धति भक्तों के लिए
        विशेष आकर्षण हैं।
      </p>
    `
  },


  damodar: {
    icon: "🙏",
    title: "श्री राधा दामोदर मंदिर",
    description: `
      <p>
        श्री राधा दामोदर मंदिर वृंदावन की
        गौड़ीय वैष्णव परंपरा के महत्वपूर्ण
        मंदिरों में से एक है।
      </p>

      <p>
        यह मंदिर अनेक वैष्णव संतों और
        गोस्वामियों की स्मृतियों से जुड़ा है।
      </p>
    `
  },


  govind: {
    icon: "🦚",
    title: "श्री गोविंद देव जी मंदिर",
    description: `
      <p>
        गोविंद देव जी मंदिर वृंदावन की
        ऐतिहासिक मंदिर वास्तुकला का
        प्रसिद्ध उदाहरण है।
      </p>

      <p>
        इसका इतिहास वृंदावन में विकसित हुई
        वैष्णव भक्ति परंपराओं से जुड़ा हुआ है।
      </p>
    `
  },


  prem: {
    icon: "💮",
    title: "प्रेम मंदिर",
    description: `
      <p>
        प्रेम मंदिर वृंदावन का आधुनिक
        राधा-कृष्ण मंदिर परिसर है।
      </p>

      <p>
        इसकी विशाल संगमरमर वास्तुकला,
        धार्मिक झाँकियाँ और रात्रिकालीन
        प्रकाश सज्जा विशेष आकर्षण हैं।
      </p>

      <h3>दर्शन सुझाव</h3>

      <p>
        दिन और शाम दोनों समय परिसर का
        वातावरण अलग अनुभव देता है।
        कार्यक्रम और समय यात्रा के दिन
        आधिकारिक स्रोत से जाँचें।
      </p>
    `
  },


  iskcon: {
    icon: "🪷",
    title: "श्री कृष्ण बलराम मंदिर",
    description: `
      <p>
        श्री कृष्ण बलराम मंदिर वृंदावन का
        प्रसिद्ध ISKCON मंदिर है।
      </p>

      <p>
        यहाँ श्री कृष्ण-बलराम के साथ
        राधा-कृष्ण के विग्रहों के दर्शन,
        आरती और कीर्तन भक्तों के प्रमुख
        आकर्षण हैं।
      </p>
    `
  },


  nidhivan: {
    icon: "🌳",
    title: "निधिवन",
    description: `
      <p>
        निधिवन वृंदावन का अत्यंत श्रद्धेय
        धार्मिक स्थल है।
      </p>

      <p>
        ब्रज की धार्मिक परंपराओं में इसे
        श्री राधा-कृष्ण की लीलाओं से
        जोड़ा जाता है।
      </p>

      <h3>ध्यान रखें</h3>

      <p>
        निधिवन से जुड़ी कई कथाएँ और
        मान्यताएँ धार्मिक आस्था का हिस्सा हैं।
        वेबसाइट पर उन्हें मान्यता के रूप में
        प्रस्तुत करना उचित है, ऐतिहासिक रूप से
        प्रमाणित घटना के रूप में नहीं।
      </p>
    `
  },


  seva: {
    icon: "🌿",
    title: "सेवा कुंज",
    description: `
      <p>
        सेवा कुंज वृंदावन का प्रसिद्ध
        धार्मिक स्थल है।
      </p>

      <p>
        ब्रज परंपरा में यह स्थान
        श्री राधा-कृष्ण की दिव्य लीलाओं
        से जुड़ा माना जाता है।
      </p>
    `
  },


  keshi: {
    icon: "🌊",
    title: "केशी घाट",
    description: `
      <p>
        केशी घाट वृंदावन में यमुना जी के
        किनारे स्थित प्रसिद्ध घाट है।
      </p>

      <p>
        इसका धार्मिक संबंध भगवान श्रीकृष्ण
        की केशी दैत्य से जुड़ी कथा से
        माना जाता है।
      </p>

      <p>
        घाट का वातावरण यमुना दर्शन और
        ब्रज की आध्यात्मिक अनुभूति के लिए
        विशेष माना जाता है।
      </p>
    `
  },


  barsana: {
    icon: "🌺",
    title: "श्री बरसाना धाम",
    description: `
      <p>
        बरसाना ब्रज क्षेत्र का प्रमुख
        धार्मिक स्थल है और श्री राधा रानी
        से विशेष रूप से जुड़ा है।
      </p>

      <h3>श्रीजी मंदिर</h3>

      <p>
        पहाड़ी पर स्थित श्री राधा रानी
        मंदिर बरसाना का प्रमुख तीर्थ है।
      </p>

      <h3>प्रसिद्ध उत्सव</h3>

      <p>
        बरसाना विशेष रूप से राधाष्टमी और
        अपनी प्रसिद्ध होली परंपराओं के
        लिए जाना जाता है।
      </p>
    `
  },


  nandgaon: {
    icon: "🐄",
    title: "नंदगाँव",
    description: `
      <p>
        नंदगाँव ब्रज परंपरा में नंद बाबा,
        माता यशोदा और भगवान श्रीकृष्ण की
        बाल लीलाओं से जुड़ा माना जाता है।
      </p>

      <p>
        यहाँ नंद भवन प्रमुख धार्मिक
        दर्शन स्थलों में शामिल है।
      </p>
    `
  },


  govardhan: {
    icon: "⛰️",
    title: "श्री गिरिराज गोवर्धन",
    description: `
      <p>
        गोवर्धन ब्रज क्षेत्र का प्रमुख
        तीर्थ है और भगवान श्रीकृष्ण की
        गोवर्धन लीला से जुड़ा है।
      </p>

      <h3>गिरिराज परिक्रमा</h3>

      <p>
        श्रद्धालु परंपरागत रूप से
        गिरिराज जी की परिक्रमा करते हैं।
      </p>

      <h3>आसपास के प्रमुख स्थल</h3>

      <p>
        राधाकुंड, श्यामकुंड और मानसी गंगा
        सहित अनेक धार्मिक स्थल गोवर्धन
        क्षेत्र में स्थित हैं।
      </p>
    `
  }

};


/* =================================
   OPEN DETAILS
================================= */

const detailsButtons =
  document.querySelectorAll(".details-btn");

const placeModal =
  document.getElementById("placeModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalIcon =
  document.getElementById("modalIcon");

const modalDescription =
  document.getElementById("modalDescription");

const closeModal =
  document.getElementById("closeModal");


detailsButtons.forEach(button => {

  button.addEventListener("click", () => {

    const place =
      button.dataset.place;

    const data =
      placeData[place];

    if (!data) return;

    modalIcon.textContent =
      data.icon;

    modalTitle.textContent =
      data.title;

    modalDescription.innerHTML =
      data.description;

    placeModal.classList.add("active");

    document.body.style.overflow =
      "hidden";

  });

});


/* =================================
   CLOSE DETAILS
================================= */

function closePlaceModal() {

  placeModal.classList.remove("active");

  document.body.style.overflow =
    "auto";

}


closeModal.addEventListener(
  "click",
  closePlaceModal
);


placeModal.addEventListener(
  "click",
  event => {

    if (event.target === placeModal) {

      closePlaceModal();

    }

  }
);


/* =================================
   SEARCH VRINDAVAN
================================= */

const placeSearch =
  document.getElementById("placeSearch");

const placeCards =
  document.querySelectorAll(".place-card");

const noResult =
  document.getElementById("noResult");


placeSearch.addEventListener(
  "input",
  () => {

    const searchText =
      placeSearch.value
        .toLowerCase()
        .trim();

    let found = false;


    placeCards.forEach(card => {

      const name =
        card.dataset.name
          .toLowerCase();

      if (name.includes(searchText)) {

        card.style.display = "block";

        found = true;

      } else {

        card.style.display = "none";

      }

    });


    noResult.style.display =
      found ? "none" : "block";

  }
);
/* ==========================================
   PROFESSIONAL GALLERY
========================================== */

const galleryFilters =
  document.querySelectorAll(
    ".gallery-filter"
  );

const proPhotos =
  Array.from(
    document.querySelectorAll(
      ".pro-photo"
    )
  );


let currentCategory = "all";

let visibleLimit = 8;


/* ==========================================
   SHOW GALLERY
========================================== */

function updateGallery() {

  let matchingPhotos = [];

  proPhotos.forEach(photo => {

    const category =
      photo.dataset.category;

    if (
      currentCategory === "all" ||
      category === currentCategory
    ) {

      matchingPhotos.push(photo);

    }

  });


  proPhotos.forEach(photo => {

    photo.style.display = "none";

  });


  matchingPhotos
    .slice(0, visibleLimit)
    .forEach(photo => {

      photo.style.display = "block";

    });


  const loadMoreBtn =
    document.getElementById(
      "loadMoreBtn"
    );


  if (
    matchingPhotos.length >
    visibleLimit
  ) {

    loadMoreBtn.style.display =
      "inline-block";

  } else {

    loadMoreBtn.style.display =
      "none";

  }

}


/* ==========================================
   FILTER BUTTON
========================================== */

galleryFilters.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      galleryFilters.forEach(btn => {

        btn.classList.remove(
          "active"
        );

      });


      button.classList.add(
        "active"
      );


      currentCategory =
        button.dataset.filter;


      visibleLimit = 8;


      updateGallery();

    }
  );

});


/* ==========================================
   LOAD MORE
========================================== */

document
  .getElementById("loadMoreBtn")
  .addEventListener(
    "click",
    () => {

      visibleLimit += 8;

      updateGallery();

    }
  );


/* ==========================================
   FULL SCREEN VIEWER
========================================== */

const photoViewer =
  document.getElementById(
    "photoViewer"
  );

const viewerImage =
  document.getElementById(
    "viewerImage"
  );

const viewerCaption =
  document.getElementById(
    "viewerCaption"
  );

const viewerCounter =
  document.getElementById(
    "viewerCounter"
  );

const viewerClose =
  document.getElementById(
    "viewerClose"
  );

const viewerPrev =
  document.getElementById(
    "viewerPrev"
  );

const viewerNext =
  document.getElementById(
    "viewerNext"
  );


let currentPhotoIndex = 0;

let currentPhotoList = [];


/* ==========================================
   OPEN PHOTO
========================================== */

proPhotos.forEach(photo => {

  photo.addEventListener(
    "click",
    () => {

      currentPhotoList =
        proPhotos.filter(item => {

          return (
            currentCategory === "all" ||
            item.dataset.category ===
            currentCategory
          );

        });


      currentPhotoIndex =
        currentPhotoList.indexOf(
          photo
        );


      showCurrentPhoto();


      photoViewer.classList.add(
        "active"
      );


      document.body.style.overflow =
        "hidden";

    }
  );

});


/* ==========================================
   DISPLAY CURRENT PHOTO
========================================== */

function showCurrentPhoto() {

  const photo =
    currentPhotoList[
      currentPhotoIndex
    ];


  if (!photo) return;


  const image =
    photo.querySelector("img");

  const caption =
    photo.querySelector(
      "figcaption"
    );


  viewerImage.src =
    image.src;


  viewerImage.alt =
    image.alt;


  viewerCaption.textContent =
    caption
      ? caption.textContent
      : image.alt;


  viewerCounter.textContent =
    (currentPhotoIndex + 1) +
    " / " +
    currentPhotoList.length;

}


/* ==========================================
   NEXT PHOTO
========================================== */

viewerNext.addEventListener(
  "click",
  () => {

    currentPhotoIndex++;

    if (
      currentPhotoIndex >=
      currentPhotoList.length
    ) {

      currentPhotoIndex = 0;

    }

    showCurrentPhoto();

  }
);


/* ==========================================
   PREVIOUS PHOTO
========================================== */

viewerPrev.addEventListener(
  "click",
  () => {

    currentPhotoIndex--;

    if (
      currentPhotoIndex < 0
    ) {

      currentPhotoIndex =
        currentPhotoList.length - 1;

    }

    showCurrentPhoto();

  }
);


/* ==========================================
   CLOSE VIEWER
========================================== */

function closePhotoViewer() {

  photoViewer.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "auto";

}


viewerClose.addEventListener(
  "click",
  closePhotoViewer
);


photoViewer.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      photoViewer
    ) {

      closePhotoViewer();

    }

  }
);


/* ==========================================
   KEYBOARD CONTROL
========================================== */

document.addEventListener(
  "keydown",
  event => {

    if (
      !photoViewer.classList
        .contains("active")
    ) {

      return;

    }


    if (event.key === "ArrowRight") {

      viewerNext.click();

    }


    if (event.key === "ArrowLeft") {

      viewerPrev.click();

    }


    if (event.key === "Escape") {

      closePhotoViewer();

    }

  }
);


/* FIRST LOAD */

updateGallery();
/* ==================================
   YATRA PLAN SWITCHER
================================== */

const planButtons =
  document.querySelectorAll(".plan-btn");

const planContents =
  document.querySelectorAll(".plan-content");


planButtons.forEach(button => {

  button.addEventListener("click", () => {

    const selectedPlan =
      button.dataset.plan;


    planButtons.forEach(btn => {

      btn.classList.remove("active");

    });


    planContents.forEach(content => {

      content.classList.remove("active");

    });


    button.classList.add("active");


    document
      .getElementById(selectedPlan)
      .classList.add("active");

  });

});
/* =====================================
   TODAY DATE
===================================== */

const todayDateElements =
  document.querySelectorAll(
    ".today-date"
  );


const today =
  new Date();


const hindiDate =
  today.toLocaleDateString(
    "hi-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );


todayDateElements.forEach(
  element => {

    element.textContent =
      hindiDate;

  }
);


/* =====================================
   FAVORITE DARSHAN
===================================== */

const favoriteButtons =
  document.querySelectorAll(
    ".favorite-btn"
  );


const favoriteMessage =
  document.getElementById(
    "favoriteMessage"
  );


favoriteButtons.forEach(
  button => {

    const name =
      button.dataset.name;


    const saved =
      localStorage.getItem(
        "favorite-" + name
      );


    if (saved === "yes") {

      button.classList.add(
        "saved"
      );

      button.textContent =
        "♥ Favorite";

    }


    button.addEventListener(
      "click",
      () => {

        const isSaved =
          button.classList
            .contains("saved");


        if (isSaved) {

          button.classList.remove(
            "saved"
          );

          button.textContent =
            "♡ Favorite";


          localStorage.removeItem(
            "favorite-" + name
          );


          showFavoriteMessage(
            "Favorite से हटा दिया गया"
          );

        } else {

          button.classList.add(
            "saved"
          );

          button.textContent =
            "♥ Favorite";


          localStorage.setItem(
            "favorite-" + name,
            "yes"
          );


          showFavoriteMessage(
            "🌸 " +
            name +
            " दर्शन Favorite में सुरक्षित"
          );

        }

      }
    );

  }
);


function showFavoriteMessage(
  message
) {

  favoriteMessage.textContent =
    message;


  favoriteMessage.style.display =
    "block";


  setTimeout(
    () => {

      favoriteMessage.style.display =
        "none";

    },
    2500
  );

}


/* =====================================
   WHATSAPP SHARE
===================================== */

const whatsappShare =
  document.getElementById(
    "whatsappShare"
  );


whatsappShare.addEventListener(
  "click",
  () => {

    const message =
      "🌸 श्री वृंदावन धाम के दिव्य दर्शन 🌸\n\n" +
      "राधा रानी, ठाकुर जी और ब्रज दर्शन की जानकारी यहाँ देखें:\n\n" +
      window.location.href +
      "\n\nराधे राधे 🙏";


    const whatsappURL =
      "https://wa.me/?text=" +
      encodeURIComponent(
        message
      );


    window.open(
      whatsappURL,
      "_blank"
    );

  }
);


/* =====================================
   MOBILE SHARE
===================================== */

const nativeShare =
  document.getElementById(
    "nativeShare"
  );


nativeShare.addEventListener(
  "click",
  async () => {

    if (navigator.share) {

      try {

        await navigator.share({

          title:
            "श्री वृंदावन धाम",

          text:
            "राधा रानी और ठाकुर जी के दिव्य दर्शन",

          url:
            window.location.href

        });

      } catch (error) {

        console.log(
          "Share cancelled"
        );

      }

    } else {

      copyWebsiteLink();

    }

  }
);


/* =====================================
   COPY WEBSITE LINK
===================================== */

const copyLink =
  document.getElementById(
    "copyLink"
  );


const copyMessage =
  document.getElementById(
    "copyMessage"
  );


copyLink.addEventListener(
  "click",
  copyWebsiteLink
);


async function copyWebsiteLink() {

  try {

    await navigator.clipboard
      .writeText(
        window.location.href
      );


    copyMessage.style.display =
      "block";


    setTimeout(
      () => {

        copyMessage.style.display =
          "none";

      },
      2500
    );

  } catch (error) {

    alert(
      "Link copy नहीं हो पाया।"
    );

  }

}
/* ==========================================
   AUTOMATIC DAILY DARSHAN
========================================== */
/* ==========================================
   PROFESSIONAL AUTOMATIC DAILY DARSHAN
========================================== */


/*
  अभी test के लिए जितनी वास्तविक photos
  folder में हैं उतनी संख्या यहाँ लिखें।
*/

const totalRadhaPhotos = 10;
const totalThakurPhotos = 10;


/* ==========================================
   CREATE DAILY NUMBER
========================================== */

function getDayNumber() {

  const today = new Date();

  /*
    YYYY-MM-DD के आधार पर day number बनाते हैं।
    इससे पूरे दिन photo एक जैसी रहेगी।
  */

  const year = today.getFullYear();

  const start =
    new Date(year, 0, 0);

  const difference =
    today - start;

  const oneDay =
    1000 * 60 * 60 * 24;

  return Math.floor(
    difference / oneDay
  );

}


/* ==========================================
   GET TODAY'S PHOTO NUMBER
========================================== */

function getDailyPhotoNumber(
  totalPhotos,
  offset = 0
) {

  if (totalPhotos <= 0) {
    return 1;
  }

  const day =
    getDayNumber();

  return (
    ((day - 1 + offset)
      % totalPhotos)
    + 1
  );

}


/* ==========================================
   RADHA RANI DAILY DARSHAN
========================================== */

const todayRadha =
  document.getElementById(
    "todayRadha"
  );


if (todayRadha) {

  const radhaNumber =
    getDailyPhotoNumber(
      totalRadhaPhotos
    );


  todayRadha.src =
    "images/radha/radhe" +
    radhaNumber +
    ".jpg";


  todayRadha.alt =
    "आज के श्री राधा रानी दर्शन";


  todayRadha.onerror =
    function () {

      this.onerror = null;

      this.src =
        "images/radha/radhe1.jpg";

    };

}


/* ==========================================
   THAKUR JI DAILY DARSHAN
========================================== */

const todayThakur =
  document.getElementById(
    "todayThakur"
  );


if (todayThakur) {

  /*
    Offset रखने से दोनों collections
    अलग क्रम में rotate हो सकती हैं।
  */

  const thakurNumber =
    getDailyPhotoNumber(
      totalThakurPhotos,
      5
    );


  todayThakur.src =
    "images/thakur/thakur" +
    thakurNumber +
    ".jpg";


  todayThakur.alt =
    "आज के ठाकुर जी दर्शन";


  todayThakur.onerror =
    function () {

      this.onerror = null;

      this.src =
        "images/thakur/thakur1.jpg";

    };

}


/* ==========================================
   DAILY DARSHAN DATE
========================================== */

const darshanDate =
  new Date();


const formattedDarshanDate =
  darshanDate.toLocaleDateString(
    "hi-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );


document
  .querySelectorAll(
    ".today-date"
  )
  .forEach(date => {

    date.textContent =
      formattedDarshanDate;

  });
/* ==========================================
   RADHA RANI PHOTO
========================================== */

const radhaPhotoNumber =
  ((dayOfYear - 1)
  % totalRadhaPhotos) + 1;


const todayRadhaImage =
  document.getElementById(
    "todayRadha"
  );


if (todayRadhaImage) {

  todayRadhaImage.src =
    "images/radhe" +
    radhaPhotoNumber +
    ".jpg";

}


/* ==========================================
   THAKUR JI PHOTO
========================================== */

/*
  ठाकुर जी के लिए अलग offset रखा है,
  ताकि दोनों collections independently
  rotate हों।
*/

const thakurPhotoNumber =
  ((dayOfYear + 6)
  % totalThakurPhotos) + 1;


const todayThakurImage =
  document.getElementById(
    "todayThakur"
  );


if (todayThakurImage) {

  todayThakurImage.src =
    "images/thakur" +
    thakurPhotoNumber +
    ".jpg";

}


/* ==========================================
   PHOTO ERROR FALLBACK
========================================== */

if (todayRadhaImage) {

  todayRadhaImage.onerror =
    function () {

      this.src =
        "images/radhe1.jpg";

    };

}


if (todayThakurImage) {

  todayThakurImage.onerror =
    function () {

      this.src =
        "images/thakur1.jpg";

    };

}