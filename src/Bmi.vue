<template>
  <div>
    <section class="bmi">
        <Form @claculate="claculate" @saveData="saveData" :bmiData="bmiData"/>
    </section>
    <DataStore @deleteCard="deleteCard" :bmiData="bmiData" />
  </div>
</template>

<script>
import Form from './components/BMI/Form.vue'
import DataStore from './components/BMI/DataStore.vue'
export default {
    data() {
        return {
            bmiData: {
                showElement: false,
                result: "",
                conclusion: "",
                dataStored: [],
                personData: {
                    weight: "",
                    height: ""
                },
                type: {
                    name: "metric"
                },
                unites: {
                    weightUnit: "kg",
                    heightUnit: "cm"
                },
                username: {
                    userInput: "",
                    userPut: ""
                },
            },
        }
    },
    components: {
        Form,
        DataStore
    },
    methods: {
        claculate() {
            this.bmiData.showElement = true

            if (this.bmiData.type.name == "metric") {
                this.bmiData.result = (this.bmiData.personData.weight / (this.bmiData.personData.height / 100) ** 2).toFixed(2)
            } else {
                this.bmiData.unites.weightUnit = "lb"
                this.bmiData.unites.heightUnit = "in"
                this.bmiData.result = (703 * this.bmiData.personData.weight / (this.bmiData.personData.height ** 2)).toFixed(2)
            }

            if(this.bmiData.result >= 16 && this.bmiData.result <= 18.5) {
                this.bmiData.conclusion = "Underweight"
            } else if (this.bmiData.result > 18.5 && this.bmiData.result <= 25) {
                this.bmiData.conclusion = "Normal"
            } else if (this.bmiData.result > 25 && this.bmiData.result <= 30) {
                this.bmiData.conclusion = "Overweight"
            } else {
                this.bmiData.conclusion = ""
            }
        },
        saveData() {
            this.bmiData.username.userPut = this.bmiData.username.userInput
            this.bmiData.dataStored.push
            ({
                name: this.bmiData.username.userInput,
                system: this.bmiData.type.name,
                weight: this.bmiData.personData.weight,
                height: this.bmiData.personData.height,
                result: this.bmiData.result,
                conclusion: this.bmiData.conclusion
            })
            this.bmiData.showElement = false
            this.bmiData.personData = {weight: "", height: ""}
            this.bmiData.username = {userInput: ""}
        },
        deleteCard(i) {
            this.bmiData.dataStored.splice(i, 1)
        }
    },
}
</script>

<style>
.bmi {
    margin: 50px auto;
    height: fit-content;
    padding-bottom: 30px;
    width: 400px;
    border: 1px solid #900C3F;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    box-shadow: 0px 0px 10px #000, 0px 0px 10px #000;
    background-color: #581845;
}
</style>