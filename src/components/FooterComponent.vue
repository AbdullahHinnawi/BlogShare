<template>
    <footer id="custom-footer">
        <span class="mr-4">&copy; 2019 BlogShare</span>
        <span class="mr-4">Privacy</span>
        <span>Terms of Service</span>


    </footer>
    
</template>

<script>
  export default {
    name: 'FooterComponent',
  };
</script>

<style scoped>

    footer#custom-footer{
        height: 6rem;
        background-color: #373f46;

        font-size: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>