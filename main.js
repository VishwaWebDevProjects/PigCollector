System.register(["./piggoControllo", "./piggiesClass", "./pigBreeds"], function (exports_1, context_1) {
    "use strict";
    var piggoControllo_1, piggiesClass_1, pigBreeds_1, nameExists, heightExists, weightExists, personalityExists, categoryExists, breedExists, uniquenessExists, additionForm, createButton, deletePig, tdUniqueAttr, myForm, myTable, pigBreed, pc, blackPigs, whitePigs, chestNutPigs, greyPigs, moreInfos, moreInfoDetails, showMoreTable, piggoUniqueAttribute, piggoBreeds, showOutput;
    var __moduleName = context_1 && context_1.id;
    function updateLocalStorage() {
        var piggoName = document.getElementById("piggoName");
        const pigName = piggoName.value;
        var piggoHeight = document.getElementById("piggoHeight");
        const pigHeight = piggoHeight.value;
        var piggoWeight = document.getElementById("piggoWeight");
        const pigWeight = piggoWeight.value;
        var piggoPersonality = document.getElementById("piggoPersonality");
        const pigPersonality = piggoPersonality.value;
        var piggoUniqueAttribute = document.getElementById("piggoUniqueAttribute");
        const pigUniqueAttribute = piggoUniqueAttribute.value;
        var pigoCategory = document.getElementById("pigCategory");
        const pigCategory = pigoCategory.value;
        var pig = new piggiesClass_1.Pigs(pigName, pigHeight, pigWeight, pigPersonality, pigCategory, pigBreed, pigUniqueAttribute);
        pc.add(pig);
    }
    function updateTable() {
        if (localStorage.length > 0) {
            blackPigs = [];
            whitePigs = [];
            chestNutPigs = [];
            greyPigs = [];
            myTable.innerHTML = "";
            var keys = Object.keys(localStorage);
            for (let i = 0; i < keys.length; i++) {
                var splitKey = keys[i].split(" ");
                var key = splitKey[0];
                if (key === "Black") {
                    blackPigs.push(JSON.parse(localStorage.getItem(keys[i])));
                }
                else if (key === "White") {
                    whitePigs.push(JSON.parse(localStorage.getItem(keys[i])));
                }
                else if (key === "Chestnut") {
                    chestNutPigs.push(JSON.parse(localStorage.getItem(keys[i])));
                }
                else {
                    greyPigs.push(JSON.parse(localStorage.getItem(keys[i])));
                }
            }
            sortPigs(blackPigs, chestNutPigs, greyPigs, whitePigs);
            printPigs(blackPigs);
            printPigs(chestNutPigs);
            printPigs(greyPigs);
            printPigs(whitePigs);
        }
    }
    function compare(a, b) {
        if (a.piggyName < b.piggyName) {
            return -1;
        }
        if (a.piggyName > b.piggyName) {
            return 1;
        }
        return 0;
    }
    function sortPigs(blackPigs, chestNutPigs, greyPigs, whitePigs) {
        blackPigs.sort(compare);
        chestNutPigs.sort(compare);
        greyPigs.sort(compare);
        whitePigs.sort(compare);
    }
    function tableRowCreator() {
        var tr = document.createElement("tr");
        return tr;
    }
    function tableDataCellCreator() {
        var td = document.createElement("td");
        return td;
    }
    function printPigs(piggos) {
        for (let i = 0; i < piggos.length; i++) {
            var tr = tableRowCreator();
            var pigieName = tableDataCellCreator();
            var pigieCategory = tableDataCellCreator();
            var moreInfoDataCell = tableDataCellCreator();
            var deleteDataCell = tableDataCellCreator();
            // var del = document.createElement("a");
            pigieName.innerHTML = piggos[i].piggyName;
            pigieCategory.innerHTML = piggos[i].piggyCategory;
            moreInfoDataCell.setAttribute("class", "mf");
            moreInfoDataCell.innerHTML = "More Info";
            moreInfoDataCell.addEventListener('click', mfFxn, false);
            deleteDataCell.setAttribute("class", "rip");
            // deleteDataCell.setAttribute("href", "");
            deleteDataCell.innerHTML = "Delete";
            deleteDataCell.addEventListener('click', delPigFxn, false);
            // deleteDataCell.append(del);
            tr.append(pigieName);
            tr.append(pigieCategory);
            tr.append(moreInfoDataCell);
            tr.append(deleteDataCell);
            tr.setAttribute("id", piggos[i].piggyCategory + " " + piggos[i].piggyName + piggos[i].piggyHeight + piggos[i].piggyWeight + piggos[i].piggyPersonality + piggos[i].piggyBreed + piggos[i].piggyUniqueAbility);
            myTable.append(tr);
        }
    }
    function mfFxn(event) {
        var target = event.target;
        var parentNode = target.parentNode;
        var pID = parentNode.id;
        target.append(showMoreTable);
        updateMxTable(pID);
        if (showMoreTable.id === "tf") {
            showMoreTable.setAttribute("id", "tfShow");
        }
        else {
            showMoreTable.setAttribute("id", "tf");
        }
    }
    function updateMxTable(pID) {
        var value = JSON.parse(localStorage.getItem(pID));
        moreInfoDetails[0].innerHTML = value.piggyName;
        moreInfoDetails[1].innerHTML = value.piggyBreed;
        moreInfoDetails[2].innerHTML = value.piggyHeight;
        moreInfoDetails[3].innerHTML = value.piggyWeight;
        moreInfoDetails[4].innerHTML = value.piggyUniqueAbility;
        moreInfoDetails[5].innerHTML = value.piggyPersonality;
        moreInfoDetails[6].innerHTML = value.piggyCategory;
        var splitty = pID.split(" ");
        var pigBreedo = splitty[0];
        var specialDataCell = document.getElementById("specialData");
        if (pigBreedo === "White") {
            specialDataCell.innerHTML = "Running";
        }
        else if (pigBreedo === "Chestnut") {
            specialDataCell.innerHTML = "Language";
        }
        else if (pigBreedo === "Grey") {
            specialDataCell.innerHTML = "Swimming";
        }
        else {
            specialDataCell.innerHTML = "Strength";
        }
    }
    function delPigFxn(event) {
        var result = confirm("Confirm deletion?");
        if (result) {
            var target = event.target;
            var parent = target.parentNode;
            pc.remove(parent.id);
            parent.remove();
        }
    }
    function resetEverything() {
        nameExists = false;
        heightExists = false;
        weightExists = false;
        personalityExists = false;
        categoryExists = false;
        breedExists = false;
        uniquenessExists = false;
        additionForm.style.display = "none";
        tdUniqueAttr.parentElement.style.display = "none";
        createButton.disabled = true;
        document.getElementById("cancelBtn").style.display = "none";
        document.getElementById("piggoBreedRow").style.display = "none";
        document.getElementById("uniqueAttribute").style.display = "none";
        myForm.reset();
    }
    function updateDefaultBreedValue() {
        var chooseBreed = document.getElementById("chooseBreed");
        chooseBreed.selected = true;
        breedExists = false;
        uniquenessExists = false;
        disablingFalse();
    }
    function updateRowForWhitePigs() {
        for (let i = 0; i < piggoBreeds.length; i++) {
            piggoBreeds[i].innerHTML = pigBreeds_1.whitePigBreeds[i];
            piggoBreeds[i].value = pigBreeds_1.whitePigBreeds[i];
        }
        updateDefaultBreedValue();
        categoryExists = true;
        tdUniqueAttr.innerHTML = "Running";
        piggoUniqueAttribute.setAttribute("type", "range");
        piggoUniqueAttribute.setAttribute("min", "1");
        piggoUniqueAttribute.setAttribute("max", "100");
        showOutput.id = "showID";
        showOutput.innerHTML = "";
        tdUniqueAttr.parentElement.style.display = "table-row";
    }
    function updateRowForChestnutPigs() {
        for (let i = 0; i < piggoBreeds.length; i++) {
            piggoBreeds[i].innerHTML = pigBreeds_1.chestNutPigBreeds[i];
            piggoBreeds[i].value = pigBreeds_1.chestNutPigBreeds[i];
        }
        updateDefaultBreedValue();
        categoryExists = true;
        tdUniqueAttr.innerHTML = "Language";
        piggoUniqueAttribute.setAttribute("type", "text");
        piggoUniqueAttribute.removeAttribute("min");
        piggoUniqueAttribute.removeAttribute("max");
        piggoUniqueAttribute.setAttribute("placeholder", "Enter language");
        piggoUniqueAttribute.value = "";
        showOutput.id = "hideID";
        showOutput.innerHTML = "";
        tdUniqueAttr.parentElement.style.display = "table-row";
    }
    function updateRowForGreyPigs() {
        for (let i = 0; i < piggoBreeds.length; i++) {
            piggoBreeds[i].innerHTML = pigBreeds_1.greyPigBreeds[i];
            piggoBreeds[i].value = pigBreeds_1.greyPigBreeds[i];
        }
        updateDefaultBreedValue();
        categoryExists = true;
        tdUniqueAttr.innerHTML = "Swimming";
        piggoUniqueAttribute.setAttribute("type", "range");
        piggoUniqueAttribute.setAttribute("min", "1");
        piggoUniqueAttribute.setAttribute("max", "100");
        showOutput.id = "showID";
        showOutput.innerHTML = "";
        tdUniqueAttr.parentElement.style.display = "table-row";
    }
    function updateRowForBlackPigs() {
        for (let i = 0; i < piggoBreeds.length; i++) {
            piggoBreeds[i].innerHTML = pigBreeds_1.blackPigBreeds[i];
            piggoBreeds[i].value = pigBreeds_1.blackPigBreeds[i];
        }
        updateDefaultBreedValue();
        categoryExists = true;
        tdUniqueAttr.innerHTML = "Strength";
        piggoUniqueAttribute.setAttribute("type", "range");
        piggoUniqueAttribute.setAttribute("min", "1");
        piggoUniqueAttribute.setAttribute("max", "10");
        showOutput.id = "showID";
        showOutput.innerHTML = "";
        tdUniqueAttr.parentElement.style.display = "table-row";
    }
    function disablingFalse() {
        if (nameExists && heightExists && weightExists && personalityExists && categoryExists && breedExists && uniquenessExists) {
            createButton.disabled = false;
        }
        else {
            createButton.disabled = true;
        }
    }
    return {
        setters: [
            function (piggoControllo_1_1) {
                piggoControllo_1 = piggoControllo_1_1;
            },
            function (piggiesClass_1_1) {
                piggiesClass_1 = piggiesClass_1_1;
            },
            function (pigBreeds_1_1) {
                pigBreeds_1 = pigBreeds_1_1;
            }
        ],
        execute: function () {
            nameExists = false;
            heightExists = false;
            weightExists = false;
            personalityExists = false;
            categoryExists = false;
            breedExists = false;
            uniquenessExists = false;
            additionForm = document.getElementById("additionForm");
            createButton = document.getElementById("create");
            deletePig = document.getElementsByClassName("rip");
            tdUniqueAttr = document.getElementById("uniqueAttributeText");
            myForm = document.getElementById("myForm");
            myTable = document.getElementById("bigT");
            pc = new piggoControllo_1.PigController();
            moreInfos = document.getElementsByClassName("mf");
            moreInfoDetails = document.getElementsByClassName("moreInfoDetails");
            showMoreTable = document.getElementsByName("showMoreDetailsTable")[0];
            piggoUniqueAttribute = document.getElementById("piggoUniqueAttribute");
            piggoBreeds = document.getElementsByClassName("optionVals");
            showOutput = piggoUniqueAttribute.nextElementSibling;
            document.getElementById("removeAllBtn").addEventListener('click', function () {
                myTable.innerHTML = "";
                pc.removeAll();
            });
            if (localStorage.length > 0) {
                updateTable();
            }
            document.getElementById("create").addEventListener('click', function () {
                updateLocalStorage();
                updateTable();
                resetEverything();
            });
            document.getElementById("addBtn").addEventListener('click', function () {
                additionForm.style.display = "block";
                document.getElementById("cancelBtn").style.display = "inline-block";
            });
            document.getElementById("cancelBtn").addEventListener('click', function () {
                resetEverything();
            });
            for (let i = 0; i < moreInfos.length; i++) {
                moreInfos[i].addEventListener('click', mfFxn, false);
            }
            for (let i = 0; i < deletePig.length; i++) {
                deletePig[i].addEventListener('click', delPigFxn, false);
            }
            document.getElementById("pigCategory").addEventListener("change", function (event) {
                const target = event.target;
                var piggoUniqueAttribute = document.getElementById("piggoUniqueAttribute");
                var showOutput = piggoUniqueAttribute.nextElementSibling;
                if (target.value === "cac") {
                    document.getElementById("piggoBreedRow").style.display = "none";
                    categoryExists = false;
                    tdUniqueAttr.parentElement.style.display = "none";
                    showOutput.id = "hideID";
                    showOutput.innerHTML = "";
                }
                else if (target.value === "White") {
                    document.getElementById("piggoBreedRow").style.display = "table-row";
                    updateRowForWhitePigs();
                }
                else if (target.value === "Chestnut") {
                    document.getElementById("piggoBreedRow").style.display = "table-row";
                    updateRowForChestnutPigs();
                }
                else if (target.value === "Grey") {
                    document.getElementById("piggoBreedRow").style.display = "table-row";
                    updateRowForGreyPigs();
                }
                else {
                    document.getElementById("piggoBreedRow").style.display = "table-row";
                    updateRowForBlackPigs();
                }
                disablingFalse();
            });
            document.getElementById("piggoName").addEventListener('change', function (event) {
                const target = event.target;
                if (target.value.length > 0) {
                    nameExists = true;
                }
                else {
                    nameExists = false;
                }
                disablingFalse();
            });
            document.getElementById("piggoHeight").addEventListener('change', function (event) {
                const target = event.target;
                if (target.value.length > 0) {
                    var num = parseInt(target.value);
                    if (num > 0) {
                        heightExists = true;
                    }
                    else {
                        alert("Please enter a number greater than 0.");
                        heightExists = false;
                    }
                }
                else {
                    heightExists = false;
                }
                disablingFalse();
            });
            document.getElementById("piggoWeight").addEventListener('change', function (event) {
                const target = event.target;
                if (target.value.length > 0) {
                    var num = parseInt(target.value);
                    if (num > 0) {
                        weightExists = true;
                    }
                    else {
                        alert("Please enter a number greater than 0.");
                        weightExists = false;
                    }
                }
                else {
                    weightExists = false;
                }
                disablingFalse();
            });
            document.getElementById("piggoPersonality").addEventListener('change', function (event) {
                const target = event.target;
                if (target.value.length > 0) {
                    personalityExists = true;
                }
                else {
                    personalityExists = false;
                }
                disablingFalse();
            });
            document.getElementById("breedInput").addEventListener('change', function (event) {
                const target = event.target;
                if (target.value != "cab") {
                    breedExists = true;
                    pigBreed = target.value;
                }
                else {
                    breedExists = false;
                }
                disablingFalse();
            });
            document.getElementById("piggoUniqueAttribute").addEventListener('change', function (event) {
                var piggoCategory = document.getElementById("pigCategory");
                const target = event.target;
                if (target.value.length > 0) {
                    if (piggoCategory.value === "Chestnut") {
                        if (isNaN(Number(target.value))) {
                            uniquenessExists = true;
                        }
                        else {
                            alert("Please enter a string");
                            uniquenessExists = false;
                        }
                    }
                    else {
                        uniquenessExists = true;
                    }
                }
                else {
                    uniquenessExists = false;
                }
                disablingFalse();
            });
        }
    };
});
