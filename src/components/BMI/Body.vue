<template>
    <div class="person-information">
        <label class="weight-name" for="weight">Weight</label>
        <input v-model="bmiData.personData.weight" class="weight-input" type="number" min="0" name="weight">
        <label class="weight-unit" for="weight">{{bmiData.unites.weightUnit}}</label>
        <br />
        <label class="height-name" for="weight">Height</label>
        <input v-model="bmiData.personData.height" class="height-input" type="number" min="0" name="height">
        <label class="height-unit" for="height">{{bmiData.unites.heightUnit}}</label>
        <br />
        <label v-if="bmiData.showElement" class="result-name hidden hidden-element" for="result">Result</label>
        <input v-if="bmiData.showElement" v-model="bmiData.result" class="result-input hidden hidden-element" type="text" name="result" disabled>
        <input v-if="bmiData.showElement" v-model="bmiData.conclusion" id="conclusion" class="conclusion-input hidden hidden-element" type="text" name="conclusion" disabled>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ["bmiData"], 
}
</script>

<style>
.person-information {
    position: relative;
}

.weight-name {
    width: 60px;
}

.weight-input {
    width: 130px;
    border-radius: 4px;
    margin-right: 20px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border: none;
}

.weight-input::placeholder {
    font-size: 13px;
}

.height-name {
    width: 60px;
}

.height-input {
    width: 130px;
    border-radius: 4px;
    margin-right: 20px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border: none;
}

.height-input::placeholder {
    font-size: 13px;
}

.result-name {
    width: 60px;
}

.result-input {
    width: 130px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border: none;
    margin-right: 15px;
    color: #fff;
}

.conclusion-input {
    width: 130px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border: none;
    color: #fff;
}
</style>