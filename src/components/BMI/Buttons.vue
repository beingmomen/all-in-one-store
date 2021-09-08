<template>
    <div class="">
        <button @click.prevent="claculate" class="calculate" :class="{'full-width': fullWidth}">Calculate</button>
        <button @click.prevent="saveData" v-if="bmiData.showElement" class=" save btn-hidden">Save</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullWidth: true 
        }
    },
    props: ["bmiData"],
    methods: {
        claculate() {
            this.$emit("claculate")
            this.fullWidth = false
        },
        saveData() {
            this.$emit("saveData")
        }
    }
}
</script>

<style>
.calculate {
    width: 250px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    margin-top: 30px;
    /* margin-left: 15px; */
    margin-right: 10px;
    color: #900C3F;
    font-weight: bold;
}

.save {
    height: 40px;
    width: 100px;
    border: none;
    outline: none;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    color: #900C3F;
    font-weight: bold;
}

.full-width {
    width: 370px;
}
</style>