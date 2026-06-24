function loadRobot() {

    let command =
    document.getElementById("searchBox").value;


    if(command === "RUN.Robot"){

        document.getElementById("commands")
        .style.display = "block";


        document.getElementById("status")
        .innerHTML =
        "MODE: NORMAL";


    }

    else{

        alert("Type RUN.Robot");

    }

}





function robotAction(action){


    let robot =
    document.getElementById("robot");


    // stop vorige beweging

    robot.style.animation = "none";


    setTimeout(function(){



        if(action === "PATROL"){

            robot.style.animation =
            "runMove 0.5s infinite";

        }



        if(action === "SCAN"){

            robot.style.animation =
            "scanMove 2s infinite";

        }



        if(action === "DEFEND"){

            robot.style.animation =
            "defendMove 1s infinite";

        }



        if(action === "BOOST"){

            robot.style.animation =
            "boostMove 0.4s infinite";

        }



        if(action === "REPAIR"){

            robot.style.animation =
            "repairMove 1s infinite";

        }



        if(action === "STOP"){

            robot.style.animation =
            "none";

        }



    },50);



    document.getElementById("status")
    .innerHTML =
    "ACTION: " + action;


if(action === "TARGET"){

robot.style.animation =
"scanMove 0.5s infinite";

}


if(action === "HUNT"){

robot.style.animation =
"runMove 0.3s infinite";

}


if(action === "COMBAT"){

robot.style.animation =
"defendMove 0.4s infinite";

}


if(action === "OVERRIDE"){

robot.style.animation =
"powerUp 0.5s infinite";

}


if(action === "POWER SURGE"){

robot.style.animation =
"boostMove 0.2s infinite";

}


}


function killerMode(){


let robot =
document.getElementById("robot");


let screen =
document.getElementById("transformScreen");



screen.style.display="flex";



setTimeout(function(){


screen.style.display="none";



robot.classList.add("killerMode");



document.getElementById("status")
.innerHTML =
"SYSTEM OVERRIDE: KILLER MODE ⚡";



document.getElementById("commandButtons")
.innerHTML = `


<button onclick="robotAction('TARGET')">
TARGET
</button>


<button onclick="robotAction('HUNT')">
HUNT
</button>


<button onclick="robotAction('COMBAT')">
COMBAT
</button>


<button onclick="robotAction('OVERRIDE')">
OVERRIDE
</button>


<button onclick="robotAction('POWER SURGE')">
POWER SURGE
</button>


<button onclick="robotAction('STOP')">
STOP
</button>


`;



},2000);



}




function normalMode(){


    let robot =
    document.getElementById("robot");


    robot.classList.remove("killerMode");


    document.getElementById("status")
    .innerHTML =
    "MODE: NORMAL";

document.getElementById("scan")
.innerHTML =
"SCAN: " + action + " ACTIVE";

}