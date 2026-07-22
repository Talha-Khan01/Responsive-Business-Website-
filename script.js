document.addEventListener("DOMContentLoaded", () => {


    // Mobile Menu

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");


    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navLinks.classList.toggle("show");

        });

    }



    // Close menu after clicking link

    document.querySelectorAll(".nav-links a")
    .forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("show");

        });

    });



    // Navbar shadow on scroll

    window.addEventListener("scroll",()=>{

        const header=document.querySelector("header");


        if(window.scrollY>50){

            header.style.boxShadow=
            "0 5px 20px rgba(0,0,0,.15)";

        }
        else{

            header.style.boxShadow="none";

        }

    });




    // Contact Form

    const form=document.getElementById("contactForm");


    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();


            alert(
                "Thank you! Your message has been sent successfully."
            );


            form.reset();

        });

    }




    // Load JSON Data

    loadWebsiteData();


});





async function loadWebsiteData(){


    try{


        const response =
        await fetch("data/data.json");


        const data =
        await response.json();



        // Testimonials

        const testimonialBox =
        document.getElementById("testimonialContainer");


        if(testimonialBox){


            data.testimonials.forEach(item=>{


                const div=document.createElement("div");


                div.className="card";


                div.innerHTML=`

                <i class="fas fa-quote-left"></i>

                <p>
                ${item.message}
                </p>

                <h3>
                ${item.name}
                </h3>

                <small>
                ${item.company}
                </small>

                `;


                testimonialBox.appendChild(div);


            });


        }





        // Dynamic Services

        const serviceBox =
        document.querySelector(".services-grid");


        if(serviceBox && data.services){


            serviceBox.innerHTML="";


            data.services.forEach(service=>{


                serviceBox.innerHTML +=`

                <div class="card">

                <i class="${service.icon}"></i>

                <h2>
                ${service.title}
                </h2>

                <p>
                ${service.description}
                </p>

                </div>

                `;


            });


        }



    }


    catch(error){


        console.log(
            "JSON Loading Error:",
            error
        );


    }


}
