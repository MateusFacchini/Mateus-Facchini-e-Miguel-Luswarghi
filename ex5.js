

function Somar(){
    var soma = 0;

    for (var i = arguments.length - 1; i >= 0; i--) {
        soma += Number(arguments[i]);
    }

    return soma;
}

var currentUser = {
    profile: { hp: "300", attack: 100, luck: 10 }
};

var total = Somar(currentUser.profile.hp, currentUser.profile.attack, currentUser.profile.luck) / 3;

console.log(total);