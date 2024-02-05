
const result = document.getElementById('result');
document.addEventListener('DOMContentLoaded', function() {
  // ... h3 animation code ...

  // Animate dynamicSubtitle element
  const dynamicSubtitle = document.getElementById('dynamicSubtitle');
  dynamicSubtitle.style.transition = 'opacity 1s';
  let texts = ["Data Visualization", "Data Engineering", "Analytics Engineering"];
  let index = 0;

  const changeText = () => {
      dynamicSubtitle.classList.add('fade-out');
      dynamicSubtitle.addEventListener('transitionend', function() {
          dynamicSubtitle.textContent = texts[index++ % texts.length];
          dynamicSubtitle.classList.remove('fade-out');
          dynamicSubtitle.classList.add('fade-in');
      }, { once: true });
  };

  setTimeout(changeText, 500);
  setInterval(changeText, 1000+1500); // 2000 for fade in and out duration
});

// ... Button Scroll ... //
document.addEventListener('DOMContentLoaded', (event) => {
    const navbarLinks = document.querySelectorAll('ul.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the href attribute is an anchor link (starts with #)
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Prevent default only for anchor links

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
//-------hcatpcha-------//


// form.addEventListener('submit', function(e) {

//     const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

//     if (!hCaptcha) {
//         e.preventDefault();
//         alert("Please fill out captcha field")
//         return
//     }
// });
//------Form Submission------//

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});