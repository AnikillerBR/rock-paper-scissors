function jogoppt()
{
    let userchoiceqs = document.querySelector(".txtuser");
    let userchoice = userchoiceqs.value;
    let winner = "Sem vencendor";
    let compchoice;
    let randomchoice;
    let min = 1;
    let max = 3;

    userchoice = String(userchoice).toLowerCase();

    randomchoice = Math.floor(Math.random() * (max - min + 1) + min);

    if (randomchoice == 1)
        compchoice = "pedra";
    else if (randomchoice == 2)
        compchoice = "papel";
    else if (randomchoice == 3)
        compchoice = "tesoura";

    if (compchoice == "pedra" && userchoice == "tesoura")
    {
        winner = "Computador ganhou. Pedra ganha de Tesoura";
    }
    else if (compchoice == "pedra" && userchoice == "papel")
    {
        winner = "Usuário ganhou. Papel ganha de Pedra";
    }
    else if (compchoice == "pedra" && userchoice == "pedra")
    {
        winner = "Empatou. Os dois usaram Pedra";
    }
    else if (compchoice == "tesoura" && userchoice == "papel")
    {
        winner = "Computador ganhou. Tesoura ganha de Papel";
    }
    else if (compchoice == "tesoura" && userchoice == "pedra")
    {
        winner = "Usuário ganhou. Pedra ganha de Tesoura";
    }
    else if (compchoice == "tesoura" && userchoice == "tesoura")
    {
        winner = "Empatou. Os dois usaram Tesoura";
    }
    else if (compchoice == "papel" && userchoice == "tesoura")
    {
        winner = "Usuario ganhou. Tesoura ganha de Papel";
    }
    else if (compchoice == "papel" && userchoice == "pedra")
    {
        winner = "Computador ganhou. Papel ganha de Pedra";
    }
    else if (compchoice == "papel" && userchoice == "papel")
    {
        winner = "Empatou. Os dois usaram papel";
    }
    document.querySelector(".resultado").innerHTML = winner;
}