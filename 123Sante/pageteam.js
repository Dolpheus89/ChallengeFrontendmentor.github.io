const teamMembers = document.querySelectorAll(".js_team_member");
const teamMembersModal = document.querySelector(".js_team_member_modal");
const teamMemberModalName = teamMembersModal.querySelector(".team_member_modal__name");
const teamMemberModalDescription = teamMembersModal.querySelector(".team_member_modal__description");
const modalContent = {

    sabrina: {
        name: "Sabrina",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste a voluptatum earum! Dignissimos, vitae corporis, soluta exercitationem animi illum repellendus labore illo officiis aliquid impedit. Aspernatur eligendi odit alias.",
    },
    daniela: {
        name: "Daniela",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste a voluptatum earum! Dignissimos, vitae corporis, soluta exercitationem animi illum repellendus labore illo officiis aliquid impedit. Aspernatur eligendi odit alias.",
    },
    egle: {
        name: "Egle",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste a voluptatum earum! Dignissimos, vitae corporis, soluta exercitationem animi illum repellendus labore illo officiis aliquid impedit. Aspernatur eligendi odit alias.",
    },
    cedric: {
        name: "Cedric",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste a voluptatum earum! Dignissimos, vitae corporis, soluta exercitationem animi illum repellendus labore illo officiis aliquid impedit. Aspernatur eligendi odit alias.",
    },
    ivan: {
        name: "Ivan",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste a voluptatum earum! Dignissimos, vitae corporis, soluta exercitationem animi illum repellendus labore illo officiis aliquid impedit. Aspernatur eligendi odit alias.",
    },
    romain: {
        name: "Romain",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste a voluptatum earum! Dignissimos, vitae corporis, soluta exercitationem animi illum repellendus labore illo officiis aliquid impedit. Aspernatur eligendi odit alias.",
    },
    florian: {
        name: "Florian",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iste a voluptatum earum! Dignissimos, vitae corporis, soluta exercitationem animi illum repellendus labore illo officiis aliquid impedit. Aspernatur eligendi odit alias.",
    },
}

teamMembers.forEach((member) => {
    member.addEventListener("click", function (evt) {
        /*вывод в консоль объекта события
         console.log(evt);*/
        teamMemberModalName.innerHTML = modalContent[this.id].name
        teamMemberModalDescription.innerHTML = modalContent[this.id].description;




        teamMembersModal.classList.add("_open")
        member.classList.toggle("flipped");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach((member) => {
        member.addEventListener("click", function () {
            member.classList.toggle("flipped");
        });
    });
});

teamMembersModal.addEventListener("click", function () {
    teamMembersModal.classList.remove("_open");

    // Вам также, возможно, нужно удалить класс "flipped" у активного team-member
    const flippedMember = document.querySelector(".js_team_member.flipped");
    if (flippedMember) {
        flippedMember.classList.remove("flipped");
    }
});












