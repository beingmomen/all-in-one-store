<template>
    <div id="stored" class="stored">
        <div class='user-information' v-for="(item, i) in bmiData.dataStored" :key="i">
            <font-awesome-icon @click="deleteCard(i)" class="add-task delete" :icon="['fas', 'trash-alt']" size="2x"/>
            <h3 class='user-name'>{{item.name}}</h3>
            <p class='unit-type'>
                <span class="unit-type-system">System : </span>
                {{item.system}}
            </p>
            <p class='user-weight'>
                <span class="user-span-weight">Weight : </span>
                {{item.weight}}
            </p>
            <p class='user-height'>
                <span class="user-span-height">Height : </span>
                {{item.height}}
            </p>
            <p class='user-result'>
                <span class="user-span-result">result : </span>
                {{item.result}}
            </p>
            <p class='user-conclusion'>
                <span class="user-span-conclusion">conclusion : </span>
                {{item.conclusion}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["bmiData"],
    methods: {
        deleteCard(i) {
            let result = confirm("Sure To Delete ?")
            if (result) {
                this.$emit("deleteCard", i)
            }
            
        }
    }
}
</script>


<style>
.stored{
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 20px;
}

.user-information {
    position: relative;
    background-color: #581845;
    color: #fff;
    height: fit-content;
    width: 250px;
    padding: 15px 15px 0 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-right: 11px;
}

.delete {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #DAF7A6;
}

.user-name {
    text-align: center;
    color: #FF5733;
}


.user-information span {
    color: #DAF7A6;
}
</style>