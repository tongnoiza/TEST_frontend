<template>
    <div>
    <h1>About page</h1>
    <NuxtLink to="/">Home page</NuxtLink>
    </div>
</template>

<script setup>
// definePageMeta({
//   middleware: 'auth'
// })
const store =  useCounterStore()
function inc(){
    store.increment() 
     console.log('ลองเล่นclone gg ',store.$state.count);
}

</script>



<style>


a {
    color: white !important;
    text-decoration: none;
    font-family: arial, sans-serif;
    /* float: right !important; */
    padding-left: 15px;
    display: inline-block;

}

.menu {
    float: right;
    padding-left: 32px;
    height: 60px;
    padding: 6px;
    color: white;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}</style>