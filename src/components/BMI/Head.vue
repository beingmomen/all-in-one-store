<template>
    <div>
        <div id="heading" class="heading">
            <h2 class="heading-title">System</h2>
            <input @change="chooseMetric" v-model="bmiData.type.name" id="metric" class="metric-input" type="radio" name="units" value="metric" />
            <label for="metric" class="metric-name">Metric</label>
            <input @change="chooseImperial" v-model="bmiData.type.name" id="imperial" class="imperial-input" type="radio" name="units" value="imperial" />
            <label for="imperial" class="imperial-name">Imperial</label>
        </div>
        <hr>
    </div>
</template> 
<script>
export default {
    props: ["bmiData"],
    methods: {
        chooseMetric() {
            if (this.bmiData.type.name = "metric") {
                this.bmiData.unites.heightUnit = "cm"
                this.bmiData.unites.weightUnit = "kg"
                this.bmiData.personData.weight = ""
                this.bmiData.personData.height = ""
            }
        },
        chooseImperial() {
            if (this.bmiData.type.name = "imperial") {
                this.bmiData.unites.heightUnit = "in"
                this.bmiData.unites.weightUnit = "lb"
                this.bmiData.personData.weight = ""
                this.bmiData.personData.height = ""
            }
        }
    }
}
</script>

<style>
.heading {
    display: flex;
    justify-content: space-between;
}

.heading-title {
    color: #FF5733;
    margin-top: 10px;
    margin-left: 15px;
    width: fit-content;
}

.heading input {
    margin-top: 27px;
    margin-right: -25px;
}

label {
    color: #DAF7A6;
    font-size: 20px;
    margin-top: 18px;
    margin-right: 15px;
}

.metric-name {
    margin-right: 10px;
}

hr {
    background-color: #900C3F !important;
    width: 90%;
    height: 1px !important;
    opacity: 1 !important;
    margin: 1rem auto !important;
}
</style>