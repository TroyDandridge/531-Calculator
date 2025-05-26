function calculate(){
    const deadlift = Number(document.getElementById("deadlift").value) * .9;
    const shoulderPress = Number(document.getElementById("shoulderPress").value) * .9;
    const squat = Number(document.getElementById("squat").value) * .9;
    const bench = Number(document.getElementById("bench").value) * .9;
    const cell = document.querySelectorAll("td");

    cell[0].textContent = (deadlift * .65).toFixed(1);
    cell[1].textContent =  (shoulderPress * .65).toFixed(1);
    cell[2].textContent =  (squat * .65).toFixed(1);
    cell[3].textContent = (bench * .65).toFixed(1);

    cell[4].textContent = (deadlift * .75).toFixed(1);
    cell[5].textContent =  (shoulderPress * .75).toFixed(1);
    cell[6].textContent =  (squat * .75).toFixed(1);
    cell[7].textContent = (bench * .75).toFixed(1);

    cell[8].textContent = (deadlift * .85).toFixed(1);
    cell[9].textContent =  (shoulderPress * .85).toFixed(1);
    cell[10].textContent =  (squat * .85).toFixed(1);
    cell[11].textContent = (bench * .85).toFixed(1);

    cell[12].textContent = (deadlift * .70).toFixed(1);
    cell[13].textContent =  (shoulderPress * .70).toFixed(1);
    cell[14].textContent =  (squat * .70).toFixed(1);
    cell[15].textContent = (bench * .70).toFixed(1);

    cell[16].textContent = (deadlift * .80).toFixed(1);
    cell[17].textContent =  (shoulderPress * .80).toFixed(1);
    cell[18].textContent =  (squat * .80).toFixed(1);
    cell[19].textContent = (bench * .80).toFixed(1);

    cell[20].textContent = (deadlift * .90).toFixed(1);
    cell[21].textContent =  (shoulderPress * .90).toFixed(1);
    cell[22].textContent =  (squat * .90).toFixed(1);
    cell[23].textContent = (bench * .90).toFixed(1);

    cell[24].textContent = (deadlift * .75).toFixed(1);
    cell[25].textContent =  (shoulderPress * .75).toFixed(1);
    cell[26].textContent =  (squat * .75).toFixed(1);
    cell[27].textContent = (bench * .75).toFixed(1);

    cell[28].textContent = (deadlift * .85).toFixed(1);
    cell[29].textContent =  (shoulderPress * .85).toFixed(1);
    cell[30].textContent =  (squat * .85).toFixed(1);
    cell[31].textContent = (bench * .85).toFixed(1);

    cell[32].textContent = (deadlift * .95).toFixed(1);
    cell[33].textContent =  (shoulderPress * .95).toFixed(1);
    cell[34].textContent =  (squat * .95).toFixed(1);
    cell[35].textContent = (bench * .95).toFixed(1);

    cell[36].textContent = (deadlift * .40).toFixed(1);
    cell[37].textContent =  (shoulderPress * .40).toFixed(1);
    cell[38].textContent =  (squat * .40).toFixed(1);
    cell[39].textContent = (bench * .40).toFixed(1);

    cell[40].textContent = (deadlift * .50).toFixed(1);
    cell[41].textContent =  (shoulderPress * .50).toFixed(1);
    cell[42].textContent =  (squat * .50).toFixed(1);
    cell[43].textContent = (bench * .50).toFixed(1);

    cell[44].textContent = (deadlift * .60).toFixed(1);
    cell[45].textContent =  (shoulderPress * .60).toFixed(1);
    cell[46].textContent = (squat * .60).toFixed(1);
    cell[47].textContent = (bench * .60).toFixed(1);

    cell[48].textContent = (deadlift * .40).toFixed(1);
    cell[49].textContent =  (shoulderPress * .40).toFixed(1);
    cell[50].textContent =  (squat * .40).toFixed(1);
    cell[51].textContent = (bench * .40).toFixed(1);

    cell[52].textContent = (deadlift * .50).toFixed(1);
    cell[53].textContent =  (shoulderPress * .50).toFixed(1);
    cell[54].textContent =  (squat * .50).toFixed(1);
    cell[55].textContent = (bench * .50).toFixed(1);
}

function reset(){
    const cell = document.querySelectorAll("td");
    for(let i = 0; i<=55; i++){
        cell[i].textContent = "";
    }
}