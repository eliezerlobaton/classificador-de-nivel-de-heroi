function classifyHero() {
  const heroName = document.getElementById("heroName").value;
  const heroXP = parseInt(document.getElementById("heroXP").value);
  let result = "";

  if (heroXP < 1000) {
    result = "Ferro";
  } else if (heroXP >= 1000 && heroXP <= 2000) {
    result = "Bronze";
  } else if (heroXP > 2000 && heroXP <= 5000) {
    result = "Prata";
  } else if (heroXP > 5000 && heroXP <= 7000) {
    result = "Ouro";
  } else if (heroXP > 7000 && heroXP <= 8000) {
    result = "Platina";
  } else if (heroXP > 8000 && heroXP <= 9000) {
    result = "Ascendente";
  } else if (heroXP > 9000 && heroXP <= 10000) {
    result = "Imortal";
  } else {
    result = "Radiante";
  }

  const output = `O Herói de nome ${heroName} está no nível de ${result}`;
  document.getElementById("result").innerText = output;
}
