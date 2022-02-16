let wincomp;
let winuser;
let userchoice;
let compchoice;

if (wincomp == null)
{
    wincomp = 0;
}   
if (winuser == null)
{
    winuser = 0;
}

function fimjogo()
{
    if (wincomp + winuser == 5)
    {
        document.querySelector('.r-jogo-titulo').innerHTML = "Fim do Jogo. Vamos ao resultado:";
        if (wincomp > winuser)
        {
            document.querySelector('.txt-r-jogo-titulo').innerHTML = "Computador ganhou!. Computador: " + wincomp.toString() + ". Usuário: " + winuser.toString();
        }
        else if (winuser > wincomp)
        {
            document.querySelector('.txt-r-jogo-titulo').innerHTML = "Usuário ganhou!. Usuário: " + winuser.toString() + ". Computador: " + wincomp.toString();        
        }
        return true;
    }
    else
    {
        return false;
    }
}

function pedra()
{
    userchoice = "pedra";
}

function papel()
{
    userchoice = "papel";
}

function tesoura()
{
    userchoice = "tesoura";
}

function jogoppt()
{
    let winner = "Sem vencendor";
    let randomchoice;
    let min = 1;
    let max = 3;
    
    if ( fimjogo() )
    {
        return;
    }
    else
    {
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
            wincomp++;
        }
        else if (compchoice == "pedra" && userchoice == "papel")
        {
            winner = "Usuário ganhou. Papel ganha de Pedra";
            winuser++;
        }
        else if (compchoice == "pedra" && userchoice == "pedra")
        {
            winner = "Empatou. Os dois usaram Pedra";
        }
        else if (compchoice == "tesoura" && userchoice == "papel")
        {
            winner = "Computador ganhou. Tesoura ganha de Papel";
            wincomp++;
        }
        else if (compchoice == "tesoura" && userchoice == "pedra")
        {
            winner = "Usuário ganhou. Pedra ganha de Tesoura";
            winuser++;
        }
        else if (compchoice == "tesoura" && userchoice == "tesoura")
        {
            winner = "Empatou. Os dois usaram Tesoura";
        }
        else if (compchoice == "papel" && userchoice == "tesoura")
        {
            winner = "Usuario ganhou. Tesoura ganha de Papel";
            winuser++;
        }
        else if (compchoice == "papel" && userchoice == "pedra")
        {
            winner = "Computador ganhou. Papel ganha de Pedra";
            wincomp++;
        }
        else if (compchoice == "papel" && userchoice == "papel")
        {
            winner = "Empatou. Os dois usaram papel";
        }
        document.querySelector(".resultado").innerHTML = winner;
        document.querySelector(".wintotalcomp").innerHTML = wincomp;
        document.querySelector(".wintotaluser").innerHTML = winuser;
    }
}

if (wincomp + winuser == 5)
{

}