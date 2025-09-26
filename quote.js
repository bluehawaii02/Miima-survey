const dropBtn = document.querySelector(".bx-menu");
const dropContent = document.querySelector(".head-mid-nd");

if(dropBtn && dropContent){
    dropBtn.addEventListener("click", () => {
        if(dropContent.style.display == "none"){
            dropContent.style.display = "flex";
        }else{
            dropContent.style.display = "none";
        };
    })
};

//let's add interactivity to the Go To payment button

const GTpaymentBtn = document.querySelector(".p-payment");
const form = document.querySelector(".form02");
const paymentPage = document.querySelector(".payment");
const Ximg = document.querySelector(".img5");

if(GTpaymentBtn){
    GTpaymentBtn.addEventListener("click", () => {
        form.style.display = "none";
        paymentPage.style.display = "flex";
        Ximg.style.display = "none";
    });
};

const ToZelle = document.querySelector(".zelleBtn");
const ToBank = document.querySelector(".bankBtn");
const ToCard = document.querySelector(".creditBtn");
const ZellePage =  document.querySelector(".zelle");
const BankPage = document.querySelector(".bank");

if(ToZelle && ZellePage && BankPage){
    ToZelle.addEventListener("click", () => {
        if(ZellePage.style.display == "none"){
        ZellePage.style.display = "flex";
        BankPage.style.display = "none";
        }else{
            ZellePage.style.display = "none";
        };
    });
}

if(ToBank && BankPage && ZellePage){
    ToBank.addEventListener("click", () => {
        if(BankPage.style.display == "none"){
            BankPage.style.display = "flex";
            ZellePage.style.display = "none";
        }else{
            BankPage.style.display = "none";
        };
    });
}

const clearBtn = document.querySelector(".clear");

if(clearBtn && form){
    clearBtn.addEventListener("click", () => {
        form.reset();
    })
}
// not really sure how to explain what I'm doing

const ThirdA = document.querySelector(".third-a");
const ThirdsContent = document.querySelector(".dropdown-grandchild");
const body = document.body;

if(ThirdA && ThirdsContent){
    ThirdA.addEventListener("click", () => {
        if(ThirdsContent.style.display == "none"){
            ThirdsContent.style.display = "flex";
            body.style.overflow = "hidden";
        }else{
            ThirdsContent.style.display = "none";
            body.style.overflow = "scroll";
        }
    });
}